import jinja2
from django.templatetags.static import static
from django.urls import reverse



def environment(**options):
    env = jinja2.Environment(**options)
    env.globals.update({
            'static':  static,
            'url':     reverse,
            'firstof': lambda *args: next(iter([i for i in args if i]), None),
    })
    env.extensions.update()
    return env
