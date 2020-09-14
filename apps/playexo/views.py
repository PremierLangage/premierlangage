import json
import logging
import traceback

import htmlprint
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import get_object_or_404, render
from django.views.decorators.http import require_GET

from loader.models import PL
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import Answer, SessionTest


logger = logging.getLogger(__name__)



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
        if "start" not in request.GET or request.GET["start"] == "":
            if "end" not in request.GET or request.GET["start"] == "":
                answers = Answer.objects.select_related("activity", "pl").all()
            else:
                answers = Answer.objects.select_related("activity", "pl").filter(
                    date__lte=request.GET["end"])
        elif "end" not in request.GET or request.GET["end"] == "":
            if "start" in request.GET and request.GET["start"] != "":
                answers = Answer.objects.select_related("activity", "pl").filter(
                    date__gte=request.GET["start"])
        else:
            answers = Answer.objects.select_related("activity", "pl").filter(
                date__range=(request.GET["start"], request.GET["end"]))
        
        dic = {}
        if "pl" in request.GET and request.GET["pl"].isnumeric():
            try:
                answers.filter(pl=PL.objects.get(id=request.GET["pl"]))
            except PL.DoesNotExist:
                return HttpResponseNotFound("PL does not exist")
        slice_size = 1000
        for i in range(0, answers.count(), slice_size):
            for a in answers[i:i + slice_size]:
                dic[a.id] = {
                    "user":    a.user.get_username(),
                    "seed":    a.seed,
                    "date":    str(a.date),
                    "grade":   a.grade,
                    "pl_id":   a.pl.id,
                    "pl_name": a.pl.name,
                }
                dic[a.id]["activity_id"] = a.activity.id if a.activity is not None else None
                dic[a.id]["activity_name"] = a.activity.name if a.activity is not None else None
                if "include_answers" in request.GET:
                    dic[a.id]["answers"] = a.answers
        
        response = HttpResponse(json.dumps(dic), content_type="application/json")
        response['Content-Disposition'] = 'attachment;filename=answers.json'
        return response
    else:
        return render(request, "playexo/download_answers.html", None)
