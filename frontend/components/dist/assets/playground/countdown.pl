@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

countdown % { "cid": "countdown", "selector": "c-countdown" }
countdown.time % 10
countdown.hidden % false

autoSubmit== #|js|
const btn = document.querySelector('.action-submit');
btn.click()
==

logOnConsole==#|js|
// you may open the browser console to see the message
console.log('hello world');
==

before== #|python|
countdown.actions = [
    { "time": 5, "action": logOnConsole },
    { "time": 0, "action": autoSubmit }
]
counter = 0
==

title = Count Down Component
text =
form ==
 {{ countdown|component }}
==

evaluator== #|python|
remaining = countdown.time
# reset timer
for e in countdown.actions:
    e['consumed'] = False

countdown.time = 10
counter += 1
grade = (100, f'<h3>remaining: {remaining}, counter: {counter}</h3>')

==
