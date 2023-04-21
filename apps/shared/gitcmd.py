# -*- coding: utf-8 -*-

""" A light git interface in python of the basic command.
    
    Does not work with git version prior to 2.7"""

import locale
import os
import re
import subprocess
from urllib.parse import urlparse, urlunparse


# Can be override to specify git language. Should be in the form 'lang.encoding'.
# For instance : 'en-US.UTF-8'
GIT_LANG = 'en-US.UTF-8'


class NotInRepositoryError(Exception):
    pass



def in_repository(path, ignore=True):
    """Return True if path is inside a repository, False if not.
    
    If <in_ignore> is set to False, will also return False if the path is inside a repository but
    is ignored by a .gitignore.
    """
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
            path = "."
        else:
            os.chdir(os.path.dirname(path))
            path = os.path.basename(path)
        cmd = 'git rev-parse 2> /dev/null > /dev/null'
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        p.communicate()
        ret = p.returncode == 0
        if not ignore:
            cmd = 'git check-ignore ' + path + ' 2> /dev/null > /dev/null'
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
            p.communicate()
            ret &= p.returncode == 1  # return code is 1 if a file is not ignored
    finally:
        os.chdir(cwd)
    
    return ret



def top_level(path):
    """Return the absolute path of the top-level directory."""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "git rev-parse --show-toplevel"
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def remote_url(path, remote='origin'):
    """Return the remote's URL (default 'origin') of the repository pointed by path."""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "git config --get remote." + remote + ".url"
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def make_public_url(url):
    """Return the url stripped of any credentials.
    I.E. https://login:password@github.com/qcoumes/gitcmd -> https://github.com/qcoumes/gitcmd"""
    reg = re.compile(r'(?P<www>www\.)?(.*?:.*?@)?(?P<netloc>.*)')
    url = urlparse(url)
    match = reg.match(url.netloc)
    netloc = (match.group('www') if match.group('www') else '') + match.group('netloc')
    url = list(url)  # url is a tuple and can't be modified
    url[1] = netloc  # 1 is netloc
    return urlunparse(url)



