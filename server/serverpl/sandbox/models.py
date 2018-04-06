from django.db import models

# Create your models here.

class Sandbox(models.Model):
    name = models.CharField(max_length=50)
    url =  models.CharField(primary_key=True, max_length=860, null = False, help_text="http://127.0.0.1:8000/sandbox/?action=execute")
    priority = models.IntegerField(null = False, default=200, help_text="0 - 2147483647, the smallest number have the highest piority)")

    def __str__(self):
        return self.name + " - " + self.url + " - " + str(self.priority)
