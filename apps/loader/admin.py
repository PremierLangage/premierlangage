from django.contrib import admin

from loader.models import PL



@admin.register(PL)
class PlAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
