import { Subject } from 'rxjs';
import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

/** Subject that emit first time monaco editor is loaded */
export const MONACO_LOADED = new Subject();

export const MONACO_CONFIG: NgxMonacoEditorConfig = {
    baseUrl: '/static/filebrowser/app/assets', // configure base path for monaco editor
    defaultOptions: {},
    onMonacoLoad: onMonacoLoad
};

export function onMonacoLoad() {
    MONACO_LOADED.next((<any>window).monaco);
}
