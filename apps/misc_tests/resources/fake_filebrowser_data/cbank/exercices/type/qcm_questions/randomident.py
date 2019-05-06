#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  randomident.py
#  
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#  


from random import uniform,randint,choice,seed,shuffle

import string

def firstletter():
    if uniform(0, 30) < 3 :
        return '_'
    return choice(string.ascii_letters)

def overletter():
    if uniform(0, 10) <2 :
        return choice(string.digits)
    return choice(string.ascii_letters)

def identalea():
    s=firstletter()
    
    for x in range(randint(1,6)):
        s+= overletter()
    return s


def createIdentifiant(n):
    """

    RETURNS a list of n couples (ident,bool) avec le bool qui indique si l'identifiant est correct 
    """

    num=["7nains","5dechute", "4sansatouts","7up","1pitoyable","2detension","0tolérence","10commandements","0calories","17h","22h30","15heure","33metres",]
    bad=["e-ZiNeS","premières","mots_Français","mot-francais","Mots-Francais","Core-Dump","Bande de moules","ici et maintenant","lettre.txt",".bashrc","l\'ete", "été","Août","momo@gmail.com",]

    oks=["g33k","tr0u","blorgs4","saturne5","c0wb0yZ","hOm3","secondes","minutes","TRESFORT","_____",] 
    aleas=[ identalea() for x in range(18)]

    keyword=['asm', 'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'inline', 'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while']


    l=[]
    # 3 identifiants incorrects

    for i in range(3):
        if randint(0,100)<3 : # 3% chance keyword
            id = choice(keyword)
            keyword.pop(keyword.index(id))
            l.append((id,False))
            continue
        if randint(0,10) < 4 : # 40%  start with digit 
            id = choice(num)
            num.pop(num.index(id))
            l.append((id,False))
            continue
        id = choice(bad) # reste % illegal letter 
        bad.pop(bad.index(id))
        l.append((id,False))
    # 3 identifiants corrects
    for i in range(3):
        if randint(0,5) < 1 :
            id = choice(oks)
            oks.pop(oks.index(id))
            l.append((id,True))
            continue
        l.append((choice(aleas),True))
    return l

def build(dic):
    d= dict(dic)
    if "seed" not in dic:
        dic['seed']=str(randint(0,500))
    seed(dic['seed'])
    question=list()
    answer=list()
    if randint(1,2) ==1:
        voulu = False
        text = "Indiquez les identifiants **incorrects**."
    else:
        voulu = True
        text = "Indiquez les identifiants **corrects**."
    for id,correct in createIdentifiant(8):
        question.append(id)
        if correct == voulu :
            answer.append(id)
    d['text']=text
    shuffle(question)
    d['question'] = question
    d['answer'] = answer
    return d

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))
