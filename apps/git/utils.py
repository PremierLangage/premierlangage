import os
import subprocess

from shared import gitcmd


def exec_command(path, command):
    if not gitcmd.in_repository(path):
        raise gitcmd.NotInRepositoryError("'" + path + "' is not inside a repository")
    cwd = os.getcwd()
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "LANGUAGE=" + gitcmd.GIT_LANG + ' ' + command
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    return p.returncode, out.decode().strip("\n"), err.decode()
