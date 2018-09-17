from filebrowser.form import *
from filebrowser.options import *
from filebrowser.filter import *


#####
## Bootstrap button classes
# Color
GREY = "-secondary"
DARK_BLUE = "-primary"
LIGHT_BLUE = "-info"
GREEN = "-success"
RED = "-danger"
YELLOW = "-warning"
WHITE = "-light"
BLACK = "-dark"
# Outline
OUTLINE = "-outline"
# Size
SMALL = "small"
BIG = "big" 

#####
## Methods
POST = 'POST'
GET = 'GET'

#####
## Rights
READ = 'R'
WRITE = 'W'



class FilebrowserOption:
    """ Class representing an option in the filebrowser.
    
    Mandatory Attributes:
        fa_icon (str): Font Awesome 5 class of the icon of the button
        text (str): Texte which will be displayed on big button or when hovering small button
        option (function): Function which will be called with request, filebrowser
                           and target as argument when the user use the option.
                           (see option.py for more informations)
    Optionnal Attributes:
        method (str): Method used by the option to send the request ('POST' or 'GET', default 'POST')
        form (django.forms): Form which will be used by the option (method must be PÖST, default None)
        require_confirmation (bool): Whether the option ask for confirmation or not
                                     (method should be POST, default False)
        filter (function/function list): function of list of function to filter to which entry
                                         this option is applied (default None, see filter.py for
                                         more informations)
        class (lst): List of css class to be added to the button
        color (str): boostrap class for the color of the button, see above constant for choices.
        size (size): boostrap class for the size of the button (BIG or SMALL, default SMALL). Big buttons
                     are displayed first together then small buttons next.
        outline (bool): Whether outline bootstrap class is used or not (default True)
        balise (str): Any extra balise which should be add inside the <button [balise]> element.
        right (str): Right needed to see and use this option.
    """
    
    def __init__(self, fa_icon, name, option, form=None, filter=None,
                 require_confirmation=False, color=GREY, outline=True,
                 method=POST, balise=None, size=SMALL, classes=None,
                 right=WRITE, confirm_msg=None):
        if classes is None:
            classes = []
        self.fa_icon = fa_icon
        self.name = name
        self.confirm_msg = confirm_msg
        self.form = form
        self.require_confirmation = require_confirmation
        self.option = option
        self.filter = filter
        self.color = color
        self.outline = OUTLINE if outline else ""
        self.method = method
        self.type = 'button' if method == POST else 'a'
        self.balise = balise
        self.size = size
        self.classes = classes
        self.right = right
        
        if form and method == GET:  # pragma: no cover
            raise ValueError("An option can't have a form while using GET method")
        if require_confirmation and method == POST:  # pragma: no cover
            raise ValueError("require_confirmation can't be True with a POST method")



class OptionsGroup:
    
    def __init__(self, name, options, icon=None, dropdown=True, filter=None):
        if not icon and dropdown:  # pragma: no cover
            raise ValueError('A FA5 icon must be provided if dropdown is True (default)')
        for k in options.keys():  # pragma: no cover
            if '-' in k:
                raise ValueError("Dashes '-' are not allowed inside options key.")
        
        self.name = name
        self.icon = icon
        self.options = options
        self.dropdown = dropdown
        self.filter = filter



class OptionsCategory:
    
    def __init__(self, groups):
        for k in groups.keys():  # pragma: no cover
            if '-' in k:
                raise ValueError("Dashes '-' are not allowed inside groups key.")
        
        self.groups = groups
    
    def get_option(self, group, option):
        """Get the option corresponding to <option> in <group>."""
        return self.groups[group].options[option].option


