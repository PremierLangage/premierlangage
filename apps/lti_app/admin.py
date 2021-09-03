from django.contrib import admin

from .models import ActivityOutcome, LTIModel, LTIOutcome

admin.site.register(LTIOutcome)
admin.site.register(LTIModel)
admin.site.register(ActivityOutcome)