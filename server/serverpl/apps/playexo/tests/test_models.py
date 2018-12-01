
from django.http import Http404
from django.test import TestCase

from playexo.models import Activity
from classmanagement.models import Course


class ModelTestCase(TestCase):
    
    def test_create_activity(self):
        class R:
            def __init__(self): self.path = "/"
        course = Course.objects.create(name="test", label="bidon", consumer="bidon",
                                       consumer_id="bidon")
        params = {
                'resource_link_id'                : 1,
                'resource_link_title'             : "An Activity",
                'oauth_consumer_key'              : course.consumer,
                'context_id'                      : course.consumer_id,
            }
        with self.assertRaises(Http404):
            Activity.get_or_create_from_lti(R(), params)
