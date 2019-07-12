from django.contrib import admin
from activity.models import Activity



@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'parent')
