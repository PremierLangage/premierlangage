'use strict';

import * as configuration from './config.js';

angular.module('editor').service('MonacoService', MonacoService);

function MonacoService(EditorService, $http, toastr) {
    
    const instance = this;
    this.editor;
    this.diffEditor;
    this.selection;
    this.resources = [];
    this.runningTask = false;
    this.editorChanged;

    this.codeEditorNode;
    this.diffEditorNode;
    this.imageEditorNode;
    
    this.previewFunctions = {
        'pl': previewPL,
        //'pltp': previewPL,
        'md': previewMarkdown
    }
 

    this.loadEditor = function() {
        instance.codeEditorNode = $('.monaco__editor');
        instance.diffEditorNode = $('.monaco__editor--diff');
        instance.imageEditorNode = $('.monaco__editor--image');
        instance.previewNode = angular.element(".monaco__preview");

        instance.diffEditorNode.hide();
        instance.imageEditorNode.hide();
       
        configuration.config(instance.codeEditorNode.get(0), instance.diffEditorNode.get(0), (e, d) => { 
            e.onRequestSave = function() {
                instance.saveSelection();
            }
            
            e.onResolveLink = function(path) {
                const r = EditorService.findResourceWithPredicate(res => res.path.endsWith(path));
                if (r) {
                    instance.openResource(r);
                } else {
                    toastr.error('resource not found at ' + path);
                }
            }
    
            e.onDidContentChanged = function(content) {
                if (instance.selection) {
                    instance.selection.changed = true;
                    instance.selection.content = content;
                    instance.emitChanged();
                }
            }
           
            e.setModel(null);     
            instance.editor = e;
            instance.diffEditor = d;
        });
    };


    /** 
     * Removes the resource from the opened resources lists and 
     * select a random one if there is any other or release the editor.
     * @param {Object} resource - the resource to close.
    */
    this.closeResource = function(resource) {
        instance.resources = instance.resources.filter(item => item.path !== resource.path);
        instance.defaultEditor();
        instance.selection = undefined;
        instance.editor.setModel(undefined);
        if (!instance.isEmpty()) {
            instance.openResource(instance.resources[0]);
        }
        if (resource.__monaco_model__) {
            resource.__monaco_model__.dispose();
        }
        resource.__monaco_model__ = undefined;
        resource.__monaco_state__ = undefined;
        resource.preview = undefined;
        resource.diffMode = undefined;
    }

    /** Invokes MonacoService.editorChanged event */
    this.emitChanged = function() {
        if (instance.editorChanged) {
            instance.editorChanged();
        }
    }

    /** 
     * Gets a value indicating whether the selected resource can be previewed 
     * @returns {boolean} true if there is a selected resource and it can be previewed false otherwise 
     * */
    this.hasPreview = function() {
        if (!instance.selection) {
            return false;
        }
        return EditorService.extensionOf(instance.selection) in instance.previewFunctions;
    }

    /** 
     * Gets a value indicating whether there is any opened resource 
     * @returns {boolean} false if there is any opened resource true otherwise
    */
    this.isEmpty = function() {
        return instance.resources.length === 0;
    }

    /** 
     * Gets a value indicating whether the given resource is the selected one 
     * @param {Object} resource - the resource to test.
     * @returns {boolean} true if the resource is the selected one false otherwise
     * */
    this.isSelection = function(resource) {
        return this.selection && resource.path === this.selection.path;
    }

    /** Refresh the layout of monaco editor */
    this.layout = function() {
        if (instance.editor) {
            const m1 = instance.editor.model;  
            instance.editor.setModel(undefined);
            instance.editor.layout();
            instance.editor.setModel(m1);
        }
        if (instance.diffEditor) {
            const m2 = instance.diffEditor.originalEditor.model;
            const m3 = instance.diffEditor.modifiedEditor.model;
            instance.diffEditor.setModel(undefined);
            instance.diffEditor.layout();
            if (m2 && m3) {
                instance.diffEditor.setModel({
                    original: m2,
                    modified: m3,
                });
            }
        }
    }  

    /** 
     * Loads the given pltp resource with a request to the server.
     * @param {Object} resource - the pltp resource.
     * @returns {Promise} Promise resolved with the response of the server or false if cancelled and rejected with an error message
     * */
    this.loadPLTP = function(resource) {
        return new Promise((resolve, reject) => {
            try {
                instance.runningTask = true;
                $http({
                    method: 'GET',
                    url: 'option',
                    params: { name: 'load_pltp', path: resource.path }
                }).then(response => {
                    instance.runningTask = false;
                    resolve(response.data);
                }).catch(error => {
                    instance.runningTask = false;
                    reject(error.data);
                });
            } catch(error) {
                instance.runningTask = false;
                console.error(error);
                reject(error.message);
            }
        });
    }

    this.openEditor = function(resource) {
        instance.defaultEditor();
        if (instance.selection) {
            instance.selection.previewWidth = instance.previewNode.width();
        }
        
        function presentCodeEditor() {
            instance.editor.findLanguage(resource);
            if (instance.selection) {
                instance.selection.__monaco_state__ = instance.editor.saveViewState();
            }
        
            if (resource.__monaco_model__) {
                instance.editor.restoreViewState(resource.__monaco_state__);
            } else {
                resource.__monaco_model__ = monaco.editor.createModel(resource.content, resource.language);
            }
    
            instance.editor.setModel(resource.__monaco_model__);
            instance.editor.focus();
            instance.editor.updateOptions({ readOnly: !resource.write });
    
        }

        function presentImageEditor() {
            instance.codeEditorNode.hide();
            instance.imageEditorNode.show();
        }
        
        if (resource.content) {
            presentCodeEditor();
        }
        else if (resource.image) {
            presentImageEditor();
        }

        if (!instance.resources.find(item => item.path === resource.path)) {
            instance.resources.push(resource);
        }

        if (resource.previewWidth) {
            instance.previewNode.width(resource.previewWidth);
        }
    }
    
    /** 
     * Loads the content of the resource inside the editor if needed.
     * - If the resource is a folder the function will expand the folder.
     * - If the resource is a file the function will open the right editor depending to type of the file.
     * At the end of the function, the resource will be the selected one inside explorer area.
     * @param {Object} resource - the resource to open.
     * @returns {Promise} Promise object resolved with true or rejected with a string error message.
    */
    this.openResource = function(resource) {
        return new Promise((resolve, reject) => {
            try {
                instance.selection = resource;
                if (resource.type === 'folder') {
                    resource.expanded = !resource.expanded;
                    resolve(true);
                } else if (!resource.loaded) {
                    $http({
                        url: "option",
                        method: 'GET',
                        params: { name: 'get_resource', path: resource.path }
                    }).then(response => {
                        resource.loaded = true;
                        const data = response.data;
                        resource.content = data.content
                        resource.image = data.image
                        instance.openEditor(resource);
                        resolve(true);
                    }).catch(error => {
                        reject(error.data);
                    });
                } else {
                    instance.openEditor(resource);
                    resolve(true);
                }
            } catch(error) {
                instance.runningTask = false;
                console.error(error);
                reject(error.message);
            }
        });
    }

    /** 
     * Loads the html preview of the selected resource.
     */
    this.preview = function() {
        return new Promise((resolve, reject) => {
            const extension = EditorService.extensionOf(instance.selection);
            const action = instance.previewFunctions[extension];
            action(instance.selection).then(() => {
                instance.previewNode.css({ width: '50%' });
                resolve(true);
            }).catch(error => {
                reject(error.data || error);
            });
        });
    }
   
    this.hidePreview = function() {
        instance.selection.preview = undefined;
        instance.previewNode.width(10);
    }
    
    /** 
     * Reloads the pltp resource.
     * @param {Object} resource - the pltp resource.
     * @returns {Promise} Promise resolved with the response of the server or false if cancelled and rejected with an error message
     * */
    this.reloadPLTP = function(resource) {
        return new Promise((resolve, reject) => {
            try {
                EditorService.openDialog('pltp-reload.template.html').then(function(scope) {
                    instance.runningTask = true;
                    $http({
                        method: 'POST',
                        url: 'option',
                        data: {
                            name: "reload_pltp",
                            path: resource.path,
                            activity_id: scope.activity_id,
                        }
                    }).then(response => {
                        instance.runningTask = false;
                        resolve(response.data);
                    }).catch((error) => {
                        instance.runningTask = false;
                        reject(error.data);
                    });
                }).catch(() => {
                    resolve(false)
                });
            } catch(error) {
                instance.runningTask = false;
                console.error(error);
                reject(error.message);
            }
        });
    }

    /**
     * Saves the content of the selected resource.
     */
    this.saveSelection = function() {
        const s = instance.selection;
        if (s && s.write && s.type === 'file') {
            EditorService.saveResource(s).then((resource) => {
                toastr.success('saved !');
                resource.changed = false;
            }).catch(error => {
                EditorService.log(error);
            });
        }
    }
    
    this.showDiffEditor = function(content) {
        instance.codeEditorNode.hide();
        instance.diffEditorNode.show();
        instance.selection.diffMode = true;
        instance.diffEditor.setModel({
            original: monaco.editor.createModel(content, instance.selection.language), 
            modified: instance.editor.model
        });
    }

    this.defaultEditor = function() {
        instance.codeEditorNode.show();
        instance.diffEditorNode.hide();
        instance.imageEditorNode.hide();

        if (instance.diffEditor) {
            instance.diffEditor.setModel(undefined);
        }
        
        if (instance.selection) {
            instance.selection.diffMode = undefined;
        }
    }
    
    /** Tests the pl resource in new tab. */
    this.testPL = function(resource) {
        window.open('option?name=test_pl&path=' +  resource.path, "_blank");
    }

    function previewPL(resource) {
        return new Promise((resolve, reject) => {
            instance.runningTask = true;
            $http({
                url: "option",
                method: 'POST',
                data: {
                    name: 'preview_pl', 
                    content: resource.content,
                    path: resource.path,
                    requested_action: "preview",
                },
                contentType: 'application/json;charset=UTF-8',
            }).then(response => {
                instance.runningTask = false;
                resource.preview = response.data.preview;
                resolve(resource);
            }).catch(error => {
                instance.runningTask = false;
                reject(error.data);
            });
        });
    }

    function previewMarkdown(resource) {
        return new Promise((resolve) => {
            resource.preview = markdown.toHTML(resource.content);
            resolve(resource);
        });
    }
}