def set_url(path, url, remote='origin'):
    """Set the url of remote to <url>."""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "git remote set-url " + remote + " " + url
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def add(path):
    """Add the file pointed by path to the index.
    
    if path point to a directory, update the index to match the current state of the directory as
    a whole
    
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
        cmd = "LANGUAGE=" + GIT_LANG + " git add " + path
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def commit(path, log, name=None, mail=None):
    """Record changes to the repository using log and -m option.
    
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
        if name and mail:
            cmd = ("LANGUAGE=" + GIT_LANG + " git commit " + path + " -m " + '"' + log + '"'
                   + (' --author "' + name + ' <' + mail + '>"' if name else ""))
        elif not (name or mail):
            cmd = "LANGUAGE=" + GIT_LANG + " git commit " + path + " -m " + '"' + log + '"'
        else:
            raise ValueError("Name must be provided if mail is given" if mail
                             else "Mail must be provided if name is given")
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def checkout(path, branch=None, new=False):
    """Switch branches or restore working tree files.
    
    Parameter:
        path: (str)
            if no branch given - Path to the entry wich should be restored.
            if branch is given - Path from where git checkout command will be executed.
        branch: (str) name of the branch which we should checkout to
        new: (bool) Whether we should create a new branch (True) or not (False)
    
    
    Restore working tree files pointed by path if no <branch> is given.
    Switch to <branch> if provided, creating it if new is True.
    
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
        cmd = ("LANGUAGE=" + GIT_LANG + " git checkout " + path if not branch
               else "LANGUAGE=" + GIT_LANG + " git checkout " + branch if not new
               else "LANGUAGE=" + GIT_LANG + " git checkout -b " + branch)
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def status(path):
    """Show the working tree status.
    
    Parameter:
        url : (str) path to the repository
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "LANGUAGE=" + GIT_LANG + " git status"
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def branch(path):
    """List branches.
    
    Parameter:
        url : (str) path to the repository
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "LANGUAGE=" + GIT_LANG + " git branch"
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def current_branch(path):
    """Get current branch name
    
    Parameter:
        url : (str) path to the repository
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        cmd = "LANGUAGE=" + GIT_LANG + " git rev-parse --abbrev-ref HEAD"
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def reset(path, mode="mixed", commit='HEAD'):
    """Reset current HEAD to the specified state.
    
    Parameter:
        path   : (str) path the the entry we should be reset.
        mode   : (str) Mode for the reset, should be 'soft', 'mixed', 'hard', 'merge' or 'keep'.
        commit : (str) To which commit the reset should be done. Must be a commit's hash, 'HEAD' for
                       the last commit, to which '~' or '^' can be appended to choose ancestor or
                       parent.
    
    Resets the current branch head to <commit>
    and possibly updates the index (resetting it to the tree of <commit>) and the working tree
    depending on <mode>. if <mode> is omitted, defaults to "mixed". The <mode> must be one of the
    following:
        - soft
            Does not touch the index file or the working tree at all (but resets the
            head to <commit>, just like all modes do). This leaves all your changed files
            "Changes to be committed", as git status would put it.
        - mixed
            Resets the index but not the working tree (i.e., the changed files are preserved
            but not marked for commit) and reports what has not been updated. This is the
            default action.
        - hard
            Resets the index and working tree. Any changes to tracked files in the working tree
            since <commit> are discarded.
        - merge
            Resets the index and updates the files in the working tree that are different
            between <commit> and HEAD, but keeps those which are different between the index
            and working tree (i.e. which have changes which have not been added). If a file
            that is different between <commit> and the index has unstaged changes, reset is aborted.
        - keep
            Resets index entries and updates files in the working tree that are different
            between <commit> and HEAD. If a file that is different between <commit> and HEAD
            has local changes, reset is aborted.
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    if mode and mode not in ["soft", "mixed", "hard", "merge", "keep"]:
        raise ValueError("Mode must be one of the following: "
                         + "'soft', 'mixed', 'hard', 'merge' or 'keep'.")
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
            path = "."
        else:
            os.chdir(os.path.dirname(path))
            path = os.path.basename(path)
        cmd = "LANGUAGE=%s git reset --%s %s %s" % (GIT_LANG, mode, commit, path)
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    return p.returncode, out.decode().strip("\n"), err.decode()



def pull(path, url=None, username=None, password=None):
    """Fetch from and integrate with another repository or a local branch.
    
    If <url> is not given, will try to get the url of origin.
    
    Parameter:
        path : (str) Path from where git pull command will be executed
        url  : (str) URL of the remote
        username : (str) Username for authentification if repository is private
        password : (str) Password for authentification if repository is private
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    if not url:
        ret, url, err = remote_url(path)
        if ret:  # pragma: no cover
            return ret, url, "No url was given and couldn't retrieve origin's URL: " + err
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        
        if username and password:
            url = urlparse(url)
            cmd = ("LANGUAGE=" + GIT_LANG + " git pull "
                   + (url.scheme if url.scheme else "file") + "://"
                   + username + ":" + password + "@" + url.netloc + url.path)
        elif not (username or password):
            cmd = "LANGUAGE=" + GIT_LANG + " GIT_TERMINAL_PROMPT=0 git pull"
        else:
            raise ValueError("Password must be provided if username is given" if username
                             else "Username must be provided if password is given")
        
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
        
        out = out.decode()
        err = err.decode()
        if password:
            out = out.replace(password, "•" * len(password))
            err = err.replace(password, "•" * len(password))
    
    finally:
        os.chdir(cwd)
    
    if p.returncode and "terminal prompts disabled" in err:
        return p.returncode, out, "Repository is private, please provide credentials"
    return p.returncode, out.strip("\n"), err



