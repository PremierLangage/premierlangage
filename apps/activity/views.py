import csv
import io
import json
import logging

from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, Group
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.shortcuts import get_object_or_404, redirect, reverse, render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from activity.activity_type.utils import get_activity_type_class
from activity.forms import UploadFileForm
from activity.models import Activity, SessionActivity
from filebrowser.utils import reload_activity
from loader.models import PL
from playexo.models import Answer
from playexo.utils import render_feedback


logger = logging.getLogger(__name__)



@login_required
@require_POST
@csrf_exempt
def add_activity(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    new_id = int(request.POST.get('new-activity-id'))
    to_add = get_object_or_404(Activity, id=new_id)
    if to_add.activity_type == "course" or to_add.parent.id != 0 or to_add.id == 0:
        raise PermissionDenied("Vous ne pouvez pas ajouter cette activité")
    if not activity.is_teacher(request.user):
        raise PermissionDenied("Vous n'êtes pas professeur de cette activité")
    to_add.add_parent(activity)
    for student in activity.student.all():
        to_add.student.add(student)
    for teacher in activity.teacher.all():
        to_add.teacher.add(teacher)
    to_add.save()
    return redirect(reverse("activity:play", args=[activity_id]))



@login_required
@csrf_exempt
def reload(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    if activity.activity_type == "base" or not activity.is_teacher(request.user):
        raise PermissionDenied("Vous ne pouvez pas reload cette activité")
    if "__reload_path" not in activity.activity_data:
        raise PermissionDenied(
            "Cette activité a été créée avant la version 0.7.2 et n'est donc pas rechargeable")
    path = activity.activity_data["__reload_path"]
    return reload_activity(path, activity)



@login_required
def remove(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    if not activity.is_teacher(request.user):
        raise PermissionDenied("Vous devez être professeur de cette activité")
    activity.remove_parent()
    return redirect(request.META.get('HTTP_REFERER', '/'))



@login_required
@csrf_exempt
def play(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    
    if not activity.open:
        raise PermissionDenied("Cette activité est fermée")
    if not activity.is_member(request.user) and activity_id != 0:
        raise PermissionDenied("Vous n'appartenez pas à cette activité")
    
    return a_type.template(request, activity, session)



@login_required
@csrf_exempt
def next(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    
    if not activity.open:
        raise PermissionDenied("Cette activité est fermée")
    if not activity.is_member(request.user):
        raise PermissionDenied("Vous n'appartenez pas à cette activité")
    
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
    
    if not activity.open:
        raise PermissionDenied("Cette activité est fermée")
    if not activity.is_member(request.user):
        raise PermissionDenied("Vous n'appartenez pas à cette activité")
    
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
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    
    if activity.teacher.filter(username=request.user.username):
        return a_type.teacher_dashboard(request, activity, session)
    elif activity.student.filter(username=request.user.username):
        return a_type.student_dashboard(request, activity, session)
    else:
        raise PermissionDenied("Vous n'appartenez pas à cette activité")



@login_required
def notes(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    if not activity.is_teacher(request.user):
        raise PermissionDenied("Vous devez être professeur pour récupérer les notes")
    session, _ = SessionActivity.objects.get_or_create(user=request.user, activity=activity)
    a_type = get_activity_type_class(activity.activity_type)()
    return a_type.notes(activity, request)



@login_required
@csrf_exempt
def index(request):
    return redirect(reverse("activity:play", args=[0]))



def disconnect(request):
    logout(request)
    return redirect(reverse('activity:login'))



@login_required
def moveprev(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    if not activity.is_teacher(request.user):
        raise PermissionDenied("Vous devez être professeur pour récupérer les notes")
    activity.move_prev()
    return redirect(request.META.get('HTTP_REFERER', '/'))



@login_required
def movenext(request, activity_id):
    activity = get_object_or_404(Activity, id=activity_id)
    if not activity.is_teacher(request.user):
        raise PermissionDenied("Vous devez être professeur pour récupérer les notes")
    activity.move_next()
    return redirect(request.META.get('HTTP_REFERER', '/'))

@require_POST
def create_group_from_csv_file(request):
    csv_file = request.FILES['file'].read().decode('UTF-8')
    csv_file = csv_file.split("\n")
    nb_modif = 0
    del csv_file[0]

    for row in csv_file:
        row = row.split(',')
        if row == ['']:
            continue
        nb_modif += 1
        if (row[0] == '') or (row[1] == '') or (row[2] == '') or (row[3] == ''):
            form = UploadFileForm()
            return render(request, 'activity/activity_type/course/load_csv.html', {'form':form,
                                                                                   'error':True})
        user = User.objects.get(email=row[0])
        groups = [user.groups.filter(name__contains='Amphi'),
        user.groups.filter(name__contains='TD'),
        user.groups.filter(name__contains='TP')]

        for group in groups:
            delete_groups_of_user(user, group)
        Group.objects.get_or_create(name='Amphi' + row[1])[0].user_set.add(user)
        Group.objects.get_or_create(name='TD' + row[2])[0].user_set.add(user)
        Group.objects.get_or_create(name='TP' + row[3])[0].user_set.add(user)
    users = User.objects.all()
    return render(request, 'activity/activity_type/course/list_csv.html', {'users': users,
                                                                            'nb_modif':nb_modif})

def delete_groups_of_user(user, list_groups):
    if list_groups.count() != 0:
        for group in list_groups:
            user.groups.remove(group)


def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            return create_group_from_csv_file(request)
    else:
        form = UploadFileForm()
    return render(request, 'activity/activity_type/course/load_csv.html', {'form': form,
                                                                           'error': False})
