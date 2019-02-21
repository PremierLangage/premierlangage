import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

export const PREMIER_LANGAGE = 'premierlangage';

export const LANGUAGES = {
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

export const CODE_LENS_PROVIDER = [];

export const MONACO_CONFIG: NgxMonacoEditorConfig = {
    baseUrl: '/static/filebrowser/app/assets', // configure base path for monaco editor
    defaultOptions: {
      value: '',
      theme: PREMIER_LANGAGE,
      language: '',
      renderWhitespace: 'all',
      renderControlCharacters: true, // Enable rendering of control characters. Defaults to false.
      renderLineHighlight: true, // Enable rendering of current line highlight. Defaults to all. "none" | "gutter" | "line" | "all"
      renderIndentGuides: true, // Enable rendering of indent guides. Defaults to true.
      automaticLayout: true,
      lineNumbers: 'on', // on | off | relative | interval | (line: number) -> string
      roundedSelection: true, // Render the editor selection with rounded borders. Defaults to true.
      scrollBeyondLastLine: false, // Enable that scrolling can go one screen size after the last line. Defaults to true.
      scrollbar: {
          verticalScrollbarSize: 7,
          horizontalScrollbarSize: 7,
      },
    },
    onMonacoLoad: onMonacoLoad
};

export function onMonacoLoad() {
    const monaco = (<any>window).monaco;
    monaco.languages.register({ id: PREMIER_LANGAGE });

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider(PREMIER_LANGAGE, {
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

    monaco.editor.defineTheme(PREMIER_LANGAGE, {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
      ]
    });
}
