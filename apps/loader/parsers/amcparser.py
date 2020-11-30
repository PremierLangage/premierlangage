
# ca manque de traitement d'erreurs
# DD : oui, je n'y ai pas trop réfléchi encore

## Un commentaire ou un lien vers la doc AMC serait bienvenu
exempl e ="""
# AMC-TXT source file
Title: My first AMC questionnaire

Presentation: Please answer the following questions
the best you can.

* What is the capital city of Cameroon?
+ Yaounde
- Douala
- Kribi

** From the following numbers, which are positive?
- -2
+ 2
+ 10
"""

exempleEtend u ="""
*+ Exo avec click sur un mot ici bonne est le bon mot 
 Vous  pouvez en mettre plusieurs séparer vos mots par des espace 
 si vous souhaiter mettre un espace ajouter des crochet autour des caractères en question   
>j'indique avec [des doubles] curly brackets la {{bonne}} réponse

=* What are the odd numbers ? 
+=[x for x in range(3,77) if x%2==1 ]
-=[x for x in range(3,77) if x%2==0 ]

=** What are the odd numbers ? 
+=[x for x in range(3,77) if x%2==1 ]
-=[x for x in range(3,77) if x%2==0 ]

=*+ Choose the corrects variables names 
>+["fixe","liste","of","good","names"]
>-["6fixe","-liste","!of","$bad","variables-names"]
"""


def parse_AMC_TXT(lines):
    """
    >>> q = parse_AMC_TXT(exemple)
    >>> len(q) == 2 and q[0]["type"] ==  "Radio" and q[1]["type"]== "Checkbox"
    True
    >>> q = parse_AMC_TXT(exempleEtendu)
    >>> len(q) == 3 and q[0]["type"] ==  "Radio" and q[1]["type"]== "Radio"
    True
    >>> q[2]["type"] ==  "Radio" and q[3]["type"]== "Radio"
    True
    """
    questions = []
    pending = False
    extended =False
    for line in lines +['']:
        if line.startswith('='): # Extended Syntax
            line= line[1:] # strip first
            extended= True
            if line.startswith('*'):
                if line.startswith('**'):
                    question_type = "Checkbox"
                elif line.startswith('*+'):
                    question_type = "TextSelect"
                elif line.startswith('*='):
                    question_type = "MatchList"
                else:
                    question_type = "Radio"
                line = line.lstrip("*=+ ")
                if line.startswith('['):
                    r0 = line.find(']')
                    options = [option.strip() for option in line[1:r0].split(',')]
                    line = line[r0 + 1:].lstrip()
                else:
                    options = []
                statement = line
                k = 0
                index = []
                items = []
                pending = True
        elif line.startswith('*'):
            if line.startswith('**'):
                question_type = "Checkbox"
            elif line.startswith('*+'):
                question_type = "TextSelect"
            else:
                question_type = "Radio"
            line = line.lstrip("*+ ")
            if line.startswith('['):
                r0 = line.find(']')
                options = [option.strip() for option in line[1:r0].split(',')]
                line = line[r0 +1:].lstrip()
            else:
                options = []
            statement = line
            k = 0
            index = []
            items = []
            pending = True
        elif line.startswith(('+' ,'-')):
            items.append(line[1:].strip())
            if line.startswith('+'):
                index.append(k)
            k += 1

        elif line.startswith(">"): # special text select
            items.append(line.lstrip("> "))
            questions.append({'type': question_type,
                              'text': statement,
                              'items': items,
                              'index': [],
                              'options': options,
                              'extended': extended
                              })
            pending = False
            extende d= False
        elif pending and k == 0:
            if line == "":
                statement += "\n"
            else:
                statement += " " + line

        elif line == "" and pending and k > 0:
            if question_type == "Radio":
                if len(index) == 0:
                    raise Exception(" pas de reponse correcte dans une question Radio")
                index = index[0]
            questions.append({'type': question_type,
                              'text': statement,
                              'items': items,
                              'index': index,
                              'options': options,
                              'extended': extended
                              })
            pending = False
            extende d= False

    return questions










