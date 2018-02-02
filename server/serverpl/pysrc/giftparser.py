#!/usr/bin/python3
#-*- coding: utf-8 -*-
import logging
import re
import yattag
import markdown
import sys

# TODOS:
# - unittest
MARKDOWN_EXT = ['markdown.extensions.extra', 'markdown.extensions.nl2br', 'superscript']

# Url and blank lines (moodle format)
reURL=re.compile(r"(http://[^ ]+)",re.M)
reNewLine=re.compile(r'\n\n',re.M)

# Sub regular expressions
ANYCHAR=r'([^\\=~#]|(\\.))'
OPTIONALFEEDBACK='(#(?P<feedback>'+ANYCHAR+'*))?'
OPTIONALFEEDBACK2='(#(?P<feedback2>'+ANYCHAR+'*))?'
GENERALFEEDBACK='(####(\[(?P<gf_markup>.*?)\])*(?P<generalfeedback>.*))?'
NUMERIC='[\d]+(\.[\d]+)?'

# Regular Expressions 
reSepQuestions=re.compile(r'^\s*$')
reComment=re.compile(r'^//.*$')
reCategory=re.compile(r'^\$CATEGORY: (?P<cat>[/\w$]*)')

# Special chars
reSpecialChar=re.compile(r'\\(?P<char>[#=~:{}])')


# Heading
# Title is supposed to be at the begining of a line
reTitle=re.compile(r'^::(?P<title>.*?)::(?P<text>.*)$',re.M+re.S)
reMarkup=re.compile(r'^\s*\[(?P<markup>.*?)\](?P<text>.*)',re.M+re.S)
reAnswer=re.compile(r'^(?P<head>.*[^\\]){\s*(?P<answer>.*?[^\\]?)'+GENERALFEEDBACK+'}(?P<tail>.*)',re.M+re.S)

# numeric answers
reAnswerNumeric=re.compile(r'^#[^#]')
reAnswerNumericValue = re.compile(r'\s*(?P<value>'+NUMERIC+')(:(?P<tolerance>'+NUMERIC+'))?'+OPTIONALFEEDBACK)
reAnswerNumericInterval=re.compile(r'\s*(?P<min>'+NUMERIC+')(\.\.(?P<max>'+NUMERIC+'))?'+OPTIONALFEEDBACK)
#Pas utilisé je crois, mais quel est l'intérêt?
reAnswerNumericExpression = re.compile(r'\s*(?P<val1>'+NUMERIC+')((?P<op>:|\.\.)(?P<val2>'+NUMERIC+'))?'+OPTIONALFEEDBACK)

# Multiple choices only ~ symbols
reAnswerMultipleChoices = re.compile(r'\s*(?P<sign>=|~)(%(?P<fraction>-?'+NUMERIC+')%)?(?P<answer>('+ANYCHAR+')*)'+OPTIONALFEEDBACK)

# True False
reAnswerTrueFalse = re.compile(r'^\s*(?P<answer>(T(RUE)?)|(F(ALSE)?))'+OPTIONALFEEDBACK+OPTIONALFEEDBACK2)

# Match (applies on 'answer' part of the reAnswerMultipleChoices pattern
reMatch = re.compile(r'(?P<question>.*)->(?P<answer>.*)')


def init_dictionnary_from_question(question):
    '''
        All the questions have those attributes
        This method initialise a dictionnary with them
        :param question: The source question
        :type question: Question
        :return: The dictionnary
        :rtype: dict 
    '''
    return {
    'title' : question.title,
    'text' : question.text,
    'type' : 'direct'
    #'tail' : question.tail, // exemple 2+{reponse?}=4, =4 correspond à la tail de la question
    #PB : comment intégrer ca dans un pl
    }

def stripMatch(match,s):
    if match.group(s):
        return match.group(s).strip()
    else:
        return ""

############# Sets of answers ###############
# Can be a singleton, empty or not or just the emptyset!

class AnswerSet:
    def __init__(self,question):
        self.question = question
        self.valid = True
        
    def myprint(self):
        print (self.__class__)

class Essay(AnswerSet):
    """ Empty answer """
    def __init__(self,question):
        AnswerSet.__init__(self,question)

    def toPl(self):
        print("[WARNING] : Type Essay uncompatible with the PL platform, sorry")
        return None


class Description(AnswerSet):
    """ Emptyset, nothing!"""
    def __init__(self,question):
        AnswerSet.__init__(self,question)
        self.dico = dict()

    def toPl(self):
        self.dico['evaluator'] = "def evaluator(reponse, dico): return True, 'Merci pour votre lecture'"
        return self.dico

