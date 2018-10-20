angular.module('fileBrowserApp')
.service('FileBrowserService', function FileBrowser($http) {
    
    // FILTERS
    function isPl(document) {
        return document.name.endsWith('.pl');
    }

    function isPltp(document) {
        return document.name.endsWith('.pltp');
    }

    function canRead(document) {
        return document.read;
    }

    function canWrite(document) {
        return document.write;
    }

    function isFolder(document) {
        return document.type == 'folder';
    }

    function isFile(document) {
        return document.type == 'file';
    }

    function isRoot(document) {
        return document.name === 'home' || document.name === 'lib';
    }
   
    function isHome(document) {
        return document.name === 'home';
    }
   
    function isNotRoot(document) {
        return !isRoot(document);
    }

    function isInRepo(document) {
        return document.repo;
    }

    // ACTIONS
    function optionTest(document) {
        alert('test ' + document.name);
    }

    function optionLoad(document) {
        alert('load ' + document.name);
    }

    function optionReload(document) {
        alert('reload ' + document.name);
    }

    function optionNewFolder(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionNewFile(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionRename(document) {
        alert('TODO NOT IMPLEMENTED');
    }
    function optionCopy(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionPaste(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionDownload(document) {
        alert('TODO NOT IMPLEMENTED');
    }

    function optionDelete(document) {
        alert('TODO NOT IMPLEMENTED');
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
        [
           { label: 'Test', icon:'fas fa-check', filters: [canRead, isPl], action: optionTest},
           { label: 'Load', icon:'fas fa-play', filters: [canRead, isPltp], action: optionLoad},
           { label: 'Reload', icon:'fas fa-sync', filters: [canRead, isPltp], action: optionReload},
        ],
        [
            { label: 'New Directory', icon:'fas fa-folder-plus', filters: [canWrite, isFolder], action: optionNewFolder},
            { label: 'New File', icon:'fas fa-file', filters: [canWrite, isFolder], action: optionNewFile},
            { label: 'Rename', icon:'fas fa-pencil-alt', filters: [canWrite, isFile], action: optionRename},
            { label: 'Copy', icon:'fas fa-copy', filters: [canWrite, isFile], action: optionCopy},
            { label: 'Paste', icon:'fas fa-paste', filters: [canWrite, isFolder], action: optionPaste},
            { label: 'Download', icon:'fas fa-check', filters: [canRead], action: optionDownload},
            { label: 'Delete', icon:'fas fa-download', filters: [canWrite, isNotRoot], action: optionDelete},
         ],
         [
            { label: 'Git Clone', icon: 'fas fa-cloud-download-alt', filters: [canWrite, isHome], action: optionGitClone},
            { label: 'Git Push', icon:'fas fa-cloud-upload-alt', filters: [canWrite, isInRepo], action: optionGitPush},
            { label: 'Git Pull', icon:'fas fa-cloud-download-alt', filters: [canWrite, isInRepo], action: optionGitPull},
            { label: 'Git Status', icon:'fas fa-info-circle', filters: [canWrite, isInRepo], action: optionGitStatus},
            { label: 'Git List Branch', icon:'fas fa-list-ul', filters: [canWrite, isInRepo], action: optionGitListBranch},
            { label: 'Git Change Branch', icon:'fas fa-code-branch', filters: [canWrite, isInRepo], action: optionGitChangeBranch},

            { label: 'Git Add', icon:'fas fa-plus', filters: [canWrite, isInRepo], action: optionGitAdd},
            { label: 'Git Commit', icon:'fas fa-edit', filters: [canWrite, isInRepo], action: optionGitCommit},
            { label: 'Git Reset', icon:'fas fa-undo', filters: [canWrite, isInRepo], action: optionGitReset},
            { label: 'Git Checkout', icon:'fas fa-eraser', filters: [canWrite, isInRepo], action: optionGitCheckout},  
         ],
    ]

    function loadOption(document) {
        let options = [];
        let option;
        for (const group of OPTIONS) {
            option = group.filter(item => {
                for (const filterFunc of item.filters) {
                    if (!filterFunc(document)) {
                        return false;
                    }
                }
                return true;
            });
            if (option.length > 0) {
                options.push(option);
            }
        }
        document['options'] = options;
        document['hasOption'] = options.length > 0;
        if (document.children) {
            for (let child of document.children) {
                loadOption(child);
            }
        }
    }
  
    let service = this;

    /** a map of the supported languages in the editor */
    service.languages = {
        css: 'css',
        cs: 'csharp',
        js: 'javascript',
        ts: 'typescript',
        html: 'html',
        md: 'markdown',
        py: 'python',
        r: 'r',
        sql: 'sql',
        mysql: 'mysql',
        java: 'java',
        c: 'cpp',
        cpp: 'cpp',
        h: 'cpp',
        xml: 'xml',
        bat: 'bat',
        ini: 'ini',
        php: 'php',
        pl: 'premierlangage',
        pltp: 'premierlangage'
    };

    /** an array of the explorer folders and documents */
    service.items = [];

    /** an array of the opened documents */
    service.documents = [];

    service.selectFolder = function(document) {
        service.selectedFolder = document;
    }
    /**
     * Sets the given document as the selected document of the editor
     * and loads it content if needed.
     * @param document the document to select.
     */
    service.selectDocument = function(document) {
        service.selectedFile = document;
        if (!service.documents.find(item => item.path === document.path)) {
            service.documents.push(document);
        }

        if (!document.loaded) {
            document.loaded = true;
            $http.get('api/document/' +  document.path).then(response => {
                document.content = response.data.content;
                document.language = '';
                const dotIndex = document.name.lastIndexOf('.');
                const extension = document.name.substring(dotIndex + 1);
                if (extension in service.languages) {
                    document.language = service.languages[extension];
                }
                service.emitDocumentSelected(document);
            }).catch(error => {
                console.log(error);
                // TODO display an error message
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
        service.selectedFile = undefined;
        service.emitDocumentRemoved(document);

        if (service.documents.length > 0) {
            service.selectedFile = service.documents[0];
            service.emitDocumentSelected(service.selectedFile);
        }

    }

    /***
     * Updates the content of the selected document. (you must call saveState() to persists the modifications).
     * @param the new content of the document.
     */
    service.updateDocument = function(newContent) {
        if (service.selectedFile) {
            service.selectedFile.content = newContent;
            service.selectedFile.changed = true;
        }
    }

    /***
     * Saves the current selected document state. (undo/redo feature of monaco editor) 
     * @param state an object representing the state of the editor.
     * */
    service.saveState = function(state) {
        if (service.selectedFile) {
            service.selectedFile.state = state;
        }
    }

    /***
     * Saves the content of the selected document.
     */
    service.saveDocument = function() {
        if (service.selectedFile) {
            const doc = service.selectedFile;
            service.selectedFile.changed = false;
   
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
        alert('TODO NOT IMPLEMENTED');
    }

    service.isSelectedFile = function(document) {
        return service.selectedFile && service.selectedFile.path === document.path;
    }
  
    service.isSelectedFolder = function(document) {
        return service.selectedFolder && service.selectedFolder.path === document.path;
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