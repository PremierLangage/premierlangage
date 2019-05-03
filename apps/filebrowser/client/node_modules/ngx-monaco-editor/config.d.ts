import { InjectionToken } from '@angular/core';
export declare const NGX_MONACO_EDITOR_CONFIG: InjectionToken<{}>;
export interface NgxMonacoEditorConfig {
    baseUrl?: string;
    defaultOptions?: {
        [key: string]: any;
    };
    onMonacoLoad?: Function;
}
