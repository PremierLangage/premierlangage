from django.shortcuts import redirect


def redirect_fb(path=''):
    response = redirect('/filebrowser/' + path)
    return response
