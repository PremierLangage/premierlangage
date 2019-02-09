'use strict';

// https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance
export function config(editorNode, diffEditorNode, completion) {
    
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
        const LANGUAGES = {
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
        
        const PREMIER_LANGAGE = 'premierlangage';   
      
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
            extends: "Inclure un fichier",
            template: "",
        };
        
        // DEFINE CUSTOM THEME
        const SPECIAL_PATTERN = /(title|author|introduction|introductionh|teacher|text|texth|build|before|form|template|extends|builder|grader)(?=(=|(\+=)|=%))/;
        //const VARIABLE_PATTERN = /(?<![^\n])\w+(\.\w+)*(?=(=|\+=|=%|==))/;
        const VARIABLE_PATTERN = /\w+(\.\w+)*(?=(=|\+=|=%|==))/;

        const REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)[~\s\/]*(\w+:\/)?([a-zA-Z0-9_\./]+)/;

        monaco.languages.register({ id: PREMIER_LANGAGE }); 
        
        monaco.languages.setMonarchTokensProvider(PREMIER_LANGAGE, {
            tokenizer: {
                root: [
                    [SPECIAL_PATTERN, 'special'],
                    [VARIABLE_PATTERN, 'variable'],
                    [REFERENCE_PATTERN, 'reference']
                ]
            }
        });
        
        monaco.editor.defineTheme(PREMIER_LANGAGE, {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'special', foreground: '1382dd', fontStyle: 'bold' },
                { token: 'variable', foreground: '1382dd' },
            ]
        });
    
        const editor = monaco.editor.create(editorNode, {
            value: '',
            theme: 'premierlangage',
            language: '',
            renderWhitespace: 'all',
            renderControlCharacters: true, // Enable rendering of control characters. Defaults to false.
            renderLineHighlight: true, // Enable rendering of current line highlight. Defaults to all. "none" | "gutter" | "line" | "all"
            renderIndentGuides: true, // Enable rendering of indent guides. Defaults to true.
            automaticLayout: false,
            lineNumbers: "on", // on | off | relative | interval | (line: number) -> string
            roundedSelection: true, // Render the editor selection with rounded borders. Defaults to true.
            scrollBeyondLastLine: true, // Enable that scrolling can go one screen size after the last line. Defaults to true.
            scrollbar: {
                verticalScrollbarSize: 7,
                horizontalScrollbarSize: 7,
            }
        });
        
        editor.findLanguage = function(resource) {
            resource.language = '';
            const dotIndex = resource.name.lastIndexOf('.');
            const extension = resource.name.substring(dotIndex + 1);
            if (extension in LANGUAGES) {
                resource.language = LANGUAGES[extension];
            }
        }

        monaco.languages.registerLinkProvider(PREMIER_LANGAGE, {
            provideLinks: function(model, token) {
                let links = [];
                const lines = model.getValue().split('\n');
                let match;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].trim().endsWith('==')) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].trim().endsWith('==')) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        const url = match[match.length - 1];
                        const index =  match.index + match.input.length - url.length;
                        const range = new monaco.Range(i + 1, index, i + 1, index + url.length + 1);
                        
                        editor.deltaDecorations([], [
                            { range: range, options: { inlineClassName: 'pl-theme-ref-token' }},
                        ]);
                        
                        links.push({
                            range: range,
                            url: url,
                        }); 
                    }
                }
                return links;
            }, 
            resolveLink: function(link, token) {
                if (editor.onResolveLink) {
                    editor.onResolveLink(link.url);
                }
                return link;
            }
        });
      
        // CODE LENS
        /*
        monaco.languages.registerCodeLensProvider(PREMIER_LANGAGE, {
            provideCodeLenses: function(model, token) {
                let lens = [];
                const lines = model.getValue().split('\n');
                let match;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].trim().endsWith('==')) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].trim().endsWith('==')) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        const path = match[match.length - 1];
                        const startCol =  match.index + match.input.length - path.length;
                        const range = new monaco.Range(i + 1, startCol, i + 1, startCol + path.length + 1);
                        
                        // startLineNumber: 6, startColumn: 19, endLineNumber: 6, endColumn: 20
                        //editor.deltaDecorations([], [
                        //    { range: range, options: { inlineClassName: 'pl-theme-ref-token' }},
                        //]);
                        
                        lens.push({
                            range: range,
                            id: match.input,
                            command: { 
                                id: editor.addCommand(0, function() {
                                    if (editor.onResolveLink) {
                                        editor.onResolveLink(path);
                                    }
                                }, ''),
                                title: 'OPEN'
                            }
                        });
                        
                    }
                }
                return lens;
            }
        });
        */
  
        // FOLDINGS
        monaco.languages.registerFoldingRangeProvider(PREMIER_LANGAGE, {
            provideFoldingRanges: function(model) {
                let ranges = [];
                const lines = model.getValue().split('\n');
                const length = lines.length;
                let i = 0, start = -1;
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
        monaco.languages.registerHoverProvider(PREMIER_LANGAGE, {
            provideHover: function(model, position) {
                const token = model.getWordAtPosition(position);
                if (token && token.word in BUILT_IN_WORDS) {
                    const lineCount = model.getLineCount();
                    return {
                        range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                        contents: [
                            { value: '**PL BUILT-IN**' },
                            { value: BUILT_IN_WORDS[token.word] }
                        ]
                    }
                }
            }
        });
    
        // COMPLETION
        monaco.languages.registerCompletionItemProvider('premierlangage', {
            //triggerCharacters: ["@", '='],
            provideCompletionItems: (model, position) => {
                //const textUntilPosition = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
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
            if (editor.onRequestSave) {
                editor.onRequestSave();
            }
        });

        editor.onDidChangeModelContent(function (e) {
           if (editor.onDidContentChanged) {
               editor.onDidContentChanged(editor.getValue())
           }
        });
       
        let diffEditor;
        if (diffEditorNode) {
            diffEditor = monaco.editor.createDiffEditor(diffEditorNode, {
                // You can optionally disable the resizing
                enableSplitViewResizing: false,
                readOnly: true,
                // Render the diff inline
                renderSideBySide: false
            });
        }
        
        diffEditor.setModel(undefined);
        editor.focus();
        completion(editor, diffEditor);
    });
}