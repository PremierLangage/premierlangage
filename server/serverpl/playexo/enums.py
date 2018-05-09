#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  enums.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from enum import unique
from enumfields import Enum

@unique
class State(Enum):
    SUCCEEDED   = 0
    PART_SUCC   = 1
    FAILED      = 2
    STARTED     = 3
    NOT_STARTED = 4
    TEACHER_EXC = 5
    SANDBOX_EXC = 6
    
    class Labels:
        SUCCEEDED   = "Réussi"
        PART_SUCC   = "Partiellement Réussi"
        FAILED      = "Échoué"
        STARTED     = "Commencé"
        NOT_STARTED = "Non Commencé"
        TEACHER_EXC = "Commencé"
        SANDBOX_EXC = "Commencé"
    
    class Templates:
        SUCCEEDED   = "state-succeded"
        PART_SUCC   = "state-part-succ"
        FAILED      = "state-failed"
        STARTED     = "state-started"
        NOT_STARTED = "state-unstarted"
        TEACHER_EXC = "state-started"
        SANDBOX_EXC = "state-started"
    
    
    @classmethod
    def by_grade(cls, grade):
        """Return the corresponding enum member according to grade."""
        if grade == None or grade > 100:
            return cls.NOT_STARTED
        if grade == 100:
            return cls.SUCCEEDED
        if grade <= 99 and grade >= 1:
            return cls.PART_SUCC
        if grade == 0:
            return cls.FAILED
        if grade > -1:
            return cls.STARTED
        if grade <= -2 and grade >= -100:
            return cls.TEACHER_EXC
        return cls.SANDBOX_EXC
