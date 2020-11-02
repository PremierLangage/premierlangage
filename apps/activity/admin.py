from django.contrib import admin
from django.urls import reverse
from django.utils.http import urlencode

from activity.mixins import PLPosition
from activity.models import Activity



@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'parent')
    list_filter = ['name']
    search_fields = ['name']

    def view_students_link(self, act):
        count = act.get_student_number()
        url = (
            reverse()
        )


@admin.register(PLPosition)
class PLPositionAdmin(admin.ModelAdmin):
    list_display = ('parent', 'pl', 'position')
