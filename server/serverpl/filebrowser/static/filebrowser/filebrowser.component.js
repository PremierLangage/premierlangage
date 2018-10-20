angular.module('fileBrowserApp')
.component('fileBrowser', {
    templateUrl: '/static/filebrowser/filebrowser.component.html',
    controller: function FileBrowser(FileBrowserService) {
        this.loadingExplorer = true;
        this.items = function() {
            return FileBrowserService.items;
        };

        this.hasRepo = function() {
            return FileBrowserService.selectedFolder && FileBrowserService.selectedFolder.repo;
        }

        this.repo = function() {
            return FileBrowserService.selectedFolder.repo;
        }

        FileBrowserService.loadExplorer(error => {
            this.loadingExplorer = false;
        });
    }
});