import * as filters from './app.filters.js';

angular.module('app')
.service('AppService', function($http, $mdDialog) {
    const service = this;
    function GitController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
    
        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.ok = function() {
            $mdDialog.hide($scope);
        }
    }
    
    function optionGitClone(document) {
        $mdDialog.show({
            controller: GitController,
            templateUrl: 'git-clone.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
          }).then(function(scope) {
            if (scope.url) {
                $http({
                    method: 'POST',
                    url: 'option',
                    data: {
                        name: "git_clone",
                        path: document.path,
                        url: scope.url,
                        username: scope.username ? scope.username : '',
                        password: scope.password ? scope.password : '',
                        destination: scope.destination ? scope.destination : '',
                    }
                }).then(response => {
                    service.documents = response.data;
                    for (let item of service.documents) {
                        loadOption(item);
                    }
                }).catch(error => {
                    console.log('error: ', error);
                });
            }
          });
    }

    function optionGitPush(document) {
        $mdDialog.show({
            controller: GitController,
            templateUrl: 'git-command.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
          }).then(function(scope) {
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_push",
                    path: document.path,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                }
            }).then(() => {
                alert('OK');
            }).catch(error => {
                alert('error');
                console.log('error: ', error);
            });
          });
    }
    
    function optionGitPull(document) {
        $mdDialog.show({
            controller: GitController,
            templateUrl: 'git-command.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
          }).then(function(scope) {
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_pull",
                    path: document.path,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                }
            }).then(response => {
                service.documents = response.data;
                for (let item of service.documents) {
                    loadOption(item);
                }
                alert('OK');
            }).catch(error => {
                alert('error');
                console.log('error: ', error);
            });
          });
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
  
    service.documents = [];
    service.openedDocuments = [];


    service.testPL = function(document) {
        window.open('option?name=test_pl&path=' +  document.path, "_blank");
    }

    service.loadPLTP = function(document) {
        $http({
            method: 'GET',
            url: 'option',
            params: { name: 'load_pltp', path: document.path }
        }).then(response => {
            alert('success :');
        }).catch(error => {
        });
    }

    service.reloadPLTP = function(document) {
        alert('reload ' + document.name);
    }

    service.addFile = function(document) {
        if (document.children.find(child => child.editing)) {
            return false;
        }

        document.expanded = true;
        document.children = document.children || [];
        document.children.push({
            ...document,
            editing: true,
            name: '',
            type: 'file',
            icon: 'fas fa-file',
            content: '',
            children: [],
            parent: document.path,
            __parent__: document,
        });
        return true;
    }

    service.addFolder = function(document) {
        if (document.children.find(child => child.editing))
            return false;

        service.selectDocument(document);
        document.expanded = true;
        document.children = document.children || [];
        document.children.push({
            ...document,
            editing: true,
            name: '',
            type: 'folder',
            icon: 'fas fa-folder',
            children: [],            
            parent: document.path,
            __parent__: document,
        });
        return true;
    }
    
    service.renameDocument = function(document) {
        document.__lastname___ = document.name;
        document.__parent__ = service.findDocument(document.parent);
        document.editing = true;
    }

    service.createDocument = function(document) {
        return new Promise((resolve, reject) => {
            if (document.__submiting__) {
                reject("en attente d'une réponse du serveur")
                return;
            }
            document.__submiting__ = true;
            if (!document.name) {
                reject('document name is required');
                return;
            }
            if (document.__parent__.children.find(it => it.name === document.name && !it.editing)) {
                reject('document name already exists');
                return;
            }

            let data = { 
                name:'create_document', 
                path: document.path + '/' + document.name, 
                content: document.content,
                type: document.type
            };

            if (document.__lastname___) {
                data.name = "rename_document";
                data.path = document.path;
                data.target = document.name;
                delete data.content;
                delete data.type;
            }

            $http({
                method: 'POST',
                url: 'option',
                data: data
            }).then(response => {
                document.path += '/' + document.name;
                if (response.data) {
                    document.path = response.data.path;
                }
                document.icon = response.data.icon;
                loadOption(document);
                delete document.editing;
                delete document.__parent__;
                delete document.__submiting__;
                delete document.__lastname___;
                resolve(response);
            }).catch(error => {
                delete document.__submiting__;
                reject(error);
            });
        });
    }

    service.cancelDocument = function(document) {
        if (document.__lastname___) {
            document.name = document.__lastname___;        
            delete document.__lastname___;
        } else {
            document.path += '/' + document.name;
            service.deleteDocument(document);
        }

        delete document.editing;                
        delete document.__parent__;
        delete document.__submiting__;
        delete document.__lastname___;
    }

    service.deleteDocument = function(document) {
        function recursive_remove(items) {
            if (!items) {
                return;
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i].path.endsWith(document.path)) {
                    if (service.editorSelection && service.editorSelection.path === document.path) {
                        service.removeDocument(document);
                    }
                    items.splice(i, 1);
                    return;
                } else {
                    recursive_remove(items[i].children);
                }
            }
        }
        return new Promise((resolve, reject) => {
            $http({
                method: 'POST',
                url: 'option',
                data: { 
                    name:'delete_document', 
                    path: document.path
                }
            }).then(response => {
                recursive_remove(service.documents);
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
        
    }

    service.selectDocument = function(item) {
        item.expanded = !item.expanded;
        service.explorerSelection = item;
        if (item.type === 'file') {
            service.openFile(item);
        }
    };

    service.moveDocument = function(from, to) {
        if (from === to) {
            return;
        }
        alert('TODO NOT IMPLEMENTED');
    }

    service.openFile = function(document) {
        service.editorSelection = document;
        if (!service.openedDocuments.find(item => item.path === document.path)) {
            service.openedDocuments.push(document);
        }

        if (!document.loaded) {
            document.loaded = true;
            $http({
                url: "option",
                method: 'GET',
                params: { name: 'get_document', path: document.path }
            }).then(response => {
                document.content = response.data.content;
                service.emitDocumentSelected(document);
            }).catch(error => {
                console.log(error);
            });
        } else {
            service.emitDocumentSelected(document);
        }
    }

    service.previewPL = function(path) {
        const document = service.findDocument(path);   
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
            document.preview = response.data.preview;
            service.emitPreviewEvent(document);
        }).catch(error => {
            document.preview = error.data;
            service.emitPreviewEvent(document);
        });
    }

    /**
     * Removes the given document from the loaded documents list.
     * @param document the document to remove.
     */
    service.removeDocument = function(document) {
        service.openedDocuments = service.openedDocuments.filter(it => it.path !== document.path);
        service.editorSelection = undefined;
        service.emitDocumentRemoved(document);

        if (service.documents.length > 0) {
            service.editorSelection = service.documents[0];
            service.emitDocumentSelected(service.editorSelection);
        }

        if (service.explorerSelection && service.explorerSelection.path === document.path) {
            service.explorerSelection = undefined;
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

    service.saveDocument = function() {
        if (service.editorSelection) {
            const doc = service.editorSelection;
            service.editorSelection.changed = false;
            $http({
                method: 'POST',
                url: 'option',
                data: { name:'update_document', path: doc.path, content: doc.content }
            }).then(function() {
                alert('success')
            }).catch(error => {
                console.log(error);
            });
        }
    }

    service.loadExplorer = function(completion) {
        $http({
            url: "option",
            method: 'GET',
            params: { name: 'get_documents' }
        }).then(response => {
            service.documents = response.data;
            for (let item of service.documents) {
                loadOption(item);
            }
            if (completion != null) {
                completion();
            }
        }).catch(error => {
            if (completion != null) {
                completion(error);
            }
        });
    }

    service.findDocument = function(path) {
        path = path.trim();
        function recursive_search(source) {
            if (source.path.endsWith(path)) {
                return source;
            }

            if (source.children) {
                let result;
                for (const root of source.children) {
                    result = recursive_search(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        }

        for (const root of service.documents) {
            const document = recursive_search(root);
            if (document) {
                return document;
            }
        }
        return null;
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

    service.emitPreviewEvent = function(document) {
        if (service.onPreviewEvent) {
            service.onPreviewEvent(document);
        }
    }
    
});