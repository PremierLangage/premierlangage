from django.contrib import admin

from playexo.models import Activity, Answer

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display=('__str__', 'id', 'pltp', 'open')

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display=('user', 'pl', 'grade', 'seed', 'date')
