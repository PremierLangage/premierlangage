# ****************************************************************************
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
# ****************************************************************************

from django.urls import path

from . import views

"""
23 Nov 2019, nborie : original first implementation
"""


app_name = 'stats'

urlpatterns = [
    path(r'', views.index, name='index'),
    path(r'stats_on_answers/<int:stats_id>/', views.stats_on_answers, name='stats_on_answers'),
    path(r'new_stats_on_answers.html', views.new_stats_on_answers, name='new_stats_on_answers'),
]
