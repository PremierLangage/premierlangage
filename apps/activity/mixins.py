from django.db import models
from django.db.models import F, Q

from loader.models import PL



class Position(models.Model):
    parent = models.ForeignKey("activity.Activity", db_index=True, on_delete=models.CASCADE,
                               null=True)
    position = models.PositiveSmallIntegerField(blank=True, default=32766)
    
    
    class Meta:
        abstract = True
        ordering = ['position']
        verbose_name_plural = "Positions"
    
    
    def save(self, *args, **kwargs):
        if self.pk is None:
            self.position = len(self.__class__.objects.filter(parent=self.parent))
        super(Position, self).save(*args, **kwargs)
    
    
    def max_pos(self):
        return len(self.__class__.objects.filter(parent=self.parent)) - 1
    
    
    @classmethod
    def move_to(cls, instance, x):
        position = instance.position
        
        if x > instance.max_pos() or x < 0 or position == x:
            return
        
        instance.position = 32766  # Max for PositiveSmallInteger
        instance.save()
        if position < x:
            for i in cls.objects.filter(Q(position__gt=position) & Q(position__lte=x),
                                        parent=instance.parent):
                i.position = F('position') - 1
                i.save()
        else:
            for i in reversed(cls.objects.filter(Q(position__lt=position) & Q(position__gte=x),
                                                 parent=instance.parent)):
                i.position = F('position') + 1
                i.save()
        instance.position = x
        instance.save()
    
    
    def move_end(self):
        self.move_to(self, self.max_pos())
    
    
    def move_start(self):
        self.move_to(self, 0)
    
    
    @classmethod
    def switch_with_relative(cls, instance, x):
        position = instance.position
        if position + x < 0 or position + x > instance.max_pos() or x == 0:
            return
        
        instance.position = 32766
        instance.save()
        
        other = cls.objects.get(parent=instance.parent, position=position + x)
        other.position = position
        other.save()
        instance.position = position + x
        instance.save()
    
    
    def move_next(self):
        if self.position < self.max_pos():
            self.switch_with_relative(self, 1)
    
    
    def move_prev(self):
        if self.position > 0:
            self.switch_with_relative(self, -1)



class PLPosition(Position):
    pl = models.ForeignKey(PL, on_delete=models.CASCADE)
    
    
    def __str__(self):
        return f"P<{self.position}, {self.parent}, {self.pl.id}>"
    
    
    class Meta:
        unique_together = ["parent", "position"]
