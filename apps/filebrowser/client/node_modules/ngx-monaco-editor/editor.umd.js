(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/common', '@angular/core', 'rxjs', '@angular/forms'], factory) :
	(factory((global.td = global.td || {}, global.td.editor = {}),global.ng.common,global.ng.core,global.Rxjs,global.ng.forms));
}(this, (function (exports,common,core,rxjs,forms) { 'use strict';

var NGX_MONACO_EDITOR_CONFIG = new core.InjectionToken('NGX_MONACO_EDITOR_CONFIG');

var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var loadedMonaco = false;
var loadPromise;
var BaseEditor = /** @class */ (function () {
    function BaseEditor(config) {
        this.config = config;
        this.onInit = new core.EventEmitter();
    }
    Object.defineProperty(BaseEditor.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = Object.assign({}, this.config.defaultOptions, options);
            if (this._editor) {
                this._editor.dispose();
                this.initMonaco(options);
            }
        },
        enumerable: true,
        configurable: true
    });
    BaseEditor.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then(function () {
                _this.initMonaco(_this.options);
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise(function (resolve) {
                var baseUrl = _this.config.baseUrl || '/assets';
                if (typeof (window.monaco) === 'object') {
                    resolve();
                    return;
                }
                var onGotAmdLoader = function () {
                    // Load monaco
                    window.require.config({ paths: { 'vs': baseUrl + "/monaco/vs" } });
                    window.require(['vs/editor/editor.main'], function () {
                        if (typeof _this.config.onMonacoLoad === 'function') {
                            _this.config.onMonacoLoad();
                        }
                        _this.initMonaco(_this.options);
                        resolve();
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    var loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = baseUrl + "/monaco/vs/loader.js";
                    loaderScript.addEventListener('load', onGotAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onGotAmdLoader();
                }
            });
        }
    };
    BaseEditor.prototype.ngOnDestroy = function () {
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    };
    __decorate$2([
        core.ViewChild('editorContainer'),
        __metadata$1("design:type", core.ElementRef)
    ], BaseEditor.prototype, "_editorContainer", void 0);
    __decorate$2([
        core.Output(),
        __metadata$1("design:type", Object)
    ], BaseEditor.prototype, "onInit", void 0);
    __decorate$2([
        core.Input('options'),
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [Object])
    ], BaseEditor.prototype, "options", null);
    return BaseEditor;
}());

var __extends = (window && window.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
        this._windowResizeSubscription = rxjs.fromEvent(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate$1([
        core.Input('originalModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "originalModel", null);
    __decorate$1([
        core.Input('modifiedModel'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent.prototype, "modifiedModel", null);
    DiffEditorComponent = __decorate$1([
        core.Component({
            selector: 'ngx-monaco-diff-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "]
        }),
        __param(0, core.Inject(NGX_MONACO_EDITOR_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], DiffEditorComponent);
    return DiffEditorComponent;
}(BaseEditor));

var __extends$1 = (window && window.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EditorComponent = /** @class */ (function (_super) {
    __extends$1(EditorComponent, _super);
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
        this._windowResizeSubscription = rxjs.fromEvent(window, 'resize').subscribe(function () { return _this._editor.layout(); });
        this.onInit.emit(this._editor);
    };
    __decorate$3([
        core.Input('model'),
        __metadata$2("design:type", Object),
        __metadata$2("design:paramtypes", [Object])
    ], EditorComponent.prototype, "model", null);
    EditorComponent = EditorComponent_1 = __decorate$3([
        core.Component({
            selector: 'ngx-monaco-editor',
            template: '<div class="editor-container" #editorContainer></div>',
            styles: ["\n    :host {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container {\n      width: 100%;\n      height: 98%;\n    }\n  "],
            providers: [{
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: core.forwardRef(function () { return EditorComponent_1; }),
                    multi: true
                }]
        }),
        __param$1(1, core.Inject(NGX_MONACO_EDITOR_CONFIG)),
        __metadata$2("design:paramtypes", [core.NgZone, Object])
    ], EditorComponent);
    return EditorComponent;
    var EditorComponent_1;
}(BaseEditor));

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        core.NgModule({
            imports: [
                common.CommonModule
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

exports.MonacoEditorModule = MonacoEditorModule;
exports.NGX_MONACO_EDITOR_CONFIG = NGX_MONACO_EDITOR_CONFIG;

Object.defineProperty(exports, '__esModule', { value: true });

})));
