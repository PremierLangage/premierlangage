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
            }
        }

        this.handleDrop = function(from, to) {
            FileBrowserService.moveDocument(from, to);
        }

        this.onDragStart = function(item, e) {   
           // ev.dataTransfer.setData("text", ev.target.id);
        }

        this.onDrop = function(item, e) { 
            console.log('drop');
            e.preventDefault();
            item['drop-active'] = true;
        }

        this.onDragLeave = function(item, e) {
            delete item['drop-active']
            e.preventDefault();
        }

        this.onDragOver = function(item, e) {
            //$(e.target).addClass("selected");
            //setSelectedTreeItem($(e.target));
            //e.dataTransfer.setData("text", e.target.id);
        }

        this.onContextMenu = function(item, e) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
})