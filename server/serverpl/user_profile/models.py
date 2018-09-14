import os
from os.path import join, isdir

from enumfields import EnumIntegerField
from django.conf import settings
from django.core.files import File
from django.db import models
from django.contrib.auth.models import User
from django.db.models import F
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from user_profile.utils import avatar_path, generate_identicon
from user_profile.enums import Role, EditorTheme, ColorBlindness
from lti.models import LTIModel
from filebrowser.models import Directory
from playexo.models import Activity



class Profile(LTIModel):
    """Extends User to save more informations about an user."""
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    student_id = models.PositiveIntegerField(unique=True, null=True, blank=True)
    editor_theme = EnumIntegerField(EditorTheme, default=EditorTheme.ECLIPSE)
    role = EnumIntegerField(Role, default=Role.LEARNER)
    color_blindness = EnumIntegerField(ColorBlindness, default=ColorBlindness.NONE)
    activity = models.ManyToManyField(Activity, blank=True)
    confirm = models.BooleanField(default=True)
    rep = models.IntegerField(default=0)
    avatar = models.ImageField(upload_to=avatar_path, blank=True)
    
    
    def set_role_lti(self, lti_launch):
        """Set the user's role according to the LTI request."""
        for role in lti_launch["roles"]:
            if role in ["urn:lti:role:ims/lis/Administrator", "Administrator"]:
               self.role = Role.ADMINISTRATOR
            if role in ["urn:lti:role:ims/lis/Observer", "Observer"]:
               self.role = Role.OBSERVER
            if role in ["urn:lti:role:ims/lis/Learner", "Learner"]:
               self.role = Role.LEARNER
            if role in ["urn:lti:role:ims/lis/Instructor", "Instructor"]:
               self.role = Role.INSTRUCTOR
               course.teacher.add(user)
            if role in ["urn:lti:role:ims/lis/ContentDeveloper", "ContentDeveloper"]:
               self.role = Role.CONTENT_DEVELOPER
        self.save()
    
    
    def mod_rep(self, added_points):
        """Core function to modify the reputation of the user profile."""
        
        self.rep = F('rep') + added_points
        self.save()
        self.refresh_from_db()
    
    
    def is_admin(self):
        """Return True if the user is an administrator (Role or django super user), False if not."""
        return self.role == Role.ADMINISTRATOR or self.user.is_superuser
    
    
    def can_load(self):
        """Return True if the user is at least an Instructor, False if not."""
        return self.role <= Role.INSTRUCTOR or self.is_admin()

     
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        """When a new user is created, create a corresponding profile."""
        if created:
            profile = Profile.objects.create(user=instance)
            profile.avatar.save(instance.username, File(generate_identicon(instance)))
            profile.save()
    
    
    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        """Save the profile when its corresponding user is saved."""
        instance.profile.save()
        if instance.is_staff or instance.is_superuser:
            instance.profile.role = Role.ADMINISTRATOR
    
    
    def __str__(self):
        return self.user.username + "'s Profile"
