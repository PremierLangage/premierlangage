# coding: utf-8

import logging

from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist, PermissionDenied
from django.http import Http404, HttpResponse, HttpResponseForbidden, HttpResponseRedirect
from django.shortcuts import redirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET

from classmanagement.models import Course
from playexo.enums import State
from playexo.models import Answer
from activity.models import Activity


logger = logging.getLogger(__name__)



@login_required
@csrf_exempt
def index(request):
    course = list()
    for item in request.user.course_set.all():
        summary = Answer.user_course_summary(item, request.user)
        completion = [{
            'name':  "",
            'count': summary[key][1],
            'class': key.template
        } for key in summary]
        
        course.append({
            'id':         item.id,
            'name':       item.name,
            'completion': completion,
            'label':      item.label,
            'nb_square':  sum([int(summary[key][1]) for key in summary])
        })
    return render(request, 'classmanagement/index.html', {'course': course})





@csrf_exempt
@login_required
def course_summary(request, pk):
    try:
        course = Course.objects.get(id=pk)
    except Course.DoesNotExist:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if request.user not in course.teacher.all():
        logger.info("User '" + request.user.username
                    + "' denied to access summary of course'" + course.name + "'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
    
    activities = course.activity_set.all().order_by("id")
    student = list()
    for user in course.student.all():
        tp = list()
        for activity in activities:
            summary = Answer.pltp_summary(activity.pltp, user)
            tp.append({
                'state':         [{
                    'percent': summary[i][0],
                    'count':   summary[i][1],
                    'class':   i.template
                }
                    for i in summary
                ],
                'name':          activity.pltp.json['title'],
                'activity_name': activity.name,
                'id':            activity.id,
            })
        student.append({
            'lastname':   user.last_name,
            'object':     user,
            'id':         user.id,
            'activities': tp,
        })
    
    # Sort list by student's name
    student = sorted(student, key=lambda k: k['lastname'])
    
    return render(request, 'classmanagement/course_summary.html', {
        'state':     [i for i in State if i != State.ERROR],
        'name':      course.name,
        'student':   student,
        'range_tp':  range(len(activities)),
        'course_id': pk,
    })



@csrf_exempt
@login_required
def activity_summary(request, pk, activity_pk):
    try:
        course = Course.objects.get(id=pk)
    except Course.DoesNotExist:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if request.user not in course.teacher.all():
        logger.warning("User '" + request.user.username + "' denied to access summary of course'"
                       + course.name + "'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
    
    activity = Activity.objects.get(pk=activity_pk)
    student = list()
    for user in course.student.all():
        tp = list()
        for pl in activity.pltp.indexed_pl():
            tp.append({
                'name':  pl.json['title'],
                'state': Answer.pl_state(pl, user)
            })
        student.append({
            'lastname': user.last_name,
            'object':   user,
            'id':       user.id,
            'question': tp,
        })
    
    # Sort list by student's name
    student = sorted(student, key=lambda k: k['lastname'])
    
    return render(request, 'classmanagement/activity_summary.html', {
        'state':         [i for i in State if i != State.ERROR],
        'course_name':   course.name,
        'activity_name': activity.name,
        'student':       student,
        'range_tp':      range(len(activity.pltp.indexed_pl())),
        'course_id':     pk,
    })



@csrf_exempt
@login_required
def student_summary(request, course_id, student_id):
    try:
        course = Course.objects.get(id=course_id)
    except Course.DoesNotExist:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if request.user not in course.teacher.all():
        logger.warning("User '" + request.user.username + "' denied to access summary of course'"
                       + course.name + "'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
    
    student = User.objects.get(id=student_id)
    activities = course.activity_set.all().order_by("id")
    
    tp = list()
    for activity in activities:
        question = list()
        for pl in activity.pltp.indexed_pl():
            state = Answer.pl_state(pl, student)
            question.append({
                'state': state,
                'name':  pl.json['title'],
            })
        len_tp = len(question) if len(question) else 1
        tp.append({
            'name':          activity.pltp.json['title'],
            'activity_name': activity.name,
            'id':            activity.id,
            'width':         str(100 / len_tp),
            'pl':            question,
        })
    
    return render(request, 'classmanagement/student_summary.html', {
        'state':       [i for i in State if i != State.ERROR],
        'course_name': course.name,
        'student':     student,
        'activities':  tp,
        'course_id':   course_id,
    })



@login_required
def redirect_activity(request, activity_id):
    request.session['current_activity'] = activity_id
    request.session['current_pl'] = None
    request.session['testing'] = False
    return HttpResponseRedirect(reverse("activity:play"))



