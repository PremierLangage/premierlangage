Liste des concepts 
Dominique Revuz
# -*- coding: utf-8 -*-



+ encoding
‘‘‘python
# -*- coding: <encoding-name> -*-
‘‘‘
+ indentation
L'indentation est importante en python car elle agit sur l'interprétation que fait le langage.


‘‘‘python
 def perm(l):                       # error: first line indented
for i in range(len(l)):             # error: not indented
    s = l[:i] + l[i+1:]
        p = perm(l[:i] + l[i+1:])   # error: unexpected indent
        for x in p:
                r.append(l[i:i+1] + x)
            return r                # error: inconsistent dedent
‘‘‘


+commande (langage de commande)
le langage de commande analyse des lignes une par une si l'on ne peut pas couper les lignes n'importe ou, si c'est nécessaire alors il faut couper avec anti-slash newline \

Chaque ligne est lue puis exécuté, si la ligne ouvre sur un nouveau bloc de code le prompt change.

+script(langage de script)
la possibilité d'ecrire des programmes avec un éditeur

+lecture d'une ligne 

	 Line structure
	 Other tokens

+Identifiers(identificateurs)
Dans la description des identificateurs d'un langage de programmation on trouve souvent une formule bizare:
[a-zA-Z_][0-9a-zA-Z_]*
Cette formule se lit  de la façon suivante entre [] = un premier caractère qui appartient soit à l'interval 'a' à 'z' soit 'A' à 'Z' plus le caractère '_' souligné.
les zéro à n caractères []* suivants appartient soit à l'interval 'a' à 'z' soit 'A' à 'Z' soit '0' à '9'  plus le caractère '_' souligné.
La taille des identificateurs est d'aumoins un caractère et aussi longue que vous le souhaitez, attention la case (majuscule /minuscule) est importante.

+keywords(mots clefs)
C'est des mots auquels une signification à été donnée par les créateurs du langage il sont donc reconnu et ne peuvent pas êtres utilisés comme identificateurs


|Table | des | mots | clefs | python |
|--------|------|-----|-----|--------|
|False | class | finally | is | return|
|None | continue | for | lambda | try|
|True | def | from | nonlocal | while|
|and | del | global | not | with|
|as | elif | if | or | yield|
|assert | else | import | pass|
|break | except | in | raise|

++interindent(classes d'identificateurs réservées)
Ensemble d'identifiant réservé pour des objets internes/techniques du langage.
Tout ce qui commence par _ n'est pas importé.


+Literals(Constantes)
Entiers floats chaines 
++Literals(Constantes)
Version complexe et étendue
+display(Literals de set,dict,list)

+Operators(Opérateurs)
	

+Data model(types complexes)
	 Objects, values and types
	 The standard type hierarchy
	 Special method names
	Execution model
	 Structure of a program
	 Naming and binding
	 Exceptions
	The import system
	 importlib
	 Packages
	 Searching
	 Loading
	 The Path Based Finder
	 Replacing the standard import system
	 Special considerations for __main__
	 Open issues
	 References
	Expressions
	 Arithmetic conversions
	 Atoms
	 Primaries
	 The power operator
	 Unary arithmetic and bitwise operations
	 Binary arithmetic operations
	 Shifting operations
	 Binary bitwise operations
	 Comparisons
	 Boolean operations
	 Conditional expressions
	 Lambdas
	 Expression lists
	 Evaluation order
	 Operator precedence
	Simple statements
	 Expression statements
	 Assignment statements
	 The assert statement
	 The pass statement
	 The del statement
	 The return statement
	 The yield statement
	 The raise statement
	 The break statement
	 The continue statement
	 The import statement
	 The global statement
	 The nonlocal statement
	Compound statements
	 The if statement
	 The while statement
	 The for statement
	 The try statement
	 The with statement
	 Function definitions
	 Class definitions
	Top-level components
	 Complete Python programs
	 File input
	 Interactive input
	 Expression input

	 Full Grammar specification

