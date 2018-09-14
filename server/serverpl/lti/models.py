from django.apps import apps
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User


class LTIModel(models.Model):
    """Mixin for models that can be created through LTI.
    
    This Mixin add an optionnal id corresponding to the ID of the object on the consumer's server 
    and the name of the consumer itself must be a key of settings.LTI_OAUTH_CREDENTIALS.
    """
    
    CONSUMER = ((i, i) for i in settings.LTI_OAUTH_CREDENTIALS.keys())
    
    consumer_id = models.PositiveIntegerField(null=True, blank=True)
    consumer = models.CharField(max_length=100, choices=CONSUMER, null=True, blank=True)

    class Meta:
        abstract = True
        unique_together = ('consumer_id', 'consumer_id',)


class LTIOutcome(models.Model):
    """Abstract Model to store LTI outcome url and source id of a consumer's activity."""
    outcome_url = models.CharField(max_length=300)
    sourcedid = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True
        unique_together = ('outcome_url', 'sourcedid',)


class ActivityOutcome(LTIOutcome):
    activity = models.ForeignKey('playexo.Activity', on_delete=models.CASCADE)
    
    @classmethod
    def get_or_create_from_lti(cls, request, user, lti_launch):
        """Create an ActivityOutcome corresponding to the ressource in the LTI request.
        
        The corresponding Activity must have already been created, Activity.DoesNotExists will be
        raised otherwise.
        An incorrect URL may also raise exception such as ValueError.
        
        Returns a tuple of (object, created), where object is the retrieved or created object and
        created is a boolean specifying whether a new object was created."""
        Activity = apps.get_model('playexo', 'Activity')
        outcome_url = lti_launch['lis_outcome_service_url']
        sourcedid = lti_launch["lis_result_sourcedid"]
        
        try:
            return cls.objects.get(outcome_url=outcome_url, sourcedid=sourcedid), False
        except cls.DoesNotExists:
            activity_id = int([i for i in request.path.split('/') if i])
            activity = Activity.objects.get(id=activity_id)
            outcome = cls.objects.create(outcome_url=outcome_url, sourcedid=sourcedid,
                                         activity=activity, user=user)
            return outcome, True
