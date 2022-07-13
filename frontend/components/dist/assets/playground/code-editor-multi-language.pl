@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

editor =: CodeEditor
editor.theme = light
editor.language = python
editor.codes %=
[
    { "language": "csharp", "code": "// write a csharp code here" },
    { "language": "c", "code": "// write a c code here" },
    { "language": "cpp", "code": "// write a cpp code here" },
    { "language": "java", "code": "// write a java code here" },
    { "language": "python", "code": "# write a python code here" },
    { "language": "javascript", "code": "// write a javascript code here" }
]
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
grade = (100, f"student code:\n{editor.code}, language: {editor.language}")
==
