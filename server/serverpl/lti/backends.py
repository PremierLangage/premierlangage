import logging, oauth2

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import logout
from django.core.exceptions import PermissionDenied, ObjectDoesNotExist
from django.db import IntegrityError

from lti.request_validator import is_valid_request
from user_profile.models import Profile

logger = logging.getLogger(__name__)


class LTIAuthBackend(ModelBackend):
    """
    By default, the ``authenticate`` method creates ``User`` objects for
    usernames that don't already exist in the database.  Subclasses can disable
    this behavior by setting the ``create_unknown_user`` attribute to
    ``False``.
    """
    
    # Username prefix for users without an sis source id
    unknown_user_prefix = "cuid:"
    
    def authenticate(self, request):
        logout(request)
        logger.info("Beginning authentication process")
        
        request_key = request.POST.get('oauth_consumer_key', None)
        if request_key is None:
            logger.warning("LTI Authentification aborted: Request doesn't contain an oauth_consumer_key; can't continue.")
            raise PermissionDenied("Request doesn't contain an oauth_consumer_key; can't continue.")
        
        if not settings.LTI_OAUTH_CREDENTIALS:
            logger.warning("LTI Authentification aborted: Missing LTI_OAUTH_CREDENTIALS in settings")
            raise PermissionDenied("Missing LTI_OAUTH_CREDENTIALS in settings.")
        secret = settings.LTI_OAUTH_CREDENTIALS.get(request_key)
        if secret is None:
            logger.warning("LTI Authentification aborted: Could not get a secret for key " + request_key)
            raise PermissionDenied("Could not get a secret for key " + request_key)
        
        postparams = request.POST.dict()
        try:
            request_is_valid = is_valid_request(request_key, secret, request)
        except oauth2.Error:
            logger.exception(u'error attempting to validate LTI launch %s', postparams)
            request_is_valid = False

        if not request_is_valid:
            logger.warning("LTI Authentification aborted: signature check failed.")
            raise PermissionDenied("Invalid request: signature check failed.")
        
        user = None
        email = request.POST.get("lis_person_contact_email_primary")
        first_name = request.POST.get("lis_person_name_given")
        last_name = request.POST.get("lis_person_name_family")
        user_id = request.POST.get("user_id")
        username = (first_name[0].lower() + last_name.lower())
        
        UserModel = get_user_model()
        
        try:
            logger.info('authenticate found an existing user for %s' % username)
            user = Profile.objects.get(consumer_id=user_id, consumer=request_key).user
        except ObjectDoesNotExist:
            logger.info('authenticate created a new user for %s' % username)
            i = 0
            while True:
                try:
                    user = UserModel.objects.create_user(username=username + ("" if not i else str(i)))
                except IntegrityError:
                    i += 1
                    continue
                break
            user.profile.consumer = request_key
            user.profile.consumer_id = consumer_id=user_id
            
        # update the user
        if email:
            user.email = email
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        user.save()
        
        logger.info("User '"+username+"' has been autenticated")
        return user
