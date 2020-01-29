from django.contrib import admin

from playexo.models import Answer, HighestGrade



@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('user', 'pl', 'grade', 'seed', 'date', 'activity')



@admin.register(HighestGrade)
class HighestGradeAdmin(admin.ModelAdmin):
    list_display = ('user', 'pl', 'grade', 'activity')
