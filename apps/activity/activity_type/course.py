import logging

from django.apps import apps
from django.core.exceptions import PermissionDenied
from django.http import Http404, HttpResponse
from django.shortcuts import redirect, render, reverse
from django.template.loader import get_template
from django.db.models import Q

from playexo.enums import State
from playexo.models import Answer

from activity.activity_type.activity_type import AbstractActivityType


logger = logging.getLogger(__name__)



class Course(AbstractActivityType):
    
    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        raise PermissionDenied()
    
    
    def teacher_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        user = request.user
        if not activity.is_teacher(user):
            logger.info("User '" + user.username
                        + "' denied to access summary of course'" + activity.name + "'.")
            raise PermissionDenied("Vous n'êtes pas professeur de cette classe.")
        
        activity_model = apps.get_model("activity", "Activity")
        activities = activity_model.objects.filter(teacher=user, parent=activity)
        
        students = list()
        for st in activity.student.all():
            tp = list()
            for a in activities:
                if a.is_student(st):
                    summary = Answer.activity_summary(activity, user)
                    tp.append({
                        'state':         [{
                            'percent': summary[i][0],
                            'count':   summary[i][1],
                            'class':   i.template
                        }
                            for i in summary
                        ],
                        'name':          activity.activity_data['title'],
                        'activity_name': activity.name,
                        'id':            activity.id,
                    })
            students.append({
                'lastname':   user.last_name,
                'object':     user,
                'id':         user.id,
                'activities': tp,
            })
        students = sorted(students, key=lambda k: k['lastname'])
        
        context = {
            'state':     [i for i in State if i != State.ERROR],
            'name':      activity.name,
            'student':   students,
            'range_tp':  range(len(activities)),
            'course_id': activity.id,
        }

        print(context)
        return render(request, 'activity/activity_type/course/teacher_dashboard.html', context)
    
    
    def small(self, request, activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of the teacher dashboard
        """
        user = request.user
        if user not in activity.student.all() and user not in activity.teacher.all():
            logger.warning(
                "User '" + user.username + "' denied to access course'" + activity.name + "'.")
            raise PermissionDenied("Vous n'êtes pas membre de cette classe.")
        return get_template("activity/activity_type/course/small.html").render({
            "course": activity
        }, request)
    
    
    def small_sd(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a student.
        :return: A rendered template of the teacher dashboard
        """
        raise PermissionDenied()
    
    
    def small_td(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        raise PermissionDenied()
    
    
    def grading(self):
        pass
    
    
    def template(self, request, activity, session):
        """
        This method is called when the play view is called.
        :return: A rendered template of the main page of the activity.
        """
        activity_model = apps.get_model("activity", "Activity")
        user = request.user
        if user not in activity.student.all() and user not in activity.teacher.all():
            logger.warning(
                "User '" + user.username + "' denied to access course'" + activity.name + "'.")
            raise PermissionDenied("Vous n'êtes pas membre de cette classe.")
        
        if request.method == 'GET':
            if request.GET.get("action", None) == "toggle_activity":
                try:
                    act = activity_model.objects.get(id=request.GET.get("id", None))
                    act.toggle_open(request)
                except activity_model.DoesNotExist:
                    raise Http404(
                        "L'activité d'ID '" + str(request.GET.get("id", None)) + "' introuvable.")
                return redirect(reverse("activity:play", args=[activity.id]))
        
        activities = activity_model.objects.filter(Q(student=user) | Q(teacher=user),
                                                   parent=activity)
        smalls = list()
        for item in activities:
            smalls.append(item.small(request))
        
        print(smalls)
        return render(request, "activity/activity_type/course/index.html", {
            'name':       activity.name,
            'smalls':     smalls,
            'teacher':    activity.teacher.all(),
            'instructor': user in activity.teacher.all(),
            'course_id':  activity.id,
        })
    
    
    def fetch(self, activity):
        """
        This method is called when the fetch method of an activity is called.
        :return: (PLs, Activities): a tuple of a list of pls and a list of activities.
        """
        return None, None
    
    
    def install(self, activity):
        """
        This method is called only the first time when the activity is created.
        :return: A new dictionnary to initialize the activity_data of an activity
        """
        return {}
    
    
    def init(self, activity, session):
        """
        This method is called when a new instance of an activity is created.
        :return: A new dictionnary to initialize the session_data of a session_activity
        """
        return {}
    
    
    def push(self):
        pass
    
    
    def launch(self):
        pass
    
    
    def validate(self, activity, session, answer, action=""):
        pass
    
    
    def next(self, activity, session):
        """
        This method is called when the next button is clicked on an activity.
        :return: A redirection to the main page of the activity accordingly to the function.
        """
        raise PermissionDenied()
    
    
    def pop(self, activity, session):
        pass
    
    
    def end(self, activity, session):
        """
        This method is called when the activity is closed.
        :return: A rendered template of the closed activity
        """
        raise PermissionDenied("Cette activité est fermé.")
    
    
    def navigation(self, activity, session_activity, request):
        """This method is called to get a rendered template of the navigation of this activity"""
        raise PermissionDenied()
    
    
    def notes(self, activity, request):
        response = HttpResponse("", content_type="text/csv")
        response['Content-Disposition'] = 'attachment;filename=notes.csv'
        return response
