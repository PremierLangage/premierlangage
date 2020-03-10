import json

from django.core.exceptions import PermissionDenied
from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render, reverse
from django.template.loader import get_template

from activity.activity_type.activity_type import AbstractActivityType
from activity.utils import (anonymous_current_pl_template, get_anonymous_current_pl_id,
                            get_anonymous_session_exercise, get_anonymous_uuid,
                            set_anonymous_current_pl_id)
from loader.models import PL
from playexo.models import AnonymousAnswer
from playexo.utils import render_feedback



class MailPltp(AbstractActivityType):
    
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
        return PermissionDenied()
    
    
    def small(self, request, activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of the small
        """
        pl = [
            {
                'name':  activity.activity_data['title'],
                'state': AnonymousAnswer.pl_state(elem, get_anonymous_uuid(request))
            }
            for elem in activity.indexed_pl()
        ]
        
        return get_template("activity/activity_type/pltp/small.html").render({
            'title':      activity.activity_data['title'],
            'pl':         pl,
            'id':         activity.id,
            'open':       activity.open,
            'instructor': request.user in activity.teacher.all()
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
        uuid = get_anonymous_uuid(request)
        current_pl_id = get_anonymous_current_pl_id(activity.id, request)
        if current_pl_id == -1:
            current_pl = -1
        elif current_pl_id is None:
            current_pl = None
        else:
            try:
                current_pl = PL.objects.get(id=current_pl_id)
            except PL.DoesNotExist:
                current_pl = None
        
        if request.method == 'GET':
            action = request.GET.get("action")
            
            if action == "pl":
                try:
                    pl_id = int(request.GET.get("pl_id"))
                except ValueError:
                    return HttpResponseBadRequest("Missing/invalid parameter 'pl_id'")
                set_anonymous_current_pl_id(activity.id, request, pl_id)
            
            elif action == "home":
                set_anonymous_current_pl_id(activity.id, request, None)
            
            elif current_pl and action == "reset":
                AnonymousAnswer.objects.create(user_uuid=uuid, pl=current_pl)
            
            if action:
                return redirect(reverse("activity:play", args=[activity.id]))
        
        if current_pl and current_pl != -1:
            last = AnonymousAnswer.last(current_pl, get_anonymous_uuid(request))
            AnonymousAnswer.objects.create(
                user_uuid=get_anonymous_uuid(request),
                pl=current_pl,
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
    
    
    def next(self, request, activity, session):
        """
        This method is called when the next button is clicked on an activity.
        :return: A redirection to the main page of the activity accordingly to the function.
        """
        pls = activity.indexed_pl()
        for previous, next in zip(pls, list(pls[1:]) + [None]):
            if previous == session.current_pl:
                set_anonymous_current_pl_id(activity.id, request, next.id)
                break
        else:
            set_anonymous_current_pl_id(activity.id, request, None)
        return redirect(reverse("activity:play", args=[activity.id]))
    
    
    def pop(self, activity, session):
        pass
    
    
    def end(self, activity, session):
        """
        This method is called when the activity is closed.
        :return: A rendered template of the closed activity
        """
        raise PermissionDenied("Cette activité est fermé.")
    
    
    def navigation(self, activity, session, request):
        """This method is called to get a rendered template of the navigation of this activity"""
        current_pl_id = get_anonymous_current_pl_id(activity.id, request)
        exercise = get_anonymous_session_exercise(request, current_pl_id)
        pl_list = [{
            'id':    None,
            'state': None,
            'title': activity.activity_data['title'],
        }]
        for pl in activity.indexed_pl():
            pl_list.append({
                'id':    pl.id,
                'state': AnonymousAnswer.pl_state(pl, get_anonymous_uuid(request)),
                'title': pl.json['title'],
            })
        pl_list.append({
            'id': -1,
            'state': None,
            'title': "Envoyer les réponses"
        })
        if exercise:
            context = dict(exercise.context)
        else:
            context = activity.activity_data
        context.update({
            "pl_list__":     pl_list,
            'pl_id__':       exercise.pl.id if exercise else None,
            "activity_id__": activity.id,
        })
        return get_template("activity/activity_type/pltp/navigation.html").render(context, request)
    
    
    def get_context(self, activity, session, request):
        return {
            "navigation": self.navigation(activity, session, request),
            "exercise":   anonymous_current_pl_template(request, activity),
        }
    
    
    def notes(self, activity, request):
        return PermissionDenied()
    
    
    def evaluate(self, request, activity, pl_id):
        status = json.loads(request.body.decode())
        pl = get_object_or_404(PL, id=pl_id)
        exercise = get_anonymous_session_exercise(request, pl_id)
        session = request.session
        uuid = get_anonymous_uuid(request)
        if 'requested_action' in status:
            if status['requested_action'] == 'save':
                AnonymousAnswer.objects.create(
                    answers=status['inputs'],
                    user_uuid=uuid,
                    pl=pl,
                    seed=exercise.context['seed']
                )
                return HttpResponse(json.dumps({
                    "exercise":   None,
                    "navigation": None,
                    "feedback":   "Réponse(s) sauvegardé.",
                }), content_type='application/json')
            
            elif status['requested_action'] == 'submit':  # Validate
                answer, feedback = exercise.evaluate(request, status['inputs'])
                answer['activity'] = activity
                feedback, to_be_saved = self.validate(activity, session, answer,
                                                      feedback,
                                                      action="submit")
                if to_be_saved:
                    if "user" in answer:
                        del answer["user"]
                    answer["user_uuid"] = get_anonymous_uuid(request)
                    AnonymousAnswer.objects.create(**answer)
                return JsonResponse({
                    "navigation": self.navigation(activity, session, request),
                    "exercise":   anonymous_current_pl_template(request, activity),
                    "feedback":   render_feedback(feedback),
                },
                    content_type='application/json'
                )
            return HttpResponseBadRequest("Unknown action")
        else:
            return HttpResponseBadRequest("Missing action")
