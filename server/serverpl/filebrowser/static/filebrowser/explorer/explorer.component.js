angular.module('fileBrowserApp')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: {
        items: '=',
    },
    controller: function Explorer(FileBrowserService) {      
        
        this.select = function (document) {
            document.expanded = !document.expanded;
            if (document.type === 'file') {
                FileBrowserService.selectDocument(document);
            } else {
                FileBrowserService.selectFolder(document);
            }
        }

        this.isSelection = FileBrowserService.isSelectedFolder;

        this.drop = function(from, to) {
            FileBrowserService.moveDocument(from, to);
        }

        this.contextmenu = function(document, menu, event) {
            event.preventDefault();
            if (document.hasOption) {
                menu.open();
            }
        }
    }
})