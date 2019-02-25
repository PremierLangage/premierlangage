import { Injectable, Inject } from '@angular/core';
import { LANGUAGE_PROVIDERS } from '../../tokens/monaco-providers.token';
import { Language } from '../../models/language.model';
import { Resource } from '../../models/resource.model';
import { extension, asURI } from '../../models/filters.model';
import { LANGUAGES } from '../../models/language.model';
import { OpenerService } from '../core/opener.service';
import { ResourceService } from '../core/resource.service';
import { Schemas } from '../../models/schemas.model';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;

// tslint:disable: max-line-length

export const PL = 'pl';

@Injectable({ providedIn: 'root' })
export class MonacoService  {
    private static readonly BUILD_IN_WORDS = {
        title: 'Titre de l\'exercice/feuille d\'exercice',
        author: 'Auteur de l\'exercice',
        introduction: 'Présentation de la feuille d\'exercice, le contenu de cette clé est interprété comme du markdown.',
        teacher: 'Sur un PLTP, affiche un note visible par les enseignant seulement',
        text: 'Énoncé de l\'exercice, le contenu de cette clé est interprété comme du markdown.',
        build: 'Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), '
             + 'à utiliser avec le builder /builder/build.py',
        before: 'Code python permettant de modifier l\'exercice avant sont exécution sur le navigateur',
        form: 'Formulaire HTML permettant à l\'élève de répondre',
        template: 'Définie template comme étant la base de ce fichier',
    };
    private static readonly REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:\/)?([~a-zA-Z0-9_\.\/]+)/;
    private static readonly OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)/;
    private static readonly CLOSE_PATTERN = /^==\s*$/;


    private editors: IStandaloneCodeEditor[] = [];
    constructor(
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
    ) {
    }

    register(monaco) {
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        monaco.languages.register({
            id: PL,
            extensions: ['.pl', '.pltp'],
        });
        monaco.languages.setMonarchTokensProvider(PL, {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
            'title', 'author', 'introduction', 'teacher', 'text', 'build', 'before', 'form', 'template'
            ],
            operators: [
                '=', '+', '@', '%', '==', '+=', '=@', '+=@',
            ],
            tokenizer: {
                root: [
                    [
                        // (?=\s*(=|\+|\@|\%|(==)|(\+=)|(=\@)|(\+=\@)))
                        /^[a-zA-Z_](\.?\w+)*/, {
                            cases: {
                                '@default': 'key'
                            }
                        }
                    ],

                    [/#.+/, 'comment'],
                    [/==/, { token: 'open', next: '@embedded' }],
                    [/%=/, { token: 'open', next: '@predefined', nextEmbedded: 'javascript'}],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    // whitespace
                    { include: '@whitespace' },
                ],

                embedded: [
                    [/#\|(\w+)\|/, { token: 'string', next: '@predefined', nextEmbedded: '$1' }],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    [/^==\s*$/, { token: 'close', next: '@pop' }],
                ],

                predefined: [
                    ['(?=\w+)==', 'string'],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    [/^==\s*$/, { token: 'close', next: '@root', nextEmbedded: '@pop' }],
                ],

                whitespace: [
                [/[ \t\r\n]+/, 'white'],
                ],

            },
        });

        monaco.editor.defineTheme(PL, {
            base: 'vs',
            inherit: true,
            rules: [
              { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
          ]
        });

        monaco.languages.registerLinkProvider(PL, {
            provideLinks: function(model, _token) {
                const links = [];
                const lines: string[] = model.getValue().split('\n');
                let match: RegExpExecArray;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].match(MonacoService.OPEN_PATTERN)) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].match(MonacoService.CLOSE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = MonacoService.REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        const url = match[match.length - 1];
                        let index =  match.index + match.input.length - url.length;
                        const range = new monaco.Range(i + 1, index, i + 1, index + url.length + 1);
                        let comment = false;
                        while (index >= 0) {
                            if (lines[i][index] === '#') {
                                comment = true;
                                break;
                            }
                            index--;
                        }
                        if (!comment) {
                            links.push({
                                range: range,
                                url: url,
                            });
                        }
                    }
                }
                return links;
            },
            resolveLink: function(link, _token) {
                return link;
            }
        });

        monaco.languages.registerFoldingRangeProvider(PL, {
            provideFoldingRanges: function(model) {
            const ranges = [];
            const lines: string[] = model.getValue().split('\n');
            const length = lines.length;
            let i = 0, start = -1;
            while (i < length) {
                if (lines[i].match(MonacoService.OPEN_PATTERN)) {
                    start = i;
                } else if (lines[i].match(MonacoService.CLOSE_PATTERN)) {
                        ranges.push({
                            start: start + 1,
                            end: i + 1,
                            kind: monaco.languages.FoldingRangeKind.Region
                        });
                    start = -1;
                }
                i++;
            }
            return ranges;
            }
        });

