(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading></app-loading>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ask/ask.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ask/ask.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>ASK</h1>\n<quill-editor [modules]=\"modules\"> </quill-editor>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>courses</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{ data?.title }}</h4>\n<p *ngIf=\"data.message\" mat-dialog-content [innerHTML]=\"data?.message|trustHtml\"></p>\n<div mat-dialog-actions>\n    <button class=\"ok\" mat-button [mat-dialog-close]=\"true\">{{ data?.okTitle }}</button>\n    <button class=\"cancel\" mat-button [mat-dialog-close]=\"false\">{{ data?.noTitle }}</button>\n    <ng-container *ngIf=\"data.buttons\">\n        <ng-container *ngFor=\"let button of data.buttons\">\n            <button mat-button [mat-dialog-close]=\"button.id\">{{ button.title }}</button>\n        </ng-container>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"loader-wrapper\"  *ngIf='loading'>\n    <div id=\"loader\"></div>\n    <div class=\"loader-section section-left\"></div>\n    <div class=\"loader-section section-right\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{data?.title}}</h4>\n<div mat-dialog-content>\n\t<p [innerHTML]='data?.message|trustHtml'></p>\n\t<form>\n\t\t<mat-form-field class='full-width' *ngFor='let field of data.fields'>\n\t\t\t<input matInput name='field.value' autocomplete=\"on\" [type]='field.type' [placeholder]=\"field?.placeholder\" [(ngModel)]='field.value' >\n\t\t</mat-form-field>\n\t</form>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"data\">{{data.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data.noTitle}}</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tree/tree.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tree/tree.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-component\">\n    <ng-container *ngIf=\"options.onDidFilter\">\n        <span class=\"tree-input tree-input--filter\" [class.error]=\"filterOptions.error\">\n            <input\n                type=\"text\"\n                placeholder=\"Press Enter to filter\"\n                [(ngModel)]=\"filterOptions.query\"\n                (keydown.enter)=\"filter(search.value)\"\n                #search>\n        </span>\n        <mat-error *ngIf=\"filterOptions.error\">\n            {{ filterOptions.error }}\n        </mat-error>\n    </ng-container>\n\n    <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n        <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding matTreeNodePaddingIndent=\"16\"\n            id=\"tree-node-{{node.id}}\" tabindex=\"0\" class=\"tree-node-level-{{ node.level }}\" [ngClass]=\"{ active: node.active, selected: node.selected }\"\n            (keydown)=\"onKeyDown(node, $event)\" (focusin)=\"onFocus(node, $event)\">\n            <ng-container *ngIf=\"!node.renaming; else editingTemplate\">\n                <div class=\"node-content\" (click)=\"onClick(node)\" (contextmenu)=\"onContextMenu(node, $event)\">\n                    <ng-container *ngIf=\"template; else defaultTemplate\">\n                        <ng-container *ngTemplateOutlet=\"template; context: { $implicit: node }\"></ng-container>\n                    </ng-container>\n                    <ng-template #defaultTemplate> {{node.name}} </ng-template>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"node.creating\">\n                <ng-container *ngTemplateOutlet=\"editingTemplate\"></ng-container>\n            </ng-container>\n        </mat-tree-node>\n    </mat-tree>\n</div>\n\n<!-- EDITING STATE -->\n<ng-template #editingTemplate>\n  <div class=\"node-content\">\n    <span class=\"tree-input\">\n      <input autofocus\n              type='text'\n              placeholder='Press Enter to create ESC to cancel...'\n              [(ngModel)]=\"editing.label\"\n              (keydown)='onEdit($event)'\n              (blur)='onEdit($event)'/>\n      </span>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const editor_resolver_1 = __webpack_require__(/*! ./pages/editor/editor.resolver */ "./src/app/pages/editor/editor.resolver.ts");
const routes = [
    {
        path: 'editor',
        // loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule),
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./pages/ask/ask.module */ "./src/app/pages/ask/ask.module.ts")).then(m => m.AskModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule),
    },
    {
        path: 'ask',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./pages/ask/ask.module */ "./src/app/pages/ask/ask.module.ts")).then(m => m.AskModule),
    },
    {
        path: 'courses',
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./pages/courses/courses.module */ "./src/app/pages/courses/courses.module.ts")).then(m => m.CoursesModule),
    },
    { path: '**', redirectTo: 'editor', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, {
                enableTracing: false,
                preloadingStrategy: router_1.PreloadAllModules
            })
        ],
        providers: [editor_resolver_1.EditorResolver],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const overlay_1 = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const settings_model_1 = __webpack_require__(/*! ./pages/editor/shared/models/settings.model */ "./src/app/pages/editor/shared/models/settings.model.ts");
const settings_service_1 = __webpack_require__(/*! ./pages/editor/shared/services/settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
let AppComponent = class AppComponent {
    constructor(settings, overlayContainer) {
        this.settings = settings;
        this.overlayContainer = overlayContainer;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.setTheme('light-theme');
        this.subscriptions.push(this.settings.changed.subscribe(e => {
            this.setTheme(this.settings.get(settings_model_1.Settings.EDITOR_KEY, 'theme').value);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    setTheme(theme) {
        const container = this.overlayContainer.getContainerElement();
        container.classList.remove('dark-theme');
        container.classList.remove('light-theme');
        container.classList.add(theme);
        this.theme = theme;
    }
};
AppComponent.ctorParameters = () => [
    { type: settings_service_1.SettingsService },
    { type: overlay_1.OverlayContainer }
];
tslib_1.__decorate([
    core_1.HostBinding('class'),
    tslib_1.__metadata("design:type", String)
], AppComponent.prototype, "theme", void 0);
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [settings_service_1.SettingsService,
        overlay_1.OverlayContainer])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
const angular_split_1 = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js"); // https://www.npmjs.com/package/angular-split
const ngx_monaco_editor_1 = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js"); // https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0
const ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"); // https://www.npmjs.com/package/ngx-toastr
const ngx_markdown_1 = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js"); // https://www.npmjs.com/package/ngx-markdown
__webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
__webpack_require__(/*! prismjs/components/prism-c */ "./node_modules/prismjs/components/prism-c.js");
__webpack_require__(/*! prismjs/components/prism-cpp */ "./node_modules/prismjs/components/prism-cpp.js");
__webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
__webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
__webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
__webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
__webpack_require__(/*! prismjs/components/prism-markdown */ "./node_modules/prismjs/components/prism-markdown.js");
__webpack_require__(/*! prismjs/components/prism-python */ "./node_modules/prismjs/components/prism-python.js");
__webpack_require__(/*! prismjs/components/prism-sql */ "./node_modules/prismjs/components/prism-sql.js");
__webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const monaco_model_1 = __webpack_require__(/*! ./pages/editor/shared/models/monaco.model */ "./src/app/pages/editor/shared/models/monaco.model.ts");
const shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
const ngx_quill_1 = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpClientModule,
            http_1.HttpClientXsrfModule.withOptions({
                cookieName: 'csrftoken',
                headerName: 'X-CSRFToken',
            }),
            ngx_markdown_1.MarkdownModule.forRoot(),
            angular_split_1.AngularSplitModule.forRoot(),
            ngx_monaco_editor_1.MonacoEditorModule.forRoot(monaco_model_1.MONACO_CONFIG),
            ngx_toastr_1.ToastrModule.forRoot({ preventDuplicates: true }),
            ngx_quill_1.QuillModule.forRoot(),
            shared_module_1.SharedModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: []
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    get admin() {
        return this.user && this.user.is_superuser;
    }
    check() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.http.get('/profile/auth/', {
                    responseType: 'json'
                }).toPromise();
                this.user = response.authenticated ? response.user : null;
            }
            catch (_a) { }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: http_1.HttpClient }
];
AuthService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/core/task.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/task.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
let TaskService = class TaskService {
    constructor() {
        this.onRunningTask = new rxjs_1.Subject();
    }
    get running() {
        return this._running;
    }
    get taskName() {
        return this._taskName;
    }
    emitTaskEvent(running, taskName = null) {
        this._running = running;
        this._taskName = taskName;
        this.onRunningTask.next(running);
    }
};
TaskService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TaskService);
exports.TaskService = TaskService;


/***/ }),

/***/ "./src/app/pages/ask/ask-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ask/ask-routing.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const ask_component_1 = __webpack_require__(/*! ./ask.component */ "./src/app/pages/ask/ask.component.ts");
const routes = [
    { path: '', component: ask_component_1.AskComponent }
];
let AskRoutingModule = class AskRoutingModule {
};
AskRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], AskRoutingModule);
exports.AskRoutingModule = AskRoutingModule;


/***/ }),

/***/ "./src/app/pages/ask/ask.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/ask/ask.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzay9hc2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ask/ask.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/ask/ask.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let AskComponent = class AskComponent {
    constructor() {
        this.modules = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['link', 'image', 'video'] // link and image, video
            ]
        };
    }
    ngOnInit() {
    }
};
AskComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-ask',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./ask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ask/ask.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./ask.component.scss */ "./src/app/pages/ask/ask.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AskComponent);
exports.AskComponent = AskComponent;


/***/ }),

/***/ "./src/app/pages/ask/ask.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ask/ask.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const ask_routing_module_1 = __webpack_require__(/*! ./ask-routing.module */ "./src/app/pages/ask/ask-routing.module.ts");
const ask_component_1 = __webpack_require__(/*! ./ask.component */ "./src/app/pages/ask/ask.component.ts");
const ngx_quill_1 = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
let AskModule = class AskModule {
};
AskModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [ask_component_1.AskComponent],
        imports: [
            common_1.CommonModule,
            shared_module_1.SharedModule,
            ask_routing_module_1.AskRoutingModule,
            ngx_quill_1.QuillModule,
        ],
        exports: [],
        providers: [],
    })
], AskModule);
exports.AskModule = AskModule;


/***/ }),

/***/ "./src/app/pages/courses/courses-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/courses/courses-routing.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const courses_component_1 = __webpack_require__(/*! ./courses.component */ "./src/app/pages/courses/courses.component.ts");
const routes = [
    { path: '', component: courses_component_1.CoursesComponent }
];
let CoursesRoutingModule = class CoursesRoutingModule {
};
CoursesRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CoursesRoutingModule);
exports.CoursesRoutingModule = CoursesRoutingModule;


/***/ }),

/***/ "./src/app/pages/courses/courses.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/courses/courses.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/courses/courses.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/courses/courses.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let CoursesComponent = class CoursesComponent {
    constructor() { }
    ngOnInit() { }
};
CoursesComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-courses',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/courses/courses.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./courses.component.scss */ "./src/app/pages/courses/courses.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;


/***/ }),

/***/ "./src/app/pages/courses/courses.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/courses/courses.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const courses_component_1 = __webpack_require__(/*! ./courses.component */ "./src/app/pages/courses/courses.component.ts");
const courses_routing_module_1 = __webpack_require__(/*! ./courses-routing.module */ "./src/app/pages/courses/courses-routing.module.ts");
let CoursesModule = class CoursesModule {
};
CoursesModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [courses_component_1.CoursesComponent],
        imports: [common_1.CommonModule, shared_module_1.SharedModule, courses_routing_module_1.CoursesRoutingModule],
        exports: [],
        providers: [],
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;


/***/ }),

/***/ "./src/app/pages/editor/editor.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/editor/editor.resolver.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const notification_service_1 = __webpack_require__(/*! ../../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const resource_service_1 = __webpack_require__(/*! ./shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const settings_service_1 = __webpack_require__(/*! ./shared/services/settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
const auth_service_1 = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
const git_service_1 = __webpack_require__(/*! ./shared/services/git.service */ "./src/app/pages/editor/shared/services/git.service.ts");
let EditorResolver = class EditorResolver {
    constructor(auth, git, settings, resources, notification) {
        this.auth = auth;
        this.git = git;
        this.settings = settings;
        this.resources = resources;
        this.notification = notification;
    }
    resolve(route, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.auth.check();
                yield this.resources.refresh();
                yield this.git.refresh().catch();
                yield this.settings.loadSettings();
            }
            catch (error) {
                this.notification.error(error.message);
            }
        });
    }
};
EditorResolver.ctorParameters = () => [
    { type: auth_service_1.AuthService },
    { type: git_service_1.GitService },
    { type: settings_service_1.SettingsService },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
EditorResolver = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService,
        git_service_1.GitService,
        settings_service_1.SettingsService,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], EditorResolver);
exports.EditorResolver = EditorResolver;


/***/ }),

/***/ "./src/app/pages/editor/shared/languages/language.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/editor/shared/languages/language.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/** List of languages supported by the editor */
exports.LANGUAGES = [
    { extension: 'css', id: 'css' },
    { extension: 'scss', id: 'scss', alias: ['sass'] },
    { extension: 'less', id: 'less', alias: ['less'] },
    { extension: 'dockerfile', id: 'dockerfile', alias: ['docker'] },
    { extension: 'cs', id: 'csharp', alias: ['cs'] },
    { extension: 'js', id: 'javascript' },
    { extension: 'ts', id: 'typescript' },
    { extension: 'html', id: 'html' },
    { extension: 'md', id: 'markdown' },
    { extension: 'py', id: 'python' },
    { extension: 'r', id: 'r' },
    { extension: 'sql', id: 'sql' },
    { extension: 'mysql', id: 'mysql' },
    { extension: 'java', id: 'java' },
    { extension: 'c', id: 'c' },
    { extension: 'cpp', id: 'cpp' },
    { extension: 'h', id: 'cpp' },
    { extension: 'xml', id: 'xml' },
    { extension: 'yaml', id: 'yaml' },
    { extension: 'bat', id: 'bat' },
    { extension: 'sh', id: 'bat' },
    { extension: 'ini', id: 'ini' },
    { extension: 'php', id: 'php' },
    { extension: 'pl', id: 'pl' },
    { extension: 'pltp', id: 'pl' },
    { extension: 'swift', id: 'swift' }
];
/** InjectionToken to provides new language to the editor */
exports.LANGUAGE_PROVIDERS = new core_1.InjectionToken('Language Provider');


/***/ }),

/***/ "./src/app/pages/editor/shared/languages/premierlangage.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/shared/languages/premierlangage.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PremierLangage_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const compiler_service_1 = __webpack_require__(/*! ../services/compiler.service */ "./src/app/pages/editor/shared/services/compiler.service.ts");
// tslint:disable: max-line-length
/**
 * Provides syntax highlighter for pl and pltp files inside monaco editor.
 */
let PremierLangage = PremierLangage_1 = class PremierLangage {
    constructor(compiler) {
        this.compiler = compiler;
        this.id = 'pl';
        this.extensions = ['.pl', '.pltp'];
    }
    /**
     * Registers syntax highlighter for pl language inside monaco editor using
     * the monarch api described at :
     * https://microsoft.github.io/monaco-editor/monarch.html
     */
    syntax() {
        return {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'form', 'template',
                'extracss', 'extrajs', 'extends'
            ],
            tokenizer: {
                root: [
                    // KEYS
                    [
                        /^[a-zA-Z_](\.?\w+)*/, {
                            cases: {
                                '@keywords': 'keyword',
                                '@default': 'keyword'
                            }
                        }
                    ],
                    // COMMENT
                    [/#.*/, 'comment'],
                    // SANDBOX FILE
                    [/@.+/, 'text'],
                    // MULTI LINE OPERATORS
                    [/(==)|(%=)|((\+|-)=(?!@))/, { token: 'operator', bracket: '@open', next: '@multiline' }],
                    // ONE LINE OPERATORS
                    [/((=@)|(\+=@)|(-=@)|(\$=)|=|\+|\-|\%)/, { token: 'operator', next: '@oneline' }],
                    // NUMBERS
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    // WHITESPACE
                    { include: '@whitespace' },
                ],
                oneline: [
                    [/.*|\n/, { token: 'text', next: '@pop' }]
                ],
                multiline: [
                    [/#\|(\w+)\|/, { token: 'string', next: '@embedded', nextEmbedded: '$1' }],
                    [/\{\{\s*[a-zA-Z_](\.?\w+)*\s*\}\}/, 'keyword'],
                    [/^==\s*$/, { token: 'operator', bracket: '@close', next: '@popall' }],
                    [/./, 'text'],
                ],
                embedded: [
                    [/^==\s*$/, { token: 'operator', bracket: '@close', next: '@popall', nextEmbedded: '@pop' }],
                ],
                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                ],
            },
        };
    }
    hoversProviders() {
        return [
            {
                provideHover: (model, position) => {
                    const symbol = this.findSymbol(model, position);
                    if (symbol) {
                        const ast = this.compiler.getAST();
                        const contents = [];
                        const definition = ast['__definitions'][symbol];
                        contents.push({ value: `${definition.file}: ${definition.lineno}` });
                        if (symbol in PremierLangage_1.BUILT_IN) {
                            contents.push({ value: PremierLangage_1.BUILT_IN[symbol] });
                        }
                        if (definition.doc) {
                            contents.push({ value: definition.doc });
                        }
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(model.getLineCount())),
                            contents: contents
                        };
                    }
                    return null;
                }
            }
        ];
    }
    linksProviders() {
        return [
            {
                provideLinks: function (model, _token) {
                    const links = [];
                    try {
                        const lines = model.getValue().split('\n');
                        const length = lines.length;
                        let i = 0;
                        let match;
                        while (i < length) {
                            if (lines[i].match(PremierLangage_1.MULTI_LINE_PATTERN)) {
                                i++;
                                while (i < length) {
                                    if (lines[i].match(PremierLangage_1.END_MULTI_LINE_PATTERN)) {
                                        break;
                                    }
                                    i++;
                                }
                                if (i >= length) {
                                    break;
                                }
                            }
                            match = PremierLangage_1.REFERENCE_PATTERN.exec(lines[i]);
                            if (match) {
                                let comment = false;
                                while (match.index >= 0) {
                                    if (lines[i][match.index] === '#') {
                                        comment = true;
                                        break;
                                    }
                                    match.index--;
                                }
                                if (!comment) {
                                    const url = match.pop();
                                    const index = lines[i].indexOf(url);
                                    links.push({
                                        range: new monaco.Range(i + 1, index + 1, i + 1, index + url.length + 2),
                                        url: url,
                                    });
                                }
                            }
                            i++;
                        }
                    }
                    catch (_a) {
                        // TODO freeze on firefox
                    }
                    return links;
                },
                resolveLink: function (link, _) {
                    console.log(link);
                    return link;
                }
            }
        ];
    }
    foldingsProviders() {
        return [
            {
                provideFoldingRanges: (model) => {
                    const ranges = [];
                    try {
                        const lines = model.getValue().split('\n');
                        const length = lines.length;
                        let i = 0, start = -1;
                        while (i < length) {
                            if (lines[i].match(PremierLangage_1.MULTI_LINE_PATTERN)) {
                                start = i;
                            }
                            else if (lines[i].match(PremierLangage_1.END_MULTI_LINE_PATTERN)) {
                                ranges.push({
                                    start: start + 1,
                                    end: i + 1,
                                    kind: monaco.languages.FoldingRangeKind.Region
                                });
                                start = -1;
                            }
                            i++;
                        }
                    }
                    catch (_a) { }
                    return ranges;
                }
            }
        ];
    }
    completionsProviders() {
        return [
            /*
            {
                provideCompletionItems: (model: monaco.editor.ITextModel, position: monaco.Position) => {
                    // 10 is an arbitrary number to provide completion only for line starts.
                    if (position.column > 10) {
                        return null;
                    }
                    // const line = model.getLineContent(position.lineNumber);
                    const suggestions = Object.keys(PremierLangage.BUILT_IN).map(name => {
                        let embed = 'python';
                        switch (name) {
                            case 'evaluator':
                            case 'before':
                                embed = 'python';
                                break;
                            case 'title':
                            case 'text':
                            case 'form':
                            case 'extrajs':
                            case 'extracss':
                            case 'form':
                                embed = 'html';
                                break;
                        }
                        return {
                            label: name,
                            detail: PremierLangage.BUILT_IN[name],
                            insertText: `${name} == #|${embed}| \n\n==`,
                            kind: monaco.languages.CompletionItemKind.Snippet,
                        };
                    });
                    return { suggestions } as monaco.languages.CompletionList;
                },
            },
            */
            {
                triggerCharacters: ['='],
                provideCompletionItems: (model, position) => {
                    const ast = this.compiler.getAST();
                    if (ast) {
                        const definitions = ast['__definitions'];
                        const suggestions = Object.keys(definitions).map(name => {
                            return {
                                label: name,
                                detail: definitions[name].doc || definitions[name].file,
                                insertText: name,
                                kind: monaco.languages.CompletionItemKind.Property,
                            };
                        });
                        // return { suggestions } as monaco.languages.CompletionList;
                        return suggestions;
                    }
                    return null;
                },
            },
            {
                triggerCharacters: ['{'],
                provideCompletionItems: (model, position) => {
                    const ast = this.compiler.getAST();
                    if (ast) {
                        const definitions = ast['__definitions'];
                        const suggestions = Object.keys(definitions).map(name => {
                            return {
                                label: name,
                                detail: 'Insert content of ' + name,
                                insertText: `{{ ${name} }}`,
                                kind: monaco.languages.CompletionItemKind.Snippet,
                            };
                        });
                        // return { suggestions } as monaco.languages.CompletionList;
                        return suggestions;
                    }
                    return null;
                },
            }
        ];
    }
    /**
     * Finds a symbol in the symbol tree according to the position
     * of the cursor
     * @param model editor text model
     * @param position cursor position in the editor.
     * @returns a symbol name or null
     */
    findSymbol(model, position) {
        function isAlphaNumeric(str) {
            if (!str) {
                return false;
            }
            let code, i, len;
            for (i = 0, len = str.length; i < len; i++) {
                code = str.charCodeAt(i);
                if (!(code > 47 && code < 58) && // numeric (0-9)
                    !(code > 64 && code < 91) && // upper alpha (A-Z)
                    !(code > 96 && code < 123)) { // lower alpha (a-z)
                    return false;
                }
            }
            return true;
        }
        function interpolationIndex(lineContent, colNum) {
            let i = colNum;
            let open = 0;
            while (i >= 0) {
                const c = lineContent[i];
                if (c === '{') {
                    open++;
                    if (open === 2) {
                        return i;
                    }
                    continue;
                }
                if (c !== '.' && c !== ' ' && !isAlphaNumeric(c)) {
                    break;
                }
                i--;
            }
            return -1;
        }
        const ast = this.compiler.getAST();
        if (!ast) {
            return null;
        }
        const definitions = ast['__definitions'];
        const token = model.getWordAtPosition(position);
        if (token) {
            const before = model.getValueInRange({
                startLineNumber: position.lineNumber, startColumn: 1,
                endLineNumber: position.lineNumber, endColumn: token.endColumn
            });
            const name = before.trim();
            if (definitions[name]) {
                return name;
            }
            const i = interpolationIndex(before, token.startColumn);
            if (i !== -1) {
                const lineContent = model.getLineContent(position.lineNumber);
                const text = lineContent.slice(i - 1, lineContent.length);
                const match = text.match(/\{\{\s*([^\s|\}]+)[^\}]*\}/);
                if (match && match.length === 2 && definitions[match[1]]) {
                    return match[1];
                }
            }
        }
    }
};
/** Regex expression that matches files referenced inside pl and pltp files */
PremierLangage.REFERENCE_PATTERN = /(@|(?:\$=)|(?:template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/-]+)/;
// Modify the rule multiline inside the method registerMonarch if this is modified !!!
/** Regex expression that matches the start of multiline keys inside pl and pltp files */
PremierLangage.MULTI_LINE_PATTERN = /^[a-zA-Z_](\.?\w+)*\s*((==)|(%=)|((\+|-)=(?!@)))/;
/** Regex expression that matches the end of multiline keys inside pl and pltp files */
PremierLangage.END_MULTI_LINE_PATTERN = /^==\s*$/;
/** Built-in keys of premier langage */
PremierLangage.BUILT_IN = {
    title: 'Title of the exercise',
    author: 'Author of the exercice',
    introduction: 'Introduction of a PLTP',
    teacher: 'Notes only visible for the teachers in a PLTP page',
    text: 'Instructions of the exercise for the students.',
    form: 'HTML of the exercise',
    template: 'Extends a PL',
    extends: 'Extends a PL',
    extracss: 'Extra css of the PL',
    extrajs: 'Extra scripts of the page'
};
PremierLangage.ctorParameters = () => [
    { type: compiler_service_1.CompilerService }
];
PremierLangage = PremierLangage_1 = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [compiler_service_1.CompilerService])
], PremierLangage);
exports.PremierLangage = PremierLangage;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/editor-actions.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editor-actions.model.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var EditorActions;
(function (EditorActions) {
    EditorActions.focus = 'editor-action-focus';
    EditorActions.onDiff = 'editorGroup-action-onDiff';
    EditorActions.offDiff = 'editorGroup-action-offDiff';
    EditorActions.preview = 'editorGroup-action-preview';
    EditorActions.zoomInImage = 'editorGroup-action-zoomInImage';
    EditorActions.zoomOutImage = 'editorGroup-action-zoomOutImage';
    EditorActions.splitEditor = 'editorGroup-action-splitEditor';
})(EditorActions = exports.EditorActions || (exports.EditorActions = {}));


