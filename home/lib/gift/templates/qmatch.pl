@ /utils/sandboxio.py
@ /grader/evaluator.py [grader.py]
@ /builder/before.py [builder.py]

choices= 
horizontal % false
general_feedback =
 
match =: MatchList

title = PLEASE OVERRIDE THE TITLE OF THE EXERCISE
text  = PLEASE OVERRIDE THE TEXT OF THE EXERCISE
form  = {{ match|component }}

before== #|python|
import uuid
import random
import re
lines = choices.split('\n')
choices = []
match.nodes = []
expected = []
pattern = re.compile(r'(\=|\~)(?P<source>.*)->(?P<target>(?:(?:\\\#)|[^\#])+)(?:\#(?P<feedback>.*))?')
for i, line in enumerate(lines):
    m = pattern.match(line)
    if not m:
        continue

    source = m.group('source')
    target = m.group('target')
    feedback = m.group('feedback')

    sourceId = "source" + str(i + 1)
    targetId = "target" + str(i + 1)

    match.nodes.append({
        "id": sourceId,
        "content": source,
        "source": True
    })

    match.nodes.append({
        "id": targetId,
        "content": target,
        "target": True
    })

    expected.append({ "source": sourceId, "target": targetId, "feedback": feedback })
    random.shuffle(match.nodes)
==

evaluator== #|python|
def in_links(conn, links):
    for link in links:
        if link['source'] == conn["source"] and  link['target'] == conn["target"]:
            return True
    return False

feedback = ''
error = 0
for link in expected:
    if not in_links(link, match.links):
        error += 1
    elif link["feedback"] :
        feedback += link["feedback"] + "<br/>" 
    
for link in match.links:
    link['css'] = 'error-state anim-fade'
    if in_links(link, expected):
        link['css'] = 'success-state anim-fade'

feedback += general_feedback
total = len(expected) 
score = ((total - error) / total) * 100
grade = (score, f"<p>{feedback}</p>")
==

