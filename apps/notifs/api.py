from tastypie.resources import ModelResource
from notifs.models import Notifications



class NotificationsResource(ModelResource):
    class Meta:
        queryset = Notifications.objects.all()
        resource_name = 'notifications'
