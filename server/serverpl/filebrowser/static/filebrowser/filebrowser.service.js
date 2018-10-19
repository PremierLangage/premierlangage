angular.module('fileBrowserApp')
.service('FileBrowserService', function FileBrowser($http) {
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

    /**
     * Sets the given document as the selected document of the editor
     * and loads it content if needed.
     * @param document the document to select.
     */
    service.selectDocument = function(document) {
        service.selectedDocument = document;
        
        if (!service.documents.find(item => item.path === document.path)) {
            service.documents.push(document);
        }

        if (!document.loaded) {
            document.loaded = true;
            $http.get('open_file/' +  document.path).then(response => {
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
        service.selectedDocument = undefined;
        service.emitDocumentRemoved(document);

        if (service.documents.length > 0) {
            service.selectedDocument = service.documents[0];
            service.emitDocumentSelected(service.selectedDocument);
        }

    }

    /***
     * Updates the content of the selected document. (you must call saveState() to persists the modifications).
     * @param the new content of the document.
     */
    service.updateDocument = function(newContent) {
        if (service.selectedDocument) {
            service.selectedDocument.content = newContent;
            service.selectedDocument.changed = true;
        }
    }

    /***
     * Saves the current selected document state. (undo/redo feature of monaco editor) 
     * @param state an object representing the state of the editor.
     * */
    service.saveState = function(state) {
        if (service.selectedDocument) {
            service.selectedDocument.state = state;
        }
    }

    /***
     * Saves the content of the selected document.
     */
    service.saveDocument = function() {
        if (service.selectedDocument) {
            const doc = service.selectedDocument;
            service.selectedDocument.changed = false;
   
            $http({
                method: 'POST',
                url: 'save_file/',
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
        $http.get('directories').then(response => {
            service.items = response.data;
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