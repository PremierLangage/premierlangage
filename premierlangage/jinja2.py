import jinja2
from django_http_method.templatetags import http_method
from html import unescape



def firstof(*args):
    return next(iter([i for i in args if i]), None)



def capfirst(s):
    return s[0].upper() + s[1:]



def make_list(s):
    return list(str(s))



def first(l):
    return l[0] if l else None



def environment(**options):
    env = jinja2.Environment(**options)
    env.globals.update({
            'firstof':      firstof,
            'capfirst':     capfirst,
            'make_list':    make_list,
            'first':        first,
            "http_get":     http_method.http_get,
            "http_post":    http_method.http_post,
            "http_head":    http_method.http_put,
            "http_delete":  http_method.http_delete,
            "http_patch":   http_method.http_patch,
            "http_options": http_method.http_options,
            "http_trace":   http_method.http_trace,
            'print': print,
    })
    return env
