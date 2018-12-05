angular.module('editor')
.component('editor', {
    templateUrl: '/static/filebrowser/editor.component.html',
    controller: EditorComponent,
    controllerAs: 'editor'
});

function EditorComponent(EditorService, MonacoService) {        
    const editor = this;
    
    const OUTPUT_HIDDEN_HEIGHT = '36px';
    const OUTPUT_NORMAL_HEIGHT = '300px';
    const OUTPUT_FULL_HEIGHT = 'calc(100% - 66px)';

    editor.searchQuery = '';
    editor.searchResult = [];
    editor.searching = false;
    editor.outputHeight = '36px';

    EditorService.onLogAdded = function() {
        if (editor.outputHeight === OUTPUT_HIDDEN_HEIGHT) {
            editor.outputHeight = OUTPUT_NORMAL_HEIGHT;
        }
    }

    editor.logs = function() {
        return EditorService.logs;
    }

    editor.addFile = function() {
        EditorService.addFile(EditorService.documents[0]);
    }

    editor.addFolder = function() {
        EditorService.addFolder(EditorService.documents[0]);
    }

    editor.gitClone = function() {
        EditorService.gitClone(EditorService.documents[0]);
    }

    editor.documents = function() {
        return EditorService.documents;
    };
   
    editor.inRepository = function() {
        return editor.selection() && editor.selection().repo;
    }
    
    editor.outputClear = function() {
        EditorService.clearLogs();
    }

    editor.outputExpandShrink = function() {
        if (editor.outputHeight === OUTPUT_HIDDEN_HEIGHT) {
            editor.outputHeight = OUTPUT_NORMAL_HEIGHT;
        } else if(editor.outputHeight === OUTPUT_NORMAL_HEIGHT) {
            editor.outputHeight = OUTPUT_FULL_HEIGHT;
        } else {
            editor.outputHeight = OUTPUT_NORMAL_HEIGHT;
        }
    }

    editor.outputToggle = function() {
        editor.outputHeight = editor.outputHeight === OUTPUT_HIDDEN_HEIGHT ? OUTPUT_NORMAL_HEIGHT : OUTPUT_HIDDEN_HEIGHT;
    }

    editor.search = function() {
        editor.searching = true;
    }
   
    editor.selection = function() {
        return MonacoService.selection;
    }

    editor.repository = function() {
        return MonacoService.selection.repo;
    }

    editor.runningTask = function() {
        return EditorService.runningTask;
    }

    editor.showGitContextMenu = function(menu, event) {
        event.preventDefault();
        menu.open();
    }

    editor.shouldShowWelcome = function() {
        return MonacoService.isEmpty();
    }

    editor.updateSearch = function(event) {
        if (event.keyCode ===  27) { // esc
            editor.searching = false;
            editor.searchResult = [];
        } else if (event.keyCode === 13) { // enter
            editor.searchQuery = editor.searchQuery.toLowerCase();
            editor.searchResult = EditorService.findDocuments(doc => {
                return doc.type === 'file' && doc.name.toLowerCase().includes(editor.searchQuery);
            });
        }
    }

    window.onbeforeunload = function(e) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    };

    EditorService.loadDocuments();     
}