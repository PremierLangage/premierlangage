#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  middleware.py
#
#  Authors:
#       - Coumes Quentin <coumes.quentin@gmail.com>
#

import logging

from django.contrib import auth
from django.core.exceptions import ImproperlyConfigured
from django.shortcuts import redirect, get_object_or_404
from django.urls import resolve, reverse
from django.utils.deprecation import MiddlewareMixin

from lti_app.models import ActivityOutcome
from activity.models import Activity


logger = logging.getLogger(__name__)



class LTIAuthMiddleware(MiddlewareMixin):
    """
    Middleware for authenticating users via an LTI launch URL.

    If the request is an LTI launch request, then this middleware attempts to
    authenticate the username and signature passed in the POST data.
    If authentication is successful, the user is automatically logged in to
    persist the user in the session.

    The LTI launch parameter dict is stored in the session keyed with the
    resource_link_id to uniquely identify LTI launches of the LTI producer.
    The LTI launch parameter dict is also set as the 'LTI' attribute on the
    current request object to simplify access to the parameters.

    The current request object is set as a thread local attribute so that the
    monkey-patching of django's reverse() function (see ./__init__.py) can access
    it in order to retrieve the current resource_link_id.
    """
    
    
    def process_request(self, request):
        # AuthenticationMiddleware is required so that request.user exists.
        if not hasattr(request, 'user'):  # pragma: no cover
            logger.debug('improperly configured: request has no user attr')
            raise ImproperlyConfigured(
                "The Django LTI auth middleware requires the"
                " authentication middleware to be installed.  Edit your"
                " MIDDLEWARE_CLASSES setting to insert"
                " 'django.contrib.auth.middleware.AuthenticationMiddleware'"
                " before the LTIAuthMiddleware class.")
        
        # These parameters should exist outside of session
        request.lti_initial_request = False
        request.lti_authentication_successful = False
        if request.method == 'POST' \
            and request.POST.get('lti_message_type') == 'basic-lti-launch-request':
            request.lti_initial_request = True
            # authenticate and log the user in
            user = auth.authenticate(request=request)
            if user is not None:
                # User is valid.  Set request.user and persist user in the session
                # by logging the user in.
                request.lti_authentication_successful = True
                
                request.user = user
                auth.login(request, user)
                
                lti_launch = request.POST.copy()
                lti_launch['roles'] = lti_launch.get('roles', '').split(',')
                lti_launch['custom_canvas_membership_roles'] = lti_launch.get('custom_canvas_membership_roles', '').split(',')

                
                # Creating and updating data according to lti_launch
                user.profile.set_role_lti(lti_launch)
                urlmatch = resolve(request.path)
                if not urlmatch.app_name or not urlmatch.url_name:
                    urlmatch = None
                if urlmatch and urlmatch.app_name + ":" + urlmatch.url_name == "activity:play":
                    activity = get_object_or_404(Activity, id=urlmatch.kwargs['activity_id'])
                    is_course = activity.activity_type == "course"
                    if not is_course:
                        Activity.get_or_create_course_from_lti(user, lti_launch)
                    activity, _ = Activity.get_or_update_from_lti(request, lti_launch)
                    if not is_course:
                        ActivityOutcome.get_or_create_from_lti(user, lti_launch)
                    return redirect(reverse('activity:play', args=[activity.id]))
            else:
                # User could not be authenticated!
                logger.warning('LTI authentication failed')
