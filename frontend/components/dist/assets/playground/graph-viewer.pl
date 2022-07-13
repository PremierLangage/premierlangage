# THIS EXAMPLE IS DEPRECATED SINCE THE COMPONENT WILL BE RENAMED SOON

@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

viewer =: GraphDrawer
viewer.graph ==
digraph G {
    a;
    b;
    c -> d;
    a -> c;
}
==
before==
==

title = Graph Viewer

text==
==

form==
{{ viewer|component }}
==

evaluator==
grade = (100, "")
==
