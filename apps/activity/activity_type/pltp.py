import ast

from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from django.shortcuts import get_object_or_404, redirect, render, reverse
from django.template.loader import get_template

from activity.activity_type.activity_type import AbstractActivityType
from loader.models import PL
from playexo.enums import State
from playexo.models import Answer

from shared.graphic_utils import graph_percent

from operator import truediv
from traceback import print_tb

from activity.activity_type.survey_utils import get_possible_answers, get_answers, get_students, survey_dashboard
import logging

logger = logging.getLogger(__name__)

class Pltp(AbstractActivityType):


    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        if activity.activity_data['student_dashboard'] == 'True':
            if activity.name.endswith('_survey'):
                return survey_dashboard(request,activity)
        else:
            return PermissionDenied()
    
    
    def teacher_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        # Hook for survey dashboards
        if activity.name.endswith('_survey'):
            return survey_dashboard(request, activity)

        exos = []
        for pl in activity.indexed_pl():
            exos.append({'name': pl.json['title'], 'sum_grades': 0})
            for state in list(State)[0:-1]:
                exos[-1][state] = 0

        student = list()
        for user in activity.student.all():
            tp = list()
            for count, pl in enumerate(activity.indexed_pl()):
                ans_grade = Answer.highest_grade(pl, user)
                state = State.by_grade(ans_grade.grade if ans_grade else ...)
                tp.append({
                    'name':  pl.json['title'],
                    'state': state
                })
                if state != State.ERROR:
                    exos[count][state] += 1
                if ans_grade and ans_grade.grade is not None:
                    exos[count]['sum_grades'] += ans_grade.grade
            student.append({
                'lastname': user.last_name,
                'object':   user,
                'id':       user.id,
                'question': tp,
                })
            
        for exo in exos:
            exo['mean'] = exo['sum_grades'] / len(student) if student else 0
            exo.pop('sum_grades')
        # Sort list by student's name
        student = sorted(student, key=lambda k: k['lastname'])

        return render(request, 'activity/activity_type/pltp/teacher_dashboard.html', {
            'state':         [i for i in State if i != State.ERROR],
            'course_name':   activity.parent.name,
            'activity_name': activity.name,
            'student':       student,
            'range_tp':      range(len(activity.indexed_pl())),
            'course_id':     activity.parent.id,
            'exos':          exos,
        })
    
    
    def small(self, request, activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of the teacher dashboard
        """
        pl = [
            {
                'name':  activity.activity_data['title'],
                'state': Answer.pl_state(elem, request.user)
            }
            for elem in activity.indexed_pl()
        ]

        progr, quality = user_progression(request.user, activity)

        # Enables the student dashboard
        student_dashboard = False
        if 'student_dashboard' in activity.activity_data and activity.activity_data['student_dashboard'] == 'True' and request.user in activity.student.all():
            student_dashboard = True

        return get_template("activity/activity_type/pltp/small.html").render({
            'title':              activity.activity_data['title'],
            'pl':                 pl,
            'id':                 activity.id,
            'open':               activity.open,
            'instructor':         request.user in activity.teacher.all(),
            'nb_exos':            len(pl),
            'progr':              graph_percent(progr),
            'quality':            graph_percent(quality),
            'student_dashboard':  student_dashboard,
        }, request)
    
    
    def small_sd(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a student.
        :return: A rendered template of the teacher dashboard
        """
        return PermissionDenied()
    
    
    def small_td(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        return PermissionDenied()
    
    
    def grading(self, activity, session):
        return PermissionDenied()
    
    
    def template(self, request, activity, session):
        if not activity.open:
            return self.end(activity, session)
        
        if request.method == 'GET':
            action = request.GET.get("action")
            
            if action == "pl":
                pl_id = request.GET.get("pl_id")
                if not pl_id or not pl_id.isdigit():
                    return HttpResponseBadRequest("Missing/invalid parameter 'pl_id'")
                session.current_pl = get_object_or_404(PL, id=pl_id)
                session.save()
            
            elif action == "home":
                session.current_pl = None
                session.save()
            
            elif session.current_pl and action == "reset":
                Answer.objects.create(user=request.user, pl=session.current_pl)
            
            elif session.current_pl and action == "reroll":
                exercise = session.session_exercise()
                exercise.built = False
                exercise.seed = None
                exercise.save()
            
            if action:
                # Remove get arguments from URL
                return redirect(reverse("activity:play", args=[activity.id]))
        
        if session.current_pl:
            last = Answer.last(session.current_pl, request.user)
            Answer.objects.create(
                user=request.user,
                pl=session.current_pl,
                answers=last.answers if last else {}
            )
        return render(request, 'activity/activity_type/pltp/exercise.html',
                      self.get_context(activity, session, request))
    
    
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
        return feedback, True
    
    
    def next(self, activity, session):
        """
        This method is called when the next button is clicked on an activity.
        :return: A redirection to the main page of the activity accordingly to the function.
        """
        pls = activity.learning_path()
        for previous, next in zip(pls, list(pls[1:]) + [None]):
            if previous == session.current_pl:
                session.current_pl = next
                session.save()
                break
        else:
            session.current_pl = None
            session.save()
        return redirect(reverse("activity:play", args=[activity.id]))
    
    def forward(self, activity, session):
        index = str(
            (int(activity.activity_data['learning_index']) + 1) % len(ast.literal_eval(activity.activity_data['learning_path']))
        )
        activity.activity_data['learning_index'] = index
        activity.save()

        session.current_pl = None
        session.save()
        return redirect(reverse("activity:play", args=[activity.id]))
    
    def backward(self, activity, session):
        index = str(
            (int(activity.activity_data['learning_index']) - 1) % len(ast.literal_eval(activity.activity_data['learning_path']))
        )
        activity.activity_data['learning_index'] = index
        activity.save()

        session.current_pl = None
        session.save()
        return redirect(reverse("activity:play", args=[activity.id]))
        
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
        session_exercise = session_activity.session_exercise()
        pl_list = [{
            'id':    None,
            'state': None,
            'title': activity.activity_data['title'],
        }]
        for pl in activity.learning_path():
            pl_list.append({
                'id':    pl.id,
                'state': Answer.pl_state(pl, session_activity.user),
                'title': pl.json['title'],
            })
        context = dict(session_exercise.context)
        context.update({
            "pl_list__": pl_list,
            'pl_id__':   session_exercise.pl.id if session_exercise.pl else None
        })
        return get_template("activity/activity_type/pltp/navigation.html").render(context, request)
    
    def learning_path_dashboard(self, activity, session, request):
        if activity.is_teacher(request.user) and activity.activity_data.get('learning_index', False) and activity.activity_data.get('learning_path', False):
            return get_template("activity/activity_type/pltp/learning_path.html").render({
                "id": activity.id,
                "title": activity.activity_data["title"],
                "index": int(activity.activity_data["learning_index"]) + 1,
                "size": len(ast.literal_eval(activity.activity_data["learning_path"])),
                "activity": activity
            }, request)
        else:
            return None

    def get_context(self, activity, session, request):
        lp_dashboard = self.learning_path_dashboard(activity, session, request)
        if lp_dashboard:
            return {
                "learning_path": lp_dashboard,
                "navigation": self.navigation(activity, session, request),
                "exercise":   session.current_pl_template(request),
            }
        return {
            "navigation": self.navigation(activity, session, request),
            "exercise":   session.current_pl_template(request),
        }
    
    
    def notes(self, activity, request):
        user = request.user
        users = activity.student.all()
        pl = activity.pl.all()
        if not user or user not in activity.teacher.all():
            return HttpResponseForbidden("Not authorized")
        
        import io, csv
        class CsvStringBuilder():
            def __init__(self, labelsItems : list):
                # Créez un objet StringIO
                self.data = []
                # Créez un objet writer pour écrire dans l'objet StringIO
                self.addLine(labelsItems)
                self.__result_str = None

            def addLine(self, items : list):
                self.data.append(items)
                return self
            
            def __str__(self):
                with io.StringIO() as __f:
                    writer = csv.writer(__f, dialect="unix")
                    for line in self.data:
                        writer.writerow(line)
                    result = __f.getvalue()
                return result

            def __repr__(self):
                return self.__str()

        
        if activity.name.endswith('_survey'):
            try:
                if activity.activity_data.get('anonymous_vote', 'False') == 'False':
                    possible_answers = get_possible_answers(activity)
                    csvBuilder = CsvStringBuilder(['username', 'firstname', 'lastname', 'email'] + [i for sublist in possible_answers.values() for i in [sublist[0]] + [''] * (len(sublist[1])-1)])
                    csvBuilder.addLine([''] * 4 + [i for sublist in possible_answers.values() for i in sublist[1]])

                    for student in get_students(activity):
                        results = []
                        for item in student['question']:
                            for cid, (name, answers) in possible_answers.items():
                                if cid not in item['answers']:
                                    results += [''] * len(answers)
                                else:
                                    results += item['answers'][cid]
                        u = student['object']
                        csvBuilder.addLine([u.username, u.first_name, u.last_name, u.email] + results)
                    csv = str(csvBuilder)
                else:
                    csv = ''
                    answers = get_answers(activity)
                    for cid, p in get_possible_answers(activity).items():
                        csv += p[0] + ', ' + ', '.join(p[1]) + '\n'
                        csv += '/, ' + ', '.join(map(str, answers[cid].values())) + '\n' 
                
                response = HttpResponse(csv, content_type="text/csv")
                response['Content-Disposition'] = 'attachment;filename=reponses.csv'
            except BaseException as e:
                import traceback
                logger.error(traceback.format_exc())
                raise e
        else:
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


def user_progression(user, activity):
    """Return a tuple of two integers `(progression, quality)` where
    `progression` is the percent of work done and `quality` is the
    mean of grades over graded exercices.
    
    All views using this utilitary function should check the
    requesting user is allowed to access data.
    
    `progression` : percent of graded exercices plus 10% of percent of
    only built exercices by the `user`.
    
    `quality` : average grade obtained by `user` over graded
    exercices. Quality is zero if no exercice has been graded.
    """
    pl = activity.pl.all()
    nb_pl_touched = 0
    nb_pl_graded = 0
    sum_grades = 0
        
    for i in pl:
        answer = Answer.highest_grade(i, user)
        if answer is not None:
            nb_pl_touched += 1
            if answer.grade is not None:
                nb_pl_graded += 1
                sum_grades += answer.grade
    progr = (100*nb_pl_graded + 10*(nb_pl_touched - nb_pl_graded)) / len(pl) if pl else 0
    average = sum_grades / nb_pl_graded if nb_pl_graded else 0
    return (progr, average)
