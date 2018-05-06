#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  enums.py
#  
#  Copyright 2018 Coumes Quentin <qcoumes@etud.u-pem.fr>
#  

from enum import unique
from enumfields import Enum

from functools import total_ordering



@unique
class ColorBlindness(Enum):                           
    """Used by .models.Profile to define the user's color blindness."""
    
    NONE = 0
    PROTANOPIA = 1
    DEUTERANOPIA = 2
    TRITANOPIA = 3
    
    class Label:
        NONE = 'Aucun'
        PROTANOPIA = 'Protanope'
        DEUTERANOPIA = 'Deuteranope'
        TRITANOPIA = 'Tritanope'
    
    class Template:
        NONE = ''
        DEUTERANOPIA = 'deuteranopia'
        PROTANOPIA =   'protanopia'
        TRITANOPIA =   'tritanopia'



@unique
@total_ordering
class Role(Enum):
    """Used by .models.Profile to define the user's role."""
    ADMINISTRATOR = 0
    CONTENT_DEVELOPER = 1
    INSTRUCTOR = 2
    OBSERVER = 3
    LEARNER = 4
    
    class Label:
        ADMINISTRATOR = 'Administrator'
        CONTENT_DEVELOPER = 'Conceptor'
        INSTRUCTOR = 'Teacher'
        OBSERVER = 'Observer'
        LEARNER = 'Student'
    
    def __lt__(self, other):
        if self.__class__ is other.__class__:
            return self.value < other.value
        return NotImplemented
    
    def __eq__(self, other):
        if self.__class__ is other.__class__:
            return self.value == other.value
        return NotImplemented



@unique
class EditorTheme(Enum):
    """Used by .models.Profile to define the user's editor theme."""
    CHAOS = 0
    CHROME = 1
    CLOUDS = 2
    CLOUDS_MIDNIGHT = 3
    COBALT = 4
    CRIMSON_EDITOR = 5
    DAWN = 6
    DRACULA = 7
    DREAMWEAVER = 8
    ECLIPSE = 9
    GITHUB = 10
    GOB = 11
    GRUVBOX = 12
    IDLE_FINGERS = 13
    IPLASTIC = 14
    KATZENMILCH = 15
    KR_THEME = 16
    KUROIR = 17
    MERBIVORE = 18
    MERBIVORE_SOFT = 19
    MONO_INDUSTRIAL = 20
    MONOKAI = 21
    PASTEL_ON_DARK = 22
    SOLARIZED_DARK = 23
    SOLARIZED_LIGHT = 24
    SQLSERVER = 25
    TERMINAL = 26
    TEXTMATE = 27
    TOMORROW = 28
    TOMORROW_NIGHT_BLUE = 29
    TOMORROW_NIGHT_BRIGHT = 30
    TOMORROW_NIGHT_EIGHTIES = 31
    TOMORROW_NIGHT = 32
    TWILIGHT = 33
    XCODE = 34
    
    class Label:
        CHAOS = "Chaos"
        CHROME = "Chrome"
        CLOUDS = "Clouds"
        CLOUDS_MIDNIGHT = "Clouds Midnight"
        COBALT = "Cobalt"
        CRIMSON_EDITOR = "Crimson Editor"
        DAWN = "Dawn"
        DRACULA = "Dracula"
        DREAMWEAVER = "Dreamweaver"
        ECLIPSE = "Eclipse"
        GITHUB = "Github"
        GOB = "Gob"
        GRUVBOX = "Gruvbox"
        IDLE_FINGERS = "Idle Fingers"
        IPLASTIC = "Iplastic"
        KATZENMILCH = "Katzenmilch"
        KR_THEME = "KR Theme"
        KUROIR = "Kuroir"
        MERBIVORE = "Merbivore"
        MERBIVORE_SOFT = "Merbivore Soft"
        MONO_INDUSTRIAL = "Mono Industrial"
        MONOKAI = "Monokai"
        PASTEL_ON_DARK = "Pastel on Dark"
        SOLARIZED_DARK = "Solarized Dark"
        SOLARIZED_LIGHT = "Solarized Light"
        SQLSERVER = "SQLServer"
        TERMINAL = "Terminal"
        TEXTMATE = "Textmate"
        TOMORROW = "Tomorrow"
        TOMORROW_NIGHT_BLUE = "Tomorrow Night Blue"
        TOMORROW_NIGHT_BRIGHT = "Tomorrow Night Bright"
        TOMORROW_NIGHT_EIGHTIES = "Tomorrow Night Eighties"
        TOMORROW_NIGHT = "Tomorrow Night"
        TWILIGHT = "Twilight"
        XCODE = "Xcode"
    
    class Template:
        CHAOS = "ace/theme/chaos"
        CHROME = "ace/theme/chrome"
        CLOUDS = "ace/theme/clouds"
        CLOUDS_MIDNIGHT = "ace/theme/clouds_midnight"
        COBALT = "ace/theme/cobalt"
        CRIMSON_EDITOR = "ace/theme/crimson_editor"
        DAWN = "ace/theme/dawn"
        DRACULA = "ace/theme/dracula"
        DREAMWEAVER = "ace/theme/dreamweaver"
        ECLIPSE = "ace/theme/eclipse"
        GITHUB = "ace/theme/github"
        GOB = "ace/theme/gob"
        GRUVBOX = "ace/theme/gruvbox"
        IDLE_FINGERS = "ace/theme/idle_fingers"
        IPLASTIC = "ace/theme/iplastic"
        KATZENMILCH = "ace/theme/katzenmilch"
        KR_THEME = "ace/theme/kr_theme"
        KUROIR = "ace/theme/kuroir"
        MERBIVORE = "ace/theme/merbivore"
        MERBIVORE_SOFT = "ace/theme/merbivore_soft"
        MONO_INDUSTRIAL = "ace/theme/mono_industrial"
        MONOKAI = "ace/theme/monokai"
        PASTEL_ON_DARK = "ace/theme/pastel_on_dark"
        SOLARIZED_DARK = "ace/theme/solarized_dark"
        SOLARIZED_LIGHT = "ace/theme/solarized_light"
        SQLSERVER = "ace/theme/sqlserver"
        TERMINAL = "ace/theme/terminal"
        TEXTMATE = "ace/theme/textmate"
        TOMORROW = "ace/theme/tomorrow"
        TOMORROW_NIGHT_BLUE = "ace/theme/tomorrow_night_blue"
        TOMORROW_NIGHT_BRIGHT = "ace/theme/tomorrow_night_bright"
        TOMORROW_NIGHT_EIGHTIES = "ace/theme/tomorrow_night_eighties"
        TOMORROW_NIGHT = "ace/theme/tomorrow_night"
        TWILIGHT = "ace/theme/twilight"
        XCODE = "ace/theme/xcode"
