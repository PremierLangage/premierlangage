from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from classmanagement.models import PLUser, Course


class PLUserInline(admin.StackedInline):
    model = PLUser
    filter_horizontal = ('role',)
    can_delete = False
    
class UserAdmin(BaseUserAdmin):
    inlines = (PLUserInline, )

    
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display=('__str__', 'name', 'id')

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
