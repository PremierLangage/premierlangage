import os
from os.path import join, isdir

from enumfields import EnumIntegerField
from django.conf import settings
from django.core.files import File
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

from user_profile.utils import avatar_path, generate_identicon
from user_profile.enums import Role, EditorTheme, ColorBlindness
from lti.models import LTIModel
from filebrowser.models import Directory
from playexo.models import Activity



class Profile(LTIModel):
    """Extends User to save more informations about an user."""
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    student_id = models.PositiveIntegerField(unique=True, null=True, blank=True)
    editor_theme = EnumIntegerField(EditorTheme, default=EditorTheme.MONOKAI)
    role = EnumIntegerField(Role, default=Role.LEARNER)
    color_blindness = EnumIntegerField(ColorBlindness, default=ColorBlindness.NONE)
    activity = models.ManyToManyField(Activity, blank=True)
    confirm = models.BooleanField(default=True)
    rep = models.IntegerField(default=0)
    avatar = models.ImageField(upload_to=avatar_path, blank=True)
    
    
    def mod_rep(self, added_points):
        """Core function to modify the reputation of the user profile."""
        self.rep += added_points
        self.save()
    
    
    def is_admin(self):
        """Return True if the user is an administrator (Role or django super user), False if not."""
        return self.role == Role.ADMINISTRATOR or self.user.is_superuser
    
    
    def can_load(self):
        """Return True if the user is at least an Instructor, False if not."""
        return self.role <= Role.INSTRUCTOR or self.is_admin()

     
    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            profile = Profile.objects.create(user=instance)
            profile.avatar.save(instance.username, File(generate_identicon(instance)))
            profile.save()
    
    
    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()
        if instance.is_staff or instance.is_superuser:
            instance.profile.role = Role.ADMINISTRATOR
    
    
    def __str__(self):
        return self.user.username + "'s Profile"
