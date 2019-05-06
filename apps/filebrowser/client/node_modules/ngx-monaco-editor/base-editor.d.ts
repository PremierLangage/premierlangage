import { AfterViewInit, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxMonacoEditorConfig } from './config';
export declare abstract class BaseEditor implements AfterViewInit, OnDestroy {
    private config;
    _editorContainer: ElementRef;
    onInit: EventEmitter<any>;
    protected _editor: any;
    private _options;
    protected _windowResizeSubscription: Subscription;
    options: any;
    constructor(config: NgxMonacoEditorConfig);
    ngAfterViewInit(): void;
    protected abstract initMonaco(options: any): void;
    ngOnDestroy(): void;
}
