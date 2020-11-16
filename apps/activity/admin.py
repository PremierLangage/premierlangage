from django.contrib import admin
from django.urls import reverse
from django.utils.http import urlencode
from django.utils.html import format_html
from django.contrib.auth.models import User
from django.contrib.admin.widgets import FilteredSelectMultiple
from django.forms import ModelMultipleChoiceField, ModelForm

from activity.mixins import PLPosition
from activity.models import Activity


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    filter_horizontal = ('student','teacher')
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'view_parents', 'view_students_number', 'view_teachers_number')
    list_filter = ['activity_type',]
    list_display = ('__str__', 'id', 'name', 'open', 'activity_type', 'view_parents', 'view_students_number', 'view_teachers_number', 'view_global')
    list_filter = ['activity_type']
    search_fields = ['name', 'id', 'activity_type']

    def view_students_number(self, activity):
        return activity.student.count()

    def view_teachers_number(self, activity):
        return activity.teacher.count()

    def view_parents(self, activity):
        if activity.id == 0:
            return format_html('<a href="{}">{}</a>', reverse("admin:activity_activity_changelist"), "none")
        parent_name = activity.parent.name
        url = (
            reverse("admin:activity_activity_changelist")
            + "?"
            + urlencode({"parent__id": f"{activity.parent.id}"})
        )
        return format_html('<a href="{}">{}</a>', url, parent_name)

    def view_global(self, activity):
        return format_html('<a href="{}">{}</a>', reverse("admin:activity_activity_changelist"), "global")

    view_students_number.short_description = "Students"
    view_teachers_number.short_description = "Teachers"
    view_parents.short_description = "Parents"

@admin.register(PLPosition)
class PLPositionAdmin(admin.ModelAdmin):
    list_display = ('parent', 'pl', 'position')




''' def parcours_activity(activity, int):
...     child = activity.indexed_activities()
...     print(activity)
...     if len(child) == 0:
...             return
...     for c in child:
...             parcours_activity(c)
'''

'''
    def retrieve_answers():

        if !self.indexed_pl():
            child_exo = self.indexed_activities()
            for exo in child_exo :
                return exo.retrieve_answer()
        
        print(Answer.objects.filter(activity = exo.pk))


    def retrieve_answers(Cours, result):
        pls = Cours.indexed_pl()
        if pls :
            return list(Answer.objects.filter(pl__in = pls))
        for activities in Cours.indexed_activities():
            result += retrieve_answers(activities, result)
        return result
    
    def exo_number_aux(Cours, result):
        pls = Cours.indexed_pl()
        if pls :
            return list(pls)
        for activities in Cours.indexed_activities():
            result += retrieve_answers(activities, result)
        return result
    
    def exo_number(Cours):
        return len(exo_number_aux(Cours, []))

    def answers_number(Cours):
        return len(retrieve_answers(Cours, []))

    def max_note(user):
        """
            from django.db.models import Max,
            retourne un dictionnaire avecc la meilleure note. 
            Dico peut être vide !
        """
        user.higestgrade_set.aggregate(Max('grade'))
    
    def max_PL(user):
        user.highestgrade_set.aggregagte(Sum('grade))['grade__sum']
    def mean_PL(user):
        user.highestgrade_set.aggregagte(Sum('grade))['grade__sum']/user.highestgrade_set.all().count()


    def max_ (pl, ):
        pl.highestgrade_set.aggregate(Max('grade'))['grade__max']

    
'''
