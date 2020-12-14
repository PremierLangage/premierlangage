import logging

from django.apps import apps
from django.contrib.auth.models import User, Group
from django.core.exceptions import PermissionDenied
from django.db.models import Q
from django.http import Http404, HttpResponse, HttpResponseNotFound
from django.shortcuts import redirect, render, reverse
from django.template.loader import get_template
from django.db.models.functions import Greatest

from activity.activity_type.activity_type import AbstractActivityType
from playexo.enums import State
from playexo.models import Answer, HighestGrade

logger = logging.getLogger(__name__)


from django.db.models import Max, Avg

class Course(AbstractActivityType):

    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        return self.student_summary(request.user.id, request, activity)
        
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
            'name': activity.name,
            'smalls': smalls,
            'teacher': activity.teacher.all(),
            'instructor': activity.is_teacher(user),
            'course_id': activity.id,
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
        activities = activity.indexed_activities()
        indexed_pl = {a: a.indexed_pl() for a in activities}
        all_pl = []
        for indexed in indexed_pl.values():
            all_pl += list(indexed)

        groups = Group.objects.filter(
            Q(name__contains=str(activity.id) + '_Amphi') |
            Q(name__contains=str(activity.id) + '_TD') |
            Q(name__contains=str(activity.id) + '_TP')).order_by("name")

        result = dict()
        teacher_list = activity.teacher.all()
        if len(request.POST) == 0 or request.POST['list_group'] == '':
            student_list = activity.student.all()
        else:
            student_list = activity.student.filter(groups__name=request.POST['list_group'])

        grades_query = HighestGrade.objects.filter(activity__in=activities,
                                                   pl__in=all_pl,
                                                   user__in=(student_list
                                                             | teacher_list).distinct())

        for st in (student_list | teacher_list).distinct():
            tp = dict()
            for a in activities:
                states = dict()
                for i in State:
                    states[i] = {
                        'percent': None,
                        'count': 0,
                        'class': i.template
                    }
                tp[a.id] = {
                    'state': states,
                    'name': a.activity_data['title'],
                    'id': a.id,
                    'total': len(indexed_pl[a]),
                    'not_started': len(indexed_pl[a]),
                }
            result[st.id] = {
                'object': st,
                'activities': tp,
            }

        for g in grades_query:
            state = State.by_grade(g.grade)
            if g.user.id in result:
                result[g.user.id]["activities"][g.activity.id]["state"][state]["count"] += 1
                result[g.user.id]["activities"][g.activity.id]["not_started"] -= 1

        result = sorted(result.values(), key=lambda k: k['object'].last_name)
        succes_group = 0
        total_group = 0
        for r in result:
            r["activities"] = list(r["activities"].values())
            succes = 0
            total = 0
            for tp in r["activities"]:
                succes += tp["state"][State.SUCCEEDED]['count']
                total += tp["total"]
                for state in tp["state"]:
                    state = tp["state"][state]

                    if tp["total"] != 0:
                        state["percent"] = (state["count"] / tp["total"]) * 100
                if tp["total"] != 0 and tp["not_started"] != 0:
                    tp["state"][State.NOT_STARTED]["count"] = tp["not_started"]
                    tp["state"][State.NOT_STARTED]["percent"] = (tp["not_started"] / tp[
                        "total"]) * 100

                states_to_del = [s for s in tp["state"] if tp["state"][s]["count"] == 0]
                for state in states_to_del:
                    del tp["state"][state]

                tp["state"] = list(tp["state"].values())
            average = {"average": round((succes / total) * 20, 2)}
            total_group += total
            succes_group += succes
            r["activities"].append(average)

        average_group = {"average": round((succes_group / total_group) * 20, 2)}
        result.append(average_group)

        return render(request, 'activity/activity_type/course/teacher_dashboard.html', {
            'state': [i for i in State if i != State.ERROR],
            'name': activity.name,
            'student': result,
            'range_tp': range(len(activities)),
            'course_id': activity.id,
            'groups': groups,
        })

    def student_summary(self, student_id, request, activity):
        try:
            student = User.objects.get(id=student_id)
        except User.DoesNotExist:
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")

        if not activity.is_member(student):
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")
        activities = activity.indexed_activities().filter(student=request.user)
        tp = list()
        nba=0
        suma=0
        avgsuma=0
        for a in activities:
            question = list()
            mean=0
            nb=0
            sum=0
            avgsum=0
            for pl in a.indexed_pl():
                nb=nb+1
                state = Answer.pl_state(pl, student)
                # il faut un truc qui prend le greatest grade pour un filtre pl + user 
                
                g = Answer.objects.filter(pl=pl, user=student).aggregate(Max('grade'),Avg('grade'))
                grade= g['grade__max']
                avg = g['grade__avg']
                if grade :
                    sum = sum + int(grade) 
                if avg :
                    avgsum = avgsum + int(avg)
                question.append({
                    'state': state,
                    'name':  pl.json['title'],
                })
            len_tp = len(question) if len(question) else 1
            tp.append({
                'name': a.activity_data['title'],
                'activity_name': a.name,
                'id':            a.id,
                'width':         str(100 / len_tp),
                'pl':            question,
                'mean': sum//nb, 
                'avg': avgsum//nb,
            })
            nba=nba+1
            suma=suma+ sum//nb
            avgsuma = avgsuma + avgsum//nb

        return render(request, 'activity/activity_type/course/student_summary.html', {
            'state': [i for i in State if i != State.ERROR],
            'course_name': activity.name,

            'student':     student,
            'activities':  tp,
            'mmean':suma//nba,
            'avg': avgsuma//nba,
            'course_id':   activity.id,
        })


    def computeStats(self, activity):
        """
        Compute stats  inside the activity.stat_data field
        """
        pass