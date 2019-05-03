from django.template import Library


register = Library()



@register.filter
def dict_value(dic, key=None):
    return False if (key is None or type(dic) != dict or key not in dic) else dic[key]
