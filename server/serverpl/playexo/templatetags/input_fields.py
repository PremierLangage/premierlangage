from django import template

register = template.Library()

@register.inclusion_tag('playexo/input_text.html')
def input_text(name, **kwargs):
    if 'style' in kwargs:
        style_string = kwargs['style']
    else: style_string = ''

    return {'name': name,  'style': style_string}

@register.inclusion_tag('playexo/input_select.html')
def input_select(name, liste, **kwargs):
    if 'style' in kwargs:
        style_string = kwargs['style']
    else: style_string = ''

    return  {'name': name,  'liste': liste, 'style': style_string}

@register.inclusion_tag('playexo/input_drag.html')
def input_drag(name, display, **kwargs):
    if 'style_contenu' in kwargs:
        style_contenu_string = kwargs['style_contenu']
    else: style_contenu_string = ''

    if 'style_boite' in kwargs:
        style_boite_string = kwargs['style_boite']
    else: style_boite_string = ''

    return {'name': name, 'display': display, 'style_boite': style_boite_string,
    'style_contenu': style_contenu_string}

@register.inclusion_tag('playexo/input_ggb.html')
def input_ggb(name_python, name_ggb):
    return {'name_python': name_python, 'name_ggb': name_ggb}

@register.inclusion_tag('playexo/input_drop.html')
def input_drop(name, display, **kwargs):
    if 'style_contenu' in kwargs:
        style_contenu_string = kwargs['style_contenu']
    else: style_contenu_string = ''

    if 'style_boite' in kwargs:
        style_boite_string = kwargs['style_boite']
    else: style_boite_string = ''

    return {'name': name, 'display': display, 'style_boite': style_boite_string,
    'style_contenu': style_contenu_string}
