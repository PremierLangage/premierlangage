from django.db import models
from django.contrib.auth.models import User

from playexo.models import Activity

class Role(models.Model):
    """ Default role are created at migration. See 'playexo/migrations/xxxx_add_role_data.py'
        If you add a new default role, do not forget to add it to the migration file. """
        
    ADMINISTRATOR = 'AD'
    INSTRUCTOR = 'IN'
    CONTENT_DEVELOPER = 'CD'
    LEARNER = 'LE'
    OBSERVER = 'OB'
    ROLES = (
        (ADMINISTRATOR, 'Administrator'),
        (INSTRUCTOR, 'Teacher'),
        (CONTENT_DEVELOPER, 'Conceptor'),
        (LEARNER, 'Student'),
        (OBSERVER, 'Observeur'),
    )
    
    role = models.CharField(primary_key = True, max_length=2, choices=ROLES, null = False, default=LEARNER)
    
    def __str__(self):
        return self.role



class PLUser(models.Model):
    """ Extends User to add a Role and Color Blindness"""
    
    PROTANOPIA = 'PR'
    DEUTERANOPIA = 'DE'
    TRITANOPIA = 'TR'
    NONE = 'NO'
    COLOR_BLINDNESS = (
        (PROTANOPIA, 'Protanope'),
        (DEUTERANOPIA, 'Deuteranope'),
        (TRITANOPIA, 'Tritanope'),
        (NONE, 'Aucun'),
    )
    
    user = models.OneToOneField(User, primary_key = True, on_delete=models.CASCADE, null = False)
    role = models.ManyToManyField(Role, blank=True)
    activity = models.ManyToManyField(Activity, blank=True)
    color_blindness = models.CharField(max_length=2, choices=COLOR_BLINDNESS, null=False, default=NONE)
    
    def is_admin(self):
        return (Role.objects.get(role=Role.ADMINISTRATOR) in self.role.all() or self.user.is_staff or self.user.is_superuser)
    
    def can_load(self):
        return (self.have_role(Role.INSTRUCTOR) or self.have_role(Role.CONTENT_DEVELOPER) or self.is_admin())
    
    def have_role(self, role):
        return (Role.objects.get(role=role) in self.role.all())
    
    def set_role(self, role):
        if not self.have_role(role):
            self.role.add(role)
    
    def unset_role(self, role):
        if self.have_role(role):
            self.role.remove(role)


class Course(models.Model):
    id = models.CharField(max_length=30, primary_key=True, null = False)
    name = models.CharField(max_length=200, null = False)
    label = models.CharField(max_length=20, null = False)
    user = models.ManyToManyField(User, blank=True)
    activity = models.ManyToManyField(Activity, blank=True)
            
    def __str__(self):
        return str(self.id)+": ["+self.label+"] "+self.name
