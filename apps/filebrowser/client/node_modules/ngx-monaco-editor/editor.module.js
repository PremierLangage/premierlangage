var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NGX_MONACO_EDITOR_CONFIG } from './config';
import { DiffEditorComponent } from './diff-editor.component';
import { EditorComponent } from './editor.component';
var MonacoEditorModule = /** @class */ (function () {
    function MonacoEditorModule() {
    }
    MonacoEditorModule_1 = MonacoEditorModule;
    MonacoEditorModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: MonacoEditorModule_1,
            providers: [
                { provide: NGX_MONACO_EDITOR_CONFIG, useValue: config }
            ]
        };
    };
    MonacoEditorModule = MonacoEditorModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                EditorComponent,
                DiffEditorComponent
            ],
            exports: [
                EditorComponent,
                DiffEditorComponent
            ]
        })
    ], MonacoEditorModule);
    return MonacoEditorModule;
    var MonacoEditorModule_1;
}());
export { MonacoEditorModule };
