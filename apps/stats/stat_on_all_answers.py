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

from .models import FilterItem

from playexo.models import Answer


class StatOnAllAnswersRequest():
    """
    A class for request resolution of the request pattern StatOnAllAnswers.
    """
    def __init__(self, stat):
        """
        Initialize `self`.
        """
        self._stat = stat

    def name(self):
        """
        Returns the name of the statistic `self`.
        """
        return self._stat.statname

    def filters(self):
        """
        Extract the filters associated to the definition of `self`. Return a
        list of tuples of strings.
        """
        filters = []
        for item in FilterItem.objects.filter(statonallanswers=self._stat.id):
            filters.append((item.criteria, item.operator, item.values))
        return filters

    def counted_objects(self):
        """
        Return object counted by the request `self`.
        """
        return self._stat.countedobject

    def partitioning(self):
        """
        Return object partitioning the results counted by `self`.
        """
        return self._stat.partitioning
    
    def explain(self):
        """
        Return a french description of the statistics `self`.
        """
        # STEP 1 : filtering part
        filters = self.filters()
        if filters == []:
            ans = "À partir de toutes les traces de la base Answers, "
        else:
            ans = "À partir des traces de la base Answers telles que "
            if len(filters) == 1:
                ans += " ".join(list(filters[0]))
            else:
                ans += ", ".join([" ".join(list(filters[i])) for i in range(len(filters))])
            ans += ", "

        # STEP 2 : selectionning counted object
        if self.counted_objects() == "occurence":
            ans += "cette requete compte le nombre de traces "
        else:
            raise NotImplementedError

        # STEP 3 : partitioning ... in function of ...
        ans += "en fonction de "+self.partitioning()+"."
        
        return ans
    
    def resolve(self):
        """
        Return the brut data (as a python dictionnary) generated when
        the request `self` is resolved.
        """
        logs = Answer.objects.all()
        
        filters = self.filters()
        if len(filters) > 0:
            for item in filters:
                # logs = logs.filter(grade=100)
                logs = eval('logs.filter('+" ".join(item)+')')

        d = {}
        for log in logs:
            k = eval('log.'+self.partitioning())
            if k in d:
                d[k] += 1
            else:
                d[k] = 1
                
        return d
