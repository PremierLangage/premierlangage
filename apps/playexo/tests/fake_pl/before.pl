@ /utils/sandboxio.py
grader=@/grader/evaluator.py
builder=@/builder/before.py

title=From builder to grader

text=Il faut cliquer sur valider, normalement ça suffit

form==#|markdown|
==

before==#|python|
une_variable="une valeur de type string"
==

evaluator==#|python|
feedback = une_variable

grade=(100, feedback)
==