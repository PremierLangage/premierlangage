# *****************************************************************************
#       Copyright (C) 2019 Nicolas Borie <nicolas.borie at u-pem dot fr>
#
#  Distributed under the terms of the GNU General Public License (GPL)
#
#    This code is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
#    General Public License for more details.
#
#  The full text of the GPL is available at:
#
#                  http://www.gnu.org/licenses/
# *****************************************************************************

from django.contrib import admin

from .models import StatOnAllAnswers, FilterItem


class ChoiceInline(admin.StackedInline):
    
    model = FilterItem
    extra = 1

    
class StatOnAllAnswersAdmin(admin.ModelAdmin):
    
    inlines = [ChoiceInline]
    fields = ['statname', 'countedobject', 'partitioning']
    list_display = ('statname', 'countedobject', 'partitioning')

    
admin.site.register(StatOnAllAnswers, StatOnAllAnswersAdmin)
