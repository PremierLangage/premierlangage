from pygiftparser import parser
from pygiftparser import answer, question
import os
from io import StringIO
import traceback

class TrueFalseSetGenerator:
    """ True or False answer :"""
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.TrueFalseSet = question.answers

    def generate(self ,f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qtruefalse.pl \n\n")
        f.write("answer % " + str(self.answers.answer).lower() + "\n\n")
        f.write("feedbackCorrect==\n" + self.answers.feedbackCorrect + "\n==\n")
        f.write("feedbackWrong==\n" + self.answers.feedbackWrong + "\n==\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        return  0

class SelectSetGenerator:
    """ One  choice in a answer : """
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.SelectSet = question.answers
        
    def generate(self,f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/qselectset.pl\n\n")
        f.write("title==\n" + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices==\n")
        for e in self.answers.answers :
           
            if e.select == True :
                # answer is true
                f.write("=%" + str(e.fraction) + "%" + e.answer)
            else :
                # answer is false  
                f.write("~%" + str(e.fraction) + "%" + e.answer)       
            if e.feedback != "" :
                # message after the answer
                f.write(" #" + e.feedback)
            f.write("\n")
        f.write("==")
        return  0
        
class MatchingSetGenerator:
    """ A mapping (list of pairs) """
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MatchingSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        error  = 0
        for e in self.answers.answers :
            # test if the answer are not empty
            if  e.question == ""  or   e.answer == "" :
                print("réponse vide incorrect")
                error = error + 1
        if error == 0 :
            f.write("title==\n " + self.question.title + "\n==\n")
            f.write("text==\n" + self.question.text + "\n==\n")
            f.write("choices== \n")
            for e in self.answers.answers :
                f.write("=" + e.question + "->" + e.answer)
                if e.feedback != "" :
                    f.write(" #" + e.feedback)
                f.write("\n")
            f.write("\n==")
        return error
    
class EssaySetGenerator:
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.Essay = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/essay.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        print("essai")
        return  0

class NumericAnswerSetGenerator:
    """ Numeric answer : """
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.NumericAnswerSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/numericanswer.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers :
            # two type of numeric answer 
            lst = dir(e) 
            if "maxi" in lst :
                #  min <= value >= max 
                f.write("/"+str(e.fraction) + "->" + e.mini + "-> " + e.maxi  + "\n\n")
            if "tolerance" in lst :
                # value -tolerance <=  value >= value + tolerance 
                f.write(":"+ str(e.fraction) + "->" + str(e.value) + "->" + str(e.tolerance) + "\n\n")
        f.write("== \n")
        print("numeric")  
        return  0

class ShortSetGenerator:
    """ A single answer is expected but several solutions are possible """
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.ShortSet = question.answers


    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/shortset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers :
            f.write("=" +  e.answer + "#")
            f.write(e.feedback)
            f.write("\n")
        f.write("== \n")
        print("shortset")
        return 0

class MultipleChoicesSetGenerator:
    """ One or more choices in a list"""
    def __init__(self, question: question.Question):
        self.question = question
        self.answers: answer.MultipleChoicesSet = question.answers

    def generate(self, f):
        """ generate a pl file who contain information about the question """
        f.write("extends = /components/templates/multichoicesset.pl\n\n")
        f.write("title==\n " + self.question.title + "\n==\n")
        f.write("text==\n" + self.question.text + "\n==\n")
        f.write("choices== \n")
        for e in self.answers.answers :
            if e.fraction > 0  :
                f.write("=%" + str(e.fraction) + "%" + e.answer)
            else :
                # answer is false 
                f.write("~%" + str(e.fraction) + "%" + e.answer)  
            f.write(" # ")
            if e.feedback != "" :
                f.write(e.feedback)
            f.write("\n")
        f.write("==") 

        return 0
    
class GiftParser:

    def parse(self, code: str) -> str:
        io = None
        GENERATORS = {
            answer.TrueFalseSet.__name__: TrueFalseSetGenerator,
            answer.MultipleChoicesSet.__name__ : MultipleChoicesSetGenerator,#MultipleChoicesSet plusieurs choix possible
            answer.MatchingSet.__name__: MatchingSetGenerator,
            answer.NumericAnswerSet.__name__ : NumericAnswerSetGenerator, 
            answer.Essay.__name__: EssaySetGenerator, # n'importe quoi attendu
            answer.ShortSet.__name__: ShortSetGenerator , # une seule réponse attendu mais plusieurs possible donc que des = dans la réponse
            answer.SelectSet.__name__: SelectSetGenerator
        }

        codes = []
        try:
            io = StringIO(code)
            questions =  parser.parseFile(io)
            compteur = 0
            for question in questions:
                if question.valid:
                    try:
                        f = StringIO()
                        typ = question.answers.__class__.__name__
                        if typ in GENERATORS:
                            generator = GENERATORS[typ](question)
                            if generator.generate(f) == 0:
                                codes.append(f.getvalue())
                    except Exception as e:
                        traceback.print_exc()
                    finally:
                        f.close()
        finally:
            io.close()
        return codes
