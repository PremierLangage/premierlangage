import requests

from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse


def index(request, path):
	response = requests.get(settings.WIMS_MODULE_URL + path, verify=False)
	return HttpResponse(response.text, status=response.status_code)