class TrueFalseSet(AnswerSet):
    """ True or False"""
    # Q: should I introduce Answer variables?
    def __init__(self,question,match):
        AnswerSet.__init__(self,question)
        self.answer = match.group('answer').startswith('T')
        self.feedbackWrong = stripMatch(match,"feedback")
        self.feedbackCorrect = stripMatch(match,"feedback2")
        
    def myprint(self):
        print (">TrueFalse:",self.answer,"--",self.feedbackWrong,"--",self.feedbackCorrect)

    def toPl(self):
        dico = init_dictionnary_from_question(self.question)
        dico['template'] = '/gift/template/truefalse_template.pl'
        dico['right_answer'] = self.answer
        #On ajoute les clefs pour les feedbacks uniquement si ils existent
        if self.feedbackWrong : dico['feedback_wrong'] = self.feedbackWrong
        if self.feedbackCorrect : dico['feedback_correct'] = self.feedbackCorrect
        return dico
    
    def create_answer_dics(self):
        good_res = dict()
        wrong_res = dict()
        good_res['answer'] = pl_dic['answer']
        wrong_res['answer'] = 'lkjhjklm'
        return good_res, wrong_res
      
class NumericAnswerSet(AnswerSet):
    """ """
    def __init__(self,question,answers):
        AnswerSet.__init__(self,question)
        self.answers = answers


    def toPl(self):
        #NumericAnswerSet possède un champs qui est une liste de réponse correspondante aux réponses possibles
        #Ce qui est incompatible avec pl, car certaines réponses ne fournissent pas un point entier
        dico = init_dictionnary_from_question(self.question)
        dico['template'] = '/gift/template/numeric_template.pl'
        a = [x for x in self.answers if x.fraction==100][0]
        dico['mini'], dico['maxi'] = a.bounds(self.answers)
        return dico
    
    def create_answer_dics(self):
        good_res = dict()
        wrong_res = dict()
        a = [x for x in self.answers if x.fraction==100][0]
        mn, mx = a.bounds(self.answers)
        good_res['answer'] = mn
        wrong_res['answer'] = str(float(mx)+128.0)
        return good_res, wrong_res
        


class MatchingSet(AnswerSet):
    """  a mapping (list of pairs) """
    def __init__(self,question,answers):
        AnswerSet.__init__(self,question)
        self.answers = answers
        self.possibleAnswers = [a.answer for a in self.answers]

    def checkValidity(self):
        valid = True
        for a in self.answers:
            valid = valid and a.isMatching
        return valid
    
    def myprint(self):
        print ("Answers :")
        for a in self.answers:
            a.myprint()
            print ('~~~~~')
                                    
    def answers_to_match(self, dico):
        '''
            Fill the dictionnary with the possibles answers in case of MatchingSet
            :param dico: The dest dico
            :type dico: dict
        '''
        nb_rep = 1
        for i in self.possibleAnswers:
            dico['answer' + str(nb_rep)] = i
            nb_rep+=1
            
    def questions_to_match(self, dico):
        '''
            Fill the dictionnary with the possibles questions in case of MatchingSet 
            :param dico: The dest dico
            :type dico: dict
        '''
        nb_qst = 1
        for i in [x.question for x in self.answers]:
            dico['question' + str(nb_qst)] = i
            nb_qst+=1
            
    def toPl(self):
        dico = init_dictionnary_from_question(self.question)
        dico['template'] = '/gift/template/match_template.pl'
        self.questions_to_match(dico)
        self.answers_to_match(dico)
        return dico
    
    def create_answer_dics(self):
        good_res = dict()
        wrong_res = dict()
        for x in self.answers :
            good_res[x.question] = x.answers
        return good_res, wrong_res


