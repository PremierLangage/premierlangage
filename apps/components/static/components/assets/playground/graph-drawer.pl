@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component =: GraphDrawer
component.graph ==
digraph G {
    a;
    b;
    c -> d;
    a -> c;
}
==
before==
==

title = Graph Drawer

text==
==

form==
{{ component|component }}
==

evaluator==
grade = (100, "")
==
