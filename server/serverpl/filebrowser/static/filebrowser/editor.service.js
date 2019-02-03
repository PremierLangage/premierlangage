'use strict';

import * as filters from './filters.js';

angular.module('editor').service('EditorService', EditorService);

export function EditorService($http, $mdDialog, $mdToast) {
    window.onbeforeunload = function(e) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    };
    
    const instance = this;
    instance.runningTask = false;
    instance.logs = [];
    instance.resources = [];
    instance.onLogAdded;

    const options = [
        { label: 'Git Clone', icon: 'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isHome], action: optionClone},
        { label: 'Git Push', icon:'fas fa-cloud-upload-alt', filters: [filters.canWrite, filters.isRepo], action: optionPush},
        { label: 'Git Pull', icon:'fas fa-cloud-download-alt', filters: [filters.canWrite, filters.isRepo], action: optionPull},
        { label: 'Git Status', icon:'fas fa-info-circle', filters: [filters.canWrite, filters.isRepo], action: optionStatus},
        { label: 'Git Add', icon:'fas fa-plus', filters: [filters.canWrite, filters.isRepo], action: optionAdd},
        { label: 'Git Commit', icon:'fas fa-edit', filters: [filters.canWrite, filters.isRepo], action: optionCommit},
        { label: 'Git Checkout', icon:'fas fa-eraser', filters: [filters.canWrite, filters.isRepo], action: optionCheckout},
    ];

    function optionClone(resource) {
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
                instance.resources = response.data.resources;
                for (let item of instance.resources) {
                    instance.loadOptions(item);
                }
                instance.resources[0].expanded = true;
                instance.runningTask = false;
                instance.log(response.data.message);
            }).catch((error) => {
                instance.runningTask = false;
                instance.error(error.data || error);
            });
        });
    }
    
    function optionPush(resource) {
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
            }).then((response) => {
                instance.runningTask = false;
                instance.log(response.data);
            }).catch(error => {
                instance.runningTask = false;
                instance.error(error.data || error);
            });
        }).catch(() => {});
    }
    
    function optionPull(resource) {
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
                instance.resources = response.data.resources;
                for (let item of instance.resources) {
                    instance.loadOptions(item);
                }
                instance.resources[0].expanded = true;
                instance.runningTask = false;
                instance.log(response.data.message);
            }).catch(error => {
                instance.runningTask = false;
                instance.error(error.data || error);
            });
        }).catch(()=>{});
    }
    
    function optionStatus(resource) {
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
            instance.error(error.data || error);
        });
    }
    
    function optionAdd(resource) {
        instance.runningTask = true;
        $http({
            method: 'GET',
            url: 'option',
            params: {
                name: "git_add",
                path: resource.path,
            }
        }).then(response => {
            instance.runningTask = false;
            instance.log(response.data);
        }).catch(error => {
            instance.runningTask = false;
            instance.error(error.data || error);
        });
    }

    function optionCommit(resource) {
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
                instance.runningTask = false;
                instance.log(response.data);
            }).catch(error => {
                instance.runningTask = false;
                instance.error(error.data || error);
            });
        }).catch(() => {});
    }
    
    function optionCheckout(resource) {
        instance.askConfirm({
            title: 'Will reset all your local changes up to your last commit.',
            confirmed: function() {
                instance.runningTask = true;
                $http({
                    method: 'GET',
                    url: 'option',
                    params: {
                        name: "git_checkout",
                        path: resource.path
                    }
                }).then(response => {
                    instance.log(response.data);
                    instance.runningTask = false;
                    instance.log(response.data);
                }).catch(error => {
                    instance.runningTask = false;
                    instance.error(error.data || error);
                });
            }
        });
    }

    instance.loadOptions = function(resource) {
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
            instance.sortResources(resource.children);
            for (let child of resource.children) {
                instance.loadOptions(child);
            }
        }
    }



    instance.sortResources = function (resources) {
        resources.sort((a, b) => {
            if (a.type === b.type) { 
              return a.name < b.name ? -1 : 1;
            }
            return a.type === 'folder' ? -1 : 1;
        });
    }

    instance.addResource = function(resource, type) {
        if (!resource || (resource.children && resource.children.find(item => item.editing))) {
            return false;
        }
        resource.expanded = true;
        resource.children = resource.children || [];
        const newResource = {
            ...resource,
            editing: true,
            name: '',
            type: type,
            icon: 'fas fa-' + type,
            children: [],            
            parent: resource.path,
            __parent__: resource,
        };
        resource.children.push(newResource);
        return newResource;
    }

    instance.uploadFile = function(resource, e) {
        return new Promise((resolve, reject) => {
            angular.element('#upload-path').val(resource.path);
            
            const form = angular.element('#form-upload');
            form.find('button:not([class])').hide();    
            form.submit(function(event) {
                event.preventDefault();
                event.stopPropagation();
                const formData = new FormData($(this)[0]);
                instance.askConfirm({
                    title: 'You will lose any unsaved changes, Are you sure ?',
                    confirmed: function() {
                        instance.runningTask = true;
                        $http({
                            url: '/filebrowser/upload_resource',
                            method: 'POST',
                            data: formData,
                            transformRequest: angular.identity,
                            headers: {'Content-Type': undefined},
                        }).then(() => {
                            instance.runningTask = false;
                            resolve(true);
                            instance.refresh();
                        }).catch(error => {
                            instance.runningTask = false;
                            reject(error.data);
                        });
                    },
                    canceled: function() {
                        resolve(false);
                    }
                })
            });

            $mdDialog.show({
                contentElement: '#dialog-upload-file',
                parent: angular.element(document.body),
                targetEvent: e,
                clickOutsideToClose: true
            }).catch(() => {
                resolve(false);
            });
        });
    }

    instance.addFile = function(resource) {
        return instance.addResource(resource, 'file');
    }

    instance.addFolder = function(resource) {
        return instance.addResource(resource, 'folder');
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
                const data = response.data;
                resource.path = data.path;
                resource.icon = data.icon;
                instance.loadOptions(resource);
                instance.sortResources(resource.__parent__.children);

                delete resource.editing;
                delete resource.__parent__;
                delete resource.__submiting__;
                delete resource.__name__;

                resolve(true);   
            }).catch(error => {
                delete resource.__submiting__;
                reject(error.data);
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
                        instance.sortResources(dstRes.children);
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

    instance.refresh = function() {
        return new Promise((resolve, reject) => {
            instance.runningTask = true;
            $http({
                url: "option",
                method: 'GET',
                params: { name: 'get_resources' }
            }).then(response => {
                instance.resources = response.data;
                for (let item of instance.resources) {
                    instance.loadOptions(item);
                }
                instance.runningTask = false;
                if (instance.resources.length > 0) {
                    instance.resources[0].expanded = true;
                }
                resolve(true);
            }).catch(error => {
                instance.runningTask = false;
                reject(error.data);
            });
        });
    }

    instance.findResource = function(path) {
        path = path.trim();
        return instance.findResourceWithPredicate(r => r.path === path);
    }

    instance.findResourceWithPredicate = function(predicate) {
        function recursive(resource) {
            if (predicate(resource)) {
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
                instance.error(error.data);
                reject(error.data)
            });
        });
    }
 
    //#region logging
    instance.log = function(message) {
        if (message && message !== true) {
            console.trace(message)
            instance.logs.push(message);
            if (instance.onLogAdded) {
                instance.onLogAdded();
            }
        }
    }

    instance.error = function(message) {
        if (typeof(message) == 'object') {
            message = JSON.stringify(message);
        }
        instance.log('<span style="color: red;">' + message + '</span>');
    }
    
    instance.clearLogs = function() {
        instance.logs = [];
    }

    instance.promise = function(promise) {
        promise.then(data => {
            if (data) {
                instance.log(data);
            }
        }).catch(error => {
            instance.error(error);
        })
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

    instance.makeToast = function(options) {
        const toast = $mdToast.simple()
                .textContent(options.message)
                .position(options.position || {
                    top: true,
                    right: true
                })
                .hideDelay(options.duration || 3000);
            
        $mdToast.show(toast);
    }

    instance.openDialog = function(templateUrl) {    
        return $mdDialog.show({
            controller: function($scope, $mdDialog) {
                $scope.cancel = function() {
                    $mdDialog.cancel();
                };
            
                $scope.ok = function() {
                    $mdDialog.hide($scope);
                }
            },
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
            onResized({node: node, e: e, startX: startX, startY: startY, startWidth: startWidth, startHeight: startHeight});
        }
        function stopDrag(e) {
            e.preventDefault();
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }
    //#endregion
}