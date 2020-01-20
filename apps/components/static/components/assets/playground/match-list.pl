@ /utils/sandboxio.py

grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

# STEP 1
match =: MatchList

before==
import random
match.nodes = []
expected = []
for i in range(4):
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    sourceId = "source" + str(i)
    targetId = "target" + str(i)

    match.nodes.append({
        "id": sourceId,
        "content": "%d * %d" % (a, b),
        "source": True,
    })

    match.nodes.append({
        "id": targetId,
        "content": "%d" % (a * b),
        "target": True,
    })
    expected.append({ "source": sourceId, "target": targetId })
random.shuffle(match.nodes)
==

title==
Match List Component
==

text==
*Link each operation to the appropriate result.*
==

form==
{{ match|component }}
==

evaluator== #|python|

def in_links(conn, links):
    for e in links:
        if e['source'] == conn["source"] and  e['target'] == conn["target"]:
            return True
    return False

error = 0
for e in expected:
    if not in_links(e, match.links):
        error = error + 1

for e in match.links:
    e['css'] = 'error-state animated fadeIn'
    if in_links(e, expected):
        e['css'] = 'success-state  animated rotateIn'

if error == 0:
    grade = (100, '<span class="success-state animated pulse infinite">Good answser</span>')
else:
    grade = (0, '<span class="error-state animated pulse infinite">Bad answer, you made %d mistakes</span>' % error)
==
