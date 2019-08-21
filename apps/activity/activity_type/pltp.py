from activity.activity_type.activity_type import AbstractActivityType
from loader.models import PL
from playexo.models import Answer

from django.shortcuts import get_object_or_404, redirect, reverse, render
from django.http import HttpResponseBadRequest
from django.core.exceptions import PermissionDenied



class Pltp(AbstractActivityType):
    
    def student_dashboard(self, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        return None
    
    
    def teacher_dashboard(self, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        return None
    
    
    def small(self, activity, session_activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of the teacher dashboard
        """
        return None
    
    
    def small_sd(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a student.
        :return: A rendered template of the teacher dashboard
        """
        return None
    
    
    def small_td(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        return None
    
    
    def grading(self):
        pass
    
    
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
                exercise = session.exercise()
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
        return render(request, 'activity/activity_type/pltp/exercise.html', session.exercise().get_context(request))
    
    
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