class ChoicesSet(AnswerSet):
    """ One or many choices in a list (Abstract)"""
    def __init__(self,question,answers):
        AnswerSet.__init__(self,question)
        self.answers = answers
        self.goods = [(x.answer, x.feedback) for x in self.answers if x.fraction]
        
    def myprint(self):
        print ("Answers :")
        for a in self.answers:
            a.myprint()
            print ('~~~~~')
            
    def fill_with_answers(self, dico):
        '''
            Fill the dictionnary with the possibles answers in case of MCQ 
            
            :param dico: The dest dico
            :param question: The source question
            :type question: Question
            :type dico: dict
        '''
        nb_rep = 1
        for i in [x.answer for x in self.answers]:
            dico['answer' + str(nb_rep)] = i.split(":")[0] #in case of mcq with numeric answer and tolerance for instance
            nb_rep+=1
            
    def fill_with_feedback(self, dico):
        '''
            Fill the dictionnary with the different feedbacks in case of MCQ 
        
            :param dico: The dest dico
            :param question: The source question
            :type question: Question
            :type dico: dict
        '''
        nb_rep = 1
        for i in [x.feedback for x in self.answers]:
            #si il y a un feedback on ajoute la clef dans le dico, sinon on ne met rien
            if i: dico['feedback' + str(nb_rep)] = i
            nb_rep+=1

class ShortSet(ChoicesSet):
    """ A single answer is expected but several solutions are possible """ 
    def __init__(self,question,answers):
        ChoicesSet.__init__(self,question,answers)

    def toPl(self):
        dico = init_dictionnary_from_question(self.question)
        if self.question.tail :
            dico['text2'] = self.question.tail
            dico['template'] = '/gift/template/fill_the_blank_template.pl'
        else :
            dico['template'] = '/gift/template/short_template.pl'
        self.fill_with_answers(dico)
        self.fill_with_feedback(dico)
        return dico
        
    def create_answer_dics(self):
        good_res = dict()
        wrong_res = dict()
        good_res['answer'] = [x.answer for x in self.answers][0]
        wrong_res['answer'] = 'k;/;,te'
        return good_res, wrong_res
    
class SelectSet(ChoicesSet):
    """ One  choice in a list"""
    def __init__(self,question,answers):
        ChoicesSet.__init__(self,question,answers)
    
    def toPl(self):
        dico = init_dictionnary_from_question(self.question)
        dico['template'] = '/gift/template/select_template.pl'
        self.fill_with_answers(dico)
        self.fill_with_feedback(dico)
        dico['right_answer'] = self.goods[0][0]
        if self.goods[0][1]: dico['right_feedback'] = self.goods[0][1] 
        # /!\ duplication de feedback et réponse
        # peut être amélioré en right = numéro de la réponse, il faudrait modifié l'éval aussi
        return dico
    
    def create_answer_dics(self) :
        good_res = dict()
        wrong_res = dict()
        good_res['answer'] = self.goods[0][0]['right_answer']
        wrong_res['answer'] = 'eje,l;els'
        return good_res, wrong_res


class MultipleChoicesSet(ChoicesSet):
    """ One or more choices in a list"""
    def __init__(self,question,answers):
        ChoicesSet.__init__(self,question,answers)

    def checkValidity(self):
        """ Check validity the sum f fractions should be 100 """
        total = sum([ a.fraction for a in self.answers if a.fraction>0]) 
        return total >= 99 and total <= 100

    def fill_with_rights(self, dico):
        n=1
        for x in self.goods:
            dico['right_answer' + str(n)] = x[0]
            #si il y a un feedback on ajoute la clef dans le dico, sinon on ne met rien
            if x[1]: dico['right_feedback' + str(n)] = x[1] 
            n+=1

    def toPl(self):
        dico = init_dictionnary_from_question(self.question)
        dico['template'] = '/gift/template/multiplechoices_template.pl'
        self.fill_with_answers(dico)
        self.fill_with_feedback(dico)
        self.fill_with_rights(dico)
        return dico
        
    def create_answer_dics(self):
        good_res = dict()
        wrong_res = dict()
        good_res['answer'] = self.goods[0]
        wrong_res['answer'] = []
        return good_res, wrong_res

################# Single answer ######################
class Answer:
    """ one answer in a list"""
    pass

class NumericAnswer(Answer):
    def __init__(self,match):
        self.value = float(match.group('value'))
        if match.group('tolerance'):
            self.tolerance = float( match.group('tolerance') )
        else:
            self.tolerance = 0

    def bounds(self, answ):
        #Recupération de la tolerance maximale parmi les réponses acceptées
        self.tolerance = max([x.tolerance for x in answ])
        mini = self.value - self.tolerance
        maxi = self.value + self.tolerance
        
        return mini, maxi

class NumericAnswerMinMax(Answer):
    def __init__(self,match):
        self.mini = match.group('min')
        self.maxi = match.group('max')
        
    def bounds(self, a=None):
        return int(self.mini), int(self.maxi)

