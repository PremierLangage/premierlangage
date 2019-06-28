# coding: utf-8

import sys, json, jsonpickle
import importlib

class Component:

    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)

    def __str__(self):
        return str(vars(self))


def components_to_class(context):
    """
    Converts every dict object in 'context' 
    with the key 'cid' to an instance of Component class
    """
    for k, v in context.items():
        if isinstance(v, dict) and 'cid' in v:
            context[k] = Component(**v)

def deserialize_components(context):
    """
    Moves the components in 'context["response"]'  to context[k]
    where k is the cid of a component.
    """
    response = dict(context["response"])
    for k, v in response.items():
        if isinstance(v, dict) and 'cid' in v:
            context[k] = Component(**response[k])
            # TODO del context["response"][k]

def get_answers():
    """Return a dictionnary containing every answer."""
    with open(sys.argv[2], "r") as f:
        answers = json.load(f)
    return answers


def get_context():
    """Return the dictionnary containing the context of the exercise."""
    with open(sys.argv[1], "r") as f:
        context = json.load(f)
    components_to_class(context)
    return context


def output(grade, feedback, context=None):
    """Used to output the grade, feedback and context to the sandbox.
    
    Parameters:
        grade - (int) Grade of the student. Should be an integer or implementing __int__.
        feedback - (str) Feedback shown to the student. Should be a str or implementing __str__.
        context - (dict - optionnal) Modified context of the exercise."""
    with open(sys.argv[3], "w+") as f:
        f.write(jsonpickle.encode(context if context else get_context(), unpicklable=False))
    
    with open(sys.argv[4], "w+") as f:
        print(str(feedback), file=f)
    
    print(int(grade))
    
    sys.exit(0)








