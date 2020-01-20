@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component1 =: Text
component1.text = The quick brown fox jumps over the lazy dog.
component1.css = success-state

component2 =: Text
component2.text = The quick brown fox jumps over the lazy dog.
component2.css = myclass animated fadeIn

before==
==

title==
Styling a component
==

text==
==

form==
{{ component1|component}}
{{ component2|component}}
==

evaluator==
grade = (100, 'OK')
==

# DEFINITION OF YOUR CUSTOM STYLES
# STYLE TAG IS REQUIRED BECAUSE YOU CAN INSERT
# MULTIPLE STYLES
extracss ==
<style>
.myclass {
    color: red !important;
    font-size: 24px !important;
}
</style>
==
