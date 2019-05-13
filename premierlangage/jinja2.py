import jinja2
from django.templatetags.static import static
from django.urls import reverse
from markdown import markdown



def firstof(*args):
    return next(iter([i for i in args if i]), None)



def capfirst(s):
    return s[0].upper() + s[1:]



def make_list(s):
    return list(str(s))



def first(l):
    return l[0] if l else None



def custom_markdown(text, *args, **kwargs):
    return markdown(text, *args, **kwargs)



def environment(**options):
    env = jinja2.Environment(**options)
    env.globals.update({
            'static':    static,
            'url':       reverse,
            'firstof':   firstof,
            'capfirst':  capfirst,
            'make_list': make_list,
            'first':     first,
            'markdown':  custom_markdown,
    })
    env.extensions.update()
    return env
