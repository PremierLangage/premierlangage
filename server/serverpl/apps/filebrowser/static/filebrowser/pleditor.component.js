angular.module('plEditor')
.component('plEditor', {
    templateUrl: '/static/filebrowser/pleditor.component.html',
    controller: function(EditorService) {
        
        this.EXPLORER = 'EXPLORER';
        this.SETTINGS = 'SETTINGS';
        
        this.loadingExplorer = true;
        this.toolbarSelection = this.EXPLORER;
        
        this.items = function() {
            return EditorService.items;
        };

        this.hasRepo = function() {
            const selection = EditorService.explorerSelection;
            return selection && selection.repo;
        }

        this.repo = function() {
            return EditorService.explorerSelection.repo;
        }

        this.saveModifications = function() {}
        this.showExplorer = function() {
            this.toolbarSelection = this.EXPLORER;
        }

        this.showSettings = function() {
            this.toolbarSelection = this.SETTINGS;
        }

        EditorService.loadExplorer(() => {
            this.loadingExplorer = false;
        });
    }
});