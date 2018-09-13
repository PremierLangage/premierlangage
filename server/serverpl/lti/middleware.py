import logging, json
from collections import OrderedDict

from django.utils.deprecation import MiddlewareMixin
from django.contrib import auth
from django.core.exceptions import ImproperlyConfigured, ObjectDoesNotExist
from django.conf import settings

from lti.thread_local import set_current_request
from classmanagement.models import Course
from user_profile.models import Profile
from user_profile.enums import Role

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
            logger.debug('improperly configured: requeset has no user attr')
            raise ImproperlyConfigured(
                "The Django LTI auth middleware requires the"
                " authentication middleware to be installed.  Edit your"
                " MIDDLEWARE_CLASSES setting to insert"
                " 'django.contrib.auth.middleware.AuthenticationMiddleware'"
                " before the LTIAuthMiddleware class.")

        # These parameters should exist outside of session
        request.lti_initial_request = False
        request.lti_authentication_successful = False

        resource_link_id = None
        if request.method == 'POST' and request.POST.get('lti_message_type') == 'basic-lti-launch-request':
            request.lti_initial_request = True

            # authenticate and log the user in
            user = auth.authenticate(request=request)

            if user is not None:
                # User is valid.  Set request.user and persist user in the session
                # by logging the user in.
                request.lti_authentication_successful = True

                request.user = user
                auth.login(request, user)

                resource_link_id = request.POST.get('resource_link_id', None)
                lti_launch = {
                    'context_id': request.POST.get('context_id', None),
                    'context_label': request.POST.get('context_label', None),
                    'context_title': request.POST.get('context_title', None),
                    'context_type': request.POST.get('context_type', None),
                    'custom_canvas_account_id': request.POST.get('custom_canvas_account_id', None),
                    'custom_canvas_account_sis_id': request.POST.get('custom_canvas_account_sis_id', None),
                    'custom_canvas_api_domain': request.POST.get('custom_canvas_api_domain', None),
                    'custom_canvas_course_id': request.POST.get('custom_canvas_course_id', None),
                    'custom_canvas_enrollment_state': request.POST.get('custom_canvas_enrollment_state', None),
                    'custom_canvas_membership_roles': request.POST.get('custom_canvas_membership_roles', '').split(','),
                    'custom_canvas_user_id': request.POST.get('custom_canvas_user_id', None),
                    'custom_canvas_user_login_id': request.POST.get('custom_canvas_user_login_id', None),
                    'launch_presentation_css_url': request.POST.get('launch_presentation_css_url', None),
                    'launch_presentation_document_target': request.POST.get('launch_presentation_document_target', None),
                    'launch_presentation_height': request.POST.get('launch_presentation_height', None),
                    'launch_presentation_locale': request.POST.get('launch_presentation_locale', None),
                    'launch_presentation_return_url': request.POST.get('launch_presentation_return_url', None),
                    'launch_presentation_width': request.POST.get('launch_presentation_width', None),
                    'lis_course_offering_sourcedid': request.POST.get('lis_course_offering_sourcedid', None),
                    'lis_outcome_service_url': request.POST.get('lis_outcome_service_url', None),
                    'lis_result_sourcedid': request.POST.get('lis_result_sourcedid'),
                    'lis_person_contact_email_primary': request.POST.get('lis_person_contact_email_primary', None),
                    'lis_person_name_family': request.POST.get('lis_person_name_family', None),
                    'lis_person_name_full': request.POST.get('lis_person_name_full', None),
                    'lis_person_name_given': request.POST.get('lis_person_name_given', None),
                    'lis_person_sourcedid': request.POST.get('lis_person_sourcedid', None),
                    'lti_message_type': request.POST.get('lti_message_type', None),
                    'oauth_consumer_key': request.POST.get('oauth_consumer_key', None),
                    'resource_link_description': request.POST.get('resource_link_description', None),
                    'resource_link_id': resource_link_id,
                    'resource_link_title': request.POST.get('resource_link_title', None),
                    'roles': request.POST.get('roles', '').split(','),
                    'selection_directive': request.POST.get('selection_directive', None),
                    'tool_consumer_info_product_family_code': request.POST.get('tool_consumer_info_product_family_code', None),
                    'tool_consumer_info_version': request.POST.get('tool_consumer_info_version', None),
                    'tool_consumer_instance_contact_email': request.POST.get('tool_consumer_instance_contact_email', None),
                    'tool_consumer_instance_description': request.POST.get('tool_consumer_instance_description', None),
                    'tool_consumer_instance_guid': request.POST.get('tool_consumer_instance_guid', None),
                    'tool_consumer_instance_name': request.POST.get('tool_consumer_instance_name', None),
                    'tool_consumer_instance_url': request.POST.get('tool_consumer_instance_url', None),
                    'user_id': request.POST.get('user_id', None),
                    'user_image': request.POST.get('user_image', None),
                }
                
                # Creating and updating data according to lti_launch
                Course.get_or_create_from_lti(request, user, lti_launch)
                Activity.get_or_create_from_lti(request, user, lti_launch)
                ActivityOutcome.get_or_create_from_lti(request, user, lti_launch)
                user.profile.set_role_lti(lti_launch)
            
            else:
                # User could not be authenticated!
                logger.warning('LTI authentication failed')
        else:
            resource_link_id = request.GET.get('resource_link_id', None)

        setattr(request, 'LTI', request.session.get('LTI_LAUNCH', {}).get(resource_link_id, {}))
        set_current_request(request)
        if not request.LTI: # pragma: no cover
            logger.debug("Could not find LTI launch for resource_link_id %s", resource_link_id)
