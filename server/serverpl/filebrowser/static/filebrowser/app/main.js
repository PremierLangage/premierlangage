(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
/* {path: '', component: EditorComponent} */
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='app-loading' *ngIf='loading'>\n    <div class=\"spinner\">\n        <div class=\"dot1\"></div>\n        <div class=\"dot2\"></div>\n    </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this.loading = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _editor_editor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor/editor.module */ "./src/app/editor/editor.module.ts");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _editor_shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/shared/models/monaco.model */ "./src/app/editor/shared/models/monaco.model.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_6__["MonacoEditorModule"].forRoot(_editor_shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_7__["MONACO_CONFIG"]),
                _editor_editor_module__WEBPACK_IMPORTED_MODULE_5__["EditorModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editor/debugging/console/console.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/debugging/console/console.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class='console__content' #container>\n    <h4 *ngIf='empty'>Nothing to display</h4>\n    <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n        <li class='log log--{{item.type}}'>\n        <ng-container [ngSwitch]=\"item.type\">\n            <mat-icon *ngSwitchCase=\"'info'\" mat-list-icon class='log-icon'>info</mat-icon>\n            <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='log-icon'>warning</mat-icon>\n            <mat-icon *ngSwitchDefault mat-list-icon class='log-icon'>error</mat-icon>\n        </ng-container>\n        <p class='log-content' [innerHTML]='item.message | sanitizeHtml'></p>\n        </li>\n        <mat-divider *ngIf='!last'></mat-divider>\n    </ng-container>\n</ul>"

/***/ }),

