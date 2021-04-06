from django.core.exceptions import PermissionDenied
from django.db import models
from django.conf import settings
from django.contrib.auth.models import Group, User
from django.db.models.expressions import Subquery
from django.db.models.query import QuerySet

from user_profile.enums import Role


# Create your models here.
class PLGroup(models.Model):
    """[summary]

    :param main_teacher: The PLGroup main teacher
    :type main_teacher: User
    :param teachers: A PL Set of all 
    :type teachers: set[User]
    :param parent: [description]
    :type parent: PLGroup
    :param subgroups: 
    :type subgroups: set[PLGroup]
    """
    
    
    name= models.CharField(max_length=255, null=False, unique=True)
    main_teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name="PLGroup_main_teacher", null=True)
    teachers = models.ManyToManyField(User, related_name="PLGroup_teachers", blank=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True)
 #   group: Group = models.ForeignKey(Group,  on_delete=models.CASCADE, default=Group(name=str(name)))
    subgroups = models.ManyToManyField("self",blank=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.group = Group(name=self.name)
        
    def __unicode__(self):
        return super().name
    
    def __str__(self) -> str:
        return f"name:{str(self.name)}, main teacher: {self.main_teacher}"
             
    def add_student(self,student: User) -> None:
        """Add an user on the PL Group. 
        This method check if the User is not already in this PL Group.

        :param student: 
        :type student: User
        :return: 
        :rtype: 
        """
        
        if self.subgroups.count() != 0:
            raise RuntimeError("Seul les groupes n'ayant pas de sous-groupes peuvent avoir des élèves.")
        
        if self.group.user_set.filter(username=student.username).count() > 0:
            raise RuntimeError(f"L'élève {student.username} fait déjà parti du groupe.")
        self.group.user_set.add(student)
    
    @property    
    def sub_groups(self) -> QuerySet:
        return self.subgroups.all()
    
    def sub_group(self, name: str) -> QuerySet:
        self.sub_groups.filter(name=name).first()
     
    def add_teacher(self, teacher: User) -> bool:
        """Add a teacher on the pl group
        :param teacher: 
        :type teacher: User
        :return: 
        :rtype: bool
        """
        
        if teacher not in User.objects.filter(profile__role=Role.INSTRUCTOR):
            return False
        self.teachers.add(teacher)
        return True 
     
    def teaches(self,teacher: User) -> bool:
        return teacher in self.teachers 
       
    @staticmethod
    def teacher_plgroup(teacher: User):
        PLGroup.objects.filter()