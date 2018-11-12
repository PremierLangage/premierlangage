title=test

title+=
test
==

title+test

#comment
extends=working.pl
extends=fake.pl

test=@working.pl
test+=@working.pl

text==
tests
==

form==
tests
==

a %=
{"a" : 1,
"b" : 2}
==

b%{"a" : 1, "b" : 2}

settings.oneshot=yes
settings.allow_reroll=yes

@ /utils/sandboxio.py
@ /builder/before.py [builder.py]
@ /grader/evaluator.py [grader.py]
@ /fake.pl
fake=@/fake.pl

e.f.g = 1
e.f.h = 2
e.f.g +=
2
==
e.f.h = 1
e.f.i%{"a": 1, "b" : 2}

