@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component := MatchList

component.items %=
[
    { "id": "P1", "content": "P1", "target": false, "source": true },
    { "id": "P2", "content": "P2", "target": false, "source": true },
    { "id": "P3", "content": "P3", "target": false, "source": true },
    {
        "id": "P4",
        "content": '<img src="https://htpratique.com/wp-content/uploads/2018/06/Les-meilleurs-outils-pour-créer-un-quiz-et-questionnaires-en-ligne.jpg"/>',
        "target": true,
        "source": false
    },
    {
        "id": "P5",
        "content": '<img src="https://htpratique.com/wp-content/uploads/2018/06/Les-meilleurs-outils-pour-créer-un-quiz-et-questionnaires-en-ligne.jpg"/>',
        "target": true,
        "source": false
    },
    {
        "id": "P6",
        "content": '<img src="https://htpratique.com/wp-content/uploads/2018/06/Les-meilleurs-outils-pour-créer-un-quiz-et-questionnaires-en-ligne.jpg"/>',
        "target": true,
        "source": false
    }
]
==
before==
==

title = Match List Component

text==
==

form==
{{ component|component }}
==

evaluator==
grade = (100, "")
==
