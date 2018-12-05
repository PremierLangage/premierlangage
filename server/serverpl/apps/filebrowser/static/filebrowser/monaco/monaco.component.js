'use strict';

import * as filters from '../filters.js';

angular.module('editor').component('monaco', {
    templateUrl: '/static/filebrowser/monaco/monaco.component.html',
    controllerAs: 'monaco',
    controller: MonacoComponent
});

function MonacoComponent (MonacoService, EditorService) {
    const monaco = this;

    monaco.runningTask = function() {
        return MonacoService.runningTask;
    }

    monaco.canPreviewSelection = function() {
        return filters.canBePreviewed(MonacoService.selection);
    }

    monaco.documents = function() {
        return MonacoService.documents;
    }

    monaco.isEmpty = function() {
        return MonacoService.isEmpty();
    }

    monaco.isSelection = function(document) {
        return MonacoService.isSelection(document);
    };

    monaco.preview = function() {
        return MonacoService.selection && MonacoService.selection.preview;
    } 

    monaco.previewSelection = function() {
        MonacoService.previewPL(MonacoService.selection).catch((error) => {
            EditorService.log(error);
        });
    }

    monaco.removeDocument = function(document) {
        if (document.changed) {
            EditorService.confirm('You will lose any unsaved changes !').then(() => {
                MonacoService.removeDocument(document);
            });
        } else {
            MonacoService.removeDocument(document);
        }
    }

    monaco.selectDocument = function(document) {
        MonacoService.openAndSelect(document);
    }

    MonacoService.onSelectionChanged = function() {
        monaco.changed = !monaco.changed;
    }
}