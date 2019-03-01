// tslint:disable: max-line-length

import { Injectable, Inject } from '@angular/core';
import { LANGUAGE_PROVIDERS } from '../../tokens/monaco-providers.token';
import { Language } from '../../models/language.model';
import { Resource } from '../../models/resource.model';
import { asURI } from 'src/app/shared/models/paths.model';
import { LANGUAGES } from '../../models/language.model';
import { OpenerService } from '../core/opener.service';
import { ResourceService } from '../core/resource.service';
import { Schemas } from '../../models/schemas.model';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;
import { GitService } from '../core/git.service';
import { isNgContainer, isNgTemplate } from '@angular/compiler';
import { Subject } from 'rxjs';
import { IBlame } from '../../models/git.model';
import { extname } from 'src/app/shared/models/paths.model';

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

    private editors: IEditorInfo[] = [];
    private readonly codeLens = {};
    private readonly blames = {};
    private cursor: monaco.IPosition;

    readonly cursorChanged: Subject<monaco.IPosition> = new Subject();
    readonly blameChanged: Subject<{blame: IBlame, modelId: string}> = new Subject();

    constructor(
        private readonly git: GitService,
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
    ) {
    }

    register(monaco) {
        const that = this;
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

        monaco.languages.register({
            id: PL,
            extensions: ['.pl', '.pltp'],
        });

        monaco.editor.defineTheme(PL, {
            base: 'vs',
            inherit: true,
            rules: [
              { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
          ]
        });

        this.registerMonarch(monaco);
        this.registerLinks(monaco);
        this.registerFolding(monaco);
        this.registerHover(monaco);
        this.registerCompletion(monaco);
    }

    findLanguage(resource: Resource) {
        const ext = extname(resource.path);
        for (const item of LANGUAGES) {
            if (item.extension === ext) {
                return item.id;
            }
        }
        return '';
    }

    disposeEditor(editor: IStandaloneCodeEditor) {
        const info = this.editors.find(e => e.editor.getId() === editor.getId());
        if (!info) {
            throw new Error('unregistered editor ' + editor.getId());
        }
        this.editors = this.editors.filter(e => e.editor.getId() !== editor.getId());

        const monaco = (<any>window).monaco;
        const models = monaco.editor.getModels();
        for (const model of models) {
            if (model._attachedEditorCount === 0) {
                model.dispose();
            }
        }

        for (const disposable of info.disposables) {
            disposable.dispose();
        }
        editor.dispose();
    }

    registerEditor(editor: IStandaloneCodeEditor) {
        const that = this;
        const disposables = [];
        const monaco = (<any>window).monaco;
        const linkDetector: any = editor.getContribution('editor.linkDetector');

        linkDetector.openerService.open = (uri: monaco.Uri) => {
            this.opener.openReference(editor.getModel().uri, uri);
        };

        disposables.push(linkDetector);

        disposables.push(editor.onDidBlurEditor(() => {
            this.cursor = undefined;
            this.cursorChanged.next(undefined);
        }));

        disposables.push(editor.onDidChangeCursorPosition(e => {
            this.didCursorChanged(e, editor);
            this.updateBlame(editor);
        }));

        disposables.push(editor.onDidChangeModelContent(() => {
        }));

        this.editors.push({editor: editor, disposables: disposables});
    }

    provideBlames(resource: Resource) {
        return this.git.blame(resource).then(response => {
            const lines = resource.content.split('\n');
            const linesLength = lines.length;
            for (const item of response) {
                item.text = lines[item.line - 1];
            }
            this.blames['/' + resource.path] = response;
            return true;
        }).catch(_ => false);
    }

    private didCursorChanged(e: monaco.editor.ICursorPositionChangedEvent, editor: IStandaloneCodeEditor) {
        this.cursor = e.position;
        this.cursorChanged.next(e.position);
        this.syncCursor(editor, e);
    }

    private syncCursor(editor: IStandaloneCodeEditor, e: monaco.editor.ICursorPositionChangedEvent) {
        for (const item of this.editors) {
            if (item.editor.getId() !== editor.getId()) {
                const model = item.editor.getModel();
                if (model.id === editor.getModel().id) {
                    item.editor.setPosition(e.position);
                }
            }
        }
    }

    private updateBlame(editor: IStandaloneCodeEditor) {
        let blame;
        const model = editor.getModel();
        if (model) {
            const blames: IBlame[] = this.blames[model.uri.path];
            if (blames) {
                const lineNumber = this.cursor ? this.cursor.lineNumber : 0;
                const lineContent = editor.getModel().getLineContent(lineNumber);
                blame = blames.find(item => item.text.trim() === lineContent.trim());
            }
        }
        this.blameChanged.next({blame: blame, modelId: model.id});
    }

    private registerMonarch(monaco: any) {
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
                    [/#.*/, 'comment'],
                    [/==/, { token: 'open', next: '@embedded' }],
                    [/%=/, { token: 'open', next: '@predefined', nextEmbedded: 'javascript' }],
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
    }

    private registerCompletion(monaco: any) {
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


    /*  monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
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

    private registerLinks(monaco: any) {
        monaco.languages.registerLinkProvider(PL, {
            provideLinks: function (model, _token) {
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
                        let comment = false;
                        while (match.index >= 0) {
                            if (lines[i][match.index] === '#') {
                                comment = true;
                                break;
                            }
                            match.index--;
                        }
                        if (!comment) {
                            let index = lines[i].indexOf('@');
                            if (index === -1) {
                                index = lines[i].indexOf('/');
                                if (index === -1) {
                                    index = match.index;
                                }
                            }
                            const url = match.pop();
                            links.push({
                                range: new monaco.Range(i + 1, index + 1, i + 1, index + url.length + 2),
                                url: url,
                            });
                        }
                    }
                }
                return links;
            },
            resolveLink: function (link, _token) {
                return link;
            }
        });
    }

    private registerHover(monaco: any) {
 /*        monaco.languages.registerHoverProvider(PREMIER_LANGAGE, {
            provideHover: function (model, position) {
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
    }

    private registerFolding(monaco: any) {
        monaco.languages.registerFoldingRangeProvider(PL, {
            provideFoldingRanges: function (model) {
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
    }
}

interface IEditorInfo {
    editor: IStandaloneCodeEditor;
    disposables: monaco.IDisposable[];
}
