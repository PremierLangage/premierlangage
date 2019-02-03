'use strict';

angular.module('editor').component('monaco', {
    templateUrl: '/static/filebrowser/monaco/monaco.component.html',
    controllerAs: 'monaco',
    controller: MonacoComponent
});

function MonacoComponent ($scope, EditorService, MonacoService) {
    const monaco = this;

    monaco.previewNode = angular.element(".monaco__preview");
    monaco.imagezoom = .5;

    /** 
     * Hanldes resource close button click by asking confirmation and closes the resource if confirmed.
     * @param {Object} resource - the resource to close.
     * @param {Object} e - the javascript event object of the click.
    */
    monaco.didTapCloseResource = function(resource, e) {
        if (resource.changed) {
            EditorService.askConfirm({
                title: 'You will lose any unsaved changes, press Ctrl | Cmd + S to save !',
                targetEvent: e,
                confirmed: () => MonacoService.closeResource(resource)
            });
        } else {
            MonacoService.closeResource(resource);
        }
    }

    /**
     * Handles click on resource inside the editor by displaying the content of the resource.
     * @param {Object} resource - the resource to open.
     */
    monaco.didTapOpenResource = function(resource) {
        MonacoService.openResource(resource).catch(error => {
            EditorService.error(error);
        });
    }
    /** Handles hide preview button click */
    monaco.didTapHidePreview = function() {
        MonacoService.hidePreview();
    }

    /** Handles open preview button click */
    monaco.didTapOpenPreview = function() {
        MonacoService.preview().catch(error => {
            EditorService.error(error);
        });
    }
    /** Handles show diff button click */
    monaco.didTapShowDiffEditor = function() {
        EditorService.showDiff(monaco.selection()).then(MonacoService.showDiffEditor);
    }

    /** Handles close diff button click */
    monaco.didTapCloseDiffEditor = function() {
        MonacoService.hideDiffEditor();
    }

    monaco.diffMode = function() {
        return monaco.selection() && monaco.selection().diffMode;
    }

    monaco.diffEditorEnabled = function() {
        const s = monaco.selection()
        return s && s.type === 'file' && !s.diffMode;
    }

    monaco.didTapZoomOutImage = function() {
        if (monaco.imagezoom > .3) {
            monaco.imagezoom -= .05;
        }
    }

    monaco.didTapZoomInImage = function() {
        if (monaco.imagezoom < 2) {
            monaco.imagezoom += .05;
        }
    }

    /** 
     * Gets a value indicating whether the selected resource can be previewed 
     * @returns {boolean} true if there is a selected resource and it can be previewed false otherwise 
     * */
    monaco.hasPreview = function() {
        return MonacoService.hasPreview();
    }

    /** 
     * Gets a value indicating whether there is any opened resource 
     * @returns {boolean} false if there is any opened resource true otherwise
    */
    monaco.isEmpty = function() {
        return MonacoService.isEmpty();
    }

    /** 
     * Gets a value indicating whether the given resource is the selected one 
     * @param {Object} resource - the resource to test.
     * @returns {boolean} true if the resource is the selected one false otherwise
     * */
    monaco.isSelection = function(resource) {
        return MonacoService.isSelection(resource);
    };

    /** 
     * Gets the html string representing the preview of the selected resource 
     * @returns {string} the preview value of the selected resource or undefined
     * */
    monaco.previewHtml = function() {
        if (monaco.selection()) {
            return monaco.selection().preview;
        }
        return undefined;
    } 
    
    /** 
     * Gets the list of the opened resources
     * @returns {Object[]} an array of resources.
     *  */
    monaco.resources = function() {
        return MonacoService.resources;
    }

    /** Gets a value indicating whether a long task is running */
    monaco.runningTask = function() {
        return MonacoService.runningTask;
    }
    
    /** 
     * Gets the selected resource inside the editor 
     * @returns {Object} The selected resource if it exists undefined otherwise.
     * */
    monaco.selection = function() {
        return MonacoService.selection;
    }
  
    monaco.showImageEditor = function() {
        return monaco.selection() && monaco.selection().image;
    }

    MonacoService.loadEditor();

    MonacoService.editorChanged = function() {
        $scope.$apply();
    };

    EditorService.setResizable('.monaco__preview', function(arg) {
        arg.node.style.width = (arg.startWidth + arg.startX - arg.e.clientX) + 'px';
        MonacoService.layout();
    });
}