import { InjectionToken } from '@angular/core';

/** Representation of a language. */
export interface Language {
    /** the extension of the language */
    extension: string;
    /** unique identifier of the language */
    id: string;
    /** alias for the identifier */
    alias?: string[];
}

/** Definition of a Language */
export interface LanguageDefinition {
    /** identifier of the language */
    id: string;
    extensions?: string[];
    aliases?: string[];

    /** Syntax highlighter of the language. */
    syntax(): monaco.languages.IMonarchLanguage;

    /**
     * Provides informations when the mouse hover a word inside the editor.
     */
    hoversProviders(): monaco.languages.HoverProvider[];

    /**
     * Detects links inside pl and pltp files.
     */
    linksProviders(): monaco.languages.LinkProvider[];

    /**
     * Provides folding
     */
    foldingsProviders(): monaco.languages.FoldingRangeProvider[];

    /**
     * Provides autocompletion while typing.
     */
    completionsProviders(): monaco.languages.CompletionItemProvider[];

}

/** List of languages supported by the editor */
export const LANGUAGES: Language[] = [
    { extension: 'css', id: 'css' },
    { extension: 'scss', id: 'scss', alias: ['sass'] },
    { extension: 'less', id: 'less', alias: ['less'] },
    { extension: 'dockerfile', id: 'dockerfile', alias: ['docker'] },
    { extension: 'cs', id: 'csharp', alias: ['cs'] },
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

/** InjectionToken to provides new language to the editor */
export const LANGUAGE_PROVIDERS = new InjectionToken<LanguageDefinition[]>('Language Provider');
