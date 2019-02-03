'use strict';

import { isHome, isRepo }  from './filters.js'

angular.module('editor')
.component('editor', {
    templateUrl: '/static/filebrowser/editor.component.html',
    controller: EditorComponent,
    controllerAs: 'editor'
});

function EditorComponent($scope, EditorService, MonacoService) {        
    const editor = this;
    editor.searchQuery = '';
    editor.searchResult = [];
    editor.searching = false;
    editor.consoleNode = angular.element('#console');

    EditorService.onLogAdded = function() {
        const height = editor.consoleNode.height();
        if (height < 300) {
            editor.consoleNode.height(400);
        }
        $scope.$apply();
    }

    editor.logs = function() {
        return EditorService.logs;
    }

    editor.addFile = function() {
        EditorService.addFile(EditorService.resources[0]);
    }

    editor.addFolder = function() {
        EditorService.addFolder(EditorService.resources[0]);
    }

    editor.resources = function() {
        return EditorService.resources;
    };

    editor.refresh = function() {
        EditorService.askConfirm({
            title: "You will lose any unsaved changes, Are you sure ?",
            confirmed: function() {
                EditorService.refresh().catch(error => {
                    console.log(error);
                });
            }
        });
    }

    editor.inHome = function() {
        return isHome(editor.selection());
    }
    
    editor.inRepo = function() {
        return isRepo(editor.selection());
    }
    
    editor.hasOption = function() {
        const s = editor.selection();
        return s && s.hasOption;
    }

    editor.closeConsole = function() {
        editor.consoleNode.height(32);
    }

    editor.clearConsole = function() {
        EditorService.clearLogs();
    }

    editor.options = function() {
        const s = editor.selection();
        return s ? s.options : [];
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

    editor.didTapGitButton = function(menu, event) {
        event.preventDefault();
        menu.open();
    }

    editor.updateSearch = function(event) {
        if (event.keyCode ===  27 || event.type === 'blur') { // esc
           editor.endSearch();
        } else if (event.keyCode === 13) { // enter
            editor.searchQuery = editor.searchQuery.toLowerCase();
            editor.searchResult = EditorService.findResources(resource => {
                return resource.type === 'file' && resource.name.toLowerCase().includes(editor.searchQuery);
            });
        }
    }

    editor.endSearch = function() {
        editor.searching = false;
        editor.searchResult = [];
    }

    EditorService.refresh();

    EditorService.setResizable('#explorer', function(arg) {
        arg.node.style.width = (arg.startWidth + arg.e.clientX - arg.startX) + 'px';
        MonacoService.layout();
    });

    EditorService.setResizable('#console', function(arg) {
        arg.node.style.height = (arg.startHeight - arg.e.clientY + arg.startY) + 'px';
        MonacoService.layout();
    });
}
