# Copyright 2016 Dominique Revuz <dr@univ-mlv.fr>
author=Dominique Revuz
title=Toujours Correct
tag=test # N'oubliez pas de remplir ce champs svp
form==
prout
==
type=sandbox

text==

*italic*
**bold**
***bold italic***

# section heading
## sub-section heading
### sub-sub-section heading

* first point
* second point
* third point

An [example link](http://example.com/ "Optional Title") in a sentence.

 $$ x\ =\ \frac{\sqrt{144}}{2}\ \times\ (y\ +\ 12) $$ 

*italic*\n**bold**\n***bold italic***\n# section heading\n## sub-section heading\n* first point\n* second point\n* third point
==

soluce=""

grader==
print('{"execution": "*italic* **bold** ***bold italic***", "other": "", "errormessages": "", "success": true, "feedback": "ceci n\'est pas un exercice doit \\u00eatre utilis\\u00e9 uniquement comme \\u00e9lement de test\\n*italic* **bold** ***bold italic***"}')
==
template=python/0PLG/template.pl

# n'utilise pas 0PLG
