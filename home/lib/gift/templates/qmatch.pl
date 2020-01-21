
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

matchList =: MatchList
choices= 
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
    c = m.group('feedback')
    sourceId = "source" + str(i)
    targetId = "target" + str(i)
    matchList.nodes.append({
        "id": sourceId,
        "content": "%s" % a,
        "source": True,
        "feedback":c,
    })
    matchList.nodes.append({
    "id": targetId,
    "content": "%s" % b,
    "target": True,
    "feedback":c,
    })

    i = i + 1
    expected.append({ "source": sourceId, "target": targetId, "feedback":c,})
    random.shuffle(matchList.nodes)
==

title==
==
text==
==

feedbackGeneral==
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
feedback = ''
error = 0
for links in expected:
    if not in_links(links, matchList.links):
        error = error + 1
    elif links["feedback"] :
        feedback +=  "<br>" + links["feedback"] 
    
for link in matchList.links:
    link['css'] = 'error-state anim-fade'
    if in_links(link, expected):
        link['css'] = 'success-state  anim-flip'
feedback +=  "<br>" + feedbackGeneral
if error == 0:
    grade = (100, f"{feedback}")
else:
    grade = (0, f"{feedback}")
feedback = ""
==








