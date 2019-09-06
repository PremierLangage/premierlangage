import logging

import htmlprint
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField
from django.core.exceptions import PermissionDenied
from django.db import IntegrityError, models
from django.db.models import F
from django.dispatch import receiver
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from django.urls import resolve
from django_jinja.backend import Jinja2

from activity.activity_type.utils import get_activity_type_class, type_dict
from loader.models import PL
from lti_app.models import LTIModel


logger = logging.getLogger(__name__)



class Activity(LTIModel):
    name = models.CharField(max_length=255, null=False)
    open = models.BooleanField(default=True)
    activity_type = models.CharField(max_length=30, null=False,
                                     choices=zip(type_dict.keys(), type_dict.keys()))
    activity_data = JSONField(default=dict)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True)
    teacher = models.ManyToManyField(User, related_name="teaches", blank=True)
    student = models.ManyToManyField(User, related_name="learn", blank=True)
    pl = models.ManyToManyField(PL, through="Index")
    
    
    def delete(self, *args, **kwargs):
        """ Overriding delete() to also delete his PL if they're not in
        relation with any other activity """
        pl_list = self.indexed_pl()
        logger.info("Activity '" + str(self.id) + "(" + self.name + ")" +"' has been deleted")
        for pl in pl_list:
            if len(pl.activity_set.all()) <= 1:
                logger.info("PL '" + str(pl.id) + " (" + pl.name
                            + ")' has been deleted since it wasn't link to any PLTPs")
                pl.delete()
        super(Activity, self).delete(*args, **kwargs)
    
    
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
    
    
    def indexed_pl(self):
        return [i.pl for i in sorted(self.index_set.all(), key=lambda i: i.index)]
    
    
    def small(self, request):
        return get_activity_type_class(self.activity_type)().small(request, self)
    
    
    def toggle_open(self, request):
        if request.user not in self.teacher.all():
            logger.warning("User '" + request.user.username
                           + "' denied to toggle course state'" + self.name + "'.")
            raise PermissionDenied(
                "Vous n'avez pas les droits nécessaires pour fermer/ouvrir cette activité.")
        self.open = not self.open
        self.save()
        logger.info("User '%s' set activity '%s' 'open' attribute to '%s' in '%s'."
                    % (request.user.username, self.name, str(self.open), self.parent.name))
    
    
    def is_teacher(self, user):
        return user in self.teacher.all()
    
    
    def is_student(self, user):
        return user in self.student.all()
    
    
    @classmethod
    def get_or_create_course_from_lti(cls, user, lti_launch):
        """Create a Course Activity corresponding to the ressource in the LTI request.
        
        Returns a tuple of (object, created), where object is the retrieved or created object and
        created is a boolean specifying whether a new object was created.

        Return None, False if parameters are missing in lti_launch."""
        course_id = lti_launch["context_id"]
        course_name = lti_launch.get("context_title")
        course_label = lti_launch.get("context_label")
        consumer = lti_launch['oauth_consumer_key']
        if not (course_id and course_name and course_label and consumer):
            return None, False
        
        try:
            course = cls.objects.get(activity_data__consumer_id=course_id,
                                     activity_data__consumer=consumer)
            created = False
        except cls.DoesNotExist:
            data = {
                "consumer":    consumer,
                "consumer_id": course_id,
                "label":       course_label
            }
            course = cls.objects.create(name=course_name, activity_data=data, activity_type="course")
            logger.info("New course created: %d - '%s' (%s:%s)"
                        % (course.pk, course.name, consumer, course_id))
            created = True
        
        course.student.add(user)
        for role in lti_launch["roles"]:
            if role in ["urn:lti:role:ims/lis/Instructor", "Instructor"]:
                course.teacher.add(user)
        course.save()
        
        return course, created
    
    
    @classmethod
    def get_or_create_from_lti(cls, request, lti_launch):
        """Creates an Activity corresponding to ID in the url and sets its course according to
        the LTI request..
        The corresponding Course must have already been created, Course.DoesNotExists will be
        raised otherwise.
        Returns a tuple of (object, created), where object is the retrieved or created object and
        created is a boolean specifying whether a new object was created."""
        course_id = lti_launch.get("context_id")
        consumer = lti_launch.get('oauth_consumer_key')
        activity_id = lti_launch.get('resource_link_id')
        activity_name = lti_launch.get('resource_link_title')
        user = request.user

        if not all([course_id, activity_id, activity_name, consumer]):
            raise Http404("Could not create Activity: on of these parameters are missing:"
                          + "[context_id, resource_link_id, resource_link_title, "
                            "oauth_consumer_key]")
        
        course = cls.objects.get(activity_data__consumer_id=course_id,
                                 activity_data__consumer=consumer)
        try:
            activity, created = cls.objects.get(activity_data__consumer_id=activity_id, activity_data__consumer=consumer), False
        except Activity.DoesNotExist:
            match = resolve(request.path)
            if not match.app_name or not match.url_name:
                match = None
            if not match or (match and match.app_name + ":" + match.url_name != "activity:play"):
                logger.warning(request.path + " does not correspond to 'activity:play' in Activity.get_or_create_from_lti")
                raise Http404("Activity could not be found.")
            activity = get_object_or_404(Activity, id=match.kwargs['activity_id'])
            activity.activity_data["consumer_id"] = activity_id
            activity.activity_data["consumer"] = consumer
            if activity.parent.id == 0:
            	activity.parent = course
            created = True
            
        for role in lti_launch["roles"]:
        	if role in ["urn:lti:role:ims/list/Instructor", "Instructor"]:
        		activity.teacher.add(user)
        activity.student.add(user)
        activity.save
        
        return activity, created



