import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as markedNs from 'marked';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
var MarkdownService = (function () {
    function MarkdownService() {
        this._renderer = new markedNs.Renderer();
        this.extendRenderer();
        this.setMarkedOptions({});
    }
    //get the content from remote resource
    //get the content from remote resource
    MarkdownService.prototype.getContent = 
    //get the content from remote resource
    function (path) {
        return fetch(path).then(this.extractData).catch(this.handleError);
    };
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: function () {
            return this._renderer;
        },
        enumerable: true,
        configurable: true
    });
    // handle data
    // handle data
    MarkdownService.prototype.extractData = 
    // handle data
    function (res) {
        return res.text() || '';
    };
    MarkdownService.prototype.setMarkedOptions = function (options) {
        options = Object.assign({
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
        }, options);
        options.renderer = this._renderer;
        markedNs.setOptions(options);
    };
    // comple markdown to html
    // comple markdown to html
    MarkdownService.prototype.compile = 
    // comple markdown to html
    function (data) {
        return markedNs(data);
    };
    //handle error
    //handle error
    MarkdownService.prototype.handleError = 
    //handle error
    function (error) {
        var errMsg;
        if (error instanceof fetch) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    };
    // extend marked render to support todo checkbox
    // extend marked render to support todo checkbox
    MarkdownService.prototype.extendRenderer = 
    // extend marked render to support todo checkbox
    function () {
        this._renderer.listitem = function (text) {
            if (/^\s*\[[x ]\]\s*/.test(text)) {
                text = text
                    .replace(/^\s*\[ \]\s*/, '<input type="checkbox" style=" vertical-align: middle; margin: 0 0.2em 0.25em -1.6em; font-size: 16px; " disabled> ')
                    .replace(/^\s*\[x\]\s*/, '<input type="checkbox" style=" vertical-align: middle; margin: 0 0.2em 0.25em -1.6em; font-size: 16px; " checked disabled> ');
                return '<li style="list-style: none">' + text + '</li>';
            }
            else {
                return '<li>' + text + '</li>';
            }
        };
    };
    MarkdownService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MarkdownService.ctorParameters = function () { return []; };
    return MarkdownService;
}());
export { MarkdownService };
//# sourceMappingURL=markdown.service.js.map