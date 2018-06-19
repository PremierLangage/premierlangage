import random
import string
from django.db import models


class Publisher(models.Model):
    key = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, null=False)