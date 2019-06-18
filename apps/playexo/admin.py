from django.contrib import admin

from playexo.models import Answer



@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('user', 'pl', 'grade', 'seed', 'date')
