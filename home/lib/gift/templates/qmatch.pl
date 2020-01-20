
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

matchList =: MatchList
choices= 
feedback =
horizontal % false

before==
import uuid
import random
import re
lines = choices.split('\n')
choices = []
matchList.nodes = []
expected = []
pattern = re.compile(r'(\=|\~)(?P<left>.*)->(?P<right>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
i = 0
for line in lines:
    m = pattern.match(line)
    if not m:
        continue
    a = m.group('left')
    b = m.group('right')
    sourceId = "source" + str(i)
    targetId = "target" + str(i)
    matchList.nodes.append({
        "id": sourceId,
        "content": "%s" % a,
        "source": True,
    })
    matchList.nodes.append({
    "id": targetId,
    "content": "%s" % b,
    "target": True,
    })
    i = i + 1
    expected.append({ "source": sourceId, "target": targetId })
    random.shuffle(matchList.nodes)
==

title==
==
text==
==

form==
{{ matchList|component }}
==

evaluator== #|python|
def in_links(conn, links):
    for link in links:
        if link['source'] == conn["source"] and  link['target'] == conn["target"]:
            return True
    return False

error = 0
for links in expected:
    if not in_links(links, matchList.links):
        error = error + 1
for link in matchList.links:
    link['css'] = 'error-state anim-fade'
    if in_links(link, expected):
        link['css'] = 'success-state  anim-flip'
if error == 0:
    grade = (100, '<span class="success-state">Good answser</span>')
else:
    grade = (0, '<span class="error-state">Bad answer, you made %d mistakes</span>' % error)
==








