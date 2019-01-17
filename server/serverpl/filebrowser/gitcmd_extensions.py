import os
import re
import subprocess
import locale
from gitcmd import *
from urllib.parse import urlparse, urlunparse
  
def show_last_revision(path):
    """Show the last revision of the file at path.
    
    Parameter:
        path : (str) path to the repository
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
            path = "."
        else:
            os.chdir(os.path.dirname(path))
            path = os.path.basename(path)
        cmd = "LANGUAGE=" + GIT_LANG + " git show -1 " + path
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    content = out.decode()
    try:
        if not p.returncode:
            content = content[content.index('@@'):].split('\n')
            for i in range(len(content)):
                content[i] = content[i][1:]
            content = '\n'.join(content[1:]).replace(' No newline at end of file', '')
    except:
        content = ''
    return (p.returncode, content, err.decode())
