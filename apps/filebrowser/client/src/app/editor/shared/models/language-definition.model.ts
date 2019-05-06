// tslint:disable: max-line-length

import { MonacoService } from '../services/monaco/monaco.service';

export interface ILanguageDefinition {
    register(service: MonacoService);
}

export class PremierLanguage implements ILanguageDefinition {

    private static readonly ID = 'pl';
    private static readonly REFERENCE_PATTERN = /(@|(?:template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/-]+)/;
    private static readonly OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)|(\+=(?!@))/;
    private static readonly CLOSE_PATTERN = /^==\s*$/;
    private static readonly BUILT_IN_WORDS = {
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

    register(service: MonacoService) {
        const monaco = (<any>window).monaco;
        monaco.languages.register({
            id: PremierLanguage.ID,
            extensions: ['.pl', '.pltp'],
        });

        monaco.editor.defineTheme(PremierLanguage.ID, {
            base: 'vs',
            inherit: true,
            rules: [
              { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
          ]
        });

        this.registerMonarch(monaco);
        this.registerHover(monaco);
        this.registerLinks(monaco);
        this.registerFolding(monaco);
        this.registerCompletion(monaco);

    }

    private registerMonarch(monaco: any) {
        monaco.languages.setMonarchTokensProvider(PremierLanguage.ID, {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'build', 'before', 'form', 'template',
                'extracss', 'extrajs', 'evaluator', 'extends'
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
                                '@keywords': 'keyword',
                                '@default': 'key'
                            }
                        }
                    ],
                    [/#.*/, 'comment'],
                    [/==/, { token: 'open', next: '@embedded' }],
                    [/\+=(?!@)/, { token: 'open', next: '@embedded' }],
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

    private registerHover(monaco: any) {
         monaco.languages.registerHoverProvider(PremierLanguage.ID, {
            provideHover: function (model, position) {
                const content = model.getLineContent(position.lineNumber);
                const token = model.getWordAtPosition(position);
                if (token) {
                    // TODO checks if the word is not inside == == and is followed by and operator
                    const starts = content.startsWith(token.word);
                    if (starts && token.word in PremierLanguage.BUILT_IN_WORDS) {
                        const lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: PremierLanguage.BUILT_IN_WORDS[token.word] }
                            ]
                        };
                    }
                }
            }
        });
    }

    private registerLinks(monaco: any) {
        monaco.languages.registerLinkProvider(PremierLanguage.ID, {
            provideLinks: function (model, _token) {
                const links = [];
                const lines: string[] = model.getValue().split('\n');
                let match: RegExpExecArray;
                let i = 0;
                const length = lines.length;
                while (i < length) {
                    if (lines[i].match(PremierLanguage.OPEN_PATTERN)) {
                        i++;
                        while (i < length) {
                            if (lines[i].match(PremierLanguage.CLOSE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                        if (i >= length) {
                            break;
                        }
                    }

                    match = PremierLanguage.REFERENCE_PATTERN.exec(lines[i]);
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
                    i++;
                }
                return links;
            },
            resolveLink: function (link, _token) {
                return link;
            }
        });
    }

    private registerFolding(monaco: any) {
        monaco.languages.registerFoldingRangeProvider(PremierLanguage.ID, {
            provideFoldingRanges: function (model) {
                const ranges = [];
                const lines: string[] = model.getValue().split('\n');
                const length = lines.length;
                let i = 0, start = -1;
                while (i < length) {
                    if (lines[i].match(PremierLanguage.OPEN_PATTERN)) {
                        start = i;
                    } else if (lines[i].match(PremierLanguage.CLOSE_PATTERN)) {
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

    private registerCompletion(monaco: any) {
        monaco.languages.registerCompletionItemProvider(PremierLanguage.ID, {
            provideCompletionItems: (model, position) => {
                const line = model.getLineContent(position.lineNumber);
                if (line.includes('{{')) {
                    return [];
                }
                return Object.keys(PremierLanguage.BUILT_IN_WORDS).map(name => ({
                    label: name,
                    detail: PremierLanguage.BUILT_IN_WORDS[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }));
            },
        });
    }

}
