from abc import ABC, abstractmethod

from django.core.exceptions import PermissionDenied
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.template.loader import get_template
from django.urls import reverse



class AbstractActivityType(ABC):
    
    @abstractmethod
    def student_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        raise PermissionDenied()
    
    
    @abstractmethod
    def teacher_dashboard(self, request, activity, session):
        """
        This method is called when the dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        raise PermissionDenied()
    
    
    @abstractmethod
    def small(self, request, activity):
        """
        This method can be called by any parent activity to display something from this activity.
        :return: A rendered template of a small summary
        """
        return get_template("activity/activity_type/default_small.html").render({
            "activity": activity
        }, request)
    
    
    @abstractmethod
    def small_sd(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a student.
        :return: A rendered template of the student dashboard
        """
        raise PermissionDenied()
    
    
    @abstractmethod
    def small_td(self, activity, session_activity):
        """
        This method is called when the small dashboard of an activity is requested for a teacher.
        :return: A rendered template of the teacher dashboard
        """
        raise PermissionDenied()
    
    
    @abstractmethod
    def template(self, request, activity, session):
        """
        This method is called when the play view is called.
        :return: A rendered template of the main page of the activity.
        """
        return render(request, "base.html", {})
    
    
    @abstractmethod
    def fetch(self, activity):
        """
        This method is called when the fetch method of an activity is called.
        :return: (PLs, Activities): a tuple of a list of pls and a list of activities.
        """
        return None, None
    
    
    @abstractmethod
    def install(self, activity):
        """
        This method is called only the first time when the activity is created.
        :return: A new dictionnary to initialize the activity_data of an activity
        """
        return {}
    
    
    @abstractmethod
    def init(self, activity, session):
        """
        This method is called when a new instance of an activity is created.
        :return: A new dictionnary to initialize the session_data of a session_activity
        """
        return {}
    
    
    @abstractmethod
    def push(self):
        pass
    
    
    @abstractmethod
    def launch(self):
        pass
    
    
    @abstractmethod
    def validate(self, activity, session, answer, feedback, action=""):
        """ Must return a tuple: (feedback, to_be_saved), where the feedback can be modified by
        the activity, and to_be_saved is a boolean that decide whether the answer will be saved
        in the database or not"""
        pass
    
    
    @abstractmethod
    def next(self, activity, session):
        """
        This method is called when the next button is clicked on an activity.
        :return: A redirection to the main page of the activity accordingly to the function.
        """
        return redirect(reverse("activity:play", args=[activity.id]))
    
    
    @abstractmethod
    def pop(self, activity, session):
        pass
    
    
    @abstractmethod
    def end(self, activity, session):
        """
        This method is called when the activity is closed.
        :return: A rendered template of the closed activity
        """
        raise PermissionDenied("Cette activité est fermée.")
    
    
    @abstractmethod
    def navigation(self, activity, session_activity, request):
        """This method is called to get a rendered template of the navigation of this activity"""
        return None
    
    
    def notes(self, activity, request):
        if not activity.is_teacher(request.user):
            raise PermissionDenied("Vous n'êtes pas un professeur pour cette activité")
        response = HttpResponse("", content_type="text/csv")
        response['Content-Disposition'] = 'attachment;filename=notes.csv'
        return response
