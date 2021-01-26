@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

editor =: CodeEditor
editor.theme = dark
editor.language = python
editor.code ==
# write your code here
==

before==
==

title = Code Editor Component

text==
==

form==
{{ editor|component }}
==

evaluator==
grade = (100, f"student code:\n{editor.code}")
==
