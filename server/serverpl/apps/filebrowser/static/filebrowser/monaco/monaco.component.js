import * as monacoConfig from './config.js';

angular.module('app')
.component('monaco', {
    templateUrl: '/static/filebrowser/monaco/monaco.component.html',
    controller: function(AppService) {
        const instance = this;

        this.selectTab = AppService.selectDocument;
        this.removeTab = AppService.removeDocument;
        this.isSelection = AppService.isEditorSelection;
   
        this.editorWidth = function() {
            return { width: this.preview ? '50%' : '100%' };
        }

        this.openedDocuments = function() { 
            return AppService.openedDocuments; 
        }

        monacoConfig.config(AppService, (e) => { 
            instance.editor = e;
            instance.editor.setModel(null);       
        });
        
        AppService.onDocumentSelected = function(document) {
            instance.preview = document.preview;
            if (!document.language) {
                instance.editor.findLanguage(document);
            }
            AppService.saveState(instance.editor.saveViewState());
            if (document.model) {
                instance.editor.setModel(document.model);
                instance.editor.restoreViewState(document.state);
            } else {
                document.model = monaco.editor.createModel(document.content, document.language, document.path);
                instance.editor.setModel(document.model);
            }
            instance.editor.focus();
        };

        AppService.onDocumentRemoved = function(document) {
            document.model.dispose();
            document.preview = undefined;
            document.model = undefined;
            instance.editor.setModel(undefined);
            instance.preview = undefined;
        }; 
        
        AppService.onPreviewEvent = function(document) {
            instance.preview = document.preview;
        }
    }
});