class SessionActivity(models.Model):
    """Represents the state of an activity for a given user.

    Parameters:
        user       - User corresponding to this session.
        activity   - Activity corresponding to this session.
        current_pl - Which PL is currently loaded (None if the PLTP is loaded)."""
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    session_data = JSONField(default=dict)
    current_pl = models.ForeignKey(PL, on_delete=models.CASCADE, null=True)
    
    
    class Meta:
        unique_together = ('user', 'activity')
    
    
    def session_exercise(self, pl=...):
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
    
    
    def small_td(self):
        return get_activity_type_class(self.activity.activity_type)().small_td(self.activity, self)
    
    
    def small_sd(self):
        return get_activity_type_class(self.activity.activity_type)().small_sd(self.activity, self)
    
    
    def current_pl_template(self, request, context=None):
        """Return a template of the PL with the session exercise context.
        If given, will use context instead."""
        session_exercise = self.session_exercise()
        try:
            pl = session_exercise.pl
            if pl:
                return session_exercise.get_pl(request, context)
            else:
                dic = dict(session_exercise.context if not context else context)
                dic['user_settings__'] = session_exercise.session_activity.user.profile
                dic['user__'] = session_exercise.session_activity.user
                first_pls = session_exercise.session_activity.activity.indexed_pl()
                if first_pls:
                    dic['first_pl__'] = first_pls[0].id
                env = Jinja2.get_default()
                for key in dic:
                    if type(dic[key]) is str:
                        dic[key] = env.from_string(dic[key]).render(context=dic, request=request)
                return get_template("activity/activity_type/pltp/pltp.html").render(dic, request)
        
        except Exception as e:  # pragma: no cover
            error_msg = str(e)
            if request.user.profile.can_load():
                error_msg += "<br><br>" + htmlprint.html_exc()
            return get_template("playexo/error.html").render({"error_msg": error_msg})



@receiver(models.signals.post_save, sender=SessionActivity)
def init_session(sender, instance, created, *args, **kwargs):
    if created:
        activity = instance.activity
        activity_type = get_activity_type_class(activity.activity_type)()
        instance.session_data = {**instance.session_data, **activity_type.init(activity, instance)}
        instance.save()



@receiver(models.signals.post_save, sender=Activity)
def install_activity(sender, instance, created, *args, **kwargs):
    if created:
        activity_type = get_activity_type_class(instance.activity_type)()
        instance.activity_data = {**instance.activity_data, **activity_type.install(instance)}
        instance.parent = Activity.objects.get(pk=0)
        instance.save()



class Index(models.Model):
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    pl = models.ForeignKey(PL, on_delete=models.CASCADE)
    index = models.PositiveSmallIntegerField(blank=True)
    
    
    class Meta:
        unique_together = ('activity', 'index')
        ordering = ['index']
        verbose_name_plural = "Indexes"
    
    
    def __str__(self):  # pragma: no cover
        return "Activity - (" + str(self.activity) + ") | PL - (" + str(
            self.pl) + ") | Pos - " + str(
            self.index)
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.index = len(Index.objects.filter(activity=self.activity))
        super(Index, self).save(*args, **kwargs)
    
    
    def move_end(self):
        index = self.index
        self.index = len(Index.objects.filter(activity=self.activity))
        self.save()
        for i in Index.objects.filter(activity=self.activity, index__gt=index):
            i.index = F('index') - 1
            i.save()
    
    
    def move_start(self):
        index = self.index
        self.index = 32766  # Max for PositiveSmallInteger
        self.save()
        for i in Index.objects.filter(activity=self.activity, index__lt=index).reverse():
            i.index = F('index') + 1
            i.save()
        self.index = 0
        self.save()
