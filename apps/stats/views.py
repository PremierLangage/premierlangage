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

from django.shortcuts import render

"""
23 Nov 2019, nborie : original first implementation
"""


@login_required
def index(request):
    """
    The portal page of the statistics application.
    """
    return render(request, "stats/index.html", {})
