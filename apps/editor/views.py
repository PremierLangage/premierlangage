from django.shortcuts import render

from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    """ Used by the editor module to navigate """
    return render(request, 'editor/index.html')

