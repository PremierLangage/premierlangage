import inspect

from django.utils.encoding import force_text, python_2_unicode_compatible

try:
    from enum import Enum as BaseEnum
    from enum import EnumMeta as BaseEnumMeta
    from enum import _EnumDict
except ImportError:  # pragma: no cover
    raise ImportError('Missing the enum module. Please install enum34.')



class EnumMeta(BaseEnumMeta):
    def __new__(cls, name, bases, attrs):
        classes = {}
        
        for n, v in filter(lambda i:inspect.isclass(i[1]), attrs.items()):
            ln = n.lower()
            if ln in classes:
                raise AttributeError('Member '+ln+' already exists.\
                    Please check that no [class name].lower() conflicts.')
            classes[ln] = (n, v)
        
        for n, _ in classes.values():
            del attrs[n]
            if hasattr(attrs, '_member_names'):
                attrs._member_names.remove(n)
        
        enum = BaseEnumMeta.__new__(cls, name, bases, attrs)
        for member in enum:
            for ln, clas in [(ln, v[1]) for ln, v in classes.items()]:
                try:
                    setattr(member, ln, getattr(clas, member.name))
                except AttributeError:
                    pass
            if not hasattr(member, "label"):
                member.label = member.name.replace('_', ' ').title()
                
        return enum


@python_2_unicode_compatible
class Enum(EnumMeta('Enum', (BaseEnum,), _EnumDict())):
    @classmethod
    def choices(self):
        """
        Returns a list formatted for use as field choices.
        (See https://docs.djangoproject.com/en/dev/ref/models/fields/#choices)
        """
        return tuple((m.value, m.label) for m in self)

    def __str__(self):
        """
        Show our label when Django uses the Enum for displaying in a view
        """
        return force_text(self.label)


@python_2_unicode_compatible
class IntEnum(int, Enum):
    def __str__(self):  # See Enum.__str__
        return force_text(self.label )
