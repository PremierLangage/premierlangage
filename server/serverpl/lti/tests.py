import uuid

from django.urls import reverse
from mock import patch

from django.test import TestCase, override_settings, Client
from django.contrib.auth.models import User

from classmanagement.models import Course
from loader.models import PLTP
from lti.models import ActivityOutcome
from playexo.models import Activity
from user_profile.enums import Role


ROLES = {
    "Administrator"   : "urn:lti:role:ims/lis/Administrator",
    "Observer"        : "urn:lti:role:ims/lis/Observer",
    "Learner"         : "urn:lti:role:ims/lis/Learner",
    "Instructor"      : "urn:lti:role:ims/lis/Instructor",
    "ContentDeveloper": "urn:lti:role:ims/lis/ContentDeveloper",
}

REQUEST_LTI_1P1 = {
    'lti_message_type'          : 'basic-lti-launch-request',
    'lti_version'               : 'LTI-1p0',
    'launch_presentation_locale': 'fr-FR',
    'resource_link_id'          : None,
}
# REQUEST_LTI_1P1 optionnal parameters:
#   - 'user_id'
#   - 'roles' 
#   - 'lis_person_name_given' 
#   - 'lis_person_name_family' 
#   - 'lis_person_contact_email_primary' 
#   - 'context_id' 
#   - 'context_title' 
#   - 'context_label' 


FAKE_CREDENTIALS = {
    'provider1': 'secret1',
    'provider2': 'secret2',
}



