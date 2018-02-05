import logging
import oauth2

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import logout
from django.core.exceptions import PermissionDenied

from django_auth_lti.request_validator import is_valid_request


logger = logging.getLogger(__name__)


class LTIAuthBackend(ModelBackend):

    """
    By default, the ``authenticate`` method creates ``User`` objects for
    usernames that don't already exist in the database.  Subclasses can disable
    this behavior by setting the ``create_unknown_user`` attribute to
    ``False``.
    """

    # Create a User object if not already in the database?
    create_unknown_user = True
    # Username prefix for users without an sis source id
    unknown_user_prefix = "cuid:"

    def authenticate(self, request):
        logout(request)
        logger.info("Beginning authentication process")

        request_key = request.POST.get('oauth_consumer_key', None)

        if request_key is None:
            logger.warning("Authentification aborted: Request doesn't contain an oauth_consumer_key; can't continue.")
            raise PermissionDenied("Request doesn't contain an oauth_consumer_key; can't continue.")
            return None
        
        if not settings.LTI_OAUTH_CREDENTIALS:
            logger.warning("Authentification aborted: Missing LTI_OAUTH_CREDENTIALS in settings")
            raise PermissionDenied("Missing LTI_OAUTH_CREDENTIALS in settings.")

        secret = settings.LTI_OAUTH_CREDENTIALS.get(request_key)

        if secret is None:
            logger.warning("Authentification aborted: Could not get a secret for key %s" % request_key)
            raise PermissionDenied("Could not get a secret for key %s" % request_key)

        logger.debug('using key/secret %s/%s' % (request_key, secret))

        postparams = request.POST.dict()
        logger.debug('request is secure: %s' % request.is_secure())
        for key in postparams:
            logger.debug('POST %s: %s' % (key, postparams.get(key)))

        logger.debug('request abs url is %s' % request.build_absolute_uri())

        for key in request.META:
            logger.debug('META %s: %s' % (key, request.META.get(key)))


        try:
            request_is_valid = is_valid_request(request_key, secret, request)
        except oauth2.Error:
            logger.exception(u'error attempting to validate LTI launch %s',
                             postparams)
            request_is_valid = False

        if not request_is_valid:
            logger.warning("Authentification aborted: signature check failed.")
            raise PermissionDenied("Invalid request: signature check failed.")
        
        user = None
        
        email = request.POST.get("lis_person_contact_email_primary")
        first_name = request.POST.get("lis_person_name_given")
        last_name = request.POST.get("lis_person_name_family")
        
        # Retrieve username from LTI parameter or default to an overridable function return value
        username = (first_name[0].lower() + last_name.lower())
        username = self.clean_username(username)  # Clean it
    
        UserModel = get_user_model()

        # Note that this could be accomplished in one try-except clause, but
        # instead we use get_or_create when creating unknown users since it has
        # built-in safeguards for multiple threads.
        if self.create_unknown_user:
            user, created = UserModel.objects.get_or_create(**{
                UserModel.USERNAME_FIELD: username,
            })
            if created:
                logger.info('authenticate created a new user for %s' % username)
            else:
                logger.info('authenticate found an existing user for %s' % username)

        else:
            logger.debug(
                'automatic new user creation is turned OFF! just try to find and existing record')
            try:
                user = UserModel.objects.get_by_natural_key(username)
            except UserModel.DoesNotExist:
                logger.error('authenticate could not find user %s' % username)
                # should return some kind of error here?
                pass

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

    def clean_username(self, username):
        return username
