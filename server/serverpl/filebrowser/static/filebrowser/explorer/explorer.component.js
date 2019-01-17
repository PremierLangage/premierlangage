import * as filters from '../filters.js'

angular.module('editor')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: { resources: '<' },
    controller: ExplorerComponent,
    controllerAs: 'explorer',
});

function ExplorerComponent(EditorService, MonacoService) {
    const explorer = this;
    /** adds new file in the folder 'resource' */
    this.addFile = function (resource, event) {
        event.stopPropagation();
        EditorService.addFile(resource);
    };
    
    /** adds new folder in the folder 'resource' */
    this.addFolder = function (resource, event) {
        event.stopPropagation();
        EditorService.addFolder(resource);
    };
    
    /** creates or cancels the edition of 'document' depending to 'event' */
    this.endEditing = function (resource, event) {
        if (event.keyCode === 13) { // enter
            EditorService.createResource(resource).then(() => {
                explorer.select(resource);
            });
        }
        else if (event.keyCode === 27) { // esc
            EditorService.cancelEdition(document);
        }
    };
    
    /** checks if 'document' is the selected document */
    this.isSelection = function (document) {
        return MonacoService.isSelection(document);
    };
    
    /** shows the options of the document */
    this.showOptions = function (document, menu, event) {
        event.preventDefault();
        if (document.hasOption) {
            menu.open();
        }
    };
    
    /** moves the document 'src' to 'dst' */
    this.moveResource = function(src, dst) {
        EditorService.moveResource(src, dst).catch(error => {
            EditorService.log(error);
        });
    };
    
    this.reloadPLTP = function(resource, event) {
        event.stopPropagation();
        MonacoService.reloadPLTP(resource);
    };
    
    /** sets 'resource' has the selected resource and displays it content if needed */
    this.select = function(resource) {
        MonacoService.openResource(resource);
    };
    
    /** starts renaming 'document' */
    this.rename = function(resource, event) {
        event.stopPropagation();
        EditorService.renameResource(resource);
    };
        
    this.delete = function (resource, event) {
        event.stopPropagation();
        EditorService.confirm('Would you like to delete "' + resource.name + '"?').then(function () {
            EditorService.deleteResource(resource);
        });
    };
    
    this.testPL = function(resource, event) {
        event.stopPropagation();
        MonacoService.testPL(resource);
    };
    
    this.loadPLTP = function(resource, event) {
        event.stopPropagation();
        MonacoService.loadPLTP(resource);
    };

    this.options = [
        { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.testPL },
        { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.loadPLTP },
        { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.reloadPLTP },
        { icon: 'far fa-file', label: 'New File', enabled: filters.canAddFile, action: this.addFile },
        { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddFile, action: this.addFolder },
        { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: this.renameResource },
        { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: this.delete },
        { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.readonly, action: function () { } },
    ];
}
