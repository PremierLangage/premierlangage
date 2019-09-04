import jinja2
from django_http_method.templatetags import http_method



def firstof(*args):
    return next(iter([i for i in args if i]), "")



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
        "int":          int,
    })
    return env



class CustomUndefined(jinja2.Undefined):
    
    def _fail_with_undefined_error(self, *args, **kwargs):
        return ''
    
    
    __add__ = __radd__ = __mul__ = __rmul__ = __div__ = __rdiv__ = \
        __truediv__ = __rtruediv__ = __floordiv__ = __rfloordiv__ = \
        __mod__ = __rmod__ = __pos__ = __neg__ = __call__ = \
        __getitem__ = __lt__ = __le__ = __gt__ = __ge__ = __int__ = \
        __float__ = __complex__ = __pow__ = __rpow__ = \
        _fail_with_undefined_error
