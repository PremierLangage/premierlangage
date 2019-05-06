var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject, Input } from '@angular/core';
import { BaseEditor } from './base-editor';
import { NGX_MONACO_EDITOR_CONFIG } from './config';
import { fromEvent } from 'rxjs';
var DiffEditorComponent = /** @class */ (function (_super) {
    __extends(DiffEditorComponent, _super);
    function DiffEditorComponent(editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.editorConfig = editorConfig;
        return _this;
    }
    Object.defineProperty(DiffEditorComponent.prototype, "originalModel", {
        set: function (model) {
            this._originalModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiffEditorComponent.prototype, "modifiedModel", {
        set: function (model) {
            this._modifiedModel = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    DiffEditorComponent.prototype.initMonaco = function (options) {
        var _this = this;
        if (!this._originalModel || !this._modifiedModel) {
            throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
        }
        this._originalModel.language = this._originalModel.language || options.language;
        this._modifiedModel.language = this._modifiedModel.language || options.language;
        var originalModel = monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
        var modifiedModel = monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);
        this._editorContainer.nativeElement.innerHTML = '';
        this._editor = monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
        this._editor.setModel({
            original: originalModel,
            modified: modifiedModel
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate([
        Input('originalModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "originalModel", null);
    __decorate([
        Input('modifiedModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "modifiedModel", null);
    DiffEditorComponent = __decorate([
        Component({
            selector: 'ngx-monaco-diff-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "]
        }),
        __param(0, Inject(NGX_MONACO_EDITOR_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent);
    return DiffEditorComponent;
}(BaseEditor));
export { DiffEditorComponent };
