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

from django.contrib.auth.decorators import login_required

from django.shortcuts import get_object_or_404, render

from .models import StatOnAllAnswers
from .stat_on_all_answers import StatOnAllAnswersRequest

"""
23 Nov 2019, nborie : original first implementation
"""


@login_required
def index(request):
    """
    The portal page of the statistics application.
    """
    all_stats_on_answers = StatOnAllAnswers.objects.order_by('pk')
    context = {'all_stats_on_answers': all_stats_on_answers}
    return render(request, "stats/index.html", context)


@login_required
def stats_on_answers(request, stats_id):
    """
    The page displaying a formated statistic request on all Answers.
    """
    stats = get_object_or_404(StatOnAllAnswers, pk=stats_id)
    stat_request = StatOnAllAnswersRequest(stats)
    explain = stat_request.explain()
    brut_data = stat_request.resolve()
    return render(request, "stats/stats_on_answers.html", {'stats' : stats, 'explain' : explain, 'brut_data' : brut_data})


@login_required
def new_stats_on_answers(request):
    """
    The page displaying formulary for adding a new statistic on all
    Answers.
    """
    filters_content = []
    if 'nb_filters' in request.POST:
        nb_filters = int(request.POST['nb_filters'])
        for i in range(nb_filters):
            filters_content.append( ("criteria"+str(i), "operator"+str(i), "values"+str(i)) )
    else:
        nb_filters = 0
        
    return render(request, "stats/new_stats_on_answers.html", {
        'nb_filters' : nb_filters,
        'filters_content' : filters_content
    })
