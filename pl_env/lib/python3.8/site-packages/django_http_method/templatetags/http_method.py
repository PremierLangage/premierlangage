from django import template
from django.utils.safestring import mark_safe


register = template.Library()


@register.simple_tag
def http_get():
    return mark_safe(r'<input type="hidden" name="_method" value="GET" \>')


@register.simple_tag
def http_post():
    return mark_safe(r'<input type="hidden" name="_method" value="POST" \>')


@register.simple_tag
def http_head():
    return mark_safe(r'<input type="hidden" name="_method" value="HEAD" \>')


@register.simple_tag
def http_put():
    return mark_safe(r'<input type="hidden" name="_method" value="PUT" \>')


@register.simple_tag
def http_delete():
    return mark_safe(r'<input type="hidden" name="_method" value="DELETE" \>')


@register.simple_tag
def http_patch():
    return mark_safe(r'<input type="hidden" name="_method" value="PATCH" \>')


@register.simple_tag
def http_options():
    return mark_safe(r'<input type="hidden" name="_method" value="OPTIONS" \>')


@register.simple_tag
def http_trace():
    return mark_safe(r'<input type="hidden" name="_method" value="TRACE" \>')