/***/ "./src/app/editor/debugging/console/console.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/debugging/console/console.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".console__content {\n  height: 100%; }\n\n.log {\n  position: relative;\n  list-style-type: none;\n  list-style-type: none;\n  display: flex;\n  align-items: baseline;\n  padding: 8px; }\n\n.log .log-icon {\n    position: absolute; }\n\n.log--info .log-icon {\n  color: #009688; }\n\n.log--warning .log-icon {\n  color: #FFEB3B; }\n\n.log--error .log-icon {\n  color: #F44336; }\n\n.log-content {\n  padding: 0 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2RlYnVnZ2luZy9jb25zb2xlL2NvbnNvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGFBQVksRUFJZjs7QUFWRDtJQVFRLG1CQUFrQixFQUNyQjs7QUFHTDtFQUVRLGVBQWMsRUFDakI7O0FBR0w7RUFFUSxlQUFjLEVBQ2pCOztBQUdMO0VBRVEsZUFBYSxFQUNoQjs7QUFHTDtFQUNJLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2RlYnVnZ2luZy9jb25zb2xlL2NvbnNvbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uc29sZV9fY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubG9nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgLmxvZy1pY29uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbn1cblxuLmxvZy0taW5mbyB7XG4gICAgLmxvZy1pY29uIHtcbiAgICAgICAgY29sb3I6ICMwMDk2ODg7XG4gICAgfVxufVxuXG4ubG9nLS13YXJuaW5nIHtcbiAgICAubG9nLWljb24ge1xuICAgICAgICBjb2xvcjogI0ZGRUIzQjtcbiAgICB9XG59XG5cbi5sb2ctLWVycm9yIHtcbiAgICAgIC5sb2ctaWNvbiB7XG4gICAgICAgIGNvbG9yOiNGNDQzMzY7XG4gICAgfVxufVxuXG4ubG9nLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgMzJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/debugging/console/console.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/debugging/console/console.component.ts ***!
  \***************************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");



var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent(notification) {
        this.notification = notification;
        this.items = [];
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empty = true;
        this.notification.onLogAdded.subscribe(function (message) {
            _this.empty = false;
            _this.items.push(message);
            _this.scrollBottom();
        });
    };
    ConsoleComponent.prototype.didTapClear = function (event) {
        event.stopPropagation();
        this.items = [];
        this.empty = true;
        this.notification.clear();
    };
    ConsoleComponent.prototype.track = function (index, _item) {
        return index;
    };
    ConsoleComponent.prototype.scrollBottom = function () {
        if (this.container) {
            this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsoleComponent.prototype, "container", void 0);
    ConsoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'console',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/editor/debugging/console/console.component.html"),
            styles: [__webpack_require__(/*! ./console.component.scss */ "./src/app/editor/debugging/console/console.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "./src/app/editor/debugging/debugging.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/debugging/debugging.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='host'>\n    <div class='tab-bar' (click)='didTapOpen($event)'>\n        <h3 class='tab-item'>CONSOLE</h3>\n        <div class='spacer'></div>\n        <div class='tab-item' matTooltip='Clear' (click)='console.didTapClear($event)'>\n            <i class=\"fas fa-trash-alt\"></i>\n        </div>\n        <div class='tab-item' matTooltip='Hide' (click)='didTapClose($event)'>\n            <i class=\"fas fa-times\"></i>\n        </div>\n    </div>\n    <div class='debugging__content'>\n        <console #console></console>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/editor/debugging/debugging.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/editor/debugging/debugging.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  background-color: white; }\n\n.tab-item {\n  background: transparent; }\n\n.debugging__content {\n  overflow: auto;\n  height: calc(100% - 36px);\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2RlYnVnZ2luZy9kZWJ1Z2dpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSx3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9kZWJ1Z2dpbmcvZGVidWdnaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRlYnVnZ2luZ19fY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/debugging/debugging.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/debugging/debugging.component.ts ***!
  \*********************************************************/
/*! exports provided: DebuggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebuggingComponent", function() { return DebuggingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");



var DebuggingComponent = /** @class */ (function () {
    function DebuggingComponent(notification) {
        this.notification = notification;
        this.openedSize = 60;
        this.size = 0;
    }
    DebuggingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notification.onToggleDebuggingArea.subscribe(function () {
            if (_this.size < _this.openedSize) {
                _this.open();
            }
            else {
                _this.close();
            }
        });
        this.notification.onLogAdded.subscribe(function () {
            _this.open();
        });
    };
    DebuggingComponent.prototype.didTapOpen = function (event) {
        event.stopPropagation();
        this.open();
    };
    DebuggingComponent.prototype.didTapClose = function (event) {
        event.stopPropagation();
        this.size = 5;
    };
    DebuggingComponent.prototype.dragEnd = function (data) {
        this.size = data.sizes[1];
        if (this.size < 5) {
            this.size = 5;
        }
    };
    DebuggingComponent.prototype.open = function () {
        if (this.size < this.openedSize) {
            this.size = this.openedSize;
        }
    };
    DebuggingComponent.prototype.close = function () {
        this.size = 0;
    };
    DebuggingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'debugging',
            template: __webpack_require__(/*! ./debugging.component.html */ "./src/app/editor/debugging/debugging.component.html"),
            styles: [__webpack_require__(/*! ./debugging.component.scss */ "./src/app/editor/debugging/debugging.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], DebuggingComponent);
    return DebuggingComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/editor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");




var routes = [
    { path: 'filebrowser', component: _editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"] }
];
var EditorRoutingModule = /** @class */ (function () {
    function EditorRoutingModule() {
    }
    EditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], EditorRoutingModule);
    return EditorRoutingModule;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='host'>\n  <div class='host-container'>\n    <navigation #navigation></navigation>\n    <as-split direction=\"horizontal\" gutterSize='5' useTransition='true'>    \n        <as-split-area class='navigation' style='overflow: hidden;' [size]=\"navigation.size\" [ngSwitch]=\"navigation.index\">\n            <explorer *ngSwitchCase=\"0\" [items]='items()' [showHeader]='true'></explorer>\n            <search *ngSwitchCase=\"1\" [items]='items()'></search>\n            <git *ngSwitchCase=\"2\"></git>\n            <settings *ngSwitchCase=\"3\"></settings>\n        </as-split-area>\n        <as-split-area class='h100' style='position: relative; overflow: hidden;' [size]=\"100 - navigation.size\">\n            <as-split class='workspace' direction='vertical' gutterSize='5' useTransition='true' (dragEnd)='debugging.dragEnd($event)'>\n                <as-split-area class='h100' [size]='100 - debugging.size'>\n                    <workspace></workspace>\n                </as-split-area>\n                <as-split-area class='debugging' style='overflow: hidden;' [size]='debugging.size'>\n                    <debugging #debugging></debugging>\n                </as-split-area>\n            </as-split>\n            <div id='editor-overlay-quickOpenWidget' #quickOpen *ngIf='showQuickOpen'>\n                <mat-form-field>\n                    <input type=\"text\" placeholder=\"Quick open a file\" matInput [matAutocomplete]=\"auto\"\n                        autoFocus (blur)='closeQuickOpen()' [formControl]=\"quickOpenForm\">\n                </mat-form-field>\n                <mat-autocomplete autoFocus #auto=\"matAutocomplete\" (optionSelected)='quickOpenItemSelected($event)' >\n                    <mat-option *ngFor=\"let entry of quickOpenEntries | async\" [value]=\"entry\">\n                        <i class='{{entry.icon}} entry-icon'></i>&nbsp;<span class='entry-name'>{{entry.name}}</span> - <span class='entry-path'>{{entry.path}}</span>\n                    </mat-option>\n                </mat-autocomplete>\n            </div>\n        </as-split-area>\n    </as-split>\n  </div>\n  <mat-progress-bar mode='indeterminate' color='warn' *ngIf='runningTask()'></mat-progress-bar>\n  <footer></footer>\n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-flow: column;\n  height: calc(100vh - 64px);\n  color: #5a5a5a; }\n  .host .host-container {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    flex: 1; }\n  .navigation {\n  height: 100%;\n  overflow: hidden;\n  background-color: #F6F6F6; }\n  .tab-bar {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  height: 36px;\n  align-items: center;\n  overflow: hidden;\n  background-color: #F5F5F5;\n  border-bottom: 1px solid #dee2e6 !important; }\n  .tab-bar .tab-item {\n    display: inline-flex;\n    height: 100%;\n    align-items: center;\n    position: relative;\n    font-size: 14px;\n    color: #5a5a5a;\n    font-style: normal;\n    padding: 0px 12px;\n    cursor: pointer; }\n  .workspace {\n  position: relative;\n  height: 100%; }\n  .spacer {\n  flex-grow: 1; }\n  .h100 {\n  height: 100%; }\n  #editor-overlay-quickOpenWidget {\n  z-index: 100000;\n  left: 0;\n  right: 0;\n  width: 40%;\n  margin: auto;\n  position: absolute;\n  top: 36px;\n  background-color: white;\n  padding: 0 4px; }\n  #editor-overlay-quickOpenWidget mat-form-field {\n    width: 100%; }\n  .entry-icon {\n  font-size: 14px; }\n  .entry-name {\n  font-size: 14px; }\n  .entry-path {\n  font-size: 10px; }\n  div.mat-autocomplete-panel {\n  height: auto;\n  max-height: 400px;\n  overflow-y: auto; }\n  /* .fab.fa-css3 {\n    color: #e91e63;\n}\n.fab.fa-js-square {\n    color: #ffea00;\n}\n\n.fab.fa-html5 {\n    color: #ff9800;\n}\n\n.fab.fa-python {\n    color: #009688;\n}\n\n.fab.fa-markdown {\n    color: #2196f3\n}\n\n.fas.fa-file-pdf {\n    color:#f44336;\n}\n\n.fas.fa-file-csv {\n    color:#f44336;\n}\n\n.fab.fa-java {\n    color: #f44336;\n}\n\n.fas.fa-file-image {\n    color: #ffc107;\n}\n\n.fas.fa-code {\n    color: #03a9f4\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsVUFBUztFQUNULGNBQWE7RUFDYixrQkFBaUI7RUFDakIsMkJBQXVDO0VBQ3ZDLGVBQWMsRUFRakI7RUFmRDtJQVNRLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixRQUFPLEVBQ1Y7RUFJTDtFQUNJLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsMEJBQXlCLEVBQzVCO0VBRUQ7RUFDSSxXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixhQTlCYTtFQStCYixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6Qiw0Q0FBMEMsRUFhN0M7RUFyQkQ7SUFXUSxxQkFBb0I7SUFDcEIsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNsQjtFQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVksRUFDZjtFQUVEO0VBQ0ksYUFBWSxFQUNmO0VBRUQ7RUFDSSxhQUFZLEVBQ2Y7RUFFRDtFQUNJLGdCQUFlO0VBQ2YsUUFBTztFQUNQLFNBQVE7RUFDUixXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1Qsd0JBQXVCO0VBQ3ZCLGVBQWMsRUFJakI7RUFiRDtJQVdRLFlBQVcsRUFDZDtFQUdMO0VBQ0ksZ0JBQWUsRUFDbEI7RUFFRDtFQUNJLGdCQUFlLEVBQ2xCO0VBRUQ7RUFDSSxnQkFBZSxFQUNsQjtFQUVEO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDbkI7RUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFDSSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWhlaWdodDogNjRweDtcbiR0YWItaGVpZ2h0OiAzNnB4O1xuXG4uaG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0pO1xuICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgIC5ob3N0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuXG4ubmF2aWdhdGlvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XG59XG5cbi50YWItYmFyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHRhYi1oZWlnaHQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xuXG4gICAgLnRhYi1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ud29ya3NwYWNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5oMTAwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNlZGl0b3Itb3ZlcmxheS1xdWlja09wZW5XaWRnZXQge1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCA0cHg7XG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5lbnRyeS1pY29uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnRyeS1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnRyeS1wYXRoIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbmRpdi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLyogLmZhYi5mYS1jc3MzIHtcbiAgICBjb2xvcjogI2U5MWU2Mztcbn1cbi5mYWIuZmEtanMtc3F1YXJlIHtcbiAgICBjb2xvcjogI2ZmZWEwMDtcbn1cblxuLmZhYi5mYS1odG1sNSB7XG4gICAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5mYWIuZmEtcHl0aG9uIHtcbiAgICBjb2xvcjogIzAwOTY4ODtcbn1cblxuLmZhYi5mYS1tYXJrZG93biB7XG4gICAgY29sb3I6ICMyMTk2ZjNcbn1cblxuLmZhcy5mYS1maWxlLXBkZiB7XG4gICAgY29sb3I6I2Y0NDMzNjtcbn1cblxuLmZhcy5mYS1maWxlLWNzdiB7XG4gICAgY29sb3I6I2Y0NDMzNjtcbn1cblxuLmZhYi5mYS1qYXZhIHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLmZhcy5mYS1maWxlLWltYWdlIHtcbiAgICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLmZhcy5mYS1jb2RlIHtcbiAgICBjb2xvcjogIzAzYTlmNFxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/models/monaco.model */ "./src/app/editor/shared/models/monaco.model.ts");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/core/task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");












var EditorComponent = /** @class */ (function () {
    function EditorComponent(task, opener, monaco, resources, notification, changesDetector) {
        var _this = this;
        this.task = task;
        this.opener = opener;
        this.monaco = monaco;
        this.resources = resources;
        this.notification = notification;
        this.changesDetector = changesDetector;
        this.subscriptions = [];
        this.quickOpenForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.quickOpenEntries = this.quickOpenForm
            .valueChanges
            .debounceTime(400)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (r) { return r ? _this.filterQuickOpen(r) : _this.quickOpenData().slice(); }));
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(_shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_3__["MONACO_LOADED"].subscribe(function (monaco) { return _this.monaco.register(monaco); }));
        this.resources.refresh().catch(function (error) {
            _this.notification.logError(error);
        });
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
    };
    EditorComponent.prototype.items = function () {
        return this.resources.resources;
    };
    EditorComponent.prototype.runningTask = function () {
        return this.task.running;
    };
    EditorComponent.prototype.closeQuickOpen = function () {
        var that = this;
        setTimeout(function () {
            that.showQuickOpen = false;
        }, 200);
    };
    EditorComponent.prototype.quickOpenItemSelected = function (e) {
        this.showQuickOpen = false;
        var resource = e.option.value;
        this.opener.open(resource.path);
    };
    EditorComponent.prototype.beforeunload = function ($event) {
        if (this.resources.changed()) { // the if is required
            $event.returnValue = true;
        }
    };
    EditorComponent.prototype.keypressed = function ($event) {
        if ($event.key === 'F2') {
            $event.preventDefault();
            $event.stopPropagation();
            this.quickOpenForm.setValue('');
            this.showQuickOpen = true;
        }
    };
    EditorComponent.prototype.filterQuickOpen = function (value) {
        var filterValue = value.toLowerCase();
        return this.quickOpenData().filter(function (r) { return r.name.toLowerCase().indexOf(filterValue) === 0; });
    };
    EditorComponent.prototype.quickOpenData = function () {
        return this.resources.findAll(function (r) { return r.type === _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_4__["ResourceTypes"].File; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EditorComponent.prototype, "beforeunload", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EditorComponent.prototype, "keypressed", null);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_7__["OpenerService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_6__["MonacoService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_8__["ResourceService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var angular2_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
/* harmony import */ var rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js");
/* harmony import */ var rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/editor/editor-routing.module.ts");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debugging/debugging.component */ "./src/app/editor/debugging/debugging.component.ts");
/* harmony import */ var _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./debugging/console/console.component */ "./src/app/editor/debugging/console/console.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/editor/footer/footer.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/editor/navigation/navigation.component.ts");
/* harmony import */ var _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/explorer/explorer.component */ "./src/app/editor/navigation/explorer/explorer.component.ts");
/* harmony import */ var _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/search/search.component */ "./src/app/editor/navigation/search/search.component.ts");
/* harmony import */ var _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/git/git.component */ "./src/app/editor/navigation/git/git.component.ts");
/* harmony import */ var _navigation_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/settings/settings.component */ "./src/app/editor/navigation/settings/settings.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/editor/workspace/workspace.component.ts");
/* harmony import */ var _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workspace/code-editor/code-editor.component */ "./src/app/editor/workspace/code-editor/code-editor.component.ts");
/* harmony import */ var _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workspace/image-editor/image-editor.component */ "./src/app/editor/workspace/image-editor/image-editor.component.ts");
/* harmony import */ var _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./workspace/preview-editor/preview-editor.component */ "./src/app/editor/workspace/preview-editor/preview-editor.component.ts");


// https://www.npmjs.com/package/time-ago-pipe

// https://www.npmjs.com/package/angular-split

// https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0

// https://www.npmjs.com/package/angular2-markdown





/* DEBUGGING COMPONENTS */



/* NAVIGATION COMPONENTS */





/* WORKSPACE COMPONENTS */




var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"],
                _editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__["ExplorerComponent"],
                _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_16__["GitComponent"],
                _navigation_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_10__["DebuggingComponent"],
                _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_11__["ConsoleComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_18__["WorkspaceComponent"],
                _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_19__["CodeEditorComponent"],
                _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__["ImageEditorComponent"],
                _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_21__["PreviewEditorComponent"],
            ],
            imports: [
                _editor_routing_module__WEBPACK_IMPORTED_MODULE_8__["EditorRoutingModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_3__["AngularSplitModule"].forRoot(),
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"],
                angular2_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot()
            ],
            exports: [
                _editor_component__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"],
            ],
            providers: []
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/editor/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"inRepo()\">\n    <i class='repo-icon {{repoHost()}} fa-1x'></i> \n    <a class='repo-url' href=\"{{repoUrl()}} \">{{repoUrl()}}</a> <i class='repo-branch'> - {{repoBranch()}} </i>\n</ng-container>\n<div class=\"spacer\"></div>\n<span *ngIf='cursor'>Ln {{cursor.lineNumber}}, Col {{cursor.column}}</span>\n<ng-container *ngIf='runningTask()'>\n    <mat-progress-spinner mode='indeterminate' color='warn' strokeWidth='2' diameter='16'></mat-progress-spinner> \n</ng-container>"

/***/ }),

/***/ "./src/app/editor/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 20px;\n  background-color: #2f77c2;\n  color: white;\n  font-size: 12px;\n  padding: 0 8px; }\n\na {\n  color: white; }\n\n.repo-icon {\n  margin: 0 8px; }\n\n.repo-url {\n  margin-right: 8px; }\n\n.task-name {\n  margin: 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osMEJBQXdCO0VBQ3hCLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyZjc3YzI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVwby1pY29uIHtcbiAgICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucmVwby11cmwge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGFzay1uYW1lIHtcbiAgICBtYXJnaW46IDAgNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/editor/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/core/task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");






var FooterComponent = /** @class */ (function () {
    function FooterComponent(task, monaco, resources) {
        this.task = task;
        this.monaco = monaco;
        this.resources = resources;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cursorSubscription = this.monaco.cursorChanged.subscribe(function (cursor) {
            _this.cursor = cursor;
        });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.cursorSubscription.unsubscribe();
    };
    FooterComponent.prototype.runningTask = function () {
        return this.task.running;
    };
    FooterComponent.prototype.taskName = function () {
        return this.task.taskName;
    };
    FooterComponent.prototype.inRepo = function () {
        return _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isRepo"](this.resources.selection);
    };
    FooterComponent.prototype.repoHost = function () {
        return this.resources.selection.repo.host;
    };
    FooterComponent.prototype.repoUrl = function () {
        return this.resources.selection.repo.url;
    };
    FooterComponent.prototype.repoBranch = function () {
        return this.resources.selection.repo.branch;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/editor/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/editor/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_5__["MonacoService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/explorer/explorer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/editor/navigation/explorer/explorer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ng-container *ngIf='showHeader; else tree'>\n    <div class='tab-bar'>\n        <span>EXPLORER</span>       \n        <div class=\"spacer\"></div>\n        <div class='tab-item' (click)='didTapRefresh()' matTooltip='Refresh'>\n            <i class=\"fas fa-sync\"></i>\n        </div>\n    </div>\n    <div class='navigation_content'>\n        <explorer [items]='items' [showHeader]='false'></explorer>\n    </div>\n</ng-container>\n<ng-template #tree>\n    <ul class='tree'>\n        <li *ngFor='let resource of items; trackBy:trackByFn'>\n            <div *ngIf='resource.renaming; else notEditing' class='tree__item editing'>\n                <span>\n                    <i class=\"{{resource.icon}}\"></i>&nbsp;\n                    <input autofocus\n                           type='text' \n                           placeholder='Press Enter to create ESC to cancel...' \n                           [(ngModel)]='newName' \n                           (keydown)='didEditingChanged(resource, $event)' \n                           (blur)='didEditingChanged(resource, $event)'/>\n                </span>\n            </div>    \n            <ng-template #notEditing>\n                <div id='{{resource.path}}' class='tree__item' [ngClass]='{selected: isSelection(resource), changed: resource.changed, opened: resource.opened}' \n                draggable droppable [dragCondition]='draggable(resource)' [dropCondition]='droppable(resource)' (handleDrop)='didDropData($event)'\n                    (click)='didTapOnResource(resource, $event)'>\n                    <span class='tree__item-label'>\n                        <i class=\"{{icon(resource)}}\"></i>&nbsp;\n                        <span>{{resource.name}}</span>\n                    </span>\n                    <span class='tree__item-option-group'>\n                        <ng-container *ngFor='let option of options'>\n                            <span class='tree__item-option' *ngIf='option.enabled(resource)' matTooltip='{{option.label}}' (click)='option.action(resource, $event)'>\n                                <i class=\"{{option.icon}}\"></i>&nbsp;\n                            </span>\n                        </ng-container>\n                    </span>\n                    <div class='overlay'></div>\n                </div>\n            </ng-template>\n            <ul class='tree' *ngIf='creating && newResource.parent === resource.path'>\n                <li>\n                    <div class='tree__item editing'>\n                        <span>\n                            <i class=\"{{newResource.icon}}\"></i>&nbsp;\n                            <input autofocus\n                                    type='text' \n                                    placeholder='Press Enter to create ESC to cancel...' \n                                    [(ngModel)]='newResource.name' \n                                    (keydown)='didEditingChanged(newResource, $event)' \n                                    (blur)='didEditingChanged(newResource, $event)'/>\n                        </span>\n                    </div>\n                </li>\n            </ul>\n            <explorer *ngIf='resource.expanded' [items]=\"resource.children\" [showHeader]='false'></explorer>\n        </li>\n    </ul>        \n</ng-template>\n"

/***/ }),

/***/ "./src/app/editor/navigation/explorer/explorer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/editor/navigation/explorer/explorer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation_content {\n  height: calc(100% - 36px);\n  overflow: auto; }\n\n.tree {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: hidden; }\n\n.tree li {\n    padding-left: 16px;\n    overflow: hidden; }\n\n.tree .tree__item {\n    position: relative;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    overflow: hidden; }\n\n.tree .tree__item.opened {\n      border-right: 4px dashed black; }\n\n.tree .tree__item.opened.changed {\n        border-right: 4px dashed red; }\n\n.tree .tree__item:hover .overlay, .tree .tree__item.selected .overlay {\n      display: block;\n      background: rgba(66, 66, 66, 0.1); }\n\n.tree .tree__item:hover .tree__item-option-group {\n      visibility: visible; }\n\n.tree .tree__item.editing span {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      margin-right: 4px; }\n\n.tree .tree__item .tree__item-option-group {\n      visibility: hidden;\n      font-size: 14px;\n      margin-right: 4px; }\n\n.tree .tree__item .tree__item-option-group .tree__item-option {\n        cursor: pointer; }\n\n.tree .tree__item .tree__item-label {\n      display: inline-flex;\n      align-items: center;\n      min-width: 100px; }\n\n.tree .tree__item .overlay {\n      display: none;\n      pointer-events: none;\n      position: absolute;\n      left: auto !important;\n      right: 0;\n      top: 0;\n      width: 100vw;\n      height: 100%; }\n\n.tree input {\n    width: 90%;\n    margin: 4px 8px;\n    padding: 0.1rem 0.3rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.15rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n.tree input:focus {\n      color: #495057;\n      background-color: #fff;\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.tab-bar {\n  font-size: 1rem;\n  padding: 0 0 0 16px; }\n\n.dnd-drag {\n  opacity: 0.5; }\n\n.dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1Ysc0JBQXFCO0VBQ3JCLGlCQUFnQixFQTZGbkI7O0FBakdEO0lBTVEsbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNuQjs7QUFSTDtJQVdRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osY0FBYTtJQUNiLG9CQUFtQjtJQUNuQiwrQkFBOEI7SUFDOUIsZ0JBQWU7SUFDZixpQkFBZ0IsRUEwRG5COztBQTNFTDtNQW9CWSwrQkFBOEIsRUFJakM7O0FBeEJUO1FBc0JnQiw2QkFBNEIsRUFDL0I7O0FBdkJiO01BNEJnQixlQUFjO01BQ2Qsa0NBQThCLEVBQ2pDOztBQTlCYjtNQW1DZ0Isb0JBQW1CLEVBQ3RCOztBQXBDYjtNQTBDZ0IsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQixZQUFXO01BQ1gsa0JBQWlCLEVBQ3BCOztBQTlDYjtNQWtEWSxtQkFBa0I7TUFDbEIsZ0JBQWU7TUFDZixrQkFBaUIsRUFJcEI7O0FBeERUO1FBc0RnQixnQkFBZSxFQUNsQjs7QUF2RGI7TUEyRFkscUJBQW9CO01BQ3BCLG9CQUFtQjtNQUNuQixpQkFBZ0IsRUFDbkI7O0FBOURUO01BaUVZLGNBQWE7TUFDYixxQkFBb0I7TUFDcEIsbUJBQWtCO01BQ2xCLHNCQUFxQjtNQUNyQixTQUFRO01BQ1IsT0FBTTtNQUNOLGFBQVk7TUFDWixhQUFZLEVBQ2Y7O0FBekVUO0lBOEVRLFdBQVU7SUFDVixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2QsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1QiwwQkFBeUI7SUFDekIsdUJBQXNCO0lBQ3RCLHlFQUF3RSxFQVEzRTs7QUFoR0w7TUEwRlksZUFBYztNQUNkLHVCQUFzQjtNQUN0QixzQkFBcUI7TUFDckIsV0FBVTtNQUNWLGlEQUFnRCxFQUNuRDs7QUFJVDtFQUNJLGdCQUFlO0VBQ2Ysb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksdUNBQXNDO0VBQ3RDLGtDQUE4QixFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb25fY29udGVudCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTsgLy8gcmVtb3ZlIHRhYi1iYXIgaGVpZ2h0XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50cmVlIHsgXG4gICAgbWFyZ2luOiAwOyBcbiAgICBwYWRkaW5nOiAwOyBcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbGkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7IFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC50cmVlX19pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgICAgICYub3BlbmVkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNHB4IGRhc2hlZCBibGFjaztcbiAgICAgICAgICAgICYuY2hhbmdlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggZGFzaGVkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAudHJlZV9faXRlbS1vcHRpb24tZ3JvdXAge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5lZGl0aW5nIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3BhbiAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHJlZV9faXRlbS1vcHRpb24tZ3JvdXAge1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIC50cmVlX19pdGVtLW9wdGlvbiB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC50cmVlX19pdGVtLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLm92ZXJsYXkgeyBcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7IFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogNHB4IDhweDtcbiAgICAgICAgcGFkZGluZzogMC4xcmVtIDAuM3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH0gICBcbn1cblxuLnRhYi1iYXIgeyBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMCAwIDAgMTZweDtcbn1cblxuLmRuZC1kcmFnIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kbmQtb3ZlciB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMnB4ICNDQ0M7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2Niw2Niw2NiwwLjEpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/navigation/explorer/explorer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/editor/navigation/explorer/explorer.component.ts ***!
  \******************************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/core/task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _shared_services_core_pl_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/core/pl.service */ "./src/app/editor/shared/services/core/pl.service.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");











var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(pl, task, editor, opener, notification, resources) {
        this.pl = pl;
        this.task = task;
        this.editor = editor;
        this.opener = opener;
        this.notification = notification;
        this.resources = resources;
        /** the dynamic options of the resources */
        this.options = [];
        var that = this;
        this.items = this.resources.resources;
        this.newName = '';
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canBeTested"], action: function (r, e) {
                    that.optionTest(r, e);
                } },
            { icon: 'fas fa-play', label: 'Load', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canBeLoaded"], action: function (r, e) {
                    that.optionLoad(r, e);
                } },
            { icon: 'fas fa-sync', label: 'Reload', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canBeReloaded"], action: function (r, e) {
                    that.optionReload(r, e);
                } },
            { icon: 'far fa-file', label: 'New File', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canAddFile"], action: function (r, e) {
                    that.optionAddFile(r, e);
                } },
            { icon: 'far fa-folder', label: 'New Folder', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canAddFile"], action: function (r, e) {
                    that.optionFolder(r, e);
                } },
            { icon: 'far fa-edit', label: 'Rename', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canBeRenamed"], action: function (r, e) {
                    that.optionRename(r, e);
                } },
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["canBeDeleted"], action: function (r, e) {
                    that.optionDelete(r, e);
                } },
            { icon: 'fas fa-lock', label: 'Read Only', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["isReadonly"], action: function () { } },
        ];
    }
    /** Handles refresh button click by retrieving resources from the server. */
    ExplorerComponent.prototype.didTapRefresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm, _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        confirm = this.resources.findPredicate(function (e) { return e.changed && e.opened; });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        _a = !confirm;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.notification.confirmAsync({
                                title: 'You will lose any unsaved changes after this. Are you sure ?',
                                okTitle: 'Refresh',
                                noTitle: 'Cancel'
                            })];
                    case 2:
                        _a = (_b.sent());
                        _b.label = 3;
                    case 3:
                        if (!_a) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.editor.closeAll()];
                    case 4:
                        if (!_b.sent()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.resources.refresh()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.notification.logError('an error occured while trying to close the editor groups');
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _b.sent();
                        this.notification.logError(error_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a value indicating whether the resource is draggrable
     * @param resource the resource object.
     * 	@returns true only if the resource is not a root folder.
     */
    ExplorerComponent.prototype.draggable = function (resource) {
        return !resource.opened && !_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["isRoot"](resource) && resource.write;
    };
    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    ExplorerComponent.prototype.droppable = function (resource) {
        return _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["isFolder"](resource) && resource.write;
    };
    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will saved the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param data the data shared using the dragNdrop move.
     */
    ExplorerComponent.prototype.didDropData = function (data) {
        var _this = this;
        var srcPath = data.src || data.file.name;
        var dstPath = data.dst;
        var srcName = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__["basename"])(srcPath);
        var src = this.resources.find(srcPath);
        var dst = this.resources.find(dstPath);
        if (src) {
            if (src.parent === data.dst) {
                return;
            }
            if (src.opened) {
                throw new Error('Cannot move an opened resource');
            }
        }
        var options = {
            title: 'Are you sure you want to move \'' + srcName + '\'?',
            okTitle: 'Move',
            noTitle: 'Cancel'
        };
        this.notification.confirmAsync(options).then(function (confirmed) {
            if (confirmed) {
                _this.resources.move(src || data.file, dst).catch(function (error) {
                    _this.notification.error(error);
                });
            }
        }).catch(function (error) {
            _this.notification.logError(error);
        });
    };
    /**
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param resource the resource object.
     * @param event KeyboardEvent or Focus event.
     */
    ExplorerComponent.prototype.didEditingChanged = function (resource, event) {
        var _this = this;
        if (this.renaming || this.creating) {
            if (event.keyCode === 27) { // escape key
                if (this.renaming) {
                    resource.renaming = this.renaming = false;
                    this.newName = '';
                }
                else {
                    this.creating = false;
                    this.newResource = undefined;
                }
            }
            else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
                var promise = void 0;
                if (this.renaming) {
                    promise = this.resources.rename(resource, this.newName);
                }
                else {
                    if (!resource.name && event.type === 'blur') {
                        this.endEdition(resource);
                        return;
                    }
                    promise = this.resources.create(resource);
                }
                promise.then(function () {
                    _this.endEdition(resource);
                }).catch(function (error) {
                    _this.endEdition(resource);
                    _this.notification.error(error);
                });
            }
        }
    };
    /**
     * Emits resource selection event.
     * @param resource the resource object.
     * @param event the mouse event.
     */
    ExplorerComponent.prototype.didTapOnResource = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        if (_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["isFolder"](resource)) {
            resource.expanded = !resource.expanded;
        }
        else {
            this.opener.open(resource.path);
        }
    };
    /**
     * Gets the font awesome class representing the resource
     *
     * @returns
     * - fas fa-folder | fas fa-folder-open If the resource is folder
     * - resource.icon otherwise.
     */
    ExplorerComponent.prototype.icon = function (resource) {
        if (_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_10__["isFolder"](resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    };
    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    ExplorerComponent.prototype.isSelection = function (resource) {
        return this.resources.isSelection(resource);
    };
    /** Used in the html template with *ngFor to keep track of the resource */
    ExplorerComponent.prototype.trackByFn = function (_index, item) {
        return item.path;
    };
    ExplorerComponent.prototype.optionAddFile = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_8__["createResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_8__["ResourceTypes"].File);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    };
    ExplorerComponent.prototype.optionFolder = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_8__["createResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_8__["ResourceTypes"].Folder);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    };
    ExplorerComponent.prototype.optionDelete = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.notification.confirmAsync({
            title: 'Are you sure you want to delete \'' + resource.name + '\'?',
            okTitle: 'Delete',
            noTitle: 'Cancel'
        }).then(function (confirmed) {
            if (confirmed) {
                _this.resources.delete(resource).catch(function (error) {
                    _this.notification.logError(error);
                });
            }
        });
    };
    ExplorerComponent.prototype.optionLoad = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.pl.load(resource).then(function (response) {
            _this.notification.logInfo(response);
        }).catch(function (error) {
            _this.notification.logError(error);
        });
    };
    ExplorerComponent.prototype.optionReload = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var options = {
            title: 'Reload Activity',
            message: 'ID of the activity which should be reloaded with this PLTP.'
                + 'It should be the ID inside the URL used on your LTI consumer (Moodle, Blackboard, ...), '
                + 'and not the URL in your address bar after clicking on said URL.<br><br>'
                + '<strong>Caution: The order in which PL are included should stay the same, '
                + 'as well as the total number of PL. May not work if the PLTP used to reload activity '
                + 'is too different than the original one',
            fields: [
                { type: 'number', placeholder: 'Activity ID', required: true, value: 0 }
            ]
        };
        this.notification.promptAsync(options).then(function (data) {
            if (data.fields) {
                _this.pl.reload(resource, data.fields[0].value).then((function (response) {
                    _this.notification.logInfo(response);
                })).catch(function (error) {
                    _this.notification.logError(error);
                });
            }
        });
    };
    ExplorerComponent.prototype.optionRename = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.newName = resource.name;
        resource.renaming = this.renaming = true;
        resource.creating = this.creating = false;
    };
    ExplorerComponent.prototype.optionTest = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL('/filebrowser/option?name=test_pl&path=' + resource.path);
    };
    ExplorerComponent.prototype.endEdition = function (resource) {
        this.creating = this.renaming = resource.renaming = resource.creating = false;
        this.newName = '';
        this.newResource = undefined;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExplorerComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExplorerComponent.prototype, "showHeader", void 0);
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/editor/navigation/explorer/explorer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./explorer.component.scss */ "./src/app/editor/navigation/explorer/explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_pl_service__WEBPACK_IMPORTED_MODULE_9__["PLService"],
            _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_3__["OpenerService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/git/git.component.html":
/*!**********************************************************!*\
  !*** ./src/app/editor/navigation/git/git.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"query\" *ngIf='runningTask()'></mat-progress-bar>\n<div class='navigation__content'>\n  <mat-accordion class='accordion' multi='true'>\n    <mat-expansion-panel class='repositories mat-elevation-z0' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          REPOSITORIES\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-container *ngFor=\"let repo of repositories(); trackBy trackRepo\">\n          <div class='line pointer' [ngClass]='{ selected: isSelection(repo) }' (click)='changeSelection(repo)' [matTooltip]='repo.url'> \n              <span class='line-title' [matBadgeHidden]='repo.count === 0' [matBadge]=\"repo.count\" matBadgePosition=\"after\">{{repo.name}}</span>\n              <div class='spacer'></div>\n              <span class='line-subtitle'>{{repo.branch}}</span>\n              <span [matMenuTriggerFor]=\"options\">\n                  <i class='fas fa-ellipsis-h'></i>\n              </span>\n          </div>\n          <mat-menu #options=\"matMenu\">\n              <button mat-menu-item (click)='add(repo)' matTooltip='Add to git index'>Git Add</button>\n              <button mat-menu-item (click)='push(repo)'>Git Push</button>\n              <button mat-menu-item (click)='pull(repo)'>Git Pull</button>\n              <button mat-menu-item (click)='status(repo)'>Git Status</button>\n              <button mat-menu-item (click)='checkout(repo)'>Git Checkout</button>\n          </mat-menu>\n      </ng-container>\n      <br/>\n      <button class='clone' mat-stroked-button matTooltip='Clone' (click)='clone()'>+</button>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel class='changes mat-elevation-z0' *ngIf='selection' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          CHANGES IN {{selection.name | uppercase}}\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <mat-form-field class='commit' *ngIf='selection.count > 0; else uptodate'>\n          <input matInput placeholder=\"Press enter to commit\" (keydown)='commit($event)' [(ngModel)]='commitMessage'>\n      </mat-form-field>\n        <ng-template #uptodate> <span>nothing to commit, working tree clean</span> </ng-template>\n        <ng-container *ngFor=\"let change of selection.changes; trackBy trackChange\">\n            <div class='line' [ngClass]='{clickable: canOpen(change)}' [matTooltip]=\"change.path\"> \n                <span class='line-title' [matBadge]=\"change.type\" matBadgePosition=\"after\" (click)='open(change)'>{{change.name}}</span>\n                <div class='spacer'></div>\n                <ng-container *ngIf='hasOption(change)'>\n                    <span class='pointer' [matMenuTriggerFor]=\"menu\">\n                        <i class='fas fa-ellipsis-h'></i>\n                      </span>\n                </ng-container>\n            </div>\n            <mat-menu #menu=\"matMenu\">\n              <ng-container *ngFor='let option of options'>\n                  <button *ngIf='option.enabled(change)' (click)='option.action(change)' mat-menu-item>\n                    {{option.label}}\n                  </button>\n              </ng-container>\n            </mat-menu>\n        </ng-container>\n    </mat-expansion-panel>    \n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/navigation/git/git.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/editor/navigation/git/git.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation__content {\n  height: 100%;\n  overflow: auto; }\n\n.mat-accordion .mat-expansion-panel {\n  background-color: transparent; }\n\n.line {\n  display: flex;\n  height: 32px;\n  align-items: center;\n  padding-right: 8px;\n  overflow: visible; }\n\n.line.selected {\n    border-right: 1px solid; }\n\n.line.clickable .line-title {\n    cursor: pointer; }\n\n.line-title {\n  font-size: 1em;\n  margin-right: 8px; }\n\n.line-title .mat-badge-content {\n    right: -24px;\n    top: 0; }\n\n.line-subtitle {\n  margin-right: 8px; }\n\n.commit, .clone {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vZ2l0L2dpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQVFwQjs7QUFiRDtJQVFRLHdCQUF1QixFQUMxQjs7QUFUTDtJQVdRLGdCQUFlLEVBQ2xCOztBQUdMO0VBQ0ksZUFBYztFQUNkLGtCQUFpQixFQUtwQjs7QUFQRDtJQUlRLGFBQVk7SUFDWixPQUFNLEVBQ1Q7O0FBR0w7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9naXQvZ2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb25fX2NvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubGluZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG4gICAgfVxuICAgICYuY2xpY2thYmxlIC5saW5lLXRpdGxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmxpbmUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtMjRweDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbn1cblxuLmxpbmUtc3VidGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uY29tbWl0LCAuY2xvbmUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/editor/navigation/git/git.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editor/navigation/git/git.component.ts ***!
  \********************************************************/
/*! exports provided: GitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitComponent", function() { return GitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");







var GitComponent = /** @class */ (function () {
    function GitComponent(git, opener, editor, resources, notification) {
        this.git = git;
        this.opener = opener;
        this.editor = editor;
        this.resources = resources;
        this.notification = notification;
        /** changes options */
        this.options = [];
        /** value of commit input form */
        this.commitMessage = '';
    }
    GitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options.push({ label: 'Open File', enabled: function (item) { return _this.canOpen(item); }, action: function (item) {
                _this.open(item);
            } });
        this.options.push({ label: 'Git Add', enabled: function (item) { return _this.canAdd(item); }, action: function (item) {
                _this.add(item);
            } });
        this.options.push({ label: 'Git Checkout', enabled: function (item) { return _this.canCheckout(item); }, action: function (item) {
                _this.checkout(item);
            } });
    };
    GitComponent.prototype.ngOnDestroy = function () {
    };
    /** used inside the html template to checks if a repo is selected */
    GitComponent.prototype.isSelection = function (item) {
        return this.selection && this.selection.url === item.url;
    };
    /**
     * changes the selected repository.
     * @param item the new seleted repository.
     */
    GitComponent.prototype.changeSelection = function (item) {
        this.selection = item;
    };
    /** used inside html template with *ngFor to keep track of the repository item */
    GitComponent.prototype.trackRepo = function (_index, item) {
        return item.url;
    };
    /** used inside html template with *ngFor to keep track of the repository item */
    GitComponent.prototype.trackChange = function (_index, item) {
        return item.path;
    };
    /**
     * gets a value indicating whether git add command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    GitComponent.prototype.canAdd = function (item) {
        return item.type.includes('M') || !item.type.includes('D');
    };
    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    GitComponent.prototype.canCheckout = function (item) {
        return item.type !== '??' && !item.type.includes('D');
    };
    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    GitComponent.prototype.canOpen = function (item) {
        return !item.isdir && !item.type.includes('D');
    };
    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    GitComponent.prototype.open = function (item) {
        if (this.canOpen(item)) {
            this.opener.open(item.path, {
                diffMode: true
            });
        }
    };
    /**
     * executes git add command on the given repository item.
     *	@param item the repository item.
     */
    GitComponent.prototype.add = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.git.add(item)];
                    case 1:
                        if (_a.sent()) {
                            this.refresh();
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                }
            });
        });
    };
    /**
     * executes git push command on the given repository item
     *	@param item the repository item.
     */
    GitComponent.prototype.push = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.git.push(item)];
            });
        });
    };
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    GitComponent.prototype.pull = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirmed, success, refreshed, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notification.confirmAsync({
                            title: 'Please confirm your action',
                            message: 'This action will pull the latest changes from the remote server and close the opened editors!',
                            okTitle: 'Pull',
                            noTitle: 'Cancel'
                        })];
                    case 1:
                        confirmed = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 9, , 10]);
                        if (!confirmed) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.git.pull(item)];
                    case 3:
                        success = _a.sent();
                        if (!success) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.editor.closeAll()];
                    case 4:
                        if (!_a.sent()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.resources.refresh()];
                    case 5:
                        refreshed = _a.sent();
                        if (refreshed) {
                            this.refresh();
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/, false];
                    case 7: return [2 /*return*/, false];
                    case 8: return [2 /*return*/, false];
                    case 9:
                        error_1 = _a.sent();
                        this.notification.logError(error_1);
                        return [2 /*return*/, false];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    GitComponent.prototype.status = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.git.status(item)];
            });
        });
    };
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    GitComponent.prototype.checkout = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirmed, success, refreshed, resource, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.notification.confirmAsync({
                            title: 'Please confirm your action',
                            message: 'This action will reset all your local changes up to your last commit and close the opened editors!',
                            okTitle: 'Checkout',
                            noTitle: 'Cancel'
                        })];
                    case 1:
                        confirmed = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 11, , 12]);
                        if (!confirmed) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.git.checkout(item)];
                    case 3:
                        success = _a.sent();
                        if (!success) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.editor.closeAll()];
                    case 4:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.resources.refresh()];
                    case 5:
                        refreshed = _a.sent();
                        if (!refreshed) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.resources.find(item.path)];
                    case 6:
                        resource = _a.sent();
                        if (resource) {
                            this.opener.open(resource.path, {
                                diffMode: true
                            });
                        }
                        this.refresh();
                        return [2 /*return*/, true];
                    case 7: return [2 /*return*/, false];
                    case 8: return [2 /*return*/, false];
                    case 9: return [2 /*return*/, false];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_2 = _a.sent();
                        this.notification.logError(error_2);
                        return [2 /*return*/, false];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * executes git clone command.
     * - if the command succeed, the resources of the editor will be refreshed.
     */
    GitComponent.prototype.clone = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fields, options, response, confirmOptions, url, username, password, success, _a, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fields = [
                            { type: 'url', placeholder: 'Url', required: true, value: '' },
                            { type: 'text', placeholder: 'Username', required: false, value: '' },
                            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
                        ];
                        options = {
                            title: 'Clone repository',
                            fields: fields
                        };
                        return [4 /*yield*/, this.notification.promptAsync(options)];
                    case 1:
                        response = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 11, , 12]);
                        if (!response) return [3 /*break*/, 10];
                        if (!this.resources.changed()) return [3 /*break*/, 4];
                        confirmOptions = {
                            title: 'Please confirm your action',
                            message: 'This action will create new directory and close the opened editors!',
                            okTitle: 'Clone',
                            noTitle: 'Cancel'
                        };
                        return [4 /*yield*/, this.notification.confirmAsync(confirmOptions)];
                    case 3:
                        if (!(_b.sent())) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 4;
                    case 4:
                        url = response.fields[0].value;
                        username = response.fields[1].value;
                        password = response.fields[2].value;
                        return [4 /*yield*/, this.git.clone(this.resources.resources[0], url, username, password)];
                    case 5:
                        success = _b.sent();
                        if (!success) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.editor.closeAll()];
                    case 6:
                        _a = (_b.sent());
                        if (!_a) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.resources.refresh()];
                    case 7:
                        _a = (_b.sent());
                        _b.label = 8;
                    case 8:
                        if (_a) {
                            this.refresh();
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 9: return [2 /*return*/, false];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_3 = _b.sent();
                        this.notification.logError(error_3);
                        return [2 /*return*/, false];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * executes git commit command on the selected repository with the
     * value of commit message input form if enter key is pressed.
     *	@param event the keyboard event of the input.
     */
    GitComponent.prototype.commit = function (event) {
        var _this = this;
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            if (this.commitMessage) {
                this.git.commit(this.selection, this.commitMessage).then(function (success) {
                    if (success) {
                        _this.commitMessage = '';
                        _this.selection.changes = _this.selection.changes.filter(function (e) { return e.type !== 'M'; });
                    }
                });
            }
            else {
                this.notification.error('commit message is required');
            }
        }
    };
    /**
     * gets the repositories
     * */
    GitComponent.prototype.repositories = function () {
        return this.git.repos;
    };
    /**
     * gets a value indicating whether a git command is running
     * */
    GitComponent.prototype.runningTask = function () {
        return this.git.runningTask;
    };
    GitComponent.prototype.hasOption = function (item) {
        return this.options.some(function (option) { return option.enabled(item); });
    };
    GitComponent.prototype.refresh = function () {
        var _this = this;
        if (this.selection) {
            this.selection = this.repositories().find(function (item) {
                return item.url === _this.selection.url;
            }) || this.repositories().find(function (_) { return true; });
        }
    };
    GitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'git',
            template: __webpack_require__(/*! ./git.component.html */ "./src/app/editor/navigation/git/git.component.html"),
            styles: [__webpack_require__(/*! ./git.component.scss */ "./src/app/editor/navigation/git/git.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_5__["OpenerService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], GitComponent);
    return GitComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/editor/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class='navigation-icon' src='static/filebrowser/app/assets/icons/explorer.svg' matTooltip=\"Explorer\" (click)='didTapButton(0)'/>\n<img class='navigation-icon' src='static/filebrowser/app/assets/icons/search.svg' matTooltip=\"Search\" (click)='didTapButton(1)'/>\n<div [matBadge]=\"gitBadge()\" matTooltip=\"Git\">\n    <img class='navigation-icon' src='static/filebrowser/app/assets/icons/git.svg' (click)='didTapButton(2)'/>\n</div>\n<div [matBadge]=\"consoleBadge()\" matTooltip=\"Console\">\n    <div class='navigation-icon'(click)='didTapButton(3)'>\n        <i class='fas fa-info'></i>\n    </div>\n</div>\n<div class='spacer'></div>\n<!-- <img class='navigation-icon' src='static/filebrowser/app/assets/icons/settings.svg'  matTooltip=\"Settings\" (click)='didTapButton(4)'/>\n -->"

