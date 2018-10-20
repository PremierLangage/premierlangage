// https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance

angular.module('fileBrowserApp')
.component('editor', {
    templateUrl: '/static/filebrowser/editor/editor.component.html',
    controller: function Tree(FileBrowserService) {
     
    
        let editor;

        this.select = FileBrowserService.selectDocument;
        this.remove = FileBrowserService.removeDocument;
        this.isSelection = FileBrowserService.isSelectedFile;

        this.documents = function () {
            return FileBrowserService.documents;
        };

        FileBrowserService.onDocumentSelected = function(document) {
            FileBrowserService.saveState(editor.saveViewState());
            if (document.model) {
                editor.setModel(document.model);
                editor.restoreViewState(document.state);
            } else {
                document.model = monaco.editor.createModel(document.content, document.language);
                editor.setModel(document.model);
            }
            editor.focus();
        };

        FileBrowserService.onDocumentRemoved = function(document) {
            document.model.dispose();
            document.model = null;
            editor.setModel(null);
        };

        // MONACO EDITOR SETTING
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.14.3/min/vs' }});
        window.MonacoEnvironment = {
            getWorkerUrl: function(workerId, label) {
                return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                    self.MonacoEnvironment = {
                    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.14.3/min/'
                    };
                        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.14.3/min/vs/base/worker/workerMain.js');`
                )}`;
            }
        };

        require(["vs/editor/editor.main"], function () {
            const LANGUAGE_ID = 'premierlangage';   
            const BUILT_IN_WORDS = {
                title: "Titre de l'exercice/feuille d'exercice",
                author: "Auteur de l'exercice",
                introduction: "Présentation de la feuille d'exercice, le contenu de cette clé est interprété comme du markdown.",
                introductionh: "Présentation de la feuille d'exercice, le contenu de cette clé est interprété comme du html.",
                teacher: "Sur un PLTP, affiche un note visible par les enseignant seulement",
                text: "Énoncé de l'exercice, le contenu de cette clé est interprété comme du markdown.",
                texth: "Énoncé de l'exercice, le contenu de cette clé est interprété comme du html.",
                build: "Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), à utiliser avec le builder /builder/build.py",
                before: "Code python permettant de modifier l'exercice avant sont exécution sur le navigateur",
                form: "Formulaire HTML permettant à l'élève de répondre",
            };
            
            // DEFINE CUSTOM THEME

            const SPECIAL_PATTERN = /(title|author|introduction|introductionh|teacher|text|texth|build|before|form)(?=(=|(\+=)|=%))/;
            const VARIABLE_PATTERN = /\w+(\.\w)*(?=(=|(\+=)|=%))/;
            const REFERENCE_PATTERN = /@(.+)/;

            monaco.languages.register({ id: LANGUAGE_ID }); 
            
            monaco.languages.setMonarchTokensProvider('premierlangage', {
                tokenizer: {
                    root: [
                        [SPECIAL_PATTERN, 'special'],
                        [VARIABLE_PATTERN, 'variable'],
                        [REFERENCE_PATTERN, 'reference']
                    ]
                }
            });
            
            monaco.editor.defineTheme(LANGUAGE_ID, {
                base: 'vs',
                inherit: true,
                rules: [
                    { token: 'special', foreground: 'ff4f00' },
                    { token: 'variable', foreground: '445b75' },
                    { token: 'reference', foreground: '2b4153', fontStyle: 'bold underline' },
                ]
            });

            editor = monaco.editor.create($('#monaco-editor').get(0), {
                value: '',
                theme: 'premierlangage',
                language: '',
                renderWhitespace: 'all',
                renderControlCharacters: true,
                renderLineHighlight: true,
                renderIndentGuides: true,
            });

            // CODE LENS
            monaco.languages.registerCodeLensProvider(LANGUAGE_ID, {
                provideCodeLenses: function(model, token) {
                    let lens = [{
                        range: {
                            startLineNumber: 1,
                            startColumn: 1,
                            endLineNumber: 1,
                            endColumn: 1
                        },
                        id: "Preview",
                        command: {
                            id: editor.addCommand(0, function() {
                                alert('TODO NOT IMPLEMENTED');
                            }, ''),
                            title: "Preview"
                        }
                    }];

                    const lines = model.getValue().split('\n');
                    let match;
                    for (let i = 0; i < lines.length; i++) {
                        match = REFERENCE_PATTERN.exec(lines[i])
                        if (match) {
                            let path = match[1];
                            lens.push({
                                range: new monaco.Range(i + 1, match.index, i + 2, match.index + match.input.length),
                                id: match.input,
                                command: { 
                                    id: editor.addCommand(0, function() {
                                        const document = FileBrowserService.findDocument(path);
                                        if (document) {
                                            FileBrowserService.selectDocument(document);
                                        }
                                        // TODO handle document missing case
                                    }, ''),
                                    title: 'Open'
                                }
                            });
                        }
                    }
                    return lens;
                },
                resolveCodeLens: function(model, codeLens, token) {
                    return codeLens;
                }
            });
            
            // FOLDINGS
            monaco.languages.registerFoldingRangeProvider(LANGUAGE_ID, {
                provideFoldingRanges: function(model) {
                    let ranges = [];
                    const lines = model.getValue().split('\n');
                    const length = lines.length;
                    let start = -1;
                    let i = 0;
                    while (i < length) {
                        if (lines[i].trim().endsWith('==')) {
                            if (start != -1) {
                                ranges.push({
                                    start: start + 1,
                                    end: i + 1,
                                    kind: monaco.languages.FoldingRangeKind.Region
                                })
                                start = -1;
                            } else {
                                start = i;
                            }
                        }
                        i++;
                    }
                    return ranges;
                }
            });

            // HOVERINGS
            monaco.languages.registerHoverProvider(LANGUAGE_ID, {
                provideHover: function(model, position) {
                    const token = model.getWordAtPosition(position);
                    if (token && token.word in BUILT_IN_WORDS) {
                        const lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**Special key**' },
                                { value: BUILT_IN_WORDS[token.word] }
                            ]
                        }
                    }
                }
            });


            // COMPLETION
            monaco.languages.registerCompletionItemProvider('premierlangage', {
                // These characters should trigger our `provideCompletionItems` function
                triggerCharacters: ["@", '='],
                // Function which returns a list of autocompletion ietems. If we return an empty array, there won't be any autocompletion.
                provideCompletionItems: (model, position) => {
                  // Get all the text content before the cursor
                  const textUntilPosition = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column,
                  });
                  return Object.keys(BUILT_IN_WORDS).map(name => ({
                    label: name,
                    detail: BUILT_IN_WORDS[name],
                    insertText: name + '==\n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                  }));
                },
              });
              
            // COMMANDS
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
                FileBrowserService.saveDocument();
            });

            editor.onDidChangeModelContent(function (e) {
                FileBrowserService.updateDocument(editor.getValue());
            });
            editor.focus();
        });
    }
})