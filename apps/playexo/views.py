import logging
import traceback

import htmlprint
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render

from loader.models import PL
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import SessionTest


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
