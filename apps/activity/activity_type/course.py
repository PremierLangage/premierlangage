import logging

from django.apps import apps
from django.contrib.auth.models import User, Group
from django.core.exceptions import PermissionDenied
from django.db.models import Q
from django.http import Http404, HttpResponse, HttpResponseNotFound, HttpResponseForbidden
from django.shortcuts import redirect, render, reverse
from django.template.loader import get_template

from activity.activity_type.activity_type import AbstractActivityType
from playexo.enums import State
from playexo.models import Answer, HighestGrade

logger = logging.getLogger(__name__)


class Course(AbstractActivityType):

    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        if request.method == "GET" and request.GET.get("studentid"):
            if int(request.GET.get("studentid")) == request.user.id:
                return self.student_summary(request.GET.get("studentid"), request, activity)
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
        """
        This method returns a csv file containing marks of the whole course.
        """
        activities = activity.indexed_activities()
        indexed_pl = {a: a.indexed_pl() for a in activities}
        all_pl = []
        for indexed in indexed_pl.values():
            all_pl += list(indexed)
        user = request.user
        users = activity.student.all()
        pl = all_pl
        if not user or user not in activity.teacher.all():
            return HttpResponseForbidden("Not authorized")
        csv = "username,firstname,lastname,email," + ''.join(
            [str(i + 1) + ": " + p.name + "," for i, p in enumerate(pl)]) + "total\n"
        for u in users:
            grades = []
            for i in pl:
                answer = Answer.highest_grade(i, u)
                grades.append(
                    0 if answer is None else max(answer.grade,
                                                 0) if answer.grade is not None else 0)
            csv += ("%s,%s,%s,%s," % (u.username, u.first_name, u.last_name, u.email)
                    + ''.join([str(i) + "," for i in grades])
                    + str(sum(grades)) + "\n")
        response = HttpResponse(csv, content_type="text/csv")
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
                    'points': 0,
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
                hg = g.grade if g.grade > 0 else 0
                result[g.user.id]["activities"][g.activity.id]["points"] += hg

        result = sorted(result.values(), key=lambda k: k['object'].last_name)
        succes_group = 0
        total_group = 0
        points_group = 0
        for r in result:
            r["activities"] = list(r["activities"].values())
            succes = 0
            total = 0
            points = 0
            for tp in r["activities"]:
                succes += tp["state"][State.SUCCEEDED]['count']
                total += tp["total"]
                points += tp["points"]
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
            average = {"average": round((points / (5*total)), 2)}
            total_group += total
            succes_group += succes
            points_group += points
            r["activities"].append(average)

        average_group = {"average": round((points_group / (5*total_group)), 2)}
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
        """
        This is a the dashboard of a whole course but focus on a student whose
        id is `student_id`.
        """
        try:
            student = User.objects.get(id=student_id)
        except User.DoesNotExist:
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")

        if not activity.is_member(student):
            return HttpResponseNotFound("Cet étudiant ne fait pas partie de ce cours")

        activities = [acti for acti in activity.indexed_activities() if acti.open]
        indexed_pl = {a: a.indexed_pl() for a in activities}
        all_pl = []
        for indexed in indexed_pl.values():
            all_pl += list(indexed)
        student_list = activity.student.all()
        nb_student = len(student_list) if student_list else 1
        tp = list()
        for a in activities:
            question = list()
            for pl in a.indexed_pl():
                all_mark = list()
                for s in student_list:
                    ms = Answer.highest_grade(pl, s)
                    if ms is not None:
                        ms = ms.grade
                    if (ms is None) or (int(ms) < 0):
                        ms = 0
                    all_mark.append(ms)

                mark_student = Answer.highest_grade(pl, student)
                if mark_student is not None:
                    mark_student = mark_student.grade
                if (mark_student is None) or (int(mark_student) < 0):
                    mark_student = 0
                state = Answer.pl_state(pl, student)
                question.append({
                    'state': state,
                    'name': pl.json['title'],
                    'all_mark': all_mark,
                    'mark': mark_student,
                    'mean': sum(all_mark) / nb_student,
                    'min': min(all_mark),
                    'max': max(all_mark),
                })
            len_tp = len(question) if question else 1
            all_grouped_mark = list()
            for i in range(nb_student):
                all_grouped_mark.append(sum([q['all_mark'][i] for q in question]) / len_tp)
            tp.append({
                'name': a.activity_data['title'],
                'activity_name': a.name,
                'id': a.id,
                'width': str(100 / len_tp),
                'pl': question,
                'all_mark': all_grouped_mark,
                'mark': sum([q['mark'] for q in question]) / len_tp,
                'mean': sum(all_grouped_mark) / nb_student,
                'min': min(all_grouped_mark),
                'max': max(all_grouped_mark),
            })

        len_act = len(tp) if tp else 1
        all_act_mark = list()
        for i in range(nb_student):
            all_act_mark.append(sum([a['all_mark'][i] for a in tp]) / len_act)
        course_mark = sum([a['mark'] for a in tp]) / len_act
        return render(request, 'activity/activity_type/course/student_summary.html', {
            'state': [i for i in State if i != State.ERROR],
            'course_name': activity.name,
            'student': student,
            'activities': tp,
            'course_id': activity.id,
            'mark': course_mark,
            'mean': sum(all_act_mark) / nb_student,
            'min': min(all_act_mark),
            'max': max(all_act_mark),
            'nb_more': sum([1 for m in all_act_mark if m > course_mark]),
            'nb_less': sum([1 for m in all_act_mark if m < course_mark]),
        })