def push(path, url=None, username=None, password=None):
    """Update remote refs along with associated objects.
    
    If <url> is not given, will try to get the url of origin.
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    if not url:
        ret, url, err = remote_url(path)
        if ret:  # pragma: no cover
            return ret, url, "No url was given and couldn't retrieve origin's URL: " + err
    
    ret, branch, err = current_branch(path)
    if ret:  # pragma: no cover
        return ret, branch, "Couldn't retrieve current branch name \n".encode() + err
    
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        
        if username and password:
            url = urlparse(url)
            cmd = ("LANGUAGE=" + GIT_LANG + " git push -u "
                   + (url.scheme + "://" if url.scheme else "")
                   + username + ":" + password + "@" + url.netloc + url.path
                   + " " + branch)
        elif not (username or password):
            cmd = ("LANGUAGE=" + GIT_LANG
                   + " GIT_TERMINAL_PROMPT=0 git push -u origin " + branch)
        else:
            raise ValueError("Password must be provided if username is given" if username
                             else "Username must be provided if password is given")
        
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
        
        out = out.decode()
        err = err.decode()
        if password:
            out = out.replace(password, "•" * len(password))
            err = err.replace(password, "•" * len(password))
    
    finally:
        os.chdir(cwd)
    
    if p.returncode and "terminal prompts disabled" in err:
        return p.returncode, out, "Repository is private, please provide credentials"
    return p.returncode, out.strip("\n"), err



def clone(path, url, to=None, username=None, password=None):
    """Clone a repository into a new directory.
    
    Parameter:
        path : (str) Path from where git clone command will be executed
        url  : (str) URL of the repository
        to   : (str) Directory to which clone the repository, default is repository's name
        username : (str) Username for authentification if repository is private
        password : (str) Password for authentification if repository is private
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    cwd = os.getcwd()
    
    try:
        if os.path.isdir(path):
            os.chdir(path)
        else:
            os.chdir(os.path.dirname(path))
        
        if username and password:
            url = urlparse(url)
            cmd = ("LANGUAGE=" + GIT_LANG + " git clone "
                   + (url.scheme + "://" if url.scheme else "")
                   + username + ":" + password + "@" + url.netloc + url.path)
        elif not (username or password):
            cmd = "LANGUAGE=" + GIT_LANG + " GIT_TERMINAL_PROMPT=0 git clone " + url
        else:
            raise ValueError("Password must be provided if username is given" if username
                             else "Username must be provided if password is given")
        
        if to:
            cmd += " " + to
        
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
        
        out = out.decode()
        err = err.decode()
        if password:
            out = out.replace(password, "•" * len(password))
            err = err.replace(password, "•" * len(password))
    
    finally:
        os.chdir(cwd)
    
    if p.returncode and "terminal prompts disabled" in err:
        return p.returncode, out, "Repository is private, please provide credentials"
    return p.returncode, out.strip("\n"), err



def show_last_revision(path):
    """Show the last revision of the file at path.
    
    Parameter:
        path : (str) - path to the file
    
    Return:
        (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
    if not in_repository(path):
        raise NotInRepositoryError("'" + path + "' is not inside a repository")
    
    cwd = os.getcwd()
    try:
        if not os.path.isfile(path):
            raise ValueError("Error: '%s' is a directory")
        os.chdir(os.path.dirname(path))
        path = os.path.basename(path)
        
        cmd = "LANGUAGE=" + GIT_LANG + " git show -1 " + path
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
        out, err = p.communicate()
    finally:
        os.chdir(cwd)
    
    out = out.decode()
    if not p.returncode:
        if '@@' in out:
            out = [c[1:] for c in out[out.index('@@'):].split('\n')[1:]]
            out = '\n'.join(out).replace(' No newline at end of file', '')
        else:
            out = '\n'.join([c.strip() for c in out.split('\n')[4:-4]])
    return p.returncode, out.strip("\n"), err.decode()
