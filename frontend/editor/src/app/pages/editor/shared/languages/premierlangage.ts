import { LanguageDefinition } from './language';
import { Injectable } from '@angular/core';
import { CompilerService } from '../services/compiler.service';

// tslint:disable: max-line-length

/**
 * Provides syntax highlighter for pl and pltp files inside monaco editor.
 */
@Injectable({ providedIn: 'root' })
export class PremierLangage implements LanguageDefinition {

    /** Regex expression that matches files referenced inside pl and pltp files */
    private static readonly REFERENCE_PATTERN = /(@|(?:\$=)|(?:template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/-]+)/;

    // Modify the rule multiline inside the method registerMonarch if this is modified !!!
    /** Regex expression that matches the start of multiline keys inside pl and pltp files */
    private static readonly MULTI_LINE_PATTERN = /^[a-zA-Z_](\.?\w+)*\s*((==)|(%=)|((\+|-)=(?!@)))/;

    /** Regex expression that matches the end of multiline keys inside pl and pltp files */
    private static readonly END_MULTI_LINE_PATTERN = /^==\s*$/;

    /** Built-in keys of premier langage */
    private static readonly BUILT_IN = {
        title: 'Title of the exercise',
        author: 'Author of the exercice',
        introduction: 'Introduction of a PLTP',
        teacher: 'Notes only visible for the teachers in a PLTP page',
        text: 'Instructions of the exercise for the students.',
        form: 'HTML of the exercise',
        template: 'Extends a PL',
        extends: 'Extends a PL',
        extracss: 'Extra css of the PL',
        extrajs: 'Extra scripts of the page'
    };

    readonly id = 'pl';
    readonly extensions =  ['.pl', '.pltp'];

    constructor(private readonly compiler: CompilerService) {}

    /**
     * Registers syntax highlighter for pl language inside monaco editor using
     * the monarch api described at :
     * https://microsoft.github.io/monaco-editor/monarch.html
     */
    syntax() {
        return {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'form', 'template',
                'extracss', 'extrajs', 'extends'
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
                  [/.*|\n/, { token: 'text', next: '@pop' }]
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
        } as any;
    }

