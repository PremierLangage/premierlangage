import logging

from django.apps import apps
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.http import Http404, HttpResponse, HttpResponseNotFound
from django.shortcuts import redirect, render, reverse
from django.template.loader import get_template

from activity.activity_type.activity_type import AbstractActivityType
from playexo.enums import State
from playexo.models import Answer


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
        if request.method == "GET" and request.GET.get("studentid"):
            return self.student_summary(request.GET.get("studentid"), request, activity)
        
        else:
            return self.course_summary(request, activity)
    
    
    def small(self, request, activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of the teacher dashboard
        """
        user = request.user
        if not activity.is_member(user):
            logger.warning(
                "User '" + user.username + "' denied to access course'" + activity.name + "'.")
            raise PermissionDenied("Vous n'êtes pas membre de cette classe.")
        return get_template("activity/activity_type/course/small.html").render({
            "course": activity
        }, request)
    
    
    def small_sd(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        raise PermissionDenied()
    
    
    def small_td(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        raise PermissionDenied()
    
    
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
        
        smalls = list()
        for item in activity.indexed_activities():
            if item.open or activity.is_teacher(user):
                smalls.append(item.small(request))
        
        return render(request, "activity/activity_type/course/index.html", {
            'name':       activity.name,
            'smalls':     smalls,
            'teacher':    activity.teacher.all(),
            'instructor': activity.is_teacher(user),
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
    
    
    def validate(self, activity, session, answer, feedback, action=""):
        """ Must return a tuple: (feedback, to_be_saved), where the feedback can be modified by
        the activity, and to_be_saved is a boolean that decide whether the answer will be saved
        in the database or not"""
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
    
    
    def course_summary(self, request, activity):
        user = request.user
        
        activities = activity.indexed_activities().filter(teacher=user)
        
        students = list()
        for st in (activity.student.all() | activity.teacher.all()).distinct():
            tp = list()
            for a in activities:
                if not a.is_member(st):
                    continue
                summary = {
                    State.SUCCEEDED:   [0.0, 0],
                    State.PART_SUCC:   [0.0, 0],
                    State.FAILED:      [0.0, 0],
                    State.STARTED:     [0.0, 0],
                    State.NOT_STARTED: [0.0, 0],
                    State.ERROR:       [0.0, 0],
                }
                for pl in activity.indexed_pl():
                    null = list(Answer.objects.filter(pl=pl, user=user).filter(grade__isnull=True))
                    answers = list(Answer.objects.filter(pl=pl, user=user).filter(grade__isnull=False).order_by("-grade"))
                    answer = (answers + null)[0] if (answers + null) else None
                    answer = State.by_grade(answer.grade if answer else ...)
                    summary[answer][1] += 1
        
                nb_pl = max(sum([summary[k][1] for k in summary]), 1)
                for k, v in summary.items():
                    summary[k] = [str(summary[k][1] * 100 / nb_pl), str(summary[k][1])]
                
                states = list()
                for i in summary:
                    states.append({
                        'percent': summary[i][0],
                        'count':   summary[i][1],
                        'class':   i.template
                    })
                tp.append({
                    'state':         "",
                    'name':          a.activity_data['title'],
                    'activity_name': a.name,
                    'id':            a.id,
                })
            students.append({
                'lastname':   st.last_name,
                'object':     st,
                'id':         st.id,
                'activities': tp,
            })
        students = sorted(students, key=lambda k: k['lastname'])
        
        return render(request, 'activity/activity_type/course/teacher_dashboard.html', {
            'state':     [i for i in State if i != State.ERROR],
            'name':      activity.name,
            'student':   students,
            'range_tp':  range(len(activities)),
            'course_id': activity.id,
        })
    
    
    def student_summary(self, student_id, request, activity):
        try:
            student = User.objects.get(id=student_id)
        except User.DoesNotExist:
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")
        
        if not activity.is_member(student):
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")
        
        activities = activity.indexed_activities().filter(teacher=student)
        tp = list()
        for activity in activities:
            question = list()
            for pl in activity.indexed_pl():
                state = Answer.pl_state(pl, student)
                question.append({
                    'state': state,
                    'name':  pl.json['title'],
                })
            len_tp = len(question) if len(question) else 1
            tp.append({
                'name':          activity.activity_data['title'],
                'activity_name': activity.name,
                'id':            activity.id,
                'width':         str(100 / len_tp),
                'pl':            question,
            })
        
        return render(request, 'activity/activity_type/course/student_summary.html', {
            'state':       [i for i in State if i != State.ERROR],
            'course_name': activity.name,
            'student':     student,
            'activities':  tp,
            'course_id':   activity.id,
        })
