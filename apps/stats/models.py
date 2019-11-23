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

from django.db import models

"""
23 Nov 2019, nborie : original first implementation

The spirit of this utility application is to provide a single API for other
Django application to get some statistics. This application should not have
responsability of displaying nicely the statistics. The purpose of the
application stats is to allow student, teacher, didactician


## STAT_ON_ALL_ANSWERS

Here is a first pattern of statistics request under all logs.

From all logs inside Answers of playexo activity :

### Step one : filtering by reducing the set of log

* user (RGPD : for teacher on their current student, for student on their own activity)
* pl
* grade
* seed
* date

### Step two : choosing counted object

* occurence (number of log)

### Step three : "in function of" or "partitionned by" choose an abscica paramèter

* pl
* grade
* seed
* date

Such statistic request will return a Python list of tuple `[(x1, y1), (x2, y2), ... ]`

"""


# Pattern of statistics request under all logs
class StatOnAllAnswers(models.Model):
    
    # A name for the stat request
    statname = models.CharField(max_length=200)
    countedobject = models.CharField(max_length=100)
    partitioning = models.CharField(max_length=100)


# Since a filter can be complex, each question could have a list
# of FilterItem associated to it.
class FilterItem(models.Model):
    
    statonallanswers = models.ForeignKey(StatOnAllAnswers, on_delete=models.CASCADE)
    criteria = models.CharField(max_length=100)
    operator = models.CharField(max_length=100)
    values = models.CharField(max_length=100)