/***/ }),

/***/ "./src/app/editor/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/editor/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 50px;\n  background: #333333;\n  align-items: center;\n  padding: 8px 0; }\n  :host .navigation-icon {\n    width: 36px;\n    height: 36px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    overflow: visible; }\n  :host .fas {\n    width: 36px;\n    height: 36px;\n    color: white;\n    font-size: 36px;\n    text-align: center; }\n  :host .mat-badge-content {\n    z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsZUFBYyxFQXFCakI7RUEzQkQ7SUFTUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixnQkFBZTtJQUNmLGtCQUFpQixFQUNwQjtFQWRMO0lBaUJRLFlBQVc7SUFDWCxhQUFZO0lBQ1osYUFBWTtJQUNaLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCO0VBdEJMO0lBeUJRLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBcbiAgICAubmF2aWdhdGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAuZmFzIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubWF0LWJhZGdlLWNvbnRlbnQgIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/editor/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/editor/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(git, resources, notification) {
        this.git = git;
        this.resources = resources;
        this.notification = notification;
        this.size = 25;
        this.index = 0;
    }
    NavigationComponent.prototype.didTapButton = function (index) {
        switch (index) {
            case 3:
                this.notification.onToggleDebuggingArea.next();
                break;
            default:
                if (index === this.index) {
                    this.size = this.size === 25 ? 0 : 25;
                }
                this.index = index;
                break;
        }
    };
    NavigationComponent.prototype.gitBadge = function () {
        return this.git.size;
    };
    NavigationComponent.prototype.consoleBadge = function () {
        return this.notification.size;
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/editor/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/editor/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <div class='tab-bar border-bottom'>\n        <span>SEARCH</span>\n        <div class=\"spacer\"></div>\n    </div>\n    <mat-form-field class='search'>\n        <input autoFocus matInput placeholder=\"Press Enter to search\" (keydown)='search($event)' [(ngModel)]='searchValue'>\n    </mat-form-field>\n    <div class=\"navigation_content\">\n        <ng-container>\n            <span class='result'>{{size}} result(s)</span>\n        </ng-container>       \n        <explorer [items]='entries'></explorer>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation_content {\n  padding: 0 8px;\n  height: calc(100% - 36px); }\n\n.search {\n  width: 90%;\n  margin: 0 16px; }\n\n.result {\n  padding: 0 16px;\n  font-size: 1.1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbl9jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xufVxuXG4uc2VhcmNoIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCAxNnB4O1xufVxuLnJlc3VsdCB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMS4xO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(editor) {
        this.editor = editor;
        this.items = [];
        this.entries = [];
        this.searchValue = '';
        this.size = 0;
        this.empty = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (event) {
        var _this = this;
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this.runningTask = true;
            this.searchValue = this.searchValue.trim().toLocaleLowerCase();
            if (this.searchValue) {
                this.entries = this.editor.findAll((function (e) {
                    return e.type === _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].File && e.path.toLocaleLowerCase().includes(_this.searchValue);
                }));
                this.size = this.entries.length;
                this.empty = this.size === 0;
            }
            this.runningTask = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchComponent.prototype, "items", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/editor/navigation/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/editor/navigation/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/settings/settings.component.html":
/*!********************************************************************!*\
  !*** ./src/app/editor/navigation/settings/settings.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/editor/navigation/settings/settings.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/editor/navigation/settings/settings.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/editor/navigation/settings/settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/editor/navigation/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/editor/navigation/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/editor/navigation/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/editor/shared/models/editor-group.model.ts":
/*!************************************************************!*\
  !*** ./src/app/editor/shared/models/editor-group.model.ts ***!
  \************************************************************/
/*! exports provided: EditorGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorGroup", function() { return EditorGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.model */ "./src/app/editor/shared/models/editor.model.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");



