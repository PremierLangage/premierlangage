
import logging

from django.contrib import auth
from django.core.exceptions import ImproperlyConfigured
from django.shortcuts import redirect, get_object_or_404
from django.urls import resolve, reverse
from django.utils.deprecation import MiddlewareMixin
from cas_app.backends import MyCASBackend
from lti_app.models import ActivityOutcome
from activity.models import Activity


logger = logging.getLogger(__name__)

class CASAuthMiddleware(MiddlewareMixin):
    """
    Middleware for authenticating users via an CAS .
    """
    
    def process_request(self, request):
        logger.debug("CASAuthMiddleware.process_request")
        # AuthenticationMiddleware is required so that request.user exists.
        if not hasattr(request, 'user'):  # pragma: no cover
            logger.debug('improperly configured: request has no user attr')
            raise ImproperlyConfigured(
                "The Django CAS auth middleware requires the"
                " authentication middleware to be installed.  Edit your"
                " MIDDLEWARE_CLASSES setting to insert"
                " 'django.contrib.auth.middleware.AuthenticationMiddleware'"
                " before the CASAuthMiddleware class.")

        logger.debug("request.method: ", request.method)
        logger.debug("request.GET.get('tpnote', None): ", request.GET.get('tpnote', None))   
        logger.debug("request.GET: ", request.GET)
        # These parameters should exist outside of session
        if request.method == 'GET' \
            and request.GET.get('next', None) \
            and request.GET.get('next').startswith('/tpnote/'):

            logger.debug("request.GET.get('tpnote', None): ", request.GET.get('tpnote', None))
            logger.debug("request.GET.get('next', None): ", request.GET.get('next', None))
            # authenticate and log the user in
            user = auth.authenticate(request=request)
            backend = MyCASBackend()
            user = backend.authenticate(request, request.GET.get('ticket', None), request.build_absolute_uri().split('&')[0])
            logger.debug("is it a user ?", user)

            if user is not None:
                # User is valid.  Set request.user and persist user in the session
                # by logging the user in.
                logger.debug("user: ", user)
                
                request.user = user
                logger.debug("trying to login")
                if user.is_active:
                    logger.debug("user is active")
                auth.login(request, user, backend='django.contrib.auth.backends.ModelBackend')
                logger.debug("logged in")

                #get next url and remove all non digits characters
                activity_id = int(''.join([i for i in request.GET.get('next').replace('/tpnote/', '') if i.isdigit()]))

                #activity_id = request.GET.get('tpnote', None)
                logger.debug("activity_id: ", activity_id)
                if activity_id :
                    return redirect(reverse('activity:play', args=[activity_id]))
                else :
                    return redirect(reverse('activity:home'))
            else:
                # User could not be authenticated!
                logger.warning('LTI authentication failed')
