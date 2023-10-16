
import logging

from django.contrib import auth
from django.core.exceptions import ImproperlyConfigured
from django.shortcuts import redirect, get_object_or_404
from django.urls import resolve, reverse
from django.utils.deprecation import MiddlewareMixin

from lti_app.models import ActivityOutcome
from activity.models import Activity


logger = logging.getLogger(__name__)

class CASAuthMiddleware(MiddlewareMixin):
    """
    Middleware for authenticating users via an CAS .
    """
    
    
    def process_request(self, request):
        print("CASAuthMiddleware.process_request")
        # AuthenticationMiddleware is required so that request.user exists.
        if not hasattr(request, 'user'):  # pragma: no cover
            logger.debug('improperly configured: request has no user attr')
            raise ImproperlyConfigured(
                "The Django CAS auth middleware requires the"
                " authentication middleware to be installed.  Edit your"
                " MIDDLEWARE_CLASSES setting to insert"
                " 'django.contrib.auth.middleware.AuthenticationMiddleware'"
                " before the CASAuthMiddleware class.")

        print("request.method: ", request.method)
        print("request.GET.get('tpnote', None): ", request.GET.get('tpnote', None))   
        print("request.GET: ", request.GET)
        # These parameters should exist outside of session
        if request.method == 'GET' \
            and request.GET.get('next', None) \
            and request.GET.get('next').startswith('/tpnote/'):

            print("request.GET.get('tpnote', None): ", request.GET.get('tpnote', None))
            print("request.GET.get('next', None): ", request.GET.get('next', None))
            # authenticate and log the user in
            user = auth.authenticate(request=request)
            if user is not None:
                # User is valid.  Set request.user and persist user in the session
                # by logging the user in.
                print("user: ", user)
                
                request.user = user
                print("trying to login")
                auth.login(request, user)
                print("logged in")

                #get next url and remove all non digits characters
                activity_id = [i for i in request.GET.get('next').replace('/tpnote/', '') if i.isdigit()]

                #activity_id = request.GET.get('tpnote', None)
                print("activity_id: ", activity_id)
                if activity_id :
                    return redirect(reverse('activity:play', args=[activity_id]))
                else :
                    return redirect(reverse('activity:home'))
            else:
                # User could not be authenticated!
                logger.warning('LTI authentication failed')
