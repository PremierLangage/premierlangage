@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

reveal =: RevealViewer
reveal.content ==
<section data-markdown>
    <textarea data-template>
    ## Slide 1
    A paragraph with some text and a [link](https://hakim.se).
    ---
    ## Slide 2
    ---
    ## Slide 3
    </textarea>
</section>
==

title = RevealJS Component

text==
Showcase
==

# GENERATE A RANDOM QUESTION
before==

==

# PRESENT THE QUESTION TO THE STUDENT
form==
{{ reveal|component }}
==

# EVALUATE THE STUDENT ANSWER
evaluator==

==
