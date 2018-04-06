from django.contrib import admin

from loader.models import PLTP, PL


@admin.register(PLTP)
class PltpAdmin(admin.ModelAdmin):
    list_display=('name', 'sha1')

@admin.register(PL)
class PlAdmin(admin.ModelAdmin):
    list_display=('name', 'id')