var EditorGroup = /** @class */ (function () {
    function EditorGroup(editorService) {
        this.editors = [];
        this.resources = [];
        this._actions = [];
        this._id = ++EditorGroup.COUNTER;
        this._editorService = editorService;
    }
    EditorGroup.prototype.id = function () {
        return this._id;
    };
    EditorGroup.prototype.empty = function () {
        return !this.resources.some(function (_) { return true; });
    };
    EditorGroup.prototype.focus = function (focused) {
        this._focused = focused;
    };
    EditorGroup.prototype.focused = function () {
        return this._focused;
    };
    EditorGroup.prototype.hidden = function () {
        var _this = this;
        if (!this.somePreview()) {
            return false;
        }
        var groups = this._editorService.listGroups();
        return !groups.find(function (g) { return g.id() !== _this.id() && g.isActive(_this._activeResource); });
    };
    EditorGroup.prototype.isActive = function (resource) {
        return this._activeResource.path === resource.path;
    };
    EditorGroup.prototype.isChanged = function (resource) {
        return resource.changed;
    };
    EditorGroup.prototype.someResource = function (predicate) {
        return this.resources.some(predicate);
    };
    EditorGroup.prototype.someEditor = function (predicate) {
        return this.editors.some(predicate);
    };
    EditorGroup.prototype.someAction = function () {
        return !this.empty() && !this.somePreview();
    };
    EditorGroup.prototype.somePreview = function () {
        return this.someEditor(function (e) { return e.type() === _editor_model__WEBPACK_IMPORTED_MODULE_1__["EditorTypes"].Preview; });
    };
    EditorGroup.prototype.open = function (resource, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var editor;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = this.editors.find(function (e) { return e.canOpen(resource); }) || this.createEditor(resource);
                        if (!editor) {
                            throw new Error('The is no registered editor to open \'' + resource.path + '\'');
                        }
                        resource.opened = true;
                        this._actions = editor.actions() || [];
                        this._activeEditor = editor;
                        this._activeResource = resource;
                        this._activeEditor.open(resource, options);
                        if (resource.meta.previewData) {
                            if (this.resources.length === 0) {
                                this.resources.push(resource);
                            }
                            else {
                                this.resources[0] = resource;
                            }
                        }
                        else if (!this.someResource(function (e) { return e.path === resource.path; })) {
                            this.resources.push(resource);
                        }
                        return [4 /*yield*/, this._editorService.updateGroup(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditorGroup.prototype.openSide = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._editorService.open(resource, {
                        openToSide: true
                    })];
            });
        });
    };
    EditorGroup.prototype.save = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._editorService.saveContent(resource)];
            });
        });
    };
    EditorGroup.prototype.saveAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, resource;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.resources;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        resource = _a[_i];
                        return [4 /*yield*/, this.save(resource)];
                    case 2:
                        if (!(_b.sent())) {
                            return [2 /*return*/, false];
                        }
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    EditorGroup.prototype.close = function (resource, confirm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changed, options, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        changed = this.closeGuard(resource);
                        options = {
                            title: 'Do you want to close \'' + resource.name + '\'?',
                            message: 'Your changes will be lost if you don\'t save them.',
                            okTitle: 'Don\'t Save',
                            noTitle: 'Cancel'
                        };
                        _a = !(confirm && changed);
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.confirm(options)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        if (changed) {
                            resource.content = resource.savedContent;
                            resource.changed = false;
                        }
                        if (confirm) {
                            resource.meta.previewData = undefined;
                        }
                        return [4 /*yield*/, this.removeDocument(resource)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    EditorGroup.prototype.closeAll = function (confirm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changed, options, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        changed = this.someResource(function (tab) { return _this.closeGuard(tab); });
                        options = {
                            title: 'Do you want to close the files ?',
                            message: 'Your changes will be lost if you don\'t save them.',
                            okTitle: 'Don\'t Save',
                            noTitle: 'Cancel'
                        };
                        _a = !(confirm && changed);
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.confirm(options)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 5];
                        _b.label = 3;
                    case 3:
                        if (!(this.resources.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.close(this.resources[0], false)];
                    case 4:
                        if (!(_b.sent())) {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 5: return [2 /*return*/, true];
                }
            });
        });
    };
    EditorGroup.prototype.closeSaved = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.someResource(function (e) { return !e.changed; })) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.resources.length)) return [3 /*break*/, 4];
                        if (!!this.resources[i].changed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.close(this.resources[i])];
                    case 2:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 0];
                    case 5: return [2 /*return*/, true];
                }
            });
        });
    };
    EditorGroup.prototype.removeDocument = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.resources.findIndex(function (e) { return e.path === resource.path; });
                        if (index === -1) {
                            throw new Error(resource.name + " is not a part of the group '" + this.id() + "'");
                        }
                        this._activeResource = null;
                        this.resources.splice(index, 1);
                        resource.opened = this._editorService.findGroups(resource).length > 0;
                        index = Math.max(0, index - 1);
                        if (index < this.resources.length) {
                            this._activeResource = this.resources[index];
                        }
                        if (this._activeResource) {
                            this.open(this._activeResource);
                        }
                        if (!this.empty()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dispose()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    EditorGroup.prototype.removeIndex = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.removeDocument(this.resources[index])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditorGroup.prototype.findDocument = function (predicate) {
        return this.resources.find(function (e) { return predicate(e); });
    };
    EditorGroup.prototype.findDocumentAt = function (index) {
        return this.resources[index];
    };
    EditorGroup.prototype.actions = function () {
        return this._actions || (this._actions = []);
    };
    EditorGroup.prototype.dispose = function () {
        return this._editorService.removeGroup(this);
    };
    EditorGroup.prototype.activeResource = function () {
        return this._activeResource;
    };
    EditorGroup.prototype.activeEditor = function () {
        return this._activeEditor;
    };
    EditorGroup.prototype.activeEditorIs = function (type) {
        return this.activeEditor().type() === type;
    };
    EditorGroup.prototype.editorService = function () {
        return this._editorService;
    };
    //#region USED INSIDE THE WORKSPACE TEMPLATE
    EditorGroup.prototype.didTapOnResource = function (resource) {
        if (this.somePreview()) { // skip click from html template for preview editors
            return true;
        }
        if (this._activeResource.path === resource.path) {
            return true;
        }
        this.open(resource);
    };
    EditorGroup.prototype.drop = function (event) {
        var source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        var target = this;
        if (this.somePreview() || source.somePreview()) {
            return;
        }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            var movedTab = source.findDocumentAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    };
    EditorGroup.prototype.trackResource = function (index, resource) {
        return resource.path;
    };
    EditorGroup.prototype.trackEditor = function (index, editor) {
        return editor.id();
    };
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE
    EditorGroup.prototype.createEditor = function (resource) {
        for (var _i = 0, INSTANTIATORS_1 = _editor_model__WEBPACK_IMPORTED_MODULE_1__["INSTANTIATORS"]; _i < INSTANTIATORS_1.length; _i++) {
            var item = INSTANTIATORS_1[_i];
            if (item.condition(resource)) {
                var editor = item.create(this, resource);
                this.editors.push(editor);
                return editor;
            }
        }
        return null;
    };
    EditorGroup.prototype.closeGuard = function (resource) {
        if (this.somePreview()) {
            return false;
        }
        return resource.changed && this._editorService.findGroups(resource).length === 1;
    };
    EditorGroup.prototype.confirm = function (options) {
        return this._editorService.confirm(options);
    };
    EditorGroup.COUNTER = 0;
    return EditorGroup;
}());



/***/ }),

/***/ "./src/app/editor/shared/models/editor.model.ts":
/*!******************************************************!*\
  !*** ./src/app/editor/shared/models/editor.model.ts ***!
  \******************************************************/
/*! exports provided: EditorTypes, AbstractEditor, CodeEditor, ImageEditor, PreviewEditor, openAsCode, openAsImage, openAsPreview, INSTANTIATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorTypes", function() { return EditorTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditor", function() { return CodeEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditor", function() { return ImageEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewEditor", function() { return PreviewEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsCode", function() { return openAsCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsImage", function() { return openAsImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsPreview", function() { return openAsPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTANTIATORS", function() { return INSTANTIATORS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _filters_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.model */ "./src/app/editor/shared/models/filters.model.ts");
// tslint:disable: max-line-length



var EditorTypes;
(function (EditorTypes) {
    EditorTypes["Code"] = "code";
    EditorTypes["Preview"] = "preview";
    EditorTypes["Image"] = "image";
})(EditorTypes || (EditorTypes = {}));
var AbstractEditor = /** @class */ (function () {
    function AbstractEditor(group, resource) {
        this.onOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._id = ++AbstractEditor.ID_COUNTER;
        this._resource = resource;
        this._group = group;
    }
    AbstractEditor.prototype.id = function () {
        return this._id;
    };
    AbstractEditor.prototype.group = function () {
        return this._group;
    };
    AbstractEditor.prototype.focus = function (focused) {
        this._focused = focused;
    };
    AbstractEditor.prototype.open = function (resource, options) {
        this._resource = resource;
        this.onOpened.next(resource);
    };
    AbstractEditor.prototype.hasFocus = function () {
        return this._focused;
    };
    AbstractEditor.prototype.resource = function () {
        return this._resource;
    };
    AbstractEditor.ID_COUNTER = 0;
    return AbstractEditor;
}());

var CodeEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CodeEditor, _super);
    function CodeEditor(group, resource) {
        var _this = _super.call(this, group, resource) || this;
        _this.onDiffCommand = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.onPreviewCommand = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    CodeEditor.prototype.type = function () {
        return EditorTypes.Code;
    };
    CodeEditor.prototype.actions = function () {
        return [
            this.preview(),
            this.diffMode(),
            this.codeMode(),
            this.splitRight()
        ];
    };
    CodeEditor.prototype.open = function (resource, options) {
        this.diffEditing = options && options.diffMode;
        _super.prototype.open.call(this, resource, options);
    };
    CodeEditor.prototype.split = function () {
        this.group().editorService().open(this.resource(), {
            openToSide: true
        });
    };
    CodeEditor.prototype.canOpen = function (resource) {
        return openAsCode(resource);
    };
    CodeEditor.prototype.preview = function () {
        var _this = this;
        return {
            icon: 'fas fa-play', tooltip: 'Preview ⌘Enter', condition: _filters_model__WEBPACK_IMPORTED_MODULE_2__["canBePreviewed"], invoke: function (item) { return _this.onPreviewCommand.next(item); }
        };
    };
    CodeEditor.prototype.diffMode = function () {
        var that = this;
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: function (item) { return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["isRepo"])(item) && !that.diffEditing; }, invoke: function (_) {
                that.diffEditing = true;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    };
    CodeEditor.prototype.codeMode = function () {
        var that = this;
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: function (item) { return that.diffEditing; }, invoke: function (_) {
                that.diffEditing = false;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    };
    CodeEditor.prototype.splitRight = function () {
        var that = this;
        return {
            icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: function () { return true; }, invoke: function (_) {
                that.split();
            }
        };
    };
    return CodeEditor;
}(AbstractEditor));

var ImageEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageEditor, _super);
    function ImageEditor(group, resource) {
        var _this = _super.call(this, group, resource) || this;
        _this.zoom = 0.7;
        return _this;
    }
    ImageEditor.prototype.type = function () {
        return EditorTypes.Image;
    };
    ImageEditor.prototype.actions = function () {
        var _this = this;
        return [
            {
                icon: 'fas fa-plus', tooltip: 'Zoom In', condition: function (item) { return true; }, invoke: function (item) {
                    _this.zoomIn();
                }
            },
            {
                icon: 'fas fa-minus', tooltip: 'Zoom Out', condition: function (item) { return true; }, invoke: function (item) {
                    _this.zoomOut();
                }
            }
        ];
    };
    ImageEditor.prototype.canOpen = function (resource) {
        return openAsImage(resource);
    };
    ImageEditor.prototype.zoomIn = function () {
        this.zoom = Math.min(this.zoom + .05, 1);
    };
    ImageEditor.prototype.zoomOut = function () {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    };
    return ImageEditor;
}(AbstractEditor));

var PreviewEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreviewEditor, _super);
    function PreviewEditor(group, document) {
        return _super.call(this, group, document) || this;
    }
    PreviewEditor.prototype.type = function () {
        return EditorTypes.Preview;
    };
    PreviewEditor.prototype.actions = function () {
        return [
            {
                icon: 'fas fa-refresh', tooltip: 'Refresh', condition: function (item) { return true; }, invoke: function (item) {
                }
            }
        ];
    };
    PreviewEditor.prototype.canOpen = function (resource) {
        return openAsPreview(resource);
    };
    return PreviewEditor;
}(AbstractEditor));

function openAsCode(resource) {
    return !openAsImage(resource);
}
function openAsImage(resource) {
    return !openAsPreview(resource) && resource.meta && resource.meta.image && !Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["isSVG"])(resource);
}
function openAsPreview(resource) {
    return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["isFromServer"])(resource) && resource.meta && resource.meta.previewData !== undefined;
}
var INSTANTIATORS = [
    { condition: openAsImage, create: function (group, r) { return new ImageEditor(group, r); } },
    { condition: openAsPreview, create: function (group, r) { return new PreviewEditor(group, r); } },
    { condition: openAsCode, create: function (group, r) { return new CodeEditor(group, r); } }
];


/***/ }),

/***/ "./src/app/editor/shared/models/filters.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shared/models/filters.model.ts ***!
  \*******************************************************/
/*! exports provided: canRead, canWrite, isReadonly, isRepo, isFromServer, isLoaded, isHome, isLib, isRoot, isNotRoot, isFolder, isFile, isPl, isSVG, isPltp, isMarkdown, canBePreviewed, canAddFile, canCopy, canAddFolder, canBeRenamed, canBeDeleted, canBeTested, canBeLoaded, canBeReloaded, compareGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canRead", function() { return canRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canWrite", function() { return canWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRepo", function() { return isRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFromServer", function() { return isFromServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoaded", function() { return isLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLib", function() { return isLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return isRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotRoot", function() { return isNotRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFolder", function() { return isFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPl", function() { return isPl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPltp", function() { return isPltp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkdown", function() { return isMarkdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBePreviewed", function() { return canBePreviewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFile", function() { return canAddFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCopy", function() { return canCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFolder", function() { return canAddFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeRenamed", function() { return canBeRenamed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeDeleted", function() { return canBeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeTested", function() { return canBeTested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeLoaded", function() { return canBeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeReloaded", function() { return canBeReloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareGroup", function() { return compareGroup; });
/* harmony import */ var _resource_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");


var PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];
function canRead(item) {
    return !!item && item.read;
}
function canWrite(item) {
    return !!item && item.write;
}
function isReadonly(item) {
    return !canWrite(item);
}
function isRepo(item) {
    return !!item && !!item.repo;
}
function isFromServer(item) {
    return !!item && item.type !== _resource_model__WEBPACK_IMPORTED_MODULE_0__["ResourceTypes"].Local;
}
function isLoaded(item) {
    return !!item && !!item.meta;
}
function isHome(item) {
    return !item && item.path === 'Yggdrasil';
}
function isLib(item) {
    return !!item && item.path === 'lib';
}
function isRoot(item) {
    return isHome(item) || isLib(item);
}
function isNotRoot(item) {
    return !isRoot(item);
}
function isFolder(item) {
    return !!item && item.type === _resource_model__WEBPACK_IMPORTED_MODULE_0__["ResourceTypes"].Folder;
}
function isFile(item) {
    return !!item && item.type === _resource_model__WEBPACK_IMPORTED_MODULE_0__["ResourceTypes"].File;
}
function isPl(item) {
    return !!item && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'pl';
}
function isSVG(item) {
    return !!item && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'svg';
}
function isPltp(item) {
    return !!item && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'pltp';
}
function isMarkdown(item) {
    return !!item && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'md';
}
function canBePreviewed(item) {
    return !!item && PREVIEW_EXTENSIONS.includes(Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path));
}
function canAddFile(item) {
    return canWrite(item) && isFolder(item);
}
function canCopy(item) {
    return canRead(item) && isNotRoot(item);
}
function canAddFolder(item) {
    return canWrite(item) && isFolder(item);
}
function canBeRenamed(item) {
    return canWrite(item) && !isRoot(item);
}
function canBeDeleted(item) {
    return canWrite(item) && isNotRoot(item);
}
function canBeTested(item) {
    return canRead(item) && isPl(item);
}
function canBeLoaded(item) {
    return canWrite(item) && isPltp(item);
}
function canBeReloaded(item) {
    return canWrite(item) && isPltp(item);
}
function compareGroup(grp1, grp2) {
    return grp1.id() === grp2.id();
}


/***/ }),

/***/ "./src/app/editor/shared/models/language.model.ts":
/*!********************************************************!*\
  !*** ./src/app/editor/shared/models/language.model.ts ***!
  \********************************************************/
/*! exports provided: LANGUAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
var LANGUAGES = [
    { extension: 'css', id: 'css' },
    { extension: 'scss', id: 'scss' },
    { extension: 'cs', id: 'csharp' },
    { extension: 'js', id: 'javascript' },
    { extension: 'ts', id: 'typescript' },
    { extension: 'html', id: 'html' },
    { extension: 'md', id: 'markdown' },
    { extension: 'py', id: 'python' },
    { extension: 'r', id: 'r' },
    { extension: 'sql', id: 'sql' },
    { extension: 'mysql', id: 'mysql' },
    { extension: 'java', id: 'java' },
    { extension: 'c', id: 'cpp' },
    { extension: 'cpp', id: 'cpp' },
    { extension: 'h', id: 'cpp' },
    { extension: 'xml', id: 'xml' },
    { extension: 'yaml', id: 'yaml' },
    { extension: 'bat', id: 'bat' },
    { extension: 'ini', id: 'ini' },
    { extension: 'php', id: 'php' },
    { extension: 'pl', id: 'pl' },
    { extension: 'pltp', id: 'pl' },
    { extension: 'swift', id: 'swift' }
];


/***/ }),

/***/ "./src/app/editor/shared/models/monaco.model.ts":
/*!******************************************************!*\
  !*** ./src/app/editor/shared/models/monaco.model.ts ***!
  \******************************************************/
/*! exports provided: MONACO_LOADED, MONACO_CONFIG, onMonacoLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONACO_LOADED", function() { return MONACO_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONACO_CONFIG", function() { return MONACO_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMonacoLoad", function() { return onMonacoLoad; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/** Subject that emit first time monaco editor is loaded */
var MONACO_LOADED = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
var MONACO_CONFIG = {
    baseUrl: '/static/filebrowser/app/assets',
    defaultOptions: {
        value: '',
        theme: 'vs',
        language: '',
        renderWhitespace: 'all',
        renderControlCharacters: true,
        renderLineHighlight: true,
        renderIndentGuides: true,
        automaticLayout: true,
        lineNumbers: 'on',
        roundedSelection: true,
        scrollBeyondLastLine: false,
        scrollbar: {
            verticalScrollbarSize: 7,
            horizontalScrollbarSize: 7,
        },
        lightbulb: {
            enabled: true
        }
    },
    onMonacoLoad: onMonacoLoad
};
function onMonacoLoad() {
    MONACO_LOADED.next(window.monaco);
}


/***/ }),

/***/ "./src/app/editor/shared/models/resource.model.ts":
/*!********************************************************!*\
  !*** ./src/app/editor/shared/models/resource.model.ts ***!
  \********************************************************/
/*! exports provided: ResourceTypes, createResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTypes", function() { return ResourceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony import */ var src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");

var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes["File"] = "file";
    ResourceTypes["Folder"] = "folder";
    ResourceTypes["Local"] = "local";
})(ResourceTypes || (ResourceTypes = {}));
function createResource(parent, type) {
    Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_0__["assert"])(parent.type === 'folder', 'resource.type must be folder');
    Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_0__["assert"])(parent.children.every(function (e) { return !e.renaming; }), 'cannot edit multiple resources');
    parent.expanded = true;
    parent.children = parent.children || [];
    return {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
        icon: 'fas fa-' + type,
        write: parent.write,
        read: parent.read,
        children: [],
        content: undefined,
        savedContent: undefined,
        creating: true,
        renaming: false,
        expanded: false,
        changed: false,
        opened: false,
        dirty: false,
        repo: {
            url: parent.repo.url,
            host: parent.repo.host,
            branch: parent.repo.branch,
        },
        meta: undefined,
    };
}


/***/ }),

/***/ "./src/app/editor/shared/services/core/editor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/shared/services/core/editor.service.ts ***!
  \***************************************************************/
/*! exports provided: AbstractEditorService, EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditorService", function() { return AbstractEditorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_editor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/editor.model */ "./src/app/editor/shared/models/editor.model.ts");
/* harmony import */ var _models_editor_group_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/editor-group.model */ "./src/app/editor/shared/models/editor-group.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");








