import { BaseEditor } from './base-editor';
import { NgxMonacoEditorConfig } from './config';
import { DiffEditorModel } from './types';
export declare class DiffEditorComponent extends BaseEditor {
    private editorConfig;
    _originalModel: DiffEditorModel;
    _modifiedModel: DiffEditorModel;
    originalModel: DiffEditorModel;
    modifiedModel: DiffEditorModel;
    constructor(editorConfig: NgxMonacoEditorConfig);
    protected initMonaco(options: any): void;
}
