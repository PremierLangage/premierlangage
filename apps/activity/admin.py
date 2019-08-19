from django.contrib import admin
from activity.models import Activity, Index, SessionActivity



@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'parent')




@admin.register(Index)
class IndexAdmin(admin.ModelAdmin):
    list_display = ('activity', 'pl', 'index')
