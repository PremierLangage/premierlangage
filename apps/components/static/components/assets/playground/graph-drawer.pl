@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

component.cid = component
component.selector = pl-graph-drawer
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
