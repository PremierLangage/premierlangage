from tastypie.utils.timezone import now
from django.contrib.auth.models import User
from django.db import models



class Notifications(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(default=now)
    url = models.URLField(null=True, blank=True, default=None)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=400)
    
    def mdr(self):
        print(self.user.objects.all())
        #Notifications.objects.create(user=user, body="body")
        
