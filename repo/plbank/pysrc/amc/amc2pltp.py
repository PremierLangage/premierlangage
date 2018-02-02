#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  amc2pltp.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  
# traduit un fichier AMC-TEXT en feuille d'exercice Premier langage (pltp)
#  pour le fichier amc-text.txt le resultat est un répertoire amc-text/  contenant 
# un fichier amc-text.pltp et des fichiers question1.pl pour chaque question 

from path import Path
import os
import sys

def usage():
    use="""
    create pltp from amc-text file
    amc2pltp filename.txt 
    """
    print(use)



class Question:
    """
    """
    gnum=1
    
    def __init__(self,unique):
        self.num= Question.gnum
        Question.gnum+=1
        self.unique=unique
        self.text="pas d'enoncé ?!!!"
        self.correct=[]
        self.incorrect=[]

    def addcorrect(self,rep):
        self.correct.append(rep)
    def addincorrect(self,rep):
        self.incorrect.append(rep)
    def output(self):
        if  self.unique: 
            a="title=Question à choix unique\nextends=/gift/template/select_template.pl\n"
        else:
             a="title=Question à choix multiple\nextends=/gift/template/multiplechoices_template.pl\n"
        a += "text==\n"+self.text+"\n==\n"
        i=1
        for rep in self.correct:
            a+="anwser"+str(i)+"="+rep+"\n"
            i+=1
        for rep in self.incorrect:
            a+="anwser"+str(i)+"="+rep+"\n"
            i+=1
        if len(self.correct)==0:
            print("Warning la question ",self.num," a aucune réponse correcte",file=sys.stderr)
        a+="right_answer="+self.correct[0]
        return a


        


class Feuille:
    def __init__(self,pathname):
        path = Path(pathname)
        if not pathname:
            usage()
            sys.exit(1)
        if  not path.exists():
            print(pathname, " : no such file ")
            sys.exit(1)
        if path.splitext()[1] != ".txt" :
            print(pathname, " : not  a .txt file :")
            sys.exit(1)
        #if Path(path.splitext()[0]).exists() :
            #print("Diretory ",path.splitext()[0],"exists ")
            #sys.exit(1)
        #os.mkdir(path.splitext()[0])

        with open(pathname,"r") as amcfile :
            self.lines = amcfile.read().split("\n")
        ii=0
        for l in self.lines:
            ii+=1
            print(ii,l)
        self.numline=0
        self.line=None
        self.prembuledic = dict()
        self.questions=[]

    def getnextline(self):
        self.numline += 1
        if len(self.lines)==0:
            return None
        line=self.lines.pop(0)
        while line :
            if line.startswith("#") :
                self.numline += 1
                if len(self.lines)==0:
                    return None 
                line=self.lines.pop(0)
                continue
            return line
        return ""
        
    def preambule(self):
        name=None
        self.line = self.getnextline()
        while self.lines and self.line != None and self.line != "" :
            # we are in the prembule
            if ":" not in self.line:
                value+="\n" + self.line
            else:
                if name:
                    self.prembuledic[name]=value
                name,value = self.line.split(":")
            # ligne suivante 
            self.line = self.getnextline()
        self.prembuledic[name]=value

    def parsequestion(self):
        # consomer les lignes vides entre les questions 
        self.line = self.getnextline()
        while self.line =="":
            self.line = self.getnextline()
        if not self.line:
            return None
        if self.line.startswith("**"):
            q=Question(False)
            q.text=self.line[2:]
        elif self.line.startswith("*"):
            q=Question(True)
            q.text=self.line[1:]
        else:
            print("\n ERREUR ligne ",self.numline)
            print(self.line)
            print(" l'énnoncé de la question ne commence ni * ni ** ")
            sys.exit(1)
        self.line = self.getnextline()
        while self.lines and self.line != None and self.line != "" :
            # we are in the question
            if self.line.startswith("+") :
               q.addcorrect(self.line[1:])
            elif self.line.startswith("-") :
               q.addincorrect(self.line[1:])
            else:
                print("Erreur ligne ",self.numline)
                print("Erreur de syntaxe ligne qui ne commence ni par - ni par + dans une question ")
                sys.exit(1)
            # ligne suivante 
            self.line = self.getnextline()
        print(q.output())
        self.questions.append(q)
        return self.line


def main(args):
    F=Feuille(args[1])
    F.preambule()
    print("Fin du preambule")
    nbq=0
    while F.parsequestion() == "":
        nbq+=1
        print("nbquestion :",nbq)
    print(F.prembuledic)
    return 0

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
