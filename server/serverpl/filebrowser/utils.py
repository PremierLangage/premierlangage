import os

import gitcmd
from django.conf import settings

from filebrowser import filter
from filebrowser.models import Directory



def join_fb_root(path):
    """Returns an absolute path, joining <path> to FILEBROWSER_ROOT."""
    return os.path.abspath(os.path.join(settings.FILEBROWSER_ROOT, path))



def repository_url(path):
    """Returns git origin's url of path."""
    return gitcmd.remote_url(path)[1][:-1]



def repository_branch(path):
    """Returns current git's branch of path."""
    return gitcmd.current_branch(path)[1][:-1]



def fa_icon(path):
    """Returns the css class of the Font Awesome 5 icon corresponding the most to <path>."""
    if os.path.isdir(path):
        return "fas fa-folder"
    
    if filter.is_code(path):
        return "fas fa-file-code"
    
    if os.path.splitext(path)[1] == ".pdf":
        return "fas fa-file-pdf"
    
    if filter.is_excel(path):
        return "fas fa-file-excel"
    
    if filter.is_powerpoint(path):
        return "fas fa-file-powerpoint"
    
    if filter.is_word(path):
        return "fas fa-file-word"
    
    if filter.is_archive(path):
        return "fas fa-file-archive"
    
    if filter.is_audio(path):
        return "fas fa-file-audio"
    
    if filter.is_video(path):
        return "fas fa-file-video"
    
    if filter.is_image(path):
        return "fas fa-file-image"
    
    if filter.is_text(path):
        return "fas fa-file-alt"
    
    return "fas fa-file"



def fa_repository_host(path):
    """Returns the css class of the Font Awesome 5 icon corresponding to <path> git's host."""
    url = repository_url(path)
    if 'github.com' in url:
        return 'fab fa-github'
    if 'bitbucket.org' in url:
        return 'fab fa-bitbucket'
    if 'gitlab.com' in url:
        return 'fab fa-gitlab'
    return 'fab fa-git'



def walkdir(path, user, parent='', write=None, read=None, repo=None):
    node = {
        'parent': parent,
        'type'  : 'folder' if os.path.isdir(path) else 'file',
        'name'  : os.path.basename(path),
        'path'  : path[len(settings.FILEBROWSER_ROOT) + 1:],
        'icon'  : fa_icon(path),
        'write' : write,
        'read'  : read,
        'repo'  : repo,
    }
    
    if node['type'] == 'folder':
        if write is None:
            directory = Directory.objects.get(name=os.path.basename(path.strip("/")))
            read = directory.can_read(user)
            write = directory.can_write(user)
        
        node['read'] = read
        node['write'] = write
        
        if repo is None and filter.in_repository(path):
            node['repo'] = repo = {
                'url'   : repository_url(path),
                'branch': repository_branch(path),
                'host'  : fa_repository_host(path),
            }
        
        node['children'] = [
            walkdir(os.path.join(path, entry), user, node['path'], write, read, repo)
            for entry in os.listdir(path)
            if not filter.is_hidden(entry)
        ]
    
    return node
