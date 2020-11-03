from django.contrib import admin
from django.urls import reverse
from django.utils.http import urlencode
from django.utils.html import format_html

from activity.mixins import PLPosition
from activity.models import Activity


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'view_parents', 'view_students_number', 'view_teachers_number')
    list_filter = ['activity_type',]
    search_fields = ['name', 'id', 'activity_type']

    def view_students_number(self, activity):
        return activity.student.count()

    def view_teachers_number(self, activity):
        return activity.teacher.count()

    def view_parents(self, activity):
        parent_name = activity.parent.name
        url = (
            reverse("admin:activity_activity_changelist")
            + "?"
            + urlencode({"parent__id": f"{activity.parent.id}"})
        )
        return format_html('<a href="{}">{}</a>', url, parent_name)

    view_students_number.short_description = "Students"
    view_teachers_number.short_description = "Teachers"
    view_parents.short_description = "Parents"

@admin.register(PLPosition)
class PLPositionAdmin(admin.ModelAdmin):
    list_display = ('parent', 'pl', 'position')