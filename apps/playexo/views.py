import io
import json
import logging
import traceback

import htmlprint
from activity.models import Activity
from loader.models import PL
from django.contrib.auth.decorators import login_required
from django.core.exceptions import PermissionDenied
from django.core.serializers import serialize
from django.http import HttpResponse, HttpResponseNotFound, StreamingHttpResponse
from django.shortcuts import get_object_or_404, render
from django.views.decorators.http import require_GET
from loader.models import PL
from playexo.exception import BuildScriptError, SandboxError
from playexo.models import Answer, SessionTest
from django.db.models import Q
from user_profile.models import Profile
from re import split
from json import dumps
# ~ from django.db.models.functions import JSONObject



logger = logging.getLogger(__name__)

activities_tmp = Answer.objects.all().values_list("activity_id")
activities = Activity.objects.all().values_list("name", "id").filter(id__in = activities_tmp).order_by('id')

pls_tmp = Answer.objects.all().values_list("pl_id")
pls = PL.objects.all().values_list("name", "id").filter(id__in = pls_tmp).order_by('id')

# ~ jsons = list(PL.objects.all().values_list('json'))
# ~ tags=set()
# ~ print(jsons[0])
# ~ for tag in tags_tmp:
	
	# ~ for t in tag:
		# ~ try:
			# ~ print(t["tag"])
			# ~ tags.update(t["tag"].split('|'))
		# ~ except:
			# ~ pass
tags=[]
students = list(map(lambda student: (student[0],split("[/_]",student[1])[1]), Profile.objects.filter(role = 4).values_list("user_id","avatar")))
teachers = list(set(map(lambda teacher: (teacher[0],split("[/_]",teacher[1])[1]), Profile.objects.filter(role = 2).values_list("user_id","avatar"))))

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
                answers = Answer.objects.select_related("activity", "pl", "user").all()
            else:
                answers = Answer.objects.select_related("activity", "pl", "user").filter(
                    date__lte=request.GET["end"])
        elif "end" not in request.GET or request.GET["end"] == "":
            if "start" in request.GET and request.GET["start"] != "":
                answers = Answer.objects.select_related("activity", "pl", "user").filter(
                    date__gte=request.GET["start"])
        else:
            answers = Answer.objects.select_related("activity", "pl", "user").filter(
                date__range=(request.GET["start"], request.GET["end"]))
        
        if "pl[]" in request.GET :
            try:
                pl_tmp = list(filter(lambda pl: pl != '', request.GET.getlist('pl[]')))[0]
                pl_tmp = int(pl_tmp)     
                try:
                    answers = answers.filter(pl=PL.objects.get(id = pl_tmp))
                except PL.DoesNotExist:
                    return HttpResponseNotFound("PL does not exist")
            except:
                pass
                
        if "activity[]" in request.GET :
            try:
                activity_tmp = list(filter(lambda act: act != '', request.GET.getlist('activity[]')))[0]
                activity_tmp = int(activity_tmp)
                try:
                    answers = answers.filter(
                        activity=Activity.objects.get(id = activity_tmp))
                    
                except Activity.DoesNotExist:
                    return HttpResponseNotFound("Activity does not exist")
            except:
                pass
        
        if "type" in request.GET:
            if request.GET["type"] == "teacher" :
                tmp = Profile.objects.select_related().filter(role = 2).values_list("user_id",flat=True)
                
            elif request.GET["type"] == "students":
                tmp = list(map(lambda student: student[0],students))
            answers = answers.filter(user_id__in = tmp)
            
        elif "name" in request.GET and request.GET["name"].isnumeric():
            answers = answers.filter( Q( user_id = int(request.GET["name"]) ))
        
        if "exclude_grade" in request.GET and request.GET["exclude_grade"] == "on":
            answers = answers.filter( ~Q( grade = None))
        
            
        
        
        if "max" in request.GET or "min" in request.GET:
           
            if "max" not in request.GET or not request.GET["max"].isnumeric():
                if "min" in request.GET and request.GET["min"].isnumeric():
                    answers = answers.filter( Q( grade = None) | Q( grade__gte = int( request.GET["min"])))
                
            elif "min" not in request.GET or request.GET["min"] == "":
                if "max" in request.GET and request.GET["max"].isnumeric():
                    answers = answers.filter( Q( grade = None) | Q( grade__lte = int( request.GET["max"])))
           
            else:
                if request.GET["max"].isnumeric() and request.GET["min"].isnumeric():
                    answers = answers.filter( Q( grade = None) | Q( grade__range = (int(request.GET["min"]), int(request.GET["max"]))))
        
        # ~ if "actif" in request.GET and request.GET["actif"]=="on":
            # ~ print("test")
            # ~ answers = answers.filter( Q( open = True))
            # ~ print("test2")
            
                
        dic = {}
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
                dic[a.id]["open"] = a.activity.open if a.activity is not None else None
                
                if "min" in request.GET or "max" in request.GET:
                    dic[a.id]["grade"] = a.grade 
                if "include_answers" in request.GET:
                    dic[a.id]["answers"] = a.answers
                if "include_tag" in request.GET:
                    if "tag" in a.pl.json:
                        dic[a.id]["tag"] = a.pl.json["tag"].split("|")
                    else:
                        dic[a.id]["tag"] = None
        
        if "actif" in request.GET and request.GET["actif"]=="on":
            dic = {key: value for key, value in dic.items() if value["open"] }
        
        if "test" in request.GET :
            print(request.GET["test"],"salut")

        
        stream = io.StringIO(json.dumps(dic))
        response = StreamingHttpResponse(stream, content_type="application/json")
        response['Content-Disposition'] = 'attachment;filename=answers.json'
        return response
    
    return render(
        request,
        "playexo/download_answers.html",
        {
            'activities': list(activities),
            'pls': pls,
            'students': students,
            'teachers': teachers,
            'tags' : tags
        }
    )

