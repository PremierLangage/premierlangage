import logging

from django.apps import apps
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.http import Http404


logger = logging.getLogger(__name__)


class LTIModel(models.Model):
    """Mixin for models that can be created through LTI.
    
    This Mixin add an optionnal id corresponding to the ID of the object on the consumer's server 
    and the name of the consumer itself must be a key of settings.LTI_OAUTH_CREDENTIALS.
    """
    
    CONSUMER = ((i, i) for i in settings.LTI_OAUTH_CREDENTIALS.keys())
    consumer_id = models.CharField(max_length=200, null=True, blank=True)
    consumer = models.CharField(max_length=200, choices=CONSUMER, null=True, blank=True)

    class Meta:
        abstract = True
        unique_together = ('consumer', 'consumer_id',)



class LTIOutcome(models.Model):
    """Abstract Model to store LTI outcome url and source id of a consumer's activity."""
    url = models.CharField(max_length=300)
    sourcedid = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        abstract = True
        unique_together = ('url', 'sourcedid',)



class ActivityOutcome(LTIOutcome):
    activity = models.ForeignKey('playexo.Activity', on_delete=models.CASCADE)
    
    @classmethod
    def get_or_create_from_lti(cls, user, lti_launch):
        """Create an ActivityOutcome corresponding to the ressource in the LTI request.
        
        The corresponding Activity must have already been created, Activity.DoesNotExists will be
        raised otherwise.
        An incorrect URL may also raise exception such as ValueError.
        
        Returns a tuple of (object, created), where object is the retrieved or created object and
        created is a boolean specifying whether a new object was created."""
        Activity = apps.get_model('playexo', 'Activity')
        consumer = lti_launch['oauth_consumer_key']
        outcome_url = lti_launch['lis_outcome_service_url']
        sourcedid = lti_launch["lis_result_sourcedid"]
        activity_id = lti_launch['resource_link_id']
        if not (sourcedid and outcome_url and activity_id and consumer):
            raise Http404("Could not create ActivityOutcome: on of these parameters are missing:"
                          + "[lis_result_sourcedid, lis_outcome_service_url, resource_link_id, "
                          + "oauth_consumer_key]")

        try:
            return cls.objects.get(url=outcome_url, sourcedid=sourcedid), False
        except ActivityOutcome.DoesNotExist:
            activity = Activity.objects.get(consumer_id=activity_id, consumer=consumer)
            outcome = cls.objects.create(url=outcome_url, sourcedid=sourcedid,
                                         activity=activity, user=user)
            return outcome, True
