import os

import gitcmd
import magic

from loader.parser import get_parsers


WORD_EXT = ['.doc', '.docm', '.docx', '.dot', '.dotm', '.dotx', '.odt', '.wps']
EXCEL_EXT = ['.xlsx', '.xlsm', '.xlsb', '.xltx', '.xltm', '.xls', '.xlt', '.xlam', '.xla', '.xlw',
             '.xlr', '.csv', '.ods', '.xlc']
POWERPOINT_EXT = ['.pptx', '.pptm', '.ppt', '.potx', '.potm', '.pot', '.ppsx', '.ppsm', '.pps',
                  '.ppam', '.odp']
ARCHIVE_EXT = ['.zip', '.tar', '.7zip', '.a', '.ar', '.bz2', '.gz', '.7z', '.jar', '.tar.gz',
               '.tgz', '.tar.Z', '.tar.bz2', '.tar.xz', '.tbz2', '.tar.lzma', '.tlz', '.tar.xz',
               '.txz']
CODE_EXT = ['.inp', '.abc', '.abp', '.as', '.adb', '.ads', '.asciidoc', '.adoc', '.asm', '.asm51',
            '.a51', '.bat', '.cmd', '.nt', '.ml', '.mli', '.c', '.xpm', '.cpp', '.cxx', '.c++',
            '.cc', '.h', '.hpp', '.hxx', '.h++', '.hh', '.C', '.H', '.clj', '.cljs', '.cljc', '.cu',
            '.cuh', '.h', '.cs', 'CMake=CMakeLists.txt', '.cmake', '.ctest', '.cob', '.cpy', '.cbl',
            '.cobol', '.coffee', 'Cakefile', '.Cakefile', '.coffee.erb', '.iced', '.iced.erb',
            '.conf', '.ini', 'config', 'rc', '.cfg', '.desktop', '.properties', 'control', '.css',
            '.pyx', '.pxd', '.pxi', '.d', '.di', '.diff', '.patch', '.rej', '.debdiff', '.dpatch',
            '.docbook', '.erl', '.hrl', '.f', '.for', '.ftn', '.f77', '.F', '.FOR', '.FTN', '.fpp',
            '.FPP', '.fe', '.fs', '.fth', '.f90', '.f95', '.f03', '.f08', '.F90', '.F95', '.F03',
            '.F08', '.bas', '.bi', '.vbs', '.gs', '.glsl', '.frag', '.vert', '.go', '.gv', '.dot',
            '.hs', '.lhs', '.hs-boot', '.lhs-boot', '.hx', '.htm', '.html', '.shtml', '.hta',
            '.htd', '.htt', '.cfm', '.tpl', '.java', '.jsp', '.js', '.json', '.tex', '.sty', '.idx',
            '.ltx', '.latex', '.aux', '.bib', '.lisp', '.lua', '.mak', '.mk', 'GNUmakefile',
            'makefile', 'Makefile', 'makefile.', 'Makefile.', '.mdml', '.markdown', '.md', '.mkd',
            '.mkdn', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.nsi', '.nsh', '.mm', '.h', '.pas',
            '.pp', '.inc', '.dpr', '.dpk', '.pl', '.perl', '.pm', '.agi', '.pod', '.php', '.php3',
            '.php4', '.php5', '.phtml', '.po', '.pot', '.py', '.pyw', 'SConstruct', 'SConscript',
            'wscript', '.ps1', '.psm1', '.rest', '.reST', '.rst', '.R', '.r', '.rs', '.rb',
            '.rhtml', '.ruby', '.gemspec', 'Gemfile', 'rakefile', 'Rakefile', '.scala', '.scl',
            '.sh', 'configure', 'configure.in', 'configure.in.in', 'configure.ac', '.ksh', '.mksh',
            '.zsh', '.ash', '.bash', '.bashrc', 'bash.bashrc', '.bash_', 'bash_', '.m4', 'PKGBUILD',
            'profile', '.sql', '.tcl', '.tk', '.wish', '.exp', '.t2t', '.vala', '.vapi', '.v',
            '.vhd', '.vhdl', '.xml', '.sgml', '.xsl', '.xslt', '.xsd', '.xhtml', '.xul', '.dtd',
            '.xtpl', '.mml', '.mathml', '.yaml', '.yml', 'h.zep']

HIDDEN = ['.git']
is_directory = os.path.isdir
is_file = os.path.isfile



def is_image(path):
    """Returns True if path is an image, False otherwise."""
    return not os.path.isdir(path) and magic.from_file(path, True).split('/')[0] == 'image'



def is_text(path):
    """Returns True if path is a text, False otherwise."""
    return not os.path.isdir(path) and magic.from_file(path, True).split('/')[0] == 'text'



def is_audio(path):
    """Returns True if path is an audio file, False otherwise."""
    return not os.path.isdir(path) and magic.from_file(path, True).split('/')[0] == 'audio'



def is_video(path):
    """Returns True if path is a video, False otherwise."""
    return not os.path.isdir(path) and magic.from_file(path, True).split('/')[0] == 'video'



def is_application(path):
    """Returns True if path's mimetype is application, False otherwise."""
    return not os.path.isdir(path) and magic.from_file(path, True).split('/')[0] == 'application'



def is_archive(path):
    """Returns True if path is an archive, False otherwise."""
    return (not os.path.isdir(path)
            and (magic.from_file(path, True).split('/')[1] in ['zip', 'x-xz', 'gzip']
                 or os.path.splitext(path)[1] in ARCHIVE_EXT))



def is_code(path):
    """Returns True if path is a source code file, False otherwise."""
    return not os.path.isdir(path) and os.path.splitext(path)[1] in CODE_EXT



def is_excel(path):
    """Returns True if path is an excel file, False otherwise."""
    return not os.path.isdir(path) and os.path.splitext(path)[1] in EXCEL_EXT



def is_word(path):
    """Returns True if path is a word file, False otherwise."""
    return not os.path.isdir(path) and os.path.splitext(path)[1] in WORD_EXT



def is_powerpoint(path):
    """Returns True if path is a powerpoint, False otherwise."""
    return not os.path.isdir(path) and os.path.splitext(path)[1] in POWERPOINT_EXT



def is_pl(path):
    """Returns True if path is a pl, False otherwise."""
    parsers = get_parsers()
    ext = os.path.splitext(path)[1]
    return not os.path.isdir(path) and ext in parsers and parsers[ext]['type'] == 'pl'



def is_pltp(path):
    """Returns True if path is a pltp, False otherwise."""
    parsers = get_parsers()
    ext = os.path.splitext(path)[1]
    return not os.path.isdir(path) and ext in parsers and parsers[ext]['type'] == 'pltp'



def in_repository(path):
    """Returns True if path is inside a repository, False otherwise."""
    return gitcmd.in_repository(path, False)



def is_hidden(path):
    """Returns True if path is a file which is considered as hidden, False otherwise."""
    return os.path.basename(path) in HIDDEN



def is_root(path):
    """Returns True if path is an image, False otherwise."""
    components = path.split('/')
    return len(components) <= 1 or not components[1]
