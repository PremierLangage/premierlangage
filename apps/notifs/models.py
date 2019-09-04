from tastypie.utils.timezone import now
from django.contrib.auth.models import User
from django.db import models

from notifs.mixin import DateMixin



class Notifications(models.Model, DateMixin):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pub_date = models.DateTimeField(default=now)
    url = models.URLField(null=True, blank=True, default=None)git
    read = models.BooleanField(default=False)
    title = models.CharField(max_length=50)
    body = models.CharField(max_length=400)
    context = models.CharField(max_length=20, null=True, default="System")
    
    
    class Meta:
        ordering = ["-pub_date"]
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        for notification in Notifications.objects.filter(user=self.user).filter(read=True)[40:]:
            notification.delete()
            


