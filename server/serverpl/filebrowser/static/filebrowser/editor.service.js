import * as filters from './filters.js';

angular.module('editor').service('EditorService', EditorService);

function EditorService($http, $mdDialog) {
    //#region properties
    const instance = this;
    instance.runningTask = false;
    instance.logs = [];
    instance.resources = [];
    instance.onLogAdded;

    //#endregion

    //#region git
    const options = [
        { label: 'Git Clone', icon: 'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isHome], action: gitClone},
        { label: 'Git Push', icon:'fas fa-cloud-upload-alt', filters: [filters.canWrite, filters.isInRepo], action: gitPush},
        { label: 'Git Pull', icon:'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isInRepo], action: gitPull},
        { label: 'Git Status', icon:'fas fa-info-circle', filters: [filters.canWrite, filters.isInRepo], action: gitStatus},
        { label: 'Git Add', icon:'fas fa-plus', filters: [filters.canWrite, filters.isInRepo], action: gitAdd},
        { label: 'Git Commit', icon:'fas fa-edit', filters: [filters.canWrite, filters.isInRepo], action: gitCommit},
    ];

    function gitClone(resource) {
        instance.openDialog('git-clone.template.html')
        .then(function(scope) {
            instance.runningTask = true;
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_clone",
                    path: resource.path,
                    url: scope.url,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                    destination: scope.destination ? scope.destination : '',
                }
            }).then(response => {
                instance.resources = response.data;
                for (let item of instance.resources) {
                    loadOption(item);
                }
                instance.resources[0].expanded = true;
                instance.log(scope.url + ' cloned !');
                instance.runningTask = false;
            }).catch((error) => {
                instance.runningTask = false;
                instance.logError(error.data || error);
            });
        });
    }
    
    function gitPush(resource) {
        instance.openDialog('git-command.template.html')
        .then(function(scope) {
            instance.runningTask = true;
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_push",
                    path: resource.path,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                }
            }).then(() => {
                instance.runningTask = false;
            }).catch(error => {
                instance.runningTask = false;
                instance.logError(error.data || error);
            });
        });
    }
    
    function gitPull(resource) {
        instance.openDialog('git-command.template.html')
        .then(function(scope) {
            instance.runningTask = true;
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_pull",
                    path: resource.path,
                    username: scope.username ? scope.username : '',
                    password: scope.password ? scope.password : '',
                }
            }).then(response => {
                instance.resources = response.data;
                for (let item of instance.resources) {
                    loadOption(item);
                }
                instance.resources[0].expanded = true;
                instance.runningTask = false;
                instance.log('git pull operation succeed on ' + resource.path);
            }).catch(error => {
                instance.runningTask = false;
                instance.logError(error.data || error);
            });
        });
    }
    
    function gitStatus(resource) {
        instance.runningTask = true;
        $http({
            method: 'GET',
            url: 'option',
            params: {
                name: "git_status",
                path: resource.path,
            }
        }).then(response => {
            instance.log(response.data);
            instance.runningTask = false;
        }).catch(error => {
            instance.runningTask = false;
            instance.logError(error.data || error);
        });
    }
    
    function gitAdd(resource) {
        instance.runningTask = true;
        $http({
            method: 'GET',
            url: 'option',
            params: {
                name: "git_add",
                path: resource.path,
            }
        }).then(response => {
            instance.log(response.data);
            instance.runningTask = false;
            instance.log('git add operation succeed on ' + resource.path);
        }).catch(error => {
            instance.runningTask = false;
            instance.logError(error.data || error);
        });
    }

    function gitCommit(resource) {
        instance.openDialog('git-commit.template.html')
        .then(function(scope) {
            instance.runningTask = true;
            $http({
                method: 'POST',
                url: 'option',
                data: {
                    name: "git_commit",
                    path: resource.path,
                    commit: scope.commit,
                }
            }).then(response => {
                instance.log(response.data);
                instance.runningTask = false;
                instance.log('git commit operation succeed on ' + resource.path);
            }).catch(error => {
                instance.runningTask = false;
                instance.logError(error.data || error);
            });
        });
    }
    
    function loadOption(resource) {
        resource['options'] = options.filter(option => {
            for (const predicate of option.filters) {
                if (!predicate(resource)) {
                    return false;
                }
            }
            return true;
        });
        resource['hasOption'] = resource['options'].length > 0;
        if (resource.children) {
            sortResources(resource.children);
            for (let child of resource.children) {
                loadOption(child);
            }
        }
    }
    //#endregion

    //#region resources
    function sortResources(resources) {
        resources.sort((a, b) => {
            if (a.type === b.type) { 
              return a.name < b.name ? -1 : 1;
            }
            return a.type === 'folder' ? -1 : 1;
        });
    }

    function addResource(resource, type) {
        if (!resource || (resource.children && resource.children.find(item => item.editing))) {
            return false;
        }
        resource.expanded = true;
        resource.children = resource.children || [];
        resource.children.push({
            ...resource,
            editing: true,
            name: '',
            type: type,
            icon: 'fas fa-' + type,
            children: [],            
            parent: resource.path,
            __parent__: resource,
        });
        return true;
    }

    instance.addFile = function(resource) {
        return addResource(resource, 'file');
    }

    instance.addFolder = function(resource) {
        return addResource(resource, 'folder');
    }

    instance.cancelEdition = function(resource) {
        if (resource.__name__) {
            resource.name = resource.__name__;        
            delete resource.__name__;
        } else {
            resource.path += '/' + resource.name;
            instance.deleteResource(resource);
        }

        delete resource.editing;                
        delete resource.__name__;
        delete resource.__parent__;
        delete resource.__submiting__;
    }

    instance.renameResource = function(resource) {
        resource.__name__ = resource.name;
        resource.__parent__ = instance.findResource(resource.parent);
        resource.editing = true;
    }

    instance.createResource = function(resource) {
        return new Promise((resolve, reject) => {
            if (resource.__submiting__) {
                reject("waiting for server response...")
                return;
            }
            resource.__submiting__ = true;
            if (!resource.name) {
                delete resource.__submiting__;
                reject('resource name is required !');
                return;
            }
            if (resource.__parent__.children.find(it => it.name === resource.name && !it.editing)) {
                delete resource.__submiting__;
                reject('resource name already exists !');
                return;
            }

            let data = { 
                name:'create_resource', 
                path: resource.path + '/' + resource.name, 
                content: resource.content,
                type: resource.type
            };

            if (resource.__name__) {
                data.name = "rename_resource";
                data.path = resource.path;
                data.target = resource.name;
                delete data.content;
                delete data.type;
            }

            $http({
                method: 'POST',
                url: 'option',
                data: data
            }).then(response => {
                resource.path = response.data.path;
                resource.icon = response.data.icon;
                loadOption(resource);
                delete resource.editing;
                sortResources(resource.__parent__.children);
                delete resource.__parent__;
                delete resource.__submiting__;
                delete resource.__name__;
                resolve(response.data);
            }).catch(error => {
                delete resource.__submiting__;
                reject(error);
            });
        });
    }

    instance.deleteResource = function(resource) {
        function recursive_remove(items) {
            if (!items) {
                return;
            }
            for (let i = 0; i < items.length; i++) {
                if (items[i].path == resource.path) {
                    items.splice(i, 1);
                    return;
                } else {
                    recursive_remove(items[i].children);
                }
            }
        }
        return new Promise((resolve, reject) => {
            if (resource.editing) {
                recursive_remove(instance.resources);
                resolve();
                return;
            }
            if (!resource) {
                reject('resource undefined');
                return;
            }
            if (!filters.canWrite(resource) || filters.isRoot(resource)) {
                reject('permission denied');
                return;
            }
            $http({
                method: 'POST',
                url: 'option',
                data: { 
                    name:'delete_resource', 
                    path: resource.path
                }
            }).then(() => {
                recursive_remove(instance.resources);
                resolve();
            }).catch(error => {
                instance.log(error.data || error);
                reject(error.data || error);
            });
        });
        
    }

    instance.moveResource = function(src, dst) {
        return new Promise((resolve, reject) => {
            if (src === dst) {
                reject('cannot move the resource to the same path');
                return;
            }

            const srcRes = instance.findResource(src);
            const dstRes = instance.findResource(dst);
            if (!srcRes || !dstRes) {
                reject('cannot move the resource');
                return;
            }

            if (filters.isRoot(srcRes)) {
                reject('cannot move a root resource');
                return;
            }

            if (!filters.canWrite(dstRes)) {
                reject('permission denied');
                return;
            }

            instance.askConfirm({
                title: 'Are you sure you want to move this resource?',
                confirmed: () => {
                    $http({
                        method: 'POST',
                        url: 'option',
                        data: {
                            name: 'move_resource',
                            path: src,
                            dst: dst
                        }
                    }).then((response) => {
                        const parent = instance.findResource(srcRes.parent);
                        parent.children = parent.children.filter(item => item.path !== srcRes.path);
                        srcRes.parent = dst;
                        srcRes.path = response.data.path;
                        dstRes.children.push(srcRes);
                        sortResources(dstRes.children);
                        dstRes.expanded = true;
                        resolve();
                    }).catch(error => {
                        reject(error.data);
                    });
                },
                canceled: () => {
                    resolve();
                }
            });
        });    
    }

    instance.saveResource = function(resource) {
        return new Promise((resolve, reject) => {
            if (!resource) {
                reject('the resource does not exists');
                return;
            }        
            $http({
                method: 'POST',
                url: 'option',
                data: { name: 'update_resource', path: resource.path, content: resource.content }
            }).then(() => {
                resolve(resource);
            }).catch(error => {
                reject(error.data);
            });
        });
    }

    instance.openResource = function(resource) {
        return new Promise((resolve, reject) => {
            if (!resource) {
                reject('the resource does not exists');
                return;
            }
            if (!resource.__loaded__) {
                $http({
                    url: "option",
                    method: 'GET',
                    params: { name: 'get_resource', path: resource.path }
                }).then(response => {
                    resource.content = response.data.content;
                    resource.__loaded__ = true;
                    resolve(resource);
                }).catch(error => {
                    reject(error.data);
                });
            } else {
                resolve(resource);
            }
        });  
    }

    instance.loadResources = function(completion) {
        instance.runningTask = true;
        $http({
            url: "option",
            method: 'GET',
            params: { name: 'get_resources' }
        }).then(response => {
            instance.resources = response.data;
            for (let item of instance.resources) {
                loadOption(item);
            }
            instance.runningTask = false;
            if (completion != null) {
                completion(instance.resources);
            }
        }).catch(error => {
            instance.runningTask = false;
            if (completion != null) {
                completion(error);
            }
        });
    }

    instance.findResource = function(path) {
        path = path.trim();
        function recursive(resource) {
            if (resource.path === path) {
                return resource;
            }
            if (resource.children) {
                for (const root of resource.children) {
                    let result = recursive(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }

        for (const root of instance.resources) {
            const resource = recursive(root);
            if (resource) {
                return resource;
            }
        }
        return undefined;
    }

    instance.findResources = function(predicate) {
        const result = [];
        instance.runningTask = true;
        function recursive(resource) {
            if (predicate(resource)) {
                result.push(resource);
            }
            if (resource.children) {
                for (const root of resource.children) {
                    let result = recursive(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }

        for (const root of instance.resources) {
           recursive(root);
        }
        instance.runningTask = false;
        return result;
    }

    instance.makeReadonly = function(resource) {
        function recursive(item) {
            item.write = false;
            if (item.children) {
                for (const c of item.children) {
                    recursive(c);
                }
            }
        }
        recursive(resource);
    }

    instance.extensionOf = function(resource) {
        const dotIndex = resource.name.lastIndexOf('.');
        return resource.name.substring(dotIndex + 1);
    }

    instance.showDiff = function(resource) {
        instance.runningTask = true;
        return new Promise((resolve, reject) => {
            $http({
                method: 'GET',
                url: 'option',
                params: {
                    name: "git_show",
                    path: resource.path,
                }
            }).then(response => {
                instance.runningTask = false;
                resolve(response.data);
            }).catch(error => {
                instance.runningTask = false;
                instance.logError(error.data);
                reject(error.data)
            });
        });
    }
    
    //#endregion

    //#region logging
    instance.log = function(message) {
        if (message) {
            instance.logs.push(message);
            if (instance.onLogAdded) {
                instance.onLogAdded();
            }
        }
    }

    instance.logError = function(message) {
        if (typeof(message) == 'object') {
            message = JSON.stringify(message);
        }
        instance.log('<span style="color: red;">' + message + '</span>');
    }
    instance.clearLogs = function() {
        instance.logs = [];
    }
    //#endregion

    //#region 

    /**
     * Show a confirm dialog box
     * @param {Object} options - options of the dialog box
     * @param {string} options.title - the title of the dialog box
     * @param {string} options.positiveTitle - the title of the confirm button
     * @param {string} options.negativeTitle - the title of the cancel button
     * @param {Event} options.targetEvent - a javascript event object
     * @callback options.confirmed - called if confirmed
     * @callback options.canceled - called if canceled
     * 
     */
    instance.askConfirm = function(options) {
        const dialog = $mdDialog.confirm()
            .title(options.title)
            .ok(options.positiveTitle || 'YES')
            .cancel(options.negativeTitle || 'CANCEL')
            .targetEvent(options.targetEvent);
        $mdDialog.show(dialog)
        .then(options.confirmed || function(){})
        .catch(options.canceled || function(){});
    }

    instance.openDialog = function(templateUrl) {
        function Dialog($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
        
            $scope.ok = function() {
                $mdDialog.hide($scope);
            }
        }
        return $mdDialog.show({
            controller: Dialog,
            templateUrl: templateUrl,
            parent: angular.element(document.body),
            clickOutsideToClose:true
        });
    }

    instance.setResizable = function setResizable(query, onResized) {
        const node = document.querySelector(query);
        const resizer = document.createElement('div');
        resizer.className = 'resizer';
        node.appendChild(resizer);
        resizer.addEventListener('mousedown', initDrag, false);
        let startX, startY, startWidth, startHeight;
        function initDrag(e) {
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseInt(document.defaultView.getComputedStyle(node).width, 10);
            startHeight = parseInt(document.defaultView.getComputedStyle(node).height, 10);
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }
        function doDrag(e) {
            e.preventDefault();
            onResized(node, e, startX, startY, startWidth, startHeight);
        }
        function stopDrag(e) {
            e.preventDefault();
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }
    //#endregion
}