var AbstractEditorService = /** @class */ (function () {
    function AbstractEditorService() {
        this.groups = Object.create(null);
        /** invoked each time a (focus | open | close) event is raised */
        this.onGroupChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AbstractEditorService.prototype.focus = function (group) {
        this.listGroups().forEach(function (item) {
            item.focus(false);
        });
        group.focus(true);
    };
    AbstractEditorService.prototype.listGroups = function () {
        var _this = this;
        return Object.keys(this.groups).map(function (id) { return _this.groups[id]; });
    };
    AbstractEditorService.prototype.findGroup = function (id) {
        return this.groups[id];
    };
    AbstractEditorService.prototype.findGroups = function (resource) {
        return this.listGroups().filter(function (group) {
            return group.someResource(function (item) { return item.path === resource.path; });
        });
    };
    AbstractEditorService.prototype.subscribeChange = function (completion) {
        return this.onGroupChanged.subscribe(completion);
    };
    AbstractEditorService.prototype.closeAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var groups;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        groups = this.listGroups();
                        _a.label = 1;
                    case 1:
                        if (!(groups.length !== 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, groups[0].closeAll()];
                    case 2:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        groups = this.listGroups();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    AbstractEditorService.prototype.closePreview = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.previewGroup) {
                    return [2 /*return*/, Promise.resolve(true)];
                }
                return [2 /*return*/, this.previewGroup.closeAll()];
            });
        });
    };
    AbstractEditorService.prototype.updateGroup = function (group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.groups[group.id()] = group;
                        if (this.previewGroup) {
                            this.previewGroup.closeAll();
                        }
                        if (!(this.previewGroup = group.somePreview() ? group : undefined)) return [3 /*break*/, 3];
                        if (!!Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["compareGroup"])(this.previewGroup, group)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.previewGroup.closeAll()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 6];
                    case 3:
                        if (!Object(_models_editor_model__WEBPACK_IMPORTED_MODULE_2__["openAsPreview"])(group.activeResource())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.open(group.activeResource(), {
                                openToSide: true
                            })];
                    case 4:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 5;
                    case 5:
                        this.focus(group);
                        _a.label = 6;
                    case 6:
                        this.onGroupChanged.next(this.listGroups());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AbstractEditorService.prototype.removeGroup = function (group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newFocused;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.findGroup(group.id())) {
                            throw new Error("The group '" + group.id() + "' is not found");
                        }
                        if (!group.focused()) return [3 /*break*/, 2];
                        newFocused = this.listGroups().find(function (g) { return !Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["compareGroup"])(g, group); });
                        if (!newFocused) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateGroup(newFocused)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        delete this.groups[group.id()];
                        this.onGroupChanged.next(this.listGroups());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AbstractEditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbstractEditorService);
    return AbstractEditorService;
}());

/** Concretes implementation of IEditorService interface */
var EditorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditorService, _super);
    function EditorService(resources, notification) {
        var _this = _super.call(this) || this;
        _this.resources = resources;
        _this.notification = notification;
        resources.renamed.subscribe(function (_) {
            _this.listGroups().forEach(function (group) { return group.open(group.activeResource()); });
        });
        resources.deleted.subscribe(function (item) {
            _this.findGroups(item).forEach(function (group) {
                group.close(item, false);
            });
        });
        return _this;
    }
    EditorService.prototype.open = function (resource, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var group, groups;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resources.open(resource)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to open '" + resource.path + "': resource content not found"))];
                        }
                        groups = this.listGroups();
                        options = options || {};
                        if (options.openToSide) {
                            group = new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_3__["EditorGroup"](this);
                        }
                        else if (resource.meta.previewData) {
                            group = groups.find(function (g) { return g.somePreview(); }) || new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_3__["EditorGroup"](this);
                        }
                        else {
                            groups = groups.filter(function (g) { return !g.somePreview(); }); // remove preview group
                            // tslint:disable-next-line: max-line-length
                            group = groups.find(function (g) { return g.focused() && g.someResource(function (r) { return r.path === resource.path; }); }) // find focused that contains the resource
                                || groups.find(function (g) { return g.focused(); }) // find focused
                                || groups.find(function (_) { return true; }) || new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_3__["EditorGroup"](this); // find any or create new group
                        }
                        return [2 /*return*/, group.open(resource, options).catch(function (error) {
                                _this.notification.logError(error);
                                return false;
                            })];
                }
            });
        });
    };
    EditorService.prototype.confirm = function (options) {
        return this.notification.confirmAsync(options);
    };
    EditorService.prototype.saveContent = function (resource) {
        return this.resources.save(resource);
    };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])
    ], EditorService);
    return EditorService;
}(AbstractEditorService));



/***/ }),

/***/ "./src/app/editor/shared/services/core/git.service.ts":
/*!************************************************************!*\
  !*** ./src/app/editor/shared/services/core/git.service.ts ***!
  \************************************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");







var GitService = /** @class */ (function () {
    function GitService(http, notification) {
        this.http = http;
        this.notification = notification;
        /** git repositories */
        this.repos = [];
    }
    GitService.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, params, response_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        this.runningTask = true;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_changes');
                        return [4 /*yield*/, this.http.get('filebrowser/option', { params: params }).toPromise()];
                    case 2:
                        response_1 = _b.sent();
                        this.repos = [];
                        Object.keys(response_1).forEach(function (key) {
                            var data = response_1[key];
                            _this.repos.push({
                                name: Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__["basename"])(key),
                                url: key,
                                path: data.path,
                                branch: data.branch,
                                count: data.changes.length,
                                changes: data.changes
                            });
                            return false;
                        });
                        this.size = this.repos.reduce(function (p, c, _i, _a) { return p + c.count; }, 0);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.notification.logError(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.show = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, params, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_show').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        this.notification.logError(error_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, response];
                }
            });
        });
    };
    GitService.prototype.status = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, params, response, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_status').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        this.notification.logError(error_3);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.add = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, params, response, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_add').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        return [4 /*yield*/, this.refresh()];
                    case 3:
                        success = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _b.sent();
                        this.notification.logError(error_4);
                        return [3 /*break*/, 5];
                    case 5:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.checkout = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, params, response, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.runningTask = true;
                        success = false;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_checkout').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        return [4 /*yield*/, this.refresh()];
                    case 3:
                        success = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _b.sent();
                        this.notification.logError(error_5);
                        return [3 /*break*/, 5];
                    case 5:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.commit = function (item, commit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, headers, data, response, error_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(commit, 'commit');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_commit', 'path': item.path, commit: commit };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _b.sent();
                        this.notification.logError(error_6);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.push = function (item, username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, headers, data, response, error_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_push', 'path': item.path, username: username, password: password };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _b.sent();
                        this.notification.logError(error_7);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.pull = function (item, username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, headers, data, response, error_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_pull', 'path': item.path, username: username, password: password };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logResponse(item, response);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_8 = _b.sent();
                        this.notification.logError(error_8);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.clone = function (home, url, username, password, destination) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, headers, data, error_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(home, 'parent');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(url, 'url');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["assert"])(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["isHome"])(home), 'clone operation is applicable to home only');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = {
                            'name': 'git_clone',
                            'path': home.path,
                            url: url,
                            username: username,
                            password: password,
                            destination: destination
                        };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        _b.sent();
                        this.notification.logInfo(url + " cloned into the directory " + Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__["basename"])(url));
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_9 = _b.sent();
                        this.notification.logError(error_9);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.blame = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, params, headers, error_10;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_blame').set('path', item.path);
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { headers: headers, params: params }).toPromise()];
                    case 2:
                        response = (_b.sent());
                        this.runningTask = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_10 = _b.sent();
                        this.runningTask = false;
                        throw error_10;
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    GitService.prototype.logResponse = function (item, response) {
        this.notification.logInfo(item.path + ":<br/> " + response);
    };
    GitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], GitService);
    return GitService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/core/opener.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/shared/services/core/opener.service.ts ***!
  \***************************************************************/
/*! exports provided: OpenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenerService", function() { return OpenerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





/** Implementation of IOpenService interface */
var OpenerService = /** @class */ (function () {
    function OpenerService(editor, resources, notification) {
        this.editor = editor;
        this.resources = resources;
        this.notification = notification;
    }
    OpenerService.prototype.open = function (path, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!path) {
                    return [2 /*return*/, Promise.reject(new Error('parameter "path" is required'))];
                }
                path = path.trim();
                if (path.startsWith('http') || path.startsWith('mailto')) {
                    // open http or default mail application
                    this.openURL(path);
                    return [2 /*return*/, Promise.resolve(true)];
                }
                resource = this.resources.find(path);
                if (!resource) {
                    return [2 /*return*/, Promise.reject(new Error("Unable to open '" + path + "': resource not found"))];
                }
                return [2 /*return*/, this.editor.open(resource, options)];
            });
        });
    };
    OpenerService.prototype.openReference = function (base, target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource, reference, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        resource = this.resources.find(base);
                        if (!resource) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to open '" + target + "': '" + base + "' not found"))];
                        }
                        return [4 /*yield*/, this.resources.findReference(resource, target)];
                    case 1:
                        reference = _a.sent();
                        if (!reference) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to open '" + base + "': resource not found relative to '" + base + "'"))];
                        }
                        return [4 /*yield*/, this.editor.open(reference)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        this.notification.logError(error_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OpenerService.prototype.openURL = function (url, openInNewTab) {
        if (openInNewTab === void 0) { openInNewTab = true; }
        if (openInNewTab) {
            window.open(url, '_blank');
        }
        else {
            window.open(url);
        }
    };
    OpenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], OpenerService);
    return OpenerService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/core/pl.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/editor/shared/services/core/pl.service.ts ***!
  \***********************************************************/
/*! exports provided: PLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLService", function() { return PLService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.service */ "./src/app/editor/shared/services/core/task.service.ts");




var PLService = /** @class */ (function () {
    function PLService(http, task) {
        this.http = http;
        this.task = task;
    }
    PLService.prototype.load = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, params, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'load pltp');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'load_pltp').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.task.emitTaskEvent(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_1;
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    PLService.prototype.reload = function (resource, activityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, data, headers, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'reload pltp');
                        data = {
                            name: 'reload_pltp',
                            path: resource.path,
                            activity_id: activityId,
                        };
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.task.emitTaskEvent(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_2;
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    PLService.prototype.compile = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PLService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"]])
    ], PLService);
    return PLService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/core/preview.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/editor/shared/services/core/preview.service.ts ***!
  \****************************************************************/
/*! exports provided: PreviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewService", function() { return PreviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");





var PreviewService = /** @class */ (function () {
    function PreviewService(task, http) {
        this.task = task;
        this.http = http;
        this.previewProviders = {};
        this.previewProviders = {
            'pl': this.previewPL,
            'svg': this.previewSVG,
            'md': this.previewMD,
        };
    }
    /**
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<Resource> resolved with the resource
     */
    PreviewService.prototype.preview = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'preview');
                        return [4 /*yield*/, this.previewProviders[Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_4__["extname"])(resource.path)](resource, this)];
                    case 1:
                        response = _a.sent();
                        resource.meta.previewData = response.preview;
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, resource];
                    case 2:
                        error_1 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PreviewService.prototype.previewPL = function (resource, service) {
        var data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    };
    PreviewService.prototype.previewMD = function (resource, service) {
        return Promise.resolve({ preview: resource.content });
    };
    PreviewService.prototype.previewSVG = function (resource) {
        return Promise.resolve({ preview: resource.content });
    };
    PreviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PreviewService);
    return PreviewService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/core/resource.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editor/shared/services/core/resource.service.ts ***!
  \*****************************************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _git_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");










