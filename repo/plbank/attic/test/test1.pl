#Ne doit pas fonctionner: du text se trouve en dehors de '=='

author=Coumes Quentin
title=Test1
tag=test 


EN DEHORS DE TAG

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

grader==
print('{"execution": "*italic* **bold** ***bold italic***", "other": "", "errormessages": "", "success": true, "feedback": "ceci n\'est pas un exercice doit \\u00eatre utilis\\u00e9 uniquement comme \\u00e9lement de test\\n*italic* **bold** ***bold italic***"}')
==