@override_settings(LTI_OAUTH_CREDENTIALS=FAKE_CREDENTIALS)
class LTITestCase(TestCase):
    
    @patch('lti.middleware.logger')
    @patch('lti.backends.logger')
    def test_wrong_key(self, backends_logger, middleware_logger):
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'     : str(uuid.uuid4()),
            'oauth_consumer_key'   : 'wrong',
            'oauth_consumer_secret': 'wrong',
        }
        }
        c = Client()
        response = c.post('/', data=params, follow=True)
        self.assertEqual(response.status_code, 200)
        self.assertEqual('LTI authentication failed',
                         tuple(middleware_logger.warning.call_args)[0][0])
        self.assertEqual('Beginning authentication process',
                         tuple(backends_logger.info.call_args)[0][0])
        self.assertEqual(
                ('LTI Authentification aborted: '
                 + 'Could not get a secret for key wrong'),
                tuple(backends_logger.warning.call_args)[0][0])
        self.assertFalse(User.objects.all())
    
    
    @patch('lti.middleware.logger')
    @patch('lti.backends.logger')
    def test_right_key(self, backends_logger, middleware_logger):
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'     : str(uuid.uuid4()),
            'oauth_consumer_key'   : 'provider1',
            'oauth_consumer_secret': 'secret1',
        }
        }
        c = Client()
        response = c.post('/', data=dict(params), follow=True)
        self.assertEqual(response.status_code, 200)
        self.assertEqual('LTI authentication failed',
                         tuple(middleware_logger.warning.call_args)[0][0])
        self.assertEqual('Beginning authentication process',
                         tuple(backends_logger.info.call_args)[0][0])
        self.assertEqual(
                ("Missing on of the argument [lis_person_contact_email_primary, "
                 + "lis_person_name_given, lis_person_name_family, user_id] in the LTI"
                 + "request."),
                tuple(backends_logger.warning.call_args)[0][0])
        self.assertFalse(User.objects.all())
    
    
    def test_create_user(self):
        user_id = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'                : str(uuid.uuid4()),
            'oauth_consumer_key'              : 'provider1',
            'oauth_consumer_secret'           : 'secret1',
            'lis_person_contact_email_primary': 'test@host.com',
            'lis_person_name_family'          : 'lastname',
            'lis_person_name_given'           : 'firstname',
            'roles'                           : ROLES['Learner'],
            'user_id'                         : user_id,
        }
        }
        c = Client()
        response = c.post('/', data=dict(params), follow=True)
        self.assertEqual(response.status_code, 200)
        user = User.objects.get(username='flastname')
        self.assertEqual(user.first_name, 'firstname')
        self.assertEqual(user.last_name, 'lastname')
        self.assertEqual(user.email, 'test@host.com')
        self.assertEqual(user.profile.role, Role.LEARNER)
        self.assertEqual(user.profile.consumer_id, user_id)
        self.assertEqual(user.profile.consumer, 'provider1')
    
    
    def test_create_course(self):
        user_id = str(uuid.uuid4())
        context_id = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'                : str(uuid.uuid4()),
            'oauth_consumer_key'              : 'provider1',
            'oauth_consumer_secret'           : 'secret1',
            'lis_person_contact_email_primary': 'test@host.com',
            'lis_person_name_family'          : 'lastname',
            'lis_person_name_given'           : 'firstname',
            'roles'                           : ROLES['Learner'],
            'user_id'                         : user_id,
            'context_id'                      : context_id,
            'context_title'                   : "A Course",
            'context_label'                   : "LAB",
        }
        }
        c = Client()
        response = c.post('/', data=dict(params), follow=True)
        self.assertEqual(response.status_code, 200)
        user = User.objects.get(username='flastname')
        course = Course.objects.all()[0]
        self.assertEqual(course.name, "A Course")
        self.assertEqual(course.label, 'LAB')
        self.assertEqual(course.consumer_id, context_id)
        self.assertEqual(course.consumer, 'provider1')
        self.assertTrue(course.is_member(user))
    
    
    def test_add_teacher_course(self):
        user_id = str(uuid.uuid4())
        context_id = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'                : str(uuid.uuid4()),
            'oauth_consumer_key'              : 'provider1',
            'oauth_consumer_secret'           : 'secret1',
            'lis_person_contact_email_primary': 'test@host.com',
            'lis_person_name_family'          : 'lastname',
            'lis_person_name_given'           : 'firstname',
            'roles'                           : ROLES['Instructor'],
            'user_id'                         : user_id,
            'context_id'                      : context_id,
            'context_title'                   : "A Course",
            'context_label'                   : "LAB",
        }
        }
        c = Client()
        response = c.post('/', data=dict(params), follow=True)
        self.assertEqual(response.status_code, 200)
        user = User.objects.get(username='flastname')
        course = Course.objects.all()[0]
        self.assertTrue(course.is_teacher(user))
    
    
    def test_add_activity(self):
        user_id = str(uuid.uuid4())
        context_id = str(uuid.uuid4())
        activity_id = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
                'resource_link_id'                : activity_id,
                'resource_link_title'             : "An Activity",
                'oauth_consumer_key'              : 'provider1',
                'oauth_consumer_secret'           : 'secret1',
                'lis_person_contact_email_primary': 'test@host.com',
                'lis_person_name_family'          : 'lastname',
                'lis_person_name_given'           : 'firstname',
                'roles'                           : ROLES['Instructor'],
                'user_id'                         : user_id,
                'context_id'                      : context_id,
                'context_title'                   : "A Course",
                'context_label'                   : "LAB",
                'lis_outcome_service_url'         : "url",
                'lis_result_sourcedid'            : str(uuid.uuid4())
            }
        }
        pltp = PLTP.objects.create(sha1="sha1", name="name", json={'title': ''})
        activity = Activity.objects.create(name="name", pltp=pltp)
        c = Client()
        response = c.post(reverse("playexo:activity", args=[activity.pk]), data=dict(params),
                          follow=True)
        self.assertEqual(response.status_code, 200)
        
        course = Course.objects.all()[0]
        activity = Activity.objects.get(consumer_id=activity_id)
        self.assertEqual(activity.name, "An Activity")
        self.assertEqual(activity.pltp, pltp)
        self.assertEqual(activity.course, course)
    
    
    def test_add_activity_failed_missing_lti_launch(self):
        user_id = str(uuid.uuid4())
        context_id = str(uuid.uuid4())
        activity_id = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
                'resource_link_id'                : activity_id,
                'oauth_consumer_key'              : 'provider1',
                'oauth_consumer_secret'           : 'secret1',
                'lis_person_contact_email_primary': 'test@host.com',
                'lis_person_name_family'          : 'lastname',
                'lis_person_name_given'           : 'firstname',
                'roles'                           : ROLES['Instructor'],
                'user_id'                         : user_id,
                'context_id'                      : context_id,
                'context_title'                   : "A Course",
                'context_label'                   : "LAB",
                'lis_outcome_service_url'         : "url",
                'lis_result_sourcedid'            : str(uuid.uuid4())
            }
        }
        pltp = PLTP.objects.create(sha1="sha1", name="name", json={'title': ''})
        activity = Activity.objects.create(name="name", pltp=pltp)
        c = Client()
        response = c.post(reverse("playexo:activity", args=[activity.pk]), data=dict(params),
                          follow=True)
        self.assertEqual(response.status_code, 404)
        with self.assertRaises(Activity.DoesNotExist):
            Activity.objects.get(consumer_id=activity_id)
            
            

    
    
    def test_add_activity_outcome(self):
        user_id = str(uuid.uuid4())
        context_id = str(uuid.uuid4())
        activity_id = str(uuid.uuid4())
        sourcedid = str(uuid.uuid4())
        params = {
            **REQUEST_LTI_1P1, **{
            'resource_link_id'                : activity_id,
            'resource_link_title'             : "An Activity",
            'oauth_consumer_key'              : 'provider1',
            'oauth_consumer_secret'           : 'secret1',
            'lis_person_contact_email_primary': 'test@host.com',
            'lis_person_name_family'          : 'lastname',
            'lis_person_name_given'           : 'firstname',
            'roles'                           : ROLES['Instructor'],
            'user_id'                         : user_id,
            'context_id'                      : context_id,
            'context_title'                   : "A Course",
            'context_label'                   : "LAB",
            'lis_outcome_service_url'         : "url",
            'lis_result_sourcedid'            : sourcedid,
        }
        }
        pltp = PLTP.objects.create(sha1="sha1", name="name", json={'title': ''})
        activity = Activity.objects.create(name="name", pltp=pltp)
        c = Client()
        response = c.post(reverse("playexo:activity", args=[activity.pk]), data=dict(params),
                          follow=True)
        self.assertEqual(response.status_code, 200)
        
        user = User.objects.get(username='flastname')
        activity = Activity.objects.get(consumer_id=activity_id)
        outcome = ActivityOutcome.objects.get(activity=activity, user=user)
        
        self.assertEqual(outcome.url, "url")
        self.assertEqual(outcome.sourcedid, sourcedid)
