[![Build Status](https://travis-ci.org/qcoumes/gitcmd.svg?branch=master)](https://travis-ci.org/qcoumes/gitcmd)
[![codecov](https://codecov.io/gh/qcoumes/gitcmd/branch/master/graph/badge.svg)](https://codecov.io/gh/qcoumes/gitcmd)
[![Python 3.4+](https://img.shields.io/badge/python-3.4+-brightgreen.svg)](#)
[![License MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/qcoumes/gitcmd/blob/master/LICENSE)

# gitcmd

## Installation
From source code:

    python setup.py install

From pip:

    pip install -e git://github.com/qcoumes/gitcmd#egg=gitcmd

## Commands
**gitcmd** provides an interface for the basic commands of git :
 * clone
 * add
 * commit
 * checkout
 * reset
 * pull
 * push
 * status
 * branch

It also provides some useful functions:
 * `in_repository(path, ignore=True)` - Check if path is inside a repository. Setting 'ignore' to False will consider ignored entry outside of repository.
 * `current_branch(path)` - Return the name of the current branch of the repository pointed by path.
 * `remote_url(path, remote='origin')` - Return the remote's URL (default 'origin') of the repository pointed by path.
 * `make_public_url(url)` - Return the url stripped of any credentials. I.E. `https://login:password@github.com/qcoumes/gitcmd` -> `https://github.com/qcoumes/gitcmd`.
 * `set_url(path, url)` - Set the remote url to <url>.
 * `top_level(path)` - Return the absolute path of the top-level directory (the one containing the .git directory).

 
Every function of this module returns a tuple *(return_code, stdout, stderr)*.  
**Be careful** : Git sometimes return information on stderr, even if return_code = 0.  
for instance `Switched to a new branch "X"` is given on stderr when checking out to a new branch.



### Clone
```python3
def clone(path, url, to=None, username=None, password=None)
```
Clone a repository into a new directory.

##### Parameter:
*    path : (str) Path from where git clone command will be executed
*    url  : (str) URL of the repository
*    to   : (str) Directory to which clone the repository, default is repository"s name
*    username : (str) Username for authentification if repository is private
*    password : (str) Password for authentification if repository is private

##### Return:
* (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8



### Add 
```python3
def add(path)
```
Add the file pointed by path to the index.
If path point to a directory, update the index to match the current state of the directory as a whole.
    
##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8

### Commit
```python3
def commit(path, log)
```
Record changes to the repository using log and -m option.
##### Parameter:
*    path : (str) Path to the entry which should be commited. If path point to a directory, commit the directory as a whole.
*    log  : (str) Log used in the commit
sitory is private

##### Return:
* (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8



### Checkout
```python3
def checkout(path, branch=None, new=False)
```
Switch branches or restore working tree files.
    
##### Parameter:
*    path: (str)
        *    if no branch given - Path to the entry wich should be restored. If path point to a directory, restore the directory as a whole.
        *    if branch is given - Path from where git checkout command will be executed.
*    branch: (str) name of the branch which we should checkout to
*    new: (bool) Wheter we should create a new branch (True) or not (False)

Restore working tree files pointed by path if no <branch> is given.
Switch to <branch> if provided, creating it if new is True.

##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8



### Reset
```python3
def reset(path, mode="mixed", commit="HEAD")
```
Reset current HEAD to the specified state.
    
##### Parameter:
*    path   : (str) path the the entry we should be reset. If path point to a directory, update the index to match the current state of the directory as a whole.
*    mode   : (str) Mode for the reset, should be "soft", "mixed", "hard", "merge" or "keep".
*    commit : (str) To which commit the reset shoul be done. Must be a commit"s hash, "HEAD" for
                   the last commit, to which "~" or "^" can be appended to choose ancestor or
                   parent.
    
Resets the current branch head to <commit>
and possibly updates the index (resetting it to the tree of <commit>) and the working tree
depending on <mode>. if <mode> is omitted, defaults to "mixed". The <mode> must be one of the
following:
*   **soft** : Does not touch the index file or the working tree at all (but resets the head to <commit>, just like all modes do). This leaves all your changed files "Changes to be committed", as git status would put it.
*   **mixed** : Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action.
*   **hard** : Resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
*   **merge** : Resets the index and updates the files in the working tree that are different between <commit> and HEAD, but keeps those which are different between the index and working tree (i.e. which have changes which have not been added). If a file that is different between <commit> and the index has unstaged changes, reset is aborted.
*   **keep** : Resets index entries and updates files in the working tree that are different between <commit> and HEAD. If a file that is different between <commit> and HEAD has local changes, reset is aborted.
    
##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""



### Pull
```python3
def pull(path, url=None, username=None, password=None)
```
Fetch from and integrate with another repository or a local branch.
If <url> is not given, will try to get the url of origin.

##### Parameter:
*    path : (str) Path from where git pull command will be executed
*    url  : (str) URL of the remote
*    username : (str) Username for authentification if repository is private
*    password : (str) Password for authentification if repository is private

##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8



### Push
```python3
def push(path, url=None, username=None, password=None)
```
Update remote refs along with associated objects.
If <url> is not given, will try to get the url of origin.

##### Parameter:
*    path : (str) Path from where git push command will be executed
*    url  : (str) URL of the remote
*    username : (str) Username for authentification if repository is private
*    password : (str) Password for authentification if repository is private

##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8



### Status
```python3
def status(path)
```
Show the working tree status.

##### Parameter:
*    path : (str) Path from where git status command will be executed

##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"



### Branch
```python3
def branch(path):
```
List branches.


##### Parameter:
*    path : (str) Path from where git status command will be executed

##### Return:
*    (return_code, stdout, stderr), both stderr and stdout are decoded in UTF-8"""
