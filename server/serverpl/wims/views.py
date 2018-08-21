import requests
import logging 

from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse

logger = logging.getLogger(__name__)

def index(request, path):
    logger.error(str(request))
    response = requests.get(settings.WIMS_MODULE_URL + path, verify=False)
    return HttpResponse(response.text, status=response.status_code)
