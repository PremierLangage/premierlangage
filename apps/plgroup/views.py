from apps import plgroup
from django.shortcuts import render
from django.http import HttpResponse

from plgroup.models import PLGroup


def index(request):
    plgroups = PLGroup.objects.all()
    return render(request, 'plgroup/index.html', {'plgroups': plgroups})