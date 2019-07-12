from django.contrib.auth.models import User
from tastypie import fields
from tastypie.resources import ModelResource

from notifs.models import Notifications



class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        fields = ['username']



class NotificationsResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    
    
    class Meta:
        queryset = Notifications.objects.all()
        resource_name = 'notifications'
        allowed_methods = ['post', 'get']
        # authorization = Authorization()