/*         monaco.languages.registerHoverProvider(PREMIER_LANGAGE, {
            provideHover: function(model, position) {
                const lineContent = model.getLineContent(position.lineNumber);
                const token = model.getWordAtPosition(position);
                if (token) {
                    const keys = self.getKeys();
                    const k = keys.find(e => e === token.word);
                    if (k) {
                        const i = token.startColumn - 2;
                        if (i > 0 && lineContent[i] === '{' && i - 1 >= 0 && lineContent[i - 1] === '{') {
                            return {
                                range: new monaco.Range(1, 1, 3, 10),
                                contents: [
                                    { value: k },
                                    { value: self.getValue(k) }
                                ]
                            };
                        }
                    }

                    if (token.word in BUILT_IN_WORDS) {
                        const lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: BUILT_IN_WORDS[token.word] }
                            ]
                        };
                    }
                }
            }
        }); */

        monaco.languages.registerCompletionItemProvider(PL, {
            provideCompletionItems: (model, position) => {
                const line = model.getLineContent(position.lineNumber);
                if (line.includes('{{')) {
                    return [];
                }
                return Object.keys(MonacoService.BUILD_IN_WORDS).map(name => ({
                    label: name,
                    detail: MonacoService.BUILD_IN_WORDS[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }));
            },
        });

/*      monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
            triggerCharacters: ['{{'],
            provideCompletionItems: function(model, position) {
                const line = model.getLineContent(position.lineNumber);
                if (!line.includes('{{')) {
                    return [];
                }
                const items: monaco.languages.CompletionItem[] = [];
                const keys = self.getKeys();
                if (keys.length > 0) {
                    keys.forEach(k => {
                        items.push({
                            label: k,
                            detail: '{{' + k + '}}',
                            insertText: k + '}}',
                            kind: monaco.languages.CompletionItemKind.Reference
                        });
                    });
                }
                return items;
            }
        });
        */
    }

    findLanguage(resource: Resource) {
        const ext = extension(resource);
        for (const item of LANGUAGES) {
            if (item.extension === ext) {
                return item.id;
            }
        }
        return '';
    }

    registerEditor(editor: IStandaloneCodeEditor) {
        const contribution: any = editor.getContribution('editor.linkDetector');
        contribution.openerService.open = (uri: monaco.Uri) => {
            this.opener.openReference(editor.getModel().uri, uri);
        };
        editor.onDidBlurEditor(() => {
        });
        editor.onDidFocusEditor(() => {
        });
        editor.onDidChangeCursorPosition(e => {
            for (const item of this.editors) {
                if (item.getId() !== editor.getId() && item.getModel().getModeId() === editor.getModel().getModeId()) {
                    item.setPosition(e.position);
                }
            }
        });
        editor.onDidChangeModelContent(() => {
        });
        this.editors.push(editor);
    }

    disposeEditor(editor: IStandaloneCodeEditor) {
        const monaco = (<any>window).monaco;
        const models = monaco.editor.getModels();
        for (const model of models) {
            if (model._attachedEditorCount === 0) {
                model.dispose();
            }
        }
        this.editors = this.editors.filter(e => e.getId() !== editor.getId());
    }
}
