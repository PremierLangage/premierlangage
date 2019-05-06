from django.contrib.auth.models import User
from django.core.files import File
from django.db import models
from django.db.models import F
from django.db.models.signals import post_save
from django.dispatch import receiver
from enumfields import EnumIntegerField

from lti_app.models import LTIModel
from playexo.models import Activity
from user_profile.enums import ColorBlindness, EditorTheme, Role
from user_profile.utils import avatar_path, generate_identicon



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
            if role in ["urn:lti:role:ims/lis/ContentDeveloper", "ContentDeveloper"]:
                self.role = Role.CONTENT_DEVELOPER
        self.save()
    
    
    def mod_rep(self, added_points):
        """Core function to modify the reputation of the user profile."""
        
        self.rep = F('rep') + added_points
        self.save()
        self.refresh_from_db()
    
    
    def is_admin(self):
        """Returns whether the user is an administrator (Role or django su / staff)."""
        return self.role == Role.ADMINISTRATOR or self.user.is_superuser or self.user.is_staff
    
    
    def can_load(self):
        """Returns True if the user is at least an Instructor, False if not."""
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
    
    
    def save(self, *args, **kwargs):
        """Fix the IntegrityError when creating a new user and modifying default profile."""
        if self.pk is None:
            p = Profile.objects.filter(user=self.user)
            p.delete()
            super(Profile, self).save(*args, **kwargs)
            self.avatar.save(self.user.username, File(generate_identicon(self.user)))
        else:
            super(Profile, self).save(*args, **kwargs)
    
    
    def __str__(self):
        return self.user.username + "'s Profile"
