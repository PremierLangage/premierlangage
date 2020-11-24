#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import logging
import os
from os.path import basename, splitext

import htmlprint
from django.conf import settings

from activity.activity_type.utils import get_activity_type_class
from activity.models import Activity
from filebrowser.models import Directory
from loader.exceptions import MissingPL
from loader.models import PL
from loader.parser import get_type, parse_file
from activity.mixins import PLPosition

logger = logging.getLogger(__name__)



def load_file(directory, rel_path):
    """ Load the file using the right function according to the type map to its extension.
        
        Catch every exception raised by the corresponding loading function or the parser.
        
        Return:
            - (PLTP/PL, []) if the PLTP/PL was loaded successfully
            - (PLTP/PL, warning_list) if the PLTP/PL was loaded with warnings
            - (None, error_msg) if PLTP/PL couldn't be loaded / an exception was catch
    """
    
    try:
        typ = get_type(directory, rel_path)
        if typ in ['pltp', 'gift']:
            return load_pltp(directory, rel_path)
        elif typ == 'pl':
            return load_pl(directory, rel_path)
        elif typ == 'pla':
            return load_pla(directory, rel_path)
    except Exception as e:
        if not settings.DEBUG:
            return None, htmlprint.code(str(e))
        return (None, (htmlprint.code(str(e))
                       + '<br>DEBUG set to True - Showing Traceback :<br>'
                       + htmlprint.html_exc()))



def load_pl(directory, rel_path):
    """ Load the given path as a PL.
    
        Return:
            - (PL, []) if the PL was loaded successfully
            - (PL, warning_list) if the PL was loaded with warnings
        
        This function return a PL object but does not save it in the database
    """
    dic, warnings = parse_file(directory, rel_path)
    name = splitext(basename(rel_path))[0]
    pl = PL(name=name, json=dic, directory=directory, rel_path=rel_path)
    return pl, [htmlprint.code(warning) for warning in warnings]



def load_pltp(directory, rel_path):
    pltp, warnings = load_pla(directory, rel_path, type="pltp")
    if not pltp.activity_data["__pl"]:
        raise MissingPL("Your PLTP must include at least one PL")
    return pltp, warnings



def load_pla(directory, rel_path, type=None):
    """ Load the given path as a PL Activity (pla)
        
        Return:
            - (Activity, []) if the activity was successfully loaded
            - (Activity, warning_list) if the activity was loaded with warnings
            
        This function returns an Activity saved in the database
    """
    
    name = splitext(basename(rel_path))[0]
    
    """sha1 = hashlib.sha1()
    sha1.update((directory.name + ':' + rel_path + str(time.time())).encode('utf-8'))
    sha1 = sha1.hexdigest()
    
    try:
        Activity.objects.get(sha1=sha1).delete()  # Reloading the activity if it already exists
    except Activity.DoesNotExist:  # If the activity does not exist, keep going
        pass"""
    
    dic, warnings = parse_file(directory, rel_path)
    pl_list = list()
    for item in dic['__pl']:
        pl_directory = Directory.objects.get(name=item['directory_name'])
        pl, pl_warnings = load_pl(pl_directory, item['path'])
        warnings += pl_warnings
        pl_list.append(pl)
    
    for pl in pl_list:
        pl.save()
        logger.info("PL '" + str(pl.id) + " (" + pl.name + ")' has been added to the database")
    
    activity_type = type if type else dic["type"]
    dic["__reload_path"] = os.path.join(directory.name, rel_path)
    pla = Activity.objects.create(name=name, activity_type=activity_type, activity_data=dic)
    logger.info("PLA '" + name + "' has been added to the database")
    
    for pl in pl_list:
        PLPosition.objects.create(parent=pla, pl=pl)
    
    return pla, [htmlprint.code(warning) for warning in warnings]



def reload_pla(directory, rel_path, original):
    """Reload the given file as a PLTP. Also reload its PL, but without modyfing their ID.
        original is a pltp returned by load_pltp or reload_pltp
        
        Return:
            - (PLTP, []) if the PLTP was loaded successfully
            - (PLTP, warning_list) if the PLTP was loaded with warnings
    """
    try:
        dic, warnings = parse_file(directory, rel_path)
        
        original_type = get_activity_type_class(original.activity_type)()
        if "type" in dic and original.activity_type != dic["type"]:
            return None, f"Activity type must remain '{original.activity_type}'"
        original.activity_data = {
            **dic, **original_type.install(original),
            "__reload_path": os.path.join(directory.name, rel_path)
        }
        
        pl_list = list()
        for item in dic['__pl']:
            pl_directory = Directory.objects.get(name=item['directory_name'])
            pl, pl_warnings = load_pl(pl_directory, item['path'])
            if pl is None:
                return None, pl_warnings
            warnings += pl_warnings
            pl_list.append(pl)
        
        originals = list(original.indexed_pl())
        original.pl.clear()
        
        for pl in pl_list:
            correspond = list(
                filter(lambda i: i.directory == pl.directory and i.rel_path == pl.rel_path,
                       originals))
            if correspond:
                correspond = correspond[0]
                correspond.json = pl.json
                correspond.save()
                logger.info(
                    "PL '" + str(correspond.id) + " (" + correspond.name + ")' has been updated.")
                PLPosition.objects.create(parent=original, pl=correspond)
            else:
                pl.save()
                logger.info("PL '" + str(pl.id) + " (" + pl.name + ")' has been created.")
                PLPosition.objects.create(parent=original, pl=pl)
        original.save()
        logger.info("Activity '" + original.name + "' has been reloaded.")
        return original, [htmlprint.code(warning) for warning in warnings]
    except Exception as e:  # pragma: no cover
        if not settings.DEBUG:
            return None, htmlprint.code(str(e))
        return (None, (htmlprint.code(str(e))
                       + '<br>DEBUG set to True - Showing Traceback :<br>'
                       + htmlprint.html_exc()))
