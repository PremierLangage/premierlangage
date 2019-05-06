#!/usr/bin/env python3
# coding: utf-8

import sys, json, jsonpickle, time

import random

from sandboxio import output, get_context, get_answers

missing_evaluator_stderr = """\
The key 'evaluator' was not found in the context.
When using this grader, the PL must declare a script inside a key 'evaluator'. This script have
access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is the grade between [0, 100]."""

missing_grade_stderr = """\
'evaluator' did not declare the variable 'grade'. 
The script have access to every variable declared in the PL and its 'before' script.
It should declare a variable 'grade' which should contain a tuple (int, feedback) where int is the grade between [0, 100]."""

import graderC


if __name__ == "__main__":
    """
    This program proceed the grading of standard C sandbox exercice
    """
    if len(sys.argv) < 5:
        msg = ("Sandbox did not call grader properly:\n"
               +"Usage: python3 grader.py [input_json] [answer_file] [output_json] [feedback_file]")
        print(msg, file=sys.stderr)
        sys.exit(1)
    
    # Here
    dic = get_context()
    truc = get_answers() # {'answer':value } pas que form_answer 
    with open("basic.c","w") as basic:
        basic.write(truc["answer"])
        # print(truc["answer"], file=sys.stderr)
    basic.close()

    from graderC import graderI, graderII
    assert('tests' in dic), "Your exercice should defined tests inside a tests pl markup environement.%s %s"%(str(dic), str(dic['dic']))
    dico_tests = eval( dic['tests'] )
    if (len(dico_tests) == 0):
        print("Your exercice do not define any test ! You shoul add at least one test.", file=sys.stderr)
        sys.exit(1)
    if len(dico_tests[0]) not in [3, 4]:
        print("Your tests do not appear to be valid with the available graders.", file=sys.stderr)
        sys.exit(1)

    if len(dico_tests[0]) == 3:
        assert('solution' in dic), "If your tests do not provide excepted outputs, please provide a teacher solution."
        dic = graderII(dico_tests, dic)
    else:
        dic = graderI(dico_tests, dic)
    output(dic['success']*100, dic['feedback'], dic)





