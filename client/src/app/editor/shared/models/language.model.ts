export interface Language {
    extension: string;
    id: string;
}

export const LANGUAGES: Language[] = [
    { extension: 'css', id: 'css' },
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
    { extension: 'c', id: 'cpp'},
    { extension: 'cpp', id: 'cpp'},
    { extension: 'h', id: 'cpp'},
    { extension: 'xml', id: 'xml'},
    { extension: 'bat', id: 'bat'},
    { extension: 'ini', id: 'ini'},
    { extension: 'php', id: 'php'},
    { extension: 'pl', id: 'pl' },
    { extension: 'pltp', id: 'pl' }
];
