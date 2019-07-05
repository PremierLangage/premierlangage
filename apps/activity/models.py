import logging

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
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
    activity_type = models.CharField(max_length=20, null=False)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
    parent = models.ForeignKey("self", on_delete=models.SET_NULL, null=False)
    children = models.ManyToManyField("self")
    
    
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
    activity_data = JSONField(null=True)
    
    
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
