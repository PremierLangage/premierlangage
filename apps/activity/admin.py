from django.contrib import admin

from activity.mixins import PLPosition
from activity.models import Activity



@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'parent')



@admin.register(PLPosition)
class PLPositionAdmin(admin.ModelAdmin):
    list_display = ('parent', 'pl', 'position')
