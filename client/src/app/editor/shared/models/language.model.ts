// tslint:disable: max-line-length
import { InjectionToken } from '@angular/core';

/** Representation of a language. */
export interface Language {
    /** the extension of the language */
    extension: string;
    /** unique identifier of the language */
    id: string;
}

/** List of languages supported by the editor */
export const LANGUAGES: Language[] = [
    { extension: 'css', id: 'css' },
    { extension: 'scss', id: 'scss' },
    { extension: 'less', id: 'less' },
    { extension: 'scss', id: 'scss' },
    { extension: 'dockerfile', id: 'dockerfile' },
    { extension: 'cs', id: 'csharp' },
    { extension: 'js', id: 'javascript'},
    { extension: 'ts', id: 'typescript'},
    { extension: 'html', id: 'html'},
    { extension: 'md', id: 'markdown'},
    { extension: 'py', id: 'python'},
    { extension: 'r', id: 'r'},
    { extension: 'sql', id: 'sql'},
    { extension: 'mysql', id: 'mysql'},
    { extension: 'java', id: 'java'},
    { extension: 'c', id: 'c'},
    { extension: 'cpp', id: 'cpp'},
    { extension: 'h', id: 'cpp'},
    { extension: 'xml', id: 'xml'},
    { extension: 'yaml', id: 'yaml'},
    { extension: 'bat', id: 'bat'},
    { extension: 'sh', id: 'bat'},
    { extension: 'ini', id: 'ini'},
    { extension: 'php', id: 'php'},
    { extension: 'pl', id: 'pl' },
    { extension: 'pltp', id: 'pl' },
    { extension: 'swift', id: 'swift' }
];

export interface ILanguageDefinition {
    /**
     * Registers the language to monaco API.
     */
    register();
}

/** InjectionToken to provides new language to the editor */
export const LANGUAGE_PROVIDERS = new InjectionToken<ILanguageDefinition[]>('Language Provider');

/**
 * Provides syntax highlighter for pl and pltp files inside monaco editor.
 */
export class PremierLangage implements ILanguageDefinition {
    /** Premier langage identifier */
    private static readonly ID = 'pl';

    /** Regex expression that matches files referenced inside pl and pltp files */
    private static readonly REFERENCE_PATTERN = /(@|(?:\$=)|(?:template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/-]+)/;

    // Modify the rule multiline inside the method registerMonarch if this is modified !!!
    /** Regex expression that matches the start of multiline keys inside pl and pltp files */
    private static readonly MULTI_LINE_PATTERN = /^[a-zA-Z_](\.?\w+)*\s*((==)|(%=)|((\+|-)=(?!@)))/;

    /** Regex expression that matches the end of multiline keys inside pl and pltp files */
    private static readonly END_MULTI_LINE_PATTERN = /^==\s*$/;

    /** Built-in keys of premier langage */
    private static readonly BUILT_IN = {
        title: 'Titre de l\'exercice/feuille d\'exercice',
        author: 'Auteur de l\'exercice',
        introduction: 'Présentation de la feuille d\'exercice, le contenu de cette clé est interprété comme du markdown.',
        teacher: 'Sur un PLTP, affiche un note visible par les enseignant seulement',
        text: 'Énoncé de l\'exercice, le contenu de cette clé est interprété comme du markdown.',
        build: 'Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), à utiliser avec le builder /builder/build.py',
        before: 'Code python permettant de modifier l\'exercice avant son exécution sur le navigateur',
        form: 'Formulaire HTML permettant à l\'élève de répondre',
        template: 'Définie template comme étant la base de ce fichier',
        extracss: 'Ajoute des feuilles de styles supplémentaires à la page HTML',
        extrajs: 'Ajoute des scripts supplémentaires à la page HTML'
    };

    /**
     * Registers the language to monaco API.
     */
    register() {
        const monaco = (<any>window).monaco;

        monaco.languages.register({
            id: PremierLangage.ID,
            extensions: ['.pl', '.pltp'],
        });

        monaco.editor.defineTheme(PremierLangage.ID, {
            base: 'vs',
            inherit: true,
            rules: [
              { token: 'text', foreground: '000000' },
              { token: 'operator', foreground: 'a31515' }
          ]
        });

        this.registerMonarch(monaco);
        this.registerHover(monaco);
        this.registerLinks(monaco);
        this.registerFolding(monaco);
        this.registerCompletion(monaco);
    }

