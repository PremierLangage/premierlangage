from django.contrib import admin

from sandbox.models import Sandbox

# Register your models here.
@admin.register(Sandbox)
class SandboxAdmin(admin.ModelAdmin):
    list_display=('name', 'url', 'priority')
