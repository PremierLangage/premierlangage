import io
import json
import logging
import traceback
from django.db.models.query import QuerySet

import htmlprint
from activity.models import Activity
from loader.models import PL
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.core.serializers import serialize
from django.http import HttpResponse, HttpResponseNotFound, StreamingHttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.views.decorators.http import require_GET
from loader.models import PL
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import Answer, SessionTest
from django.db.models import Q
from user_profile.models import Profile
from re import split, template
from json import dumps
from django.http import HttpResponse


logger = logging.getLogger(__name__)

activitiesIds = Answer.objects.values_list("activity_id",flat=True)
activities = Activity.objects.values_list(
    "name", "id").filter(id__in = activitiesIds).order_by('id')

sizeMaxActivity = max(map(lambda activity: len(activity[0]), activities))//1.3


plsIds = Answer.objects.all().values_list("pl_id")
pls = PL.objects.all().values_list("name", "id").filter(id__in = plsIds).order_by('id')
sizeMaxPl = max(map(lambda pl: len(pl[0]), pls))//1.3


courses = Activity.objects.all().values_list("name", "id").filter(activity_type="course").order_by('id')
sizeMaxCourse = max(map(lambda course: len(course[0]), courses))//1.3

tags = set()
tags.update(['tag1', 'tag2', 'tag3', 'tag4'])

parents = {id : Activity.objects.values_list('parent_id','name').get(id = id) 
                for id in Activity.objects.values_list("parent_id", flat=True).distinct().filter(parent_id__isnull=False) }

students = list(map(lambda student: (student[0], split(
    "[/_]", student[1])[1]), Profile.objects.filter(role=4).values_list("user_id", "avatar")))
teachers = list(map(lambda teacher: (teacher[0], split(
    "[/_]", teacher[1])[1]), Profile.objects.filter(role=2).values_list("user_id", "avatar")))

def find_course_name(parents, id,name):
    while id != 0:
        tmp = parents[id]
        id,name = tmp[0], tmp[1]

    return name

def filter_by_login_or_role(login: bool, request, sql_request: Q ):
    # print(login)
    if login :
        try:
            if request.GET["studentLogin"].isnumeric():
                name = int(request.GET["studentLogin"])
            else:
                name = int(request.GET["teacherLogin"])
            sql_request &= Q(user_id = name)
            
        except (ValueError,Profile.DoesNotExist) as err :
            raise HttpResponseNotFound("User does not exist")
        
    elif "type" in request.GET:
        if request.GET["type"] == "teacher":
            tmp = list(map(lambda teacher: teacher[0], teachers))
        elif request.GET["type"] == "students":
            tmp = list(map(lambda student: student[0], students))
        sql_request &= Q(user_id__in = tmp)
    return sql_request

def filter_by_grade(minInRequest: bool, maxInRequest: bool, request, sql_request: Q):
    if maxInRequest or minInRequest:
        if not maxInRequest:
            if minInRequest:
                min = int(request.GET["min"])
                sql_request &=  Q(grade__gte = min)
        elif not minInRequest:
            if maxInRequest :
                max = int(request.GET["max"])
                sql_request &=  Q(grade__lte = max)
        else:
            min, max = int(request.GET["min"]), int(request.GET["max"])
            sql_request &=  Q(grade__range = (min, max))
            
    # rajouter si Q(grade = None) ? 
    return sql_request 

def filter_by_date(startInRequest: bool, endInRequest: bool, request, sql_request: Q):
    if not startInRequest:
        if endInRequest :
            sql_request &= Q(date__lte = request.GET["end"])
    elif not endInRequest :
        if startInRequest :
            sql_request &= Q(date__gte = request.GET["start"])
    else:
        sql_request &= Q(date__range = (request.GET["start"], request.GET["end"]))
    return sql_request


@login_required
def test_pl(request, pl_id):
    if not request.user.profile.can_load():
        raise PermissionDenied
    try:
        pl = get_object_or_404(PL, id=pl_id)
        dic = pl.json

        index = 0
        for test_name in dic["tests"]:
            test = dic["tests"][test_name]
            index += 1
            test["index__"] = index

            if not isinstance(test, dict) or "response" not in test:
                dic["tests"][test_name]["error"] = True
                dic["tests"][test_name]["error_message"] = "Invalid test format"
                continue

            session = SessionTest.objects.create(pl=pl, user=request.user)
            try:
                session.build(request, seed=test["seed"] if "seed" in test else None)
            except BuildScriptError:
                dic["tests"][test_name]["error"] = True
                dic["tests"][test_name]["error_message"] = htmlprint.code(
                    "Builder failed:\n" + traceback.format_exc())
                continue
            except SandboxError:
                dic["tests"][test_name]["error"] = True
                dic["tests"][test_name]["error_message"] = htmlprint.code(
                    "Sandbox error:\n" + traceback.format_exc())
                continue

            test["seed"] = session.context["seed"]
            answer, feedback, answer_status = session.raw_evaluate(request, test["response"],
                                                                   test=True)

            if answer_status != 0:
                dic["tests"][test_name]["error"] = True
                dic["tests"][test_name]["error_message"] = feedback
                continue

            grade = answer["grade"]

            if "feedback" in test:
                test["feedback_gotten__"] = feedback
                if test["feedback"] == feedback:
                    test["feedback_status__"] = True
                else:
                    test["feedback_status__"] = False

            if "grade" in test:
                test["grade_gotten__"] = grade
                if test["grade"] == grade:
                    test["grade_status__"] = True
                else:
                    test["grade_status__"] = False

            test["status__"] = ("feedback" not in test or test["feedback_status__"]) and (
                "grade" not in test or test["grade_status__"])
            dic["tests"][test_name] = test

        return render(request, 'playexo/test_pl.html', dic)

    except Exception:
        return HttpResponse(htmlprint.code("Error during testing:\n" + traceback.format_exc()))


