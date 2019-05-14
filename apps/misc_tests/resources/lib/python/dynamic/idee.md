

Idee de générateur de questions 

Une liste d'opérateurs authorisés pour ce niveau d'exercices - * + / // % **  >> << & | ^ is in and or  
https://fr.wikibooks.org/wiki/Programmation_Python/Op%C3%A9rateurs
Une liste de concepts : if , else , elif , and,  or, function{constantes,print,return} 
expresion ternaire  a = b if c else d
for ... else

x:=1,2
constante:= randint(-x,x) # difficulté x=2,3,5
boolexp := True # diff < 2
	False   # diff < 2
	varN opcomp varM # var N et M initialisées
	constante opcompt varN # varN initialisé
	varN optcompt constante # varN initialisé
	not boolexp
	boolexp and/or boolexp 
	varN is varM
	varN isnot varM
	varN < varM < varP
	varN > varM > varP


opcompt:= < > <= <= == != 

initialisation:= varN = initialiseur

    constante
	    varN = varI op varJ   # avec I et J <N
	    varN = varI op constante # I < N
	    bvarN = boolexp
	    varN= 

instruction:=
	    if boolexp :
		instruction
	    if boolexp :
		instruction
	    else:
		instruction


erreurs:=
    erreur de non initialiation # NameError
    erreur de syntax # SyntaxError
    erreur d'indice # IndexError: list index out of range / tuple index out of range
    erreur de clef # KeyError: 'laclef'
    
Les accesseurs :
{} et []
affectation multiples

* des définitions de fonctions sur une opération
	def {{- n }}(p,q):
		return p {{ ope }} q
* des definition de foncton constantes 
	def {{- n }}():
                return {{- const }}
* des definition de fonction d'affichage
        def {{- n }}(k):
                print(k+2)

* des définitions d'expression avec une opération
	{{- var1}} = {{- var2}} {{ ope }} {{- var3}} 

* qu'affiche ce code ?
* que vaux la variable {{ dd }} ?

Comment ca marche:
	* une zone d'initialisation 
		définiton des fonctions 
		initialisation des variables
	* une zone d'expressions manipulant les variables  
	* une zone de "resultat" liée à la question 

