var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
var loadedMonaco = false;
var loadPromise;
var BaseEditor = /** @class */ (function () {
    function BaseEditor(config) {
        this.config = config;
        this.onInit = new EventEmitter();
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
    __decorate([
        ViewChild('editorContainer'),
        __metadata("design:type", ElementRef)
    ], BaseEditor.prototype, "_editorContainer", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], BaseEditor.prototype, "onInit", void 0);
    __decorate([
        Input('options'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], BaseEditor.prototype, "options", null);
    return BaseEditor;
}());
export { BaseEditor };
