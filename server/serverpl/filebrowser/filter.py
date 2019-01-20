from django.shortcuts import redirect
from django.conf import settings


import magic, os, gitcmd
from os.path import abspath, join, isdir, dirname, isfile, basename, splitext
from filebrowser.models import Directory
from loader.parser import get_parsers

WORD_EXT       = ['.doc', '.docm', '.docx', '.dot', '.dotm', '.dotx', '.odt', '.wps']
EXCEL_EXT      = ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xlam', '.xla', '.xlw', '.xlr', '.csv', '.ods', '.xlc']
POWERPOINT_EXT = ['.pptx', '.pptm', '.ppt', '.potx', '.potm', '.pot', '.ppsx', '.ppsm', '.pps', '.ppam', '.odp']
ARCHIVE_EXT    = ['.zip', '.tar', '.7zip', '.a', '.ar', '.bz2', '.gz', '.7z', '.jar', '.tar.gz', '.tgz', '.tar.Z', '.tar.bz2', '.tar.xz', '.tbz2', '.tar.lzma', '.tlz', '.tar.xz', '.txz']
CODE_EXT       = ['.inp', '.abc', '.abp', '.as', '.adb', '.ads', '.asciidoc', '.adoc', '.asm', '.asm51', '.a51', '.bat', '.cmd', '.nt', '.ml', '.mli', '.c', '.xpm', '.cpp', '.cxx', '.c++', '.cc', '.h', '.hpp', '.hxx', '.h++', '.hh', '.C', '.H', '.clj', '.cljs', '.cljc', '.cu', '.cuh', '.h', '.cs', 'CMake=CMakeLists.txt', '.cmake', '.ctest', '.cob', '.cpy', '.cbl', '.cobol', '.coffee', 'Cakefile', '.Cakefile', '.coffee.erb', '.iced', '.iced.erb', '.conf', '.ini', 'config', 'rc', '.cfg', '.desktop', '.properties', 'control', '.css', '.pyx', '.pxd', '.pxi', '.d', '.di', '.diff', '.patch', '.rej', '.debdiff', '.dpatch', '.docbook', '.erl', '.hrl', '.f', '.for', '.ftn', '.f77', '.F', '.FOR', '.FTN', '.fpp', '.FPP', '.fe', '.fs', '.fth', '.f90', '.f95', '.f03', '.f08', '.F90', '.F95', '.F03', '.F08', '.bas', '.bi', '.vbs', '.gs', '.glsl', '.frag', '.vert', '.go', '.gv', '.dot', '.hs', '.lhs', '.hs-boot', '.lhs-boot', '.hx', '.htm', '.html', '.shtml', '.hta', '.htd', '.htt', '.cfm', '.tpl', '.java', '.jsp', '.js', '.json', '.tex', '.sty', '.idx', '.ltx', '.latex', '.aux', '.bib', '.lisp', '.lua', '.mak', '.mk', 'GNUmakefile', 'makefile', 'Makefile', 'makefile.', 'Makefile.', '.mdml', '.markdown', '.md', '.mkd', '.mkdn', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.nsi', '.nsh', '.mm', '.h', '.pas', '.pp', '.inc', '.dpr', '.dpk', '.pl', '.perl', '.pm', '.agi', '.pod', '.php', '.php3', '.php4', '.php5', '.phtml', '.po', '.pot', '.py', '.pyw', 'SConstruct', 'SConscript', 'wscript', '.ps1', '.psm1', '.rest', '.reST', '.rst', '.R', '.r', '.rs', '.rb', '.rhtml', '.ruby', '.gemspec', 'Gemfile', 'rakefile', 'Rakefile', '.scala', '.scl', '.sh', 'configure', 'configure.in', 'configure.in.in', 'configure.ac', '.ksh', '.mksh', '.zsh', '.ash', '.bash', '.bashrc', 'bash.bashrc', '.bash_', 'bash_', '.m4', 'PKGBUILD', 'profile', '.sql', '.tcl', '.tk', '.wish', '.exp', '.t2t', '.vala', '.vapi', '.v', '.vhd', '.vhdl', '.xml', '.sgml', '.xsl', '.xslt', '.xsd', '.xhtml', '.xul', '.dtd', '.xtpl', '.mml', '.mathml', '.yaml', '.yml', 'h.zep']

HIDDEN = ['.git']
is_directory = isdir
is_file = isfile

def is_image(path):
    if isdir(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'image'

def is_text(path):
    if isdir(path):
        return False
    return (magic.from_file(path, mime=True).split('/')[0] == 'text'
            or not os.stat(path).st_size)

def is_audio(path):
    if isdir(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'audio'

def is_video(path):
    if isdir(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'video'

def is_application(path):
    if isdir(path):
        return False
    return magic.from_file(path, mime=True).split('/')[0] == 'application'

def is_pl(path):
    parsers = get_parsers()
    ext = splitext(path)[1]
    return is_not_directory(path) and ext in parsers and parsers[ext]['type'] == 'pl'


def is_not_pl(path):
    return not is_pl(path)


def is_pltp(path):
    parsers = get_parsers()
    ext = splitext(path)[1]
    return is_not_directory(path) and ext in parsers and parsers[ext]['type'] == 'pltp'


def in_repository(path):
    return gitcmd.in_repository(path, False)

def repository_url(path):
    return gitcmd.remote_url(path)[1][:-1]

def repository_branch(path):
    return gitcmd.current_branch(path)[1][:-1]

def repository_host(path):
    url = repository_url(path)
    if 'github.com' in url:
        return 'fab fa-github'
    if 'bitbucket.org' in url:
        return 'fab fa-bitbucket'
    if 'gitlab.com' in url:
        return 'fab fa-gitlab'
    return 'fab fa-git'

def is_remote(path):
    path = path if settings.FILEBROWSER_ROOT not in path else path.replace(
        settings.FILEBROWSER_ROOT + '/', '')
    parts = path.split('/')

    directory = None
    try:
        directory = Directory.objects.get(name=parts[1])
    except Exception:
        pass
    return True if directory and directory.remote else False


def icon(path):
    ext = splitext(path)[1]
    
    if isdir(path):
        return "fas fa-folder"
    
    if ext == ".pdf":
        return "fas fa-file-pdf"
    if ext in EXCEL_EXT:
        return "fas fa-file-excel"
    if ext in POWERPOINT_EXT:
        return "fas fa-file-powerpoint"
    if ext in WORD_EXT:
        return "fas fa-file-word"
    if ext in ARCHIVE_EXT:
        return "fas fa-file-archive"
    if ext in CODE_EXT:
        return "fas fa-file-code"
    
    if is_text(path):
        return "fas fa-file-alt"
    if is_audio(path):
        return "fas fa-file-audio"
    if is_video(path):
        return "fas fa-file-video"
    if is_image(path):
        return "fas fa-file-image"
        
    
    return "fas fa-file"

def hidden(path):
    return basename(path) in HIDDEN


def isroot(path):
    components = path.split('/')
    return len(components) <= 1 or not components[1]

def is_not_directory(path):
    return not is_directory(path)

def is_directory_object(path):
    if len(path.replace(settings.FILEBROWSER_ROOT, "").split('/')) < 3 and Directory.objects.filter(
            name=basename(path)):
        return True
    return False
    
def is_not_directory_object(path):
    return not is_directory_object(path)

def to_abs_path(path):
    if path.startswith(settings.FILEBROWSER_ROOT):
        return path
    return abspath(join(settings.FILEBROWSER_ROOT, path))

def to_rel_path(path):
    if path.startswith(settings.FILEBROWSER_ROOT):
        return path[len(settings.FILEBROWSER_ROOT) + 1:]
    return path


def is_archive(path):
    if is_directory(path):
        return False
    return magic.from_file(path, mime=True).split('/')[1] in ['zip', 'x-xz', 'gzip']