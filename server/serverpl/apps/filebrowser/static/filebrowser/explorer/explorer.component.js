import * as filters from '../pleditor.filters.js'

angular.module('plEditor')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: { items: '<' },
    controller: class Explorer {
        
        constructor(EditorService) {
            this.options = [
                {icon: 'far fa-file', label: 'New File', enabled: this.canAddFile, action: this.addFile },
                {icon: 'far fa-folder', label: 'New Folder', enabled: this.canAddFile, action: this.addFolder },
                {icon: 'far fa-edit', label: 'Rename', enabled: this.canBeRenamed, action: this.renameItem },
                {icon: 'far fa-trash-alt', label: 'Delete', enabled: this.canBeDeleted, action: this.deleteItem },
            ];
            this.service = EditorService;
            this.filters = filters;
        }

        isSelection(item) {
            return  this.service.isExplorerSelection(item);
        }

        selectItem(item) {
            this.service.selectDocument(item);
        }

        dropItem(from, to) {
            this.service.moveDocument(from, to);
        }
       
        endEditing(item, event) {
            if (event.keyCode == 13) { // enter
                delete item.editing;
                item.path += '/' + name;
                this.service.createDocument(item);
            } else if (event.keyCode == 27) { // esc
                item.path += '/' + name;
                this.service.deleteItem(item);
            }
        }

        showOptions(item, menu, event) {
            event.preventDefault();
            if (item.hasOption) {
                menu.open();
            }
        }

        addFile(controller, item, event) {
            event.stopPropagation();
            controller.service.addFile(item);
        }

        addFolder(controller, item, event) {
            event.stopPropagation();
            controller.service.addFolder(item);
        }
        
        renameItem(controller, item, event) {
            event.stopPropagation();
            controller.service.renameItem(item);
        }
        
        deleteItem(controller, item, event) {
            event.stopPropagation();
            controller.service.deleteItem(item);
        }


        canAddFile(item) {
            return filters.canWrite(item) && filters.isFolder(item);
        }

        canAddFolder(item) {
            return filters.canWrite(item) && filters.isFolder(item);
        }

        canBeRenamed(item) {
            return filters.canWrite(item) && filters.isFile(item);
        }

        canBeDeleted(item) {
            return filters.canWrite(item) && filters.isNotRoot(item);
        }

    }
});