class AnswerInList(Answer):
    """ one answer in a list"""
    def __init__(self,match):
        if not match : return
        self.answer = match.group('answer').strip()
        self.feedback = stripMatch(match,"feedback")
        # At least one = sign => selects (radio buttons)
        self.select = match.group('sign') == "="

        # fractions
        if match.group('fraction') :
            self.fraction=float(match.group('fraction'))
        else: 
            if match.group('sign') == "=":
                self.fraction = 100
            else:
                self.fraction = 0
    
        # matching
        match = reMatch.match(self.answer)
        self.isMatching = match != None
        if self.isMatching:
            self.answer = match.group('answer')
            self.question = match.group('question')

    def myprint(self):
        for key, val in self.__dict__.items():
            print ('>',key,':',val)
        

############ Questions ################
                
class Question:
    """ Question class.

    About rendering: It is up to you! But it mostly depends on the type of the answer set. Additionnally if it has a tail and the answerset is a ChoicesSet, it can be rendered as a "Missing word". 
    """
    def __init__(self,source,full,cat):
        """ source of the question without comments and with comments"""
        self.source = source
        self.full = full
        self.category = cat
        self.valid = True
        self.tail = ''
        self.generalFeedback = ""
        self.parse(source)

    def getId(self):
        """ get Identifier for the question""" 
        return 'Q'+str(id(self)) # TODO process title
        
    def parse(self,source):
        """ parses a question source. Comments should be removed first"""
        # split according to the answer
        match = reAnswer.match(source)
        if not match:
            # it is a description
            self.answers = Description(None)
            self.__parseHead(source)
            self.answers.dico = init_dictionnary_from_question(self)
            self.answers.dico['type'] = 'description'
        else:
            self.tail=stripMatch(match,'tail')
            self.__parseHead(match.group('head'))
            self.generalFeedback = stripMatch(match,'generalfeedback')
            # replace \n
            self.generalFeedback = re.sub(r'\\n','\n',self.generalFeedback)
            self.__parseAnswer(match.group('answer'))
        
    def __parseHead(self,head):
        # finds the title and the type of the text
        match = reTitle.match(head)
        if match:
            self.title = match.group('title').strip()
            textMarkup = match.group('text')
        else:
            self.title = head[:20] # take 20 first chars as a title
            textMarkup = head
            
        match = reMarkup.match(textMarkup)
        if match:
            self.markup = match.group('markup').lower()
            self.text = match.group('text').strip()
        else:
            self.markup = 'moodle'
            self.text = textMarkup.strip()
        # replace \n
        self.text = re.sub(r'\\n','\n',self.text)

    def __parseNumericText(self,text):
        m=reAnswerNumericValue.match(text)
        c=reAnswerNumericInterval.match(text)
        if c.span()[1] <= m.span()[1]:
            a = NumericAnswer(m)
        else:
            m = reAnswerNumericInterval.match(text)
            if m:
                a = NumericAnswerMinMax(m)
            else :
                self.valid = False
                return None
        a.feedback = stripMatch(m,"feedback")
        return a 

    def __parseNumericAnswers(self,answer):
        self.numeric = True;
        answers=[]
        for match in reAnswerMultipleChoices.finditer(answer):
            a = self.__parseNumericText(match.group('answer'))
            if not a:
                return 
            # fractions
            if match.group('fraction') :
                a.fraction=float(match.group('fraction'))
            else: 
                if match.group('sign') == "=":
                    a.fraction = 100
                else:
                    a.fraction = 0
            a.feedback = stripMatch(match,"feedback")
            answers.append(a)
        if len(answers) == 0:
            a = self.__parseNumericText(answer)
            if a:
                a.fraction=100
                answers.append(a)
        self.answers = NumericAnswerSet(self,answers)
        

    def __parseAnswer(self,answer):
        # Essay
        if answer=='':
            self.answers = Essay(self)
            return

        # True False
        match = reAnswerTrueFalse.match(answer)
        if match:
            self.answers = TrueFalseSet(self,match)
            return

        # Numeric answer
        if reAnswerNumeric.match(answer) != None:
            self.__parseNumericAnswers(answer[1:])
            return
        

        #  answers with choices and short answers
        answers=[]
        select = False
        short = True
        matching = True
        for match in reAnswerMultipleChoices.finditer(answer):
            a = AnswerInList(match)
            # one = sign is a select question
            if a.select: select = True
            # short answers are only = signs without fractions
            short = short and a.select and a.fraction == 100
            matching = matching and short and a.isMatching
            answers.append(a)
            
        if len(answers) > 0 :
            if matching:
                self.answers = MatchingSet(self,answers)
                self.valid = self.answers.checkValidity()
            elif short:
                self.answers = ShortSet(self,answers)
            elif select:
                self.answers = SelectSet(self,answers)
            else:
                self.answers = MultipleChoicesSet(self,answers)
                self.valid = self.answers.checkValidity() 
        else:
            # not a valid question  ?
            logging.warning("Incorrect question "+self.full)
            self.valid = False

    def toHTML(self, doc=None,feedbacks=False):
        """ produces an HTML fragment, feedbacks controls the output of feedbacks"""
        if not self.valid: return ''
        if doc == None : doc=yattag.Doc()
        with doc.tag('div', klass='question'):
            with doc.tag('div', klass='questionTitle'):
                doc.text(self.title)
            with doc.tag('form', action = ""):
                if self.tail !='' :
                    with doc.tag('span', klass='questionTextInline'):
                        doc.asis(markupRendering(self.text,self.markup))
                        doc.text(' ')
                    with doc.tag('span', klass='questionAnswersInline'):
                        self.answers.toHTML(doc)
                    doc.text(' ')
                    doc.asis(markupRendering(self.tail,self.markup))
                else:
                    with doc.tag('div', klass='questionText'):
                        doc.asis(markupRendering(self.text,self.markup))
                    with doc.tag('div', klass='questionAnswers'):
                        self.answers.toHTML(doc)
                if feedbacks:
                    self.answers.toHTMLFB(doc)
                    if self.generalFeedback != '':
                        with doc.tag('div', klass='questionGeneralFeedback'):
                            doc.asis('<p><b>Feedback:</b></p>')
                            doc.asis(markupRendering(self.generalFeedback,self.markup))
        return doc
            
    def myprint(self):
        print ("=========Question=========")
        if not self.valid:
            return
        print (self.answers.__class__)
        for key, val in self.__dict__.items():
            if key in ['full','source',"answer","valid"]:
                continue
            if key == 'answers':
                self.answers.myprint()
            else:
                print (key,':',val)
    
    def toPl(self):
        return self.answers.toPl()