@login_required
@require_GET
def download_answers(request):
    if not request.user.is_staff:
        raise PermissionDenied
    if "start" in request.GET or "end" in request.GET:
        sql_request = Q()
        
        answers = Answer.objects.select_related("activity", "pl", "user")

        startInRequest = "start" in request.GET and request.GET["start"]!=''
        endInRequest = "end" in request.GET and request.GET["end"]!=''

        plInRequest = "pl" in request.GET and request.GET['pl'].isnumeric() or "pl2" in request.GET and request.GET['pl2'].isnumeric()
        activityInRequest = "activity" in request.GET and request.GET['activity'].isnumeric() or "activity2" in request.GET and request.GET['activity2'].isnumeric()

        maxInRequest = "max" in request.GET and request.GET["max"].isnumeric()
        minInRequest = "min" in request.GET and request.GET["min"].isnumeric()

        actifInRequest = "actif" in request.GET

        limit = "limit" in request.GET
        login = "teacherLogin" in request.GET and request.GET["teacherLogin"].isnumeric()  or "studentLogin" in request.GET and request.GET["studentLogin"].isnumeric()



        sql_request = filter_by_date(startInRequest, endInRequest, request, sql_request)
        
        if plInRequest:
            try:
                try:
                    pl = int(request.GET['pl'])
                except ValueError:
                    pl = int(request.GET['pl2'])
                sql_request &= Q(pl = PL.objects.get(id = pl))
            except (PL.DoesNotExist, ValueError) as err:
                return HttpResponseNotFound("PL does not exist")

        if activityInRequest:
            try:
                try:
                    activity = int(request.GET['activity'])
                except ValueError:
                    activity = int(request.GET['activity2'])
                sql_request &= Q(activity = Activity.objects.get(id = activity))

            except (Activity.DoesNotExist, ValueError) as err:
                return HttpResponseNotFound("Activity does not exist")

        if "courses" in request.GET and request.GET["courses"].isnumeric():
            try:
                sql_request &= Q(activity__in = Activity.objects.filter(
                    parent = int(request.GET["course"])).values_list("id", flat=True))
            except (Activity.DoesNotExist, ValueError) as err:
                return HttpResponseNotFound("Course does not exist")

        sql_request = filter_by_login_or_role(login, request, sql_request)
        
        
        

        if "exclude_grade" in request.GET and request.GET["exclude_grade"] == "on":
            sql_request &= ~Q(grade = None)

        # if "tags[]" in request.GET :
            # answers = answers.filter( tag__in = request.GET.getlist("tags[]"))

        sql_request = filter_by_grade(minInRequest, maxInRequest, request, sql_request)
        
        if actifInRequest and request.GET["actif"] == "on":
            sql_request &= Q(activity_id__in = Activity.objects.select_related("id").all().filter(
                open=True).values_list("id", flat=True))

        answers = answers.filter(sql_request)

        if answers.count() == 0:
            return HttpResponseBadRequest("Theire is no informations in our database linked to your request", status=400)
            
        if limit and request.GET["limit"].isnumeric():
            answers = answers[:int(request.GET["limit"])]

        slice_size = 1_000

        dic = {
            answer.id: {
                "user": answer.user.get_username(),
                "seed": answer.seed,
                "date": str(answer.date),
                "grade": answer.grade,
                "pl_id": answer.pl.id,
                "pl_name": answer.pl.name,
                "activit_id" : answer.activity.id  if answer.activity is not None else None,
                "activity_name" : answer.activity.name if answer.activity is not None else None,
                "open" : answer.activity.open if answer.activity is not None else None,
                "activity_name" : answer.activity.name if answer.activity is not None else None,
                "include_answers": answer.answers if "include_answers" in request.GET else None,
                "tag": answer.pl.json["tag"].split("|") if "include_tag" in request.GET and "tag" in answer.pl.json else None,
                "cours": find_course_name(parents, answer.activity.parent_id, answer.activity.name ) if answer.activity is not None else None
            } 

            for i in range(0, answers.count(), slice_size)
                for answer in answers[i: i + slice_size]  
        }
        

        stream = io.StringIO(json.dumps(dic))
        response = StreamingHttpResponse(stream, content_type="application/json")
        response['Content-Disposition'] = 'attachment;filename=answers.json'
        return response

    logger.info("test Ydris du 7 juin 2021")
    return render(
        request,
        "playexo/download_answers.html",
        {
            'activities': list(activities),
            'pls': pls,
            'students': students,
            'teachers': teachers,
            'tags': tags,
            'courses': courses,
            'sizeMaxActivity': sizeMaxActivity,
            'sizeMaxCourse': sizeMaxCourse,
            'sizeMaxPL': sizeMaxPl
        }
    )
