import os
import shutil
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
        f.write("extends = /gift/templates/qtruefalse.pl \n\n")
        f.write("answer % " + str(self.answers.answer).lower() + "\n\n")
        f.write("feedbackCorrect==\n" + self.answers.feedbackCorrect + "\n==\n")
        f.write("feedbackWrong==\n" + self.answers.feedbackWrong + "\n==\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")


class SelectSetGenerator:
    """ One  choice in a answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.SelectSet = question.answers

    def generate(self, f):
        f.write("extends = /gift/templates/qselectset.pl\n\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")
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
        f.write("extends = /gift/templates/qmatch.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")
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
        f.write("extends = /gift/templates/qessay.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")


class NumericAnswerSetGenerator:
    """ Numeric answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.NumericAnswerSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /gift/templates/qnumericset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers:
            # two type of numeric answer
            lst = dir(e)
            if "maxi" in lst:
                #  min <= value >= max
                f.write("/"+str(e.fraction) + "->" + e.mini + "-> " + e.maxi +"#"+ e.feedback + "\n\n")
            if "tolerance" in lst:
                # value -tolerance <=  value >= value + tolerance
                f.write(":" + str(e.fraction) + "->" + str(e.value) +
                        "->" + str(e.tolerance) +"#"+ e.feedback + "\n\n")
        f.write("== \n")


class ShortSetGenerator:
    """ A single answer is expected but several solutions are possible """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.ShortSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /gift/templates/qshortset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")
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
        f.write("extends = /gift/templates/qmultichoice.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("feedbackGeneral==\n" + self.question.generalFeedback + "\n==\n")
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


class Parser:

    GENERATORS = {
        answer.TrueFalseSet.__name__: TrueFalseSetGenerator,

        answer.MultipleChoicesSet.__name__: MultipleChoicesSetGenerator,
        answer.MatchingSet.__name__: MatchingSetGenerator,
        answer.NumericAnswerSet.__name__: NumericAnswerSetGenerator,
        answer.Essay.__name__: EssaySetGenerator,  # n'importe quoi attendu

        answer.ShortSet.__name__: ShortSetGenerator,
        answer.SelectSet.__name__: SelectSetGenerator
    }

    def __init__(self, directory, path):
        self.directory = directory
        self.relpath = path
        self.abspath = os.path.join(directory.root, path)


    def create_exercises(self):
        exercises = {}
        with open(self.abspath, 'r') as f:
            questions: List[question.Question] = parser.parseFile(f)
            q: question.Question
            for q in questions:
                if q.valid:
                    name = q.answers.__class__.__name__
                    if name in self.GENERATORS:
                        with (StringIO()) as io:
                            self.GENERATORS[name](q).generate(io)
                            exercises[q.title] = io.getvalue()
        return exercises


    def parse(self):
        filename = os.path.basename(
            self.abspath
        ).replace('.gift', '')
        inpdir = os.path.dirname(self.abspath)
        outdir = os.path.join(
            inpdir,
            filename,
        )

        if os.path.exists(outdir):
            shutil.rmtree(outdir)
        os.mkdir(outdir)

        exercises = self.create_exercises()

        pltp = []
        
        # generate pl files inside a subdir relative to the gift file
        for i, v in enumerate(exercises.values()):
            pltp.append(f'@ {filename}/Q{i + 1}.pl')
            with open(os.path.join(outdir, f'Q{i + 1}.pl'), 'w') as f:
                f.write(v)
        
        # path to the generated pltp file
        path = os.path.join(
            os.path.dirname(self.relpath),
            filename + '.pltp'
        )

        title = 'TYPE YOUR TITLE HERE'
        author = 'TYPE YOUR NAME HERE'
        intro = 'TYPE YOUR INTRO TEXT HERE'
        if os.path.exists(os.path.join(self.directory.root, path)):
            parser = ParserPLTP(self.directory, path)
            dic, _ = parser.parse()
            title = dic.get('title', title)
            author = dic.get('author', author)
            intro = dic.get('introduction', intro)

        pltp = [
            'title==\n' + title + '\n==',
            'author==\n' + author + '\n==',
            'introduction==\n' + intro + '\n=='
        ] + pltp
        
        # generate pltp aside of the gift file
        with open(os.path.join(inpdir, filename + '.pltp'), 'w') as f:
            f.write('\n'.join(pltp))

        parser = ParserPLTP(self.directory, path)
        return parser.parse()


def get_parser():
    """ Used to dynamicaly add parser to the loader. """
    return {
        'ext':    ['.gift'],
        'parser': Parser,
        'type':   'gift'
    }
