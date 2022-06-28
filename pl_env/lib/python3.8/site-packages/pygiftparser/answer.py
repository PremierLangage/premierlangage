#!/usr/bin/python3
# -*- coding: utf-8 -*-
import random
from pygiftparser import i18n
from pygiftparser.utils import stripMatch, markupRendering, reMatch

_ = i18n.language.gettext

# ############ Sets of answers ###############
# Can be a singleton, empty or not or just the emptyset!


class AnswerSet:
    """
    Abstract class to object Answer in Question Class

    :param question: The question where is stored the type of the answer
    :type question: Question
    """
    def __init__(self, question):
        self.question = question
        self.valid = True

    def myprint(self):
        """
        return a print of this class
        """
        print(self.__class__)

    def toHTML(self, doc):
        """
        Return the HTML format of the Answer

        :param doc: Doc where is write the HTML
        :type doc: Yattag.Doc
        """
        pass

    def toHTMLFB(self, doc):
        """
        Same that toHTML but with feedback

        :param doc: Doc where is write the HTML
        :type doc: Yattag.Doc
        """
        pass


class Essay(AnswerSet):
    """Essay Answer : This Class represents the type of Answer with a free
    area text
    """
    def __init__(self, question):
        AnswerSet.__init__(self, question)

    def toHTML(self, doc):
        with doc.tag('textarea',
                     name=self.question.getId(),
                     placeholder=_('Your answer here')):
            doc.text('')


class Description(AnswerSet):
    """ Emptyset, nothing!"""
    def __init__(self, question):
        AnswerSet.__init__(self, question)

    def toHTML(self, doc):
        return

    def toHTMLFB(self, doc):
        return


class TrueFalseSet(AnswerSet):
    """ True or False Answer :
         - answer store the boolean for the answer
         - feedbackWrong : feedback when the user's response is false
         - feedbackTrue : feedback when the user's response is good

        :param match: match regex with the text of question
        :type match: re.match
    """
    # Q: should I introduce Answer variables?
    def __init__(self, question, match):
        AnswerSet.__init__(self, question)
        self.answer = match.group('answer').startswith('T')
        self.feedbackWrong = stripMatch(match, "feedback")
        self.feedbackCorrect = stripMatch(match, "feedback2")
        self.cc_profile = 'TRUEFALSE'

    def myprint(self):
        print(">TrueFalse:",
              self.answer,
              "--",
              self.feedbackWrong,
              "--",
              self.feedbackCorrect)

    def toHTML(self, doc):
        with doc.tag('ul'):
            with doc.tag('li'):
                doc.input(name=self.question.getId(),
                          type='radio',
                          value=True)
                doc.text(_('True'))
            with doc.tag('li'):
                doc.input(name=self.question.getId(),
                          type='radio',
                          value=False)
                doc.text(_('False'))

    def toHTMLFB(self, doc):
        with doc.tag('div', klass='answerFeedback'):
            doc.text(self.answer)
        if self.feedbackCorrect:
            with doc.tag('div', klass='correct_answer'):
                doc.asis(markupRendering(self.feedbackCorrect,
                                         self.question.markup))
        if self.feedbackWrong:
            with doc.tag('div', klass='wrong_answer'):
                doc.asis(markupRendering(self.feedbackWrong,
                                         self.question.markup))


class NumericAnswerSet(AnswerSet):
    """Type NumericAnswer where is stored the list of differents
        numerical answers
    """
    def __init__(self, question, answers):
        AnswerSet.__init__(self, question)
        self.answers = answers

    def toHTML(self, doc):
        doc.input(name=self.question.getId(),
                  type='number',
                  step="any")

    def toHTMLFB(self, doc):
        with doc.tag('div',
                     klass='answerFeedback'):
            with doc.tag('ul'):
                for a in self.answers:
                    if a.fraction > 0:
                        aklass = "right_answer"
                    else:
                        aklass = "wrong_answer"
                    with doc.tag('li', klass=aklass):
                        doc.asis(a.toHTMLFB())
                        if a.feedback:
                            doc.asis(" &#8669; "
                                     + markupRendering(a.feedback,
                                                       self.question.markup))


class MatchingSet(AnswerSet):
    """  a mapping (list of pairs) """
    def __init__(self, question, answers):
        AnswerSet.__init__(self, question)
        self.answers = answers
        self.possibleAnswers = [a.answer for a in self.answers]

    def checkValidity(self):
        valid = True
        for a in self.answers:
            valid = valid and a.isMatching
        return valid

    def myprint(self):
        print("Answers :")
        for a in self.answers:
            a.myprint()
            print('~~~~~')

    def toHTML(self, doc):
        with doc.tag('table'):
            for a in self.answers:
                with doc.tag('tr'):
                    with doc.tag('td'):
                        doc.text(a.question+" ")
                    with doc.tag('td'):
                        # should be distinct to _charset_ and isindex,...
                        n = self.question.getId() + a.question
                        with doc.tag('select', name=n):
                            random.shuffle(self.possibleAnswers)
                            for a in self.possibleAnswers:
                                with doc.tag('option'):
                                    doc.text(" "+a)

    def toHTMLFB(self, doc):
        with doc.tag('div', klass='groupedAnswerFeedback'):
            with doc.tag('ul'):
                for a in self.answers:
                    with doc.tag('li', klass="right_answer"):
                        doc.text(a.question)
                        doc.asis(" &#8669; ")
                        doc.text(a.answer)


