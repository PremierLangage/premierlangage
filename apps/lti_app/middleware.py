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
                
                resource_link_id = request.POST.get('resource_link_id')
                lti_launch = {
                    'context_id':                             request.POST.get('context_id'),
                    'context_label':                          request.POST.get('context_label'),
                    'context_title':                          request.POST.get('context_title'),
                    'context_type':                           request.POST.get('context_type'),
                    'custom_canvas_account_id':               request.POST.get(
                        'custom_canvas_account_id'),
                    'custom_canvas_account_sis_id':           request.POST.get(
                        'custom_canvas_account_sis_id'),
                    'custom_canvas_api_domain':               request.POST.get(
                        'custom_canvas_api_domain'),
                    'custom_canvas_course_id':                request.POST.get(
                        'custom_canvas_course_id'),
                    'custom_canvas_enrollment_state':         request.POST.get(
                        'custom_canvas_enrollment_state'),
                    'custom_canvas_membership_roles':         request.POST.get(
                        'custom_canvas_membership_roles', '').split(','),
                    'custom_canvas_user_id':                  request.POST.get(
                        'custom_canvas_user_id'),
                    'custom_canvas_user_login_id':            request.POST.get(
                        'custom_canvas_user_login_id'),
                    'launch_presentation_css_url':            request.POST.get(
                        'launch_presentation_css_url'),
                    'launch_presentation_document_target':    request.POST.get(
                        'launch_presentation_document_target'),
                    'launch_presentation_height':             request.POST.get(
                        'launch_presentation_height'),
                    'launch_presentation_locale':             request.POST.get(
                        'launch_presentation_locale'),
                    'launch_presentation_return_url':         request.POST.get(
                        'launch_presentation_return_url'),
                    'launch_presentation_width':              request.POST.get(
                        'launch_presentation_width'),
                    'lis_course_offering_sourcedid':          request.POST.get(
                        'lis_course_offering_sourcedid'),
                    'lis_outcome_service_url':                request.POST.get(
                        'lis_outcome_service_url'),
                    'lis_result_sourcedid':                   request.POST.get(
                        'lis_result_sourcedid'),
                    'lis_person_contact_email_primary':       request.POST.get(
                        'lis_person_contact_email_primary'),
                    'lis_person_name_family':                 request.POST.get(
                        'lis_person_name_family'),
                    'lis_person_name_full':                   request.POST.get(
                        'lis_person_name_full'),
                    'lis_person_name_given':                  request.POST.get(
                        'lis_person_name_given'),
                    'lis_person_sourcedid':                   request.POST.get(
                        'lis_person_sourcedid'),
                    'lti_message_type':                       request.POST.get('lti_message_type'),
                    'oauth_consumer_key':                     request.POST.get(
                        'oauth_consumer_key'),
                    'resource_link_description':              request.POST.get(
                        'resource_link_description'),
                    'resource_link_id':                       resource_link_id,
                    'resource_link_title':                    request.POST.get(
                        'resource_link_title'),
                    'roles':                                  request.POST.get('roles', '').split(
                        ','),
                    'selection_directive':                    request.POST.get(
                        'selection_directive'),
                    'tool_consumer_info_product_family_code': request.POST.get(
                        'tool_consumer_info_product_family_code'),
                    'tool_consumer_info_version':             request.POST.get(
                        'tool_consumer_info_version'),
                    'tool_consumer_instance_contact_email':   request.POST.get(
                        'tool_consumer_instance_contact_email'),
                    'tool_consumer_instance_description':     request.POST.get(
                        'tool_consumer_instance_description'),
                    'tool_consumer_instance_guid':            request.POST.get(
                        'tool_consumer_instance_guid'),
                    'tool_consumer_instance_name':            request.POST.get(
                        'tool_consumer_instance_name'),
                    'tool_consumer_instance_url':             request.POST.get(
                        'tool_consumer_instance_url'),
                    'user_id':                                request.POST.get('user_id'),
                    'user_image':                             request.POST.get('user_image'),
                }
                
                # Creating and updating data according to lti_launch
                user.profile.set_role_lti(lti_launch)
                urlmatch = resolve(request.path)
                if not urlmatch.app_name or not urlmatch.url_name:
                    urlmatch = None
                if urlmatch and urlmatch.app_name + ":" + urlmatch.url_name == "activity:play":
                    activity = get_object_or_404(Activity, id=urlmatch.kwargs['activity_id'])
                    is_course = activity.activity_type != "course"
                    if is_course:
                        Activity.get_or_create_course_from_lti(user, lti_launch)
                    activity, _ = Activity.get_or_update_from_lti(request, lti_launch)
                    if is_course:
                        ActivityOutcome.get_or_create_from_lti(user, lti_launch)
                    return redirect(reverse('activity:play', args=[activity.id]))
            else:
                # User could not be authenticated!
                logger.warning('LTI authentication failed')
