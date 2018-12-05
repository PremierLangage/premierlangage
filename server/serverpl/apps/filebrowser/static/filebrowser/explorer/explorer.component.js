import * as filters from '../filters.js'

angular.module('editor')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: { documents: '<' },
    controller: ExplorerComponent,
    controllerAs: 'explorer',
});

function ExplorerComponent(EditorService, MonacoService, $mdDialog, toastr) {
    const explorer = this;
    

    /** adds new file in the folder 'document' */
    this.addFile = function(document, event) {
        event.stopPropagation();
        EditorService.addFile(document);
    }

    /** adds new folder in the folder 'document' */
    this.addFolder = function(document, event) {
        event.stopPropagation();
        EditorService.addFolder(document);
    }

    /** creates or cancels the edition of 'document' depending to 'event' */
    this.endEditing = function(document, event) {
        if (event.keyCode === 13) { // enter
            EditorService.createDocument(document).then(() => {
                explorer.selectDocument(document);
            }).catch(error => {
                toastr.error(error, 'error', { allowHtml: true });
            });
        } else if (event.keyCode === 27) { // esc
            EditorService.cancelEdition(document);
        }
    }

    this.deleteDocument = function(document, event) {
        event.stopPropagation();
        const confirm = $mdDialog.confirm()
                        .title('Would you like to delete "' + document.name + '"?')
                        .ok('DELETE')
                        .cancel('CANCEL')
                        .targetEvent(event);
        $mdDialog.show(confirm).then(function() {
            EditorService.deleteDocument(document).then(() => {
                toastr.success(document.name + ' deleted !', 'info');
            }).catch(error => {
                toastr.error(error, 'error');
            });
        });
    }

    /** checks if 'document' is the selected document */
    this.isSelection = function(document) {
        return MonacoService.isSelection(document);
    }

    /** shows the options of the document */
    this.showOptions = function(document, menu, event) {
        event.preventDefault();
        if (document.hasOption) {
            menu.open();
        }
    }
        
    /** moves the document 'src' to 'dst' */
    this.moveDocument = function(src, dst) {
        EditorService.moveDocument(src, dst).then(() => {
            toastr.success(src + ' moved to ' + dst, 'info');
        }).catch(error => {
            toastr.error(error, 'error', {allowHtml: true});
        });
    }

    this.reloadPLTP = function(document, event) {
        event.stopPropagation(); 
        MonacoService.reloadPLTP(document);
        // TODO
    }

    /** starts renaming 'document' */
    this.renameDocument = function(document, event) {
        event.stopPropagation();
        EditorService.renameDocument(document);
    }
    
    /** sets 'document' has the selected document and displays it content if needed */
    this.selectDocument = function(document) {
        document.expanded = document.type === 'folder' && !document.expanded;
        MonacoService.openAndSelect(document);
    }
    
    this.testPL = function(document, event) {
        event.stopPropagation();
        MonacoService.testPL(document);
    }

    this.loadPLTP = function(document, event) {
        event.stopPropagation();
        MonacoService.loadPLTP(document);
        // TODO
    }

    this.options = [
        {icon:'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.testPL},
        {icon:'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.loadPLTP},
        {icon:'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.reloadPLTP},
        {icon: 'far fa-file', label: 'New File', enabled: filters.canAddFile, action: this.addFile },
        {icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddFile, action: this.addFolder },
        {icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: this.renameDocument },
        {icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: this.deleteDocument },       
        {icon: 'fas fa-lock', label: 'Read Only', enabled: filters.readOnly, action: function() {} },      
    ];
}