def moodleRendering(src):
    """ See https://docs.moodle.org/23/en/Formatting_text#Moodle_auto-format"""
    # blank lines are new paragraphs, url are links, html is allowed
    # quick and dirty conversion (don't closed p tags...)
    src = transformSpecials(src)
    src = reURL.sub(r'<a href="\1">\1</a>', src)
    src = reNewLine.sub(r'<p>',src)
    return src

def htmlRendering(src):
    return transformSpecials(src)

def markdownRendering(src):
    return markdown.markdown(transformSpecials(src), MARKDOWN_EXT)
    
def markupRendering(src,markup='html'):
    m = sys.modules[__name__]
    rendering=markup+'Rendering'
    if rendering in m.__dict__ :
        return getattr(m,rendering)(src)
    else:
        logging.warning('Rendering error: unknown markup language '+markup)
        return src
        
def transformSpecials(src):
    return reSpecialChar.sub(r'\g<char>',src)

def parseFile(f):
    cleanedSource = fullSource = ""
    category='$course$'
    newCategory = None
    questions=[]
    
    for line in f:
        if reSepQuestions.match(line):
            if newCategory:
                # the previous line was a category declaration
                category = newCategory
                newCategory = None
            else:
                if cleanedSource != "":
                    # this is the end of a question
                    questions.append(Question(cleanedSource,fullSource,category))
                cleanedSource = fullSource = ""
        else:
            # it is not a blank line : is it a category definition?
            match = reCategory.match(line)
            if match:
                newCategory = match.group('cat')
                continue
            
            # is it a comment ?
            if not reComment.match(line):
                cleanedSource += line
            fullSource+=line

    if cleanedSource != "":
        questions.append(Question(cleanedSource,fullSource,category))
        
    return questions


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Parses gift files.")
    parser.add_argument("-l", "--log", dest="logLevel", choices=['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'], help="Set the logging level", default='WARNING')
    parser.add_argument('f', help="gift file",type=argparse.FileType('r'))
    parser.add_argument('-H', '--html', help="html output",action="store_true")
    args = parser.parse_args()
    logging.basicConfig(filename='gift.log',filemode='w',level=getattr(logging, args.logLevel))

    questions = parseFile (args.f)
    args.f.close()

    for q in questions:
        if args.html:
            d= q.toHTML()
            print (d.getvalue())
            print ("<hr />")
        else:
            q.myprint()