/***/ }),

/***/ "./src/app/pages/editor/shared/models/editor-groups.model.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editor-groups.model.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const drag_drop_1 = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
const editors_model_1 = __webpack_require__(/*! ./editors.model */ "./src/app/pages/editor/shared/models/editors.model.ts");
/** Implementation of IEditorGroup interface */
class EditorGroup {
    constructor(editorService) {
        this._editors = [];
        this._resources = [];
        this._actions = [];
        this._id = ++EditorGroup.NEXT_ID;
        this._editorService = editorService;
    }
    get resources() {
        return this._resources;
    }
    get editors() {
        return this._editors;
    }
    get id() {
        return this._id;
    }
    get actions() {
        return this._actions || (this._actions = []);
    }
    get activeResource() {
        return this._activeResource;
    }
    empty() {
        return !this._resources.some(_ => true);
    }
    focus(focused) {
        this._focused = focused;
    }
    focused() {
        return this._focused;
    }
    isActive(resource) {
        return this._activeResource && this._activeResource.path === resource.path;
    }
    hasAction() {
        return !this.empty() && !this.isPreviewGroup();
    }
    isPreviewGroup() {
        return this.someEditor(e => e.type === editors_model_1.EditorTypes.Preview);
    }
    someEditor(predicate) {
        return this._editors.some(predicate);
    }
    someResource(predicate) {
        return this._resources.some(predicate);
    }
    containsEditor(editor) {
        return this.someEditor(e => e.id === editor.id);
    }
    containsResource(resource) {
        return this.someResource(r => r.path === resource.path);
    }
    open(resource, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const editor = this._editors.find(e => e.canOpen(resource)) || this.createEditor(resource);
            if (!editor) {
                throw new Error('The is no registered editor to open \'' + resource.path + '\'');
            }
            this._actions = editor.actions || [];
            this._activeEditor = editor;
            this._activeResource = resource;
            this._activeEditor.open(resource, options);
            if (this.isPreviewGroup()) {
                if (this._resources.length === 0) {
                    this._resources.push(resource);
                }
                else {
                    this._resources[0] = resource;
                }
            }
            else if (!this.someResource(e => e.path === resource.path)) {
                this._resources.push(resource);
            }
            resource.opened = true;
            yield this._editorService.focusGroup(this);
        });
    }
    openSide(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._editorService.open(resource, {
                openToSide: true
            });
        });
    }
    save(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this._editorService.save(resource);
        });
    }
    saveAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (const resource of this._resources) {
                yield this.save(resource);
            }
        });
    }
    close(resource, confirm, fromTemplate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const changed = this.closeGuard(resource);
            const options = {
                title: 'Do you want to close \'' + resource.name + '\'?',
                message: 'Your changes will be lost if you don\'t save them.',
                buttons: [
                    { id: 'save', title: 'Save', role: 'custom' }
                ],
                okTitle: 'Don\'t Save',
                noTitle: 'Cancel'
            };
            let confirmed = false;
            if (!changed || !confirm || (confirmed = yield this.confirm(options))) {
                if (!this.isPreviewGroup() || fromTemplate) {
                    resource.meta.previewData = undefined;
                }
                if (confirmed === 'save') {
                    yield this.save(resource);
                    resource.changed = false;
                }
                else if (changed) {
                    resource.content = resource.savedContent;
                    resource.changed = false;
                }
                yield this.removeResource(resource);
            }
        });
    }
    closeAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let size = this._resources.length;
            while (size > 0) {
                yield this.close(this._resources[0], true);
                size--;
            }
        });
    }
    closeSaved() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            while (this.someResource(e => !e.changed)) {
                for (let i = 0; i < this._resources.length; i++) {
                    if (!this._resources[i].changed) {
                        yield this.close(this._resources[i]);
                    }
                }
            }
        });
    }
    findResource(predicate) {
        return this._resources.find(e => predicate(e));
    }
    findResourceAt(index) {
        return this._resources[index];
    }
    activeEditor() {
        return this._activeEditor;
    }
    activeEditorIs(type) {
        return !!this._activeEditor && this._activeEditor.type === type;
    }
    editorService() {
        return this._editorService;
    }
    drop(event) {
        const source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        const target = this;
        if (this.isPreviewGroup() || source.isPreviewGroup()) {
            return;
        }
        if (event.previousContainer === event.container) {
            drag_drop_1.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            const movedTab = source.findResourceAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    }
    reopen(resource) {
        if (!this.isPreviewGroup()) {
            this.open(resource);
        }
    }
    trackEditor(_, editor) {
        return editor.id;
    }
    trackResource(_, resource) {
        return resource.path;
    }
    confirm(options) {
        return this._editorService.confirm(options);
    }
    closeGuard(resource) {
        if (this.isPreviewGroup()) {
            return false;
        }
        return resource.changed && this._editorService.findGroupsPredicate(group => {
            return !group.isPreviewGroup() && group.containsResource(resource);
        }).length === 1;
    }
    createEditor(resource) {
        for (const item of editors_model_1.INSTANTIATORS) {
            if (item.condition(resource)) {
                const editor = item.create(this, resource);
                this._editors.push(editor);
                return editor;
            }
        }
        return null;
    }
    removeResource(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const indexToRemove = this._resources.findIndex(e => e.path === resource.path);
            if (indexToRemove !== -1) {
                if (this.isActive(resource)) {
                    this._activeEditor = undefined;
                    this._activeResource = undefined;
                }
                this._actions = [];
                this._resources.splice(indexToRemove, 1);
                const newIndex = Math.max(0, indexToRemove - 1);
                if (!this._activeResource && newIndex < this._resources.length) {
                    yield this.open(this._resources[newIndex]);
                }
                resource.opened = this._editorService.findGroups(resource).length > 0;
                if (this.empty()) {
                    yield this._editorService.disposeGroup(this);
                }
            }
        });
    }
}
EditorGroup.NEXT_ID = 0;
exports.EditorGroup = EditorGroup;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/editors.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editors.model.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const filters_model_1 = __webpack_require__(/*! ./filters.model */ "./src/app/pages/editor/shared/models/filters.model.ts");
const editor_actions_model_1 = __webpack_require__(/*! ./editor-actions.model */ "./src/app/pages/editor/shared/models/editor-actions.model.ts");
var EditorTypes;
(function (EditorTypes) {
    EditorTypes["Code"] = "code";
    EditorTypes["Preview"] = "preview";
    EditorTypes["Image"] = "image";
})(EditorTypes = exports.EditorTypes || (exports.EditorTypes = {}));
class AbstractEditor {
    constructor(group, resource) {
        this.opened = new rxjs_1.Subject();
        this._id = ++AbstractEditor.ID_COUNTER;
        this._resource = resource;
        this._group = group;
    }
    get id() {
        return this._id;
    }
    get group() {
        return this._group;
    }
    get hasFocus() {
        return this._focused;
    }
    get resource() {
        return this._resource;
    }
    focus(focused) {
        this._focused = focused;
    }
    open(resource, options) {
        this._resource = resource;
        this.opened.next({
            resource,
            options
        });
    }
}
AbstractEditor.ID_COUNTER = 0;
exports.AbstractEditor = AbstractEditor;
class CodeEditor extends AbstractEditor {
    constructor(group, resource) {
        super(group, resource);
        this.diffRequested = new rxjs_1.Subject();
        this.previewRequested = new rxjs_1.Subject();
    }
    get options() {
        return this._options;
    }
    get type() {
        return EditorTypes.Code;
    }
    get actions() {
        return [
            this.preview(),
            this.onDiff(),
            this.offDiff(),
            this.splitEditor()
        ];
    }
    open(resource, options) {
        this.diffEditing = options && options.diffMode;
        this._options = options;
        super.open(resource, options);
    }
    split() {
        this.group.editorService().open(this.resource, {
            openToSide: true
        });
    }
    canOpen(resource) {
        return openAsCode(resource);
    }
    preview() {
        return {
            id: editor_actions_model_1.EditorActions.preview, icon: 'fas fa-play', tooltip: 'Preview ⌘Enter',
            condition: filters_model_1.canBePreviewed, invoke: (item) => {
                this.previewRequested.next(item);
            }
        };
    }
    onDiff() {
        const that = this;
        return {
            id: editor_actions_model_1.EditorActions.onDiff, icon: 'fas fa-eye', tooltip: 'Open Changes',
            condition: (item) => {
                return filters_model_1.isRepo(item) && !that.diffEditing;
            },
            invoke: (_) => {
                that.diffEditing = true;
                that.diffRequested.next(that.diffEditing);
            }
        };
    }
    offDiff() {
        const that = this;
        return {
            id: editor_actions_model_1.EditorActions.offDiff, icon: 'fas fa-eye-slash', tooltip: 'Close Changes',
            condition: (_) => {
                return that.diffEditing;
            }, invoke: (_) => {
                that.diffEditing = false;
                that.diffRequested.next(that.diffEditing);
            }
        };
    }
    splitEditor() {
        const that = this;
        return {
            id: editor_actions_model_1.EditorActions.splitEditor, icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: () => {
                return true;
            }, invoke: (_) => {
                that.split();
            }
        };
    }
}
exports.CodeEditor = CodeEditor;
class ImageEditor extends AbstractEditor {
    constructor(group, resource) {
        super(group, resource);
        this.zoom = 0.7;
    }
    get type() {
        return EditorTypes.Image;
    }
    get actions() {
        return [
            {
                id: editor_actions_model_1.EditorActions.zoomInImage, icon: 'fas fa-plus', tooltip: 'Zoom In',
                condition: (_) => true, invoke: (_) => {
                    this.zoomIn();
                }
            },
            {
                id: editor_actions_model_1.EditorActions.zoomOutImage, icon: 'fas fa-minus', tooltip: 'Zoom Out',
                condition: (_) => true, invoke: (_) => {
                    this.zoomOut();
                }
            }
        ];
    }
    canOpen(resource) {
        return openAsImage(resource);
    }
    zoomIn() {
        this.zoom = Math.min(this.zoom + .05, 1);
    }
    zoomOut() {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }
}
exports.ImageEditor = ImageEditor;
class PreviewEditor extends AbstractEditor {
    get type() {
        return EditorTypes.Preview;
    }
    get actions() {
        return [];
    }
    constructor(group, document) {
        super(group, document);
    }
    canOpen(resource) {
        return openAsPreview(resource);
    }
}
exports.PreviewEditor = PreviewEditor;
function openAsCode(resource) {
    return !openAsImage(resource);
}
exports.openAsCode = openAsCode;
function openAsImage(resource) {
    return !openAsPreview(resource) && resource.meta && resource.meta.image && !filters_model_1.isSVG(resource);
}
exports.openAsImage = openAsImage;
function openAsPreview(resource) {
    return !!resource.meta && !!resource.meta.previewData;
}
exports.openAsPreview = openAsPreview;
exports.INSTANTIATORS = [
    { condition: openAsImage, create: (group, r) => new ImageEditor(group, r) },
    { condition: openAsPreview, create: (group, r) => new PreviewEditor(group, r) },
    { condition: openAsCode, create: (group, r) => new CodeEditor(group, r) }
];


/***/ }),

/***/ "./src/app/pages/editor/shared/models/filters.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/filters.model.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const resources_model_1 = __webpack_require__(/*! ./resources.model */ "./src/app/pages/editor/shared/models/resources.model.ts");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/** extensions of files with preview option */
exports.PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];
/**
 * Gets a value indicating whether the resource can be readed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canRead(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.read;
}
exports.canRead = canRead;
/**
 * Gets a value indicating whether the resource can be modified.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canWrite(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.write;
}
exports.canWrite = canWrite;
/**
 * Gets a value indicating whether the resource is on readonly mode.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isReadOnly(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !canWrite(item);
}
exports.isReadOnly = isReadOnly;
/**
 * Gets a value indicating whether the resource is in a repository.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isRepo(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && !!item.repo;
}
exports.isRepo = isRepo;
/**
 * Gets a value indicating whether the resource is loaded with it's metadata.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isLoaded(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && !!item.meta;
}
exports.isLoaded = isLoaded;
/**
 * Gets a value indicating whether the resource is the home folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isHome(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'Yggdrasil';
}
exports.isHome = isHome;
/**
 * Gets a value indicating whether the resource is the lib folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isLib(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'lib';
}
exports.isLib = isLib;
/**
 * Gets a value indicating whether the resource is a root folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isRoot(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return isHome(item) || isLib(item);
}
exports.isRoot = isRoot;
/**
 * Gets a value indicating whether the resource is a folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isFolder(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.type === resources_model_1.ResourceTypes.Folder;
}
exports.isFolder = isFolder;
/**
 * Gets a value indicating whether the resource is a file.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isFile(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.type === resources_model_1.ResourceTypes.File;
}
exports.isFile = isFile;
/**
 * Gets a value indicating whether the resource is a PL resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isPL(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && paths_model_1.extname(item.path) === 'pl';
}
exports.isPL = isPL;
/**
 * Gets a value indicating whether the resource is a PLA resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isPLA(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && paths_model_1.extname(item.path) === 'pla';
}
exports.isPLA = isPLA;
/**
 * Gets a value indicating whether the resource is a svg resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isSVG(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && paths_model_1.extname(item.path) === 'svg';
}
exports.isSVG = isSVG;
/**
 * Gets a value indicating whether the resource is a PLTP.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isPLTP(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && paths_model_1.extname(item.path) === 'pltp';
}
exports.isPLTP = isPLTP;
/**
 * Gets a value indicating whether the resource is a markdown resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isMarkdown(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && paths_model_1.extname(item.path) === 'md';
}
exports.isMarkdown = isMarkdown;
/**
 * Gets a value indicating whether the resource can be previewed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBePreviewed(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && exports.PREVIEW_EXTENSIONS.includes(paths_model_1.extname(item.path));
}
exports.canBePreviewed = canBePreviewed;
/**
 * Gets a value indicating whether the resource is a folder with a write permission.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canAddChild(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFolder(item);
}
exports.canAddChild = canAddChild;
/**
 * Gets a value indicating whether the resource can be copied|dragged.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canCopy(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canRead(item) && !isRoot(item);
}
exports.canCopy = canCopy;
/**
 * Gets a value indicating whether the resource can be renamed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeRenamed(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}
exports.canBeRenamed = canBeRenamed;
/**
 * Gets a value indicating whether the resource can be deleted.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeDeleted(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}
exports.canBeDeleted = canBeDeleted;
/**
 * Gets a value indicating whether the resource can be tested (PL only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeTested(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canRead(item) && isFile(item) && isPL(item);
}
exports.canBeTested = canBeTested;
/**
 * Gets a value indicating whether the resource can be loaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeLoaded(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return isFile(item) && (isPLTP(item) || isPLA(item));
}
exports.canBeLoaded = canBeLoaded;
/**
 * Gets a value indicating whether the resource can be reloaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeReloaded(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return isFile(item) && (isPLTP(item) || isPLA(item));
}
exports.canBeReloaded = canBeReloaded;
/**
 * Checks whether the two groups are the same (id are equals)
 * @param grp1 the first group
 * @param grp2 the second group
 * @throws {ReferenceError} is grp1 or grp2 are null
 */
