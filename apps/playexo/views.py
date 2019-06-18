import json
import logging

from django.contrib.auth.models import User
from django.http import HttpResponseBadRequest
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from loader.models import PL
from playexo.models import SessionTest


logger = logging.getLogger(__name__)



@require_POST
@csrf_exempt
def play_json(request):
    try:
        dic = json.loads(request.body.decode())
        pl = PL(name=dic["title"], json=dic, rel_path="undefined")
        pl.save()
        session = SessionTest(pl=pl, user=User.objects.get(username="Anonymous"))
        session.save()
        exercise = session.get_pl(request, template="playexo/render_json.html")
        if not dic:
            return HttpResponseBadRequest("Must provide a pl json")
        return render(request, 'playexo/play_json.html', {"exercise": exercise})
    except json.JSONDecodeError:
        return HttpResponseBadRequest("Invalid JSON")
