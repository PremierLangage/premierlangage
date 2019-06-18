import json
import logging

from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, redirect, reverse
from django.views.decorators.csrf import csrf_exempt

from activity.activity_type.utils import get_activity_type_class
from activity.models import Activity, SessionActivity
from loader.models import PL
from playexo.models import Answer
from playexo.utils import render_feedback


logger = logging.getLogger(__name__)



@login_required
@csrf_exempt
def play(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    if not activity.open:
        return a_type.end(activity, session)
    return a_type.template(request, activity, session)



@login_required
@csrf_exempt
def next(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(SessionActivity, user=request.user,
                                                    activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    if not activity.open:
        return a_type.end(activity, session)
    return a_type.next(activity, session)



@login_required
@csrf_exempt
def evaluate(request, activity_id, pl_id):
    status = json.loads(request.body.decode())
    activity = get_object_or_404(Activity, id=activity_id)
    session = get_object_or_404(SessionActivity, user=request.user, activity=activity)
    pl = get_object_or_404(PL, id=pl_id)
    exercise = session.session_exercise(pl)
    a_type = get_activity_type_class(activity.activity_type)()
    
    if 'requested_action' in status:
        if status['requested_action'] == 'save':
            Answer.objects.create(
                answers=status['inputs'],
                user=request.user,
                pl=pl,
                seed=exercise.context['seed']
            )
            return HttpResponse(json.dumps({
                "exercise":   None,
                "navigation": None,
                "feedback":   "Réponse(s) sauvegardé.",
            }), content_type='application/json')
        
        elif status['requested_action'] == 'submit':  # Validate
            answer, feedback = exercise.evaluate(request, status['inputs'])
            answer['activity'] = session.activity
            feedback, to_be_saved = a_type.validate(activity, session, answer, feedback,
                                                    action="submit")
            if to_be_saved:
                Answer.objects.create(**answer)
            return HttpResponse(
                json.dumps({
                    "navigation": a_type.navigation(activity, session, request),
                    "exercise":   session.current_pl_template(request),
                    "feedback":   render_feedback(feedback),
                }),
                content_type='application/json'
            )
        return HttpResponseBadRequest("Unknown action")
    else:
        return HttpResponseBadRequest("Missing action")



@login_required
@csrf_exempt
def dashboard(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(SessionActivity, user=request.user,
                                                       activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    if not activity.open:
        return a_type.end(activity, session)
    
    if request.user in activity.teacher.all():
        return a_type.teacher_dashboard(request, activity, session)
    
    elif request.user in activity.student.all():
        return a_type.student_dashboard(request, activity, session)



@login_required
def notes(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(SessionActivity, user=request.user,
                                                       activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    if request.user not in activity.teacher.all():
        raise PermissionDenied("Vous devez être professeur pour récupérer les notes")
    return a_type.notes(activity, request)



@login_required
@csrf_exempt
def index(request):
    return redirect(reverse("activity:play", args=[0]))



def disconnect(request):
    logout(request)
    return redirect(reverse('activity:login'))
