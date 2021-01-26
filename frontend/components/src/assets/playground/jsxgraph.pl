# THIS EXAMPLE IS DEPRECATED SINCE THE COMPONENT WILL BE RENAMED SOON

@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

graph =: MathDrawer
graph.script ==
const grid = board.create('grid', [], {gridX: 0.25, gridY: 0.25});
const Ox = board.create('axis', [[0, 0], [1, 0]], {ticks: {visible: false}});
const Oy = board.create('axis', [[0, 0], [0, 1]], {ticks: {visible: false}});
const circle = board.create('circle', [[0, 0], [0, 1]], {strokeColor: 'blue', fixed: true});
const O = board.create('point', [0, 0], {size: 1, name: 'O', color: 'black', fixed: true});
const A = board.create('point', [1, 0], {size: 1, name: 'A', color: 'black', fixed: true});
const M = board.create('glider', [1, 1, circle], {size: 2, name: 'M', color: 'red'});
const secOAM = board.create('sector', [O, A, M], {color: 'orange'});
==

before==
==

title==
JSX Graph Component
==

text==
==

form==
{{ graph|component }}
==


evaluator==
grade = (100, '');
==
