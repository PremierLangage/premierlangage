from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from django.shortcuts import get_object_or_404, redirect, render, reverse
from django.template.loader import get_template

from activity.activity_type.activity_type import AbstractActivityType
from loader.models import PL
from playexo.enums import State
from playexo.models import Answer

from random import randint

def color(p):
    """Return the adapted color for `p` percent 
    achievement.
    """
    coef = 2.0 - (max([p-50, 50-p]) / 50.0)
    #coef = 1
    r = coef*180*(1 - (p/100.0))
    g = coef*180*(p/100.0)
    b = 0
    return (int(r), int(g), int(b))


def graph_percent(p):
    """Return SVG code drawing a small graphical
    percent.
    """
    p = int(p)
    r,g,b = color(p)
    ans='<svg height="80" width="80">'
    ans+='<polygon points="0,0 80,0 80,80 0,80" style="fill:rgb(255,255,255)" />'
    ans+='<circle cx="40" cy="40" r="40" fill="rgb({},{},{})" />'.format(r, g, b)
    ans+='<circle cx="40" cy="40" r="30" fill="rgb(255,255,255)" />'
    # all the following to hide the proper sector part of the circle
    if p <= 25:
        ans+='<polygon points="0,0 0,80 40,80 40,0" style="fill:rgb(255,255,255)" />'
        ans+='<polygon points="40,40 40,80 80,80 80,40" style="fill:rgb(255,255,255)" />'
        if p < 13:
            ab = max([int(80 - 40*((12.5 - p)/12.5)), 44])
            ans+='<polygon points="{},0 40,40 80,40 80,0" style="fill:rgb(255,255,255)" />'.format(ab)
        else:
            od = 40*((p-12.5)/12.5)
            ans+='<polygon points="80,{} 40,40 80,40" style="fill:rgb(255,255,255)" />'.format(od)
    elif p <= 50:
        ans+='<polygon points="0,0 0,80 40,80 40,0" style="fill:rgb(255,255,255)" />'
        if p < 38:
            od = 80-40*((37.5-p)/12.5) 
            ans+='<polygon points="40,40 40,80 80,80 80, {}" style="fill:rgb(255,255,255)" />'.format(od)
        else:
            ab = 40+40*((50-p)/12.5)
            ans+='<polygon points="40,40 40,80 {},80" style="fill:rgb(255,255,255)" />'.format(ab)
    elif p <= 75:
        ans+='<polygon points="0,0 0,40 40,40 40,0" style="fill:rgb(255,255,255)" />'
        if p < 63:
            ab = 40*((62.5-p)/12.5)
            ans+='<polygon points="40,40 0,40 0,80 {},80" style="fill:rgb(255,255,255)" />'.format(ab)
        else:
            od = 40+40*((75-p)/12.5)
            ans+='<polygon points="40,40 0,40 0,{}" style="fill:rgb(255,255,255)" />'.format(od)
    else:
        if p < 88:
            od = 40*((87.5-p)/12.5)
            ans+='<polygon points="0,0 0,{} 40,40 40,0" style="fill:rgb(255,255,255)" />'.format(od)
        else:
            ab = 40 - 40*((100-p)/12.5)
            ans+='<polygon points="{},0 40,40 40,0" style="fill:rgb(255,255,255)" />'.format(ab)
    # To try to center the text correctly
    if p <= 9:
        ans+='<text x="24" y="46" font-size="20" fill="black">{}%</text>'.format(p)
    elif p <= 99:
        ans+='<text x="19" y="46" font-size="20" fill="black">{}%</text>'.format(p)
    else:
        ans+='<text x="12" y="46" font-size="20" fill="black">100%</text>'
    ans+='</svg>'
    return ans

def user_progression(user, activity):
    """Return a tuple of two integers `(progression, average)` where
    `progression` is the percent of work done and `average` is the
    percent of quality(grades) over touched exercices.
    """
    pl = activity.pl.all()
    nb_pl_touched=0
    nb_pl_graded=0
    sum_grades=0
        
    for i in pl:
        answer = Answer.highest_grade(i, user)
        if answer is not None:
            nb_pl_touched += 1
            if answer.grade is not None:
                nb_pl_graded += 1
                sum_grades += answer.grade
    progr = (100*nb_pl_graded + 10*nb_pl_touched) / len(pl) if len(pl) else 0 # 10% for readed exercices
    average = sum_grades / nb_pl_graded if nb_pl_graded else 0 # average highest grades over graded only exos
    return (progr, average)


class Pltp(AbstractActivityType):
    
    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        return PermissionDenied()
    
    
    def teacher_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        student = list()
        for user in activity.student.all():
            tp = list()
            for pl in activity.indexed_pl():
                tp.append({
                    'name':  pl.json['title'],
                    'state': Answer.pl_state(pl, user)
                })
            student.append({
                'lastname': user.last_name,
                'object':   user,
                'id':       user.id,
                'question': tp,
            })
        
        # Sort list by student's name
        student = sorted(student, key=lambda k: k['lastname'])
        
        return render(request, 'activity/activity_type/pltp/teacher_dashboard.html', {
            'state':         [i for i in State if i != State.ERROR],
            'course_name':   activity.parent.name,
            'activity_name': activity.name,
            'student':       student,
            'range_tp':      range(len(activity.indexed_pl())),
            'course_id':     activity.parent.id,
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

        # progr, quality = user_progression(request.user, activity)

        return get_template("activity/activity_type/pltp/small.html").render({
            'title':      activity.activity_data['title'],
            'pl':         pl,
            'id':         activity.id,
            'open':       activity.open,
            'instructor': request.user in activity.teacher.all(),
            'nb_exos':    len(pl),
            'progr':      graph_percent(randint(0, 100)),
            'quality':    graph_percent(randint(0, 100)),
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
        pls = activity.indexed_pl()
        for previous, next in zip(pls, list(pls[1:]) + [None]):
            if previous == session.current_pl:
                session.current_pl = next
                session.save()
                break
        else:
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
        for pl in activity.indexed_pl():
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
    
    
    def get_context(self, activity, session, request):
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

    def user_progression(self, user, activity):
        """Return a tuple of two integers `(progression, average)` where
        `progression` is the percent of work done and `average` is the
        percent of quality(grades) over touched exercices.
        """
        pl = activity.pl.all()
        nb_pl_touched=0
        nb_pl_graded=0
        sum_grades=0
        
        for i in pl:
            answer = Answer.highest_grade(i, user)
            if answer is not None:
                nb_pl_touched += 1
                if answer.grade is not None:
                    nb_pl_graded += 1
                    sum_grades += answer.grade
        progr = (100*nb_pl_graded + 10*nb_pl_touched) / len(pl) # 10% for readed exercices
        average = sum_grades / nb_pl_graded # average highest grades over graded only exos
        return (progr, average)
