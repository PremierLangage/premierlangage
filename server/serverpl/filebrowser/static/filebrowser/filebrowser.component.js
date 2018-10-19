angular.module('fileBrowserApp')
.component('fileBrowser', {
    templateUrl: '/static/filebrowser/filebrowser.component.html',
    controller: function FileBrowser(FileBrowserService) {
        this.loadingExplorer = true;
        this.items = function() {
            return FileBrowserService.items;
        };
        FileBrowserService.loadExplorer(error => {
            this.loadingExplorer = false;
        });
    }
});