from enum import unique

from enumfields import Enum



@unique
class State(Enum):
    SUCCEEDED = 0
    PART_SUCC = 1
    FAILED = 2
    STARTED = 3
    NOT_STARTED = 4
    ERROR = 5
    
    
    class Label:
        SUCCEEDED = "Réussi"
        PART_SUCC = "Partiellement Réussi"
        FAILED = "Échoué"
        STARTED = "Commencé"
        NOT_STARTED = "Non Commencé"
        ERROR = "Commencé"
    
    
    class Template:
        SUCCEEDED = "state-succeded"
        PART_SUCC = "state-part-succ"
        FAILED = "state-failed"
        STARTED = "state-started"
        NOT_STARTED = "state-unstarted"
        ERROR = "state-started"
    
    
    @classmethod
    def by_grade(cls, grade=...):
        """Return the corresponding enum member according to grade."""
        return DICT.get(grade, cls.PART_SUCC)



DICT = {
    100:  State.SUCCEEDED,
    None: State.STARTED,
    0:    State.FAILED,
    -1:   State.ERROR,
    ...:  State.NOT_STARTED,
}
