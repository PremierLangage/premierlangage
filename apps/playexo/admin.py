from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from playexo.models import Answer, HighestGrade



class EvalListFilter(admin.SimpleListFilter):
    # Human-readable title which will be displayed in the
    # right admin sidebar just above the filter options.
    title = _('Eval')
    
    # Parameter for the filter that will be used in the URL query.
    parameter_name = 'grade'
    
    
    def lookups(self, request, model_admin):
        """
        Returns a list of tuples. The first element in each
        tuple is the coded value for the option that will
        appear in the URL query. The second element is the
        human-readable name for the option that will appear
        in the right sidebar.
        """
        return (
            ('100', _('success')),
            ('0', _('nul')),
            ('-1', _('Error')),
            ('-', _('Build')),
        )
    
    
    def queryset(self, request, queryset):
        """
        Returns the filtered queryset based on the value
        provided in the query string and retrievable via
        `self.value()`.
        """
        # Compare the requested value (either '80s' or '90s')
        # to decide how to filter the queryset.
        if self.value() == '100':
            return queryset.filter(grade=100)
        if self.value() == '0':
            return queryset.filter(grade=0)
        if self.value() == '-':
            return queryset.filter(grade=None)
        if self.value() == '-1':
            return queryset.filter(grade=-1)



@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ('user', 'pl', 'grade', 'seed', 'date', 'activity')
    list_filter = (EvalListFilter, 'date')



@admin.register(HighestGrade)
class HighestGradeAdmin(admin.ModelAdmin):
    list_display = ('user', 'pl', 'grade', 'activity')