var ResourceService = /** @class */ (function () {
    function ResourceService(git, http, task) {
        this.git = git;
        this.http = http;
        this.task = task;
        this.cache = [];
        this.renamed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.created = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.deleted = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.refreshed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** the resources from the server */
        this.resources = [];
    }
    /**
     * Gets a value indicating whether the property 'changed' is sets to true for any
     * resource.
     * */
    ResourceService.prototype.changed = function () {
        return this.findPredicate(function (item) { return item.changed; }) !== undefined;
    };
    /**
     * Finds the resource with the given path.
     *
     * If the path begin with '/' the function will remove it from the path before
     * searching the resource.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    ResourceService.prototype.find = function (path) {
        if (!path) {
            return undefined;
        }
        path = path.trim();
        if (path.startsWith('/')) {
            path = path.substring(1, path.length);
        }
        return this.findPredicate(function (item) { return item.path === path; });
    };
    /**
     * Finds the resources which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    ResourceService.prototype.findAll = function (predicate) {
        return this.cache.filter(function (item) { return predicate(item); });
    };
    /**
     * Finds the resource which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    ResourceService.prototype.findPredicate = function (predicate) {
        return this.cache.find(function (r) { return predicate(r); });
    };
    /**
     * Gets a value indicating whether the given resource is the selected one inside the explorer
     * @param resource the resource
     * @returns true if the resource is the selected one false otherwise
     */
    ResourceService.prototype.isSelection = function (resource) {
        return this.selection && resource.path === this.selection.path;
    };
    /**
     * creates the resource on the server.
     * @param resource the resource object to create.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    ResourceService.prototype.create = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, success, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["checkName"])(resource.name);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](this.find(resource.parent)), 'permission denied on parent directory');
                        this.task.emitTaskEvent(true, 'create resource');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["checkName"])(resource.name);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](this.find(resource.parent)), 'permission denied');
                        data = {
                            name: 'create_resource',
                            path: resource.parent + '/' + resource.name,
                            content: resource.content,
                            type: resource.type
                        };
                        return [4 /*yield*/, this.edit(data, resource)];
                    case 2:
                        success = _a.sent();
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, success];
                    case 3:
                        error_1 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Renames the resource on the server.
     * @param resource the resource object to rename.
     * @param name the new name of the resource.
     * @returns Promise<boolean> resolved with true if the resource is renamed.
     */
    ResourceService.prototype.rename = function (resource, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, data, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["checkName"])(name);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isNotRoot"](resource), 'cannot rename root directory');
                        if (name === resource.name) {
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        success = false;
                        this.task.emitTaskEvent(true, 'rename');
                        data = {
                            name: 'rename_resource',
                            path: resource.path,
                            target: name,
                        };
                        return [4 /*yield*/, this.edit(data, resource)];
                    case 2:
                        success = _a.sent();
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, success];
                    case 3:
                        error_2 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes the resource object from the server.
     * @param resource the resource object to deletes.
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    ResourceService.prototype.delete = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, success, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(resource, 'resource');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isRoot"](resource), 'permission denied');
                        this.task.emitTaskEvent(true, 'delete');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'delete_resource',
                                path: resource.path
                            }, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        success = this.remove(resource.path);
                        this.task.emitTaskEvent(false);
                        this.git.refresh();
                        return [2 /*return*/, success];
                    case 2:
                        error_3 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Moves the file|resource 'src' to the resource 'dst'.
     * @param src the source file or resource
     * @param dst the destination resource
     * @returns Promise<boolean> rejected with a string error message or resolved with true
     */
    ResourceService.prototype.move = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        this.task.emitTaskEvent(true, 'move');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(src, 'src');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(dst, 'dst');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](dst), 'permission denied');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isFolder"](dst), 'destination must be a directory');
                        resource = void 0;
                        if (!('size' in src)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._drop(src, dst)];
                    case 1:
                        resource = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this._move(src, dst)];
                    case 3:
                        resource = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.sort(dst.children);
                        dst.expanded = true;
                        this.selection = resource;
                        this.task.emitTaskEvent(false);
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 5:
                        error_4 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_4;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Saves the content of the resource on the server
     * @param resource the resource
     * @returns Promise<boolean> resolved with true and rejected with an error
     */
    ResourceService.prototype.save = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isFromServer"](resource)) {
                            return [2 /*return*/, true];
                        }
                        if (!resource.changed) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true, 'save');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(resource, 'resource');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'update_resource', path: resource.path, content: resource.content
                            }, { headers: headers }).toPromise()];
                    case 2:
                        _a.sent();
                        resource.changed = false;
                        resource.savedContent = resource.content;
                        this.task.emitTaskEvent(false);
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 3:
                        error_5 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Opens the content of the resource on the server (if not already opened)
     * @param resource the resource
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    ResourceService.prototype.open = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, response, error_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isFromServer"](resource)) {
                            return [2 /*return*/, true];
                        }
                        this.selection = resource;
                        if (resource.type === _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].Folder) {
                            resource.expanded = !resource.expanded;
                            return [2 /*return*/, true];
                        }
                        if (_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isLoaded"](resource) && !resource.dirty) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true, 'retrieving resource content');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resource').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('filebrowser/option', { params: params }).toPromise()];
                    case 2:
                        response = _a.sent();
                        resource.meta = response['meta'];
                        resource.content = resource.savedContent = response['content'];
                        resource.changed = resource.dirty = false;
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, true];
                    case 3:
                        error_6 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reloads the resources from the server.
     * @returns Promise<boolean> resolved with true or rejected with an error.
     */
    ResourceService.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, resources, error_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.task.emitTaskEvent(true, 'retrieving resources');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resources');
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params }).toPromise()];
                    case 1:
                        resources = _a.sent();
                        if (resources.length > 0) {
                            this.sort(resources);
                        }
                        return [4 /*yield*/, this.build(resources)];
                    case 2:
                        _a.sent();
                        this.refreshed.next(this.resources);
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, true];
                    case 3:
                        error_7 = _a.sent();
                        this.resources = [];
                        this.refreshed.next(this.resources);
                        this.task.emitTaskEvent(false);
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.findReference = function (resource, path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, response, error_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'resolve path');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                            .set('name', 'resolve_path')
                            .set('path', resource.path)
                            .set('target', path);
                        return [4 /*yield*/, this.http.get('filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, this.find(response)];
                    case 2:
                        error_8 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.build = function (resources) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            function recursive(item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                    var _i, _a, child;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                item.icon = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__["findIcon"])(item.path, item.icon);
                                array.push(item);
                                if (!item.children) return [3 /*break*/, 4];
                                _i = 0, _a = item.children;
                                _b.label = 1;
                            case 1:
                                if (!(_i < _a.length)) return [3 /*break*/, 4];
                                child = _a[_i];
                                return [4 /*yield*/, recursive(child)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            }
            var array, that, _i, resources_1, root;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        array = [];
                        that = this;
                        _i = 0, resources_1 = resources;
                        _a.label = 1;
                    case 1:
                        if (!(_i < resources_1.length)) return [3 /*break*/, 4];
                        root = resources_1[_i];
                        return [4 /*yield*/, recursive(root)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.cache = array;
                        this.resources = resources;
                        this.git.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.edit = function (data, resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, parent, after, before;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', data, {
                                headers: headers
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        parent = this.find(resource.parent);
                        parent.children = parent.children || [];
                        resource.icon = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__["findIcon"])(resource.path, response['icon']);
                        after = response['path'];
                        before = resource.path;
                        if (resource.renaming) {
                            resource.name = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_7__["basename"])(after);
                            this.replace(before, after);
                        }
                        else {
                            resource.path = after;
                            parent.children.push(resource);
                            this.cache.push(resource);
                            this.created.next(resource);
                        }
                        resource.renaming = false;
                        resource.creating = false;
                        this.git.refresh();
                        this.sort(parent.children);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ResourceService.prototype._drop = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, headers, newRes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(src.name, 'src.name');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(dst.path, 'dst.path');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["checkName"])(src.name);
                        formData = new FormData();
                        formData.append('file', src, src.name);
                        formData.append('path', dst.path);
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                        headers.set('Content-Type', null);
                        headers.set('Accept', 'multipart/form-data');
                        return [4 /*yield*/, this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        newRes = Object(_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["createResource"])(dst, _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].File);
                        newRes.path = dst.path + '/' + src.name;
                        newRes.name = src.name;
                        newRes.renaming = newRes.creating = false;
                        dst.children = dst.children || [];
                        dst.children.push(newRes);
                        this.cache.push(newRes);
                        return [2 /*return*/, newRes];
                }
            });
        });
    };
    ResourceService.prototype._move = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, before, after, parent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(src.path, 'src.path');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["requireNonNull"])(dst.path, 'dst.path');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(src.path !== dst.path, 'cannot move the resource to the same path');
                        Object(src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["assert"])(!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isRoot"](src), 'cannot move a root resource');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'move_resource',
                                path: src.path,
                                dst: dst.path
                            }, { headers: headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        before = src.path;
                        after = response['path'];
                        parent = this.find(src.parent);
                        parent.children = parent.children.filter(function (item) { return item.path !== src.path; });
                        src.parent = dst.path;
                        src.path = after;
                        dst.children.push(src);
                        this.replace(before, after);
                        return [2 /*return*/, src];
                }
            });
        });
    };
    ResourceService.prototype.replace = function (oldPath, newPath) {
        var that = this;
        function doAction(item) {
            if (item.path.startsWith(oldPath)) {
                var before = item.path;
                item.path = before.replace(oldPath, newPath);
                that.renamed.next({ before: before, after: item.path });
            }
            if (item.parent.startsWith(oldPath)) {
                item.parent = item.parent.replace(oldPath, newPath);
            }
        }
        for (var _i = 0, _a = this.cache; _i < _a.length; _i++) {
            var item = _a[_i];
            doAction(item);
        }
    };
    ResourceService.prototype.remove = function (path) {
        path = path.trim();
        var toRemove = this.find(path);
        if (!toRemove) {
            return false;
        }
        var p = this.find(toRemove.parent);
        if (!p) {
            return false;
        }
        var index = p.children.findIndex(function (e) { return e.path === path; });
        if (index === -1) {
            return false;
        }
        p.children.splice(index, 1);
        this.cache = this.cache.filter(function (e) { return e.path !== path; });
        function propagate(item, subject) {
            subject.next(item);
            if (item.children) {
                item.children.forEach(function (child) { return propagate(child, subject); });
            }
        }
        propagate(toRemove, this.deleted);
        return true;
    };
    ResourceService.prototype.sort = function (resources) {
        if (resources) {
            resources.sort(function (a, b) {
                if (a.type === b.type) {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                }
                return a.type === 'folder' ? -1 : 1;
            });
            for (var _i = 0, resources_2 = resources; _i < resources_2.length; _i++) {
                var item = resources_2[_i];
                this.sort(item.children);
            }
        }
    };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_git_service__WEBPACK_IMPORTED_MODULE_5__["GitService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]])
    ], ResourceService);
    return ResourceService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/core/task.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/editor/shared/services/core/task.service.ts ***!
  \*************************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TaskService = /** @class */ (function () {
    function TaskService() {
        this.onRunningTask = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(TaskService.prototype, "running", {
        get: function () {
            return this._running;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskService.prototype, "taskName", {
        get: function () {
            return this._taskName;
        },
        enumerable: true,
        configurable: true
    });
    TaskService.prototype.emitTaskEvent = function (running, taskName) {
        if (taskName === void 0) { taskName = null; }
        this._running = running;
        this._taskName = taskName;
        this.onRunningTask.next(running);
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/editor/shared/services/monaco/monaco.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editor/shared/services/monaco/monaco.service.ts ***!
  \*****************************************************************/
/*! exports provided: PL, MonacoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PL", function() { return PL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonacoService", function() { return MonacoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var _models_language_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/language.model */ "./src/app/editor/shared/models/language.model.ts");
/* harmony import */ var _core_git_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _core_opener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _core_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// tslint:disable: max-line-length








var PL = 'pl';
var MonacoService = /** @class */ (function () {
    function MonacoService(git, opener, resources) {
        this.git = git;
        this.opener = opener;
        this.resources = resources;
        this.editors = [];
        this.codeLens = {};
        this.blames = {};
        this.cursorChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.blameChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    MonacoService_1 = MonacoService;
    MonacoService.prototype.register = function (monaco) {
        var _this = this;
        var that = this;
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        monaco.languages.register({
            id: PL,
            extensions: ['.pl', '.pltp'],
        });
        monaco.editor.defineTheme(PL, {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
            ]
        });
        this.registerMonarch(monaco);
        this.registerLinks(monaco);
        this.registerFolding(monaco);
        this.registerHover(monaco);
        this.registerCompletion(monaco);
        this.resources.renamed.subscribe(function (data) {
            _this.disposeModel(data.before);
        });
        this.resources.deleted.subscribe(function (data) {
            _this.disposeModel(data.path);
        });
    };
    MonacoService.prototype.findLanguage = function (resource) {
        var ext = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__["extname"])(resource.path);
        for (var _i = 0, LANGUAGES_1 = _models_language_model__WEBPACK_IMPORTED_MODULE_3__["LANGUAGES"]; _i < LANGUAGES_1.length; _i++) {
            var item = LANGUAGES_1[_i];
            if (item.extension === ext) {
                return item.id;
            }
        }
        return '';
    };
    MonacoService.prototype.disposeEditor = function (editor) {
        var editorInfo = this.editors.find(function (e) { return e.editor.getId() === editor.getId(); });
        if (!editorInfo) {
            throw new Error('unregistered editor ' + editor.getId());
        }
        editorInfo.disposables.forEach(function (item) { return item.dispose(); });
        editor.dispose();
        this.editors = this.editors.filter(function (e) { return e.editor.getId() !== editor.getId(); });
    };
    MonacoService.prototype.registerEditor = function (editor) {
        var _this = this;
        var that = this;
        var disposables = [];
        var monaco = window.monaco;
        var linkDetector = editor.getContribution('editor.linkDetector');
        linkDetector.openerService.open = function (uri) {
            _this.opener.openReference(editor.getModel().uri.path, uri.path);
        };
        disposables.push(linkDetector);
        disposables.push(editor.onDidBlurEditor(function () {
            _this.cursor = undefined;
            _this.cursorChanged.next(undefined);
        }));
        disposables.push(editor.onDidChangeCursorPosition(function (e) {
            _this.didCursorChanged(e, editor);
        }));
        disposables.push(editor.onDidChangeModelContent(function () {
        }));
        this.editors.push({ editor: editor, disposables: disposables });
    };
    MonacoService.prototype.provideBlames = function (resource, model) {
        var _this = this;
        return this.git.blame(resource).then(function (response) {
            var lines = resource.content.split('\n');
            var linesLength = lines.length;
            for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                var item = response_1[_i];
                item.text = lines[item.line - 1];
                if (item.email === 'not.committed.yet') {
                    item.email = 'Uncommitted changes';
                }
            }
            _this.blames[resource.path] = response;
            _this.updateBlame(model);
            return true;
        }).catch(function (_) { return false; });
    };
    MonacoService.prototype.disposeModel = function (path) {
        var monaco = window.monaco;
        var model = monaco.editor.getModel(monaco.Uri.parse(path));
        if (model) {
            model.dispose();
        }
    };
    MonacoService.prototype.disposeUnusedModels = function () {
        var monaco = window.monaco;
        var models = monaco.editor.getModels();
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var model = models_1[_i];
            if (model._attachedEditorCount === 0) {
                model.dispose();
            }
        }
    };
    MonacoService.prototype.didCursorChanged = function (e, editor) {
        this.cursor = e.position;
        this.syncCursor(editor, e);
        this.updateBlame(editor.getModel());
    };
    MonacoService.prototype.syncCursor = function (editor, e) {
        this.cursorChanged.next(e.position);
        for (var _i = 0, _a = this.editors; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.editor.getId() !== editor.getId()) {
                var model = item.editor.getModel();
                if (model && model.id === editor.getModel().id) {
                    item.editor.setPosition(e.position);
                }
            }
        }
    };
    MonacoService.prototype.updateBlame = function (model) {
        if (model) {
            var blame = void 0;
            var blames = this.blames[model.uri.path];
            if (blames) {
                var lineNumber = this.cursor ? this.cursor.lineNumber : 0;
                var lineContent_1 = model.getLineContent(lineNumber);
                blame = blames.find(function (item) { return item.text.trim() === lineContent_1.trim(); });
            }
            this.blameChanged.next({ blame: blame, modelId: model.id });
        }
    };
    MonacoService.prototype.registerMonarch = function (monaco) {
        monaco.languages.setMonarchTokensProvider(PL, {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'build', 'before', 'form', 'template'
            ],
            operators: [
                '=', '+', '@', '%', '==', '+=', '=@', '+=@',
            ],
            tokenizer: {
                root: [
                    [
                        // (?=\s*(=|\+|\@|\%|(==)|(\+=)|(=\@)|(\+=\@)))
                        /^[a-zA-Z_](\.?\w+)*/, {
                            cases: {
                                '@default': 'key'
                            }
                        }
                    ],
                    [/#.*/, 'comment'],
                    [/==/, { token: 'open', next: '@embedded' }],
                    [/%=/, { token: 'open', next: '@predefined', nextEmbedded: 'javascript' }],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    // whitespace
                    { include: '@whitespace' },
                ],
                embedded: [
                    [/#\|(\w+)\|/, { token: 'string', next: '@predefined', nextEmbedded: '$1' }],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    [/^==\s*$/, { token: 'close', next: '@pop' }],
                ],
                predefined: [
                    ['(?=\w+)==', 'string'],
                    [/\{\{[a-zA-Z_](\.?\w+)\}\}/, 'key'],
                    [/^==\s*$/, { token: 'close', next: '@root', nextEmbedded: '@pop' }],
                ],
                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                ],
            },
        });
    };
    MonacoService.prototype.registerCompletion = function (monaco) {
        monaco.languages.registerCompletionItemProvider(PL, {
            provideCompletionItems: function (model, position) {
                var line = model.getLineContent(position.lineNumber);
                if (line.includes('{{')) {
                    return [];
                }
                return Object.keys(MonacoService_1.BUILT_IN_WORDS).map(function (name) { return ({
                    label: name,
                    detail: MonacoService_1.BUILT_IN_WORDS[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }); });
            },
        });
        /*  monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
                triggerCharacters: ['{{'],
                provideCompletionItems: function(model, position) {
                    const line = model.getLineContent(position.lineNumber);
                    if (!line.includes('{{')) {
                        return [];
                    }
                    const items: monaco.languages.CompletionItem[] = [];
                    const keys = self.getKeys();
                    if (keys.length > 0) {
                        keys.forEach(k => {
                            items.push({
                                label: k,
                                detail: '{{' + k + '}}',
                                insertText: k + '}}',
                                kind: monaco.languages.CompletionItemKind.Reference
                            });
                        });
                    }
                    return items;
                }
            });
            */
    };
    MonacoService.prototype.registerLinks = function (monaco) {
        monaco.languages.registerLinkProvider(PL, {
            provideLinks: function (model, _token) {
                var links = [];
                var lines = model.getValue().split('\n');
                var match;
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].match(MonacoService_1.OPEN_PATTERN)) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].match(MonacoService_1.CLOSE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = MonacoService_1.REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        var comment = false;
                        while (match.index >= 0) {
                            if (lines[i][match.index] === '#') {
                                comment = true;
                                break;
                            }
                            match.index--;
                        }
                        if (!comment) {
                            var index = lines[i].indexOf('@');
                            if (index === -1) {
                                index = lines[i].indexOf('/');
                                if (index === -1) {
                                    index = match.index;
                                }
                            }
                            var url = match.pop();
                            links.push({
                                range: new monaco.Range(i + 1, index + 1, i + 1, index + url.length + 2),
                                url: url,
                            });
                        }
                    }
                }
                return links;
            },
            resolveLink: function (link, _token) {
                return link;
            }
        });
    };
    MonacoService.prototype.registerHover = function (monaco) {
        monaco.languages.registerHoverProvider(PL, {
            provideHover: function (model, position) {
                var lineContent = model.getLineContent(position.lineNumber);
                var token = model.getWordAtPosition(position);
                if (token) {
                    /*const keys = self.getKeys();
                    const k = keys.find(e => e === token.word);
                    if (k) {
                        const i = token.startColumn - 2;
                        if (i > 0 && lineContent[i] === '{' && i - 1 >= 0 && lineContent[i - 1] === '{') {
                            return {
                                range: new monaco.Range(1, 1, 3, 10),
                                contents: [
                                    { value: k },
                                    { value: self.getValue(k) }
                                ]
                            };
                        }
                    }
                    */
                    if (token.word in MonacoService_1.BUILT_IN_WORDS) {
                        var lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: MonacoService_1.BUILT_IN_WORDS[token.word] }
                            ]
                        };
                    }
                }
            }
        });
    };
    MonacoService.prototype.registerFolding = function (monaco) {
        monaco.languages.registerFoldingRangeProvider(PL, {
            provideFoldingRanges: function (model) {
                var ranges = [];
                var lines = model.getValue().split('\n');
                var length = lines.length;
                var i = 0, start = -1;
                while (i < length) {
                    if (lines[i].match(MonacoService_1.OPEN_PATTERN)) {
                        start = i;
                    }
                    else if (lines[i].match(MonacoService_1.CLOSE_PATTERN)) {
                        ranges.push({
                            start: start + 1,
                            end: i + 1,
                            kind: monaco.languages.FoldingRangeKind.Region
                        });
                        start = -1;
                    }
                    i++;
                }
                return ranges;
            }
        });
    };
    var MonacoService_1;
    MonacoService.BUILT_IN_WORDS = {
        title: 'Titre de l\'exercice/feuille d\'exercice',
        author: 'Auteur de l\'exercice',
        introduction: 'Présentation de la feuille d\'exercice, le contenu de cette clé est interprété comme du markdown.',
        teacher: 'Sur un PLTP, affiche un note visible par les enseignant seulement',
        text: 'Énoncé de l\'exercice, le contenu de cette clé est interprété comme du markdown.',
        build: 'Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), '
            + 'à utiliser avec le builder /builder/build.py',
        before: 'Code python permettant de modifier l\'exercice avant sont exécution sur le navigateur',
        form: 'Formulaire HTML permettant à l\'élève de répondre',
        template: 'Définie template comme étant la base de ce fichier',
    };
    MonacoService.REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/]+)/;
    MonacoService.OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)/;
    MonacoService.CLOSE_PATTERN = /^==\s*$/;
    MonacoService = MonacoService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_git_service__WEBPACK_IMPORTED_MODULE_4__["GitService"],
            _core_opener_service__WEBPACK_IMPORTED_MODULE_5__["OpenerService"],
            _core_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"]])
    ], MonacoService);
    return MonacoService;
}());



/***/ }),

/***/ "./src/app/editor/workspace/code-editor/code-editor.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/editor/workspace/code-editor/code-editor.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class='blame' *ngIf='blame'>\n    {{blame.email}}, \n    {{blame.day | timeAgo}} \n    <ng-container *ngIf='blame.commit'>- {{blame.commit}}</ng-container>\n </span>\n<ngx-monaco-editor [hidden]='editor.diffEditing' class='code-editor' [ngClass]='{\"with-blame\": blame}' [options]=\"{}\" [model]='{}' (onInit)=\"codeEditorLoaded($event)\"></ngx-monaco-editor>\n<ngx-monaco-diff-editor [hidden]='!editor.diffEditing' class='code-editor' [ngClass]='{\"with-blame\": blame}' [options]=\"{}\" [originalModel]=\"{}\" [modifiedModel]=\"{}\" (onInit)=\"diffEditorLoaded($event)\"></ngx-monaco-diff-editor>\n\n\n"

/***/ }),

/***/ "./src/app/editor/workspace/code-editor/code-editor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/editor/workspace/code-editor/code-editor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-editor {\n  height: calc(100% - 36px); }\n\n.code-editor.with-blame {\n  height: calc(100% - (36px + 16px)); }\n\n.blame {\n  color: #999999;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  width: 100%;\n  height: 16px;\n  padding: 0 61px;\n  font-family: Menlo, Monaco, \"Courier New\", monospace;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLG1DQUFrQyxFQUNyQzs7QUFFRDtFQUNJLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLHdCQUF1QjtFQUN2QixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YscURBQW9EO0VBQ3BELG9CQUFtQjtFQUNuQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGUtZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpOyAvLyAzNiA9IHRhYiBoZWlnaHQgMTYgPSBibGFtZSBoZWlnaHRcbn1cblxuLmNvZGUtZWRpdG9yLndpdGgtYmxhbWUge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gKDM2cHggKyAxNnB4KSk7IC8vIDM2ID0gdGFiIGhlaWdodCAxNiA9IGJsYW1lIGhlaWdodFxufVxuXG4uYmxhbWUge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiAwIDYxcHg7XG4gICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/editor/workspace/code-editor/code-editor.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/editor/workspace/code-editor/code-editor.component.ts ***!
  \***********************************************************************/
/*! exports provided: CodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function() { return CodeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/editor.model */ "./src/app/editor/shared/models/editor.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _shared_services_core_preview_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/core/preview.service */ "./src/app/editor/shared/services/core/preview.service.ts");