function compareGroup(grp1, grp2) {
    assert_model_1.Asserts.requireNonNull(grp1, '"param "grp1" is required');
    assert_model_1.Asserts.requireNonNull(grp2, '"param "grp2" is required');
    return grp1.id === grp2.id;
}
exports.compareGroup = compareGroup;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/monaco.model.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/monaco.model.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/** Subject that emit first time monaco editor is loaded */
exports.MONACO_LOADED = new rxjs_1.Subject();
exports.MONACO_CONFIG = {
    baseUrl: '/static/editor/assets',
    defaultOptions: {
        automaticLayout: true
    },
    onMonacoLoad: onMonacoLoad,
};
function onMonacoLoad() {
    exports.MONACO_LOADED.next(monaco);
}
exports.onMonacoLoad = onMonacoLoad;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/resources.model.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/resources.model.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes["File"] = "file";
    ResourceTypes["Folder"] = "folder";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function fakeData() {
    return [
        {
            'parent': '',
            'type': ResourceTypes.Folder,
            'name': 'Yggdrasil',
            'path': 'Yggdrasil',
            'write': true,
            'read': true,
            'repo': null,
            'children': [{
                    'parent': 'Yggdrasil',
                    'type': ResourceTypes.Folder,
                    'name': 'dir1',
                    'path': 'Yggdrasil/dir1',
                    'write': true,
                    'read': true,
                    'repo': {
                        'url': 'repo1',
                        'branch': 'HEAD',
                        'host': 'fab fa-git'
                    },
                    'children': [
                        {
                            'parent': 'Yggdrasil/dir1',
                            'type': ResourceTypes.File,
                            'name': 'file',
                            'path': 'Yggdrasil/dir1/file',
                            'write': true,
                            'read': true,
                            'repo': null
                        }
                    ]
                }, {
                    'parent': 'Yggdrasil',
                    'type': ResourceTypes.Folder,
                    'name': 'dir2',
                    'path': 'Yggdrasil/dir2',
                    'write': true,
                    'read': true,
                    'repo': {
                        'url': 'repo2',
                        'branch': 'HEAD',
                        'host': 'fab fa-git'
                    },
                    'children': []
                }, {
                    'parent': 'Yggdrasil',
                    'type': ResourceTypes.File,
                    'name': 'text.txt',
                    'path': 'Yggdrasil/text.txt',
                    'write': true,
                    'read': true,
                    'repo': null
                }]
        }
    ];
}
exports.fakeData = fakeData;
function createResource(parent, type) {
    assert_model_1.Asserts.assert(parent.type === ResourceTypes.Folder, 'resource.type must be folder');
    parent.children = parent.children || [];
    const resource = {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
        read: parent.read,
        write: parent.write,
        repo: parent.repo,
    };
    if (type === ResourceTypes.Folder) {
        resource.children = [];
    }
    return resource;
}
exports.createResource = createResource;
function cloneResource(resource) {
    const copy = Object.assign({}, resource);
    if (resource.meta) {
        copy.meta = Object.assign({}, resource.meta);
    }
    if (resource.repo) {
        copy.repo = Object.assign({}, resource.repo);
    }
    if (resource.children) {
        copy.children = resource.children.map(r => cloneResource(r));
    }
    return copy;
}
exports.cloneResource = cloneResource;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/settings.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/settings.model.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Settings;
(function (Settings) {
    let Types;
    (function (Types) {
        Types["Checkbox"] = "Checkbox";
        Types["Number"] = "Number";
        Types["Input"] = "Input";
        Types["Dropdown"] = "Dropdown";
    })(Types = Settings.Types || (Settings.Types = {}));
    /** key used to store the settings into localStorage */
    Settings.STORAGE_KEY = '__editor.settings__';
    /** Group name for editor settings */
    Settings.EDITOR_KEY = 'editor';
    /** Group name for git settings */
    Settings.GIT_KEY = 'git';
    Settings.defaults = [
        // Suggestion
        {
            name: 'acceptSuggestionOnCommitCharacter', group: 'editor.suggestions', type: Types.Checkbox,
            value: true,
            comment: 'Accept suggestions on provider defined characters. For example in JavaScript the semi-colon (;) is a commit character'
        },
        {
            name: 'acceptSuggestionOnEnter', group: 'editor.suggestions', type: Types.Dropdown, value: 'on',
            choices: ['on', 'smart', 'off'],
            comment: 'Controls whether suggestions should be accepted on Enter, in addition to Tab. Helps to avoid ambiguity between inserting new lines or accepting suggestions.',
        },
        {
            name: 'accessibilitySupport', group: 'editor', type: Types.Dropdown, value: 'auto',
            choices: ['auto', 'off', 'on'],
            comment: 'Controls whether the editor should run in a mode where it is optimized for screen readers.',
        },
        {
            name: 'autoClosingBrackets', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
            choices: ['always', 'languageDefined', 'beforeWhitespace', 'never'],
            comment: 'Controls whether the editor should automatically close brackets after the user adds an opening bracket.',
        },
        {
            name: 'autoClosingQuotes', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
            choices: ['always', 'languageDefined', 'beforeWhitespace', 'never'],
            comment: 'Controls whether the editor should automatically close quotes after the user adds an opening quote.',
        },
        {
            name: 'autoIndent', group: 'editor', type: Types.Checkbox, value: false,
            comment: 'Enable auto indentation adjustment.',
        },
        {
            name: 'autoSurround', group: 'editor', type: Types.Dropdown, value: 'languageDefined',
            choices: ['languageDefined', 'quotes', 'brackets', 'never'],
            comment: 'Controls whether the editor should automatically surround selections.',
        },
        { name: 'automaticLayout', group: 'editor', type: Types.Checkbox, value: true, hidden: true },
        {
            name: 'codeLens', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the editor should show CodeLens',
        },
        {
            name: 'colorDecorators', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the editor should render the inline color decorators and color picker',
        },
        {
            name: 'copyWithSyntaxHighlighting', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether syntax highlight should be copied into the clipboard.',
        },
        // Cursor
        {
            name: 'cursorBlinking', group: 'editor.cursor', type: Types.Dropdown, value: 'blink',
            comment: 'Control the cursor animation style.',
            choices: ['blink', 'smooth', 'phase', 'expand', 'solid'],
        },
        {
            name: 'cursorSmoothCaretAnimation', group: 'editor.cursor', type: Types.Checkbox, value: false,
            comment: 'Controls whether the smooth caret animation should be enabled.',
        },
        {
            name: 'cursorStyle', group: 'editor.cursor', type: Types.Dropdown, value: 'line',
            comment: 'Controls the cursor style.',
            choices: ['block', 'block-outline', 'line', 'line-thin', 'underline', 'underline-thin'],
        },
        {
            name: 'cursorWidth', group: 'editor.cursor', type: Types.Number, value: 0,
            comment: 'Controls the width of the cursor when Editor: Cursor Style is set to line.',
        },
        {
            name: 'dragAndDrop', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls if the editor should allow to move selections via drag and drop.',
        },
        {
            name: 'emptySelectionClipboard', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Copying without a selection copies the current line.',
        },
        // { name: 'extraEditorClassName', group: 'editor', type: SettingTypes.Input, value: '', },
        {
            name: 'fastScrollSensitivity', group: 'editor', type: Types.Number, value: 5,
            comment: 'Scrolling speed mulitiplier when pressing Alt.',
        },
        // { name: 'find', group: 'editor', type: SettingTypes.Input, value: '', },
        {
            name: 'folding', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the editor has code folding enabled',
        },
        {
            name: 'foldingStrategy', group: 'editor', type: Types.Dropdown, value: 'auto',
            choices: ['auto', 'indentation'],
            comment: `Selects the folding strategy. 'auto' uses the strategies contributed for the current document, 'indentation' uses the indentation based folding strategy`
        },
        // FONT
        {
            name: 'fontFamily', group: 'editor.font', type: Types.Input, value: 'Menlo,Monaco,monospace',
            comment: 'Controls the font family',
        },
        {
            name: 'fontLigatures', group: 'editor.font', type: Types.Checkbox, value: false,
            comment: 'Enables/Disables font lignatures',
        },
        {
            name: 'fontSize', group: 'editor.font', type: Types.Number, value: 12,
            comment: 'Controls the font size in pixels.',
        },
        {
            name: 'fontWeight', group: 'editor.font', type: Types.Dropdown, value: 'normal',
            comment: 'Controls the font weight.', choices: ['normal', 'bold', '100', '200', '300', '400', '500'],
        },
        // Formatting
        {
            name: 'formatOnPaste', group: 'editor.formatting', type: Types.Checkbox, value: false,
            comment: `Controls whether the editor should automatically format the pasted content. (Require a formatter)`,
        },
        {
            name: 'formatOnType', group: 'editor.formatting', type: Types.Checkbox, value: false,
            comment: `Controls whether the editor should automatically format the content each time. (Require a formatter)`,
        },
        {
            name: 'glyphMargin', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable the rendering of the glyph margin. Glyph margin is moslty used for debugging.',
        },
        {
            name: 'hideCursorInOverviewRuler', group: 'editor', type: Types.Checkbox, value: false,
            comment: 'Should the cursor be hidden in the overview ruler.',
        },
        {
            name: 'highlightActiveIndentGuide', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable highlighting of the active indent guide.',
        },
        {
            name: 'hover.delay', group: 'editor', type: Types.Number, value: 300,
            comment: 'Controls the delay in milliseconds after which the hover is shown.',
        },
        {
            name: 'hover.enabled', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the hover is shown.',
        },
        {
            name: 'hover.sticky', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the hover should remain visible when mouse is moved over it',
        },
        {
            name: 'iconsInSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
            comment: 'Render icons in suggestions box.',
        },
        {
            name: 'letterSpacing', group: 'editor', type: Types.Number, value: 0,
            comment: 'Controls the letter spacing in pixels',
        },
        {
            name: 'lightbulb.enabled', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Control the behavior and rendering of the code action lightbulb.',
        },
        {
            name: 'lineHeight', group: 'editor', type: Types.Number, value: 0,
            comment: 'Controls the line height. Use 0 to compute the line height from the font size.',
        },
        {
            name: 'lineNumbers', group: 'editor', type: Types.Dropdown, value: 'on',
            choices: ['off', 'on', 'relative', 'interval'],
            comment: 'Controls the display of line numbers.',
        },
        {
            name: 'lineNumbersMinChars', group: 'editor', type: Types.Number, value: 5,
            comment: 'Control the width of line numbers, by reserving horizontal space for rendering at least an amount of digits.',
        },
        {
            name: 'links', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls whether the editor should detect links and make them clickable',
        },
        {
            name: 'matchBrackets', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable highlighting of matching brackets.',
        },
        // Minimap
        {
            name: 'minimap.enabled', group: 'editor.minimap', type: Types.Checkbox, value: true,
            comment: 'Enable the rendering of the minimap.',
        },
        {
            name: 'minimap.maxColumn', group: 'editor.minimap', type: Types.Number, value: 120,
            comment: 'Limit the width of the minimap to render at most a certain number of columns.',
        },
        {
            name: 'minimap.renderCharacters', group: 'editor.minimap', type: Types.Checkbox, value: true,
            comment: 'Render the actual text on a line (as opposed to color blocks).',
        },
        {
            name: 'minimap.showSlider', group: 'editor.minimap', type: Types.Dropdown, value: 'mouseover',
            comment: 'Control the behavior and rendering of the minimap.', choices: ['always', 'mouseover'],
        },
        {
            name: 'minimap.side', group: 'editor.minimap', type: Types.Dropdown, value: 'right',
            comment: 'Controls the side where to render the minimap.', choices: ['left', 'right'],
        },
        {
            name: 'mouseWheelScrollSensitivity', group: 'editor', type: Types.Number, value: 1,
            comment: 'A multiplier to be used on the deltaX and deltaY of mouse wheel scroll events.',
        },
        {
            name: 'mouseWheelZoom', group: 'editor', type: Types.Checkbox, value: false,
            comment: 'Zoom the font in the editor when using the mouse wheel in combination with holding Ctrl',
        },
        {
            name: 'multiCursorMergeOverlapping', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Merge multiple cursors when they are overlapping.',
        },
        {
            name: 'multiCursorModifier', group: 'editor', type: Types.Dropdown, value: 'alt',
            choices: ['ctrlCmd', 'alt'],
            comment: 'The modifier to be used to add multiple cursors with the mouse',
        },
        {
            name: 'occurrencesHighlight', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable semantic occurrences highlight.',
        },
        {
            name: 'overviewRulerBorder', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls if a border should be drawn around the overview ruler.',
        },
        {
            name: 'overviewRulerLanes', group: 'editor', type: Types.Number, value: 3,
            comment: 'Controls the number of decorations that can show up at the same position in the overview ruler.',
        },
        {
            name: 'parameterHints.cycle', group: 'editor', type: Types.Checkbox, value: false,
            comment: 'Controls whether the parameter hints menu cycles or closes when reaching the end of the list',
        },
        {
            name: 'parameterHints.enabled', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enables a pop-up that shows parameter documentation and type information as you type',
        },
        {
            name: 'quickSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
            comment: 'Enable quick suggestions'
        },
        {
            name: 'quickSuggestionsDelay', group: 'editor.suggestions', type: Types.Number, value: 10,
            comment: 'Controls the delay in milliseconds after which quick suggestions will show up.'
        },
        {
            name: 'renderControlCharacters', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable rendering of control characters.'
        },
        {
            name: 'renderFinalNewline', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Render last line number when the file ends with a newline.',
        },
        {
            name: 'renderIndentGuides', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable rendering of indent guides.'
        },
        {
            name: 'renderLineHighlight', group: 'editor', type: Types.Dropdown, value: 'all',
            comment: 'Enable rendering of current line highlight.', choices: ['none', 'gutter', 'line', 'all']
        },
        {
            name: 'renderWhitespace', group: 'editor', type: Types.Dropdown, value: 'all',
            comment: 'Enable rendering of whitespace.', choices: ['none', 'boundary', 'all']
        },
        {
            name: 'revealHorizontalRightPadding', group: 'editor', type: Types.Number, value: 30,
            comment: 'When revealing the cursor, a virtual padding (px) is added to the cursor, turning it into a rectangle. This virtual padding ensures that the cursor gets revealed before hitting the edge of the viewport.'
        },
        {
            name: 'roundedSelection', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Render the editor selection with rounded borders'
        },
        {
            name: 'scrollBeyondLastColumn', group: 'editor', type: Types.Number, value: 5,
            comment: 'Enable that scrolling can go beyond the last column by a number of columns'
        },
        {
            name: 'scrollBeyondLastLine', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable that scrolling can go one screen size after the last line.'
        },
        {
            name: 'scrollbar.verticalScrollbarSize', group: 'editor.scrollBar', type: Types.Number, value: 7,
            comment: 'Vertical size of the scrollbar in px'
        },
        {
            name: 'scrollbar.horizontalScrollbarSize', group: 'editor.scrollBar', type: Types.Number, value: 7,
            comment: 'Horizontal size of the scrollbar in px'
        },
        {
            name: 'selectOnLineNumbers', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Should the corresponding line be selected when clicking on the line number?'
        },
        {
            name: 'selectionClipboard', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable Linux primary clipboard.'
        },
        {
            name: 'selectionHighlight', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Enable selection highlight.'
        },
        {
            name: 'showFoldingControls', group: 'editor', type: Types.Dropdown, value: 'mouseover',
            comment: 'Controls whether the fold controls on the gutter are automatically hidden.',
            choices: ['always', 'mouseover']
        },
        {
            name: 'showUnused', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Controls fading out of unused variables'
        },
        {
            name: 'smoothScrolling', group: 'editor', type: Types.Checkbox, value: false,
            comment: 'Enable that the editor animates scrolling to a position'
        },
        // Suggestions
        {
            name: 'snippetSuggestions', group: 'editor.suggestions', type: Types.Dropdown, value: 'inline',
            comment: 'Controls whether snippets are shown with other suggestions and how they are sorted.',
            choices: ['top', 'bottom', 'inline', 'none']
        },
        {
            name: 'suggestFontSize', group: 'editor.suggestions', type: Types.Number, value: 0,
            comment: 'Font size for the suggest widget. When set to 0, the value of Editor: Font Size is used.'
        },
        {
            name: 'suggestLineHeight', group: 'editor.suggestions', type: Types.Number, value: 0,
            comment: 'Line height for the suggest widget. When set to 0, the value of Editor: Line Height is used.'
        },
        {
            name: 'suggestOnTriggerCharacters', group: 'editor.suggestions', type: Types.Checkbox, value: true,
            comment: 'Enable the suggestion box to pop-up on trigger characters.'
        },
        {
            name: 'suggestSelection', group: 'editor.suggestions', type: Types.Dropdown, value: 'recentlyUsed',
            comment: 'Controls how suggestions are pre-selected when showing the suggest list.',
            choices: ['first', 'recentlyUsed', 'recentlyUsedByPrefix']
        },
        {
            name: 'tabCompletion', group: 'editor.suggestions', type: Types.Dropdown, value: 'on',
            comment: 'Enables tab completions.', choices: ['on', 'off', 'onlySnippets']
        },
        {
            name: 'theme', group: 'editor', type: Types.Dropdown, value: 'light-theme',
            comment: 'Specifies the color theme of the editor', choices: ['light-theme', 'dark-theme'],
            hidden: false,
        },
        {
            name: 'useTabStops', group: 'editor', type: Types.Checkbox, value: true,
            comment: 'Inserting and deleting whitespace follows tabs stops.'
        },
        {
            name: 'wordBasedSuggestions', group: 'editor.suggestions', type: Types.Checkbox, value: true,
            comment: 'Controls whether completions should be computed based  on words in the document',
        },
        {
            name: 'wordSeparators', group: 'editor', type: Types.Input, value: '`~!@#$%^&*()-=+[{]}\|;:\'",.<>/?',
            comment: 'Characters that will be used as word separators when doing word related navigations or operations.'
        },
        {
            name: 'wordWrap', group: 'editor', type: Types.Dropdown, value: 'off',
            comment: 'Controls how lines should wrap.',
            choices: ['on', 'off', 'wordWrapColumn', 'bounded']
        },
        {
            name: 'wordWrapColumn', group: 'editor', type: Types.Number, value: 80,
            comment: 'Controls the wrapping column of the editor when Editor: Word Wrap is wordWrapColumn or bounded.'
        },
        {
            name: 'wrappingIndent', group: 'editor', type: Types.Dropdown, value: 'same',
            comment: 'Controls the indentation of wrapped lines.',
            choices: ['none', 'same', 'indent', 'deepIndent']
        },
        {
            name: 'blames', group: 'git', type: Types.Checkbox, value: false, hidden: true,
            comment: 'Annotates each line in the focused file with information from the revision which last modified the line.',
        },
        {
            name: 'enabled', group: 'compiler', type: Types.Checkbox, value: false, hidden: false,
            comment: 'Enables the experimental compiler',
        },
    ];
})(Settings = exports.Settings || (exports.Settings = {}));


/***/ }),

/***/ "./src/app/pages/editor/shared/services/compiler.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/compiler.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const filters_model_1 = __webpack_require__(/*! ../models/filters.model */ "./src/app/pages/editor/shared/models/filters.model.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const task_service_1 = __webpack_require__(/*! ../../../../core/task.service */ "./src/app/core/task.service.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
const http_encoder_model_1 = __webpack_require__(/*! src/app/shared/models/http-encoder.model */ "./src/app/shared/models/http-encoder.model.ts");
let CompilerService = class CompilerService {
    constructor(http, task, settings) {
        this.http = http;
        this.task = task;
        this.settings = settings;
        this._errors = [];
        this._warnings = [];
        this._problems = [];
        this._problemsCount = 0;
        this._warningsCount = 0;
        this._errorsCount = 0;
        this.compilation = {};
        this.compiled = new rxjs_1.Subject();
    }
    get enabled() {
        return this.settings.get('compiler', 'enabled').value === true;
    }
    get problemsCount() {
        return this._problemsCount;
    }
    get warningsCount() {
        return this._warningsCount;
    }
    get errorsCount() {
        return this._errorsCount;
    }
    get allErrors() {
        return this._errors || (this._errors = []);
    }
    get allWarnings() {
        return this._warnings || (this._warnings = []);
    }
    get problems() {
        return this._problems || (this._problems = []);
    }
    errors(resource) {
        const data = this.compilation[resource.path];
        if (data && data.ast) {
            return data.ast.__errors;
        }
        return [];
    }
    warnings(resource) {
        const data = this.compilation[resource.path];
        if (data && data.ast) {
            return data.ast.__warnings;
        }
        return [];
    }
    getAST() {
        if (!this.active) {
            return null;
        }
        const data = this.compilation[this.active.path];
        if (!data) {
            return null;
        }
        return data.ast;
    }
    compile(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.enabled) {
                assert_model_1.Asserts.requireNonNull(resource, 'resource');
                if (!filters_model_1.isPL(resource)) {
                    return null;
                }
                this.active = resource;
                const data = this.compilation[resource.path] || {
                    compiling: false
                };
                if (data.compiling) {
                    return data.ast;
                }
                data.compiling = true;
                let response;
                try {
                    this.task.emitTaskEvent(true, 'compilation');
                    const params = new http_1.HttpParams({
                        encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                    }).set('path', resource.path);
                    response = yield this.http.get('editor/compile', {
                        params: params, responseType: 'json'
                    }).toPromise();
                    data.compiling = false;
                    this.task.emitTaskEvent(false);
                    data.ast = response.ast;
                    this.compilation[resource.path] = data;
                    this._errors = [];
                    this._warnings = [];
                    Object.keys(this.compilation).forEach(k => {
                        const item = this.compilation[k];
                        if (item && item.ast) {
                            const errors = item.ast.__errors;
                            const warnings = item.ast.__warnings;
                            this._errors = [...this._errors, ...errors];
                            this._warnings = [...this._warnings, ...warnings];
                        }
                    });
                    this._warnings.forEach(w => w.isWarning = true);
                    this._errors.forEach(w => w.isError = true);
                    this._problems = [...this._errors, ...this._warnings];
                    this._problemsCount = this._problems.length;
                    this._warningsCount = this._warnings.length;
                    this._errorsCount = this._errors.length;
                    this.compiled.next();
                }
                catch (error) {
                    data.compiling = false;
                    this.task.emitTaskEvent(false);
                    throw error;
                }
            }
            else {
                this._problems = [];
                this._warnings = [];
                this._errors = [];
                this._errorsCount = 0;
                this._warningsCount = 0;
                this._problemsCount = 0;
                this.compiled.next();
            }
        });
    }
};
CompilerService.ctorParameters = () => [
    { type: http_1.HttpClient },
    { type: task_service_1.TaskService },
    { type: settings_service_1.SettingsService }
];
CompilerService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        task_service_1.TaskService,
        settings_service_1.SettingsService])
], CompilerService);
exports.CompilerService = CompilerService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/editor.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/editor.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const editor_groups_model_1 = __webpack_require__(/*! ../models/editor-groups.model */ "./src/app/pages/editor/shared/models/editor-groups.model.ts");
const filters_model_1 = __webpack_require__(/*! ../models/filters.model */ "./src/app/pages/editor/shared/models/filters.model.ts");
const resource_service_1 = __webpack_require__(/*! ./resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
class AbstractEditorService {
    constructor() {
        this.events = {};
        this.subscriptions = [];
        this.groups = Object.create(null);
        /** invoked each time a (focus | open | close) event is raised */
        this.changed = new rxjs_1.Subject();
        this.saved = new rxjs_1.Subject();
    }
    on(eventName, action) {
        const subject = this.events[eventName] || (this.events[eventName] = new rxjs_1.Subject());
        return subject.subscribe(e => {
            action(e);
        });
    }
    fire(eventName, data) {
        const e = this.events[eventName];
        if (e) {
            e.next(data);
        }
    }
    copyToClipboard(data) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = data;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    subscribe(subscription) {
        this.subscriptions.push(subscription);
    }
    unsubscribeAll() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
    listGroups() {
        return Object.keys(this.groups).map(id => this.groups[id]);
    }
    findGroup(id) {
        return this.groups[id];
    }
    findGroups(resource) {
        return this.findGroupsPredicate(group => {
            return group.someResource(item => item.path === resource.path);
        });
    }
    findGroupsPredicate(predicate) {
        return this.listGroups().filter(predicate);
    }
    closeAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let groups = this.listGroups();
            while (groups.length !== 0) {
                yield groups[0].closeAll();
                groups = this.listGroups();
            }
        });
    }
    closePreview() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.previewGroup) {
                yield this.previewGroup.closeAll();
            }
        });
    }
    focusGroup(group) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.disposePreview();
            const active = group.activeResource;
            if (active) {
                this.activeResource = active;
                if (group.isPreviewGroup()) {
                    this.previewGroup = group;
                }
                else if (active.meta && active.meta.previewData) {
                    yield this.open(active, {
                        openToSide: true
                    });
                }
            }
            this.groups[group.id] = group;
            if (!group.isPreviewGroup()) {
                this.listGroups().forEach(item => {
                    item.focus(false);
                });
                group.focus(true);
            }
            this.changed.next(this.listGroups());
        });
    }
    disposeGroup(group) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.activeResource = null;
            if (!this.findGroup(group.id)) {
                throw new Error(`The group '${group.id}' is not found`);
            }
            this.disposePreview();
            if (group.focused()) {
                const next = this.listGroups().find(g => !filters_model_1.compareGroup(g, group));
                if (next) {
                    yield this.focusGroup(next);
                }
            }
            delete this.groups[group.id];
            this.changed.next(this.listGroups());
        });
    }
    disposePreview() {
        if (this.previewGroup) {
            this.previewGroup.closeAll();
            this.previewGroup = undefined;
        }
    }
}
exports.AbstractEditorService = AbstractEditorService;
/**
 * Concretes implementation of IEditorService interface
 */
