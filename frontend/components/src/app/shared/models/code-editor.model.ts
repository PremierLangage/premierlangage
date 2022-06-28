export function onMonacoLoaded() {
    monaco.languages.register({
        id: 'premierlangage',
        extensions: ['pl'],
    });

    monaco.languages.setMonarchTokensProvider('premierlangage', {
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
    } as any);
}

export interface CodeDocument {
    code: string;
    language: string;
    defaultCode: string;
}
