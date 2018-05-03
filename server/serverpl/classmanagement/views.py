#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Python [Version]
#
#  Author: Coumes Quentin     Mail: qcoumes@etud.u-pem.fr
#  Created: 2017-07-30
#  Last Modified: 2017-07-30


import logging

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.http import Http404, HttpResponseRedirect
from django.urls import reverse

from classmanagement.models import Course
from user_profile.models import Profile

from playexo.models import Answer, Activity
from playexo.views import activity_receiver
from playexo.enums import State


logger = logging.getLogger(__name__)


@login_required
@csrf_exempt
def index(request):
    course = list()
    for item in request.user.course_set.all():
        summary = Answer.user_course_summary(item, request.user)
        completion = [{'name': "", 'count': summary[key][1], 'class': key.template} for key in summary]
        
        course.append({
            'id': item.id,
            'name': item.name,
            'completion': completion,
            'nb_square': sum([int(summary[key][1]) for key in summary])
        })
        
    return render(request, 'classmanagement/index.html', {'course': course})



@csrf_exempt
@login_required
def course_view(request, id):
    try:
        course = Course.objects.get(id=id)
    except:
        raise Http404("Course (id: "+str(id)+") not found.")
    if not course.is_member(request.user) and not request.user.profile.is_admin():
        logger.warning("User '"+request.user.username+"' denied to access course'"+course.name+"'.")
        raise PermissionDenied("Vous n'êtes pas membre de cette classe.")
    
    if request.method == 'GET':
        if request.GET.get("action", None) == "toggle_activity":
            if not request.user in course.teacher.all():
                logger.warning("User '"+request.user.username+"' denied to toggle course state'"+course.name+"'.")
                raise PermissionDenied("Vous n'avez pas les droits nécessaires pour fermer/ouvrir cette activité.")
            try:
                act = Activity.objects.get(id=request.GET.get("id", None))
                act.open = not act.open
                act.save()
                logger.info("User '"+request.user.username+"' set activity '"+act.name+"' 'open' attribute to '"+str(act.open)+"' in '"+course.name+"'.")
            except:
                raise Http404("L'activité d'ID '"+str(request.GET.get("id", None))+"' introuvable.")
    
    activity = list()
    for item in course.activity.all().order_by("id"):
        pl = [
            {
                'name': elem.json['title'],
                'state': Answer.pl_state(elem, request.user)
            }
            for elem in item.pltp.pl.all()
        ]
        
        
        len_pl = len(pl) if len(pl) else 1
        activity.append({
            'name': item.name,
            'pltp_sha1': item.pltp.sha1,
            'title': item.pltp.json['title'],
            'pl': pl,
            'id': item.id,
            'open': item.open,
            'width':str(100/len_pl),
        })
        
    return render(request, 'classmanagement/course.html', {
        'name': course.name,
        'activity': activity,
        'teacher': course.teacher.all(),
        'instructor': True if request.user in course.teacher.all() else False,
        'course_id': id,
    })



@csrf_exempt
@login_required
def course_summary(request, id):
    try:
        course = Course.objects.get(id=id)
    except:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if not request.user.profile.is_admin() and (not request.user in course.user.all() or not request.user.profile.have_role(Role.INSTRUCTOR)):
        logger.warning("User '"+request.user.username+"' denied to access summary of course'"+course.name+"'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
    
    activities = course.activity.all().order_by("id")
    student = list()
    for user in course.student.all():
        tp = list()
        for activity in activities:
            summary = Answer.pltp_summary(activity.pltp, user)
            tp.append({
                'state': [{
                        'percent':summary[i][0],
                        'count':  summary[i][1],
                        'class':  i.template
                    }
                    for i in summary
                ],
                'name': activity.pltp.json['title'],
                'activity_name': activity.name,
            })
        student.append({
            'lastname': user.last_name,
            'object': user,
            'id': user.id,
            'activities': tp,
        })
    
    #Sort list by student's name
    student = sorted(student, key=lambda k: k['lastname'])
    
    return render(request, 'classmanagement/course_summary.html', {
        'state': [i for i in State if i not in [State.TEACHER_EXC, State.SANDBOX_EXC]],
        'name': course.name,
        'student': student,
        'range_tp': range(len(activities)),
        'course_id': id,
    })



@csrf_exempt
@login_required
def activity_summary(request, id, name):
    try:
        course = Course.objects.get(id=id)
    except:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if not request.user.profile.is_admin() and (not request.user in course.user.all() or not request.user.profile.have_role(Role.INSTRUCTOR)):
        logger.warning("User '"+request.user.username+"' denied to access summary of course'"+course.name+"'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
    
    activity = Activity.objects.get(name=name)
    student = list()
    for user in course.student.all():
        tp = list()
        for pl in activity.pltp.pl.all():
            tp.append({
                'name': pl.json['title'],
                'state': Answer.pl_state(pl, user)
            })
        student.append({
            'lastname': user.last_name,
            'object': user,
            'id': user.id,
            'question': tp,
        })
    
    #Sort list by student's name
    student = sorted(student, key=lambda k: k['lastname'])
    
    return render(request, 'classmanagement/activity_summary.html', {
        'state': [i for i in State if i not in [State.TEACHER_EXC, State.SANDBOX_EXC]],
        'course_name': course.name,
        'activity_name': activity.name,
        'student': student,
        'range_tp': range(len(activity.pltp.pl.all())),
        'course_id': id,
    })



@csrf_exempt
@login_required
def student_summary(request, course_id, student_id):
    try:
        course = Course.objects.get(id=course_id)
    except:
        raise Http404("Impossible d'accéder à la page, cette classe n'existe pas.")
    if not request.user.profile.is_admin() and (not request.user in course.user.all() or not request.user.profile.have_role(Role.INSTRUCTOR)):
        logger.warning("User '"+request.user.username+"' denied to access summary of course'"+course.name+"'.")
        raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
        
    student = User.objects.get(id=student_id)
    activities = course.activity.all().order_by("id")
    
    tp = list()
    for activity in activities:
        question = list()
        for pl in activity.pltp.pl.all():
            state = Answer.pl_state(pl, student)
            question.append({
                'state': state,
                'name':  pl.json['title'],
            })
        len_tp = len(question) if len(question) else 1
        tp.append({
            'name': activity.pltp.json['title'],
            'activity_name': activity.name,
            'width': str(100/len_tp),
            'pl': question,
        })
        
    return render(request, 'classmanagement/student_summary.html', {
        'state': [i for i in State if i not in [State.TEACHER_EXC, State.SANDBOX_EXC]],
        'course_name': course.name,
        'student': student,
        'activities': tp,
        'course_id': course_id,
    })
    
    
@login_required
def redirect_activity(request, activity_id):
    request.session['current_activity'] = activity_id
    request.session['current_pl'] = None
    request.session['testing'] = False
    return HttpResponseRedirect(reverse(activity_receiver))