let EditorService = class EditorService extends AbstractEditorService {
    constructor(resources, notification) {
        super();
        this.resources = resources;
        this.notification = notification;
        this.onBeforeLeave = new core_1.EventEmitter();
        resources.renamed.subscribe(_ => {
            this.listGroups().forEach(group => group.open(group.activeResource));
        });
        resources.deleted.subscribe(item => {
            this.findGroups(item).forEach(group => {
                group.close(item, false);
            });
        });
    }
    open(resource, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (!(yield this.resources.open(resource))) {
                    return Promise.reject(new Error(`Unable to open '${resource.path}': resource content not found`));
                }
                let group;
                let groups = this.listGroups();
                options = options || {};
                if (options.openToSide) {
                    group = new editor_groups_model_1.EditorGroup(this);
                }
                else {
                    groups = groups.filter(g => !g.isPreviewGroup()); // remove preview group
                    // tslint:disable-next-line: max-line-length
                    group = groups.find(g => g.focused() && g.someResource(r => r.path === resource.path)) // find focused that contains the resource
                        || groups.find(g => g.focused()) // find focused
                        || groups.find(_ => true) || new editor_groups_model_1.EditorGroup(this); // find any or create new group
                }
                yield group.open(resource, options);
            }
            catch (error) {
                this.notification.logError(error);
            }
        });
    }
    focusGroup(group) {
        const _super = Object.create(null, {
            focusGroup: { get: () => super.focusGroup }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield _super.focusGroup.call(this, group);
            this.resources.active.next(group.activeResource);
        });
    }
    confirm(options) {
        return this.notification.confirmAsync(options);
    }
    save(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.resources.save(resource);
            this.saved.next();
        });
    }
};
EditorService.ctorParameters = () => [
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
EditorService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], EditorService);
exports.EditorService = EditorService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/git.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/git.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const filters_model_1 = __webpack_require__(/*! ../models/filters.model */ "./src/app/pages/editor/shared/models/filters.model.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
const auth_service_1 = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
const editor_service_1 = __webpack_require__(/*! ./editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const resource_service_1 = __webpack_require__(/*! ./resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const http_encoder_model_1 = __webpack_require__(/*! src/app/shared/models/http-encoder.model */ "./src/app/shared/models/http-encoder.model.ts");
let GitService = class GitService {
    constructor(http, auth, editor, settings, resources, notification) {
        this.http = http;
        this.auth = auth;
        this.editor = editor;
        this.settings = settings;
        this.resources = resources;
        this.notification = notification;
        this.blames = {};
        this.repos = [];
        this.editor.saved.subscribe(() => {
            this.refresh().catch();
        });
        this.resources.changed.subscribe(() => {
            this.refresh().catch();
        });
    }
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.auth.admin) {
                return;
            }
            let success = false;
            try {
                this.runningTask = true;
                const response = yield this.http.get('/api/git/changes/').toPromise();
                this.repos = [];
                Object.keys(response).forEach(key => {
                    const data = response[key];
                    const name = paths_model_1.basename(key.endsWith('/') ? key.slice(0, key.length - 1) : key);
                    this.repos.push({
                        name: name,
                        url: key,
                        path: data.path,
                        branch: data.branch,
                        count: data.changes.length,
                        changes: data.changes
                    });
                    return false;
                });
                this.size = this.repos.reduce((p, c, _i, _a) => p + c.count, 0);
                success = true;
            }
            catch (error) {
                console.error(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    show(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let response;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('path', item.path);
                response = yield this.http.get('/api/git/show/', { params: params, responseType: 'text' }).toPromise();
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return response;
        });
    }
    status(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('path', item.path);
                const response = yield this.http.get('api/git/status/', { params: params, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                success = true;
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    add(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('path', item.path);
                const response = yield this.http.get('/api/git/add/', { params: params, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                success = yield this.refresh();
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    checkout(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.runningTask = true;
            let success = false;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('path', item.path);
                const response = yield this.http.get('/api/git/checkout/', { params: params, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                success = yield this.refresh();
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    commit(item, commit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                assert_model_1.Asserts.requireNonNull(commit, 'commit');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const data = { path: item.path, commit };
                const response = yield this.http.post('/api/git/commit/', data, { headers: headers, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                this.refresh();
                success = true;
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    push(item, username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const data = { path: item.path, username, password };
                const response = yield this.http.post('/api/git/push/', data, { headers: headers, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                this.refresh();
                success = true;
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    pull(item, username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const data = { path: item.path, username, password };
                const response = yield this.http.post('/api/git/pull/', data, { headers: headers, responseType: 'text' }).toPromise();
                this.logResponse(item, response);
                success = true;
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    clone(home, url, username, password, destination) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(home, 'parent');
                assert_model_1.Asserts.requireNonNull(url, 'url');
                assert_model_1.Asserts.assert(filters_model_1.isHome(home), 'clone operation is applicable to home only');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const data = {
                    'path': home.path,
                    url: url,
                    username: username,
                    password: password,
                    destination: destination
                };
                yield this.http.post('/api/git/clone/', data, { headers: headers, responseType: 'text' }).toPromise();
                const name = paths_model_1.basename(url.endsWith('/') ? url.slice(0, url.length - 1) : url);
                this.notification.logInfo(`${url} cloned into the directory ${name}`);
                success = true;
            }
            catch (error) {
                this.notification.logError(error);
            }
            this.runningTask = false;
            return success;
        });
    }
    blame(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let response;
            this.runningTask = true;
            try {
                assert_model_1.Asserts.requireNonNull(item, 'item');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('path', item.path);
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                response = (yield this.http.get('/api/git/blame/', { headers: headers, params: params }).toPromise());
                this.runningTask = false;
            }
            catch (error) {
                this.runningTask = false;
                throw error;
            }
            return response;
        });
    }
    /** Gets a value indicating whether blame option is enablad in the settings */
    enabledBlames() {
        return this.settings.get('git', 'blames').value === true;
    }
    /**
     * Refresh blames of `resource`.
     * @param resource the resource
     * @returns A promise that resolves with true
     */
    refreshBlames(resource) {
        if (this.enabledBlames()) {
            return this.blame(resource).then(response => {
                const lines = resource.content.split('\n');
                for (const item of response) {
                    item.text = lines[item.line - 1];
                    if (item.email === 'not.committed.yet') {
                        item.email = 'Uncommitted changes';
                    }
                }
                this.blames[resource.path] = response;
                return true;
            }).catch(_ => false);
        }
        return true;
    }
    logResponse(item, response) {
        this.notification.logInfo(`${item.path}:<br/> ${response}`);
    }
};
GitService.ctorParameters = () => [
    { type: http_1.HttpClient },
    { type: auth_service_1.AuthService },
    { type: editor_service_1.EditorService },
    { type: settings_service_1.SettingsService },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
GitService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        auth_service_1.AuthService,
        editor_service_1.EditorService,
        settings_service_1.SettingsService,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], GitService);
exports.GitService = GitService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/resource.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/resource.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const resources_model_1 = __webpack_require__(/*! ../models/resources.model */ "./src/app/pages/editor/shared/models/resources.model.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const task_service_1 = __webpack_require__(/*! ../../../../core/task.service */ "./src/app/core/task.service.ts");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const filters = __webpack_require__(/*! ../models/filters.model */ "./src/app/pages/editor/shared/models/filters.model.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
const http_encoder_model_1 = __webpack_require__(/*! src/app/shared/models/http-encoder.model */ "./src/app/shared/models/http-encoder.model.ts");
let ResourceService = class ResourceService {
    constructor(http, task) {
        this.http = http;
        this.task = task;
        this.cache = [];
        this.resources = [];
        /**
         * event that emits after a resource is renamed
         * with an object
         *
         * {
         * before: string,
         * after: string
         * }
         *
         * where `before` is the path before the renaming and `after` the path after the renaming
        */
        this.renamed = new rxjs_1.Subject();
        /** event that emits after a resource is created */
        this.created = new rxjs_1.Subject();
        /** event that emits after a resource is deleted */
        this.deleted = new rxjs_1.Subject();
        /** event that emits each time any resource is created|deleted|renamed  */
        this.changed = new rxjs_1.Subject();
        /**
         * Event that emits each time the active resource change.
         * The active resource is the current resource opened and focused inside the editor.
        */
        this.active = new rxjs_1.BehaviorSubject(null);
    }
    get home() {
        return this.resources[0];
    }
    get lib() {
        return this.resources[1];
    }
    getAll() {
        return this.resources.slice();
    }
    /**
     * Finds the resource with the given path.
     *
     * If the path begin with '/' the function will remove it from the path before
     * searching the resource.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    find(path) {
        if (!path) {
            return null;
        }
        path = path.trim();
        if (path.startsWith('/')) {
            path = path.substring(1, path.length);
        }
        return this.findPredicate(item => item.path === path);
    }
    /**
     * Finds all the resources which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    findAll(predicate) {
        return this.cache.filter(item => predicate(item));
    }
    /**
     * Finds the resource which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    findPredicate(predicate) {
        return this.cache.find(r => predicate(r));
    }
    removeDuplicates(src) {
        const nodes = [];
        src.forEach(n1 => {
            if (!src.some(n2 => n1.path !== n2.path && n1.path.startsWith(n2.path))) {
                nodes.push(n1);
            }
        });
        return nodes;
    }
    /**
     * Finds the resource at `path` relative to the path of the given `resource`.
     * @param resource the resource
     * @param path the path to find.
     * @returns A promise that resolves with the resource.
     */
    findRelativeTo(resource, path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.task.emitTaskEvent(true, 'resolve path');
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                })
                    .set('name', 'resolve_path')
                    .set('path', resource.path)
                    .set('target', path);
                const response = yield this.http.get('filebrowser/option', {
                    params: params, responseType: 'text'
                }).toPromise();
                this.task.emitTaskEvent(false);
                return this.find(response);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * creates the resource on the server.
     * @param resource the resource object to create.
     * @returns A promise that resolves once the resource is created on the server.
     */
    create(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.checkName(resource.name);
            assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied: write access not granted for ' + resource.path);
            assert_model_1.Asserts.assert(filters.canWrite(this.find(resource.parent)), 'permission denied: write access not granted for ' + resource.parent);
            this.task.emitTaskEvent(true);
            try {
                const body = {
                    name: 'create_resource',
                    path: resource.parent + '/' + resource.name,
                    content: resource.content,
                    type: resource.type
                };
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const response = yield this.http.post('filebrowser/option', body, {
                    headers: headers
                }).toPromise();
                resource.path = response.path;
                this.cache.push(resource);
                const parent = this.find(resource.parent);
                parent.children = parent.children || [];
                parent.children.push(resource);
                this.sort(parent.children);
                this.changed.next(this.getAll());
                this.created.next(resource);
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Renames the resource on the server.
     * @param resource the resource object to rename.
     * @param name the new name of the resource.
     * @returns A promise that resolves once the resource is renamed on the server.
     */
    rename(resource, name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.checkName(name);
            assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied');
            assert_model_1.Asserts.assert(!filters.isRoot(resource), 'cannot rename root directory');
            if (name === resource.name) {
                return Promise.resolve();
            }
            try {
                this.task.emitTaskEvent(true);
                const body = {
                    name: 'rename_resource',
                    path: resource.path,
                    target: name,
                };
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const response = yield this.http.post('filebrowser/option', body, {
                    headers: headers
                }).toPromise();
                const after = response.path;
                const before = resource.path;
                const parent = this.find(resource.parent);
                parent.children = parent.children || [];
                resource.name = paths_model_1.basename(after);
                this.replace(before, after);
                this.sort(parent.children);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Deletes the resource object from the server.
     * @param resource the resource object to deletes.
     * @returns A promise that resolves once the resource is deleted on the server.
     */
    delete(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(resource, 'resource');
            assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied');
            assert_model_1.Asserts.assert(!filters.isRoot(resource), 'permission denied');
            try {
                this.task.emitTaskEvent(true);
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                yield this.http.post('filebrowser/option', {
                    name: 'delete_resource',
                    path: resource.path
                }, { headers: headers }).toPromise();
                this.remove(resource.path);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    deleteAll(resources) {
        assert_model_1.Asserts.requireNonNullArray(resources, 'resources');
        resources.forEach(r => {
            assert_model_1.Asserts.assert(filters.canWrite(r), 'permission denied');
            assert_model_1.Asserts.assert(!filters.isRoot(r), 'permission denied');
        });
        return Promise.all(resources.map(this.delete.bind(this)));
    }
    /**
     * Moves the file|resource 'src' to the resource 'dst'.
     * @param src the source file or resource
     * @param dst the destination resource
     * @returns A promise that resolves once src is moved to dst on the server.
     */
    move(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src, 'src');
            assert_model_1.Asserts.requireNonNull(dst, 'dst');
            assert_model_1.Asserts.assert(filters.canWrite(dst), 'permission denied');
            assert_model_1.Asserts.assert(filters.isFolder(dst), 'destination must be a directory');
            try {
                this.task.emitTaskEvent(true);
                if (src instanceof File) {
                    yield this.upload(src, dst);
                }
                else {
                    yield this.drag(src, dst);
                }
                this.sort(dst.children);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Clone the resource 'src' to the resource 'dst'.
     * @param src the source resource
     * @param dst the destination resource
     * @returns A promise that resolves once src is cloned to dst on the server.
     */
    clone(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src, 'src');
            assert_model_1.Asserts.requireNonNull(dst, 'dst');
            assert_model_1.Asserts.assert(filters.canWrite(dst), 'permission denied');
            assert_model_1.Asserts.assert(filters.isFolder(dst), 'destination must be a directory');
            const nodes = this.removeDuplicates(src);
            if (nodes.length) {
                try {
                    this.task.emitTaskEvent(true);
                    for (const node of nodes) {
                        yield this.drag(node, dst, true);
                    }
                    this.sort(dst.children);
                    this.changed.next(this.getAll());
                    this.task.emitTaskEvent(false);
                }
                catch (error) {
                    this.task.emitTaskEvent(false);
                    throw error;
                }
            }
        });
    }
    /**
     * Saves the content of the resource on the server
     * @param resource the resource
     * @returns Promise<boolean> resolved with true and rejected with an error
     */
    save(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (resource.changed) {
                try {
                    this.task.emitTaskEvent(true, 'save');
                    assert_model_1.Asserts.requireNonNull(resource, 'resource');
                    const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                    yield this.http.post('filebrowser/option', {
                        name: 'update_resource', path: resource.path, content: resource.content
                    }, { headers: headers }).toPromise();
                    resource.changed = false;
                    resource.savedContent = resource.content;
                    this.task.emitTaskEvent(false);
                }
                catch (error) {
                    this.task.emitTaskEvent(false);
                    throw error;
                }
            }
        });
    }
    /**
     * Downloads the folder as a zip archive
     * @param resource the resource
     * @throws {ReferenceError} if resource is null or undefined.
     * @throws {TypeError} if resource is not a folder.
     * @returns Promise<void> resolved with true and rejected with an error
     */
    download(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(resource, 'resource');
            assert_model_1.Asserts.assert(resource.type === resources_model_1.ResourceTypes.Folder);
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('name', 'download_resource').set('path', resource.path);
                yield this.http.get('filebrowser/option', { params: params }).toPromise();
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Opens the content of the resource on the server (if not already opened)
     * @param resource the resource
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    open(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (resource.type === resources_model_1.ResourceTypes.Folder) {
                return true;
            }
            if (filters.isLoaded(resource) && !resource.dirty) {
                return true;
            }
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('name', 'get_resource').set('path', resource.path);
                const response = yield this.http.get('filebrowser/option', { params: params }).toPromise();
                resource.meta = response['meta'];
                resource.content = resource.savedContent = response['content'];
                resource.changed = resource.dirty = false;
                this.task.emitTaskEvent(false);
                return true;
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    search(directory, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(directory, 'directory');
            assert_model_1.Asserts.requireNonNullString(query, 'query');
            assert_model_1.Asserts.assert(directory.type === resources_model_1.ResourceTypes.Folder, 'search path must be a directory');
            function splitWithTail(str, delim, count) {
                const parts = str.split(delim);
                const tail = parts.slice(count).join(delim);
                const result = parts.slice(0, count);
                result.push(tail);
                return result;
            }
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                })
                    .set('name', 'search_in_files')
                    .set('path', directory.path)
                    .set('query', query);
                const matches = {};
                const response = yield this.http.get('filebrowser/option', {
                    params: params,
                    responseType: 'text'
                }).toPromise();
                const lines = response.split('\n');
                let path = directory.path;
                if (!path.endsWith('/')) {
                    path += '/';
                }
                lines.forEach(line => {
                    if (line) {
                        const tokens = splitWithTail(line, ':', 2);
                        const file = tokens[0].replace('./', path);
                        const lineno = Number.parseInt(tokens[1], 10);
                        const match = tokens[2];
                        matches[file] = matches[file] || [];
                        matches[file].push({
                            match,
                            lineno,
                        });
                    }
                });
                this.task.emitTaskEvent(false);
                return Object.keys(matches).map(k => {
                    return {
                        resource: this.find(k),
                        matches: matches[k]
                    };
                }).filter(e => !!e.resource) || [];
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Reloads the resources from the server.
     * @returns A promise that resolves with true
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('name', 'get_resources');
                const resources = yield this.http.get('/filebrowser/option', { params: params }).toPromise();
                if (resources.length > 0) {
                    this.sort(resources);
                }
                yield this.build(resources);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
                return true;
            }
            catch (error) {
                this.resources = [];
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    load(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams({
                    encoder: new http_encoder_model_1.CustomHttpParamEncoder()
                }).set('name', 'load_pltp').set('path', resource.path);
                response = yield this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise();
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
            return response;
        });
    }
    reload(resource, activityId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                this.task.emitTaskEvent(true);
                const data = {
                    name: 'reload_pltp',
                    path: resource.path,
                    activity_id: activityId,
                };
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                response = yield this.http.post('filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise();
                this.task.emitTaskEvent(false);
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
            return response;
        });
    }
    getTestUrl(resource) {
        return window.location.origin + '/filebrowser/option?name=test_pl&path=' + resource.path;
    }
    getDownloadURL(resource) {
        return window.location.origin + '/filebrowser/option?name=download_resource&path=' + resource.path;
    }
    build(resources) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cache = [];
            function recursive(item) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    cache.push(item);
                    if (item.children) {
                        for (const child of item.children) {
                            yield recursive(child);
                        }
                    }
                });
            }
            for (const root of resources) {
                yield recursive(root);
            }
            this.cache = cache;
            this.resources = resources;
        });
    }
    upload(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src, 'src');
            assert_model_1.Asserts.requireNonNull(dst, 'dst');
            assert_model_1.Asserts.requireNonNullString(dst.path, 'dst.path');
            assert_model_1.Asserts.checkName(src.name);
            const formData = new FormData();
            formData.append('file', src, src.name);
            formData.append('path', dst.path);
            const headers = new http_1.HttpHeaders();
            headers.set('Content-Type', null);
            headers.set('Accept', 'multipart/form-data');
            yield this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise();
            const newRes = resources_model_1.createResource(dst, resources_model_1.ResourceTypes.File);
            newRes.path = dst.path + '/' + src.name;
            newRes.name = src.name;
            dst.children = dst.children || [];
            dst.children.push(newRes);
            this.cache.push(newRes);
            return newRes;
        });
    }
    drag(src, dst, copy) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src, 'src');
            assert_model_1.Asserts.requireNonNull(dst, 'dst');
            assert_model_1.Asserts.requireNonNullString(src.path, 'src.path');
            assert_model_1.Asserts.requireNonNullString(dst.path, 'dst.path');
            assert_model_1.Asserts.assert(!filters.isRoot(src), 'cannot move a root resource');
            assert_model_1.Asserts.assert(src.path !== dst.path, 'cannot move the resource to the same directory');
            const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const response = yield this.http.post('filebrowser/option', {
                name: 'move_resource',
                path: src.path,
                dst: dst.path,
                copy: !!copy
            }, { headers: headers }).toPromise();
            const oldPath = response.path;
            const newPath = src.path;
            const parent = this.find(src.parent);
            parent.children = parent.children || [];
            if (copy) {
                const clone = resources_model_1.cloneResource(src);
                clone.path = oldPath;
                clone.parent = dst.path;
                dst.children.push(clone);
                this.replace(newPath, oldPath, clone);
                this.cache.push(clone);
            }
            else {
                parent.children = parent.children.filter(item => {
                    return item.path !== src.path;
                });
                src.path = oldPath;
                src.parent = dst.path;
                dst.children.push(src);
                this.replace(newPath, oldPath);
            }
            this.changed.next(this.getAll());
            return src;
        });
    }
    replace(oldPath, newPath, target) {
        const that = this;
        function doAction(item) {
            if (item.path.startsWith(oldPath)) {
                const before = item.path;
                item.path = before.replace(oldPath, newPath);
                that.renamed.next({ before: before, after: item.path });
            }
            if (item.parent.startsWith(oldPath)) {
                item.parent = item.parent.replace(oldPath, newPath);
            }
        }
        if (target) {
            doAction(target);
        }
        else {
            for (const item of this.cache) {
                doAction(item);
            }
        }
    }
    remove(path) {
        path = path.trim();
        const toRemove = this.find(path);
        if (!toRemove) {
            return false;
        }
        const p = this.find(toRemove.parent);
        if (!p) {
            return false;
        }
        const index = p.children.findIndex(e => e.path === path);
        if (index === -1) {
            return false;
        }
        p.children.splice(index, 1);
        this.cache = this.cache.filter(e => e.path !== path);
        function propagate(item, subject) {
            subject.next(item);
            if (item.children) {
                item.children.forEach(child => propagate(child, subject));
            }
        }
        propagate(toRemove, this.deleted);
    }
    sort(resources) {
        if (resources) {
            resources.sort((a, b) => {
                if (a.type === b.type) {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                }
                return a.type === 'folder' ? -1 : 1;
            });
            for (const item of resources) {
                this.sort(item.children);
            }
        }
    }
};
ResourceService.ctorParameters = () => [
    { type: http_1.HttpClient },
    { type: task_service_1.TaskService }
];
ResourceService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        task_service_1.TaskService])
], ResourceService);
exports.ResourceService = ResourceService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/settings.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/settings.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const settings_model_1 = __webpack_require__(/*! ../models/settings.model */ "./src/app/pages/editor/shared/models/settings.model.ts");
let SettingsService = class SettingsService {
    constructor() {
        this.settings = {};
        this.changed = new rxjs_1.Subject();
    }
    get(groupName, settingName) {
        return (this.settings[groupName] || []).find(item => {
            return item.group === groupName && item.name === settingName;
        });
    }
    set(groupName, settingName, value) {
        let item;
        const g = (this.settings[groupName] || []);
        for (let i = 0; i < g.length; i++) {
            item = g[i];
            if (item.name === settingName) {
                g[i].value = value;
                this.save();
                break;
            }
        }
    }
    save() {
        localStorage.setItem(settings_model_1.Settings.STORAGE_KEY, JSON.stringify(this.settings));
        this.changed.next(this.settings);
    }
    update(groups) {
        groups.forEach(group => {
            const settings = this.settings[group.name] || [];
            group.settings.forEach(setting => {
                for (let i = 0; i < settings.length; i++) {
                    if (settings[i].name === setting.name) {
                        settings[i] = setting;
                        return;
                    }
                }
                settings.push(setting);
            });
            this.settings[group.name] = settings;
        });
        this.save();
    }
    getAll() {
        return Object.assign({}, this.settings);
    }
    ofGroup(groupName) {
        return this.settings[groupName] || [];
    }
    extract(groupName) {
        let obj = {};
        Object.keys(this.settings).filter(k => {
            return k.startsWith(groupName);
        }).forEach(k => {
            obj = this.settings[k].reduce((_, curr) => {
                this.assign(obj, curr.name, curr.value);
                return obj;
            }, obj);
        });
        return obj;
    }
    loadSettings() {
        // TODO sync storage with defaults (comments, defaults values..)
        return new Promise((resolve) => {
            const store = localStorage.getItem(settings_model_1.Settings.STORAGE_KEY);
            this.settings = JSON.parse(store);
            if (!this.settings) {
                this.settings = {};
            }
            const defaults = settings_model_1.Settings.defaults;
            defaults.forEach(item => {
                this.settings[item.group] = this.settings[item.group] || [];
                let some = this.settings[item.group].find(setting => {
                    return setting.name === item.name;
                });
                if (!some) {
                    some = item;
                    this.settings[item.group].push(item);
                }
                some.hidden = item.hidden;
            });
            Object.keys(this.settings).forEach(k => {
                if (this.settings[k].length === 0) {
                    delete this.settings[k];
                }
            });
            this.changed.next(this.settings);
            resolve();
        });
    }
    assign(obj, path, value) {
        const a = path.split('.');
        let o = obj;
        for (let i = 0; i < a.length - 1; i++) {
            const n = a[i];
            if (n in o) {
                o = o[n];
            }
            else {
                o[n] = {};
                o = o[n];
            }
        }
        o[a[a.length - 1]] = value;
    }
};
SettingsService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [])
], SettingsService);
exports.SettingsService = SettingsService;


