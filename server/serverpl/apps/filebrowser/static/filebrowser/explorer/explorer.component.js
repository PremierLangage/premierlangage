import * as filters from '../app.filters.js'

angular.module('app')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: { documents: '<' },
    controller: class Explorer {
        constructor(AppService, $mdDialog) {
     
            this.options = [
                {icon:'fas fa-check', label: 'Test', enabled: this.canBeTested, action: this.testPL},
                {icon:'fas fa-play', label: 'Load', enabled: this.canBeLoaded, action: this.loadPLTP},
                {icon:'fas fa-sync', label: 'Reload', enabled: this.canBeReloaded, action: this.reloadPLTP},
                {icon: 'far fa-file', label: 'New File', enabled: this.canAddFile, action: this.addFile },
                {icon: 'far fa-folder', label: 'New Folder', enabled: this.canAddFile, action: this.addFolder },
                {icon: 'far fa-edit', label: 'Rename', enabled: this.canBeRenamed, action: this.renameDocument },
                {icon: 'far fa-trash-alt', label: 'Delete', enabled: this.canBeDeleted, action: this.deleteDocument },      
            ];
            this.service = AppService;
            this.filters = filters;
            this.dialog = $mdDialog;
            this.dropItem = function(from, to) {
                AppService.moveDocument(from, to);
            }
        }

        isSelection(item) {
            return this.service.isExplorerSelection(item);
        }

        selectItem(item) {
            this.service.selectDocument(item);
        }
       
        endEditing(item, event) {
            if (event.keyCode == 13) { // enter
                this.service.createDocument(item).then(() => 
                    this.service.selectDocument(item)
                ).catch(error => 
                    console.log(error)
                );
            } else if (event.keyCode == 27) { // esc
                this.service.cancelDocument(item);
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
        
        testPL(controller, item, event) {
            event.stopPropagation();
            controller.service.testPL(item);
        }

        loadPLTP(controller, item, event) {
            event.stopPropagation();
            controller.service.loadPLTP(item);
        }

        reloadPLTP(controller, item, event) {
            event.stopPropagation(); 
            controller.service.reloadPLTP(item);
        }

        renameDocument(controller, item, event) {
            event.stopPropagation();
            controller.service.renameDocument(item);
        }
        
        deleteDocument(controller, item, event) {
            event.stopPropagation();
            const confirm = controller.dialog.confirm()
                .title('Would you like to delete "' + item.name + '"?')
                .ok('DELETE')
                .targetEvent(event)
                .cancel('CANCEL');
            controller.dialog.show(confirm).then(function() {
                controller.service.deleteDocument(item).catch(error => {
                    console.log(error);
                });
            });
        }

        canAddFile(item) {
            return filters.canWrite(item) && filters.isFolder(item);
        }

        canAddFolder(item) {
            return filters.canWrite(item) && filters.isFolder(item);
        }

        canBeRenamed(item) {
            return filters.canWrite(item) && !filters.isRoot(item);
        }

        canBeDeleted(item) {
            return filters.canWrite(item) && filters.isNotRoot(item);
        }

        canBeTested(item) {
            return filters.canRead(item) && filters.isPl(item);
        }

        canBeLoaded(item) {
            return filters.canWrite(item) && filters.isPltp(item);
        }

        canBeReloaded(item) {
            return filters.canWrite(item) && filters.isPltp(item);
        }
    }
});