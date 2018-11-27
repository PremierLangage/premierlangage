angular.module('plEditor')
.component('plEditor', {
    templateUrl: '/static/filebrowser/pleditor.component.html',
    controller: function(FileBrowserService) {
        
        this.EXPLORER = 'EXPLORER';
        this.SETTINGS = 'SETTINGS';
        
        this.loadingExplorer = true;
        this.toolbarSelection = this.EXPLORER;
        
        this.items = function() {
            return FileBrowserService.items;
        };

        this.hasRepo = function() {
            const selection = FileBrowserService.explorerSelection;
            return selection && selection.repo;
        }

        this.repo = function() {
            return FileBrowserService.explorerSelection.repo;
        }

        this.saveModifications = function() {}
        this.showExplorer = function() {
            this.toolbarSelection = this.EXPLORER;
        }

        this.showSettings = function() {
            this.toolbarSelection = this.SETTINGS;
        }

        FileBrowserService.loadExplorer(() => {
            this.loadingExplorer = false;
        });
    }
});