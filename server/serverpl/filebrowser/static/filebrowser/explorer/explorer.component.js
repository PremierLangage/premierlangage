import * as filters from '../filters.js'

angular.module('editor')
.component('explorer', {
    templateUrl: '/static/filebrowser/explorer/explorer.component.html',
    bindings: { resources: '<' },
    controller: ExplorerComponent,
    controllerAs: 'explorer',
});

function ExplorerComponent(EditorService, MonacoService, $scope) {
    const explorer = this;

    /** adds new file in the folder 'resource' */
    this.addFile = function (resource, e) {
        e.stopPropagation();
        EditorService.addFile(resource);
    };
    
    /** adds new folder in the folder 'resource' */
    this.addFolder = function (resource, e) {
        e.stopPropagation();
        EditorService.addFolder(resource);
    };
    
    /** creates or cancels the edition of 'resource' depending to 'e' */
    this.endEditing = function (resource, e) {
        if (e.keyCode === 13) { // enter
            EditorService.createResource(resource).then(() => {
                explorer.select(resource);
            }).catch(error => {
                EditorService.logError(error);
            });
        }
        else if (e.keyCode === 27) { // esc
            EditorService.cancelEdition(resource);
        }
    };
    
    /** checks if 'resource' is the selected resource */
    this.isSelection = function (resource) {
        return MonacoService.isSelection(resource);
    };
    
    /** moves the resource 'src' to 'dst' */
    this.moveResource = function(src, dst) {
        EditorService.moveResource(src, dst).catch(error => {
            EditorService.log(error);
        });
    };
    
    this.reloadPLTP = function(resource, e) {
        e.stopPropagation();
        MonacoService.reloadPLTP(resource);
    };
    
    /** sets 'resource' has the selected resource and displays it content if needed */
    this.select = function(resource) {
        MonacoService.openResource(resource).catch(null);
    };
    
    /** starts renaming 'resource' */
    this.rename = function(resource, e) {
        e.stopPropagation();
        EditorService.renameResource(resource);
    };
        
    this.delete = function(resource, e) {
        e.stopPropagation();
        EditorService.askConfirm({
            title: 'Would you like to delete "' + resource.name + '"?',
            targetEvent: e,
            confirmed: function () {
                EditorService.deleteResource(resource).then(() => {
                    MonacoService.closeResource(resource);
                });
            }
        });
    };
    
    this.testPL = function(resource, e) {
        e.stopPropagation();
        MonacoService.testPL(resource);
    };
    
    this.loadPLTP = function(resource, e) {
        e.stopPropagation();
        MonacoService.loadPLTP(resource);
    };

    this.options = [
        { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.testPL },
        { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.loadPLTP },
        { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.reloadPLTP },
        { icon: 'far fa-file', label: 'New File', enabled: filters.canAddFile, action: this.addFile },
        { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddFile, action: this.addFolder },
        { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: this.rename },
        { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: this.delete },
        { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.readonly, action: function () { } },
    ];
}
