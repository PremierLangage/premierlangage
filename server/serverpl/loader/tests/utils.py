import os
import shutil


def copy_parser():
    path = "loader/tests/fake_parsers/fake_parser_pl.py"
    if os.path.isfile(path):
        os.remove(path)
    shutil.copyfile("loader/parsers/pl.py", path)
    
    path = "loader/tests/fake_parser_pltp.py"
    if os.path.isfile(path):
        os.remove(path)
    shutil.copyfile("loader/parsers/pltp.py", path)