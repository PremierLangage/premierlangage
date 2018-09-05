from django.conf import settings
from django.db import models
from django.contrib.auth.models import User


class LTIModel(models.Model):
    """Mixin for models that can be created through LTI.
    
    This Mixin add an optionnal id corresponding to the ID of the object on the consumer and
    the name of the consumer itself (keys of settings.LTI_OAUTH_CREDENTIALS)
    """
    
    CONSUMER = ((i, i) for i in settings.LTI_OAUTH_CREDENTIALS.keys())
    
    consumer_id = models.PositiveIntegerField(null=True, blank=True)
    consumer = models.CharField(max_length=100, choices=CONSUMER, null=True, blank=True)

    class Meta:
        abstract = True
        unique_together = ('consumer_id', 'consumer_id',)

class LTIgrade(models.Model):
    """Model class to contain every question in the forum"""
    outcome_url = models.CharField(max_length=200)
    sourcedid = models.CharField(max_length=200)
    
    class Meta:
        abstract = True
