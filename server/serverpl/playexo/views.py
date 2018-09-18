import json, logging

from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.urls import reverse

from loader.models import PL
from playexo.models import SessionActivity, Activity, Answer


logger = logging.getLogger(__name__)


@login_required
@csrf_exempt
def evaluate(request, activity_id, pl_id):
    status = json.loads(request.body.decode())
    activity = get_object_or_404(Activity, id=activity_id)
    session = get_object_or_404(SessionActivity, user=request.user, activity=activity)
    pl = get_object_or_404(PL, id=pl_id)
    exercise = session.exercise(pl)
    
    if 'requested_action' in status:
        if status['requested_action'] == 'save':
            Answer.objects.create(
                answers=status['inputs'],
                user=request.user,
                pl=pl,
                seed=exercise.context['seed']
            )
            return HttpResponse(json.dumps({
                "exercise": None,
                "navigation": None,
                "feedback": "Réponse(s) sauvegardé.",
            }), content_type='application/json')
        
        elif status['requested_action'] == 'submit':  # Validate
            answer, feedback, context = exercise.evaluate(request, status['inputs'])
            answer['activity'] = session.activity
            Answer.objects.create(**answer)
            return HttpResponse(
                json.dumps({
                    "navigation": exercise.get_navigation(request, context),
                    "exercise": exercise.get_exercise(request),
                    "feedback": feedback,
                }), 
                content_type='application/json'
            )
        return HttpResponseBadRequest("Unknown action")
    else:
        return HttpResponseBadRequest("Missing action")



@csrf_exempt
@login_required
def activity_view(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    
    if request.method == 'GET':
        action = request.GET.get("action")
        
        if action == "pl":
            pl_id = request.GET.get("pl_id")
            if not pl_id or not pl_id.isdigit():
                return HttpResponseBadRequest("Missing/invalid parameter 'pl_id'")
            session.current_pl = get_object_or_404(PL, id=pl_id)
            session.save()
            
        elif action == "pltp":
            session.current_pl = None
            session.save()
        
        elif session.current_pl and action == "reset":
            Answer.objects.create(user=request.user, pl=session.current_pl)
        
        elif session.current_pl and action == "reroll":
            exercise = session.exercise()
            exercise.built = False
            exercise.seed = None
            exercise.save()
        
        elif session.current_pl and action == "next":
            pls = activity.pltp.pl.all()
            print(session.current_pl)
            for previous, next in zip(pls, list(pls[1:]) + [None]):
                print(previous, next)
                print(previous == session.current_pl)
                if previous == session.current_pl:
                    session.current_pl = next
                    session.save()
                    break
            else:
                session.current_pl = None
                session.save()
        
        if action:
            # Remove get arguments from URL
            return redirect(reverse("playexo:activity", args=[activity_id]))
    
    if session.current_pl:
        last = Answer.last(session.current_pl, request.user)
        Answer.objects.create(
            user=request.user,
            pl=session.current_pl,
            answers=last.answers if last else {}
        )
    return render(request, 'playexo/exercise.html', session.exercise().get_context(request))
