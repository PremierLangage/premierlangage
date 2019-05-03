import { Component, ElementRef, Input, PLATFORM_ID, Inject } from '@angular/core';
import { MarkdownService } from './markdown.service';
// import './prism.languages';
import { isPlatformBrowser } from '@angular/common';
import * as Prism from 'prismjs';
var MarkdownComponent = (function () {
    function MarkdownComponent(mdService, el, platformId) {
        this.mdService = mdService;
        this.el = el;
        this.platformId = platformId;
        this.changeLog = [];
    }
    MarkdownComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MarkdownComponent.prototype, "path", {
        set: function (value) {
            if (value) {
                this._path = value;
                this.onPathChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "data", {
        set: function (value) {
            if (value) {
                this._data = value;
                this.onDataChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // on input
    // on input
    MarkdownComponent.prototype.onDataChange = 
    // on input
    function (data) {
        if (data) {
            this.el.nativeElement.innerHTML = this.mdService.compile(data);
        }
        else {
            this.el.nativeElement.innerHTML = '';
        }
        this.highlightContent(false);
    };
    /**
     *  After view init
     */
    /**
         *  After view init
         */
    MarkdownComponent.prototype.ngAfterViewInit = /**
         *  After view init
         */
    function () {
        if (this._path) {
            this.onPathChange();
        }
        else if (!this._data) {
            this.processRaw();
        }
    };
    MarkdownComponent.prototype.processRaw = function () {
        this._md = this.prepare(decodeHtml(this.el.nativeElement.innerHTML));
        this.el.nativeElement.innerHTML = this.mdService.compile(this._md);
        this.highlightContent(false);
    };
    /**
     * get remote conent;
     */
    /**
         * get remote conent;
         */
    MarkdownComponent.prototype.onPathChange = /**
         * get remote conent;
         */
    function () {
        var _this = this;
        this._ext = this._path && this._path.split('.').splice(-1).join();
        this.mdService.getContent(this._path)
            .then(function (data) {
            _this._md = _this._ext !== 'md' ? '```' + _this._ext + '\n' + data + '\n```' : data;
            _this.el.nativeElement.innerHTML = _this.mdService.compile(_this.prepare(_this._md));
            _this.highlightContent(false);
        }, function (err) { return _this.handleError; });
    };
    /**
     * catch http error
     */
    /**
         * catch http error
         */
    MarkdownComponent.prototype.handleError = /**
         * catch http error
         */
    function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Prepare string
     */
    /**
         * Prepare string
         */
    MarkdownComponent.prototype.prepare = /**
         * Prepare string
         */
    function (raw) {
        var _this = this;
        if (!raw) {
            return '';
        }
        if (this._ext === 'md' || !this.path) {
            var isCodeBlock_1 = false;
            return raw.split('\n').map(function (line) {
                if (_this.trimLeft(line).substring(0, 3) === "```") {
                    isCodeBlock_1 = !isCodeBlock_1;
                }
                return isCodeBlock_1 ? line : line.trim();
            }).join('\n');
        }
        return raw.replace(/\"/g, '\'');
    };
    /**
     * Trim left whitespace
     */
    /**
         * Trim left whitespace
         */
    MarkdownComponent.prototype.trimLeft = /**
         * Trim left whitespace
         */
    function (line) {
        return line.replace(/^\s+|\s+$/g, '');
    };
    /**
     * Use Prism to highlight code snippets only on the browser
     * @param {string} async param passed directly to Prism.highlightAll
     */
    /**
         * Use Prism to highlight code snippets only on the browser
         * @param {string} async param passed directly to Prism.highlightAll
         */
    MarkdownComponent.prototype.highlightContent = /**
         * Use Prism to highlight code snippets only on the browser
         * @param {string} async param passed directly to Prism.highlightAll
         */
    function (async) {
        if (isPlatformBrowser(this.platformId)) {
            Prism.highlightAll(async);
        }
    };
    MarkdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'markdown,[Markdown]',
                    template: '<ng-content></ng-content>',
                    styles: [
                        ".token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {\n            background: none;\n        }"
                    ]
                },] },
    ];
    /** @nocollapse */
    MarkdownComponent.ctorParameters = function () { return [
        { type: MarkdownService, },
        { type: ElementRef, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    MarkdownComponent.propDecorators = {
        "path": [{ type: Input },],
        "data": [{ type: Input },],
    };
    return MarkdownComponent;
}());
export { MarkdownComponent };
function decodeHtml(html) {
    // https://stackoverflow.com/a/7394787/588521
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}
//# sourceMappingURL=markdown.component.js.map