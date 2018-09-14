import pydenticon, io

from os.path import join

from django.conf import settings



def avatar_path(instance, filename):
    return "avatar/" + filename + '.' + settings.IDENTICON_SETTINGS['output_format']


def generate_identicon(user):
    p = settings.IDENTICON_SETTINGS
    generator = pydenticon.Generator(p['col'], p['row'], p['digest'], foreground=p['foreground'],
                                     background=p['background'])
    identicon = generator.generate(user.username, 300, 300, padding= p['padding'],
                                   output_format=p['output_format'])
    return io.BytesIO(identicon)

