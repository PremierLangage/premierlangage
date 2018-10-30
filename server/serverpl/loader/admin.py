from django.contrib import admin

from loader.models import PLTP, PL, Index


@admin.register(PLTP)
class PltpAdmin(admin.ModelAdmin):
    list_display = ('name', 'sha1')


@admin.register(PL)
class PlAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')

@admin.register(Index)
class IndexAdmin(admin.ModelAdmin):
    list_display = ('pltp', 'pl', 'index')
    