import os
import shutil
from io import StringIO
from typing import List

from pygiftparser import answer, parser, question

from loader.parsers.pltp import Parser as ParserPLTP
from loader.exceptions import SyntaxErrorGift


class Writer:

    @staticmethod
    def write_header(f: StringIO, q: question.Question, template: str):
        f.write(f"extends = /gift/templates/{template}.pl\n\n")
        f.write("title==\n" + q.title + "\n==\n\n")
        if q.tail and q.tail.strip() != '.':
            f.write("text==\n" + q.text + " <b>_____</b> " + q.tail + "\n==\n\n")
        else:
            f.write("text==\n" + q.text + "\n==\n\n")
        if q.generalFeedback:
            f.write("general_feedback==\n" + q.generalFeedback + "\n==\n\n")


class TrueFalseSetGenerator:
    """ True or False answer :"""

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.TrueFalseSet = question.answers

    def generate(self, f):
        Writer.write_header(f, self.question, 'qtruefalse')

        f.write("# Expected answer (T or F)\n")
        f.write("answer = " + str(self.answers.answer)[0] + "\n\n")

        f.write("# Feedback shown when the student gives the right answer\n")
        f.write("feedback_correct==\n")
        if self.answers.feedbackCorrect:
            f.write(self.answers.feedbackCorrect)
            f.write("\n")
        f.write("==\n\n")

        f.write("# Feedback shown when the student gives the wrong answer\n")
        f.write("feedback_wrong==\n")
        if self.answers.feedbackWrong:
            f.write(self.answers.feedbackWrong)
            f.write("\n")
        f.write("==\n\n")


class SelectSetGenerator:
    """ One  choice in a answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.SelectSet = question.answers

    def generate(self, f: StringIO):
        Writer.write_header(f, self.question, 'qselectset')
        f.write("choices==\n")
        for e in self.answers.answers:
            if e.select is True:
                f.write("=" + e.answer)
            else:
                f.write("~" + e.answer)
            if e.feedback:
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("==\n")


class MatchingSetGenerator:
    """ A mapping (list of pairs) """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MatchingSet = question.answers

    def generate(self, f):
        # for e in self.answers.answers:
        #     if e.question == "" or e.answer == "":
        #         print("SyntaxError"
        Writer.write_header(f, self.question, 'qmatch')
        f.write("choices==\n")
        for e in self.answers.answers:
            f.write("=" + e.question + "->" + e.answer)
            if e.feedback:
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("\n==")


class EssayGenerator:

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.Essay = question.answers

    def generate(self, f):
        Writer.write_header(f, self.question, 'qessay')


class NumericAnswerSetGenerator:
    """ Numeric answer : """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.NumericAnswerSet = question.answers

    def generate(self, f):
        Writer.write_header(f, self.question, 'qnumericset')
        f.write("choices==\n")
        for e in self.answers.answers:
            if e.fraction != 100:
                f.write("%" + str(e.fraction) + "%")
            # range mode
            if isinstance(e, answer.NumericAnswerMinMax):
                #  min <= value >= max
                f.write(e.mini + ".." + e.maxi)
            # margin mode
            else:
                # value - tolerance <=  value >= value + tolerance
                f.write(str(e.value) + ":" + str(e.tolerance))
            if e.feedback:
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("== \n")


class ShortSetGenerator:
    """ A single answer is expected but several solutions are possible """

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.ShortSet = question.answers

    def generate(self, f):
        Writer.write_header(f, self.question, 'qshortset')
        f.write("choices==\n")
        for e in self.answers.answers:
            f.write("=" + e.answer)
            if e.feedback:
                f.write(' #' + e.feedback)
            f.write("\n")
        f.write("== \n")


class MultipleChoicesSetGenerator:
    """ One or more choices in a list"""

    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MultipleChoicesSet = question.answers

    def generate(self, f):
        Writer.write_header(f, self.question, 'qmultichoice')
        f.write("choices==\n")
        for e in self.answers.answers:
            f.write("%" + str(e.fraction) + "%" + e.answer)
            if e.feedback:
                f.write(" # " + e.feedback)
            f.write("\n")
        f.write("==")


class Parser:

    GENERATORS = {
        answer.TrueFalseSet.__name__:       TrueFalseSetGenerator,

        answer.MultipleChoicesSet.__name__: MultipleChoicesSetGenerator,
        answer.MatchingSet.__name__:        MatchingSetGenerator,
        answer.NumericAnswerSet.__name__:   NumericAnswerSetGenerator,
        answer.ShortSet.__name__:           ShortSetGenerator,
        answer.SelectSet.__name__:          SelectSetGenerator,
        answer.Essay.__name__:              EssayGenerator
    }

    def __init__(self, directory, path):
        self.directory = directory
        self.relpath = path
        self.abspath = os.path.join(directory.root, path)

    def create_exercises(self):
        exercises = []
        warnings = []
        with open(self.abspath, 'r') as f:
            questions: List[question.Question] = parser.parseFile(f)
            q: question.Question
            for i, q in enumerate(questions):
                if not q.title:
                    q.title = f'Q{i + 1}'
                    warnings.append(str(SyntaxErrorGift(
                        os.path.join(self.directory.name, self.relpath),
                        q.source,
                        i + 1,
                        f"You did not specify a question title"
                    )))
                if q.valid:
                    name = q.answers.__class__.__name__
                    if name in self.GENERATORS:
                        with (StringIO()) as io:
                            self.GENERATORS[name](q).generate(io)
                            exercises.append(io.getvalue())
                else:
                    warnings.append(str(SyntaxErrorGift(
                        os.path.join(self.directory.name, self.relpath),
                        q.source,
                        i + 1
                    )))
        return exercises, warnings

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

        exercises, warnings = self.create_exercises()
        pltp = []

        # generate pl files inside a subdir relative to the gift file
        for i, v in enumerate(exercises):
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
            try:
                parser = ParserPLTP(self.directory, path)
                dic, _ = parser.parse()
                title = dic.get('title', title)
                author = dic.get('author', author)
                intro = dic.get('introduction', intro)
            except Exception:
                pass

        pltp = [
            'title==\n' + title + '\n==',
            'author==\n' + author + '\n==',
            'introduction==\n' + intro + '\n=='
        ] + pltp

        # generate pltp aside of the gift file
        with open(os.path.join(inpdir, filename + '.pltp'), 'w') as f:
            f.write('\n'.join(pltp))

        parser = ParserPLTP(self.directory, path)
        dic, warn = parser.parse()
        return dic, warnings + warn


def get_parser():
    """ Used to dynamicaly add parser to the loader. """
    return {
        'ext':    ['.gift'],
        'parser': Parser,
        'type':   'gift'
    }
