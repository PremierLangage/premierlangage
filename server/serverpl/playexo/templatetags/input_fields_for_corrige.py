from django import template

register = template.Library()

@register.inclusion_tag('playexo/input_text_for_corrige.html', takes_context=True)
def input_text(context, name, **kwargs):
    style_string = ''

    if 'style' in kwargs: style_string = kwargs['style']
    
    if (name in context['answer_data']) and (context['answer_data'][name] == True):
        is_ok = True
    else: is_ok = False

    if name in context['form_data']:
        data = context['form_data'][name]
    else: data = ''

    return  {'name': name, 'style': style_string, 'is_ok': is_ok, 'data': data}

@register.inclusion_tag('playexo/input_text_for_corrige.html', takes_context=True)
def input_select(context, name, liste, **kwargs):
    style_string = ''

    if 'style' in kwargs: style_string = kwargs['style']

    if (name in context['answer_data']) and (context['answer_data'][name] == True):
        is_ok = True
    else: is_ok = False

    if name in context['form_data']:
        data = context['form_data'][name]
    else: data = ''

    return  {'name': name, 'style': style_string, 'is_ok': is_ok, 'data': data}

@register.inclusion_tag('playexo/input_drag_for_corrige.html', takes_context=True)
def input_drag(context, name, display, **kwargs):
    if 'style_contenu' in kwargs:
        style_contenu_string = kwargs['style_contenu']
    else:
        style_contenu_string = ''

    if 'style_boite' in kwargs:
        style_boite_string = kwargs['style_boite']
    else: style_boite_string = ''

    if context['form_data'][name] != '' :
        drag_it = True
        destination = context['form_data'][name]
    else:
        drag_it = False
        destination = ''

    return {'name': name, 'display': display, 'style_boite': style_boite_string,
    'style_contenu': style_contenu_string, 'drag_it': drag_it, 'destination': destination}

@register.inclusion_tag('playexo/input_ggb_for_corrige.html')
def input_ggb(name_python, name_ggb):
    return {'name_python': name_python, 'name_ggb': name_ggb}

@register.inclusion_tag('playexo/input_drop_for_corrige.html', takes_context=True)
def input_drop(context, name, display, **kwargs):
    if 'style_contenu' in kwargs:
        style_contenu_string = kwargs['style_contenu']
    else:
        style_contenu_string = ''

    if 'style_boite' in kwargs:
        style_boite_string = kwargs['style_boite']
    else: style_boite_string = ''

    if (name in context['answer_data']) and (context['answer_data'][name] == True):
        is_ok = True
    else: is_ok = False

    if (name in context['reverse_form_data']):
        drop_it = True
        origin = context['reverse_form_data'][name]
    else:
        drop_it = False
        origin = ''

    return {'name': name, 'display': display, 'style_boite': style_boite_string,
    'style_contenu': style_contenu_string, 'is_ok': is_ok, 'drop_it': drop_it, 'origin': origin}