/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const login_component_1 = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
const routes = [
    { path: '', component: login_component_1.LoginComponent }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;


/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-login',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], LoginComponent);
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const shared_module_1 = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
const login_component_1 = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
const login_routing_module_1 = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
let LoginModule = class LoginModule {
};
LoginModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [login_component_1.LoginComponent],
        imports: [common_1.CommonModule, shared_module_1.SharedModule, login_routing_module_1.LoginRoutingModule],
        exports: [],
        providers: [],
    })
], LoginModule);
exports.LoginModule = LoginModule;


/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
let ConfirmComponent = class ConfirmComponent {
    constructor(dialog, data, changes) {
        this.dialog = dialog;
        this.data = data;
        this.changes = changes;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
    ngOnInit() {
        this.changes.detectChanges();
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: material_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] },
    { type: core_1.ChangeDetectorRef }
];
ConfirmComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-confirm',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./confirm.component.scss */ "./src/app/shared/components/confirm/confirm.component.scss")).default]
    }),
    tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef, Object, core_1.ChangeDetectorRef])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;


/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
let LoadingComponent = class LoadingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.navigationInterceptor(event);
        });
    }
    navigationInterceptor(event) {
        if (event instanceof router_1.NavigationStart) {
            document.body.classList.remove('loaded');
            this.loading = true;
        }
        if (event instanceof router_1.NavigationEnd) {
            this.endLoading();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.endLoading();
        }
        if (event instanceof router_1.NavigationError) {
            this.endLoading();
        }
    }
    endLoading() {
        document.body.classList.add('loaded');
        setTimeout(() => {
            this.loading = false;
            document.body.classList.remove('loaded');
        }, 3000);
    }
};
LoadingComponent.ctorParameters = () => [
    { type: router_1.Router }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], LoadingComponent.prototype, "loading", void 0);
LoadingComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-loading',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [router_1.Router])
], LoadingComponent);
exports.LoadingComponent = LoadingComponent;


/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZWJhczAxL3BsL2VkaXRvci9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufSAiXX0= */");

/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
let PromptComponent = class PromptComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
};
PromptComponent.ctorParameters = () => [
    { type: material_1.MatDialogRef },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [material_1.MAT_DIALOG_DATA,] }] }
];
PromptComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-prompt',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./prompt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./prompt.component.scss */ "./src/app/shared/components/prompt/prompt.component.scss")).default]
    }),
    tslib_1.__param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    tslib_1.__metadata("design:paramtypes", [material_1.MatDialogRef, Object])
], PromptComponent);
exports.PromptComponent = PromptComponent;


/***/ }),

/***/ "./src/app/shared/components/tree/tree.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tree-component {\n  height: 100%; }\n  .tree-component .mat-tree-node {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 32px;\n    overflow: hidden; }\n  .tree-component .mat-tree-node:hover, .tree-component .mat-tree-node.active, .tree-component .mat-tree-node.selected {\n      background-color: rgba(66, 66, 66, 0.05); }\n  .tree-component .mat-tree-node .node-content {\n      cursor: pointer;\n      display: flex;\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n      min-height: 32px;\n      padding: 0 8px;\n      align-items: center;\n      justify-content: space-between; }\n  .tree-input {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 4px);\n  margin-right: 4px; }\n  .tree-input input {\n    width: 100%;\n    margin: 0 0 0 8px;\n    padding: 0.1rem 0.3rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.15rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .tree-input input:focus {\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .tree-input.error input {\n    border: 1px solid #dc3545; }\n  .tree-input--filter {\n  margin: 4px 4px 0 0; }\n  mat-error {\n  margin-left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2psZWJhczAxL3BsL2VkaXRvci9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUdRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQVB4QjtNQVVZLHdDQUF3QyxFQUFBO0VBVnBEO01BY1ksZUFBZTtNQUNmLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQUsxQztFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0VBSnJCO0lBTVEsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3RUFBd0UsRUFBQTtFQWRoRjtNQWlCWSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGdEQUFnRCxFQUFBO0VBbkI1RDtJQXlCWSx5QkFBeUIsRUFBQTtFQUtyQztFQUNJLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZS1jb21wb25lbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAubWF0LXRyZWUtbm9kZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICY6aG92ZXIsICYuYWN0aXZlLCAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY2LCA2NiwgMC4wNSk7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1jb250ZW50IHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udHJlZS1pbnB1dCAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNHB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCAwIDhweDtcbiAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5lcnJvciB7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50cmVlLWlucHV0LS1maWx0ZXIge1xuICAgIG1hcmdpbjogNHB4IDRweCAwIDA7XG59XG5cblxubWF0LWVycm9yIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/components/tree/tree.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const tree_2 = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
const tree_node_directive_1 = __webpack_require__(/*! ../../directives/tree-node.directive */ "./src/app/shared/directives/tree-node.directive.ts");
/** Renders a recursive tree */
let TreeComponent = class TreeComponent {
    constructor() {
        this._nodes = [];
        this.selectedNodes = [];
        this.hiddenNodes = {};
        this.subscriptions = [];
        this.expandedNodes = {};
        this.filterOptions = {
            query: '',
            regex: true,
            pattern: null,
            error: ''
        };
        this.editing = {
            label: '',
            node: null,
        };
        this.options = {
            id: '',
            idField: '',
        };
        this.treeControl = new tree_1.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new tree_2.MatTreeFlattener((node, level) => this.transformer(node, level), node => node.level, node => node.expandable, node => this.children(node));
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    }
    /**
     * Array of root nodes of the tree.
     */
    set nodes(nodes) {
        this._nodes = nodes || [];
        this.refresh(this._nodes);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.save();
    }
    //#region API
    isSelected(node) {
        if (node == null) {
            throw new ReferenceError('node');
        }
        const e = this.findNode(node);
        return e && e.selected;
    }
    isActive(node) {
        if (node == null) {
            throw new ReferenceError('node');
        }
        const e = this.findNode(node);
        return e && e.active;
    }
    selections() {
        return (this.selectedNodes || []).map(s => s.data);
    }
    /**
     * Sets the passed node as the active one then expands it and recursively expand all its parents.
     * @param e the id of a node or a reference to a  node.
     */
    expandNode(e) {
        this._expandNode(e, true);
    }
    /**
     * Sets the passed node as the active one then collapse it.
     * @param e the id of a node or a reference to a  node.
     */
    collapseNode(e) {
        const recursive = (node, firstCall) => {
            if (node) {
                if (firstCall) {
                    this.activateAndFocus(node);
                }
                node.expanded = false;
                delete this.expandedNodes[this.activeNode.id];
                this.treeControl.collapse(node);
                if (this.options.onDidCollapse) {
                    this.options.onDidCollapse(node.data);
                }
            }
        };
        recursive(this.findNode(e), true);
    }
    /**
     * Adds `node` to the children of `parent`
     * and sets the parent in a editing state.
     * @param parent the parent of the node to add.
     * @param node the node to add.
     * @throws {ReferenceError} if `parent` or `node` is null.
     */
    addNode(parent, node) {
        if (parent == null) {
            throw new ReferenceError('parent');
        }
        if (node == null) {
            throw new ReferenceError('node');
        }
        const parentNode = this.findNode(parent);
        parentNode.creating = true;
        parentNode.renaming = false;
        parentNode.expanded = true;
        this.editing.label = '';
        this.editing.node = this.transformer(node);
        this.editing.node.creating = true;
        this.editing.node.renaming = false;
        this.editing.parent = parentNode;
        this.treeControl.expand(parentNode);
    }
    /**
     * Starts renaming the given node.
     * @param node the node to rename.
     * @throws {ReferenceError} if `node` is null.
     */
    renameNode(node) {
        if (node == null) {
            throw new ReferenceError('node');
        }
        this.editing.label = node.name;
        this.editing.node = this.findNode(node);
        this.editing.node.creating = false;
        this.editing.node.renaming = true;
    }
    /**
     * End the editing of the current node in a editing state.
     */
    endEdit() {
        const { parent, node } = this.editing;
        if (parent) {
            parent.creating = parent.renaming = false;
        }
        if (node) {
            node.creating = node.renaming = false;
            this.editing.node = this.editing.parent = null;
        }
    }
    /**
     * Toggles the expanded|collapse state of the given node and focus it by moving
     * the scrollbar to make it visible.
     * @param e id of the node to select or a reference to the node.
     */
    toggleNode(e) {
        if (!e) {
            return;
        }
        if (this.activeNode) {
            this.activeNode.active = this.activeNode.selected = false;
        }
        this.activeNode = null;
        const node = this.findNode(e);
        if (node) {
            if (node.expanded) {
                this.collapseNode(node);
            }
            else {
                this.expandNode(node);
            }
        }
    }
    filter(query) {
        this.filterOptions.query = query;
        this.filterOptions.error = '';
        this.hiddenNodes = {};
        if (query == null || query.trim() === '') {
            this.refresh(this._nodes);
        }
        else {
            query = query.trim().toLowerCase();
            this.filterOptions.query = query;
            if (this.filterOptions.regex) {
                try {
                    this.filterOptions.pattern = new RegExp(query, 'gi');
                }
                catch (error) {
                    this.filterOptions.error = error.message;
                    return;
                }
            }
            const nodes = (this.treeControl.dataNodes || []).filter(e => e.level === 0);
            for (const node of nodes) {
                this.options.onDidFilter({
                    node: node.data,
                    options: this.filterOptions,
                    hiddens: this.hiddenNodes
                });
            }
            this.refresh(this._nodes);
            this.treeControl.dataNodes.forEach(node => {
                node.filter = null;
                if (this.filterOptions.pattern) {
                    if (this.filterOptions.pattern.test(node.name)) {
                        node.filter = this.filterOptions;
                        node.expanded = true;
                        this.treeControl.expand(node);
                    }
                }
                else if (node.name.toLowerCase().includes(this.filterOptions.query)) {
                    node.filter = this.filterOptions;
                    node.expanded = true;
                    this.treeControl.expand(node);
                }
            });
        }
    }
    save() {
        if (this.options.id) {
            const state = {
                filter: {
                    query: this.filterOptions.query,
                    regex: this.filterOptions.regex,
                },
                active: this.activeNode ? this.activeNode.id : '',
                expandedNodes: this.expandedNodes
            };
            localStorage.setItem(this.options.id, JSON.stringify(state));
        }
    }
    restore() {
        if (!this.restored) {
            this.restored = true;
            if (this.options.id) {
                const state = JSON.parse(localStorage.getItem(this.options.id)) || {};
                Object.assign(this.expandedNodes, state.expandedNodes || {});
                return state;
            }
        }
        return {};
    }
    //#endregion
    //#region CALLED FROM TEMPLATE
    /**
     * Loop trackby function called from the template
     * @param _ the index
     * @param item the node
     */
    onTrack(_, item) {
        return item[this.options.idField];
    }
    /**
     * Handles focus event from the template.
     * @param node the focused node.
     */
    onFocus(node) {
        node.selected = true;
        if (this.shiftKeyPressed || this.selectedNodes.length > 1) {
            if (!this.inSelections(node)) {
                this.selectedNodes.push(node);
            }
        }
        else {
            this.clearSelections();
            this.selectedNodes.push(node);
        }
    }
    /**
     * Handles keyboard event on the focused node.
     * @param node the focused node.
     * @param e the original event.
     */
    onKeyDown(node, e) {
        const eventTarget = e.target;
        if (eventTarget) {
            const navigate = (targetEl, prevEl, nextEl) => {
                const target = this.findNode(targetEl);
                if (!target) {
                    return;
                }
                const prevNode = this.findNode(prevEl);
                const currNode = this.findNode(eventTarget);
                const nextNode = this.findNode(nextEl);
                const undo = (prevNode && targetEl.id === prevEl.id && prevNode.selected);
                const redo = (nextNode && targetEl.id === nextEl.id && nextNode.selected);
                if (undo || redo) {
                    currNode.selected = false;
                    this.selectedNodes = this.selectedNodes.filter(s => s.id !== currNode.id);
                    targetEl.focus();
                }
                else {
                    if (target.selected) {
                        target.selected = false;
                        this.selectedNodes = this.selectedNodes.filter(s => s.id !== target.id);
                    }
                    else {
                        targetEl.focus();
                    }
                }
                e.preventDefault();
            };
            const prev = eventTarget.previousElementSibling;
            const next = eventTarget.nextElementSibling;
            switch (e.key) {
                case 'ArrowUp':
                    navigate(prev, prev, next);
                    break;
                case 'ArrowDown':
                    navigate(next, prev, next);
                    break;
                case 'Enter':
                    if (this.options.onDidEdit) {
                        this.clearSelections();
                        this.renameNode(node.data);
                    }
                    break;
                case 'c':
                case 'C':
                    if (e.ctrlKey || e.metaKey) {
                        if (this.options.onDidCopy) {
                            this.options.onDidCopy(this.selectedNodes.map(n => n.data));
                        }
                    }
                    break;
                case 'v':
                case 'V':
                    if (e.ctrlKey || e.metaKey) {
                        if (this.options.onDidPaste) {
                            this.options.onDidPaste(node.data);
                        }
                    }
                    break;
                case 'Backspace':
                    if ((e.ctrlKey || e.metaKey) && this.options.onDidDelete) {
                        this.options.onDidDelete(node.data);
                    }
                    break;
            }
        }
    }
    /**
     * Handles node edit event from the template.
     * @param event original event.
     */
    onEdit(event) {
        if (this.options.onDidEdit) {
            this.options.onDidEdit({
                event,
                node: this.editing.node.data,
                editType: this.editing.node.renaming ? 'rename' : 'create',
                editedText: this.editing.label,
            });
        }
    }
    /**
     * Handles click event from the template.
     * @param node the clicked node.
     */
    onClick(node) {
        if (this.shiftKeyPressed) {
            node.selected = true;
            if (!this.inSelections(node)) {
                this.selectedNodes.push(node);
            }
        }
        else {
            this.clearSelections();
            this.selectedNodes.push(node);
            if (this.options.onDidClick) {
                this.options.onDidClick(node.data);
            }
        }
    }
    /**
     * Handles right click event from the template.
     * @param node the clicked node.
     * @param event the original event.
     */
    onContextMenu(node, event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.inSelections(node)) {
            this.selectedNodes.push(node);
        }
        if (this.options.onDidContextMenu) {
            this.options.onDidContextMenu({
                nodes: this.selectedNodes.map(item => item.data),
                event
            });
        }
    }
    //#endregion
    //#region PRIVATE
    children(node) {
        if (this.filterOptions.query) {
            return (node.children || []).filter(e => {
                return !this.hiddenNodes[e[this.options.idField]];
            });
        }
        else {
            return node.children;
        }
    }
    refresh(nodes) {
        const state = this.restore();
        this.dataSource.data = nodes;
        this.treeControl.dataNodes.forEach(node => {
            if (node.expanded) {
                this.treeControl.expand(node);
            }
        });
        this.clearSelections();
        setTimeout(() => {
            const { active, filter } = state;
            if (active) {
                const activeNode = this.findNode(active);
                if (activeNode) {
                    this.activateAndFocus(activeNode);
                }
            }
            if (filter && filter.query) {
                this.filter(filter.query);
            }
        }, 300);
    }
    clearSelections() {
        this.selectedNodes.forEach(s => s.selected = false);
        this.selectedNodes = [];
    }
    inSelections(node) {
        return this.selectedNodes.some(s => s.id === node.id);
    }
    activateAndFocus(node) {
        node.active = node.selected = true;
        this.activeNode = node;
        const domNode = document.getElementById('tree-node-' + this.activeNode.id);
        if (domNode) {
            domNode.focus();
        }
    }
    _expandNode(e, focus) {
        const recursive = (node, firstCall) => {
            if (node) {
                if (focus && firstCall) {
                    this.activateAndFocus(node);
                }
                this.expandedNodes[node.id] = node.expanded = true;
                this.treeControl.expand(node);
                if (this.options.onDidExpand) {
                    this.options.onDidExpand(node.data);
                }
                const parent = this.findParent(node);
                if (parent && parent.level > 0) {
                    recursive(parent, false);
                }
            }
        };
        recursive(this.findNode(e), true);
    }
    findNode(e) {
        if (!e) {
            return null;
        }
        if (typeof (e) === 'string') {
            return this.treeControl.dataNodes.find(n => n.id === e);
        }
        if (e instanceof Element || e instanceof HTMLElement) {
            return this.findNode((e.id || '').replace('tree-node-', ''));
        }
        if ('__internal__' in e) {
            return e;
        }
        if (!this.treeControl.dataNodes) {
            return null;
        }
        return this.treeControl.dataNodes.find(n => {
            return n.id === e[this.options.idField];
        });
    }
    findParent(node) {
        if (!node) {
            return null;
        }
        const level = this.treeControl.getLevel(node);
        if (level < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        let currentNode;
        for (let i = startIndex; i >= 0; i--) {
            currentNode = this.treeControl.dataNodes[i];
            if (this.treeControl.getLevel(currentNode) < level) {
                return currentNode;
            }
        }
    }
    transformer(node, level) {
        if (!this.options.idField) {
            throw new Error('"options.idField" must be provided');
        }
        if (!(this.options.idField in node)) {
            throw new Error(`property '${this.options.idField}' must be present in the nodes`);
        }
        const id = node[this.options.idField];
        const r = {
            __internal__: true,
            name: node.name,
            children: node.children,
            data: node,
            level: level || 0,
            id,
            expandable: !!node.children && node.children.length > 0,
            expanded: this.expandedNodes[id] || false,
        };
        return r;
    }
    keyup($event) {
        this.shiftKeyPressed = $event.shiftKey;
    }
    keydown($event) {
        this.shiftKeyPressed = $event.shiftKey;
    }
};
tslib_1.__decorate([
    core_1.ContentChild(tree_node_directive_1.TreeNodeDirective, { read: core_1.TemplateRef, static: true }),
    tslib_1.__metadata("design:type", Object)
], TreeComponent.prototype, "template", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], TreeComponent.prototype, "options", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], TreeComponent.prototype, "nodes", null);
tslib_1.__decorate([
    core_1.HostListener('document:keyup', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], TreeComponent.prototype, "keyup", null);
tslib_1.__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], TreeComponent.prototype, "keydown", null);
TreeComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tree',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./tree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tree/tree.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./tree.component.scss */ "./src/app/shared/components/tree/tree.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TreeComponent);
exports.TreeComponent = TreeComponent;