var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent(git, preview, resources, notification, editorService, monacoService) {
        this.git = git;
        this.preview = preview;
        this.resources = resources;
        this.notification = notification;
        this.editorService = editorService;
        this.monacoService = monacoService;
        this.subscriptions = [];
        this.decorations = [];
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.editor.onOpened.subscribe(function (uri) {
            _this.open(uri);
        }));
        this.subscriptions.push(this.editor.onPreviewCommand.subscribe(function (item) {
            _this.didPreview(item);
        }));
        this.subscriptions.push(this.editor.onDiffCommand.subscribe(function () {
            _this.open(_this.editor.resource());
        }));
        this.subscriptions.push(this.monacoService.blameChanged.subscribe(function (e) {
            if (e.blame && e.modelId === _this.editor.codeEditor.getModel().id) {
                _this.blame = e.blame;
            }
        }));
    };
    CodeEditorComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
        this.editorChanges.dispose();
        this.monacoService.disposeEditor(this.editor.codeEditor);
    };
    CodeEditorComponent.prototype.codeEditorLoaded = function (codeEditor) {
        this.monacoService.registerEditor(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.resource());
    };
    CodeEditorComponent.prototype.diffEditorLoaded = function (diffEditor) {
        this.monacoService.registerEditor(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.resource());
    };
    CodeEditorComponent.prototype.addCommands = function (editor) {
        var _this = this;
        this.editorChanges = editor.onDidChangeModelContent(function () {
            _this.didContentChanged(editor);
        });
        var empty = '';
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
            _this.didSave();
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, function () {
            _this.editor.group().saveAll().catch(function (error) {
                _this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, function () {
            _this.editor.group().close(_this.editor.resource(), true).catch(function (error) {
                _this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, function () {
            _this.editor.group().closeAll(true).catch(function (error) {
                _this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, function () {
            _this.editor.group().closeSaved().catch(function (error) {
                _this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function () {
            if (Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBePreviewed"])(_this.active)) {
                _this.didPreview(_this.active);
            }
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Enter, function () {
            _this.editorService.closePreview();
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.RightArrow, function () {
            _this.editor.split();
        }, empty);
        // tslint:enable: no-bitwise
    };
    CodeEditorComponent.prototype.didSave = function () {
        var _this = this;
        this.editor.group().save(this.editor.resource()).then(function (success) {
            if (success) {
                _this.monacoService.provideBlames(_this.active, _this.editor.codeEditor.getModel());
            }
        }).catch(function (error) {
            _this.notification.logError(error);
        });
    };
    CodeEditorComponent.prototype.didContentChanged = function (editor) {
        if (!this.readonly) {
            var model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.savedContent !== this.active.content;
        }
    };
    CodeEditorComponent.prototype.didPreview = function (item) {
        var _this = this;
        this.preview.preview(item).then(function () {
            _this.editorService.open(item);
        }).catch(function (error) {
            _this.notification.logError(error);
        });
    };
    CodeEditorComponent.prototype.open = function (resource, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var monaco, uri, meta, language, model;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.blame = null;
                        this.active = resource;
                        monaco = window.monaco;
                        uri = monaco.Uri.parse(resource.path);
                        meta = this.active.meta;
                        language = this.monacoService.findLanguage(this.active);
                        model = monaco.editor.getModel(uri) || monaco.editor.createModel(this.active.content, language, uri);
                        if (model.getValue() !== this.active.content) {
                            model.setValue(this.active.content);
                            this.active.changed = false;
                            this.active.savedContent = this.active.content;
                        }
                        this.readonly = this.editor.diffEditing || !this.active.write;
                        this.editor.codeEditor.setModel(model);
                        this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
                        this.editor.codeEditor.focus();
                        return [4 /*yield*/, this.checkOptions(monaco, resource, options)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkDiffOptions(monaco, language)];
                    case 2:
                        _a.sent();
                        this.monacoService.provideBlames(this.active, model);
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeEditorComponent.prototype.checkDiffOptions = function (monaco, language) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diff, _1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.editor.diffEditing) return [3 /*break*/, 5];
                        diff = '';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.git.show(this.active)];
                    case 2:
                        diff = (_a.sent()) || '';
                        return [3 /*break*/, 4];
                    case 3:
                        _1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        this.editor.diffEditor.setModel({
                            original: monaco.editor.createModel(diff, language),
                            modified: monaco.editor.createModel(this.active.content, language),
                        });
                        this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: this.readonly });
                        this.editor.diffEditor.getModifiedEditor().focus();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CodeEditorComponent.prototype.checkOptions = function (monaco, resource, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (options) {
                    if (options.position) {
                        this.editor.codeEditor.setPosition({
                            lineNumber: options.position.line, column: options.position.line
                        });
                        this.editor.codeEditor.revealLineInCenter(options.position.line, monaco.editor.ScrollType.Smooth);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__["CodeEditor"])
    ], CodeEditorComponent.prototype, "editor", void 0);
    CodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'code-editor',
            template: __webpack_require__(/*! ./code-editor.component.html */ "./src/app/editor/workspace/code-editor/code-editor.component.html"),
            styles: [__webpack_require__(/*! ./code-editor.component.scss */ "./src/app/editor/workspace/code-editor/code-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_6__["GitService"],
            _shared_services_core_preview_service__WEBPACK_IMPORTED_MODULE_9__["PreviewService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_8__["EditorService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_5__["MonacoService"]])
    ], CodeEditorComponent);
    return CodeEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/workspace/image-editor/image-editor.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/editor/workspace/image-editor/image-editor.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='image-editor'>\n    <div *ngIf='isSVG; else notSVG' [innerHTML]='svg | sanitizeHtml' [ngStyle]='{zoom: editor.zoom}'></div> \n    <ng-template #notSVG>\n        <img [src]='url'  [ngStyle]='{zoom: editor.zoom}' />\n    </ng-template>\n    <div class='image-editor__btn-group'>\n        <div class='image-editor__btn'>{{editor.zoom | number:'1.1-1'}}</div>\n        <div class='image-editor__btn' matTooltip='Zoom In' (click)='editor.zoomIn()'>\n            <i class=\"fas fa-plus\"></i>\n        </div>\n        <div class='image-editor__btn' matTooltip='Zoom Out' (click)='editor.zoomOut()'>\n            <i class=\"fas fa-minus\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/editor/workspace/image-editor/image-editor.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/editor/workspace/image-editor/image-editor.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-editor {\n  height: calc(100% - 36px);\n  position: relative;\n  background-position: 0px 0px, 10px 10px;\n  background-size: 20px 20px;\n  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);\n  text-align: center; }\n  .image-editor img {\n    text-align: center;\n    display: block;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    max-width: 100%;\n    height: auto;\n    margin: auto;\n    border-radius: 16px;\n    background-color: transparent;\n    /*         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */ }\n  .image-editor .image-editor__btn-group {\n    position: absolute;\n    top: 48px;\n    right: 12px;\n    width: 32px; }\n  .image-editor .image-editor__btn {\n    background-color: #ecedf0;\n    width: 32px;\n    height: 32px;\n    border-radius: 2px 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9pbWFnZS1lZGl0b3IvaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQix3Q0FBdUM7RUFDdkMsMkJBQTBCO0VBQzFCLHVMQUFxTDtFQUNyTCxtQkFBa0IsRUFvQ3JCO0VBMUNEO0lBUVEsbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFdBQVU7SUFDVixZQUFXO0lBQ1gsVUFBUztJQUNULGdCQUFlO0lBQ2YsYUFBWTtJQUNaLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsOEJBQTZCO0lBQ3JDLDJGQUEyRixFQUN0RjtFQXJCTDtJQXlCUSxtQkFBa0I7SUFDbEIsVUFBUztJQUNULFlBQVc7SUFDWCxZQUFXLEVBQ2Q7RUE3Qkw7SUFnQ1EsMEJBQXlCO0lBQ3pCLFlBQVc7SUFDWCxhQUFZO0lBQ1osdUJBQXNCO0lBQ3RCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9pbWFnZS1lZGl0b3IvaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWVkaXRvciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlZSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZWVlIDc1JSwgI2VlZSAxMDAlKSxsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZWUgMjUlLCB3aGl0ZSAyNSUsIHdoaXRlIDc1JSwgI2VlZSA3NSUsICNlZWUgMTAwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLyogICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpOyAqL1xuICAgIH1cblxuXG4gICAgLmltYWdlLWVkaXRvcl9fYnRuLWdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDQ4cHg7XG4gICAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICB9XG5cbiAgICAuaW1hZ2UtZWRpdG9yX19idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZGYwO1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/workspace/image-editor/image-editor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/editor/workspace/image-editor/image-editor.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditorComponent", function() { return ImageEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/editor.model */ "./src/app/editor/shared/models/editor.model.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");




var ImageEditorComponent = /** @class */ (function () {
    function ImageEditorComponent() {
    }
    ImageEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.open(this.editor.resource());
        this.openSubscription = this.editor.onOpened.subscribe(function (document) {
            _this.open(document);
        });
    };
    ImageEditorComponent.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
    };
    ImageEditorComponent.prototype.open = function (resource) {
        this.svg = resource.content;
        this.url = resource.meta.downloadUrl;
        this.isSVG = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["isSVG"])(resource);
        console.log(resource);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__["ImageEditor"])
    ], ImageEditorComponent.prototype, "editor", void 0);
    ImageEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'image-editor',
            template: __webpack_require__(/*! ./image-editor.component.html */ "./src/app/editor/workspace/image-editor/image-editor.component.html"),
            styles: [__webpack_require__(/*! ./image-editor.component.scss */ "./src/app/editor/workspace/image-editor/image-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageEditorComponent);
    return ImageEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/workspace/preview-editor/preview-editor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/editor/workspace/preview-editor/preview-editor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf='loading' mode=\"indeterminate\"></mat-progress-bar>\n<iframe *ngIf='isURL' class=\"preview-editor\" [srcdoc]=\"content | sanitizeHtml\" frameborder=\"0\" (load)='didFrameLoaded()'></iframe>\n<div *ngIf='isHTML' class='preview-editor' [innerHTML]='content | sanitizeHtml' runScripts></div>\n<div *ngIf='isMarkdown' class='preview-editor'><markdown [data]=\"content\"></markdown></div>"

/***/ }),

/***/ "./src/app/editor/workspace/preview-editor/preview-editor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/editor/workspace/preview-editor/preview-editor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-editor {\n  height: calc(100% - 36px);\n  overflow: auto;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9wcmV2aWV3LWVkaXRvci9wcmV2aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9wcmV2aWV3LWVkaXRvci9wcmV2aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWVkaXRvciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiA4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/editor/workspace/preview-editor/preview-editor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/editor/workspace/preview-editor/preview-editor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PreviewEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewEditorComponent", function() { return PreviewEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/editor.model */ "./src/app/editor/shared/models/editor.model.ts");
/* harmony import */ var src_app_shared_directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");





var PreviewEditorComponent = /** @class */ (function () {
    function PreviewEditorComponent() {
    }
    PreviewEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.open(this.editor.resource());
        this.openSubscription = this.editor.onOpened.subscribe(function (document) {
            _this.open(document);
        });
    };
    PreviewEditorComponent.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
    };
    PreviewEditorComponent.prototype.didFrameLoaded = function () {
        this.counter++;
        // for some reason onload of iframe is called twice
        this.loading = this.counter % 2 === 0;
    };
    PreviewEditorComponent.prototype.open = function (resource) {
        this.content = resource.meta.previewData;
        this.isMarkdown = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isMarkdown"])(resource);
        this.isHTML = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isSVG"])(resource);
        this.isURL = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isPl"])(resource);
        this.loading = this.isURL;
        if (this.isHTML && this.scripts) {
            this.scripts.reinsertScripts();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_2__["PreviewEditor"])
    ], PreviewEditorComponent.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_3__["RunScriptsDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_3__["RunScriptsDirective"])
    ], PreviewEditorComponent.prototype, "scripts", void 0);
    PreviewEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'preview-editor',
            template: __webpack_require__(/*! ./preview-editor.component.html */ "./src/app/editor/workspace/preview-editor/preview-editor.component.html"),
            styles: [__webpack_require__(/*! ./preview-editor.component.scss */ "./src/app/editor/workspace/preview-editor/preview-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreviewEditorComponent);
    return PreviewEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split class='h100' direction='horizontal' gutterSize='5' useTransition='true' cdkDropListGroup>\n    <ng-container *ngFor='let group of groups'>\n        <as-split-area class='editor-group h100' style='overflow: hidden;'>\n            <div class='tab-bar'>\n                <div [id]='group.id()' class='tab-group' cdkDropList [cdkDropListData]=\"group.resources\" (cdkDropListDropped)=\"group.drop($event)\">\n                    <div *ngFor='let resource of group.resources; trackBy: group.trackResource' [matTooltip]=\"resource.path\"\n                        [ngClass]=\"{'tab-item': true, active: group.isActive(resource), changed: group.isChanged(resource)}\"\n                        (click)='group.didTapOnResource(resource)' cdkDragAxis='x' cdkDrag>\n                        <i class=\"tab-icon {{resource.icon}}\"></i>\n                        <span>{{resource.name}}</span>\n                        <span class='tab-close' (click)='group.close(resource, true)'>&nbsp;&times;</span>\n                    </div>\n                </div>\n                <div class=\"spacer\"></div>  \n                <ng-container *ngIf='group.someAction();'>\n                    <ng-container *ngIf='group.focused()'>\n                        <ng-container *ngFor='let action of group.actions()'>\n                            <div class='tab-item' [matTooltip]='action.tooltip' *ngIf='action.condition(group.activeResource())' (click)='action.invoke(group.activeResource())'>\n                                <i class=\"{{action.icon}}\"></i>\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                    <div class='tab-item' matTooltip='More Options' [matMenuTriggerFor]=\"editorMenu\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                    </div>\n                    <mat-menu #editorMenu=\"matMenu\">\n                        <button mat-menu-item (click)='group.save(group.activeResource())'>Save ⌘S</button>\n                        <button mat-menu-item (click)='group.saveAll()'>Save All ⌘Alt S</button>\n                        <button mat-menu-item (click)='group.close(group.activeResource(), true)'>Close ⌘K</button>\n                        <button mat-menu-item (click)='group.closeAll(true)'>Close All ⌘Alt K</button>\n                        <button mat-menu-item (click)='group.closeSaved()'>Close Saved ⌘Alt U</button>\n                    </mat-menu>\n                </ng-container>\n            </div>\n            <ng-container *ngFor='let editor of group.editors; trackBy group.trackEditor'>\n                <ng-container [ngSwitch]=\"editor.type()\">\n                    <code-editor [hidden]='!group.activeEditorIs(\"code\")' *ngSwitchCase=\"'code'\" [editor]='editor'></code-editor>\n                    <image-editor [hidden]='!group.activeEditorIs(\"image\")' *ngSwitchCase=\"'image'\" [editor]='editor'></image-editor>\n                    <preview-editor [hidden]='!group.activeEditorIs(\"preview\")' *ngSwitchCase=\"'preview'\" [editor]='editor'></preview-editor>\n                </ng-container>\n            </ng-container>\n        </as-split-area>\n    </ng-container>\n    <div class='welcome' *ngIf='!hasGroup'>\n        <h3 class='welcome-title'>PL Editor</h3>\n\n        <div class='welcome-section'>\n            <h3>User Interface</h3>\n            <img src=\"static/filebrowser/app/assets/icons/interface.png\" alt=\"interface\"> <br/> <br/>\n            <p>\n                PL Editor comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your project. \n                The UI is divided into five areas:\n            </p>\n            <mat-list>\n                <mat-list-item>\n                    <p>A)&nbsp; <b>Side Bar</b> Contains different views like the Explorer to assist you while working on your project.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>B)&nbsp; <b>Editor</b> The main area to edit your files. You can open as many editors as you like side by side.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>C)&nbsp; <b>Debugging</b> Display different debugging information below the editor region for output or debug information, errors and warnings.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p> D)&nbsp; <b>Status Bar</b> Gives you additional context-specific indicators like the repository of the focused file/folder, the position of the cursor inside the focused editor..</p>\n                </mat-list-item>\n            </mat-list>\n        </div>\n      \n        <div class='welcome-section'>\n            <h3>Side by side editing</h3>\n            <mat-divider></mat-divider>\n            <p>\n                You can open as many editors as you like side by side horizontally. \n                If you already have one editor open, there are multiple ways of opening another editor to the side of the existing one:\n            </p>\n            <mat-list>\n                <mat-list-item>\n                    <p>Click on a file in the Explorer.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>Press <b>⌘Enter</b> (<b>Ctrl+Enter</b> on Windows/Linux) inside a code editor will split the editor.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>Click the <b>Split Editor</b> button in the upper right of an editor.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>Press <b>F2</b> to open the <b>Quick Open</b> dialog.</p>\n                </mat-list-item>\n            </mat-list>\n            <p>\n                Whenever you open another file, the editor that is active will display the content of that file. \n                So if you have two editors side by side and you want to open file into the right hand editor, \n                make sure that editor is active (by clicking inside it) before opening your file.\n            </p>\n            <p class='welcome-tip'>\n                Tip: You can resize editors and reorder them. Drag and drop the editor title area to reposition or resize the editor.\n            </p>\n        </div>\n\n        <div class='welcome-section'>\n            <h3>Explorer</h3>\n            <mat-divider></mat-divider>\n            <p>\n                The Explorer is used to browse, open, and manage all of the files and folders in your project.\n                You can do many things from here:\n            </p>\n            <mat-list>\n                <mat-list-item>\n                    <p>Create, delete, and rename files and folders.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>Move files and folders with drag and drop.</p>\n                </mat-list-item>\n                <mat-list-item>\n                    <p>Load, reload, and test pl files </p>\n                </mat-list-item>\n            </mat-list>\n            <p>\n                Opened files are locked you cannot rename or delete them. \n            </p>\n            <p>Tip: You can open quickly a file with <b>F2</b></p>\n            <p>Tip: You can drag and drop files (Single file) into the Explorer from outside to copy them</p>\n        </div>\n        \n        <div class='welcome-section'>\n            <h3>PL code colorization</h3>\n            <mat-divider></mat-divider>\n            <p>The editor provides a syntax colorization for the following languages:</p>\n            <mat-list>\n                <mat-list-item> css </mat-list-item> \n                <mat-list-item> csharp </mat-list-item> \n                <mat-list-item> javascript </mat-list-item> \n                <mat-list-item> typescript </mat-list-item> \n                <mat-list-item> html </mat-list-item> \n                <mat-list-item> markdown </mat-list-item> \n                <mat-list-item> python </mat-list-item> \n                <mat-list-item> r </mat-list-item> \n                <mat-list-item> sql </mat-list-item> \n                <mat-list-item> mysql </mat-list-item> \n                <mat-list-item> java </mat-list-item> \n                <mat-list-item> c </mat-list-item> \n                <mat-list-item> cpp </mat-list-item> \n                <mat-list-item> cpp </mat-list-item> \n                <mat-list-item> xml </mat-list-item> \n                <mat-list-item> bat </mat-list-item> \n                <mat-list-item> ini </mat-list-item> \n                <mat-list-item> php </mat-list-item> \n            </mat-list>\n            <p>\n                There is also a special feature for files with <b>.pl</b> and <b>.pltp</b> extensions that allow you to embed a colorization of all the other languages inside a multiline key like in the following image. <br/>\n            </p>\n            <img src=\"static/filebrowser/app/assets/icons/embed-style.png\" alt=\"embed style\"> <br/>\n        </div>\n\n        <div>\n            <h3>Shorcuts</h3>\n            <mat-divider></mat-divider>\n            <table mat-table [dataSource]=\"shorcuts\" class=\"mat-elevation-z1\" style='width: 100%'>\n                <!-- Command -->\n                <ng-container matColumnDef=\"command\">\n                    <th mat-header-cell *matHeaderCellDef> Command </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.command}} </td>\n                </ng-container>\n\n                <!-- Action -->\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\n                </ng-container>\n        \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n        </div>\n    </div>\n</as-split>"

/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-group {\n  position: relative;\n  overflow: hidden; }\n\n.tab-bar {\n  padding: 0; }\n\n.tab-bar .tab-group {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    overflow-x: auto; }\n\n.tab-item.active {\n  background-color: #FFF; }\n\n.tab-item .tab-icon {\n  margin-right: 4px; }\n\n.tab-item .tab-close {\n  font-size: 18px; }\n\n.tab-item .tab-close:hover {\n    opacity: 1; }\n\n.tab-item.changed {\n  border-bottom: 1px solid salmon; }\n\n.welcome {\n  width: 100%;\n  padding: 4rem 8rem;\n  display: flex;\n  flex-direction: column;\n  overflow: auto; }\n\n.welcome .welcome-title {\n    align-self: center; }\n\n.welcome .welcome-section {\n    width: 100%; }\n\n.welcome .welcome-tip {\n    border-left: .25em solid #dfe2e5;\n    color: #6a737d;\n    padding: 0 1em; }\n\n.welcome img {\n    display: block;\n    width: 50%;\n    height: auto;\n    margin: auto; }\n\n.welcome .mat-list-base .mat-list-item, .welcome .mat-list-base .mat-list-option {\n    height: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVSxFQVFiOztBQVREO0lBR1EsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osWUFBVztJQUNYLGlCQUFnQixFQUNuQjs7QUFHTDtFQUVRLHVCQUFzQixFQUN6Qjs7QUFITDtFQU1RLGtCQUFpQixFQUNwQjs7QUFQTDtFQVVRLGdCQUFlLEVBSWxCOztBQWRMO0lBWVksV0FBVSxFQUNiOztBQWJUO0VBZ0JRLGdDQUErQixFQUNsQzs7QUFJTDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixlQUFjLEVBeUJqQjs7QUE5QkQ7SUFRUSxtQkFBa0IsRUFDckI7O0FBVEw7SUFZUSxZQUFXLEVBQ2Q7O0FBYkw7SUFnQlEsaUNBQWdDO0lBQ2hDLGVBQWM7SUFDZCxlQUFjLEVBQ2pCOztBQW5CTDtJQXFCUSxlQUFjO0lBQ2QsV0FBVTtJQUNWLGFBQVk7SUFDWixhQUFZLEVBQ2Y7O0FBekJMO0lBNEJRLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci93b3Jrc3BhY2Uvd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiLWJhciB7XG4gICAgcGFkZGluZzogMDtcbiAgICAudGFiLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG59XG5cbi50YWItaXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC50YWItaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIC50YWItY2xvc2Uge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmNoYW5nZWQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2FsbW9uO1xuICAgIH1cblxufVxuXG4ud2VsY29tZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNHJlbSA4cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgIC53ZWxjb21lLXRpdGxlIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC53ZWxjb21lLXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLndlbGNvbWUtdGlwIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNkZmUyZTU7XG4gICAgICAgIGNvbG9yOiAjNmE3MzdkO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtLCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");




var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(editor, opener, changes) {
        this.editor = editor;
        this.opener = opener;
        this.changes = changes;
        this.groups = [];
        this.displayedColumns = ['command', 'action'];
        this.shorcuts = [
            { command: 'F2', action: 'Quick open a file' },
            { command: 'F1', action: 'Show all commands' },
            { command: 'Ctrl|⌘ + Space', action: 'Trigger suggestion' },
            { command: 'Ctrl|⌘ Right Arrow', action: 'Split editor' },
            { command: 'Ctrl|⌘ + Enter', action: 'Open preview' },
            { command: 'Ctrl|⌘ + Alt + Enter', action: 'Hide preview' },
            { command: 'Ctrl|⌘ + S', action: 'Save focused file' },
            { command: 'Ctrl|⌘ + Alt + S', action: 'Save all files' },
            { command: 'Ctrl|⌘ + K', action: 'Close focused file' },
            { command: 'Ctrl|⌘ + Alt + K', action: 'Close all files' },
        ];
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasGroup = false;
        this.groups = this.editor.listGroups();
        this.editor.onGroupChanged.subscribe(function (groups) {
            _this.groups = groups;
            _this.hasGroup = groups.length > 0;
            _this.changes.detectChanges();
        });
    };
    WorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/editor/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.scss */ "./src/app/editor/workspace/workspace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_2__["OpenerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>{{data?.title}}</h4>\n<p mat-dialog-content>{{data?.message}}</p>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\">{{data?.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data?.noTitle}}</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialog, data, changes) {
        this.dialog = dialog;
        this.data = data;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
        setTimeout(function () {
            changes.detectChanges();
        }, 1);
    }
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/shared/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/app/shared/components/confirm/confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/empty-state/empty-state.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='empty_state'>\n    <mat-icon *ngIf='icon != undefined'>{{icon}}</mat-icon>\n    <h2 class='empty_state__title'>{{title}}</h2>\n    <h4 class='empty_state__subtitle'*ngIf='subtitle != undefined'>{{subtitle}}</h4>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/empty-state/empty-state.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty_state {\n  pointer-events: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.empty_state mat-icon {\n  width: 64px;\n  height: 64px;\n  font-size: 64px; }\n\n.empty_state__title {\n  font-size: 24px;\n  text-align: center; }\n\n.empty_state__subtitle {\n  font-size: 16px;\n  max-width: 600px;\n  margin: 8px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW1wdHktc3RhdGUvZW1wdHktc3RhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBb0I7RUFDdkIsbUJBQWtCO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUix5Q0FBK0I7VUFBL0IsaUNBQStCO0VBQy9CLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLHdCQUF1QixFQUMxQjs7QUFHRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWUsRUFFbEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXB0eV9zdGF0ZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuICBcbi5lbXB0eV9zdGF0ZSBtYXQtaWNvbiB7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgIC8vIGNvbG9yOiAjRTA1MDU3O1xufVxuXG4uZW1wdHlfc3RhdGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZW1wdHlfc3RhdGVfX3N1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/empty-state/empty-state.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/empty-state/empty-state.component.ts ***!
  \************************************************************************/
/*! exports provided: EmptyStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStateComponent", function() { return EmptyStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyStateComponent = /** @class */ (function () {
    function EmptyStateComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmptyStateComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmptyStateComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], EmptyStateComponent.prototype, "icon", void 0);
    EmptyStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-state',
            template: __webpack_require__(/*! ./empty-state.component.html */ "./src/app/shared/components/empty-state/empty-state.component.html"),
            styles: [__webpack_require__(/*! ./empty-state.component.scss */ "./src/app/shared/components/empty-state/empty-state.component.scss")]
        })
    ], EmptyStateComponent);
    return EmptyStateComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 mat-dialog-title>{{data?.title}}</h4>\n<div mat-dialog-content>\n\t<p [innerHTML]='data?.message'></p>\n\t<form>\n\t\t<mat-form-field class='full-width' *ngFor='let field of data.fields'>\n\t\t\t<input matInput name='field.value' autocomplete=\"on\" [type]='field.type' [placeholder]=\"field?.placeholder\" [(ngModel)]='field.value' >\n\t\t</mat-form-field>\n\t</form>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"data\">{{data.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data.noTitle}}</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.ts ***!
  \**************************************************************/
/*! exports provided: PromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptComponent", function() { return PromptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PromptComponent = /** @class */ (function () {
    function PromptComponent(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
    PromptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prompt',
            template: __webpack_require__(/*! ./prompt.component.html */ "./src/app/shared/components/prompt/prompt.component.html"),
            styles: [__webpack_require__(/*! ./prompt.component.scss */ "./src/app/shared/components/prompt/prompt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PromptComponent);
    return PromptComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/autofocus.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/autofocus.directive.ts ***!
  \**********************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.nativeElement.focus();
        }, 500);
    };
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[autofocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/draggable.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/draggable.directive.ts ***!
  \**********************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el) {
        this.el = el;
        this.dragCondition = true;
    }
    DraggableDirective.prototype.ngAfterContentInit = function () {
        var self = this;
        var el = this.el.nativeElement;
        el.draggable = true;
        el.addEventListener('dragstart', function (e) {
            if (!self.dragCondition) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('dnd-drag');
            return false;
        }, false);
        el.addEventListener('dragend', function (e) {
            this.classList.remove('dnd-drag');
            return false;
        }, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DraggableDirective.prototype, "dragCondition", void 0);
    DraggableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[draggable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/droppable.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/droppable.directive.ts ***!
  \**********************************************************/
/*! exports provided: DroppableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppableDirective", function() { return DroppableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el) {
        this.el = el;
        this.dropCondition = true;
        this.handleDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DroppableDirective.prototype.ngAfterContentInit = function () {
        if (!this.dropCondition) {
            return;
        }
        var self = this;
        var el = this.el.nativeElement;
        el.draggable = true;
        el.addEventListener('dragover', function (e) {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.classList.add('dnd-over');
            return false;
        }, false);
        el.addEventListener('dragenter', function (e) {
            this.classList.add('dnd-over');
            return false;
        }, false);
        el.addEventListener('dragleave', function (e) {
            this.classList.remove('dnd-over');
            return false;
        }, false);
        el.addEventListener('drop', function (e) {
            e.preventDefault();
            var file;
            if (e.dataTransfer.items.length > 0) {
                for (var i = 0; i < e.dataTransfer.items.length; i++) {
                    var item = e.dataTransfer.items[i];
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
            this.classList.remove('dnd-over');
            var destination = this.id;
            var source = e.dataTransfer.getData('Text');
            if (source || file) {
                self.handleDrop.emit({ src: source, file: file, dst: destination });
            }
            return false;
        }, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DroppableDirective.prototype, "dropCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DroppableDirective.prototype, "handleDrop", void 0);
    DroppableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[droppable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DroppableDirective);
    return DroppableDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/run-scripts.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/run-scripts.directive.ts ***!
  \************************************************************/
/*! exports provided: RunScriptsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunScriptsDirective", function() { return RunScriptsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// tslint:disable-next-line: directive-selector
var RunScriptsDirective = /** @class */ (function () {
    function RunScriptsDirective(elementRef) {
        this.elementRef = elementRef;
    }
    RunScriptsDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.reinsertScripts();
        });
    };
    RunScriptsDirective.prototype.reinsertScripts = function () {
        var scripts = this.elementRef.nativeElement.getElementsByTagName('script');
        var scriptsInitialLength = scripts.length;
        for (var i = 0; i < scriptsInitialLength; i++) {
            var script = scripts[i];
            var scriptCopy = document.createElement('script');
            scriptCopy.type = script.type ? script.type : 'text/javascript';
            if (script.innerHTML) {
                scriptCopy.innerHTML = "" + script.innerHTML;
            }
            else if (script.src) {
                scriptCopy.src = script.src;
            }
            scriptCopy.async = false;
            script.parentNode.replaceChild(scriptCopy, script);
        }
    };
    RunScriptsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[runScripts]', exportAs: 'runScripts' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], RunScriptsDirective);
    return RunScriptsDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/assert.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/assert.model.ts ***!
  \***********************************************/
/*! exports provided: DISALLOWED_CHAR, requireNonNull, assert, checkName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISALLOWED_CHAR", function() { return DISALLOWED_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireNonNull", function() { return requireNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkName", function() { return checkName; });
var DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];
/**
 * Throws an exception if obj is null or empty (expected for boolean and number)
 * @param obj - the object to evaluate
 * @param message - an optional error message
 * @return the object itself.
 */
function requireNonNull(obj, message) {
    if (!obj && typeof (obj) !== 'boolean' && typeof (obj) !== 'number') {
        message = message ? message : 'should not be null or empty';
        throw new TypeError(message);
    }
    return obj;
}
/**
 * Throws an exception if condition if false.
 * @param condition - the condition
 * @param message - an optional error message
 * @return true if ther
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
    return true;
}
/**
 * Checks if name can be used a file name.
 * @param name the name to evaluate
 * @return true else throw an exception
 */
function checkName(name) {
    if (!name) {
        throw new TypeError('a non empty name should be provided');
    }
    if (!DISALLOWED_CHAR.every(function (e) { return !name.includes(e); })) {
        throw new Error(name + 'should not contains any of ' + DISALLOWED_CHAR);
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/models/paths.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/paths.model.ts ***!
  \**********************************************/
/*! exports provided: basename, dirname, extname, findIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extname", function() { return extname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIcon", function() { return findIcon; });
var ICONS_MAP = {
    'js': 'fab fa-js-square',
    'py': 'fab fa-python',
    'pdf': 'fas fa-file-pdf',
    'css': 'fab fa-css3',
    'scss': 'fab fa-css3',
    'html': 'fab fa-html5',
    'csv': 'fas fa-file-csv',
    'xls': 'fas fa-file-pdf',
    'java': 'fab fa-java',
    'png': 'fas fa-file-image',
    'jpg': 'fas fa-file-image',
    'svg': 'fas fa-file-image',
};
/**
 * Returns the last portion of a path. Similar to the Unix basename command.
 * Often used to extract the file name from a fully qualified path.
 * @param the path to evaluate.
 */
function basename(path) {
    if (!path) {
        return path;
    }
    return path.replace(/\\/g, '/').replace(/.*\//, '');
}
/**
 * Returns the directory name of a path. Similar to the Unix dirname command.
 * @param path the path to evaluate
 */
function dirname(path) {
    if (!path) {
        return path;
    }
    return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
}
/**
 * Returns the extension of the path, from the last '.' to end of string in the last portion of the path.
 * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
 * @param path the path to evaluate
 */
function extname(path) {
    var base = basename(path);
    if (!base) {
        return base;
    }
    if (base.startsWith('.')) {
        return '';
    }
    var dotIndex = base.lastIndexOf('.');
    if (dotIndex === -1) {
        return '';
    }
    return base.substring(dotIndex + 1).toLowerCase();
}
/**
 * Finds the font awesome icon representing the most the given path.
 * If an icon is not found, fallback will be returned.
 * @param path the path to evaluate
 * @param fallback the icon to return if the function cannot find an icon.
 */
function findIcon(path, fallback) {
    var ext = extname(path);
    if (ext in ICONS_MAP) {
        return ICONS_MAP[ext];
    }
    return fallback;
}


/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
/* harmony import */ var _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../pipes/sanitize-html.pipe */ "./src/app/shared/pipes/sanitize-html.pipe.ts");
/* harmony import */ var _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../directives/draggable.directive */ "./src/app/shared/directives/draggable.directive.ts");
/* harmony import */ var _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../directives/droppable.directive */ "./src/app/shared/directives/droppable.directive.ts");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../components/empty-state/empty-state.component */ "./src/app/shared/components/empty-state/empty-state.component.ts");
/* harmony import */ var _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../pipes/sanitize-url.pipe */ "./src/app/shared/pipes/sanitize-url.pipe.ts");

/* angular core  */






/* material design  */






























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_33__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmComponent"],
                _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_35__["EmptyStateComponent"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_31__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_32__["DroppableDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_28__["AutofocusDirective"],
                _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["SanitizeHtmlPipe"],
                _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_36__["SanitizeResourceUrlPipe"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_30__["RunScriptsDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken'
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                }),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_27__["ToastrModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_33__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmComponent"],
                _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_35__["EmptyStateComponent"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_31__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_32__["DroppableDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_28__["AutofocusDirective"],
                _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["SanitizeHtmlPipe"],
                _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_36__["SanitizeResourceUrlPipe"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_30__["RunScriptsDirective"],
            ],
            entryComponents: [
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_33__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/sanitize-html.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/sanitize-html.pipe.ts ***!
  \****************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this.sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/sanitize-url.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/sanitize-url.pipe.ts ***!
  \***************************************************/
/*! exports provided: SanitizeResourceUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeResourceUrlPipe", function() { return SanitizeResourceUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizeResourceUrlPipe = /** @class */ (function () {
    function SanitizeResourceUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeResourceUrlPipe.prototype.transform = function (v) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(v);
    };
    SanitizeResourceUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeResourceUrl' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeResourceUrlPipe);
    return SanitizeResourceUrlPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: AbstractNotificationService, NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNotificationService", function() { return AbstractNotificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AbstractNotificationService = /** @class */ (function () {
    function AbstractNotificationService() {
        this.onLogAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onToggleDebuggingArea = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.size = 0;
    }
    AbstractNotificationService.prototype.clear = function () {
        this.size = 0;
    };
    AbstractNotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbstractNotificationService);
    return AbstractNotificationService;
}());

var NotificationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotificationService, _super);
    function NotificationService(toastr, dialog) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        _this.dialog = dialog;
        return _this;
    }
    NotificationService.prototype.success = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.success(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    };
    NotificationService.prototype.warning = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.warning(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    };
    NotificationService.prototype.error = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.error(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    };
    NotificationService.prototype.prompt = function (options, completion) {
        this.promptAsync(options).then(function (data) {
            completion(data);
        });
    };
    NotificationService.prototype.promptAsync = function (options) {
        var ref = this.dialog.open(_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_5__["PromptComponent"], {
            hasBackdrop: true,
            disableClose: true,
            data: options,
        });
        return new Promise(function (resolve) {
            var subscription;
            subscription = ref.afterClosed().subscribe(function (value) {
                subscription.unsubscribe();
                resolve(value);
            });
        });
    };
    NotificationService.prototype.confirm = function (options, confirm, cancel) {
        this.confirmAsync(options).then(function (success) {
            if (success && confirm) {
                confirm();
            }
            else if (!success && cancel) {
                cancel();
            }
        });
    };
    NotificationService.prototype.confirmAsync = function (options) {
        var ref = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
            hasBackdrop: true,
            disableClose: true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise(function (resolve) {
            var subscription;
            subscription = ref.afterClosed().subscribe(function (value) {
                subscription.unsubscribe();
                resolve(value);
            });
        });
    };
    NotificationService.prototype.logInfo = function (message, stackTrace) {
        if (stackTrace === void 0) { stackTrace = false; }
        this.log(message, 'info', stackTrace);
    };
    NotificationService.prototype.logWarning = function (message, stackTrace) {
        if (stackTrace === void 0) { stackTrace = false; }
        this.log(message, 'warning', stackTrace);
    };
    NotificationService.prototype.logError = function (message, stackTrace) {
        if (stackTrace === void 0) { stackTrace = false; }
        this.log(message, 'error', stackTrace);
    };
    NotificationService.prototype.log = function (message, type, stackTrace) {
        if (stackTrace === void 0) { stackTrace = false; }
        var item = { message: this.parseMessage(message, stackTrace), type: type };
        this.onLogAdded.next(item);
        this.size++;
    };
    NotificationService.prototype.parseMessage = function (message, stackTrace) {
        var output = message;
        if (message instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpErrorResponse"]) {
            var error = message;
            output = error.error || error.message;
        }
        else {
            if (typeof message !== 'string') {
                output = message.error; // JavaScript Error Object
                if (!output) {
                    if (message.stack) {
                        var trace = stackTrace ? message.stack.split('\n').join('<br/>') : '';
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
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], NotificationService);
    return NotificationService;
}(AbstractNotificationService));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mamadou/Desktop/PL/premierlangage/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map