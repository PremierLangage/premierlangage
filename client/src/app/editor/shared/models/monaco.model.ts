import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { Subject } from 'rxjs';
import { Language } from './language.model';

/** Subject that emit first time monaco editor is loaded */
export const MONACO_LOADED = new Subject();
export const MONACO_CONFIG: NgxMonacoEditorConfig = {
    baseUrl: '/static/filebrowser/app/assets', // configure base path for monaco editor
    defaultOptions: {
      value: '',
      theme: 'vs',
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
      lightbulb: {
        enabled: true
      }
    },
    onMonacoLoad: onMonacoLoad
};
export function onMonacoLoad() {
    MONACO_LOADED.next((<any>window).monaco);
}
