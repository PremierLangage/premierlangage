from django.contrib import admin

from filebrowser.models import Directory


@admin.register(Directory)
class DirAdmin(admin.ModelAdmin):
    list_display=('name', 'owner', 'remote')