    /**
     * Registers syntax highlighter for pl language inside monaco editor using
     * the monarch api described at :
     *
     * https://microsoft.github.io/monaco-editor/monarch.html
     * @param monaco instance of monaco editor object.
     */
    private registerMonarch(monaco: any) {
        monaco.languages.setMonarchTokensProvider(PremierLangage.ID, {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'build', 'before', 'form', 'template',
                'extracss', 'extrajs', 'evaluator', 'extends'
            ],
            tokenizer: {
                root: [
                    // KEYS
                    [
                        /^[a-zA-Z_](\.?\w+)*/, {
                            cases: {
                                '@keywords': 'keyword',
                                '@default': 'keyword'
                            }
                        }
                    ],

                    // COMMENT
                    [/#.*/, 'comment'],

                    // SANDBOX FILE
                    [/@.+/, 'text'],

                    // MULTI LINE OPERATORS
                    [/(==)|(%=)|((\+|-)=(?!@))/, { token: 'operator', bracket: '@open', next: '@multiline' }],

                    // ONE LINE OPERATORS
                    [/((=@)|(\+=@)|(-=@)|(\$=)|=|\+|\-|\%)/, { token: 'operator', next: '@oneline' }],

                    // NUMBERS
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],

                    // WHITESPACE
                    { include: '@whitespace' },
                ],


                oneline: [
                  [/.+/, { token: 'text', next: '@pop' }]
                ],


                multiline: [
                    [/#\|(\w+)\|/, { token: 'string', next: '@embedded', nextEmbedded: '$1' }],
                    [/\{\{\s*[a-zA-Z_](\.?\w+)*\s*\}\}/, 'keyword'],
                    [/^==\s*$/, { token: 'operator', bracket: '@close', next: '@popall' }],
                    [/./, 'text'],
                ],


                embedded: [
                    [/^==\s*$/, { token: 'operator', bracket: '@close', next: '@popall', nextEmbedded: '@pop' }],
                ],


                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                ],
            },
        });
    }

    /**
     * Provides informations when the mouse hover a word inside the editor.
     * @param monaco instance of monaco editor object.
     */
    private registerHover(monaco: any) {
         monaco.languages.registerHoverProvider(PremierLangage.ID, {
            provideHover: function (model, position) {
                const content = model.getLineContent(position.lineNumber);
                const token = model.getWordAtPosition(position);
                if (token) {
                    if (token.startColumn === 1 && token.word in PremierLangage.BUILT_IN) {
                        const lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: PremierLangage.BUILT_IN[token.word] }
                            ]
                        };
                    }
                }
            }
        });
    }

    /**
     * Detects links inside pl and pltp files.
     * @param monaco instance of monaco editor object.
     */
    private registerLinks(monaco: any) {
        monaco.languages.registerLinkProvider(PremierLangage.ID, {
            provideLinks: function (model, _token) {

                const links = [];
                const lines: string[] = model.getValue().split('\n');
                const length = lines.length;

                let i = 0;
                let match: RegExpExecArray;

                while (i < length) {

                    if (lines[i].match(PremierLangage.MULTI_LINE_PATTERN)) {
                        i++;
                        while (i < length) {
                            if (lines[i].match(PremierLangage.END_MULTI_LINE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                        if (i >= length) {
                            break;
                        }
                    }

                    match = PremierLangage.REFERENCE_PATTERN.exec(lines[i]);
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
                            const url = match.pop();
                            const index = lines[i].indexOf(url);
                            links.push({
                                range: new monaco.Range(i + 1, index + 1, i + 1, index + url.length + 2),
                                url: url,
                            });
                        }
                    }
                    i++;
                }
                return links;
            },
            resolveLink: function (link, _token) {
                return link;
            }
        });
    }

    /**
     * Provides folding for multi line keys.
     * @param monaco instance of monaco editor object.
     */
    private registerFolding(monaco: any) {
        monaco.languages.registerFoldingRangeProvider(PremierLangage.ID, {
            provideFoldingRanges: function (model) {
                const ranges = [];
                const lines: string[] = model.getValue().split('\n');
                const length = lines.length;
                let i = 0, start = -1;
                while (i < length) {
                    if (lines[i].match(PremierLangage.MULTI_LINE_PATTERN)) {
                        start = i;
                    } else if (lines[i].match(PremierLangage.END_MULTI_LINE_PATTERN)) {
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

    /**
     * Provides autocompletion while typing.
     * @param monaco instance of monaco editor object.
     */
    private registerCompletion(monaco: any) {
        monaco.languages.registerCompletionItemProvider(PremierLangage.ID, {
            provideCompletionItems: (model, position) => {
                // 10 is an arbitrary number to provide completion only for line starts.
                if (position.column > 10) {
                    return [];
                }
                // const line = model.getLineContent(position.lineNumber);
                return Object.keys(PremierLangage.BUILT_IN).map(name => ({
                    label: name,
                    detail: PremierLangage.BUILT_IN[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }));
            },
        });
    }

}
