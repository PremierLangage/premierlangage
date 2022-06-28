#!/usr/bin/python3
# -*- coding: utf-8 -*-
import logging
import re
import yattag
import uuid
from pygiftparser import i18n
from pygiftparser import answer as pgans
from pygiftparser import utils

_ = i18n.language.gettext

logger = logging.getLogger(__name__)


# ########### Questions ################
class Question:
    """Question class.

    About rendering: It is up to you! But it mostly depends on the
    type of the answer set. Additionnally if it has a tail and the
    answerset is a ChoicesSet, it can be rendered as a "Missing word".

    """
    def __init__(self, source, full, cat):
        """ source of the question without comments and with comments"""
        self.id = uuid.uuid4()
        self.source = source
        self.full = full
        self.cat = cat
        self.valid = True
        self.tail = ''
        self.title = ''
        self.generalFeedback = ""
        self.parse(source)

    def getId(self):
        """ get Identifier for the question"""
        return 'Q'+str(id(self))  # TODO process title

    def parse(self, source):
        """ parses a question source. Comments should be removed first"""
        # split according to the answer
        match = utils.reAnswer.match(source)
        if not match:
            # it is a description
            self.answers = pgans.Description(self)
            self._parseHead(source)
        else:
            self.tail = utils.stripMatch(match, 'tail')
            self._parseHead(match.group('head'))
            self.generalFeedback = utils.stripMatch(match, 'generalfeedback')
            # replace \n
            self.generalFeedback = re.sub(r'\\n',
                                          '\n',
                                          self.generalFeedback)
            self._parseAnswer(match.group('answer'))

    def _parseHead(self, head):
        # finds the title and the type of the text
        match = utils.reTitle.match(head)
        if match:
            self.title = match.group('title').strip()
            textMarkup = match.group('text')
        else:
            # self.title = head[:20] # take 20 first chars as a title
            # Question Title par défault
            logger.warning(utils.DEFAULT_TITLE + "%s", self.title)
            textMarkup = head

        match = utils.reMarkup.match(textMarkup)
        if match:
            self.markup = match.group('markup').lower()
            self.text = match.group('text').strip()
        else:
            self.markup = 'markdown'
            self.text = textMarkup.strip()
        # replace \n
        self.text = re.sub(r'\\n', '\n', self.text)

    def _parseNumericText(self, text):
        m = utils.reAnswerNumericInterval.match(text)
        if m:
            a = pgans.NumericAnswerMinMax(m)
        else:
            m = utils.reAnswerNumericValue.match(text)
            if m:
                a = pgans.NumericAnswer(m)
            else:
                self.valid = False
                return None
        a.feedback = utils.stripMatch(m, "feedback")
        return a

    def _parseNumericAnswers(self, answer):
        self.numeric = True
        answers = []
        for match in utils.reAnswerMultipleChoices.finditer(answer):
            a = self._parseNumericText(match.group('answer'))
            if not a:
                return
            # fractions
            if match.group('fraction'):
                a.fraction = float(match.group('fraction'))
            else:
                if match.group('sign') == "=":
                    a.fraction = 100
                else:
                    a.fraction = 0
            a.feedback = utils.stripMatch(match, "feedback")
            answers.append(a)
        if len(answers) == 0:
            a = self._parseNumericText(answer)
            if a:
                a.fraction = 100
                answers.append(a)
        self.answers = pgans.NumericAnswerSet(self, answers)

    def _parseAnswer(self, answer):
        # Essay
        if answer == '':
            self.answers = pgans.Essay(self)
            return

        # True False
        match = utils.reAnswerTrueFalse.match(answer)
        if match:
            self.answers = pgans.TrueFalseSet(self, match)
            return

        # Numeric answer
        if utils.reAnswerNumeric.match(answer) is not None:
            self._parseNumericAnswers(answer[1:])
            return

        # answers with choices and short answers
        answers = []
        select = False
        short = True
        matching = True
        for match in utils.reAnswerMultipleChoices.finditer(answer):
            a = pgans.AnswerInList(match)
            # one = sign is a select question
            if a.select:
                select = True
            # short answers are only = signs without fractions
            short = short and a.select and a.fraction == 100
            matching = matching and short and a.isMatching
            answers.append(a)

        if len(answers) > 0:
            if matching:
                self.answers = pgans.MatchingSet(self, answers)
                self.valid = self.answers.checkValidity()
            elif short:
                self.answers = pgans.ShortSet(self, answers)
            elif select:
                self.answers = pgans.SelectSet(self, answers)
            else:
                self.answers = pgans.MultipleChoicesSet(self, answers)
                self.valid = self.answers.checkValidity()
        else:
            # not a valid question  ?
            logger.warning(utils.INVALID_FORMAT_QUESTION+' '+self.full)
            self.valid = False

    def toHTML(self, doc=None, feedbacks=False):
        """ produces an HTML fragment,
        feedbacks controls the output of feedbacks"""
        if not self.valid:
            return ''
        if doc is None:
            doc = yattag.Doc()
        doc.asis('\n')
        doc.asis('<!-- New question -->')
        with doc.tag('form', klass='question'):
            with doc.tag('h3', klass='questiontitle'):
                doc.text(self.title)
            if (not feedbacks):
                if self.tail != '':
                    with doc.tag('span', klass='questionTextInline'):
                        doc.asis(utils.markupRendering(self.text,
                                                       self.markup))
                    with doc.tag('span', klass='questionAnswersInline'):
                        self.answers.toHTML(doc)
                    doc.text(' ')
                    doc.asis(utils.markupRendering(self.tail,
                                                   self.markup))
                else:
                    with doc.tag('div', klass='questiontext'):
                        doc.asis(utils.markupRendering(self.text,
                                                       self.markup))
                    self.answers.toHTML(doc)
            if feedbacks:
                with doc.tag('div', klass='questiontext'):
                    doc.asis(utils.markupRendering(self.text,
                                                   self.markup))
                self.answers.toHTMLFB(doc)
                if self.generalFeedback != '':
                    with doc.tag('div', klass='global_feedback'):
                        doc.asis('<b><em>Feedback:</em></b><br/>')
                        doc.asis(utils.markupRendering(self.generalFeedback,
                                                       self.markup))
        return doc

    def myprint(self):
        print("=========Question=========")
        if not self.valid:
            return
        print(self.answers.__class__)
        for key, val in self.__dict__.items():
            if key in ['full', 'source', "answer", "valid"]:
                continue
            if key == 'answers':
                self.answers.myprint()
            else:
                print(key, ':', val)
