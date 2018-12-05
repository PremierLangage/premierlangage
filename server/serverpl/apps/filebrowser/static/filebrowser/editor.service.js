import * as filters from './filters.js';

angular.module('editor')
.service('EditorService', function($http, $mdDialog, $mdToast) {
    const instance = this;

    instance.documents = [];
    instance.runningTask = false;
    instance.gitClone = gitClone;
    instance.logs = [];
    instance.onLogAdded;

    const options = [
        { label: 'Git Clone', icon: 'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isHome], action: gitClone},
        { label: 'Git Push', icon:'fas fa-cloud-upload-alt', filters: [filters.canWrite, filters.isInRepo], action: gitPush},
        { label: 'Git Pull', icon:'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isInRepo], action: gitPull},
        { label: 'Git Status', icon:'fas fa-info-circle', filters: [filters.canWrite, filters.isInRepo], action: gitStatus},
        { label: 'Git List Branch', icon:'fas fa-list-ul', filters: [filters.canWrite, filters.isInRepo], action: gitListBranch},
        { label: 'Git Change Branch', icon:'fas fa-code-branch', filters: [filters.canWrite, filters.isInRepo], action: gitChangeBranch},
    
        { label: 'Git Add', icon:'fas fa-plus', filters: [filters.canWrite, filters.isInRepo], action: gitAdd},
        { label: 'Git Commit', icon:'fas fa-edit', filters: [filters.canWrite, filters.isInRepo], action: gitCommit},
        { label: 'Git Reset', icon:'fas fa-undo', filters: [filters.canWrite, filters.isInRepo], action: gitReset},
        { label: 'Git Checkout', icon:'fas fa-eraser', filters: [filters.canWrite, filters.isInRepo], action: gitCheckout},  
    ];

    function Dialog($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    
        $scope.ok = function() {
            $mdDialog.hide($scope);
        }
    }
    
    function gitClone(doc) {
        $mdDialog.show({
            controller: Dialog,
            templateUrl: 'git-clone.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
            }).then(function(scope) {
                if (scope.url) {
                    instance.runningTask = true;
                    $http({
                        method: 'POST',
                        url: 'option',
                        data: {
                            name: "git_clone",
                            path: doc.path,
                            url: scope.url,
                            username: scope.username ? scope.username : '',
                            password: scope.password ? scope.password : '',
                            destination: scope.destination ? scope.destination : '',
                        }
                    }).then(response => {
                        instance.documents = response.data;
                        for (let item of instance.documents) {
                            loadOption(item);
                        }
                        instance.documents[0].expanded = true;
                        instance.makeToast(scope.url + ' cloned !');
                        instance.runningTask = false;
                    }).catch((error) => {
                        instance.runningTask = false;
                        instance.log('<span style="color: red;">Git clone failed: ' + error.data + '</span>');
                    });
                }
        });
    }
    
    function gitPush(doc) {
        $mdDialog.show({
            controller: Dialog,
            templateUrl: 'git-command.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
            }).then(function(scope) {
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_push",
                    path: doc.path,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                }
            }).then(() => {
                instance.makeToast('Git Push OK !');
                instance.runningTask = false;
            }).catch(error => {
                instance.runningTask = false;
                instance.log('<span style="color: red;">Git push failed: ' + error.data + '</span>');
            });
        });
    }
    
    function gitPull(doc) {
        $mdDialog.show({
            controller: Dialog,
            templateUrl: 'git-command.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose:true
            }).then(function(scope) {
                instance.runningTask = true;
                $http({
                    method: 'POST',
                    url: 'option',
                    data: {
                        name: "git_pull",
                        path: doc.path,
                        username: scope.username ? scope.username : '',
                        password: scope.password ? scope.password : '',
                    }
                }).then(response => {
                    instance.documents = response.data;
                    for (let item of instance.documents) {
                        loadOption(item);
                    }
                    instance.documents[0].expanded = true;
                    instance.makeToast('Git Pull OK !');
                    instance.runningTask = false;
                }).catch(error => {
                    instance.runningTask = false;
                    instance.log('<span style="color: red;">Git pull failed: ' + error.data + '</span>');
                });
            });
    }
    
    function gitStatus(doc) {
        instance.runningTask = true;
        $http({
            method: 'GET',
            url: 'option',
            params: {
                name: "git_status",
                path: doc.path,
            }
        }).then(response => {
            instance.log(response.data);
            instance.runningTask = false;
        }).catch(error => {
            instance.runningTask = false;
            console.log(error)
            instance.log('<span style="color: red;">Git status failed: ' + error.data + '</span>');
        });
    }
    
    function gitListBranch(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }
    
    function gitChangeBranch(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }
    
    function gitAdd(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }

    function gitCommit(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }
    
    function gitReset(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }
    
    function gitCheckout(doc) {
        instance.makeToast('TODO NOT IMPLEMENTED');
    }

    
    function loadOption(document) {
        document['options'] = options.filter(option => {
            for (const predicate of option.filters) {
                if (!predicate(document)) {
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

    function addDocument(document, type) {
        if (document.children.find(item => item.editing)) {
            return false;
        }
        document.expanded = true;
        document.children = document.children || [];
        document.children.push({
            ...document,
            editing: true,
            name: '',
            type: type,
            icon: 'fas fa-' + type,
            children: [],            
            parent: document.path,
            __parent__: document,
        });
        return true;
    }

    instance.log = function(message) {
        instance.logs.push(message);
        if (instance.onLogAdded) {
            instance.onLogAdded();
        }
    }

    instance.clearLogs = function() {
        instance.logs = [];
    }

    /** 
     * adds new file document into 'document' 
     * only if 'document' does not contains another document
     * that is still editing.
     * @param {any} document The document
     * @returns {boolean} true if a file is added false otherwise
     * */
    instance.addFile = function(document) {
        return addDocument(document, 'file');
    }

    /** 
     * adds new folder document into 'document' 
     * only if 'document' does not contains another document
     * that is still editing.
     * @param {any} document The document
     * @returns {boolean} true if a folder is added false otherwise
     * */
    instance.addFolder = function(document) {
        return addDocument(document, 'folder');
    }

    /** stops editing 'document' and remove it from the documents list */
    instance.cancelEdition = function(document) {
        if (document.__name__) {
            document.name = document.__name__;        
            delete document.__name__;
        } else {
            document.path += '/' + document.name;
            instance.deleteDocument(document);
        }
        delete document.editing;                
        delete document.__parent__;
        delete document.__submiting__;
        delete document.__name__;
    }

    /** saves the state of 'document' before editing the name */
    instance.renameDocument = function(document) {
        document.__name__ = document.name;
        document.__parent__ = instance.findDocument(document.parent);
        document.editing = true;
    }

    /** creates or renames 'document'  */
    instance.createDocument = function(document) {
        return new Promise((resolve, reject) => {
            if (document.__submiting__) {
                reject("loading for server response...")
                return;
            }
            document.__submiting__ = true;
            if (!document.name) {
                reject('document name is required !');
                return;
            }
            if (document.__parent__.children.find(it => it.name === document.name && !it.editing)) {
                reject('document name already exists !');
                return;
            }

            let data = { 
                name:'create_document', 
                path: document.path + '/' + document.name, 
                content: document.content,
                type: document.type
            };

            if (document.__name__) {
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
                document.path = response.data.path;
                document.icon = response.data.icon;
                loadOption(document);
                delete document.editing;
                delete document.__parent__;
                delete document.__submiting__;
                delete document.__name__;
                resolve(response.data);
            }).catch(error => {
                delete document.__submiting__;
                reject(error.data || error);
            });
        });
    }

    /** removes 'document' from the documents list and the server */
    instance.deleteDocument = function(document) {
        function recursive_remove(items) {
            if (!items) {
                return;
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i].path == document.path) {
                    items.splice(i, 1);
                    return;
                } else {
                    recursive_remove(items[i].children);
                }
            }
        }

        return new Promise((resolve, reject) => {
            if (document.editing) {
                recursive_remove(instance.documents);
                resolve();
                return;
            }
            if (!document) {
                reject('document undefined');
                return;
            }
            if (!filters.canWrite(document) || filters.isRoot(document)) {
                reject('permission denied');
                return;
            }
            $http({
                method: 'POST',
                url: 'option',
                data: { 
                    name:'delete_document', 
                    path: document.path
                }
            }).then(() => {
                recursive_remove(instance.documents);
                resolve();
            }).catch(error => {
                reject(error.data);
            });
        });
        
    }

    /** move document 'src' to 'dst'  */
    instance.moveDocument = function(src, dst) {
        return new Promise((resolve, reject) => {
            if (src === dst) {
                reject('cannot move the document to the same path');
                return;
            }

            const srcdoc = instance.findDocument(src);
            const dstdoc = instance.findDocument(dst);
            if (!srcdoc || !dstdoc) {
                reject('cannot move the document');
                return;
            }

            if (filters.isRoot(srcdoc)) {
                reject('cannot move a root document');
                return;
            }

            if (!filters.canWrite(dstdoc)) {
                reject('permission denied');
                return;
            }

            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: 'move_document',
                    path: src,
                    dst: dst
                }
            }).then((response) => {
                const parent = instance.findDocument(srcdoc.parent);
                parent.children = parent.children.filter(item => item.path !== srcdoc.path);
                srcdoc.parent = dst;
                srcdoc.path = response.data.path;
                dstdoc.children.push(srcdoc);
                dstdoc.children.sort((a, b) => {
                    if (a.type === b.type) { 
                      return a.name < b.name ? -1 : 1;
                    }
                    return a.type === 'folder' ? -1 : 1;
                });
                dstdoc.expanded = true;
                resolve();
            }).catch(error => {
                reject(error.data);
            });
        });    
    }

    /** 
     * saves the content of the document on the server. 
     * @param {any} document The document
     * @returns {Promise} Promise object represents the document itself
    */
    instance.saveDocument = function(document) {
        return new Promise((resolve, reject) => {
            if (!document) {
                reject('the document does not exist');
                return;
            }
            
            $http({
                method: 'POST',
                url: 'option',
                data: { name: 'update_document', path: document.path, content: document.content }
            }).then(() => {
                resolve(document);
            }).catch(error => {
                reject(error.data);
            });
        });
    }

    /** 
     * loads the content of the document from the server.
     * @param {any} document The document
     * @returns {Promise} Promise object represents the document itself
     * */
    instance.openDocument = function(document) {
        return new Promise((resolve, reject) => {
            if (!document) {
                reject('the document does not exists');
                return;
            }
            
            if (!document.__loaded__) {
                $http({
                    url: "option",
                    method: 'GET',
                    params: { name: 'get_document', path: document.path }
                }).then(response => {
                    document.content = response.data.content;
                    document.__loaded__ = true;
                    resolve(document);
                }).catch(error => {
                    reject(error.data);
                });
            } else {
                resolve(document);
            }
        });  
    }

    /**
     * loads all the documents from the server.
     * @param completion A callback function invoked with the documents
     */
    instance.loadDocuments = function(completion) {
        instance.runningTask = true;
        $http({
            url: "option",
            method: 'GET',
            params: { name: 'get_documents' }
        }).then(response => {
            instance.documents = response.data;
            for (let item of instance.documents) {
                loadOption(item);
            }
            instance.makeReadOnly(instance.documents[1]);
            instance.runningTask = false;
            if (completion != null) {
                completion(instance.documents);
            }
        }).catch(error => {
            instance.runningTask = false;
            if (completion != null) {
                completion(error);
            }
        });
    }

    instance.makeReadOnly = function(document) {
        function readonly(doc) {
            doc.write = false;
            if (doc.children) {
                for (const c of doc.children)
                readonly(c);
            }
        }
        readonly(document);
    }

    /** 
     * finds the document with the given path 
     * @param {string} path The path of the document to find
     * @returns {any} the document or null
     * */
    instance.findDocument = function(path) {
        path = path.trim();
        
        function recursiveSearch(document) {
            if (document.path === path) {
                return document;
            }
            if (document.children) {
                let result;
                for (const root of document.children) {
                    result = recursiveSearch(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        }

        for (const root of instance.documents) {
            const document = recursiveSearch(root);
            if (document) {
                return document;
            }
        }
        return null;
    }

        /** 
     * finds the documents meeting the predicate 
     * @param predicate Predicate function to test for each document
     * @returns {Array} An array of documents
     * */
    instance.findDocuments = function(predicate) {
        const result = [];
        instance.runningTask = true;
        function recursiveSearch(document) {
            if (predicate(document)) {
                result.push(document);
            }
            if (document.children) {
                let result;
                for (const root of document.children) {
                    result = recursiveSearch(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        }

        for (const root of instance.documents) {
           recursiveSearch(root);
        }
        instance.runningTask = false;
        return result;
    }


    instance.makeToast = function(message, duration=3000) {
        $mdToast.show(
            $mdToast.simple()
              .textContent(message)
              .position('top right')
              .hideDelay(duration)
        );
    }

    instance.confirm = function(title) {
        const confirm = $mdDialog.confirm()
        .title(title)
        .ok('YES')
        .cancel('CANCEL')
        .targetEvent(event);
        return $mdDialog.show(confirm);
    }
});