import * as filters from './pleditor.filters.js';

angular.module('plEditor')
.service('EditorService', function($http) {
 
    function optionTest(document) {
        window.open('api/test_pl/' +  document.path, "_blank");
    }

    function optionLoad(document) {
        $http.get('api/load_pltp/' +  document.path).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    function optionReload(document) {
        alert('reload ' + document.name);
    }

    function optionGitClone(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitPush(document) {
        alert('TODO NOT IMPLEMENTED');
    }
    
    function optionGitPull(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitStatus(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitListBranch(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitChangeBranch(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitAdd(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitCommit(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitReset(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionGitCheckout(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    const OPTIONS = [
        { label: 'Test', icon:'fas fa-check', filters: [filters.canRead, filters.isPl], action: optionTest},
        { label: 'Load', icon:'fas fa-play', filters: [filters.canRead, filters.isPltp], action: optionLoad},
        { label: 'Reload', icon:'fas fa-sync', filters: [filters.canRead, filters.isPltp], action: optionReload},
        
        { label: 'Git Clone', icon: 'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isHome], action: optionGitClone},
        { label: 'Git Push', icon:'fas fa-cloud-upload-alt', filters: [filters.canWrite, filters.isInRepo], action: optionGitPush},
        { label: 'Git Pull', icon:'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isInRepo], action: optionGitPull},
        { label: 'Git Status', icon:'fas fa-info-circle', filters: [filters.canWrite, filters.isInRepo], action: optionGitStatus},
        { label: 'Git List Branch', icon:'fas fa-list-ul', filters: [filters.canWrite, filters.isInRepo], action: optionGitListBranch},
        { label: 'Git Change Branch', icon:'fas fa-code-branch', filters: [filters.canWrite, filters.isInRepo], action: optionGitChangeBranch},

        { label: 'Git Add', icon:'fas fa-plus', filters: [filters.canWrite, filters.isInRepo], action: optionGitAdd},
        { label: 'Git Commit', icon:'fas fa-edit', filters: [filters.canWrite, filters.isInRepo], action: optionGitCommit},
        { label: 'Git Reset', icon:'fas fa-undo', filters: [filters.canWrite, filters.isInRepo], action: optionGitReset},
        { label: 'Git Checkout', icon:'fas fa-eraser', filters: [filters.canWrite, filters.isInRepo], action: optionGitCheckout},  
    ];

    function loadOption(document) {
        document['options'] = OPTIONS.filter(op => {
            for (const filterFunc of op.filters) {
                if (!filterFunc(document)) {
                    return false;
                }
            }
            return true;
        });
        document['hasOption'] = document['options'].length > 0;
        if (document.children) {
            for (let child of document.children) {
                loadOption(child);
            }
        }
    }
  
    let service = this;


    /** an array of the explorer folders and documents */
    service.items = [];

    /** an array of the opened documents */
    service.documents = [];

    service.addFile = function(document) {
        if (document.children.find(child => child.editing))
            return;

        service.selectDocument(document);
        document.expanded = true;
        
        document.children = document.children || [];
        let folder = {
            ...document,
            editing: true,
            name: '',
            type: 'file',
            icon: 'fas fa-file',
            content: '',
            children: [],
        };
        document.children.push(folder);
    };

    service.addFolder = function(document) {
        if (document.children.find(child => child.editing))
            return;

        service.selectDocument(document);
        document.expanded = true;
        document.children = document.children || [];
        let folder = {
            ...document,
            editing: true,
            name: '',
            type: 'folder',
            icon: 'fas fa-folder',
            children: [],
        };
        document.children.push(folder);
    }
    
    service.renameDocument = function(document) {
        document.editing = true;
    }

    service.createDocument = function(document) {
        loadOption(document);
        delete document.editing;
    }

    service.deleteDocument = function(document) {
        function remove(items) {
            if (!items) {
                return;
            }
            
            for (let i = 0; i < items.length; i++) {
                if (items[i].path.endsWith(document.path)) {
                    items.splice(i, 1);
                    return;
                } else {
                    remove(items[i].children);
                }
            }
        }

        remove(service.items);
    }

    service.selectDocument = function(item) {
        item.expanded = !item.expanded;
        service.explorerSelection = item;
        if (item.type === 'file') {
            service.openFile(item);
        }
    };

    service.openFile = function(document) {
        service.editorSelection = document;
        if (!service.documents.find(item => item.path === document.path)) {
            service.documents.push(document);
        }

        if (!document.loaded) {
            document.loaded = true;
            $http.get('api/document/' +  document.path).then(response => {
                document.content = response.data.content;
                service.emitDocumentSelected(document);
            }).catch(error => {
                console.log(error);
            });
        } else {
            service.emitDocumentSelected(document);
        }
    }

    /**
     * Removes the given document from the loaded documents list.
     * @param document the document to remove.
     */
    service.removeDocument = function(document) {
        service.documents = service.documents.filter(it => it.path !== document.path);
        service.editorSelection = undefined;
        service.emitDocumentRemoved(document);

        if (service.documents.length > 0) {
            service.editorSelection = service.documents[0];
            service.emitDocumentSelected(service.editorSelection);
        }

    }

    /***
     * Updates the content of the selected document. (you must call saveState() to persists the modifications).
     * @param the new content of the document.
     */
    service.updateDocument = function(newContent) {
        if (service.editorSelection) {
            service.editorSelection.content = newContent;
            service.editorSelection.changed = true;
        }
    }

    /***
     * Saves the current selected document state. (undo/redo feature of monaco editor) 
     * @param state an object representing the state of the editor.
     * */
    service.saveState = function(state) {
        if (service.editorSelection) {
            service.editorSelection.state = state;
        }
    }

    /***
     * Saves the content of the selected document.
     */
    service.saveDocument = function() {
        if (service.editorSelection) {
            const doc = service.editorSelection;
            service.editorSelection.changed = false;
   
            $http({
                method: 'POST',
                url: 'api/document/',
                data: {path: doc.path, content: doc.content }
            }).then(function() {
                alert('success')
            }).catch(error => {
                console.log(error);
            });
        }
    }

    /*** Loads the content (folders and documents) of the explorer */
    service.loadExplorer = function(completion) {
        $http.get('api/directories').then(response => {
            service.items = response.data;
            for (let item of service.items) {
                loadOption(item);
            }
            if (completion != null) {
                completion(undefined);
            }
        }).catch(error => {
            if (completion != null) {
                completion(error);
            }
        });
    }

    service.findDocument = function(path) {
        path = path.trim();
        function recursive(source) {
            if (source.path.endsWith(path))
                    return source;
            if (source.children) {
                let o;
                for (const child of source.children) {
                    o = recursive(child);
                    if (o)
                        return o;
                }
            }
            return null;
        }
        return recursive(service.items[0]);
    }

    service.moveDocument = function(from, to) {
        if (from === to) {
            return;
        }
        alert('TODO NOT IMPLEMENTED');
    }
  
    service.isEditorSelection = function(document) {
        return service.editorSelection && service.editorSelection.path === document.path;
    }
  
    service.isExplorerSelection = function(item) {
        return service.explorerSelection && service.explorerSelection.path === item.path;
    }
  


    service.emitDocumentRemoved = function(document) {
        if (service.onDocumentRemoved) {
            service.onDocumentRemoved(document);
        }
    }

    service.emitDocumentSelected = function(document) {
        if (service.onDocumentSelected) {
            service.onDocumentSelected(document);
        }
    }

});