class ChoicesSet(AnswerSet):
    """ One or many choices in a list (Abstract)"""
    def __init__(self, question, answers):
        AnswerSet.__init__(self, question)
        self.answers = answers

    def myprint(self):
        print("Answers :")
        for a in self.answers:
            a.myprint()
            print('~~~~~')


class ShortSet(ChoicesSet):
    """ A single answer is expected but several solutions are possible """
    def __init__(self, question, answers):
        ChoicesSet.__init__(self, question, answers)

    def toHTML(self, doc):
        doc.input(name=self.question.getId(),
                  type='text')

    def toHTMLFB(self, doc):
        with doc.tag('div', klass='groupedAnswerFeedback'):
            with doc.tag('ul'):
                for a in self.answers:
                    with doc.tag('li', klass="right_answer"):
                        doc.text(a.answer)
                        if a.feedback:
                            doc.asis(" &#8669; "
                                     + markupRendering(a.feedback,
                                                       self.question.markup))


class SelectSet(ChoicesSet):
    """ One  choice in a list"""
    def __init__(self, question, answers):
        ChoicesSet.__init__(self, question, answers)

    def toHTML(self, doc):
        with doc.tag('div', klass='groupedAnswer'):
            with doc.tag("ul", klass='multichoice'):
                for a in self.answers:
                    with doc.tag("li"):
                        doc.input(name="name", type='radio')
                        doc.asis(markupRendering(a.answer,
                                                 self.question.markup))

    def toHTMLFB(self, doc):
        with doc.tag('div', klass='groupedAnswerFeedback'):
            with doc.tag("ul", klass='multichoice'):
                for a in self.answers:
                    if a.fraction > 0:
                        aklass = "right_answer"
                    else:
                        aklass = "wrong_answer"
                    with doc.tag('li', klass=aklass):
                        doc.asis(markupRendering(a.answer,
                                                 self.question.markup))
                        if a.feedback:
                            doc.asis(" &#8669; "
                                     + markupRendering(a.feedback,
                                                       self.question.markup))


class MultipleChoicesSet(ChoicesSet):
    """ One or more choices in a list"""
    def __init__(self, question, answers):
        ChoicesSet.__init__(self, question, answers)

    def checkValidity(self):
        """ Check validity the sum f fractions should be 100 """
        total = sum([a.fraction for a in self.answers if a.fraction > 0])
        return total >= 99 and total <= 100

    def toHTML(self, doc):
        with doc.tag('div', klass='groupedAnswer'):
            with doc.tag('ul', klass='multianswer'):
                for a in self.answers:
                    with doc.tag('li'):
                        doc.input(name=self.question.getId(),
                                  type='checkbox')
                        doc.asis(markupRendering(a.answer,
                                                 self.question.markup))

    def toHTMLFB(self, doc):
        with doc.tag('div', klass='groupedAnswerFeedback'):
            with doc.tag('ul', klass='multianswer'):
                for a in self.answers:
                    if a.fraction > 0:
                        aklass = "right_answer"
                    else:
                        aklass = "wrong_answer"
                    with doc.tag('li', klass=aklass):
                        doc.asis(markupRendering(a.answer,
                                                 self.question.markup))
                        if a.feedback:
                            doc.asis(" &#8669; "
                                     + markupRendering(a.feedback,
                                                       self.question.markup))


# ################ Single answer ######################
class Answer:
    """ one answer in a list, use in AnswerSet"""
    pass


class NumericAnswer(Answer):
    def __init__(self, match):
        self.value = float(match.group('value'))
        if match.group('tolerance'):
            self.tolerance = float(match.group('tolerance'))
        else:
            self.tolerance = 0

    def toHTMLFB(self):
        return str(self.value)+"&#177;"+str(self.tolerance)


class NumericAnswerMinMax(Answer):
    def __init__(self, match):
        self.mini = match.group('min')
        self.maxi = match.group('max')

    def toHTMLFB(self):
        return _('Between')+" "+str(self.mini)+" "+_('and')+" "+str(self.maxi)


class AnswerInList(Answer):
    """ one answer in a list"""
    def __init__(self, match):
        if not match:
            return
        self.answer = match.group('answer').strip()
        self.feedback = stripMatch(match, "feedback")
        # At least one = sign => selects (radio buttons)
        self.select = match.group('sign') == "="

        # fractions
        if match.group('fraction'):
            self.fraction = float(match.group('fraction'))
        else:
            if match.group('sign') == "=":
                self.fraction = 100
            else:
                self.fraction = 0

        # matching
        match = reMatch.match(self.answer)
        self.isMatching = match is not None
        if self.isMatching:
            self.answer = match.group('answer')
            self.question = match.group('question')

    def myprint(self):
        for key, val in self.__dict__.items():
            print('>', key, ':', val)
