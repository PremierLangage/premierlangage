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
        if grade is ...:
            return cls.NOT_STARTED
        if grade is None:
            return cls.STARTED
        if grade == 100:
            return cls.SUCCEEDED
        if 99 >= grade >= 1:
            return cls.PART_SUCC
        if grade == 0:
            return cls.FAILED
        if grade == -1:
            return cls.ERROR
        return cls.STARTED
