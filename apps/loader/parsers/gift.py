import os
import uuid
from io import StringIO
from typing import List

from pygiftparser import answer, parser, question

from loader.parsers.pltp import Parser as ParserPLTP


class TrueFalseSetGenerator:
    """ True or False answer :"""

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.TrueFalseSet = question.answers

    def generate(self, f):
        f.write("extends = /components/templates/qtruefalse.pl \n\n")
        f.write("answer % " + str(self.answers.answer).lower() + "\n\n")
        f.write("feedbackCorrect==\n" + self.answers.feedbackCorrect + "\n==\n")
        f.write("feedbackWrong==\n" + self.answers.feedbackWrong + "\n==\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")


class SelectSetGenerator:
    """ One  choice in a answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.SelectSet = question.answers

    def generate(self, f):
        f.write("extends = /components/templates/qselectset.pl\n\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices==\n")
        for e in self.answers.answers:
            if e.select is True:
                f.write("=%" + str(e.fraction) + "%" + e.answer)
            else:
                f.write("~%" + str(e.fraction) + "%" + e.answer)
            if e.feedback != "":
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("==")


class MatchingSetGenerator:
    """ A mapping (list of pairs) """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MatchingSet = question.answers

    def generate(self, f):
        # for e in self.answers.answers:
        #     if e.question == "" or e.answer == "":
        #         print("SyntaxError")
        f.write("extends = /components/templates/qmatch.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers:
            f.write("=" + e.question + "->" + e.answer)
            if e.feedback != "":
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("\n==")


class EssaySetGenerator:
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.Essay = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qessay.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")


class NumericAnswerSetGenerator:
    """ Numeric answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.NumericAnswerSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qnumericset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers:
            # two type of numeric answer
            lst = dir(e)
            if "maxi" in lst:
                #  min <= value >= max
                f.write("/"+str(e.fraction) + "->" + e.mini + "-> " + e.maxi + "\n\n")
            if "tolerance" in lst:
                # value -tolerance <=  value >= value + tolerance
                f.write(":" + str(e.fraction) + "->" + str(e.value) +
                        "->" + str(e.tolerance) + "\n\n")
        f.write("== \n")


class ShortSetGenerator:
    """ A single answer is expected but several solutions are possible """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.ShortSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qshortset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers:
            f.write("=" + e.answer + "#")
            f.write(e.feedback)
            f.write("\n")
        f.write("== \n")


class MultipleChoicesSetGenerator:
    """ One or more choices in a list"""

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MultipleChoicesSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qmultichoice.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers:
            if e.fraction > 0:
                f.write("=%" + str(e.fraction) + "%" + e.answer)
            else:
                # answer is false
                f.write("~%" + str(e.fraction) + "%" + e.answer)
            f.write(" # ")
            if e.feedback != "":
                f.write(e.feedback)
            f.write("\n")
        f.write("==")


class Parser(ParserPLTP):

    GENERATORS = {
        answer.TrueFalseSet.__name__: TrueFalseSetGenerator,

        answer.MultipleChoicesSet.__name__: MultipleChoicesSetGenerator,
        answer.MatchingSet.__name__: MatchingSetGenerator,
        answer.NumericAnswerSet.__name__: NumericAnswerSetGenerator,
        answer.Essay.__name__: EssaySetGenerator,  # n'importe quoi attendu

        answer.ShortSet.__name__: ShortSetGenerator,
        answer.SelectSet.__name__: SelectSetGenerator
    }

    def create_exercises(self):
        exercises = {}
        content = ''
        with open(self.path_parsed_file, 'r') as f:
            content = f.read()
            f.seek(0)
            questions: List[question.Question] = parser.parseFile(f)
            q: question.Question
            for q in questions:
                if q.valid:
                    name = q.answers.__class__.__name__
                    if name in self.GENERATORS:
                        with (StringIO()) as io:
                            self.GENERATORS[name](q).generate(io)
                            exercises[q.title] = io.getvalue()
        return content, exercises

    def parse(self):
        dirpath = os.path.dirname(self.path_parsed_file)
        dirpath = os.path.join(dirpath, str(uuid.uuid4()))
        dirname = os.path.basename(dirpath)
        os.mkdir(dirpath)
        content = None
        try:
            content, exercises = self.create_exercises()
            pltp = [
                'title=Title',
                'author=Author',
                'introduction=Introduction'
            ]
            for i, v in enumerate(exercises.values()):
                path = os.path.join(dirpath, f'Q{i}.pl')
                pltp.append(f'@ {dirname}/Q{i}.pl')
                with open(path, 'w') as f:
                    f.write(v)
            with open(self.path_parsed_file, 'w') as f:
                f.write('\n'.join(pltp))
                print('\n'.join(pltp))
            return super().parse()

        finally:
            if content:
                with open(self.path_parsed_file, 'w') as f:
                    f.write(content)
            os.rmdir(dirpath)


def get_parser():
    """ Used to dynamicaly add parser to the loader. """
    return {
        'ext':    ['.gift'],
        'parser': Parser,
        'type':   'gift'
    }
