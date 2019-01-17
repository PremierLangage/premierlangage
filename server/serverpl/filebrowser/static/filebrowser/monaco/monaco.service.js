import * as monacoConfig from './config.js';

angular.module('editor').service('MonacoService', MonacoService);

function MonacoService(EditorService, $http) {
    
    const instance = this;
    this.editor;
    this.selection;
    this.resources = [];
    this.runningTask = false;
    this.resourcesChanged;
    
    this.previewFunctions = {
        'pl': previewPL,
        'pltp': previewPL,
        'md': previewMarkdown
    }
    
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
                instance.emitChanged();
            }
        }
       
        e.setModel(null);     
        instance.editor = e;
    });

    /** 
     * Removes the resource from the opened resources lists and 
     * select a random one if there is any other or release the editor.
     * @param {Object} resource - the resource to close.
    */
    this.closeResource = function(resource) {
        instance.resources = instance.resources.filter(item => item.path !== resource.path);
        instance.selection = undefined;
        instance.editor.setModel(undefined);
        if (!instance.isEmpty()) {
            instance.openResource(instance.resources[0]);
        }
        
        resource.model.dispose();
        resource.model = undefined;
        resource.state = undefined;
        resource.preview = undefined;
    }

    /** Invokes MonacoService.resourcesChanged event */
    this.emitChanged = function() {
        if (instance.resourcesChanged) {
            instance.resourcesChanged();
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
            const model = instance.editor.model;
            instance.editor.setModel(undefined);
            instance.editor.layout();
            instance.editor.setModel(model);
        }
    }  

    /** 
     * Loads the given pltp resource by making a http request.
     * @param {Object} resource - the pltp resource.
     * */
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

    /** 
     * Loads the content of the resource by making a http request if needed and display the resource
     * inside monaco editor.
     * @param {Object} resource - the resource.
    */
    this.openResource = function(resource) {
        return new Promise((resolve, reject) => {
            resource.expanded = !resource.expanded;
            if (resource.type !== 'file') {
                instance.selection = resource;
                resolve(resource);
            } else {
                EditorService.openResource(resource).then(() => {
                    if (!resource.language) {
                        instance.editor.findLanguage(resource);
                    }
            
                    if (instance.selection && instance.selection.type === 'file') {
                        instance.selection.state = instance.editor.saveViewState();
                    }
                
                    if (resource.model) {
                        instance.editor.restoreViewState(resource.state);
                    } else {
                        resource.model = monaco.editor.createModel(resource.content, resource.language);
                    }

                    instance.editor.setModel(resource.model);
                    instance.editor.focus();
                    instance.editor.updateOptions({ readOnly: !resource.write });
                    instance.selection = resource;
                    if (!instance.resources.find(item => item.path === resource.path)) {
                        instance.resources.push(resource);
                    }
                    resolve(resource);
                    this.emitChanged();
                }).catch(error => {
                    EditorService.log(error);
                    reject(error);
                });
            }
        });
    }

    /** 
     * Loads the html preview of the selected resource.
     * @returns {Promise} Promise object that returns resource object if resolved
     * and string representing the error if rejected.
     * */
    this.preview = function() {
        const extension = EditorService.extensionOf(instance.selection);
        const action = instance.previewFunctions[extension];
        return action(instance.selection);
    }
   
    /** 
     * Reloads the given pltp resource by making a http request.
     * @param {Object} resource - the pltp resource.
     * */
    this.reloadPLTP = function(resource) {
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
                EditorService.log(response.data);
                instance.runningTask = false;
            }).catch((error) => {
                EditorService.log(error.data);
                instance.runningTask = false;
            });
        });
    }

    /**
     * Saves the content of the selected resource.
     */
    this.saveSelection = function() {
        if (instance.selection) {
            EditorService.saveResource(instance.selection).then(() => {
                instance.selection.changed = false;
            }).catch(error => {
                EditorService.log(error);
            });
        }
    }
    
    /** Test the pl resource in new tab. */
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
                resource.preview = error.data;
                EditorService.log(resource.preview);
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
