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
import { Component, forwardRef, Inject, Input, NgZone } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseEditor } from './base-editor';
import { NGX_MONACO_EDITOR_CONFIG } from './config';
import { fromEvent } from 'rxjs';
var EditorComponent = /** @class */ (function (_super) {
    __extends(EditorComponent, _super);
    function EditorComponent(zone, editorConfig) {
        var _this = _super.call(this, editorConfig) || this;
        _this.zone = zone;
        _this.editorConfig = editorConfig;
        _this._value = '';
        _this.propagateChange = function (_) { };
        _this.onTouched = function () { };
        return _this;
    }
    EditorComponent_1 = EditorComponent;
    Object.defineProperty(EditorComponent.prototype, "model", {
        set: function (model) {
            this.options.model = model;
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(this.options);
            }
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent.prototype.writeValue = function (value) {
        var _this = this;
        this._value = value || '';
        // Fix for value change while dispose in process.
        setTimeout(function () {
            if (_this._editor && !_this.options.model) {
                _this._editor.setValue(_this._value);
            }
        });
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    EditorComponent.prototype.initMonaco = function (options) {
        var _this = this;
        var hasModel = !!options.model;
        if (hasModel) {
            options.model = monaco.editor.createModel(options.model.value, options.model.language, options.model.uri);
        }
        this._editor = monaco.editor.create(this._editorContainer.nativeElement, options);
        if (!hasModel) {
            this._editor.setValue(this._value);
        }
        this._editor.onDidChangeModelContent(function (e) {
            var value = _this._editor.getValue();
            _this.propagateChange(value);
            // value is not propagated to parent when executing outside zone.
            _this.zone.run(function () { return _this._value = value; });
        });
        this._editor.onDidBlurEditor(function (e) {
            _this.onTouched();
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate([
        Input('model'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EditorComponent.prototype, "model", null);
    EditorComponent = EditorComponent_1 = __decorate([
        Component({
            selector: 'ngx-monaco-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "],
            providers: [{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return EditorComponent_1; }),
                    multi: true
                }]
        }),
        __param(1, Inject(NGX_MONACO_EDITOR_CONFIG)),
        __metadata("design:paramtypes", [NgZone, Object])
    ], EditorComponent);
    return EditorComponent;
    var EditorComponent_1;
}(BaseEditor));
export { EditorComponent };