/***/ }),

/***/ "./src/app/shared/directives/autofocus.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/autofocus.directive.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Input element that can be autofocused.
 */
let AutofocusDirective = class AutofocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 500);
    }
};
AutofocusDirective.ctorParameters = () => [
    { type: core_1.ElementRef }
];
AutofocusDirective = tslib_1.__decorate([
    core_1.Directive({
        // tslint:disable-next-line: directive-selector
        selector: 'input[autofocus]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], AutofocusDirective);
exports.AutofocusDirective = AutofocusDirective;


/***/ }),

/***/ "./src/app/shared/directives/dnd.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/directives/dnd.directive.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Element that can share or accept a data of dragged dom element.

 * - the class `dnd-over` is added to the element when a dragged data hover the element.
 * - the class `dnd-drag` is added to the element when the element is dragged.
 */
let DndDirective = class DndDirective {
    constructor(el) {
        this.el = el;
        /**
         * A value indicating whether the element can share a data or not
         */
        this.draggable = true;
        /**  A value indicating whether a data can be dropped to this element */
        this.droppable = true;
        /** emits after a data is dropped */
        this.dropped = new core_1.EventEmitter();
        /** emits after a data hover the element */
        this.hovered = new core_1.EventEmitter();
    }
    ngAfterContentInit() {
        this.setDraggable();
        this.setDroppable();
    }
    setDraggable() {
        const node = this.el.nativeElement;
        node.draggable = true;
        const dragstart = (e) => {
            if (!this.draggable) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('dnd-data', this.dndData);
            node.classList.add('dnd-drag');
            return false;
        };
        node.addEventListener('dragstart', dragstart, false);
        const dragend = (e) => {
            node.classList.remove('dnd-drag');
            return false;
        };
        node.addEventListener('dragend', dragend, false);
    }
    setDroppable() {
        if (!this.droppable) {
            return;
        }
        const node = this.el.nativeElement;
        node.draggable = true;
        const dragover = (e) => {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            node.classList.add('dnd-over');
            this.hovered.emit(true);
            return false;
        };
        node.addEventListener('dragover', dragover, false);
        const dragenter = (e) => {
            node.classList.add('dnd-over');
            this.hovered.emit(true);
            return false;
        };
        node.addEventListener('dragenter', dragenter, false);
        const dragleave = (e) => {
            node.classList.remove('dnd-over');
            this.hovered.emit(false);
            return false;
        };
        node.addEventListener('dragleave', dragleave, false);
        const drop = (e) => {
            e.preventDefault();
            let file;
            if (e.dataTransfer.items.length > 0) {
                for (let i = 0; i < e.dataTransfer.items.length; i++) {
                    const item = e.dataTransfer.items[i];
                    if (item.kind === 'file') {
                        file = item.getAsFile();
                    }
                }
            }
            else if (e.dataTransfer.files.length > 0) {
                file = e.dataTransfer.files[0];
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            node.classList.remove('dnd-over');
            const dst = this.dndData;
            const src = e.dataTransfer.getData('dnd-data');
            if ((src || file)) {
                this.dropped.emit({ src, file, dst });
            }
            return false;
        };
        node.addEventListener('drop', drop, false);
    }
};
DndDirective.ctorParameters = () => [
    { type: core_1.ElementRef }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "draggable", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "droppable", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], DndDirective.prototype, "dropped", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], DndDirective.prototype, "hovered", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], DndDirective.prototype, "dndData", void 0);
DndDirective = tslib_1.__decorate([
    core_1.Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[dnd]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], DndDirective);
exports.DndDirective = DndDirective;


/***/ }),

/***/ "./src/app/shared/directives/highlight-words.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/highlight-words.directive.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let HighlightWordsDirective = class HighlightWordsDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnChanges(_) {
        if (this.regex) {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.searchRegex());
        }
        else if (this.words) {
            let words = [];
            if (typeof (this.words) === 'string') {
                words = this.words ? [this.words] : [];
            }
            else {
                words = this.words;
            }
            if (!this.words || !this.words.length || !this.highlightClass) {
                this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
                return;
            }
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.searchWords(words));
        }
        else {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
        }
    }
    searchRegex() {
        let regex;
        if (typeof (this.regex) === 'string') {
            try {
                regex = new RegExp(this.regex, 'gi');
            }
            catch (error) {
                console.log(error);
                return this.text;
            }
        }
        else {
            regex = this.regex;
        }
        const words = this.text.match(regex);
        if (words) {
            return this.searchWords(words);
        }
        return this.text;
    }
    searchWords(words) {
        try {
            const re = new RegExp(`(${words.join('|')})`, 'gi');
            return this.escape(this.text).replace(re, `<span class="${this.highlightClass}">$1</span>`);
        }
        catch (_a) {
            return this.text;
        }
    }
    escape(str) {
        const tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
        const replaceTag = (tag) => {
            return tagsToReplace[tag] || tag;
        };
        return str.replace(/[&<>]/g, replaceTag);
    }
};
HighlightWordsDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: core_1.Renderer2 }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HighlightWordsDirective.prototype, "text", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], HighlightWordsDirective.prototype, "regex", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], HighlightWordsDirective.prototype, "words", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HighlightWordsDirective.prototype, "highlightClass", void 0);
HighlightWordsDirective = tslib_1.__decorate([
    core_1.Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[highlightWords]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
], HighlightWordsDirective);
exports.HighlightWordsDirective = HighlightWordsDirective;


/***/ }),

/***/ "./src/app/shared/directives/run-scripts.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/run-scripts.directive.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * Directives that allows to reload scripts tags of a dom element.
 */
// tslint:disable-next-line: directive-selector
let RunScriptsDirective = class RunScriptsDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        setTimeout(() => {
            this.runScripts();
        });
    }
    /**
     * Reloads the scripts elements of the dom element.
     */
    runScripts() {
        const scripts = this.elementRef.nativeElement.getElementsByTagName('script');
        const scriptsInitialLength = scripts.length;
        for (let i = 0; i < scriptsInitialLength; i++) {
            const script = scripts[i];
            const scriptCopy = document.createElement('script');
            scriptCopy.type = script.type ? script.type : 'text/javascript';
            if (script.innerHTML) {
                scriptCopy.innerHTML = `${script.innerHTML}`;
            }
            else if (script.src) {
                scriptCopy.src = script.src;
            }
            scriptCopy.async = false;
            script.parentNode.replaceChild(scriptCopy, script);
        }
    }
};
RunScriptsDirective.ctorParameters = () => [
    { type: core_1.ElementRef }
];
RunScriptsDirective = tslib_1.__decorate([
    core_1.Directive({ selector: '[runScripts]', exportAs: 'runScripts' }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
], RunScriptsDirective);
exports.RunScriptsDirective = RunScriptsDirective;


/***/ }),

/***/ "./src/app/shared/directives/tree-node.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/tree-node.directive.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/** Element that can be used as a template for a `TreeComponent`  */
let TreeNodeDirective = class TreeNodeDirective {
};
TreeNodeDirective = tslib_1.__decorate([
    core_1.Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[treeNode]'
    })
], TreeNodeDirective);
exports.TreeNodeDirective = TreeNodeDirective;


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const table_1 = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
const scrolling_1 = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
const drag_drop_1 = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            scrolling_1.ScrollingModule,
            material_1.MatCommonModule,
            material_1.MatBadgeModule,
            material_1.MatFormFieldModule,
            material_1.MatAutocompleteModule,
            material_1.MatButtonModule,
            material_1.MatButtonToggleModule,
            material_1.MatCardModule,
            material_1.MatCheckboxModule,
            material_1.MatChipsModule,
            material_1.MatStepperModule,
            material_1.MatDatepickerModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatGridListModule,
            material_1.MatIconModule,
            material_1.MatInputModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatNativeDateModule,
            material_1.MatPaginatorModule,
            material_1.MatProgressBarModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatRadioModule,
            material_1.MatRippleModule,
            material_1.MatSelectModule,
            material_1.MatSidenavModule,
            material_1.MatSliderModule,
            material_1.MatSlideToggleModule,
            material_1.MatSnackBarModule,
            material_1.MatSortModule,
            material_1.MatTableModule,
            material_1.MatTabsModule,
            material_1.MatToolbarModule,
            material_1.MatTooltipModule,
            table_1.CdkTableModule,
            material_1.MatTreeModule,
            drag_drop_1.DragDropModule,
        ],
        exports: [
            scrolling_1.ScrollingModule,
            material_1.MatCommonModule,
            material_1.MatBadgeModule,
            material_1.MatFormFieldModule,
            material_1.MatAutocompleteModule,
            material_1.MatButtonModule,
            material_1.MatButtonToggleModule,
            material_1.MatCardModule,
            material_1.MatCheckboxModule,
            material_1.MatChipsModule,
            material_1.MatStepperModule,
            material_1.MatDatepickerModule,
            material_1.MatDialogModule,
            material_1.MatExpansionModule,
            material_1.MatGridListModule,
            material_1.MatIconModule,
            material_1.MatInputModule,
            material_1.MatListModule,
            material_1.MatMenuModule,
            material_1.MatNativeDateModule,
            material_1.MatPaginatorModule,
            material_1.MatProgressBarModule,
            material_1.MatProgressSpinnerModule,
            material_1.MatRadioModule,
            material_1.MatRippleModule,
            material_1.MatSelectModule,
            material_1.MatSidenavModule,
            material_1.MatSliderModule,
            material_1.MatSlideToggleModule,
            material_1.MatSnackBarModule,
            material_1.MatSortModule,
            material_1.MatTableModule,
            material_1.MatTabsModule,
            material_1.MatToolbarModule,
            material_1.MatTooltipModule,
            material_1.MatTreeModule,
            drag_drop_1.DragDropModule,
        ],
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "./src/app/shared/models/assert.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/assert.model.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Asserts;
(function (Asserts) {
    Asserts.DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];
    /**
     * Throws an exception if obj is null or empty (expected for boolean and number)
     * @param obj - the object to evaluate
     * @param message - an optional error message
     * @throws {ReferenceError} if obj is null or undefined
     * @return the object itself.
     */
    function requireNonNull(obj, message) {
        if (obj == null) {
            message = message || 'requireNonNull';
            throw new ReferenceError(message);
        }
        return obj;
    }
    Asserts.requireNonNull = requireNonNull;
    function requireNonNullArray(array, message) {
        this.requireNonNull(array, message);
        array.forEach(item => this.requireNonNull(item), message);
        return array;
    }
    Asserts.requireNonNullArray = requireNonNullArray;
    function requireNonNullString(input, message) {
        if (input == null || input.trim().length === 0) {
            message = message || `'require non null or empty`;
            throw new ReferenceError(message);
        }
        return input;
    }
    Asserts.requireNonNullString = requireNonNullString;
    /**
     * Throws an exception if condition if false.
     * @param condition - the condition
     * @param message - an optional error message
     * @throws {Error} if condition is false
     */
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message);
        }
    }
    Asserts.assert = assert;
    /**
     * Throws an exception if `name` cannot be used a file name.
     * @param name the name to evaluate
     */
    function checkName(name) {
        if (!name) {
            throw new ReferenceError('name should not be null or empty');
        }
        if (!Asserts.DISALLOWED_CHAR.every(e => !name.includes(e))) {
            throw new Error(name + 'should not contains any of ' + Asserts.DISALLOWED_CHAR);
        }
    }
    Asserts.checkName = checkName;
})(Asserts = exports.Asserts || (exports.Asserts = {}));


/***/ }),

/***/ "./src/app/shared/models/http-encoder.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/http-encoder.model.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class CustomHttpParamEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
exports.CustomHttpParamEncoder = CustomHttpParamEncoder;


/***/ }),

/***/ "./src/app/shared/models/paths.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/paths.model.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Returns the last portion of a path. Similar to the Unix basename command.
 * Often used to extract the file name from a fully qualified path.
 * @param the path to evaluate.
 */
function basename(path) {
    if (!path) {
        return path;
    }
    path = path.replace(/\\/g, '/');
    return path.slice(path.lastIndexOf('/') + 1, path.length);
}
exports.basename = basename;
/**
 * Returns the directory name of a path. Similar to the Unix dirname command.
 * @param path the path to evaluate
 */
function dirname(path) {
    if (!path) {
        return path;
    }
    path = path.replace(/\\/g, '/');
    let head = path.slice(0, path.lastIndexOf('/') + 1);
    if (head && !head.match(/^\/*$/g)) {
        head = head.replace(/\/*$/g, '');
    }
    return head;
}
exports.dirname = dirname;
/**
 * Returns the extension of the path (in lowercase), from the last '.' to end of string in the last portion of the path.
 * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
 * @param path the path to evaluate
 * @returns the extension in lowercase or an empty string.
 */
function extname(path) {
    const base = basename(path);
    if (!base) {
        return base;
    }
    if (base.startsWith('.')) {
        return '';
    }
    const dotIndex = base.lastIndexOf('.');
    if (dotIndex === -1) {
        return '';
    }
    return base.substring(dotIndex + 1).toLowerCase();
}
exports.extname = extname;


/***/ }),

/***/ "./src/app/shared/pipes/asset.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/asset.pipe.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const environment_1 = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
let AssetPipe = class AssetPipe {
    transform(value) {
        return environment_1.environment.assets + '/' + value;
    }
};
AssetPipe = tslib_1.__decorate([
    core_1.Pipe({ name: 'asset' })
], AssetPipe);
exports.AssetPipe = AssetPipe;


/***/ }),

/***/ "./src/app/shared/pipes/trust-html.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/trust-html.pipe.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let TrustHtmlPipe = class TrustHtmlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
};
TrustHtmlPipe.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer }
];
TrustHtmlPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'trustHtml'
    }),
    tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], TrustHtmlPipe);
exports.TrustHtmlPipe = TrustHtmlPipe;


/***/ }),

/***/ "./src/app/shared/pipes/trust-resource-url.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/trust-resource-url.pipe.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let TrustResourceUrlPipe = class TrustResourceUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
TrustResourceUrlPipe.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer }
];
TrustResourceUrlPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'trustResourceUrl'
    }),
    tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], TrustResourceUrlPipe);
exports.TrustResourceUrlPipe = TrustResourceUrlPipe;


/***/ }),

/***/ "./src/app/shared/pipes/trust-script.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/trust-script.pipe.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let TrustScriptPipe = class TrustScriptPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustScript(value);
    }
};
TrustScriptPipe.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer }
];
TrustScriptPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'trustScript'
    }),
    tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], TrustScriptPipe);
exports.TrustScriptPipe = TrustScriptPipe;


/***/ }),

/***/ "./src/app/shared/pipes/trust-style.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/trust-style.pipe.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let TrustStylePipe = class TrustStylePipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    }
};
TrustStylePipe.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer }
];
TrustStylePipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'trustStyle'
    }),
    tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], TrustStylePipe);
exports.TrustStylePipe = TrustStylePipe;


/***/ }),

/***/ "./src/app/shared/pipes/trust-url.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/trust-url.pipe.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
let TrustUrlPipe = class TrustUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, args) {
        return this.domSanitizer.bypassSecurityTrustUrl(value);
    }
};
TrustUrlPipe.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer }
];
TrustUrlPipe = tslib_1.__decorate([
    core_1.Pipe({
        name: 'trustUrl'
    }),
    tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], TrustUrlPipe);
exports.TrustUrlPipe = TrustUrlPipe;


