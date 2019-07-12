import logging

from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.db import IntegrityError, models
from django.dispatch import receiver

from activity.activity_type.utils import get_activity_type_class, type_dict
from loader.models import PL
from lti_app.models import LTIModel


logger = logging.getLogger(__name__)



class Activity(LTIModel):
    name = models.CharField(max_length=200, null=False)
    open = models.BooleanField(default=False)
    activity_type = models.CharField(max_length=30, null=False, choices=type_dict.keys())
    activity_data = JSONField(null=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True)
    children = models.ManyToManyField("self", on_delete=models.SET_NULL, null=True)
    teacher = models.ManyToManyField(User, related_name="teaches", blank=True)
    student = models.ManyToManyField(User, blank=True)
    pls = models.ManyToManyField(PL, blank=True)
    
    
    def reload(self):
        """Reload every session using this activity."""
        self.sessionactivity_set.all().delete()
        for i in Activity.objects.filter(parent=self):
            i.sessionactivity_set.all().delete()
    
    
    def __str__(self):  # pragma: no cover
        return str(self.id) + " " + self.name
    
    
    def fetch(self):
        a_type = get_activity_type_class(self.activity_type)
        return a_type.fetch(self)
    
    
    def get_parent_list(self):
        activity = self
        res = list()
        
        while activity is not None:
            res.append(activity)
            activity = activity.parent
        
        return reversed(res)



class SessionActivity(models.Model):
    """Represents the state of an activity for a given user.

    Parameters:
        user       - User corresponding to this session.
        activity   - Activity corresponding to this session.
        current_pl - Which PL is currently loaded (None if the PLTP is loaded)."""
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    session_data = JSONField(null=True)
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
    
    
    def small(self):
        return get_activity_type_class(self.activity.activity_type)().small(self.activity, self)
    
    
    def small_td(self):
        return get_activity_type_class(self.activity.activity_type)().small_td(self.activity, self)
    
    
    def small_sd(self):
        return get_activity_type_class(self.activity.activity_type)().small_sd(self.activity, self)



@receiver(models.signals.post_save, sender=SessionActivity)
def init_session(sender, instance, created, *args, **kwargs):
    if created:
        activity = instance.activity
        activity_type = get_activity_type_class(activity.activity_type)
        instance.session_data = activity_type.init(activity)
        instance.save()



@receiver(models.signals.post_save, sender=Activity)
def install_activity(sender, instance, created, *args, **kwargs):
    if created:
        activity_type = get_activity_type_class(instance.activity_type)
        instance.activity_data = activity_type.install(instance)
        instance.save()
