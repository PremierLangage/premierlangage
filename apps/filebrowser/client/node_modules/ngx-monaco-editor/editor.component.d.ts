import { NgZone } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseEditor } from './base-editor';
import { NgxMonacoEditorConfig } from './config';
import { NgxEditorModel } from './types';
export declare class EditorComponent extends BaseEditor implements ControlValueAccessor {
    private zone;
    private editorConfig;
    private _value;
    propagateChange: (_: any) => void;
    onTouched: () => void;
    model: NgxEditorModel;
    constructor(zone: NgZone, editorConfig: NgxMonacoEditorConfig);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    protected initMonaco(options: any): void;
}