####################################################################################################
# Filebrowser entries options.
ENTRY_OPTIONS = OptionsCategory({
    "direct": OptionsGroup('Direct', {
            "edit_pl": FilebrowserOption("fas fa-edit",  "Edit", edit_pl_option,   size=BIG, method=GET, filter=is_pl),
            "edit":    FilebrowserOption("fas fa-edit",  "Edit", edit_option,      size=BIG, method=GET, filter=[is_text, is_not_pl]),
            "test":    FilebrowserOption("fas fa-check", "Test", test_pl_option,   size=BIG, method=GET, filter=is_pl, right=READ),
            "load":    FilebrowserOption("fas fa-play",  "Load", load_pltp_option, size=BIG, method=GET, filter=is_pltp, right=READ),
            "extract":  FilebrowserOption("fas fa-share-square", "Extract",  extract_option, filter=is_archive, method=GET, size=BIG),
        }, dropdown=False),
    "options": OptionsGroup('Options', {
            "rename":   FilebrowserOption("fas fa-pencil-alt",  "Rename",   rename_option, form=RenameForm),
            "move":     FilebrowserOption("fas fa-arrow-right", "Move",     move_option, form=MoveForm, filter=is_not_directory_object),
            "copy":     FilebrowserOption("fas fa-copy",        "Copy",     copy_option, form=CopyForm, filter=is_not_directory_object),
            "download": FilebrowserOption("fas fa-download",    "Download", download_option, method=GET, right=READ),
            "display":  FilebrowserOption("fas fa-eye",         "Display",  display_option, filter=is_text, method=GET, balise=['target=_blank'], right=READ),
            "delete":   FilebrowserOption("fas fa-times",       "Delete",   delete_option, require_confirmation=True, method=GET, color=RED, filter=is_not_directory_object),
        }, icon="fas fa-cog"),
    "git": OptionsGroup('Git', {
            "add":      FilebrowserOption("fas fa-plus",   "Git Add",      add_option, method=GET),
            "commit":   FilebrowserOption("fas fa-edit",   "Git Commit",   commit_option, form=CommitForm),
            "reset":    FilebrowserOption("fas fa-undo",   "Git Reset",    reset_option, color=YELLOW, form=ResetForm),
            "checkout": FilebrowserOption("fas fa-eraser", "Git Checkout", checkout_option, color=RED, require_confirmation=True, method=GET, confirm_msg="Will reset all your local changes up to your last commit."),
        }, icon="fab fa-git-square fa-lg", filter=in_repository),
})



####################################################################################################
# Filebrowser Directory options, can be displayed with the upper-right dropdown in the filebrowser
DIRECTORY_OPTIONS = OptionsCategory({
    "options": OptionsGroup('Options', {
            "mkdir":    FilebrowserOption("fas fa-folder",   "New directory", mkdir_option, form=RenameForm),
            "new":      FilebrowserOption("fas fa-edit",     "New File",      new_file_option, form=NewFileForm),
            "upload":   FilebrowserOption("fas fa-upload",   "Upload File ",  upload_option, form=UploadForm),
            "download": FilebrowserOption("fas fa-download", "Download",      download_option, method=GET, right=READ),
            "clone":    FilebrowserOption("fas fa-cloud-download-alt", "Git Clone", clone_option, form=CloneForm),
        }, icon='fas fa-cog'),
    "git": OptionsGroup('Git', {
            "push":     FilebrowserOption("fas fa-cloud-upload-alt",   "Git Push",        push_option, form=LoginForm),
            "pull":     FilebrowserOption("fas fa-cloud-download-alt", "Git Pull",        pull_option, form=LoginForm),
            "status":   FilebrowserOption("fas fa-info-circle",        "Git Status",      status_option, method=GET),
            "branch":   FilebrowserOption("fas fa-list-ul",            "List Branch",     branch_option, method=GET),
            "chbranch": FilebrowserOption("fas fa-code-branch",        "Change Branch",   change_branch_option, form=ChangeBranchForm),
            "add":      FilebrowserOption("fas fa-plus",               "Git Add",         add_option, method=GET),
            "commit":   FilebrowserOption("fas fa-edit",               "Git Commit",      commit_option, form=CommitForm),
            "reset":    FilebrowserOption("fas fa-undo",               "Git Reset",       reset_option, color=YELLOW, form=ResetForm),
            "checkout": FilebrowserOption("fas fa-eraser",             "Git Checkout",    checkout_option, color=RED, require_confirmation=True, method=GET, confirm_msg="Will reset all your local changes to to your last commit."),
        }, icon='fab fa-git-square fa-lg', filter=in_repository),
})


        

