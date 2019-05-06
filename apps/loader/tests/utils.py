import os
import shutil

from django.conf import settings

def copy_parser():
    path = os.path.join(settings.APPS_DIR, "loader/tests/fake_parsers/fake_parser_pl.py")
    if os.path.isfile(path):
        os.remove(path)
    shutil.copyfile(os.path.join(settings.APPS_DIR, "loader/parsers/pl.py"), path)
    
    path = os.path.join(settings.APPS_DIR, "loader/tests/fake_parser_pltp.py")
    if os.path.isfile(path):
        os.remove(path)
    shutil.copyfile(os.path.join(settings.APPS_DIR, "loader/parsers/pltp.py"), path)
