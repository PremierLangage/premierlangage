import codecs
import os

import gitcmd
import magic
from django.conf import settings

from filebrowser import filter
from filebrowser.models import Directory


HOME_DIR = 'Yggdrasil'
LIB_DIR = 'lib'





def to_download_url(path):
    """Returns an url to filebrowser views.py download function """
    return '/filebrowser/option?name=download_resource&path=' + path



def join_fb_root(path):
    """Returns an absolute path, joining <path> to FILEBROWSER_ROOT."""
    
    return os.path.abspath(os.path.join(settings.FILEBROWSER_ROOT, path))



def rm_fb_root(path):
    """Returns path stripped of settings.FILEBROWSER_ROOT."""
    if path.startswith(settings.FILEBROWSER_ROOT):
        return path[len(settings.FILEBROWSER_ROOT) + 1:]
    return path



def repository_url(path):
    """Returns git origin's url of path."""
    return gitcmd.remote_url(path)[1]



def repository_branch(path):
    """Returns current git's branch of path."""
    return gitcmd.current_branch(path)[1]



def fa_icon(path):
    """Returns the css class of the Font Awesome 5 icon corresponding the most to <path>."""
    if os.path.isdir(path):
        return "fas fa-folder"
    
    ext = os.path.splitext(path)[1]
    if ext in filter.CODE_EXT:
        return "fas fa-file-code"
    if ext == ".pdf":
        return "fas fa-file-pdf"
    if ext in filter.EXCEL_EXT:
        return "fas fa-file-excel"
    if ext in filter.POWERPOINT_EXT:
        return "fas fa-file-powerpoint"
    if ext in filter.WORD_EXT:
        return "fas fa-file-word"
    
    mime = magic.from_file(path, True).split('/')[0]
    if mime in ['zip', 'x-xz', 'gzip'] or ext in filter.ARCHIVE_EXT:
        return "fas fa-file-archive"
    if mime == "audio":
        return "fas fa-file-audio"
    if mime == 'video':
        return "fas fa-file-video"
    if mime == 'image':
        return "fas fa-file-image"
    if mime == 'text':
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



def get_meta(path):
    """
    Returns metadata informations about the path
    Raises an IOError if path is not a file
    """
    if os.path.isdir(path):
        raise IOError('{0} is not a file'.format(rm_fb_root(path)))
    
    return {
        'text':        filter.is_text(path),
        'code':        filter.is_code(path) or filter.is_pl(path) or filter.is_pltp(path),
        'image':       filter.is_image(path),
        'excel':       filter.is_excel(path),
        'downloadUrl': to_download_url(rm_fb_root(path))
    }



def get_content(path):
    """
    Returns the content of the path
    Raises an IOError if path is not a file
    """
    path = join_fb_root(rm_fb_root(path))
    if os.path.isdir(path):
        raise IOError('{0} is not a file'.format(rm_fb_root(path)))
    
    with codecs.open(path, "r", encoding='utf-8', errors='ignore') as f:
        return f.read()



def walkdir(path, user, parent='', write=None, read=None, repo=None, sort=False):
    """Returns the directory tree from path."""
    node = {
        'parent': parent,
        'type':   'folder' if os.path.isdir(path) else 'file',
        'name':   os.path.basename(path),
        'path':   rm_fb_root(path),
        'write':  write,
        'read':   read,
        'repo':   repo,
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
                'url':    repository_url(path),
                'branch': repository_branch(path),
                'host':   fa_repository_host(path),
            }
        node['children'] = [
            walkdir(os.path.join(path, entry), user, node['path'], write, read, repo, sort)
            for entry in os.listdir(path)
            if not filter.is_hidden(entry)
        ]
        if sort:
            node['children'] = sorted(node['children'], key=lambda i: i["name"])
    
    return node



def walkalldirs(request):
    lib = walkdir(join_fb_root(LIB_DIR), request.user)
    home = walkdir(join_fb_root(HOME_DIR), request.user)
    home["name"] = 'home'
    return [home, lib]
