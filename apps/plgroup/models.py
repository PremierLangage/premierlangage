from django.db import models
from django.contrib.auth.models import Group, User

from user_profile.enums import Role


# Create your models here.
class PLGroup(Group):
    """This class represents a PL Group. 
    It can gather users on some subgroup indexed by its indexes.
    """
    
    subgroups: dict = dict()
    teachers: set = set()
    
        
    class Meta:
        ordering = ['name']
        
    def __unicode__(self):
        return self.name
    
    def __str__(self) -> str:
        return self.name 
             
    def add_pl_user(self,user: User , index: str) -> bool:
        """Add an user on the PL Group. 
        This method check if the User is not already in this PL Group.

        :param user: 
        :type user: User
        :param index: 
        :type index: str
        :return: add success
        :rtype: bool
        """
        g = Group.objects.get(name=super.name)
        if g in user.groups.all():
            print("Already in this group")
            return False
        if index not in self.subgroups:
            self.subgroups[index] = set()
        user.groups.add(self)
        self.subgroups[index].add(user)
        return True
    
    def sub_groups(self):
        return self.subgroups.keys()
    
    def sub_group(self, index: str) -> set:
        try:
            return self.indexes[index]
        except:
            return {}
     
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