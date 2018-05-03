from django.contrib import admin

from classmanagement.models import Course


    
@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display=('__str__', 'name', 'id')
