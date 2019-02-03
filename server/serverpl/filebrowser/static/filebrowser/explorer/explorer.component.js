'use strict';

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

    /** 
     * adds new file in the folder 'resource'.
     */
    this.addFile = function(resource, e) {
        e.stopPropagation();
        EditorService.addFile(resource);
    };
    
    /** adds new folder in the folder 'resource' */
    this.addFolder = function (resource, e) {
        e.stopPropagation();
        EditorService.addFolder(resource);
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

    /** moves the resource 'src' to 'dst' */
    this.drop = function(src, dst) {
        EditorService.moveResource(src, dst).catch(error => {
            EditorService.log(error);
        });
    };
    
     
    /** Creates or cancels the edition of 'resource' depending to 'e' event */
    this.endEditing = function(resource, e) {
        if (e.keyCode === 13) { // enter
            EditorService.createResource(resource).then(() => {
                explorer.select(resource);
            }).catch(error => {
                EditorService.error(error);
            });
        }
        else if (e.keyCode === 27 || e.type === 'blur') { // esc
            EditorService.cancelEdition(resource);
        }
    }

    /** Checks if 'resource' is the selected resource */
    this.isSelection = function (resource) {
        return MonacoService.isSelection(resource);
    };

    /** Loads the pltp resource */
    this.loadPLTP = function(resource, e) {
        e.stopPropagation();
        EditorService.promise(MonacoService.loadPLTP(resource));
    };

    /** 
     * Sets the resource has the selected one in the editor and try to open the content.
     */
    this.select = function(resource) {
        EditorService.promise(MonacoService.openResource(resource));
    };
    
    /** Starts renaming 'resource' */
    this.rename = function(resource, e) {
        e.stopPropagation();
        EditorService.renameResource(resource);
    };
    
    /** Reloads the pltp resource */
    this.reloadPLTP = function(resource, e) {
        e.stopPropagation();
        EditorService.promise(MonacoService.reloadPLTP(resource));
    };
    
    /** Tests the pl resource in new tab */
    this.testPL = function(resource, e) {
        e.stopPropagation();
        MonacoService.testPL(resource);
    };
    
    /** Opens upload dialog to upload new file into the given resource folder */
    this.upload = function(resource, e) {
        EditorService.promise(EditorService.uploadFile(resource, e));
    }

    this.options = [
        { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.testPL },
        { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.loadPLTP },
        { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.reloadPLTP },
        { icon: 'fas fa-upload', label: 'Upload', enabled: filters.isFolder, action: this.upload },
        { icon: 'far fa-file', label: 'New File', enabled: filters.canAddFile, action: this.addFile },
        { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddFile, action: this.addFolder },
        { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: this.rename },
        { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: this.delete },
        { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.readonly, action: function () { } },
    ];
}
