# Copyright 2017 Nicolas Borie <nicolas.borie@u-pem.fr>
#
# Ecrire une fonction qui calcule un polynome

author=N Borie & DR
title=Écrire une fonction qui calcule un polynome
tag=function|return
template=/template/stdsandboxC.pl



editor.code==
double polynome(...){
  ...
}
==


codeafter==
#include <stdio.h>
#include <stdlib.h>    
    
int main(int argc, char* argv[]){
  int a = atoi(argv[1]);
  int b = atoi(argv[2]);
  int c = atoi(argv[3]);

  printf("%f\n", polynome(a, b, c));
  return 0;
}
==

builder==
import sys
import json
from random import randint, choice, seed

def codeandtextpoly():
    """
    je veux une fonction de 3 variables a,b,c
    qui calcule une polynome en trois variables
    disont que il y a 3 éléments de la forme 
        + coef * puissance(a,x) * puissance(b,x) * puissance(c,x)
    avec somme des x  varriant de 0 à 4

    Elle retourne deux strings qui sont la version code et text du même polynome 
    code,text
    coe doit être utilisée dans la solution
    et text dans l'énoncé 
    """
    l=[("(12 - (2 + a)*b*b*b + 7*b*c*c)" , "12 - (2 + a)b^3 + 7bc^2"),
    ("(3.1*a*b*c - b*b*b + 5*a*a*c*c)", "3,1 abc - b^3 +5a^2c^2"),
    ("(b*b-4*a*c)"," b^2-4ac"),
    ("(a*a*b*b*c*c+1)"," a^2b^2c^2 + 1"),
    ]
    return choice(l)
    

def build(dic):
    if 'seed' not in dic:
        dic['seed']=str(randint(0,500))
    seed(dic['seed'])

    code, text = codeandtextpoly()

    dic['solution']="\ndouble polynome(int a, int b, int c){\nreturn "+code+";\n}\n"
    dic['text']="""Écrire une function *polynome* qui prend en argument 3 entiers *a*, *b* et *c* et qui retourne l'évaluation du polynome:\n\n\t $%{}%$ """.format(text)
    return dic
    
if __name__ == "__main__":
    with open(sys.argv[1],'r') as f:
        context = json.load(f)
    f.close()
    context = build(context)
    with open(sys.argv[2], 'w') as f:
        json.dump(context, f)
    f.close()
    sys.exit(0)
==


    
tests==

[["Basique", "0 0 0", ""],
["Aléatoire", " ".join([str(random.randint(-10, 10)) for i in range(3)]), ""],
["Aléatoire", " ".join([str(random.randint(-10, 10)) for i in range(3)]), ""],
["Aléatoire", " ".join([str(random.randint(-10, 10)) for i in range(3)]), ""]]

==

