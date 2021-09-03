from django.contrib import admin

from .models import ActivityOutcome, LTIModel

admin.site.register(LTIModel)
admin.site.register(ActivityOutcome)