    hoversProviders(): monaco.languages.HoverProvider[] {
        return [
            {
                provideHover: (model, position) => {
                    const symbol = this.findSymbol(model, position);
                    if (symbol) {
                        const ast = this.compiler.getAST();
                        const contents: monaco.IMarkdownString[] = [];
                        const definition = ast['__definitions'][symbol];

                        contents.push({ value: `${definition.file}: ${definition.lineno}` });
                        if  (symbol in PremierLangage.BUILT_IN) {
                            contents.push({ value: PremierLangage.BUILT_IN[symbol] });
                        }
                        if (definition.doc) {
                            contents.push({ value: definition.doc });
                        }

                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(model.getLineCount())),
                            contents: contents
                        };
                    }

                    return null;
                }
            }
        ];
    }

    linksProviders(): monaco.languages.LinkProvider[] {
        return [
            {
                provideLinks: function (model: monaco.editor.ITextModel, _token: monaco.CancellationToken) {
                    const links: monaco.languages.ILink[] = [];
                    try {
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
                    } catch {
                        // TODO freeze on firefox
                    }

                    return links;
                },
                resolveLink: function (link, _) {
                    console.log(link);
                    return link;
                }
            }
        ];
    }

    foldingsProviders(): monaco.languages.FoldingRangeProvider[] {
        return [
            {
                provideFoldingRanges: (model) => {
                    const ranges = [];
                    try {
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
                    } catch {}
                    return ranges;
                }
            }
        ];
    }

    completionsProviders(): monaco.languages.CompletionItemProvider[] {
        return [
            /*
            {
                provideCompletionItems: (model: monaco.editor.ITextModel, position: monaco.Position) => {
                    // 10 is an arbitrary number to provide completion only for line starts.
                    if (position.column > 10) {
                        return null;
                    }
                    // const line = model.getLineContent(position.lineNumber);
                    const suggestions = Object.keys(PremierLangage.BUILT_IN).map(name => {
                        let embed = 'python';
                        switch (name) {
                            case 'evaluator':
                            case 'before':
                                embed = 'python';
                                break;
                            case 'title':
                            case 'text':
                            case 'form':
                            case 'extrajs':
                            case 'extracss':
                            case 'form':
                                embed = 'html';
                                break;
                        }
                        return {
                            label: name,
                            detail: PremierLangage.BUILT_IN[name],
                            insertText: `${name} == #|${embed}| \n\n==`,
                            kind: monaco.languages.CompletionItemKind.Snippet,
                        };
                    });
                    return { suggestions } as monaco.languages.CompletionList;
                },
            },
            */
            {
                triggerCharacters: ['='],
                provideCompletionItems: (model, position) => {
                    const ast = this.compiler.getAST();
                    if (ast) {
                        const definitions = ast['__definitions'];
                        const suggestions  = Object.keys(definitions).map(name => {
                            return {
                                label: name,
                                detail: definitions[name].doc || definitions[name].file,
                                insertText: name,
                                kind: monaco.languages.CompletionItemKind.Property,
                            };
                        });
                        // return { suggestions } as monaco.languages.CompletionList;
                        return suggestions;
                    }
                    return null;
                },
            },
            {
                triggerCharacters: ['{'],
                provideCompletionItems: (model: monaco.editor.ITextModel, position: monaco.Position) => {
                    const ast = this.compiler.getAST();
                    if (ast) {
                        const definitions = ast['__definitions'];
                        const suggestions = Object.keys(definitions).map(name => {
                            return {
                                label: name,
                                detail: 'Insert content of ' + name,
                                insertText: `{{ ${name} }}`,
                                kind: monaco.languages.CompletionItemKind.Snippet,
                            };
                        });
                        // return { suggestions } as monaco.languages.CompletionList;
                        return suggestions;
                    }
                    return null;
                },
            }
        ];
    }

    /**
     * Finds a symbol in the symbol tree according to the position
     * of the cursor
     * @param model editor text model
     * @param position cursor position in the editor.
     * @returns a symbol name or null
     */
    private findSymbol(model: monaco.editor.ITextModel, position: monaco.Position) {
        function isAlphaNumeric(str: string) {
            if (!str) {
                return false;
            }
            let code: number, i: number, len: number;
            for (i = 0, len = str.length; i < len; i++) {
                code = str.charCodeAt(i);
                if (!(code > 47 && code < 58) && // numeric (0-9)
                    !(code > 64 && code < 91) && // upper alpha (A-Z)
                    !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
                }
            }
            return true;
        }

        function interpolationIndex(lineContent: string, colNum: number) {
            let i = colNum;
            let open = 0;
            while (i >= 0) {
                const c = lineContent[i];
                if (c === '{') {
                    open++;
                    if (open === 2) {
                        return i;
                    }
                    continue;
                }
                if (c !== '.' && c !== ' ' && !isAlphaNumeric(c)) {
                    break;
                }
                i--;
            }
            return -1;
        }

        const ast = this.compiler.getAST();
        if (!ast) {
            return null;
        }
        const definitions = ast['__definitions'];
        const token = model.getWordAtPosition(position);
        if (token) {
            const before = model.getValueInRange({
                startLineNumber: position.lineNumber, startColumn: 1,
                endLineNumber: position.lineNumber, endColumn: token.endColumn
            });

            const name = before.trim();
            if (definitions[name]) {
                return name;
            }

            const i = interpolationIndex(before, token.startColumn);
            if (i !== -1) {
                const lineContent = model.getLineContent(position.lineNumber);
                const text = lineContent.slice(i - 1, lineContent.length);
                const match = text.match(/\{\{\s*([^\s|\}]+)[^\}]*\}/);
                if (match && match.length === 2 && definitions[match[1]]) {
                    return match[1];
                }
            }
        }
    }
}