/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
const prompt_component_1 = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
const confirm_component_1 = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
let AbstractNotificationService = class AbstractNotificationService {
    constructor() {
        this.logAdded = new rxjs_1.Subject();
        this._logs = [];
        this.size = 0;
    }
    get logs() {
        return this._logs;
    }
    clear() {
        this.size = 0;
        this._logs = [];
    }
};
AbstractNotificationService = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], AbstractNotificationService);
exports.AbstractNotificationService = AbstractNotificationService;
let NotificationService = class NotificationService extends AbstractNotificationService {
    constructor(zone, dialog, toastr, snackbar) {
        super();
        this.zone = zone;
        this.dialog = dialog;
        this.toastr = toastr;
        this.snackbar = snackbar;
    }
    snack(message, config) {
        this.zone.run(() => {
            this.snackbar.open(message, '', config);
        });
    }
    success(message, title = '') {
        this.zone.run(() => {
            this.toastr.success(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }
    warning(message, title = '') {
        this.zone.run(() => {
            this.toastr.warning(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }
    error(message, title = '') {
        this.zone.run(() => {
            this.toastr.error(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }
    promptAsync(options) {
        const ref = this.dialog.open(prompt_component_1.PromptComponent, {
            hasBackdrop: true,
            disableClose: true,
            data: options,
        });
        return new Promise(resolve => {
            this.zone.run(() => {
                let subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }
    confirmAsync(options) {
        const ref = this.dialog.open(confirm_component_1.ConfirmComponent, {
            hasBackdrop: true,
            disableClose: true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise((resolve) => {
            this.zone.run(() => {
                let subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }
    logInfo(message, stackTrace = false) {
        this.log(message, 'info', stackTrace);
    }
    logWarning(message, stackTrace = false) {
        this.log(message, 'warning', stackTrace);
    }
    logError(message, stackTrace = false) {
        this.log(message, 'error', stackTrace);
    }
    log(message, type, stackTrace = false) {
        const item = { message: this.parseMessage(message, stackTrace), type: type };
        this.logs.push(item);
        this.logAdded.next(item);
        this.size++;
    }
    parseMessage(message, stackTrace) {
        let output = message;
        if (message instanceof http_1.HttpErrorResponse) {
            const error = message;
            output = error.error || error.message;
        }
        else {
            if (typeof message !== 'string') {
                output = message.error; // JavaScript Error Object
                if (!output) {
                    if (message.stack) {
                        const trace = stackTrace ? message.stack.split('\n').join('<br/>') : '';
                        output = message.message + trace;
                    }
                    else {
                        output = JSON.stringify(message);
                    }
                }
                else {
                    output = JSON.stringify(message);
                }
            }
        }
        return output;
    }
};
NotificationService.ctorParameters = () => [
    { type: core_1.NgZone },
    { type: material_1.MatDialog },
    { type: ngx_toastr_1.ToastrService },
    { type: material_1.MatSnackBar }
];
NotificationService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.NgZone,
        material_1.MatDialog,
        ngx_toastr_1.ToastrService,
        material_1.MatSnackBar])
], NotificationService);
exports.NotificationService = NotificationService;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js");
__webpack_require__(/*! rxjs/add/operator/first */ "./node_modules/rxjs-compat/_esm2015/add/operator/first.js");
__webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
__webpack_require__(/*! rxjs/add/operator/share */ "./node_modules/rxjs-compat/_esm2015/add/operator/share.js");
__webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs-compat/_esm2015/add/operator/startWith.js");
__webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
const language_1 = __webpack_require__(/*! ../pages/editor/shared/languages/language */ "./src/app/pages/editor/shared/languages/language.ts");
const premierlangage_1 = __webpack_require__(/*! ../pages/editor/shared/languages/premierlangage */ "./src/app/pages/editor/shared/languages/premierlangage.ts");
const confirm_component_1 = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
const prompt_component_1 = __webpack_require__(/*! ./components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
const tree_component_1 = __webpack_require__(/*! ./components/tree/tree.component */ "./src/app/shared/components/tree/tree.component.ts");
const autofocus_directive_1 = __webpack_require__(/*! ./directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
const dnd_directive_1 = __webpack_require__(/*! ./directives/dnd.directive */ "./src/app/shared/directives/dnd.directive.ts");
const run_scripts_directive_1 = __webpack_require__(/*! ./directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
const tree_node_directive_1 = __webpack_require__(/*! ./directives/tree-node.directive */ "./src/app/shared/directives/tree-node.directive.ts");
const material_module_1 = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
const trust_html_pipe_1 = __webpack_require__(/*! ./pipes/trust-html.pipe */ "./src/app/shared/pipes/trust-html.pipe.ts");
const trust_resource_url_pipe_1 = __webpack_require__(/*! ./pipes/trust-resource-url.pipe */ "./src/app/shared/pipes/trust-resource-url.pipe.ts");
const trust_script_pipe_1 = __webpack_require__(/*! ./pipes/trust-script.pipe */ "./src/app/shared/pipes/trust-script.pipe.ts");
const trust_style_pipe_1 = __webpack_require__(/*! ./pipes/trust-style.pipe */ "./src/app/shared/pipes/trust-style.pipe.ts");
const trust_url_pipe_1 = __webpack_require__(/*! ./pipes/trust-url.pipe */ "./src/app/shared/pipes/trust-url.pipe.ts");
const theme_1 = __webpack_require__(/*! ./themes/theme */ "./src/app/shared/themes/theme.ts");
const theme_dark_1 = __webpack_require__(/*! ./themes/theme.dark */ "./src/app/shared/themes/theme.dark.ts");
const theme_light_1 = __webpack_require__(/*! ./themes/theme.light */ "./src/app/shared/themes/theme.light.ts");
const angular_split_1 = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm2015/angular-split.js");
const ngx_monaco_editor_1 = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
const ngx_scrollbar_1 = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm2015/ngx-scrollbar.js");
const ngx_markdown_1 = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
const loading_component_1 = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
const asset_pipe_1 = __webpack_require__(/*! ./pipes/asset.pipe */ "./src/app/shared/pipes/asset.pipe.ts");
const highlight_words_directive_1 = __webpack_require__(/*! ./directives/highlight-words.directive */ "./src/app/shared/directives/highlight-words.directive.ts");
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            tree_component_1.TreeComponent,
            prompt_component_1.PromptComponent,
            confirm_component_1.ConfirmComponent,
            loading_component_1.LoadingComponent,
            dnd_directive_1.DndDirective,
            autofocus_directive_1.AutofocusDirective,
            run_scripts_directive_1.RunScriptsDirective,
            tree_node_directive_1.TreeNodeDirective,
            highlight_words_directive_1.HighlightWordsDirective,
            asset_pipe_1.AssetPipe,
            trust_html_pipe_1.TrustHtmlPipe,
            trust_url_pipe_1.TrustUrlPipe,
            trust_script_pipe_1.TrustScriptPipe,
            trust_style_pipe_1.TrustStylePipe,
            trust_resource_url_pipe_1.TrustResourceUrlPipe,
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule,
            angular_split_1.AngularSplitModule,
            ngx_monaco_editor_1.MonacoEditorModule,
            ngx_markdown_1.MarkdownModule,
            ngx_scrollbar_1.NgScrollbarModule,
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule,
            angular_split_1.AngularSplitModule,
            ngx_monaco_editor_1.MonacoEditorModule,
            ngx_markdown_1.MarkdownModule,
            ngx_scrollbar_1.NgScrollbarModule,
            tree_component_1.TreeComponent,
            prompt_component_1.PromptComponent,
            confirm_component_1.ConfirmComponent,
            loading_component_1.LoadingComponent,
            autofocus_directive_1.AutofocusDirective,
            dnd_directive_1.DndDirective,
            run_scripts_directive_1.RunScriptsDirective,
            tree_node_directive_1.TreeNodeDirective,
            highlight_words_directive_1.HighlightWordsDirective,
            asset_pipe_1.AssetPipe,
            trust_html_pipe_1.TrustHtmlPipe,
            trust_url_pipe_1.TrustUrlPipe,
            trust_script_pipe_1.TrustScriptPipe,
            trust_style_pipe_1.TrustStylePipe,
            trust_resource_url_pipe_1.TrustResourceUrlPipe,
        ],
        providers: [
            { provide: language_1.LANGUAGE_PROVIDERS, multi: true, useClass: premierlangage_1.PremierLangage },
            { provide: theme_1.THEME_PROVIDERS, multi: true, useClass: theme_dark_1.DarkTheme },
            { provide: theme_1.THEME_PROVIDERS, multi: true, useClass: theme_light_1.LightTheme }
        ],
        entryComponents: [prompt_component_1.PromptComponent, confirm_component_1.ConfirmComponent]
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/shared/themes/theme.dark.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/themes/theme.dark.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class DarkTheme {
    constructor() {
        this.id = 'dark-theme';
        this.base = 'vs-dark';
        this.inherit = true;
        this.rules = [
            /** haskell variable generic-type */
            { token: 'variable.other.generic-type.haskell', foreground: 'c678dd' },
            /** haskell storage type */
            { token: 'storage.type.haskell', foreground: 'd19a66' },
            /** support.variable.magic.python */
            { token: 'support.variable.magic.python', foreground: 'e06c75' },
            /** punctuation.separator.parameters.python */
            { token: 'punctuation.separator.period.python', foreground: 'abb2bf' },
            /** punctuation.separator.parameters.python */
            { token: 'punctuation.separator.element.python', foreground: 'abb2bf' },
            /** punctuation.separator.parameters.python */
            { token: 'punctuation.parenthesis.begin.python', foreground: 'abb2bf' },
            /** punctuation.separator.parameters.python */
            { token: 'punctuation.parenthesis.end.python', foreground: 'abb2bf' },
            /** variable.parameter.function.language.special.self.python */
            { token: 'variable.parameter.function.language.special.self.python', foreground: 'e5c07b' },
            /** storage.modifier.lifetime.rust */
            { token: 'storage.modifier.lifetime.rust', foreground: 'abb2bf' },
            /** support.function.std.rust */
            { token: 'support.function.std.rust', foreground: '61afef' },
            /** entity.name.lifetime.rust */
            { token: 'entity.name.lifetime.rust', foreground: 'e5c07b' },
            /** variable.language.rust */
            { token: 'variable.language.rust', foreground: 'e06c75' },
            /** support.constant.edge */
            { token: 'support.constant.edge', foreground: 'c678dd' },
            /** regexp constant character-class */
            { token: 'constant.other.character-class.regexp', foreground: 'e06c75' },
            /** regexp operator.quantifier */
            { token: 'keyword.operator.quantifier.regexp', foreground: 'd19a66' },
            /** punctuation.definition */
            { token: 'punctuation.definition.string.begin', foreground: '98c379' },
            /** punctuation.definition */
            { token: 'punctuation.definition.string.end', foreground: '98c379' },
            /** Text */
            { token: 'variable.parameter.function', foreground: 'abb2bf' },
            /** Comments */
            { token: 'comment', foreground: '7f848e' },
            /** Comments */
            { token: ' punctuation.definition.comment', foreground: '7f848e' },
            /** Comment Markup Link */
            { token: 'comment markup.link', foreground: '5c6370' },
            /** markup diff */
            { token: 'markup.changed.diff', foreground: 'e5c07b' },
            /** diff */
            { token: 'meta.diff.header.from-file', foreground: '61afef' },
            /** diff */
            { token: 'punctuation.definition.from-file.diff', foreground: '61afef' },
            /** inserted.diff */
            { token: 'markup.inserted.diff', foreground: '98c379' },
            /** deleted.diff */
            { token: 'markup.deleted.diff', foreground: 'e06c75' },
            /** c++ function */
            { token: 'meta.function.c', foreground: 'e06c75' },
            /** c++ function */
            { token: 'meta.function.cpp', foreground: 'e06c75' },
            /** c++ block */
            { token: 'punctuation.section.block.begin.bracket.curly.cpp', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.block.end.bracket.curly.cpp', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.terminator.statement.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.block.begin.bracket.curly.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.block.end.bracket.curly.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.parens.begin.bracket.round.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.parens.end.bracket.round.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.parameters.begin.bracket.round.c', foreground: 'abb2bf' },
            /** c++ block */
            { token: 'punctuation.section.parameters.end.bracket.round.c', foreground: 'abb2bf' },
            /** js/ts punctuation separator key-value */
            { token: 'punctuation.separator.key-value', foreground: 'abb2bf' },
            /** js/ts italic */
            { token: 'entity.other.attribute-name.js', fontStyle: 'italic' },
            /** js/ts italic */
            { token: 'entity.other.attribute-name.ts', fontStyle: 'italic' },
            /** js/ts italic */
            { token: 'entity.other.attribute-name.jsx', fontStyle: 'italic' },
            /** js/ts italic */
            { token: 'entity.other.attribute-name.tsx', fontStyle: 'italic' },
            /** js/ts italic */
            { token: 'variable.parameter', fontStyle: 'italic' },
            /** js/ts italic */
            { token: 'variable.language.super', fontStyle: 'italic' },
            /** js/ts import keyword */
            { token: 'keyword.operator.expression.import', foreground: '61afef' },
            /** math js/ts */
            { token: 'support.constant.math', foreground: 'e5c07b' },
            /** math property js/ts */
            { token: 'support.constant.property.math', foreground: 'd19a66' },
            /** js/ts variable.other.constant */
            { token: 'variable.other.constant', foreground: 'e5c07b' },
            /** java type */
            { token: 'storage.type.annotation.java', foreground: 'e5c07b' },
            /** java source */
            { token: 'source.java', foreground: 'e06c75' },
            /** java modifier.import */
            { token: 'punctuation.section.block.begin.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.block.end.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.definition.method-parameters.begin.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.definition.method-parameters.end.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'meta.method.identifier.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.method.begin.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.method.end.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.terminator.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.class.begin.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.class.end.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.inner-class.begin.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.inner-class.end.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'meta.method-call.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'storage.type.generic.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.class.begin.bracket.curly.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.class.end.bracket.curly.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.method.begin.bracket.curly.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.section.method.end.bracket.curly.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'punctuation.separator.period.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'meta.method.body.java', foreground: 'abb2bf' },
            /** java modifier.import */
            { token: 'meta.method.java', foreground: '61afef' },
            /** java modifier.import */
            { token: 'storage.modifier.import.java', foreground: 'e5c07b' },
            /** java modifier.import */
            { token: 'storage.type.java', foreground: 'e5c07b' },
            /** java variable.name */
            { token: 'meta.definition.variable.name.java', foreground: 'e06c75' },
            /** operator logical */
            { token: 'keyword.operator.logical.js', foreground: '56b6c2' },
            /** operator bitwise */
            { token: 'keyword.operator.bitwise', foreground: '56b6c2' },
            /** operator channel */
            { token: 'keyword.operator.channel', foreground: '56b6c2' },
            /** support.constant.property-value.scss */
            { token: 'support.constant.property-value.scss', foreground: 'd19a66' },
            /** support.constant.property-value.scss */
            { token: 'support.constant.property-value.css', foreground: 'd19a66' },
            /** CSS/SCSS/LESS Operators */
            { token: 'keyword.operator.css', foreground: '56b6c2' },
            /** CSS/SCSS/LESS Operators */
            { token: 'keyword.operator.scss', foreground: '56b6c2' },
            /** CSS/SCSS/LESS Operators */
            { token: 'keyword.operator.less', foreground: '56b6c2' },
            /** css color standard name */
            { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
            /** css color standard name */
            { token: 'support.constant.color.w3c-standard-color-name.scss', foreground: 'd19a66' },
            /** css comma */
            { token: 'punctuation.separator.list.comma.css', foreground: 'abb2bf' },
            /** css attribute-name.id */
            { token: 'support.constant.color.w3c-standard-color-name.css', foreground: 'd19a66' },
            /** css property-name */
            { token: 'support.type.vendored.property-name.css', foreground: '56b6c2' },
            /** js/ts template-expression */
            { token: 'punctuation.definition.template-expression.begin', foreground: 'e06c75' },
            /** js/ts template-expression */
            { token: 'punctuation.definition.template-expression.end', foreground: 'e06c75' },
            /** js/ts module */
            { token: 'support.module.node', foreground: 'e5c07b' },
            /** js/ts module */
            { token: 'support.type.object.module', foreground: 'e5c07b' },
            /** js/ts module */
            { token: 'support.module.node', foreground: 'e5c07b' },
            /** entity.name.type.module */
            { token: 'entity.name.type.module', foreground: 'e5c07b' },
            /** js variable readwrite */
            { token: 'variable.other.readwrite', foreground: 'e06c75' },
            /** js variable readwrite */
            { token: 'meta.object-literal.key', foreground: 'e06c75' },
            /** js variable readwrite */
            { token: 'support.variable.property', foreground: 'e06c75' },
            /** js variable readwrite */
            { token: 'support.variable.object.process', foreground: 'e06c75' },
            /** js variable readwrite */
            { token: 'support.variable.object.node', foreground: 'e06c75' },
            /** comment */
            { token: 'comment.line.double-slash', fontStyle: 'italic' },
            /** comment */
            { token: 'comment.block.documentation', fontStyle: 'italic' },
            /** js/ts json */
            { token: 'support.constant.json', foreground: 'd19a66' },
            /** js/ts Keyword */
            { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
            /** js/ts Keyword */
            { token: 'keyword.operator.new', foreground: 'c678dd' },
            /** js/ts Keyword */
            { token: 'keyword.operator.ternary', foreground: 'c678dd' },
            /** js/ts Keyword */
            { token: 'keyword.operator.optional', foreground: 'c678dd' },
            /** js/ts console */
            { token: 'support.type.object.console', foreground: 'e06c75' },
            /** js/ts support.variable.property.process */
            { token: 'support.variable.property.process', foreground: 'd19a66' },
            /** js console function */
            { token: 'entity.name.function', foreground: '61afef' },
            /** js console function */
            { token: 'support.function.console', foreground: '61afef' },
            /** operator */
            { token: 'keyword.operator', foreground: '56b6c2' },
            /** operator */
            { token: 'keyword.operator.delete', foreground: 'c678dd' },
            /** js dom */
            { token: 'support.type.object.dom', foreground: '56b6c2' },
            /** js dom variable */
            { token: 'support.variable.dom', foreground: 'e06c75' },
            /** js dom variable */
            { token: 'support.variable.property.dom', foreground: 'e06c75' },
            /** keyword.operator */
            { token: 'keyword.operator.arithmetic', foreground: '56b6c2' },
            /** keyword.operator */
            { token: 'keyword.operator.comparison', foreground: '56b6c2' },
            /** keyword.operator */
            { token: 'keyword.operator.decrement', foreground: '56b6c2' },
            /** keyword.operator */
            { token: 'keyword.operator.increment', foreground: '56b6c2' },
            /** C operator assignment */
            { token: 'keyword.operator.assignment.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.comparison.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.increment.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.decrement.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.bitwise.shift.c', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.assignment.cpp', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.comparison.cpp', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.cpp', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.increment.cpp', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.decrement.cpp', foreground: 'c678dd' },
            /** C operator assignment */
            { token: 'keyword.operator.bitwise.shift.cpp', foreground: 'c678dd' },
            /** Punctuation */
            { token: 'punctuation.separator.delimiter', foreground: 'abb2bf' },
            /** Other punctuation .c */
            { token: 'punctuation.separator.c', foreground: 'c678dd' },
            /** Other punctuation .c */
            { token: 'punctuation.separator.cpp', foreground: 'c678dd' },
            /** C type posix-reserved */
            { token: 'support.type.posix-reserved.c', foreground: '56b6c2' },
            /** C type posix-reserved */
            { token: 'support.type.posix-reserved.cpp', foreground: '56b6c2' },
            /** keyword.operator.sizeof.c */
            { token: 'keyword.operator.sizeof.c', foreground: 'c678dd' },
            /** keyword.operator.sizeof.c */
            { token: 'keyword.operator.sizeof.cpp', foreground: 'c678dd' },
            /** python parameter */
            { token: 'variable.parameter.function.language.python', foreground: 'd19a66' },
            /** python type */
            { token: 'support.type.python', foreground: '56b6c2' },
            /** python logical */
            { token: 'keyword.operator.logical.python', foreground: 'c678dd' },
            /** pyCs */
            { token: 'variable.parameter.function.python', foreground: 'd19a66' },
            /** python block */
            { token: 'punctuation.definition.arguments.begin.python', foreground: 'abb2bf' },
            /** python block */
            { token: 'punctuation.definition.arguments.end.python', foreground: 'abb2bf' },
            /** python block */
            { token: 'punctuation.separator.arguments.python', foreground: 'abb2bf' },
            /** python block */
            { token: 'punctuation.definition.list.begin.python', foreground: 'abb2bf' },
            /** python block */
            { token: 'punctuation.definition.list.end.python', foreground: 'abb2bf' },
            /** python function-call.generic */
            { token: 'meta.function-call.generic.python', foreground: '61afef' },
            /** python placeholder reset to normal string */
            { token: 'constant.character.format.placeholder.other.python', foreground: '98c379' },
            /** Delimiters */
            { token: 'none', foreground: 'abb2bf' },
            /** Operators */
            { token: 'keyword.operator', foreground: 'abb2bf' },
            /** Compound Assignment Operators */
            { token: 'keyword.operator.assignment.compound', foreground: 'c678dd' },
            /** Keywords */
            { token: 'keyword', foreground: 'c678dd' },
            /** Variables */
            { token: 'variable', foreground: 'e06c75' },
            /** Language variables */
            { token: 'variable.language', foreground: 'e5c07b' },
            /** Java Variables */
            { token: 'token.variable.parameter.java', foreground: 'abb2bf' },
            /** Java Imports */
            { token: 'import.storage.java', foreground: 'e5c07b' },
            /** Packages */
            { token: 'token.package.keyword', foreground: 'c678dd' },
            /** Packages */
            { token: 'token.package', foreground: 'abb2bf' },
            /** Functions */
            { token: 'entity.name.function', foreground: '61afef' },
            /** Functions */
            { token: 'meta.require', foreground: '61afef' },
            /** Functions */
            { token: 'support.function.any-method', foreground: '61afef' },
            /** Functions */
            { token: 'variable.function', foreground: '61afef' },
            /** Classes */
            { token: 'entity.name.type.namespace', foreground: 'e5c07b' },
            /** Classes */
            { token: 'support.class', foreground: 'e5c07b' },
            /** Classes */
            { token: ' entity.name.type.class', foreground: 'e5c07b' },
            /** Class name */
            { token: 'entity.name.class.identifier.namespace.type', foreground: 'e5c07b' },
            /** Class name */
            { token: 'entity.name.class', foreground: 'e5c07b' },
            /** Class name */
            { token: 'variable.other.class.js', foreground: 'e5c07b' },
            /** Class name */
            { token: 'variable.other.class.ts', foreground: 'e5c07b' },
            /** Class name php */
            { token: 'variable.other.class.php', foreground: 'e06c75' },
            /** Type Name */
            { token: 'entity.name.type', foreground: 'e5c07b' },
            /** Keyword Control */
            { token: 'keyword.control', foreground: 'c678dd' },
            /** Python Keyword Control */
            { token: 'keyword.control.import.python', fontStyle: 'italic' },
            /** Python Keyword Control */
            { token: 'keyword.control.flow.python', fontStyle: 'italic' },
            /** Control Elements */
            { token: 'control.elements', foreground: 'd19a66' },
            /** Control Elements */
            { token: ' keyword.operator.less', foreground: 'd19a66' },
            /** Methods */
            { token: 'keyword.other.special-method', foreground: '61afef' },
            /** Storage */
            { token: 'storage', foreground: 'c678dd' },
            /** Storage JS TS */
            { token: 'token.storage', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.delete', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.in', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.of', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.instanceof', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.new', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.typeof', foreground: 'c678dd' },
            /** Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void */
            { token: 'keyword.operator.expression.void', foreground: 'c678dd' },
            /** Java Storage */
            { token: 'token.storage.type.java', foreground: 'e5c07b' },
            /** Support */
            { token: 'support.function', foreground: '56b6c2' },
            /** Support type */
            { token: 'support.type.property-name', foreground: 'abb2bf' },
            /** Support type */
            { token: 'support.constant.property-value', foreground: 'abb2bf' },
            /** Support type */
            { token: 'support.constant.font-name', foreground: 'd19a66' },
            /** Meta tag */
            { token: 'meta.tag', foreground: 'abb2bf' },
            /** Strings, Inherited Class */
            { token: 'string', foreground: '98c379' },
            /** Strings, Inherited Class */
            { token: ' entity.other.inherited-class', foreground: '98c379' },
            /** Constant other symbol */
            { token: 'constant.other.symbol', foreground: '56b6c2' },
            /** Integers */
            { token: 'constant.numeric', foreground: 'd19a66' },
            /** Floats */
            { token: 'none', foreground: 'd19a66' },
            /** Boolean */
            { token: 'none', foreground: 'd19a66' },
            /** Constants */
            { token: 'constant', foreground: 'd19a66' },
            /** Constants */
            { token: 'punctuation.definition.constant', foreground: 'd19a66' },
            /** Tags */
            { token: 'entity.name.tag', foreground: 'e06c75' },
            /** Attributes */
            { token: 'entity.other.attribute-name', foreground: 'd19a66' },
            /** Attribute IDs */
            { token: 'entity.other.attribute-name.id', foreground: '61afef' },
            /** Attribute class */
            { token: 'entity.other.attribute-name.class.css', foreground: 'd19a66' },
            /** Selector */
            { token: 'meta.selector', foreground: 'c678dd' },
            /** Values */
            { token: 'none', foreground: 'd19a66' },
            /** Headings */
            { token: 'markup.heading', foreground: 'e06c75' },
            /** Headings */
            { token: 'markup.heading punctuation.definition.heading', foreground: '61afef' },
            /** Headings */
            { token: ' entity.name.section', foreground: '61afef' },
            /** Units */
            { token: 'keyword.other.unit', foreground: 'e06c75' },
            /** Bold */
            { token: 'markup.bold', foreground: 'd19a66' },
            /** Bold */
            { token: 'todo.bold', foreground: 'd19a66' },
            /** Bold */
            { token: 'punctuation.definition.bold', foreground: 'e5c07b' },
            /** Italic */
            { token: 'markup.italic', foreground: 'c678dd' },
            /** Italic */
            { token: ' punctuation.definition.italic', foreground: 'c678dd' },
            /** Italic */
            { token: 'todo.emphasis', foreground: 'c678dd' },
            /** Italic */
            { token: 'emphasis md', foreground: 'c678dd' },
            /** [VSCODE-CUSTOM] Markdown headings */
            { token: 'entity.name.section.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown heading Punctuation Definition */
            { token: 'punctuation.definition.heading.markdown', foreground: 'e06c75' },
            /** punctuation.definition.list.begin.markdown */
            { token: 'punctuation.definition.list.begin.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown heading setext */
            { token: 'markup.heading.setext', foreground: 'abb2bf' },
            /** [VSCODE-CUSTOM] Markdown Punctuation Definition Bold */
            { token: 'punctuation.definition.bold.markdown', foreground: 'd19a66' },
            /** [VSCODE-CUSTOM] Markdown Inline Raw */
            { token: 'markup.inline.raw.markdown', foreground: '98c379' },
            /** [VSCODE-CUSTOM] Markdown Inline Raw */
            { token: 'markup.inline.raw.string.markdown', foreground: '98c379' },
            /** [VSCODE-CUSTOM] Markdown List Punctuation Definition */
            { token: 'punctuation.definition.list.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown Quote */
            { token: 'markup.quote.markdown', foreground: '5c6370' },
            /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
            { token: 'punctuation.definition.string.begin.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
            { token: 'punctuation.definition.string.end.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown Punctuation Definition String */
            { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
            /** beginning.punctuation.definition.list.markdown */
            { token: 'beginning.punctuation.definition.list.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown Punctuation Definition Link */
            { token: 'punctuation.definition.metadata.markdown', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
            { token: 'markup.underline.link.markdown', foreground: 'c678dd' },
            /** [VSCODE-CUSTOM] Markdown Underline Link/Image */
            { token: 'markup.underline.link.image.markdown', foreground: 'c678dd' },
            /** [VSCODE-CUSTOM] Markdown Link Title/Description */
            { token: 'string.other.link.title.markdown', foreground: '61afef' },
            /** [VSCODE-CUSTOM] Markdown Link Title/Description */
            { token: 'string.other.link.description.markdown', foreground: '61afef' },
            /** markup.italic.markdown */
            { token: 'markup.italic.markdown', fontStyle: 'italic' },
            /** markup.bold.markdown */
            { token: 'markup.bold.markdown', fontStyle: 'bold' },
            /** Regular Expressions */
            { token: 'string.regexp', foreground: '56b6c2' },
            /** Escape Characters */
            { token: 'constant.character.escape', foreground: '56b6c2' },
            /** Embedded */
            { token: 'punctuation.section.embedded', foreground: 'e06c75' },
            /** Embedded */
            { token: ' variable.interpolation', foreground: 'e06c75' },
            /** Illegal */
            { token: 'invalid.illegal', foreground: 'ffffff' },
            /** Broken */
            { token: 'invalid.broken', foreground: 'ffffff' },
            /** Deprecated */
            { token: 'invalid.deprecated', foreground: 'ffffff' },
            /** Unimplemented */
            { token: 'invalid.unimplemented', foreground: 'ffffff' },
            /** Source Json Meta Structure Dictionary Json > String Quoted Json */
            { token: 'source.json meta.structure.dictionary.json > string.quoted.json', foreground: 'e06c75' },
            /** Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String */
            { token: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string', foreground: 'e06c75' },
            /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
            { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json', foreground: '98c379' },
            /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
            { token: 'source.json meta.structure.array.json > value.json > string.quoted.json', foreground: '98c379' },
            /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
            { token: 'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
            /** Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation */
            { token: 'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation', foreground: '98c379' },
            /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
            { token: 'source.json meta.structure.dictionary.json > constant.language.json', foreground: '56b6c2' },
            /** Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json */
            { token: 'source.json meta.structure.array.json > constant.language.json', foreground: '56b6c2' },
            /** [VSCODE-CUSTOM] JSON Property Name */
            { token: 'support.type.property-name.json', foreground: 'e06c75' },
            /** [VSCODE-CUSTOM] JSON Punctuation for Property Name */
            { token: 'support.type.property-name.json punctuation', foreground: 'e06c75' },
            /** laravel blade tag */
            { token: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade', foreground: 'c678dd' },
            /** laravel blade @ */
            { token: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade', foreground: 'c678dd' },
            /** use statement for other classes */
            { token: 'support.other.namespace.use.php', foreground: 'e5c07b' },
            /** use statement for other classes */
            { token: 'support.other.namespace.use-as.php', foreground: 'e5c07b' },
            /** use statement for other classes */
            { token: 'support.other.namespace.php', foreground: 'e5c07b' },
            /** use statement for other classes */
            { token: 'entity.other.alias.php', foreground: 'e5c07b' },
            /** use statement for other classes */
            { token: 'meta.interface.php', foreground: 'e5c07b' },
            /** error suppression */
            { token: 'keyword.operator.error-control.php', foreground: 'c678dd' },
            /** php instanceof */
            { token: 'keyword.operator.type.php', foreground: 'c678dd' },
            /** style double quoted array index normal begin */
            { token: 'punctuation.section.array.begin.php', foreground: 'abb2bf' },
            /** style double quoted array index normal end */
            { token: 'punctuation.section.array.end.php', foreground: 'abb2bf' },
            /** php illegal.non-null-typehinted */
            { token: 'invalid.illegal.non-null-typehinted.php', foreground: 'f44747' },
            /** php types */
            { token: 'storage.type.php', foreground: 'e5c07b' },
            /** php types */
            { token: 'meta.other.type.phpdoc.php', foreground: 'e5c07b' },
            /** php types */
            { token: 'keyword.other.type.php', foreground: 'e5c07b' },
            /** php types */
            { token: 'keyword.other.array.phpdoc.php', foreground: 'e5c07b' },
            /** php call-function */
            { token: 'meta.function-call.php', foreground: '61afef' },
            /** php call-function */
            { token: 'meta.function-call.object.php', foreground: '61afef' },
            /** php call-function */
            { token: 'meta.function-call.static.php', foreground: '61afef' },
            /** php function-resets */
            { token: 'punctuation.definition.parameters.begin.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.parameters.end.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.separator.delimiter.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.section.scope.begin.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.section.scope.end.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.terminator.expression.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.arguments.begin.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.arguments.end.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.storage-type.begin.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.storage-type.end.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.array.begin.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.array.end.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.begin.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.end.bracket.round.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.begin.bracket.curly.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.end.bracket.curly.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.section.switch-block.start.bracket.curly.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.section.switch-block.begin.bracket.curly.php', foreground: 'abb2bf' },
            /** php function-resets */
            { token: 'punctuation.definition.section.switch-block.end.bracket.curly.php', foreground: 'abb2bf' },
            /** support php constants */
            { token: 'support.constant.ext.php', foreground: 'd19a66' },
            /** support php constants */
            { token: 'support.constant.std.php', foreground: 'd19a66' },
            /** support php constants */
            { token: 'support.constant.core.php', foreground: 'd19a66' },
            /** support php constants */
            { token: 'support.constant.parser-token.php', foreground: 'd19a66' },
            /** php goto */
            { token: 'entity.name.goto-label.php', foreground: '61afef' },
            /** php goto */
            { token: 'support.other.php', foreground: '61afef' },
            /** php logical/bitwise operator */
            { token: 'keyword.operator.logical.php', foreground: '56b6c2' },
            /** php logical/bitwise operator */
            { token: 'keyword.operator.bitwise.php', foreground: '56b6c2' },
            /** php logical/bitwise operator */
            { token: 'keyword.operator.arithmetic.php', foreground: '56b6c2' },
            /** php regexp operator */
            { token: 'keyword.operator.regexp.php', foreground: 'c678dd' },
            /** php comparison */
            { token: 'keyword.operator.comparison.php', foreground: '56b6c2' },
            /** php heredoc/nowdoc */
            { token: 'keyword.operator.heredoc.php', foreground: 'c678dd' },
            /** php heredoc/nowdoc */
            { token: 'keyword.operator.nowdoc.php', foreground: 'c678dd' },
            /** python function decorator @ */
            { token: 'meta.function.decorator.python', foreground: '61afef' },
            /** python function support */
            { token: 'support.token.decorator.python', foreground: '56b6c2' },
            /** python function support */
            { token: 'meta.function.decorator.identifier.python', foreground: '56b6c2' },
            /** parameter function */
            { token: 'function.parameter', foreground: 'd19a66' },
            /** parameter function js/ts */
            { token: 'function.parameter', foreground: 'abb2bf' },
            /** brace function */
            { token: 'function.brace', foreground: 'abb2bf' },
            /** parameter function ruby cs */
            { token: 'function.parameter.ruby', foreground: 'abb2bf' },
            /** parameter function ruby cs */
            { token: ' function.parameter.cs', foreground: 'abb2bf' },
            /** constant.language.symbol.ruby */
            { token: 'constant.language.symbol.ruby', foreground: '56b6c2' },
            /** rgb-value */
            { token: 'rgb-value', foreground: '56b6c2' },
            /** rgb value */
            { token: 'inline-color-decoration rgb-value', foreground: 'd19a66' },
            /** rgb value less */
            { token: 'less rgb-value', foreground: 'd19a66' },
            /** sass selector */
            { token: 'selector.sass', foreground: 'e06c75' },
            /** ts primitive/builtin types */
            { token: 'support.type.primitive.ts', foreground: 'e5c07b' },
            /** ts primitive/builtin types */
            { token: 'support.type.builtin.ts', foreground: 'e5c07b' },
            /** ts primitive/builtin types */
            { token: 'support.type.primitive.tsx', foreground: 'e5c07b' },
            /** ts primitive/builtin types */
            { token: 'support.type.builtin.tsx', foreground: 'e5c07b' },
            /** block scope */
            { token: 'block.scope.end', foreground: 'abb2bf' },
            /** block scope */
            { token: 'block.scope.begin', foreground: 'abb2bf' },
            /** cs storage type */
            { token: 'storage.type.cs', foreground: 'e5c07b' },
            /** cs local variable */
            { token: 'entity.name.variable.local.cs', foreground: 'e06c75' },
            { token: 'token.info-token', foreground: '61afef' },
            { token: 'token.warn-token', foreground: 'd19a66' },
            { token: 'token.error-token', foreground: 'f44747' },
            { token: 'token.debug-token', foreground: 'c678dd' },
            /** String interpolation */
            { token: 'punctuation.definition.template-expression.begin', foreground: 'c678dd' },
            /** String interpolation */
            { token: 'punctuation.definition.template-expression.end', foreground: 'c678dd' },
            /** String interpolation */
            { token: 'punctuation.section.embedded', foreground: 'c678dd' },
            /** Reset JavaScript string interpolation expression */
            { token: 'meta.template.expression', foreground: 'abb2bf' },
            /** Import module JS */
            { token: 'keyword.operator.module', foreground: 'c678dd' },
            /** js Flowtype */
            { token: 'support.type.type.flowtype', foreground: '61afef' },
            /** js Flow */
            { token: 'support.type.primitive', foreground: 'e5c07b' },
            /** js class prop */
            { token: 'meta.property.object', foreground: 'e06c75' },
            /** js func parameter */
            { token: 'variable.parameter.function.js', foreground: 'e06c75' },
            /** js template literals begin */
            { token: 'keyword.other.template.begin', foreground: '98c379' },
            /** js template literals end */
            { token: 'keyword.other.template.end', foreground: '98c379' },
            /** js template literals variable braces begin */
            { token: 'keyword.other.substitution.begin', foreground: '98c379' },
            /** js template literals variable braces end */
            { token: 'keyword.other.substitution.end', foreground: '98c379' },
            /** js operator.assignment */
            { token: 'keyword.operator.assignment', foreground: '56b6c2' },
            /** go operator */
            { token: 'keyword.operator.assignment.go', foreground: 'e5c07b' },
            /** go operator */
            { token: 'keyword.operator.address.go', foreground: 'e5c07b' },
            /** Go package name */
            { token: 'entity.name.package.go', foreground: 'e5c07b' },
            /** elm prelude */
            { token: 'support.type.prelude.elm', foreground: '56b6c2' },
            /** elm constant */
            { token: 'support.constant.elm', foreground: 'd19a66' },
            /** template literal */
            { token: 'punctuation.quasi.element', foreground: 'c678dd' },
            /** html/pug (jade) escaped characters and entities */
            { token: 'constant.character.entity', foreground: 'e06c75' },
            /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
            { token: 'entity.other.attribute-name.pseudo-element', foreground: '56b6c2' },
            /** styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour */
            { token: 'entity.other.attribute-name.pseudo-class', foreground: '56b6c2' },
            /** Clojure globals */
            { token: 'entity.global.clojure', foreground: 'e5c07b' },
            /** Clojure symbols */
            { token: 'meta.symbol.clojure', foreground: 'e06c75' },
            /** Clojure constants */
            { token: 'constant.keyword.clojure', foreground: '56b6c2' },
            /** CoffeeScript Function Argument */
            { token: 'meta.arguments.coffee', foreground: 'e06c75' },
            /** CoffeeScript Function Argument */
            { token: 'variable.parameter.function.coffee', foreground: 'e06c75' },
            /** Ini Default Text */
            { token: 'source.ini', foreground: '98c379' },
            /** Makefile prerequisities */
            { token: 'meta.scope.prerequisites.makefile', foreground: 'e06c75' },
            /** Makefile text colour */
            { token: 'source.makefile', foreground: 'e5c07b' },
            /** Groovy import names */
            { token: 'storage.modifier.import.groovy', foreground: 'e5c07b' },
            /** Groovy Methods */
            { token: 'meta.method.groovy', foreground: '61afef' },
            /** Groovy Variables */
            { token: 'meta.definition.variable.name.groovy', foreground: 'e06c75' },
            /** Groovy Inheritance */
            { token: 'meta.definition.class.inherited.classes.groovy', foreground: '98c379' },
            /** HLSL Semantic */
            { token: 'support.variable.semantic.hlsl', foreground: 'e5c07b' },
            /** HLSL Types */
            { token: 'support.type.texture.hlsl', foreground: 'c678dd' },
            /** HLSL Types */
            { token: 'support.type.sampler.hlsl', foreground: 'c678dd' },
            /** HLSL Types */
            { token: 'support.type.object.hlsl', foreground: 'c678dd' },
            /** HLSL Types */
            { token: 'support.type.object.rw.hlsl', foreground: 'c678dd' },
            /** HLSL Types */
            { token: 'support.type.fx.hlsl', foreground: 'c678dd' },
            /** HLSL Types */
            { token: 'support.type.object.hlsl', foreground: 'c678dd' },
            /** SQL Variables */
            { token: 'text.variable', foreground: 'e06c75' },
            /** SQL Variables */
            { token: 'text.bracketed', foreground: 'e06c75' },
            /** types */
            { token: 'support.type.swift', foreground: 'e5c07b' },
            /** types */
            { token: 'support.type.vb.asp', foreground: 'e5c07b' },
            /** heading 1, keyword */
            { token: 'entity.name.function.xi', foreground: 'e5c07b' },
            /** heading 2, callable */
            { token: 'entity.name.class.xi', foreground: '56b6c2' },
            /** heading 3, property */
            { token: 'constant.character.character-class.regexp.xi', foreground: 'e06c75' },
            /** heading 4, type, class, interface */
            { token: 'constant.regexp.xi', foreground: 'c678dd' },
            /** heading 5, enums, preprocessor, constant, decorator */
            { token: 'keyword.control.xi', foreground: '56b6c2' },
            /** heading 6, number */
            { token: 'invalid.xi', foreground: 'abb2bf' },
            /** string */
            { token: 'beginning.punctuation.definition.quote.markdown.xi', foreground: '98c379' },
            /** comments */
            { token: 'beginning.punctuation.definition.list.markdown.xi', foreground: '7f848e' },
            /** link */
            { token: 'constant.character.xi', foreground: '61afef' },
            /** accent */
            { token: 'accent.xi', foreground: '61afef' },
            /** wikiword */
            { token: 'wikiword.xi', foreground: 'd19a66' },
            /** language operators like '+', '-' etc */
            { token: 'constant.other.color.rgb-value.xi', foreground: 'ffffff' },
            /** elements to dim */
            { token: 'punctuation.definition.tag.xi', foreground: '5c6370' },
        ];
        this.colors = {
            'activityBar.background': '#282c34',
            'activityBar.foreground': '#d7dae0',
            'activityBarBadge.background': '#4d78cc',
            'activityBarBadge.foreground': '#f8fafd',
            'badge.background': '#282c34',
            'button.background': '#404754',
            'debugToolBar.background': '#21252b',
            'diffEditor.insertedTextBackground': '#00809b33',
            'dropdown.background': '#21252b',
            'dropdown.border': '#21252b',
            'editor.background': '#282c34',
            'editor.foreground': '#abb2bf',
            'editorError.foreground': '#c24038',
            'editorIndentGuide.activeBackground': '#c8c8c859',
            'editorMarkerNavigation.background': '#21252b',
            'editorRuler.foreground': '#abb2bf26',
            'editor.lineHighlightBackground': '#2c313c',
            'editor.selectionBackground': '#67769660',
            'editor.selectionHighlightBackground': '#ffffff10',
            'editor.selectionHighlightBorder': '#ddd',
            'editorCursor.background': '#ffffffc9',
            'editorCursor.foreground': '#528bff',
            'editorBracketMatch.border': '#515a6b',
            'editorBracketMatch.background': '#515a6b',
            'editor.findMatchBackground': '#42557b',
            'editor.findMatchBorder': '#457dff',
            'editor.findMatchHighlightBackground': '#314365',
            'editor.wordHighlightBackground': '#484e5b',
            'editor.wordHighlightBorder': '#7f848e',
            'editor.wordHighlightStrongBackground': '#abb2bf26',
            'editor.wordHighlightStrongBorder': '#7f848e',
            'editorGroup.background': '#181a1f',
            'editorGroup.border': '#181a1f',
            'editorGroupHeader.tabsBackground': '#21252b',
            'editorIndentGuide.background': '#3b4048',
            'editorLineNumber.foreground': '#495162',
            'editorActiveLineNumber.foreground': '#737984',
            'editorWhitespace.foreground': '#3b4048',
            'editorHoverWidget.background': '#21252b',
            'editorHoverWidget.border': '#181a1f',
            'editorSuggestWidget.background': '#21252b',
            'editorSuggestWidget.border': '#181a1f',
            'editorSuggestWidget.selectedBackground': '#2c313a',
            'editorWidget.background': '#21252b',
            'focusBorder': '#464646',
            'input.background': '#1d1f23',
            'list.activeSelectionBackground': '#2c313a',
            'list.activeSelectionForeground': '#d7dae0',
            'list.focusBackground': '#383e4a',
            'list.hoverBackground': '#292d35',
            'list.highlightForeground': '#c5c5c5',
            'list.inactiveSelectionBackground': '#2c313a',
            'list.inactiveSelectionForeground': '#d7dae0',
            'menu.foreground': '#c8c8c8',
            'peekViewEditor.background': '#1b1d23',
            'peekViewEditor.matchHighlightBackground': '#29244b',
            'peekViewResult.background': '#22262b',
            'scrollbarSlider.background': '#4e566660',
            'scrollbarSlider.activeBackground': '#747d9180',
            'scrollbarSlider.hoverBackground': '#5a637580',
            'sideBar.background': '#21252b',
            'sideBarSectionHeader.background': '#282c34',
            'statusBar.background': '#21252b',
            'statusBar.foreground': '#9da5b4',
            'statusBarItem.hoverBackground': '#2c313a',
            'statusBar.noFolderBackground': '#21252b',
            'statusBar.debuggingBackground': '#7e0097',
            'statusBar.debuggingBorder': '#66017a',
            'statusBar.debuggingForeground': '#ffffff',
            'statusBarItem.remoteForeground': '#f8fafd',
            'statusBarItem.remoteBackground': '#4d78cc',
            'tab.activeBackground': '#282c34',
            'tab.activeForeground': '#dcdcdc',
            'tab.border': '#181a1f',
            'tab.inactiveBackground': '#21252b',
            'tab.hoverBackground': '#323842',
            'tab.unfocusedHoverBackground': '#323842',
            'terminal.foreground': '#c8c8c8',
            'terminal.ansiBlack': '#2d3139',
            'terminal.ansiBlue': '#61afef',
            'terminal.ansiGreen': '#98c379',
            'terminal.ansiYellow': '#e5c07b',
            'terminal.ansiCyan': '#56b6c2',
            'terminal.ansiMagenta': '#c678dd',
            'terminal.ansiRed': '#e06c75',
            'terminal.ansiWhite': '#d7dae0',
            'terminal.ansiBrightBlack': '#7f848e',
            'terminal.ansiBrightBlue': '#528bff',
            'terminal.ansiBrightGreen': '#98c379',
            'terminal.ansiBrightYellow': '#e5c07b',
            'terminal.ansiBrightCyan': '#56b6c2',
            'terminal.ansiBrightMagenta': '#7e0097',
            'terminal.ansiBrightRed': '#f44747',
            'terminal.ansiBrightWhite': '#d7dae0',
            'titleBar.activeBackground': '#282c34',
            'titleBar.activeForeground': '#9da5b4',
            'titleBar.inactiveBackground': '#21252b',
            'titleBar.inactiveForeground': '#6b717d',
            'textLink.foreground': '#61afef',
        };
    }
}
exports.DarkTheme = DarkTheme;


/***/ }),

/***/ "./src/app/shared/themes/theme.light.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/themes/theme.light.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class LightTheme {
    constructor() {
        this.id = 'light-theme';
        this.base = 'vs';
        this.inherit = true;
        this.rules = [
            { token: 'text', foreground: '000000' },
            { token: 'operator', foreground: '000000' },
        ];
        this.colors = {};
    }
}
exports.LightTheme = LightTheme;


/***/ }),

/***/ "./src/app/shared/themes/theme.ts":
/*!****************************************!*\
  !*** ./src/app/shared/themes/theme.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/** InjectionToken to provides new theme to the editor */
exports.THEME_PROVIDERS = new core_1.InjectionToken('Theme Provider');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
exports.environment = {
    production: false,
    assets: '/static/editor/assets',
    statics: '/static/editor'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
__webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jlebas01/pl/editor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map