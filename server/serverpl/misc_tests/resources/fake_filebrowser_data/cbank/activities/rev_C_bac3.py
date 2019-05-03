#*****************************************************************************
#       Copyright (C) 2018 Nicolas Borie <nicolas.borie at u-pem dot fr>
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
#*****************************************************************************

#*****************************************************************************
#              BAC+3 C LANGAGE AUTONOMY REVIEW ACTIVITY
#*****************************************************************************

#*****************************************************************************
#            META-DATA OF THE ACTIVITY : HARCODED CONTENT
#*****************************************************************************

# RESSOURCES LIST
list_of_activities = [
("Le premier programme", "exercices/program/hello_world.pl", {"program" : 0})
]

# CHECK ACTIVITIES
# TODO : Check that all path are correct ! (files exist !)
# TODO : Check that all pointed files are correct ! (plcheck the files !)

# GET ACTIVITIES
# TODO : Add python mechanisim to collect all ressources from a
# directory. Name, path and tags could be collected automatically in
# the futur (this as to be discussed...)

def get_notion_list_from_activities(list_of_exo):
    r"""
    Return the list of availlable notions from the list of registered
    activities.
    """
    S = set()
    for acti in list_of_exo:
        tags = acti[2]
        for notion in tags:
            S.add(notion)
    return S

#*****************************************************************************
#                 ACTIVITY MANAGEMENT : MENU, ACTIONS, CONTROLS
#*****************************************************************************

class Activity_rev_C_bac3():
    r"""
    A class for autonomy review of C langage at BAC+3 level.

    EXAMPLES::


    """
    def __init__(self, role="student"):
        r"""
        Initialise the activity.

        EXAMPLES::


        """
        # DEFAUT INITIALISATION
        # Perhaps we need a Django initialisation with the last values
        # of variables during the last utilisation
        if role not in ["student", "teacher", "admin"]:
            role = "student"
        self._role = role
        # At first glance, the cursor is placed at the middle
        self._deepening_cursor = 5
        # No focus on a special notion at the begining
        self._focus = None
        # No current activity at the begining
        self._current_activity = None

    def __str__(self):
        r"""
        Return a string describing the activity.
        """
        return "Autonmy Review Activity for C langage"

    def set_deepening_cursor(self, level):
        r"""
        Set the current level of the deepening cursor with the level
        given in argument.
        """
        if level < 0 or level > 9:
            level = 5
        self._deepening_cursor = level

    def get_deepening_cursor(self):
        r"""
        Return the current level of the deepening cursor.
        """
        return self._deepening_cursor

    # TODO : deal with this NotImplementedError
    def next_activity(self):
        r"""
        Determine the next exercice to display to the user.
        """
        # first exercice
        if self._current_activity is None:
            self._current_activity = "exercices/program/hello_world.pl"
            return "exercices/program/hello_world.pl"
        else:
            raise NotImplementedError

    # Django request ?
    def get_user_masteries(self):
        r"""
        Recover the user masteries from the database.
        """
        pass

    
    
Plop = Activity_rev_C_bac3()
print(Plop)
print("It works !")
