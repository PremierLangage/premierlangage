import * as monacoConfig from './config.js';

angular.module('editor')
.service('MonacoService', function(EditorService, $http, toastr) {
    const instance = this;

    this.editor;
    this.selection;
    this.documents = [];
    this.onSelectionChanged;
    this.runningTask = false;

    monacoConfig.config((e) => { 
        e.onDidSaveCommand = function() {
            instance.saveSelection();
        }
        
        e.onDidOpenPLReference = function(path) {
        }

        e.onDidContentChanged = function(content) {
            if (instance.selection) {
                instance.selection.changed = true;
                instance.selection.content = content;
                instance.emitOnSelectionChanged();
            }
        }

        e.setModel(null);     
        instance.editor = e;
    });

    this.isSelection = function(document) {
        return this.selection && document.path === this.selection.path;
    }

    this.isEmpty = function() {
        return instance.documents.length === 0;
    }

    this.emitOnSelectionChanged = function() {
        if (instance.onSelectionChanged) {
            instance.onSelectionChanged();
        }
    }
    
    this.loadPLTP = function(document) {
        instance.runningTask = true;
        $http({
            method: 'GET',
            url: 'option',
            params: { name: 'load_pltp', path: document.path }
        }).then(response => {
            EditorService.log(response.data);
            instance.runningTask = false;
        }).catch(error => {
            EditorService.log(error.data);
            instance.runningTask = false;
        });
    }

    this.openAndSelect = function(document) {
        if (document.type !== 'file') {
            instance.selection = document;
            return;  
        }

        EditorService.openDocument(document).then(item => {
            if (!item.language) {
                instance.editor.findLanguage(item);
            }
            
            if (instance.selection && instance.selection.type === 'file') {
                instance.selection.state = instance.editor.saveViewState();
            }
            
            if (item.model) {
                instance.editor.restoreViewState(item.state);
            } else {
                item.model = monaco.editor.createModel(item.content, item.language);
            }

            instance.editor.setModel(item.model);
            instance.editor.focus();
            instance.editor.updateOptions({ readOnly: !item.write });
            instance.selection = item;
            instance.pushDocument(document);
            instance.emitOnSelectionChanged();
        }).catch(error => {
            toastr.error(error, 'error');
        });
    }
   
    this.previewPL = function(document) {
        return new Promise((resolve, reject) => {
            if (!document) {
                reject();
                return;
            }
            instance.runningTask = true;
            instance.emitOnSelectionChanged();
            $http({
                url: "option",
                method: 'POST',
                data: {
                    name: 'preview_pl', 
                    content: document.content,
                    path: document.path,
                    requested_action: "preview",
                },
                contentType: 'application/json;charset=UTF-8',
            }).then(response => {
                instance.runningTask = false;
                document.preview = response.data.preview;
                resolve(document);
            }).catch(error => {
                instance.runningTask = false;
                document.preview = error.data;
                reject(error.data);
            });
        });
    }

    /** pushs the documents to the opened documents list */
    this.pushDocument = function(document) {
        if (!instance.documents.find(item => item.path === document.path)) {
            instance.documents.push(document);
        }
    }

    /** 
     * removes the document from the opened documents list 
     * and sets select the first document of the list as the new selected.
    */
    this.removeDocument = function(document) {
        instance.documents = instance.documents.filter(item => item.path !== document.path);
        instance.selection = undefined;

        if (!instance.isEmpty()) {
            instance.openAndSelect(instance.documents[0]);
        }
        
        document.model.dispose();
        document.model = undefined;
        document.preview = undefined;
        document.state = undefined;
        if (!instance.selection) {
            instance.editor.setModel(undefined);
        }
    }
    
    this.saveSelection = function() {
        if (instance.selection) {
            EditorService.saveDocument(instance.selection).then(() => {
                toastr.success('changes saved !', 'info');
                instance.selection.changed = false;
            }).catch(error => {
                toastr.success(error, 'error');
            });
        }
    }
    
    this.reloadPLTP = function(document) {
        EditorService.openDialog('pltp-reload.template.html').then(function(scope) {
            instance.runningTask = true;
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "reload_pltp",
                    path: document.path,
                    activity_id: scope.activity_id,
                }
            }).then(response => {
                EditorService.log(response.data);
                instance.runningTask = false;
            }).catch((error) => {
                EditorService.log(error.data);
                instance.runningTask = false;
            });
        });
    }

    this.testPL = function(document) {
        window.open('option?name=test_pl&path=' +  document.path, "_blank");
    }
});