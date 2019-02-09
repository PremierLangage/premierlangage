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
      lineNumbers: "on", // on | off | relative | interval | (line: number) -> string
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
    const editor = monaco.editor;

    const SPECIAL_PATTERN = /(title|author|introduction|introductionh|teacher|text|texth|build|before|form|template|extends|builder|grader)(?=(=|(\+=)|=%))/;
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
    editor.defineTheme(PREMIER_LANGAGE, {
      base: 'vs',
      inherit: true,
      rules: [
          { token: 'special', foreground: '1382dd', fontStyle: 'bold' },
          { token: 'variable', foreground: '1382dd' },
      ]
    });
}