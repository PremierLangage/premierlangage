from activity.activity_type.base import Base
from activity.activity_type.course import Course
from activity.activity_type.pltp import Pltp
from activity.activity_type.section import Section
from activity.activity_type.examen import Examen


type_dict = {
    "base":    Base,
    "course":  Course,
    "pltp":    Pltp,
    "section": Section,
    "examen": Examen,
}



def get_activity_type_class(a_type):
    return type_dict[a_type]


def is_activity_type_valid(a_type):
    return a_type in type_dict
