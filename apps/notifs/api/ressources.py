from tastypie.resources import ModelResource
from notifs.models import Notifications



class NotificationsResource(ModelResource):
    class Meta:
        queryset = Notifications.objects.all()
        allowed_methods = ['post', 'get']
        resource_name = 'notifications'
