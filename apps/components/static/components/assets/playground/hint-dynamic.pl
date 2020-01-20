@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

hints % { "cid": "hints", "selector": "c-hint" }
hints.label = **Stucked?** Ask a hint.
hints.confirmMessage ==
The usage of a hint may affect your final score!
==

hints.shouldConfirm % true
hints.confirmTitle = Are you sure you want a hint ?
hints.confirmOkTitle = Yes
hints.confirmNoTitle = No

hints.script == #|js|

const hints = document.querySelector(`[cid="hints"]`);
const checkbox = document.querySelector(`[cid="checkbox"]`);

let consumed = false;
for (const index of [0, 3]) {
    const checkboxItem = checkbox.items[index];
    if (!checkboxItem.checked) {
        hints.consumedCount++;
        hints.items.push({
            "consumed": true,
            "css": "warning-state animated fadeIn",
            "content": `**${checkboxItem.content}**`
        });
        checkboxItem.checked = true;
        consumed = true;
        break;
    }
}
if (!consumed) {
    alert('No more hints');
}
==

checkbox =: CheckboxGroup
checkbox.cid = checkbox
checkbox.items %=
[
    { "id": "import", "content": "**import**" },
    { "id": "using", "content": "**using**" },
    { "id": "include", "content": "**include**" },
    { "id": "def", "content": "**def**"}
]
==

before==
==

title==
Hint Component With Actions
==

text==
select the words that are part of the Python language keywords.
==

form==
{{ hints|component }}
<br/>
{{ checkbox|component }}
==

evaluator==
score = 0
feedback = ''
for i, e in enumerate(checkbox.items):
    if i in [0, 3]:
        e['css'] = 'success-border animated pulse infinite'
        if e['checked']:
            score += 50
            e['css'] = 'success-border'
    elif e['checked']:
        e['css'] = 'error-border'

score -= 25 * hints.consumedCount
score = max(0, score)

if score == 100:
    grade = (score, f'<span class="success-state animated pulse infinite">Good answer</span>')
elif hints.consumedCount > 0:
    grade = (score, f'<span class="warning-state animated pulse infinite">You score is {score}, You used {hints.consumedCount} hint(s)</span>')
else:
    grade = (score, f'<span class="error-state animated pulse infinite">Bad answer</span>')
==

