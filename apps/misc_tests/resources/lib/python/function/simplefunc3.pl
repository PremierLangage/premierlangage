template=/python/0PLG/template.pl
title=Simple 3 
name= Une fonction 

tag=list|function|dict
text==

# Caractères


En sachant que les caractères 'A' à 'Z' ont les codes ascii de 65 à 90 et que la fonction **chr** retourne le caractère associé au code ascii, par exemple:
	chr(65) == 'A'
	chr(66) == 'B'
En sachant que les caractères 'a' à 'z' ont les codes ascii de 97 à 122.

Que la fonction **ord** est la fonction qui donne le code ascii en fonction de la lettre par exemple:
	ord('a') == 97
	ord('c') == 99
	ord('B') == 66

Ecrire une fonction **toupper** qui prend une chaine en paramêtre et qui retourne la chaine ou tout les caractères de 'a' à 'z' on été transformés en masjucule ('A' à 'Z' correspondant), les autres caractères étant inchangés.

Ecrire une fonction **compte** qui prend deux parametres une chaine **s** et un caractère **c** et qui retourne le nombre d'apparitions de **c** dans **s**.

Ecrire une fonction **compta** qui prend en parametres une **chaine** et un **code** ascii et qui retourne le nombre d'apparitions du caractère associé au **code** dans la **chaine**. 

Ecrire une fonction **histo** qui prend une **chaine** en parametres et qui affiche pour chaque lettre apparaisant dans la **chaine** le nombre de fois ou elle apparait:

	histo("Abracadabra")
	A 1
	a 4
	b 2
	c 1
	d 1
	r 2

Ecrire une fonction **histo2** qui prend une **chaine** en parametres et qui affiche pour chaque lettre apparaisant dans la **chaine** le nombre de fois ou elle apparait sans faire de différence entre minuscules et majuscules :
	histo2("Abracadabra")
	A 5
	B 2
	C 1
	D 1
	R 2


==


pltest==
>>> toupper("aAbBzZ")
'AABBZZ'
>>> compte("aabbcc",'a')
2
>>> compta("AABBCC",65)
2
>>> compta("AABCCD",97)
0
>>> histo("abracadabra")
a 5
b 2
c 1
d 1
r 2
>>> histo("Abracadabra")
A 1
a 4
b 2
c 1
d 1
r 2
>>> histo("AbracadabraZ")
A 1
Z 1
a 4
b 2
c 1
d 1
r 2
>>>  
==

testcode==

def toupper(s):
	return s.upper()


def compte(s, c):
	return s.count(c)

def compta(chaine, code):
	return chaine.count(chr(code))

def histo(s):
	d=dict()
	for l in s:
		d[l] = s.count(l)
	for k in sorted(d.keys()):
		print(k,d[k])

def histo2(s):
	d=dict()
	for l in s :
		if ord(l) in range(97,123):
			d[l] = s.count(l) + s.count(str(l).upper())
		elif ord(l) in range(65,91):
			d[l] = s.count(l) + chr(ord(l) + 32)
	for k in sorted(d.keys()):
		print(k,d[k])
==


