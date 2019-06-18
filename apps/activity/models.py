import logging

from django.contrib.auth.models import User
from django.db import IntegrityError, models
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.urls import resolve

from classmanagement.models import Course
from loader.models import PL, PLTP
from lti_app.models import LTIModel


logger = logging.getLogger(__name__)



class Activity(LTIModel):
    name = models.CharField(max_length=200, null=False)
    open = models.BooleanField(default=True)
    pltp = models.ForeignKey(PLTP, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
    parent = models.ForeignKey("self", on_delete=models.SET_NULL, null=True, blank=True)
    
    
    @classmethod
    def get_or_create_from_lti(cls, request, lti_launch):
        """Creates an Activity corresponding to ID in the url and sets
        its course according to the LTI request..

        The corresponding Course must have already been created,
        Course.DoesNotExists will be raised otherwise.

        Returns a tuple of (object, created), where object is the
        retrieved or created object and created is a boolean specifying
        whether a new object was created."""
        course_id = lti_launch.get("context_id")
        consumer = lti_launch.get('oauth_consumer_key')
        activity_id = lti_launch.get('resource_link_id')
        activity_name = lti_launch.get('resource_link_title')
        if not all([course_id, activity_id, activity_name, consumer]):
            raise Http404("Could not create Activity: on of these parameters are missing:"
                          + "[context_id, resource_link_id, resource_link_title, "
                            "oauth_consumer_key]")
        
        course = Course.objects.get(consumer_id=course_id, consumer=consumer)
        try:
            return cls.objects.get(consumer_id=activity_id, consumer=consumer), False
        except Activity.DoesNotExist:
            match = resolve(request.path)
            if not match.app_name or not match.url_name:
                match = None
            if not match or (match and match.app_name + ":" + match.url_name != "activity:play"):
                logger.warning(request.path + " does not correspond to 'activity:play' in "
                                              "Activity.get_or_create_from_lti")
                raise Http404("Activity could not be found.")
            parent = get_object_or_404(Activity, id=match.kwargs['activity_id'])
            new = Activity.objects.create(consumer_id=activity_id, consumer=consumer,
                                          name=activity_name, pltp=parent.pltp, course=course,
                                          parent=parent)
            return new, True
    
    
    def reload(self):
        """Reload every session using this activity."""
        self.sessionactivity_set.all().delete()
        for i in Activity.objects.filter(parent=self):
            i.sessionactivity_set.all().delete()
    
    
    def __str__(self):  # pragma: no cover
        return str(self.id) + " " + self.name



class SessionActivity(models.Model):
    """Represents the state of an activity for a given user.

    Parameters:
        user       - User corresponding to this session.
        activity   - Activity corresponding to this session.
        current_pl - Which PL is currently loaded (None if the PLTP is loaded)."""
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    current_pl = models.ForeignKey(PL, on_delete=models.CASCADE, null=True)
    
    
    class Meta:
        unique_together = ('user', 'activity')
    
    
    def exercise(self, pl=...):
        """Return the SessionExercice corresponding to self.current_pl.

        If the optionnal parameter 'pl' is given (can be given as None for the PLTP), will instead
        return the SessionExercice corresponding to pl.

        Raise IntegrityError if no session for either self.current_pl or pl (if given) was found."""
        try:
            return next(
                i for i in self.sessionexercise_set.all()
                if i.pl == (self.current_pl if pl is ... else pl)
            )
        except StopIteration:
            raise IntegrityError("'current_pl' of SessionActivity does not have a corresponding "
                                 + "SessionExercise.")
