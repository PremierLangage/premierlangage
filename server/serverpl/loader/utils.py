import os

import gitcmd
from django.conf import settings



def get_location(directory, path, current="", parser=None):
    """Returns a tuple (directory, path)
       
       params:
           - directory: [Directory] Directory containing the currently parsed file
           - path:      [str]       Path to the file needed
           - current:   [str]       Current position relative to directory
        
       returns:
           Return a tuple (directory_name, path)
        
       raises:
           - SyntaxError if a directory is given but the path after ':' isn't absolute or if '~\' is
             used outside repository.
           - FileNotFoundError is either the library or the file does not exists."""
    if ':' in path:  # Relative to a library
        lib, path = path.split(':')
        if lib.isdigit():
            raise SyntaxError("Library's name cannot be an integer")
        if not path.startswith('/'):
            raise SyntaxError("Syntax Error (path after ':' must be absolute)")
        path = path[1:]
        absolute = os.path.join(settings.FILEBROWSER_ROOT, lib)
        if not os.path.isdir(absolute):
            raise FileNotFoundError("Library '%s' does not exists" % lib)
        absolute = os.path.join(absolute, path)
        if not os.path.isfile(absolute):
            raise FileNotFoundError("File '%s' does not exists in library '%s'" % (path, lib))
        return lib, os.path.normpath(path)
    
    if path.startswith('~/'):  # Relative to a repository
        path = path[2:]
        absolute = os.path.join(directory.root, current)
        if gitcmd.in_repository(absolute, False):
            top = gitcmd.top_level(absolute)[1]
            absolute = os.path.join(os.path.basename(top), path)
            if not os.path.isfile(
                os.path.join(settings.FILEBROWSER_ROOT, directory.name, absolute)):
                raise FileNotFoundError("File '%s' does not exists in repository '%s'"
                                        % (path, os.path.basename(top)))
            return directory.name, os.path.normpath(absolute)
        raise SyntaxError("'~/' was used but current file is not in a repository")
    
    if path.startswith('/'):  # Relative to user's home
        path = path[1:]
        absolute = os.path.join(directory.root, path)
        if not os.path.isfile(absolute):
            # raise FileNotFoundError("File '%s' does not exists" % path[1:])

            # /!\ DEPRECATED (del in 0.7.0): defaulting to lib when file not found (use ':' instead)
            for lib in [l for l in os.listdir(settings.FILEBROWSER_ROOT) if not l.isdigit()]:
                absolute = os.path.join(settings.FILEBROWSER_ROOT, lib, path)
                if os.path.isfile(absolute):
                    if parser:
                        parser.add_warning("DEPRECATED: Absolute path '/' will not default to "
                                           "libraries anymore on version 0.7.0. Use 'lib:/' "
                                           "instead.")
                    return lib, path
            else:
                raise FileNotFoundError("File '%s' does not exists" % path)
        
        return directory.name, os.path.normpath(path)
    
    # Relative to current file
    absolute = os.path.join(directory.root, current, path)
    if not os.path.isfile(absolute):
        raise FileNotFoundError("File '%s' does not exists" % path)
    return directory.name, os.path.normpath(os.path.join(current, path))



def extends_dict(target, source):
    """ Will copy every key and value of source in target if key is not present in target """
    for key, value in source.items():
        if key not in target:
            target[key] = value
        elif type(target[key]) is dict:
            extends_dict(target[key], value)
        elif type(target[key]) is list:
            target[key] += value
    
    return target



def displayed_path(path):
    path = path.replace(settings.FILEBROWSER_ROOT, '')
    p = [i for i in path.split('/') if i]
    if p[0].isdigit():
        p[0] = 'home'
    
    return os.path.join(*p)
