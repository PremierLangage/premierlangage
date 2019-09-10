from django.test import TestCase

from activity.models import Activity



class ActivityBaseTestMixin(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        Activity.objects.create(id=0, name="Base", activity_type="base", activity_data={})
