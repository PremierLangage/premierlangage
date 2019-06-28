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



var routes = [];
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

module.exports = "<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<ul class='console__content' #container>\n    <h4 *ngIf='empty'>Nothing to display</h4>\n    <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n        <li class='log log--{{item.type}}'>\n        <ng-container [ngSwitch]=\"item.type\">\n            <mat-icon *ngSwitchCase=\"'info'\" mat-list-icon class='log-icon'>info</mat-icon>\n            <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='log-icon'>warning</mat-icon>\n            <mat-icon *ngSwitchDefault mat-list-icon class='log-icon'>error</mat-icon>\n        </ng-container>\n        <p class='log-content' [innerHTML]='item.message | trustHtml'></p>\n        </li>\n        <mat-divider *ngIf='!last'></mat-divider>\n    </ng-container>\n</ul>\n"

/***/ }),

/***/ "./src/app/editor/debugging/console/console.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/debugging/console/console.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".console__content {\n  height: 100%; }\n\n.log {\n  position: relative;\n  list-style-type: none;\n  list-style-type: none;\n  display: flex;\n  align-items: baseline;\n  padding: 8px; }\n\n.log .log-icon {\n    position: absolute; }\n\n.log--info .log-icon {\n  color: #009688; }\n\n.log--warning .log-icon {\n  color: #FFEB3B; }\n\n.log--error .log-icon {\n  color: #F44336; }\n\n.log-content {\n  padding: 0 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvZGVidWdnaW5nL2NvbnNvbGUvY29uc29sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsYUFBWSxFQUlmOztBQVZEO0lBUVEsbUJBQWtCLEVBQ3JCOztBQUdMO0VBRVEsZUFBYyxFQUNqQjs7QUFHTDtFQUVRLGVBQWMsRUFDakI7O0FBR0w7RUFFUSxlQUFhLEVBQ2hCOztBQUdMO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZGVidWdnaW5nL2NvbnNvbGUvY29uc29sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zb2xlX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICAubG9nLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxufVxuXG4ubG9nLS1pbmZvIHtcbiAgICAubG9nLWljb24ge1xuICAgICAgICBjb2xvcjogIzAwOTY4ODtcbiAgICB9XG59XG5cbi5sb2ctLXdhcm5pbmcge1xuICAgIC5sb2ctaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjRkZFQjNCO1xuICAgIH1cbn1cblxuLmxvZy0tZXJyb3Ige1xuICAgICAgLmxvZy1pY29uIHtcbiAgICAgICAgY29sb3I6I0Y0NDMzNjtcbiAgICB9XG59XG5cbi5sb2ctY29udGVudCB7XG4gICAgcGFkZGluZzogMCAzMnB4O1xufVxuIl19 */"

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
        this.subscriptions = [];
        this.items = [];
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empty = true;
        this.subscriptions.push(this.notification.logAdded.subscribe(function (message) {
            _this.empty = false;
            _this.items.push(message);
            _this.scrollBottom();
        }));
    };
    ConsoleComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
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

module.exports = ".host {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  background-color: white; }\n\n.tab-item {\n  background: transparent; }\n\n.debugging__content {\n  overflow: auto;\n  height: calc(100% - 36px);\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvZGVidWdnaW5nL2RlYnVnZ2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCwwQkFBeUI7RUFDekIsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2RlYnVnZ2luZy9kZWJ1Z2dpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGFiLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGVidWdnaW5nX19jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIHBhZGRpbmc6IDA7XG59Il19 */"

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
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation.service */ "./src/app/editor/navigation/navigation.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");




var DebuggingComponent = /** @class */ (function () {
    function DebuggingComponent(notification, navigation) {
        this.notification = notification;
        this.navigation = navigation;
        this.openedSize = 60;
        this.subscriptions = [];
        this.size = 0;
    }
    DebuggingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.navigation.debugging.subscribe(function () {
            if (_this.size < _this.openedSize) {
                _this.open();
            }
            else {
                _this.close();
            }
        }));
        this.subscriptions.push(this.notification.logAdded.subscribe(function () { return _this.open(); }));
    };
    DebuggingComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
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

module.exports = "<div class='editor-host'>\n  <div class='editor-host-container'>\n    <navigation class='navigation' #navigation></navigation>\n    <as-split direction=\"horizontal\" gutterSize='2' useTransition='true'>\n        <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]=\"navigation.size\" [ngSwitch]=\"navigation.index\">\n            <explorer *ngSwitchCase=\"0\" showHeader='true' remote=\"true\"></explorer>\n            <search *ngSwitchCase=\"1\"></search>\n            <git *ngSwitchCase=\"2\"></git>\n        </as-split-area>\n        <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]=\"100 - navigation.size\">\n            <as-split class='split' direction='vertical' gutterSize='2' useTransition='true' (dragEnd)='debugging.dragEnd($event)'>\n                <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]='100 - debugging.size'>\n                    <workspace class='workspace' #workspace></workspace>\n                </as-split-area>\n                <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]='debugging.size'>\n                    <debugging class='debugging' #debugging></debugging>\n                </as-split-area>\n            </as-split>\n            <quick-open (closed)='showQuickOpen = false' *ngIf='showQuickOpen'></quick-open>\n        </as-split-area>\n    </as-split>\n  </div>\n  <mat-progress-bar mode='indeterminate' color='warn' *ngIf='querying()'></mat-progress-bar>\n  <footer></footer>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-host {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-flow: column;\n  height: calc(100vh - var(--header-height));\n  color: #5a5a5a; }\n\n.editor-host-container {\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  flex: 1;\n  background-color: #F6F6F6; }\n\n.split {\n  position: relative;\n  height: 100%; }\n\n.split-area {\n  height: 100%;\n  position: relative;\n  overflow: hidden; }\n\n.navigation {\n  background: #333333;\n  width: 50px; }\n\n.navigation__content {\n  height: calc(100% - var(--tab-height));\n  margin: 0px;\n  padding: 0px;\n  overflow: auto;\n  background-color: transparent; }\n\n.tab-bar {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  height: var(--tab-height);\n  align-items: center;\n  overflow: hidden;\n  border-bottom: 1px solid #dee2e6 !important;\n  padding: 0px; }\n\n.tab-bar .tab-item {\n    display: inline-flex;\n    height: 100%;\n    align-items: center;\n    position: relative;\n    font-size: 14px;\n    color: #5a5a5a;\n    font-style: normal;\n    padding: 0px 12px;\n    cursor: pointer; }\n\n/* UTILS */\n\n.spacer {\n  flex-grow: 1; }\n\n.h100 {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFTO0VBQ1QsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQiwyQ0FBMEM7RUFDMUMsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixRQUFPO0VBQ1AsMEJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLFlBQVcsRUFDZDs7QUFFRDtFQUNJLHVDQUFzQztFQUN0QyxZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWM7RUFDZCw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQiw0Q0FBMEM7RUFDMUMsYUFBWSxFQWFmOztBQXJCRDtJQVdRLHFCQUFvQjtJQUNwQixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixnQkFBZTtJQUNmLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2xCOztBQUdMLFdBQVc7O0FBQ1g7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1ob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5lZGl0b3ItaG9zdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjZGNkY2O1xufVxuXG4uc3BsaXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcGxpdC1hcmVhIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubmF2aWdhdGlvbl9fY29udGVudCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10YWItaGVpZ2h0KSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFiLWJhciB7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IHZhcigtLXRhYi1oZWlnaHQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuXG4gICAgLnRhYi1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNWE1YTVhO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4vKiBVVElMUyAqL1xuLnNwYWNlciB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uaDEwMCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbiJdfQ== */"

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
/* harmony import */ var _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/core/task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var EditorComponent = /** @class */ (function () {
    function EditorComponent(task, resources, notification) {
        this.task = task;
        this.resources = resources;
        this.notification = notification;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resources.refresh().catch(function (error) {
            _this.notification.logError(error);
        });
    };
    EditorComponent.prototype.querying = function () {
        return this.task.running;
    };
    EditorComponent.prototype.beforeunload = function ($event) {
        if (!!this.resources.findPredicate(function (item) { return item.changed; })) { // the if is required
            $event.returnValue = true;
        }
    };
    EditorComponent.prototype.keypressed = function ($event) {
        if ($event.ctrlKey && $event.key === 'o') {
            $event.preventDefault();
            $event.stopPropagation();
            this.showQuickOpen = true;
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_3__["ResourceService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
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
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/editor/editor-routing.module.ts");
/* harmony import */ var _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debugging/debugging.component */ "./src/app/editor/debugging/debugging.component.ts");
/* harmony import */ var _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./debugging/console/console.component */ "./src/app/editor/debugging/console/console.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/editor/footer/footer.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/editor/navigation/navigation.component.ts");
/* harmony import */ var _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/explorer/explorer.component */ "./src/app/editor/navigation/explorer/explorer.component.ts");
/* harmony import */ var _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/search/search.component */ "./src/app/editor/navigation/search/search.component.ts");
/* harmony import */ var _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/git/git.component */ "./src/app/editor/navigation/git/git.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/editor/workspace/workspace.component.ts");
/* harmony import */ var _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workspace/code-editor/code-editor.component */ "./src/app/editor/workspace/code-editor/code-editor.component.ts");
/* harmony import */ var _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workspace/image-editor/image-editor.component */ "./src/app/editor/workspace/image-editor/image-editor.component.ts");
/* harmony import */ var _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workspace/preview-editor/preview-editor.component */ "./src/app/editor/workspace/preview-editor/preview-editor.component.ts");
/* harmony import */ var _workspace_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./workspace/welcome/welcome.component */ "./src/app/editor/workspace/welcome/welcome.component.ts");
/* harmony import */ var _workspace_setting_editor_setting_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./workspace/setting-editor/setting-editor.component */ "./src/app/editor/workspace/setting-editor/setting-editor.component.ts");
/* harmony import */ var _quick_open_quick_open_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quick-open/quick-open.component */ "./src/app/editor/quick-open/quick-open.component.ts");
/* harmony import */ var _shared_pipes_path_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/pipes/path.pipe */ "./src/app/editor/shared/pipes/path.pipe.ts");
/* harmony import */ var _shared_pipes_nicify_name_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/pipes/nicify-name.pipe */ "./src/app/editor/shared/pipes/nicify-name.pipe.ts");
/* harmony import */ var _shared_models_language_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/models/language.model */ "./src/app/editor/shared/models/language.model.ts");
/* harmony import */ var _shared_directives_resource_icon_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/directives/resource-icon.directive */ "./src/app/editor/shared/directives/resource-icon.directive.ts");


// https://www.npmjs.com/package/time-ago-pipe

// https://www.npmjs.com/package/angular-split

// https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0

// https://www.npmjs.com/package/angular2-markdown





/* DEBUGGING COMPONENTS */



/* NAVIGATION COMPONENTS */




/* WORKSPACE COMPONENTS */







/* PIPES */





var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shared_pipes_path_pipe__WEBPACK_IMPORTED_MODULE_24__["PathPipe"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_2__["TimeAgoPipe"],
                _shared_pipes_nicify_name_pipe__WEBPACK_IMPORTED_MODULE_25__["NicifyNamePipe"],
                _editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__["ExplorerComponent"],
                _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_16__["GitComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_10__["DebuggingComponent"],
                _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_11__["ConsoleComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_17__["WorkspaceComponent"],
                _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_18__["CodeEditorComponent"],
                _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_19__["ImageEditorComponent"],
                _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_20__["PreviewEditorComponent"],
                _workspace_setting_editor_setting_editor_component__WEBPACK_IMPORTED_MODULE_22__["SettingEditorComponent"],
                _workspace_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_21__["WelcomeComponent"],
                _quick_open_quick_open_component__WEBPACK_IMPORTED_MODULE_23__["QuickOpenComponent"],
                _shared_directives_resource_icon_directive__WEBPACK_IMPORTED_MODULE_27__["ResourceIconDirective"],
            ],
            imports: [
                _editor_routing_module__WEBPACK_IMPORTED_MODULE_9__["EditorRoutingModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_3__["AngularSplitModule"].forRoot(),
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"],
                angular2_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot(),
            ],
            exports: [
                _editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
            ],
            providers: [
                { provide: _shared_models_language_model__WEBPACK_IMPORTED_MODULE_26__["LANGUAGE_PROVIDERS"], multi: true, useClass: _shared_models_language_model__WEBPACK_IMPORTED_MODULE_26__["PremierLangage"] }
            ]
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

module.exports = "<ng-container *ngIf=\"inRepo()\">\n    <i class='repo-icon {{repoHost()}} fa-1x'></i> \n    <a class='repo-url' href=\"{{repoUrl()}}\" target=\"_blank\">{{repoUrl()}}</a> <i class='repo-branch'> - {{repoBranch()}} </i>\n</ng-container>\n<div class=\"spacer\"></div>\n<span *ngIf='cursor'>Ln {{cursor.lineNumber}}, Col {{cursor.column}}</span>\n<ng-container *ngIf='querying()'>\n    <mat-progress-spinner mode='indeterminate' color='warn' strokeWidth='2' diameter='16'></mat-progress-spinner> \n</ng-container>"

/***/ }),

/***/ "./src/app/editor/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 20px;\n  background-color: #2f77c2;\n  color: white;\n  font-size: 12px;\n  padding: 0 8px; }\n\na {\n  color: white; }\n\n.repo-icon {\n  margin: 0 8px; }\n\n.repo-url {\n  margin-right: 8px; }\n\n.task-name {\n  margin: 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWiwwQkFBd0I7RUFDeEIsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDsgICAgXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzJmNzdjMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xufVxuXG5hIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXBvLWljb24ge1xuICAgIG1hcmdpbjogMCA4cHg7XG59XG5cbi5yZXBvLXVybCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi50YXNrLW5hbWUge1xuICAgIG1hcmdpbjogMCA0cHg7XG59Il19 */"

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
    FooterComponent.prototype.querying = function () {
        return this.task.running;
    };
    FooterComponent.prototype.taskName = function () {
        return this.task.taskName;
    };
    FooterComponent.prototype.inRepo = function () {
        var s = this.resources.focused;
        return !!s && _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isRepo"](s);
    };
    FooterComponent.prototype.repoHost = function () {
        var s = this.resources.focused;
        return !!s && s.repo.host;
    };
    FooterComponent.prototype.repoUrl = function () {
        var s = this.resources.focused;
        return !!s && s.repo.url;
    };
    FooterComponent.prototype.repoBranch = function () {
        var s = this.resources.focused;
        return !!s && s.repo.branch;
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

module.exports = "<div class='tab-bar' *ngIf=\"showHeader\">\n    <span>EXPLORER</span>\n    <div class=\"spacer\"></div>\n    <div class='tab-item' (click)='didRefresh()' matTooltip='Refresh'>\n        <i class=\"fas fa-sync\"></i>\n    </div>\n</div>\n<app-tree class=\"navigation__content\" [nodes]=\"nodes\" (edited)=\"didEdit($event)\" (clicked)=\"didSelect($event)\">\n  <ng-container *treeNode=\"let node\">\n      <span class='node-label' [id]=\"node.id\" [draggable]=\"draggable(node)\" [dragData]=\"node.id\" [droppable]=\"droppable(node)\" (dropped)=\"didDropped($event)\">\n          <img [resourceIcon]=\"node.data\"/>\n          <span>{{ node.name }}</span>\n      </span>\n      <span class='node-option-group'>\n          <ng-container *ngFor='let option of options; let i = index'>\n              <span id=\"node-option-{{ i }}-{{ node.data.path }}\"\n                  class='node-option' [matTooltip]='option.label'\n                  (click)='option.action(node, $event)'\n                  *ngIf='option.enabled(node.data)'>\n                  <i [class]=\"option.icon\"></i>&nbsp;\n              </span>\n          </ng-container>\n      </span>\n  </ng-container>\n</app-tree>\n"

/***/ }),

/***/ "./src/app/editor/navigation/explorer/explorer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/editor/navigation/explorer/explorer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-bar {\n  font-size: 1rem;\n  margin: 0;\n  padding: 0 0 0 16px; }\n\n.tree-scroll {\n  height: 300px; }\n\n.mat-tree {\n  background-color: transparent;\n  padding: 0; }\n\n.node-content .node-label {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  overflow: hidden; }\n\n.node-content .node-option-group {\n  position: absolute;\n  right: 0;\n  visibility: hidden;\n  font-size: 14px; }\n\n.node-content .node-option-group .node-option {\n    cursor: pointer; }\n\n.node-content:hover .node-option-group {\n  visibility: visible; }\n\n.dnd-drag {\n  opacity: 0.5; }\n\n.dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9leHBsb3Jlci9leHBsb3Jlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULG9CQUFtQixFQUN0Qjs7QUFJRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDRSw4QkFBNkI7RUFDN0IsV0FBVSxFQUNYOztBQUdEO0VBRU0scUJBQW9CO0VBQ3BCLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixlQUFjO0VBQ2QsaUJBQWdCLEVBQ25COztBQVRIO0VBWU0sbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsZ0JBQWUsRUFJbEI7O0FBbkJIO0lBaUJVLGdCQUFlLEVBQ2xCOztBQWxCUDtFQXNCTSxvQkFBbUIsRUFDcEI7O0FBSUw7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSx1Q0FBc0M7RUFDdEMsa0NBQThCLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWJhciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xufVxuXG5cbi8vIFRPRE8gZml4XG4udHJlZS1zY3JvbGwge1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbi5ub2RlLWNvbnRlbnQge1xuICAubm9kZS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5ub2RlLW9wdGlvbi1ncm91cCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC5ub2RlLW9wdGlvbiB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICB9XG4gICY6aG92ZXIge1xuICAgIC5ub2RlLW9wdGlvbi1ncm91cCB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxufVxuXG4uZG5kLWRyYWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRuZC1vdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG59XG4iXX0= */"

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
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_core_pl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/core/pl.service */ "./src/app/editor/shared/services/core/pl.service.ts");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/tree/tree.component */ "./src/app/shared/components/tree/tree.component.ts");











var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(pl, editor, opener, resources, notification) {
        var _this = this;
        this.pl = pl;
        this.editor = editor;
        this.opener = opener;
        this.resources = resources;
        this.notification = notification;
        /** nodes options */
        this.options = [];
        this.nodes = [];
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canBeTested"], action: function (n, e) {
                    _this.optionTest(n, e);
                } },
            { icon: 'fas fa-play', label: 'Load', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canBeLoaded"], action: function (n, e) {
                    _this.optionLoad(n, e);
                } },
            { icon: 'fas fa-sync', label: 'Reload', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canBeReloaded"], action: function (n, e) {
                    _this.optionReload(n, e);
                } },
            { icon: 'far fa-file', label: 'New File', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canAddChild"], action: function (n, e) {
                    _this.optionAddFile(n, e);
                } },
            { icon: 'far fa-folder', label: 'New Folder', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canAddChild"], action: function (n, e) {
                    _this.optionAddFolder(n, e);
                } },
            { icon: 'far fa-edit', label: 'Rename', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canBeRenamed"], action: function (n, e) {
                    _this.optionRename(n, e);
                } },
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["canBeDeleted"], action: function (n, e) {
                    _this.optionDelete(n, e);
                } },
            { icon: 'fas fa-lock', label: 'Read Only', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isReadOnly"], action: function () { } },
            { icon: 'fas fa-download', label: 'Download', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isFolder"], action: function (n, e) {
                    _this.optionDownload(n, e);
                } },
        ];
    }
    Object.defineProperty(ExplorerComponent.prototype, "items", {
        /** the tree resources */
        set: function (items) {
            var _this = this;
            this.nodes = items.map(function (item) { return _this.transform(item); });
        },
        enumerable: true,
        configurable: true
    });
    ExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.remote) {
            this.items = this.resources.getAll();
            this.subscription = this.resources.changed.subscribe(function (data) {
                _this.items = data;
            });
        }
    };
    ExplorerComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Gets a value indicating whether the resource is draggrable
     * @param node the node.
     * 	@returns true only if the resource is not a root folder.
     */
    ExplorerComponent.prototype.draggable = function (node) {
        var resource = node.data;
        return !resource.opened && !_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isRoot"](resource) && resource.write;
    };
    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param node the node.
     * 	@returns true only if the resource is a folder.
     */
    ExplorerComponent.prototype.droppable = function (node) {
        var resource = node.data;
        return _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isFolder"](resource) && resource.write;
    };
    /**
     * Handles refresh button click by retrieving resources from the server.
     */
    ExplorerComponent.prototype.didRefresh = function () {
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
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param e the node.
     */
    ExplorerComponent.prototype.didEdit = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var node, event, resource, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        node = e.node, event = e.event;
                        resource = node.data;
                        if (!(event.keyCode === 27)) return [3 /*break*/, 1];
                        this.tree.endEditing(false);
                        return [3 /*break*/, 8];
                    case 1:
                        if (!(event.type === 'blur' || event.keyCode === 13)) return [3 /*break*/, 8];
                        if (!node.name) {
                            this.tree.endEditing(false);
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 8]);
                        if (!node.isRenaming) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.resources.rename(resource, node.name)];
                    case 3:
                        _a.sent();
                        this.tree.endEditing(true);
                        return [3 /*break*/, 6];
                    case 4:
                        resource.name = node.name;
                        return [4 /*yield*/, this.resources.create(resource)];
                    case 5:
                        _a.sent();
                        this.tree.endEditing(true);
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        this.tree.endEditing(false);
                        this.notification.logError(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handles click on a tree node.
     * @param e the node.
     */
    ExplorerComponent.prototype.didSelect = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resource = e.node.data;
                        return [4 /*yield*/, this.opener.open(resource.path)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will save the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param e the dropped data.
     */
    ExplorerComponent.prototype.didDropped = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var srcPath, dstPath, srcName, src, dst, options, confirmed, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        srcPath = e.src || e.file.name;
                        dstPath = e.dst;
                        if (srcPath === dstPath) {
                            return [2 /*return*/];
                        }
                        srcName = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__["basename"])(srcPath);
                        src = this.resources.find(srcPath);
                        dst = this.resources.find(dstPath);
                        if (!(src && src.parent !== e.dst)) return [3 /*break*/, 6];
                        options = {
                            title: "Are you sure you want to move '" + srcName + "' to '" + dst.name + "'?",
                            okTitle: 'Move',
                            noTitle: 'Cancel'
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.notification.confirmAsync(options)];
                    case 2:
                        confirmed = _a.sent();
                        if (!confirmed) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.resources.move(src || e.file, dst)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.notification.logError(error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExplorerComponent.prototype.optionDelete = function (node, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource, confirmed, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        event.stopPropagation();
                        resource = node.data;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.notification.confirmAsync({
                                title: 'Are you sure you want to delete \'' + resource.name + '\'?',
                                okTitle: 'Delete',
                                noTitle: 'Cancel'
                            })];
                    case 2:
                        confirmed = _a.sent();
                        if (!confirmed) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.resources.delete(resource)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _a.sent();
                        this.notification.logError(error_4);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ExplorerComponent.prototype.optionDownload = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL("/filebrowser/option?name=download_resource&path=" + node.id);
    };
    ExplorerComponent.prototype.optionAddFile = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        var resource = node.data;
        this.tree.createNode(node, this.transform(Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["createResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].File)));
    };
    ExplorerComponent.prototype.optionAddFolder = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        var resource = node.data;
        this.tree.createNode(node, this.transform(Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["createResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].Folder)));
    };
    ExplorerComponent.prototype.optionLoad = function (node, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var resource = node.data;
        this.pl.load(resource).then(function (response) {
            _this.notification.logInfo(response);
        }).catch(function (error) {
            _this.notification.logError(error);
        });
    };
    ExplorerComponent.prototype.optionReload = function (node, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var resource = node.data;
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
    ExplorerComponent.prototype.optionRename = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        var resource = node.data;
        resource.renaming = true;
        resource.creating = false;
        this.tree.renameNode(node);
    };
    ExplorerComponent.prototype.optionTest = function (node, event) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL('/filebrowser/option?name=test_pl&path=' + node.id);
    };
    ExplorerComponent.prototype.transform = function (item) {
        var _this = this;
        var node = {
            data: item,
            id: item.path,
            name: item.name,
            isExpanded: item.expanded,
            children: (item.children || []).map(function (data) { return _this.transform(data); })
        };
        return node;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], ExplorerComponent.prototype, "items", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExplorerComponent.prototype, "showHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExplorerComponent.prototype, "remote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_10__["TreeComponent"])
    ], ExplorerComponent.prototype, "tree", void 0);
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/editor/navigation/explorer/explorer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./explorer.component.scss */ "./src/app/editor/navigation/explorer/explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_pl_service__WEBPACK_IMPORTED_MODULE_5__["PLService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_6__["OpenerService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_8__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]])
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

module.exports = "<mat-progress-bar mode=\"query\" *ngIf='runningTask()'></mat-progress-bar>\n<div class='navigation__content'>\n  <mat-accordion class='accordion' multi='true'>\n    <mat-expansion-panel class='repositories mat-elevation-z0' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          REPOSITORIES\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-container *ngFor=\"let repo of repositories(); trackBy trackRepo\">\n          <div class='line pointer' [ngClass]='{ selected: isSelection(repo) }' (click)='changeSelection(repo)' [matTooltip]='repo.url'> \n              <span class='line-title' [matBadgeHidden]='repo.count === 0' [matBadge]=\"repo.count\" matBadgePosition=\"after\">{{repo.name}}</span>\n              <div class='spacer'></div>\n              <span class='line-subtitle'>{{repo.branch}}</span>\n              <span [matMenuTriggerFor]=\"options\">\n                  <i class='fas fa-ellipsis-h'></i>\n              </span>\n          </div>\n          <mat-menu #options=\"matMenu\">\n              <button mat-menu-item (click)='add(repo)' matTooltip='Add to git index'>Git Add</button>\n              <button mat-menu-item (click)='push(repo)' matTooltip='Push local changes to remote'>Git Push</button>\n              <button mat-menu-item (click)='pull(repo)' matTooltip='Pull changes from remote'>Git Pull</button>\n              <button mat-menu-item (click)='status(repo)' matTooltip='Show changes'>Git Status</button>\n              <button mat-menu-item (click)='checkout(repo)' matTooltip='Reset the repository to the last commit'>Git Checkout</button>\n          </mat-menu>\n      </ng-container>\n      <br/>\n      <button class='clone' mat-stroked-button matTooltip='Clone' (click)='clone()'>+</button>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel class='changes mat-elevation-z0' *ngIf='selection' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          CHANGES IN {{selection.name | uppercase}}\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <mat-form-field class='commit'>\n          <input matInput placeholder=\"Press enter to commit\" (keydown)='commit($event)' [(ngModel)]='commitMessage'>\n      </mat-form-field>\n        <span *ngIf='selection.count === 0'>nothing to commit, working tree clean</span>\n        <ng-container *ngFor=\"let change of selection.changes; trackBy trackChange\">\n            <div class='line' [ngClass]='{clickable: canOpen(change)}' [matTooltip]=\"change.path|path\"> \n                <span class='line-title' [matBadge]=\"change.type\" matBadgePosition=\"after\" (click)='open(change)'>{{change.name}}</span>\n                <div class='spacer'></div>\n                <ng-container *ngIf='hasOption(change)'>\n                    <span class='pointer' [matMenuTriggerFor]=\"menu\">\n                        <i class='fas fa-ellipsis-h'></i>\n                      </span>\n                </ng-container>\n            </div>\n            <mat-menu #menu=\"matMenu\">\n              <ng-container *ngFor='let option of options'>\n                  <button *ngIf='option.enabled(change)' (click)='option.action(change)' mat-menu-item>\n                    {{option.label}}\n                  </button>\n              </ng-container>\n            </mat-menu>\n        </ng-container>\n    </mat-expansion-panel>    \n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/navigation/git/git.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/editor/navigation/git/git.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation__content {\n  height: 100%;\n  overflow: auto; }\n\n.mat-accordion .mat-expansion-panel {\n  background-color: transparent; }\n\n.line {\n  display: flex;\n  height: 32px;\n  align-items: center;\n  padding-right: 8px;\n  overflow: visible; }\n\n.line.selected {\n    border-right: 1px solid; }\n\n.line.clickable .line-title {\n    cursor: pointer; }\n\n.line-title {\n  font-size: 1em;\n  margin-right: 8px; }\n\n.line-title.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n    right: -30px; }\n\n.line-title.mat-badge-medium.mat-badge-above .mat-badge-content {\n    top: 0; }\n\n.line-subtitle {\n  margin-right: 8px; }\n\n.commit, .clone {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9naXQvZ2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsa0JBQWlCLEVBUXBCOztBQWJEO0lBUVEsd0JBQXVCLEVBQzFCOztBQVRMO0lBV1EsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBU3BCOztBQVhEO0lBS1EsYUFBWSxFQUNmOztBQU5MO0lBU1EsT0FBTSxFQUNUOztBQUdMO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vZ2l0L2dpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgIH1cbiAgICAmLmNsaWNrYWJsZSAubGluZS10aXRsZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5saW5lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBcbiAgICAmLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG59XG5cbi5saW5lLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNvbW1pdCwgLmNsb25lIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuIl19 */"

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
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");








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
            var fields, options, response, login, password;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fields = [
                            { type: 'text', placeholder: 'Login', required: false, value: '' },
                            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
                        ];
                        options = {
                            title: 'Push',
                            fields: fields
                        };
                        return [4 /*yield*/, this.notification.promptAsync(options)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            login = response.fields[0].value;
                            password = response.fields[1].value;
                            return [2 /*return*/, this.git.push(item, login, password)];
                        }
                        return [2 /*return*/, false];
                }
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
                        if (resource && Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["isFile"])(resource)) {
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
                        if (!!!this.resources.findPredicate(function (item) { return item.changed; })) return [3 /*break*/, 4];
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
                        return [4 /*yield*/, this.git.clone(this.resources.home, url, username, password)];
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
                        _this.selection.changes = _this.selection.changes.filter(function (e) { return !e.type.includes('M'); });
                    }
                });
            }
            else {
                this.notification.logError('commit message is required');
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

module.exports = "<img class='navigation-icon' src='static/filebrowser/app/assets/icons/navigation/explorer.svg' matTooltip=\"Explorer\" (click)='didTapExplorer()'/>\n<img class='navigation-icon' src='static/filebrowser/app/assets/icons/navigation/search.svg' matTooltip=\"Search\" (click)='didTapSearch()'/>\n<div [matBadge]=\"gitBadge()\" matTooltip=\"Git\">\n    <img class='navigation-icon' src='static/filebrowser/app/assets/icons/navigation/git.svg' (click)='didTapGit()'/>\n</div>\n<div [matBadge]=\"consoleBadge()\" matTooltip=\"Console\">\n    <div class='navigation-icon'(click)='didTapConsole()'>\n        <i class='fas fa-info'></i>\n    </div>\n</div>\n<div class='spacer'></div>\n<img class='navigation-icon' src='static/filebrowser/app/assets/icons/navigation/settings.svg'  matTooltip=\"Settings\" (click)='didTapSettings()'/>\n"

/***/ }),

/***/ "./src/app/editor/navigation/navigation.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/editor/navigation/navigation.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 0 0 0;\n  min-width: 50px; }\n\n.navigation-icon {\n  width: 36px;\n  height: 36px;\n  margin-bottom: 24px;\n  cursor: pointer;\n  overflow: visible; }\n\n.fas {\n  width: 36px;\n  height: 36px;\n  color: white;\n  font-size: 36px;\n  text-align: center; }\n\n.mat-badge-content {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFDZixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xuICAgIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm5hdmlnYXRpb24taWNvbiB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uZmFzIHtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudCAge1xuICAgIHotaW5kZXg6IDE7XG59XG4iXX0= */"

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
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.service */ "./src/app/editor/navigation/navigation.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(git, resources, navigation, notification) {
        this.git = git;
        this.resources = resources;
        this.navigation = navigation;
        this.notification = notification;
        this.size = 25;
        this.index = 0;
    }
    NavigationComponent.prototype.didTapButton = function (index) {
        if (index === this.index) {
            this.size = this.size === 25 ? 0 : 25;
        }
        this.index = index;
    };
    NavigationComponent.prototype.didTapExplorer = function () {
        this.didTapButton(0);
    };
    NavigationComponent.prototype.didTapSearch = function () {
        this.didTapButton(1);
    };
    NavigationComponent.prototype.didTapGit = function () {
        this.didTapButton(2);
    };
    NavigationComponent.prototype.didTapConsole = function () {
        this.navigation.debugging.next();
    };
    NavigationComponent.prototype.didTapSettings = function () {
        this.navigation.settings.next();
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
            _navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/editor/navigation/navigation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/navigation/navigation.service.ts ***!
  \*********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.debugging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.settings = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <div class='tab-bar border-bottom'>\n        <span>SEARCH</span>\n        <div class=\"spacer\"></div>\n    </div>\n    <mat-progress-bar mode='indeterminate' color='warn' *ngIf='querying'></mat-progress-bar>\n    <div class=\"navigation__content\">\n        <mat-form-field class='search'>\n          <input autoFocus autocomplete=\"off\" matInput placeholder=\"Press Enter to search\" (keydown)='search($event)' [(ngModel)]='query'>\n        </mat-form-field>\n        <ng-container>\n            <span class='result'>{{size}} result(s)</span>\n        </ng-container>\n        <explorer [items]='entries'></explorer>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation__content {\n  padding: 0 8px;\n  height: calc(100% - 36px);\n  overflow: auto; }\n\n.search {\n  width: 90%;\n  margin: 0 16px; }\n\n.result {\n  padding: 0 16px;\n  font-size: 1.1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYztFQUNkLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvbmF2aWdhdGlvbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb25fX2NvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zZWFyY2gge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5yZXN1bHQge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBmb250LXNpemU6IDEuMTtcbn0iXX0= */"

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
        this.query = '';
        this.size = 0;
        this.empty = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (event) {
        var _this = this;
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this.querying = true;
            this.query = this.query.trim().toLocaleLowerCase();
            if (this.query) {
                this.entries = this.editor.findAll((function (e) {
                    return e.type === _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].File && e.path.toLocaleLowerCase().includes(_this.query);
                }));
                this.size = this.entries.length;
                this.empty = this.size === 0;
            }
            else {
                this.size = 0;
                this.empty = true;
                this.entries = [];
            }
            this.querying = false;
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

/***/ "./src/app/editor/quick-open/quick-open.component.html":
/*!*************************************************************!*\
  !*** ./src/app/editor/quick-open/quick-open.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='editor-overlay-quickOpenWidget' #quickOpen>\n    <mat-form-field>\n        <input type=\"text\" placeholder=\"Quick Open\" matInput [matAutocomplete]=\"auto\" autoFocus (blur)='didClose()' [formControl]=\"form\">\n    </mat-form-field>\n    <mat-autocomplete autoFocus #auto=\"matAutocomplete\" (optionSelected)='didItemSelected($event)' >\n        <mat-option *ngFor=\"let entry of $entries | async\" [value]=\"entry\">\n            <img [resourceIcon]=\"entry\"/><span class='entry-name'>{{entry.name}}</span> - <span class='entry-path'>{{entry.path|path}}</span>\n        </mat-option>\n    </mat-autocomplete>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/quick-open/quick-open.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/editor/quick-open/quick-open.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editor-overlay-quickOpenWidget {\n  z-index: 100000;\n  left: 0;\n  right: 0;\n  width: 40%;\n  margin: auto;\n  position: absolute;\n  top: 36px;\n  background-color: white;\n  padding: 0 4px; }\n  #editor-overlay-quickOpenWidget mat-form-field {\n    width: 100%; }\n  .entry-icon {\n  font-size: 14px; }\n  .entry-name {\n  font-size: 14px; }\n  .entry-path {\n  font-size: 10px; }\n  div.mat-autocomplete-panel {\n  height: auto;\n  max-height: 400px;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3IvcXVpY2stb3Blbi9xdWljay1vcGVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixRQUFPO0VBQ1AsU0FBUTtFQUNSLFdBQVU7RUFDVixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCx3QkFBdUI7RUFDdkIsZUFBYyxFQUlqQjtFQWJEO0lBV1EsWUFBVyxFQUNkO0VBR0w7RUFDSSxnQkFBZSxFQUNsQjtFQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7RUFFRDtFQUNJLGdCQUFlLEVBQ2xCO0VBRUQ7RUFDSSxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9xdWljay1vcGVuL3F1aWNrLW9wZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdG9yLW92ZXJsYXktcXVpY2tPcGVuV2lkZ2V0IHtcbiAgICB6LWluZGV4OiAxMDAwMDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZW50cnktaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW50cnktbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZW50cnktcGF0aCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5kaXYubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/editor/quick-open/quick-open.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/editor/quick-open/quick-open.component.ts ***!
  \***********************************************************/
/*! exports provided: QuickOpenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickOpenComponent", function() { return QuickOpenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");








var QuickOpenComponent = /** @class */ (function () {
    function QuickOpenComponent(opener, resources) {
        var _this = this;
        this.opener = opener;
        this.resources = resources;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.$entries = this.form
            .valueChanges
            .debounceTime(400)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (query) { return query ? _this.filter(query) : _this.data().slice(); }));
    }
    QuickOpenComponent.prototype.didClose = function () {
        var that = this;
        setTimeout(function () {
            that.closed.emit();
        }, 200);
    };
    QuickOpenComponent.prototype.didItemSelected = function (e) {
        this.closed.emit();
        this.opener.open(e.option.value.path);
    };
    QuickOpenComponent.prototype.filter = function (query) {
        query = (query || '').toLowerCase();
        return this.data().filter(function (item) { return item.name.toLowerCase().indexOf(query) === 0; });
    };
    QuickOpenComponent.prototype.data = function () {
        return this.resources.findAll(function (resource) {
            return resource.type === _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].File;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuickOpenComponent.prototype, "closed", void 0);
    QuickOpenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'quick-open',
            template: __webpack_require__(/*! ./quick-open.component.html */ "./src/app/editor/quick-open/quick-open.component.html"),
            styles: [__webpack_require__(/*! ./quick-open.component.scss */ "./src/app/editor/quick-open/quick-open.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_4__["OpenerService"], _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]])
    ], QuickOpenComponent);
    return QuickOpenComponent;
}());



/***/ }),

/***/ "./src/app/editor/shared/directives/resource-icon.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/editor/shared/directives/resource-icon.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ResourceIconDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceIconDirective", function() { return ResourceIconDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_resource_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _models_folder_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/folder-icons */ "./src/app/editor/shared/models/folder-icons.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var _models_file_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/file-icons */ "./src/app/editor/shared/models/file-icons.ts");
/* harmony import */ var _services_core_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");








var BASE_DIR = 'static/filebrowser/app/assets/icons/explorer/';
var ResourceIconDirective = /** @class */ (function () {
    function ResourceIconDirective(el, resources) {
        this.el = el;
        this.resources = resources;
    }
    ResourceIconDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.resources.focusChanged.subscribe(function (focus) {
            if (focus && _this.resource && focus.path === _this.resource.path) {
                _this.resource = focus;
                _this.refresh();
            }
        });
        this.refresh();
    };
    ResourceIconDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ResourceIconDirective.prototype.refresh = function () {
        var _this = this;
        var element = this.el.nativeElement;
        var path = '';
        if (this.resource) {
            if (this.resource.type === _models_resource_model__WEBPACK_IMPORTED_MODULE_2__["ResourceTypes"].Folder) {
                var theme = _models_folder_icons__WEBPACK_IMPORTED_MODULE_3__["folderIcons"][0];
                path = BASE_DIR + theme.defaultIcon.name;
                if (Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isRoot"])(this.resource)) {
                    path = BASE_DIR + theme.rootFolder.name;
                }
                else {
                    var icon = theme.icons.find(function (item) { return item.folderNames.includes(_this.resource.name.toLowerCase()); });
                    if (icon) {
                        path = BASE_DIR + icon.name;
                    }
                }
                if (this.resource.expanded) {
                    path += '-open';
                }
                path += '.svg';
            }
            else {
                var extension_1 = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__["extname"])(this.resource.path);
                var icon = _models_file_icons__WEBPACK_IMPORTED_MODULE_6__["fileIcons"].icons.find(function (item) {
                    return (item.fileExtensions || []).includes(extension_1);
                }) || _models_file_icons__WEBPACK_IMPORTED_MODULE_6__["fileIcons"].defaultIcon;
                path = BASE_DIR + icon.name + '.svg';
            }
        }
        else {
            path = 'file.svg';
        }
        element.src = path;
        element.style.width = '16px';
        element.style.height = '16px';
        element.style.marginRight = '4px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('resourceIcon'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ResourceIconDirective.prototype, "resource", void 0);
    ResourceIconDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[resourceIcon]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_core_resource_service__WEBPACK_IMPORTED_MODULE_7__["ResourceService"]])
    ], ResourceIconDirective);
    return ResourceIconDirective;
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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _editor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.model */ "./src/app/editor/shared/models/editor.model.ts");



/** Implementation of IEditorGroup interface */
var EditorGroup = /** @class */ (function () {
    function EditorGroup(editorService) {
        this._editors = [];
        this._resources = [];
        this._actions = [];
        this._id = ++EditorGroup.NEXT_ID;
        this._editorService = editorService;
    }
    Object.defineProperty(EditorGroup.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorGroup.prototype, "editors", {
        get: function () {
            return this._editors;
        },
        enumerable: true,
        configurable: true
    });
    EditorGroup.prototype.id = function () {
        return this._id;
    };
    EditorGroup.prototype.empty = function () {
        return !this._resources.some(function (_) { return true; });
    };
    EditorGroup.prototype.focus = function (focused) {
        this._focused = focused;
    };
    EditorGroup.prototype.focused = function () {
        return this._focused;
    };
    EditorGroup.prototype.isActive = function (resource) {
        return this._activeResource && this._activeResource.path === resource.path;
    };
    EditorGroup.prototype.hasAction = function () {
        return !this.empty() && !this.isPreviewGroup();
    };
    EditorGroup.prototype.isPreviewGroup = function () {
        return this.someEditor(function (e) { return e.type() === _editor_model__WEBPACK_IMPORTED_MODULE_2__["EditorTypes"].Preview; });
    };
    EditorGroup.prototype.someEditor = function (predicate) {
        return this._editors.some(predicate);
    };
    EditorGroup.prototype.someResource = function (predicate) {
        return this._resources.some(predicate);
    };
    EditorGroup.prototype.containsEditor = function (editor) {
        return this.someEditor(function (e) { return e.id() === editor.id(); });
    };
    EditorGroup.prototype.containsResource = function (resource) {
        return this.someResource(function (r) { return r.path === resource.path; });
    };
    EditorGroup.prototype.open = function (resource, options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var editor;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editor = this._editors.find(function (e) { return e.canOpen(resource); }) || this.createEditor(resource);
                        if (!editor) {
                            throw new Error('The is no registered editor to open \'' + resource.path + '\'');
                        }
                        this._actions = editor.actions() || [];
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
                        else if (!this.someResource(function (e) { return e.path === resource.path; })) {
                            this._resources.push(resource);
                        }
                        resource.opened = true;
                        return [4 /*yield*/, this._editorService.focusGroup(this)];
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
                        _i = 0, _a = this._resources;
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
                        return [4 /*yield*/, this.removeResource(resource)];
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
                        if (!(this._resources.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.close(this._resources[0], false)];
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
                        if (!(i < this._resources.length)) return [3 /*break*/, 4];
                        if (!!this._resources[i].changed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.close(this._resources[i])];
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
    EditorGroup.prototype.findResource = function (predicate) {
        return this._resources.find(function (e) { return predicate(e); });
    };
    EditorGroup.prototype.findResourceAt = function (index) {
        return this._resources[index];
    };
    EditorGroup.prototype.actions = function () {
        return this._actions || (this._actions = []);
    };
    EditorGroup.prototype.activeResource = function () {
        return this._activeResource;
    };
    EditorGroup.prototype.activeEditor = function () {
        return this._activeEditor;
    };
    EditorGroup.prototype.activeEditorIs = function (type) {
        return !!this._activeEditor && this._activeEditor.type() === type;
    };
    EditorGroup.prototype.editorService = function () {
        return this._editorService;
    };
    EditorGroup.prototype.drop = function (event) {
        var source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        var target = this;
        if (this.isPreviewGroup() || source.isPreviewGroup()) {
            return;
        }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            var movedTab = source.findResourceAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    };
    EditorGroup.prototype.reopen = function (resource) {
        if (!this.isPreviewGroup()) {
            this.open(resource);
        }
    };
    EditorGroup.prototype.trackEditor = function (_, editor) {
        return editor.id();
    };
    EditorGroup.prototype.trackResource = function (_, resource) {
        return resource.path;
    };
    EditorGroup.prototype.confirm = function (options) {
        return this._editorService.confirm(options);
    };
    EditorGroup.prototype.closeGuard = function (resource) {
        if (this.isPreviewGroup()) {
            return false;
        }
        return resource.changed && this._editorService.findGroupsPredicate(function (group) {
            return !group.isPreviewGroup() && group.containsResource(resource);
        }).length === 1;
    };
    EditorGroup.prototype.createEditor = function (resource) {
        for (var _i = 0, INSTANTIATORS_1 = _editor_model__WEBPACK_IMPORTED_MODULE_2__["INSTANTIATORS"]; _i < INSTANTIATORS_1.length; _i++) {
            var item = INSTANTIATORS_1[_i];
            if (item.condition(resource)) {
                var editor = item.create(this, resource);
                this._editors.push(editor);
                return editor;
            }
        }
        return undefined;
    };
    EditorGroup.prototype.removeResource = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var indexToRemove, newIndex, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        indexToRemove = this._resources.findIndex(function (e) { return e.path === resource.path; });
                        if (!(indexToRemove !== -1)) return [3 /*break*/, 5];
                        if (this.isActive(resource)) {
                            this._activeEditor = undefined;
                            this._activeResource = undefined;
                        }
                        this._actions = [];
                        this._resources.splice(indexToRemove, 1);
                        newIndex = Math.max(0, indexToRemove - 1);
                        if (!(!this._activeResource && newIndex < this._resources.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.open(this._resources[newIndex])];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        resource.opened = this._editorService.findGroups(resource).length > 0;
                        _a = this.empty();
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._editorService.disposeGroup(this)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a || true];
                    case 5: return [2 /*return*/, false];
                }
            });
        });
    };
    EditorGroup.NEXT_ID = 0;
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
// next line required for unit-tests
/// <reference path="../../../../../node_modules/ngx-monaco-editor/monaco.d.ts" />



var EditorTypes;
(function (EditorTypes) {
    EditorTypes["Code"] = "code";
    EditorTypes["Preview"] = "preview";
    EditorTypes["Image"] = "image";
})(EditorTypes || (EditorTypes = {}));
var AbstractEditor = /** @class */ (function () {
    function AbstractEditor(group, resource) {
        this.opened = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
        this.opened.next(resource);
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
        _this.diffRequested = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.previewRequested = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
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
            icon: 'fas fa-play', tooltip: 'Preview ⌘Enter', condition: _filters_model__WEBPACK_IMPORTED_MODULE_2__["canBePreviewed"], invoke: function (item) {
                _this.previewRequested.next(item);
            }
        };
    };
    CodeEditor.prototype.diffMode = function () {
        var that = this;
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: function (item) {
                return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["isRepo"])(item) && !that.diffEditing;
            },
            invoke: function (_) {
                that.diffEditing = true;
                that.diffRequested.next(that.diffEditing);
            }
        };
    };
    CodeEditor.prototype.codeMode = function () {
        var that = this;
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: function (_) {
                return that.diffEditing;
            }, invoke: function (_) {
                that.diffEditing = false;
                that.diffRequested.next(that.diffEditing);
            }
        };
    };
    CodeEditor.prototype.splitRight = function () {
        var that = this;
        return {
            icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: function () {
                return true;
            }, invoke: function (_) {
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
                icon: 'fas fa-plus', tooltip: 'Zoom In', condition: function (_) { return true; }, invoke: function (_) {
                    _this.zoomIn();
                }
            },
            {
                icon: 'fas fa-minus', tooltip: 'Zoom Out', condition: function (_) { return true; }, invoke: function (_) {
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
        return [];
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
    return !!resource.meta && !!resource.meta.previewData;
}
var INSTANTIATORS = [
    { condition: openAsImage, create: function (group, r) { return new ImageEditor(group, r); } },
    { condition: openAsPreview, create: function (group, r) { return new PreviewEditor(group, r); } },
    { condition: openAsCode, create: function (group, r) { return new CodeEditor(group, r); } }
];


/***/ }),

/***/ "./src/app/editor/shared/models/file-icons.ts":
/*!****************************************************!*\
  !*** ./src/app/editor/shared/models/file-icons.ts ***!
  \****************************************************/
/*! exports provided: FileIcons, fileIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileIcons", function() { return FileIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileIcons", function() { return fileIcons; });
// tslint:disable: max-line-length
var FileIcons = /** @class */ (function () {
    function FileIcons() {
    }
    return FileIcons;
}());

/**
 * Defines file icons
 */
var fileIcons = {
    defaultIcon: { name: 'file' },
    icons: [
        { name: 'pl', fileExtensions: ['pl'] },
        { name: 'pltp', fileExtensions: ['pltp'] },
        { name: 'html', fileExtensions: ['html', 'htm', 'xhtml', 'html_vm', 'asp'] },
        { name: 'pug', fileExtensions: ['jade', 'pug'] },
        {
            name: 'markdown',
            fileExtensions: [
                'md',
                'markdown',
                'rst'
            ]
        },
        { name: 'blink', fileExtensions: ['blink'] },
        { name: 'css', fileExtensions: ['css'] },
        { name: 'sass', fileExtensions: ['scss', 'sass'] },
        { name: 'less', fileExtensions: ['less'] },
        {
            name: 'json',
            fileExtensions: ['json', 'tsbuildinfo'],
            fileNames: [
                '.jscsrc',
                '.jshintrc',
                'tsconfig.json',
                'tslint.json',
                'composer.lock',
                '.jsbeautifyrc',
                '.esformatter',
                'cdp.pid'
            ]
        },
        {
            name: 'jinja',
            fileExtensions: ['jinja', 'jinja2', 'j2'],
        },
        {
            name: 'sublime',
            fileExtensions: ['sublime-project', 'sublime-workspace']
        },
        { name: 'yaml', fileExtensions: ['yaml', 'YAML-tmLanguage', 'yml'] },
        {
            name: 'xml',
            fileExtensions: [
                'xml',
                'plist',
                'xsd',
                'dtd',
                'xsl',
                'xslt',
                'resx',
                'iml',
                'xquery',
                'tmLanguage',
                'manifest',
                'project'
            ],
            fileNames: ['.htaccess']
        },
        {
            name: 'image',
            fileExtensions: [
                'png',
                'jpeg',
                'jpg',
                'gif',
                'ico',
                'tif',
                'tiff',
                'psd',
                'psb',
                'ami',
                'apx',
                'bmp',
                'bpg',
                'brk',
                'cur',
                'dds',
                'dng',
                'exr',
                'fpx',
                'gbr',
                'img',
                'jbig2',
                'jb2',
                'jng',
                'jxr',
                'pbm',
                'pgf',
                'pic',
                'raw',
                'webp',
                'eps'
            ]
        },
        { name: 'javascript', fileExtensions: ['js', 'esx', 'mjs'] },
        { name: 'react', fileExtensions: ['jsx'] },
        { name: 'react_ts', fileExtensions: ['tsx'] },
        {
            name: 'routing',
            fileExtensions: ['routing.ts', 'routing.js', 'routes.ts', 'routes.js'],
            fileNames: ['router.js', 'router.ts', 'routes.js', 'routes.ts'],
        },
        {
            name: 'settings',
            fileExtensions: [
                'ini',
                'dlc',
                'dll',
                'config',
                'conf',
                'properties',
                'prop',
                'settings',
                'option',
                'props',
                'toml',
                'prefs',
                'sln.dotsettings',
                'sln.dotsettings.user',
                'cfg'
            ],
            fileNames: [
                '.jshintignore',
                '.buildignore',
                '.mrconfig',
                '.yardopts',
                'manifest.mf',
                '.clang-format',
                '.clang-tidy'
            ]
        },
        { name: 'typescript', fileExtensions: ['ts'] },
        { name: 'typescript-def', fileExtensions: ['d.ts'] },
        { name: 'markojs', fileExtensions: ['marko'] },
        { name: 'pdf', fileExtensions: ['pdf'] },
        { name: 'table', fileExtensions: ['xlsx', 'xls', 'csv', 'tsv'] },
        {
            name: 'vscode',
            fileExtensions: ['vscodeignore', 'vsixmanifest', 'vsix', 'code-workplace']
        },
        {
            name: 'visualstudio',
            fileExtensions: [
                'csproj',
                'ruleset',
                'sln',
                'suo',
                'vb',
                'vbs',
                'vcxitems',
                'vcxitems.filters',
                'vcxproj',
                'vcxproj.filters'
            ]
        },
        {
            name: 'database',
            fileExtensions: ['pdb', 'sql', 'pks', 'pkb', 'accdb', 'mdb', 'sqlite', 'pgsql', 'postgres', 'psql']
        },
        { name: 'csharp', fileExtensions: ['cs', 'csx'] },
        {
            name: 'zip',
            fileExtensions: [
                'zip',
                'tar',
                'gz',
                'xz',
                'br',
                'bzip2',
                'gzip',
                'brotli',
                '7z',
                'rar',
                'tgz'
            ]
        },
        { name: 'exe', fileExtensions: ['exe', 'msi'] },
        { name: 'java', fileExtensions: ['java', 'jar', 'jsp'] },
        { name: 'c', fileExtensions: ['c', 'm'] },
        { name: 'h', fileExtensions: ['h'] },
        { name: 'cpp', fileExtensions: ['cc', 'cpp', 'mm', 'cxx'] },
        { name: 'hpp', fileExtensions: ['hpp'] },
        { name: 'go', fileExtensions: ['go'] },
        { name: 'python', fileExtensions: ['py'] },
        {
            name: 'python-misc',
            fileExtensions: ['pyc', 'whl'],
            fileNames: ['requirements.txt', 'pipfile', '.python-version', 'manifest.in']
        },
        { name: 'url', fileExtensions: ['url'] },
        {
            name: 'console',
            fileExtensions: [
                'sh',
                'ksh',
                'csh',
                'tcsh',
                'zsh',
                'bash',
                'bat',
                'cmd',
                'awk',
                'fish'
            ]
        },
        {
            name: 'powershell',
            fileExtensions: ['ps1', 'psm1', 'psd1', 'ps1xml', 'psc1', 'pssc']
        },
        {
            name: 'gradle',
            fileExtensions: ['gradle'],
            fileNames: ['gradle.properties', 'gradlew', 'gradle-wrapper.properties']
        },
        { name: 'word', fileExtensions: ['doc', 'docx', 'rtf'] },
        {
            name: 'certificate',
            fileExtensions: ['cer', 'cert', 'crt'],
            fileNames: [
                'license',
                'license.md',
                'license.txt',
                'licence',
                'licence.md',
                'licence.txt'
            ]
        },
        {
            name: 'key',
            fileExtensions: ['pub', 'key', 'pem', 'asc', 'gpg'],
            fileNames: ['.htpasswd']
        },
        {
            name: 'font',
            fileExtensions: [
                'woff',
                'woff2',
                'ttf',
                'eot',
                'suit',
                'otf',
                'bmap',
                'fnt',
                'odttf',
                'ttc',
                'font',
                'fonts',
                'sui',
                'ntf',
                'mrf'
            ]
        },
        { name: 'lib', fileExtensions: ['lib', 'bib'] },
        { name: 'ruby', fileExtensions: ['rb', 'erb'] },
        { name: 'gemfile', fileNames: ['gemfile'] },
        { name: 'fsharp', fileExtensions: ['fs', 'fsx', 'fsi', 'fsproj'] },
        { name: 'swift', fileExtensions: ['swift'] },
        { name: 'arduino', fileExtensions: ['ino'] },
        {
            name: 'docker',
            fileExtensions: ['dockerignore', 'dockerfile'],
            fileNames: [
                'dockerfile',
                'docker-compose.yml',
                'docker-compose.yaml',
                'docker-compose.dev.yml',
                'docker-compose.local.yml',
                'docker-compose.ci.yml',
                'docker-compose.override.yml',
                'docker-compose.staging.yml',
                'docker-compose.prod.yml',
                'docker-compose.production.yml',
                'docker-compose.test.yml'
            ]
        },
        { name: 'tex', fileExtensions: ['tex', 'cls', 'sty'] },
        {
            name: 'powerpoint',
            fileExtensions: [
                'pptx',
                'ppt',
                'pptm',
                'potx',
                'potm',
                'ppsx',
                'ppsm',
                'pps',
                'ppam',
                'ppa'
            ]
        },
        {
            name: 'video',
            fileExtensions: [
                'webm',
                'mkv',
                'flv',
                'vob',
                'ogv',
                'ogg',
                'gifv',
                'avi',
                'mov',
                'qt',
                'wmv',
                'yuv',
                'rm',
                'rmvb',
                'mp4',
                'm4v',
                'mpg',
                'mp2',
                'mpeg',
                'mpe',
                'mpv',
                'm2v'
            ]
        },
        { name: 'virtual', fileExtensions: ['vdi', 'vbox', 'vbox-prev'] },
        { name: 'email', fileExtensions: ['ics'], fileNames: ['.mailmap'] },
        { name: 'audio', fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff'] },
        { name: 'coffee', fileExtensions: ['coffee', 'cson', 'iced'] },
        { name: 'document', fileExtensions: ['txt'] },
        { name: 'graphql', fileExtensions: ['graphql', 'gql'], fileNames: ['.graphqlconfig'] },
        { name: 'rust', fileExtensions: ['rs'] },
        { name: 'raml', fileExtensions: ['raml'] },
        { name: 'xaml', fileExtensions: ['xaml'] },
        { name: 'haskell', fileExtensions: ['hs'] },
        { name: 'kotlin', fileExtensions: ['kt', 'kts'] },
        {
            name: 'git',
            fileExtensions: ['patch'],
            fileNames: [
                '.gitignore',
                '.gitconfig',
                '.gitattributes',
                '.gitmodules',
                '.gitkeep',
                'git-history'
            ]
        },
        { name: 'lua', fileExtensions: ['lua'], fileNames: ['.luacheckrc'] },
        { name: 'clojure', fileExtensions: ['clj', 'cljs', 'cljc'] },
        { name: 'groovy', fileExtensions: ['groovy'] },
        { name: 'r', fileExtensions: ['r', 'rmd'], fileNames: ['.Rhistory'] },
        { name: 'dart', fileExtensions: ['dart'] },
        { name: 'actionscript', fileExtensions: ['as'] },
        { name: 'mxml', fileExtensions: ['mxml'] },
        { name: 'autohotkey', fileExtensions: ['ahk'] },
        { name: 'flash', fileExtensions: ['swf'] },
        { name: 'swc', fileExtensions: ['swc'] },
        {
            name: 'cmake',
            fileExtensions: ['cmake'],
            fileNames: ['cmakelists.txt', 'cmakecache.txt']
        },
        {
            name: 'assembly',
            fileExtensions: [
                'asm',
                'a51',
                'inc',
                'nasm',
                's',
                'ms',
                'agc',
                'ags',
                'aea',
                'argus',
                'mitigus',
                'binsource'
            ]
        },
        { name: 'vue', fileExtensions: ['vue'] },
        { name: 'vue-config', fileNames: ['vue.config.js', 'vue.config.ts'] },
        { name: 'vuex-store', fileExtensions: ['store.js', 'store.ts'], fileNames: ['store.js', 'store.ts'] },
        { name: 'nuxt', fileNames: ['nuxt.config.js', 'nuxt.config.ts'] },
        { name: 'ocaml', fileExtensions: ['ml', 'mli', 'cmx'] },
        { name: 'javascript-map', fileExtensions: ['js.map', 'mjs.map'] },
        { name: 'css-map', fileExtensions: ['css.map'] },
        { name: 'lock', fileExtensions: ['lock'] },
        { name: 'handlebars', fileExtensions: ['hbs', 'mustache'] },
        { name: 'perl', fileExtensions: ['pl', 'pm'] },
        { name: 'haxe', fileExtensions: ['hx'] },
        { name: 'test-ts', fileExtensions: ['spec.ts', 'test.ts', 'ts.snap'] },
        {
            name: 'test-jsx',
            fileExtensions: [
                'spec.tsx',
                'test.tsx',
                'tsx.snap',
                'spec.jsx',
                'test.jsx',
                'jsx.snap'
            ]
        },
        { name: 'test-js', fileExtensions: ['spec.js', 'test.js', 'js.snap'] },
        {
            name: 'angular',
            fileExtensions: ['module.ts', 'module.js', 'ng-template'],
            fileNames: ['angular-cli.json', '.angular-cli.json', 'angular.json'],
        },
        {
            name: 'angular-component',
            fileExtensions: ['component.ts', 'component.js'],
        },
        { name: 'angular-guard', fileExtensions: ['guard.ts', 'guard.js'], },
        { name: 'angular-service', fileExtensions: ['service.ts', 'service.js'] },
        {
            name: 'angular-pipe',
            fileExtensions: ['pipe.ts', 'pipe.js', 'filter.js'],
        },
        {
            name: 'angular-directive',
            fileExtensions: ['directive.ts', 'directive.js'],
        },
        {
            name: 'angular-resolver',
            fileExtensions: ['resolver.ts', 'resolver.js'],
        },
        { name: 'puppet', fileExtensions: ['pp'] },
        { name: 'elixir', fileExtensions: ['ex', 'exs', 'eex', 'leex'] },
        { name: 'livescript', fileExtensions: ['ls'] },
        { name: 'erlang', fileExtensions: ['erl'] },
        { name: 'twig', fileExtensions: ['twig'] },
        { name: 'julia', fileExtensions: ['jl'] },
        { name: 'elm', fileExtensions: ['elm'] },
        { name: 'purescript', fileExtensions: ['pure', 'purs'] },
        { name: 'smarty', fileExtensions: ['tpl'] },
        { name: 'stylus', fileExtensions: ['styl'] },
        { name: 'reason', fileExtensions: ['re', 'rei'] },
        { name: 'bucklescript', fileExtensions: ['cmj'] },
        { name: 'merlin', fileExtensions: ['merlin'] },
        { name: 'verilog', fileExtensions: ['v', 'vhd', 'sv', 'svh'] },
        { name: 'mathematica', fileExtensions: ['nb'] },
        { name: 'wolframlanguage', fileExtensions: ['wl', 'wls'] },
        { name: 'nunjucks', fileExtensions: ['njk', 'nunjucks'] },
        { name: 'robot', fileExtensions: ['robot'] },
        { name: 'solidity', fileExtensions: ['sol'] },
        { name: 'autoit', fileExtensions: ['au3'] },
        { name: 'haml', fileExtensions: ['haml'] },
        { name: 'yang', fileExtensions: ['yang'] },
        { name: 'mjml', fileExtensions: ['mjml'] },
        {
            name: 'terraform',
            fileExtensions: ['tf', 'tf.json', 'tfvars', 'tfstate']
        },
        { name: 'laravel', fileExtensions: ['blade.php', 'inky.php'] },
        { name: 'applescript', fileExtensions: ['applescript'] },
        { name: 'cake', fileExtensions: ['cake'] },
        { name: 'cucumber', fileExtensions: ['feature'] },
        { name: 'nim', fileExtensions: ['nim', 'nimble'] },
        { name: 'apiblueprint', fileExtensions: ['apib', 'apiblueprint'] },
        { name: 'riot', fileExtensions: ['tag'] },
        { name: 'vfl', fileExtensions: ['vfl'], fileNames: ['.vfl'] },
        { name: 'kl', fileExtensions: ['kl'], fileNames: ['.kl'] },
        {
            name: 'postcss',
            fileExtensions: ['pcss', 'sss'],
            fileNames: ['postcss.config.js', '.postcssrc.js', '.postcssrc']
        },
        { name: 'todo', fileExtensions: ['todo'] },
        { name: 'coldfusion', fileExtensions: ['cfml', 'cfc', 'lucee', 'cfm'] },
        { name: 'cabal', fileExtensions: ['cabal'] },
        { name: 'nix', fileExtensions: ['nix'] },
        { name: 'slim', fileExtensions: ['slim'] },
        { name: 'http', fileExtensions: ['http', 'rest'] },
        { name: 'restql', fileExtensions: ['rql', 'restql'] },
        { name: 'kivy', fileExtensions: ['kv'] },
        {
            name: 'graphcool',
            fileExtensions: ['graphcool'],
            fileNames: ['project.graphcool']
        },
        { name: 'sbt', fileExtensions: ['sbt'] },
        {
            name: 'webpack',
            fileNames: [
                'webpack.js',
                'webpack.ts',
                'webpack.base.js',
                'webpack.base.ts',
                'webpack.config.js',
                'webpack.config.ts',
                'webpack.common.js',
                'webpack.common.ts',
                'webpack.config.common.js',
                'webpack.config.common.ts',
                'webpack.config.common.babel.js',
                'webpack.config.common.babel.ts',
                'webpack.dev.js',
                'webpack.dev.ts',
                'webpack.config.dev.js',
                'webpack.config.dev.ts',
                'webpack.config.dev.babel.js',
                'webpack.config.dev.babel.ts',
                'webpack.prod.js',
                'webpack.prod.ts',
                'webpack.server.js',
                'webpack.server.ts',
                'webpack.client.js',
                'webpack.client.ts',
                'webpack.config.server.js',
                'webpack.config.server.ts',
                'webpack.config.client.js',
                'webpack.config.client.ts',
                'webpack.config.production.babel.js',
                'webpack.config.production.babel.ts',
                'webpack.config.prod.babel.js',
                'webpack.config.prod.babel.ts',
                'webpack.config.prod.js',
                'webpack.config.prod.ts',
                'webpack.config.production.js',
                'webpack.config.production.ts',
                'webpack.config.staging.js',
                'webpack.config.staging.ts',
                'webpack.config.babel.js',
                'webpack.config.babel.ts',
                'webpack.config.base.babel.js',
                'webpack.config.base.babel.ts',
                'webpack.config.base.js',
                'webpack.config.base.ts',
                'webpack.config.staging.babel.js',
                'webpack.config.staging.babel.ts',
                'webpack.config.coffee',
                'webpack.config.test.js',
                'webpack.config.test.ts',
                'webpack.config.vendor.js',
                'webpack.config.vendor.ts',
                'webpack.config.vendor.production.js',
                'webpack.config.vendor.production.ts',
                'webpack.test.js',
                'webpack.test.ts',
                'webpack.dist.js',
                'webpack.dist.ts',
                'webpackfile.js',
                'webpackfile.ts'
            ]
        },
        { name: 'ionic', fileNames: ['ionic.config.json', '.io-config.json'] },
        {
            name: 'gulp',
            fileNames: ['gulpfile.js', 'gulpfile.ts', 'gulpfile.babel.js']
        },
        {
            name: 'nodejs',
            fileNames: ['package.json', 'package-lock.json', '.nvmrc', '.esmrc']
        },
        { name: 'npm', fileNames: ['.npmignore', '.npmrc'] },
        {
            name: 'yarn',
            fileNames: [
                '.yarnrc',
                'yarn.lock',
                '.yarnclean',
                '.yarn-integrity',
                'yarn-error.log'
            ]
        },
        { name: 'android', fileNames: ['androidmanifest.xml'] },
        {
            name: 'tune',
            fileNames: [
                '.env',
                '.env.example',
                '.env.local',
                '.env.dev',
                '.env.development',
                '.env.prod',
                '.env.production',
                '.env.staging',
                '.env.preview',
                '.env.test',
                '.env.development.local',
                '.env.production.local',
                '.env.test.local',
            ]
        },
        { name: 'babel', fileNames: ['.babelrc', '.babelrc.js', 'babel.config.js'] },
        {
            name: 'contributing',
            fileNames: ['contributing.md']
        },
        { name: 'readme', fileNames: ['readme.md', 'readme.txt', 'readme'] },
        {
            name: 'changelog',
            fileNames: ['changelog', 'changelog.md', 'changelog.txt']
        },
        {
            name: 'credits',
            fileNames: ['credits', 'credits.txt', 'credits.md']
        },
        {
            name: 'authors',
            fileNames: ['authors', 'authors.md', 'authors.txt']
        },
        { name: 'flow', fileNames: ['.flowconfig'] },
        { name: 'favicon', fileNames: ['favicon.ico'] },
        {
            name: 'karma',
            fileNames: [
                'karma.conf.js',
                'karma.conf.ts',
                'karma.conf.coffee',
                'karma.config.js',
                'karma.config.ts',
                'karma-main.js',
                'karma-main.ts'
            ]
        },
        { name: 'bithound', fileNames: ['.bithoundrc'] },
        { name: 'appveyor', fileNames: ['.appveyor.yml', 'appveyor.yml'] },
        { name: 'travis', fileNames: ['.travis.yml'] },
        {
            name: 'protractor',
            fileNames: [
                'protractor.conf.js',
                'protractor.conf.ts',
                'protractor.conf.coffee',
                'protractor.config.js',
                'protractor.config.ts'
            ]
        },
        { name: 'fusebox', fileNames: ['fuse.js'] },
        { name: 'heroku', fileNames: ['procfile', 'procfile.windows'] },
        { name: 'editorconfig', fileNames: ['.editorconfig'] },
        { name: 'gitlab', fileNames: ['.gitlab-ci.yml'] },
        { name: 'bower', fileNames: ['.bowerrc', 'bower.json'] },
        {
            name: 'eslint',
            fileNames: [
                '.eslintrc.js',
                '.eslintrc.yaml',
                '.eslintrc.yml',
                '.eslintrc.json',
                '.eslintrc',
                '.eslintignore'
            ]
        },
        {
            name: 'conduct',
            fileNames: ['code_of_conduct.md', 'code_of_conduct.txt']
        },
        { name: 'watchman', fileNames: ['.watchmanconfig'] },
        { name: 'aurelia', fileNames: ['aurelia.json'] },
        {
            name: 'mocha',
            fileNames: [
                'mocha.opts',
                '.mocharc.yml',
                '.mocharc.yaml',
                '.mocharc.js',
                '.mocharc.json',
                '.mocharc.jsonc'
            ]
        },
        { name: 'jenkins', fileNames: ['jenkinsfile'] },
        { name: 'firebase', fileNames: ['firebase.json', '.firebaserc'] },
        {
            name: 'rollup',
            fileNames: [
                'rollup.config.js',
                'rollup.config.ts',
                'rollup-config.js',
                'rollup-config.ts',
                'rollup.config.common.js',
                'rollup.config.common.ts',
                'rollup.config.base.js',
                'rollup.config.base.ts',
                'rollup.config.prod.js',
                'rollup.config.prod.ts',
                'rollup.config.dev.js',
                'rollup.config.dev.ts',
                'rollup.config.prod.vendor.js',
                'rollup.config.prod.vendor.ts'
            ]
        },
        { name: 'hack', fileNames: ['.hhconfig'] },
        {
            name: 'stylelint',
            fileNames: [
                '.stylelintrc',
                'stylelint.config.js',
                '.stylelintrc.json',
                '.stylelintrc.yaml',
                '.stylelintrc.yml',
                '.stylelintrc.js',
                '.stylelintignore'
            ],
        },
        { name: 'code-climate', fileNames: ['.codeclimate.yml'] },
        { name: 'prettier', fileNames: ['.prettierrc', 'prettier.config.js', '.prettierrc.js', '.prettierrc.json', '.prettierrc.yaml', '.prettierrc.yml', '.prettierignore'] },
        { name: 'nodemon', fileNames: ['nodemon.json', 'nodemon-debug.json'] },
        { name: 'webhint', fileNames: ['.hintrc'] },
        { name: 'browserlist', fileNames: ['browserslist', '.browserslistrc'] },
        { name: 'crystal', fileExtensions: ['cr', 'ecr'] },
        { name: 'snyk', fileNames: ['.snyk'] },
        { name: 'drone', fileExtensions: ['drone.yml'], fileNames: ['.drone.yml'] },
        { name: 'cuda', fileExtensions: ['cu', 'cuh'] },
        { name: 'log', fileExtensions: ['log'] },
        { name: 'dotjs', fileExtensions: ['def', 'dot', 'jst'] },
        { name: 'ejs', fileExtensions: ['ejs'] },
        { name: 'sequelize', fileNames: ['.sequelizerc'] },
        { name: 'gatsby', fileNames: ['gatsby.config.js', 'gatsby-config.js', 'gatsby-node.js', 'gatsby-browser.js', 'gatsby-ssr.js'] },
        { name: 'wakatime', fileNames: ['.wakatime-project'], fileExtensions: ['.wakatime-project'] },
        { name: 'circleci', fileNames: ['circle.yml'] },
        { name: 'cloudfoundry', fileNames: ['.cfignore'] },
        {
            name: 'grunt',
            fileNames: [
                'gruntfile.js',
                'gruntfile.ts',
                'gruntfile.coffee',
                'gruntfile.babel.js',
                'gruntfile.babel.ts',
                'gruntfile.babel.coffee'
            ],
        },
        { name: 'jest', fileNames: ['jest.config.js', 'jest.config.ts', 'jest.config.json', 'jest.setup.js', 'jest.setup.ts', 'jest.json', '.jestrc', 'jest.teardown.js'] },
        { name: 'processing', fileExtensions: ['pde'] },
        { name: 'storybook', fileExtensions: ['stories.js', 'stories.jsx', 'story.js', 'story.jsx', 'stories.ts', 'stories.tsx', 'story.ts', 'story.tsx'] },
        { name: 'wepy', fileExtensions: ['wpy'] },
        { name: 'fastlane', fileNames: ['fastfile', 'appfile'] },
        { name: 'hcl', fileExtensions: ['hcl'] },
        { name: 'helm', fileNames: ['.helmignore'] },
        { name: 'san', fileExtensions: ['san'] },
        { name: 'wallaby', fileNames: ['wallaby.js', 'wallaby.conf.js'] },
        { name: 'django', fileExtensions: ['djt'] },
        { name: 'stencil', fileNames: ['stencil.config.js', 'stencil.config.ts'] },
        { name: 'red', fileExtensions: ['red'] },
        { name: 'makefile', fileNames: ['makefile'] },
        { name: 'foxpro', fileExtensions: ['fxp', 'prg'] },
        { name: 'i18n', fileExtensions: ['pot', 'po', 'mo'] },
        { name: 'webassembly', fileExtensions: ['wat', 'wasm'] },
        { name: 'semantic-release', fileNames: ['.releaserc', 'release.config.js'] },
        { name: 'bitbucket', fileNames: ['bitbucket-pipelines.yaml', 'bitbucket-pipelines.yml'] },
        { name: 'jupyter', fileExtensions: ['ipynb'] },
        { name: 'd', fileExtensions: ['d'] },
        { name: 'mdx', fileExtensions: ['mdx'] },
        { name: 'ballerina', fileExtensions: ['bal', 'balx'] },
        { name: 'racket', fileExtensions: ['rkt'] },
        { name: 'bazel', fileExtensions: ['bzl', 'bazel'] },
        { name: 'mint', fileExtensions: ['mint'] },
        { name: 'velocity', fileExtensions: ['vm', 'fhtml', 'vtl'] },
        { name: 'godot', fileExtensions: ['gd'] },
        { name: 'godot-assets', fileExtensions: ['godot', 'tres', 'tscn'] },
        { name: 'azure-pipelines', fileNames: ['azure-pipelines.yml'] },
        { name: 'azure', fileExtensions: ['azcli'] },
        { name: 'vagrant', fileNames: ['vagrantfile'], fileExtensions: ['vagrantfile'] },
        { name: 'prisma', fileNames: ['prisma.yml'], fileExtensions: ['prisma'] },
        { name: 'razor', fileExtensions: ['cshtml', 'vbhtml'] },
        { name: 'asciidoc', fileExtensions: ['ad', 'adoc', 'asciidoc'] },
        { name: 'istanbul', fileNames: ['.nycrc', '.nycrc.json'] },
        { name: 'edge', fileExtensions: ['edge'] },
        { name: 'scheme', fileExtensions: ['ss', 'scm'] },
        { name: 'tailwindcss', fileNames: ['tailwind.js', 'tailwind.config.js'] },
        { name: '3d', fileExtensions: ['stl', 'obj'] },
        { name: 'buildkite', fileNames: ['buildkite.yml', 'buildkite.yaml'] },
        { name: 'netlify', fileNames: ['netlify.toml'] },
        { name: 'svg', fileExtensions: ['svg'] },
        { name: 'svelte', fileExtensions: ['svelte'] },
    ]
};


/***/ }),

/***/ "./src/app/editor/shared/models/filters.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shared/models/filters.model.ts ***!
  \*******************************************************/
/*! exports provided: PREVIEW_EXTENSIONS, canRead, canWrite, isReadOnly, isRepo, isLoaded, isHome, isLib, isRoot, isFolder, isFile, isPL, isSVG, isPLTP, isMarkdown, canBePreviewed, canAddChild, canCopy, canBeRenamed, canBeDeleted, canBeTested, canBeLoaded, canBeReloaded, compareGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_EXTENSIONS", function() { return PREVIEW_EXTENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canRead", function() { return canRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canWrite", function() { return canWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadOnly", function() { return isReadOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRepo", function() { return isRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoaded", function() { return isLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLib", function() { return isLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return isRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFolder", function() { return isFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPL", function() { return isPL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPLTP", function() { return isPLTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkdown", function() { return isMarkdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBePreviewed", function() { return canBePreviewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddChild", function() { return canAddChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCopy", function() { return canCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeRenamed", function() { return canBeRenamed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeDeleted", function() { return canBeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeTested", function() { return canBeTested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeLoaded", function() { return canBeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeReloaded", function() { return canBeReloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareGroup", function() { return compareGroup; });
/* harmony import */ var _resource_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");



/** extensions of files with preview option */
var PREVIEW_EXTENSIONS = ['pl', 'md', 'svg'];
/**
 * Gets a value indicating whether the resource can be readed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canRead(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.read;
}
/**
 * Gets a value indicating whether the resource can be modified.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canWrite(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.write;
}
/**
 * Gets a value indicating whether the resource is on readonly mode.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isReadOnly(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !canWrite(item);
}
/**
 * Gets a value indicating whether the resource is in a repository.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isRepo(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && !!item.repo;
}
/**
 * Gets a value indicating whether the resource is loaded with it's metadata.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isLoaded(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && !!item.meta;
}
/**
 * Gets a value indicating whether the resource is the home folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isHome(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'Yggdrasil';
}
/**
 * Gets a value indicating whether the resource is the lib folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isLib(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.path === 'lib';
}
/**
 * Gets a value indicating whether the resource is a root folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isRoot(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return isHome(item) || isLib(item);
}
/**
 * Gets a value indicating whether the resource is a folder.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isFolder(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.type === _resource_model__WEBPACK_IMPORTED_MODULE_0__["ResourceTypes"].Folder;
}
/**
 * Gets a value indicating whether the resource is a file.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isFile(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && item.type === _resource_model__WEBPACK_IMPORTED_MODULE_0__["ResourceTypes"].File;
}
/**
 * Gets a value indicating whether the resource is a PL resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isPL(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'pl';
}
/**
 * Gets a value indicating whether the resource is a svg resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isSVG(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'svg';
}
/**
 * Gets a value indicating whether the resource is a PLTP.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isPLTP(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'pltp';
}
/**
 * Gets a value indicating whether the resource is a markdown resource.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isMarkdown(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path) === 'md';
}
/**
 * Gets a value indicating whether the resource can be previewed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBePreviewed(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return !!item && isFile(item) && PREVIEW_EXTENSIONS.includes(Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_1__["extname"])(item.path));
}
/**
 * Gets a value indicating whether the resource is a folder with a write permission.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canAddChild(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFolder(item);
}
/**
 * Gets a value indicating whether the resource can be copied|dragged.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canCopy(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canRead(item) && !isRoot(item);
}
/**
 * Gets a value indicating whether the resource can be renamed.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeRenamed(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}
/**
 * Gets a value indicating whether the resource can be deleted.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeDeleted(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canWrite(item) && !isRoot(item);
}
/**
 * Gets a value indicating whether the resource can be tested (PL only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeTested(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canRead(item) && isFile(item) && isPL(item);
}
/**
 * Gets a value indicating whether the resource can be loaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeLoaded(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFile(item) && isPLTP(item);
}
/**
 * Gets a value indicating whether the resource can be reloaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeReloaded(item) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFile(item) && isPLTP(item);
}
/**
 * Checks whether the two groups are the same (id are equals)
 * @param grp1 the first group
 * @param grp2 the second group
 * @throws {ReferenceError} is grp1 or grp2 are null
 */
function compareGroup(grp1, grp2) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(grp1, '"param "grp1" is required');
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_2__["Asserts"].requireNonNull(grp2, '"param "grp2" is required');
    return grp1.id() === grp2.id();
}


/***/ }),

/***/ "./src/app/editor/shared/models/folder-icons.ts":
/*!******************************************************!*\
  !*** ./src/app/editor/shared/models/folder-icons.ts ***!
  \******************************************************/
/*! exports provided: folderIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folderIcons", function() { return folderIcons; });
// tslint:disable: max-line-length
/**
 * Defines folder icons
 */
var folderIcons = [
    {
        name: 'specific',
        defaultIcon: { name: 'folder' },
        rootFolder: { name: 'folder-root' },
        icons: [
            { name: 'folder-src', folderNames: ['src', 'source', 'sources'] },
            { name: 'folder-dist', folderNames: ['dist', 'out', 'build', 'release', 'bin'] },
            {
                name: 'folder-css',
                folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles']
            },
            { name: 'folder-sass', folderNames: ['sass', '_sass', 'scss', '_scss'] },
            { name: 'folder-images', folderNames: ['images', 'image', 'img', 'icons', 'icon', 'ico', 'screenshot', 'screenshots'] },
            { name: 'folder-scripts', folderNames: ['script', 'scripts'] },
            { name: 'folder-node', folderNames: ['node_modules'] },
            { name: 'folder-javascript', folderNames: ['js', 'javascript', 'javascripts'] },
            { name: 'folder-font', folderNames: ['font', 'fonts'] },
            { name: 'folder-bower', folderNames: ['bower_components'] },
            {
                name: 'folder-test',
                folderNames: [
                    'test',
                    'tests',
                    'testing',
                    '__tests__',
                    '__snapshots__',
                    '__mocks__',
                    '__test__',
                    'spec',
                    'specs'
                ]
            },
            {
                name: 'folder-jinja',
                folderNames: [
                    'jinja',
                    'jinja2',
                    'j2'
                ],
            },
            { name: 'folder-markdown', folderNames: ['markdown', 'md'] },
            { name: 'folder-php', folderNames: ['php'] },
            { name: 'folder-phpmailer', folderNames: ['phpmailer'] },
            { name: 'folder-sublime', folderNames: ['sublime'] },
            { name: 'folder-docs', folderNames: ['doc', 'docs', 'documents', 'documentation', 'post', 'posts'] },
            {
                name: 'folder-git',
                folderNames: ['.git', 'submodules', '.submodules']
            },
            { name: 'folder-github', folderNames: ['.github'] },
            { name: 'folder-gitlab', folderNames: ['.gitlab'] },
            { name: 'folder-vscode', folderNames: ['.vscode', '.vscode-test'] },
            {
                name: 'folder-views',
                folderNames: ['view', 'views', 'screen', 'screens', 'page', 'pages', 'html']
            },
            { name: 'folder-vue', folderNames: ['vue'] },
            { name: 'folder-expo', folderNames: ['.expo'] },
            { name: 'folder-config', folderNames: ['config', 'configs', 'configuration', 'configurations', 'settings', '.settings', 'META-INF'] },
            {
                name: 'folder-i18n',
                folderNames: ['i18n', 'internationalization', 'lang', 'language', 'languages', 'locale', 'locales', 'localization', 'translation', 'translate', 'translations', '.tx']
            },
            { name: 'folder-components', folderNames: ['components'] },
            { name: 'folder-aurelia', folderNames: ['aurelia_project'] },
            {
                name: 'folder-resource',
                folderNames: ['resource', 'resources', 'res', 'asset', 'assets', 'static']
            },
            { name: 'folder-lib', folderNames: ['lib', 'libs', 'library', 'libraries', 'vendor', 'vendors', 'third-party'] },
            { name: 'folder-theme', folderNames: ['themes', 'theme', 'color', 'colors', 'design', 'designs'] },
            { name: 'folder-webpack', folderNames: ['webpack', '.webpack'] },
            { name: 'folder-global', folderNames: ['global'] },
            { name: 'folder-public', folderNames: ['public', 'wwwroot', 'web'] },
            { name: 'folder-include', folderNames: ['include', 'includes', '_includes'] },
            { name: 'folder-docker', folderNames: ['docker', 'dockerfiles', '.docker'] },
            { name: 'folder-database', folderNames: ['db', 'database', 'sql', 'data', '_data'] },
            { name: 'folder-log', folderNames: ['log', 'logs'] },
            { name: 'folder-temp', folderNames: ['temp', '.temp', 'tmp', '.tmp', 'cached', 'cache', '.cache'] },
            { name: 'folder-aws', folderNames: ['aws', '.aws'] },
            { name: 'folder-audio', folderNames: ['audio', 'audios', 'music'] },
            { name: 'folder-video', folderNames: ['video', 'videos', 'movie', 'movies'] },
            { name: 'folder-kubernetes', folderNames: ['kubernetes', 'k8s'] },
            { name: 'folder-import', folderNames: ['import', 'imports', 'imported'] },
            { name: 'folder-export', folderNames: ['export', 'exports', 'exported'] },
            { name: 'folder-wakatime', folderNames: ['wakatime'] },
            { name: 'folder-circleci', folderNames: ['.circleci'] },
            { name: 'folder-wordpress', folderNames: ['wp-content'] },
            { name: 'folder-gradle', folderNames: ['gradle', '.gradle'] },
            { name: 'folder-coverage', folderNames: ['coverage', '.nyc-output', '.nyc_output', 'e2e', 'it', 'integration-test', 'integration-tests'] },
            { name: 'folder-class', folderNames: ['class', 'classes', 'model', 'models'] },
            { name: 'folder-other', folderNames: ['other', 'others', 'misc', 'miscellaneous', 'extra', 'extras'] },
            { name: 'folder-typescript', folderNames: ['typescript', 'ts', 'typings', '@types'] },
            { name: 'folder-graphql', folderNames: ['graphql', 'gql'] },
            { name: 'folder-routes', folderNames: ['routes'] },
            { name: 'folder-ci', folderNames: ['.ci', 'ci'] },
            { name: 'folder-benchmark', folderNames: ['benchmark', 'benchmarks', 'performance', 'measure', 'measures', 'measurement'] },
            { name: 'folder-messages', folderNames: ['messages', 'forum', 'chat', 'chats', 'conversation', 'conversations'] },
            { name: 'folder-less', folderNames: ['less'] },
            { name: 'folder-python', folderNames: ['python', '__pycache__', '.pytest_cache'] },
            { name: 'folder-debug', folderNames: ['debug', 'debugging'] },
            { name: 'folder-fastlane', folderNames: ['fastlane'] },
            { name: 'folder-plugin', folderNames: ['plugin', 'plugins', '_plugins', 'extension', 'extensions', 'addon', 'addons'] },
            { name: 'folder-middleware', folderNames: ['middleware', 'middlewares'] },
            { name: 'folder-controller', folderNames: ['controller', 'controllers', 'service', 'services', 'provider', 'providers'] },
            { name: 'folder-ansible', folderNames: ['ansible'] },
            { name: 'folder-server', folderNames: ['server', 'servers', 'backend'] },
            { name: 'folder-client', folderNames: ['client', 'clients', 'frontend'] },
            { name: 'folder-tasks', folderNames: ['tasks', 'tickets'] },
            { name: 'folder-android', folderNames: ['android'] },
            { name: 'folder-ios', folderNames: ['ios'] },
            { name: 'folder-upload', folderNames: ['uploads', 'upload'] },
            { name: 'folder-download', folderNames: ['downloads', 'download'] },
            { name: 'folder-tools', folderNames: ['tools'] },
            { name: 'folder-helper', folderNames: ['helpers', 'helper'] },
            { name: 'folder-serverless', folderNames: ['.serverless', 'serverless'] },
            { name: 'folder-api', folderNames: ['api', 'apis'] },
            { name: 'folder-app', folderNames: ['app', 'apps'] },
            { name: 'folder-archive', folderNames: ['archive', 'archives', 'archival', 'backup', 'backups', 'back-up', 'back-ups'] },
            { name: 'folder-batch', folderNames: ['batch', 'batchs', 'batches'] },
            { name: 'folder-cluster', folderNames: ['cluster', 'clusters'] },
            { name: 'folder-command', folderNames: ['command', 'commands', 'cli', 'clis'] },
            { name: 'folder-constant', folderNames: ['constant', 'constants'] },
            { name: 'folder-container', folderNames: ['container', 'containers'] },
            { name: 'folder-content', folderNames: ['content', 'contents'] },
            { name: 'folder-core', folderNames: ['core'] },
            { name: 'folder-delta', folderNames: ['delta', 'deltas', 'changes'] },
            { name: 'folder-dump', folderNames: ['dump', 'dumps'] },
            { name: 'folder-examples', folderNames: ['example', 'examples', 'sample', 'samples', 'demo', 'demos'] },
            { name: 'folder-environment', folderNames: ['.env', '.environment', 'environment', 'environments'] },
            { name: 'folder-functions', folderNames: ['function', 'functions', 'lambda', 'lambdas'] },
            { name: 'folder-generator', folderNames: ['generator', 'generators', 'generated', 'cfn-gen', 'gen', 'gens', 'auto'] },
            { name: 'folder-hook', folderNames: ['hook', 'hooks', 'trigger', 'triggers'] },
            { name: 'folder-job', folderNames: ['job', 'jobs'] },
            { name: 'folder-keys', folderNames: ['keys', 'key', 'token', 'tokens'] },
            { name: 'folder-layout', folderNames: ['layout', 'layouts'] },
            { name: 'folder-mail', folderNames: ['mail', 'mails', 'smtp'] },
            { name: 'folder-mappings', folderNames: ['mappings', 'mapping'] },
            { name: 'folder-meta', folderNames: ['meta'] },
            { name: 'folder-packages', folderNames: ['package', 'packages'] },
            { name: 'folder-shared', folderNames: ['shared'] },
            { name: 'folder-stack', folderNames: ['stack', 'stacks'] },
            { name: 'folder-template', folderNames: ['template', 'templates'] },
            { name: 'folder-utils', folderNames: ['util', 'utils'] },
            { name: 'folder-private', folderNames: ['private', '.private'] },
            { name: 'folder-secure', folderNames: ['auth', 'authentication', 'secure', 'security', 'cert', 'certs', 'certificate', 'certificates', 'ssl'] },
            { name: 'folder-custom', folderNames: ['custom', 'customs'] },
            { name: 'folder-mock', folderNames: ['mock', 'mocks', 'draft', 'drafts', 'concept', 'concepts', 'sketch', 'sketches'] },
            { name: 'folder-syntax', folderNames: ['syntax', 'syntaxes', 'spellcheck'] },
            { name: 'folder-vm', folderNames: ['vm', 'vms'] },
            { name: 'folder-stylus', folderNames: ['stylus'] },
            { name: 'folder-flow', folderNames: ['flow-typed'] },
            { name: 'folder-rules', folderNames: ['rule', 'rules', 'validation', 'validations', 'validator', 'validators'] },
            { name: 'folder-review', folderNames: ['review', 'reviews', 'revisal', 'revisals', 'reviewed'] },
            { name: 'folder-animation', folderNames: ['animation', 'animations', 'animated'] },
            { name: 'folder-guard', folderNames: ['guard', 'guards'] },
            { name: 'folder-prisma', folderNames: ['prisma'] },
            { name: 'folder-pipe', folderNames: ['pipe', 'pipes'] },
            { name: 'folder-svg', folderNames: ['svg', 'svgs'] },
        ]
    },
    { name: 'classic', defaultIcon: { name: 'folder' }, rootFolder: { name: 'folder-root' } },
    { name: 'none', defaultIcon: { name: '' } },
];


/***/ }),

/***/ "./src/app/editor/shared/models/language.model.ts":
/*!********************************************************!*\
  !*** ./src/app/editor/shared/models/language.model.ts ***!
  \********************************************************/
/*! exports provided: LANGUAGES, LANGUAGE_PROVIDERS, PremierLangage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_PROVIDERS", function() { return LANGUAGE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremierLangage", function() { return PremierLangage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// tslint:disable: max-line-length

/** List of languages supported by the editor */
var LANGUAGES = [
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
var LANGUAGE_PROVIDERS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Language Provider');
/**
 * Provides syntax highlighter for pl and pltp files inside monaco editor.
 */
var PremierLangage = /** @class */ (function () {
    function PremierLangage() {
    }
    /**
     * Registers the language to monaco API.
     */
    PremierLangage.prototype.register = function () {
        var monaco = window.monaco;
        monaco.languages.register({
            id: PremierLangage.ID,
            extensions: ['.pl', '.pltp'],
        });
        monaco.editor.defineTheme(PremierLangage.ID, {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'text', foreground: '000000' },
                { token: 'operator', foreground: 'a31515' }
            ]
        });
        this.registerMonarch(monaco);
        this.registerHover(monaco);
        this.registerLinks(monaco);
        this.registerFolding(monaco);
        this.registerCompletion(monaco);
    };
    /**
     * Registers syntax highlighter for pl language inside monaco editor using
     * the monarch api described at :
     *
     * https://microsoft.github.io/monaco-editor/monarch.html
     * @param monaco instance of monaco editor object.
     */
    PremierLangage.prototype.registerMonarch = function (monaco) {
        monaco.languages.setMonarchTokensProvider(PremierLangage.ID, {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'title', 'author', 'introduction', 'teacher', 'text', 'build', 'before', 'form', 'template',
                'extracss', 'extrajs', 'evaluator', 'extends'
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
                    [/.+/, { token: 'text', next: '@pop' }]
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
        });
    };
    /**
     * Provides informations when the mouse hover a word inside the editor.
     * @param monaco instance of monaco editor object.
     */
    PremierLangage.prototype.registerHover = function (monaco) {
        monaco.languages.registerHoverProvider(PremierLangage.ID, {
            provideHover: function (model, position) {
                var content = model.getLineContent(position.lineNumber);
                var token = model.getWordAtPosition(position);
                if (token) {
                    if (token.startColumn === 1 && token.word in PremierLangage.BUILT_IN) {
                        var lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: PremierLangage.BUILT_IN[token.word] }
                            ]
                        };
                    }
                }
            }
        });
    };
    /**
     * Detects links inside pl and pltp files.
     * @param monaco instance of monaco editor object.
     */
    PremierLangage.prototype.registerLinks = function (monaco) {
        monaco.languages.registerLinkProvider(PremierLangage.ID, {
            provideLinks: function (model, _token) {
                var links = [];
                var lines = model.getValue().split('\n');
                var length = lines.length;
                var i = 0;
                var match;
                while (i < length) {
                    if (lines[i].match(PremierLangage.MULTI_LINE_PATTERN)) {
                        i++;
                        while (i < length) {
                            if (lines[i].match(PremierLangage.END_MULTI_LINE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                        if (i >= length) {
                            break;
                        }
                    }
                    match = PremierLangage.REFERENCE_PATTERN.exec(lines[i]);
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
                            var url = match.pop();
                            var index = lines[i].indexOf(url);
                            links.push({
                                range: new monaco.Range(i + 1, index + 1, i + 1, index + url.length + 2),
                                url: url,
                            });
                        }
                    }
                    i++;
                }
                return links;
            },
            resolveLink: function (link, _token) {
                return link;
            }
        });
    };
    /**
     * Provides folding for multi line keys.
     * @param monaco instance of monaco editor object.
     */
    PremierLangage.prototype.registerFolding = function (monaco) {
        monaco.languages.registerFoldingRangeProvider(PremierLangage.ID, {
            provideFoldingRanges: function (model) {
                var ranges = [];
                var lines = model.getValue().split('\n');
                var length = lines.length;
                var i = 0, start = -1;
                while (i < length) {
                    if (lines[i].match(PremierLangage.MULTI_LINE_PATTERN)) {
                        start = i;
                    }
                    else if (lines[i].match(PremierLangage.END_MULTI_LINE_PATTERN)) {
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
    /**
     * Provides autocompletion while typing.
     * @param monaco instance of monaco editor object.
     */
    PremierLangage.prototype.registerCompletion = function (monaco) {
        monaco.languages.registerCompletionItemProvider(PremierLangage.ID, {
            provideCompletionItems: function (model, position) {
                // 10 is an arbitrary number to provide completion only for line starts.
                if (position.column > 10) {
                    return [];
                }
                // const line = model.getLineContent(position.lineNumber);
                return Object.keys(PremierLangage.BUILT_IN).map(function (name) { return ({
                    label: name,
                    detail: PremierLangage.BUILT_IN[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }); });
            },
        });
    };
    /** Premier langage identifier */
    PremierLangage.ID = 'pl';
    /** Regex expression that matches files referenced inside pl and pltp files */
    PremierLangage.REFERENCE_PATTERN = /(@|(?:\$=)|(?:template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:)?([~a-zA-Z0-9_\.\/-]+)/;
    // Modify the rule multiline inside the method registerMonarch if this is modified !!!
    /** Regex expression that matches the start of multiline keys inside pl and pltp files */
    PremierLangage.MULTI_LINE_PATTERN = /^[a-zA-Z_](\.?\w+)*\s*((==)|(%=)|((\+|-)=(?!@)))/;
    /** Regex expression that matches the end of multiline keys inside pl and pltp files */
    PremierLangage.END_MULTI_LINE_PATTERN = /^==\s*$/;
    /** Built-in keys of premier langage */
    PremierLangage.BUILT_IN = {
        title: 'Titre de l\'exercice/feuille d\'exercice',
        author: 'Auteur de l\'exercice',
        introduction: 'Présentation de la feuille d\'exercice, le contenu de cette clé est interprété comme du markdown.',
        teacher: 'Sur un PLTP, affiche un note visible par les enseignant seulement',
        text: 'Énoncé de l\'exercice, le contenu de cette clé est interprété comme du markdown.',
        build: 'Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), à utiliser avec le builder /builder/build.py',
        before: 'Code python permettant de modifier l\'exercice avant son exécution sur le navigateur',
        form: 'Formulaire HTML permettant à l\'élève de répondre',
        template: 'Définie template comme étant la base de ce fichier',
        extracss: 'Ajoute des feuilles de styles supplémentaires à la page HTML',
        extrajs: 'Ajoute des scripts supplémentaires à la page HTML'
    };
    return PremierLangage;
}());



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
        automaticLayout: true
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
})(ResourceTypes || (ResourceTypes = {}));
function createResource(parent, type) {
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_0__["Asserts"].assert(parent.type === 'folder', 'resource.type must be folder');
    src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_0__["Asserts"].assert(parent.children.every(function (e) { return !e.renaming; }), 'cannot edit multiple resources');
    parent.expanded = true;
    parent.children = parent.children || [];
    return {
        name: '',
        parent: parent.path,
        path: parent.path + '/',
        type: type,
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
        repo: parent.repo,
        meta: undefined,
    };
}


/***/ }),

/***/ "./src/app/editor/shared/models/setting.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shared/models/setting.model.ts ***!
  \*******************************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// tslint:disable: max-line-length
var Settings;
(function (Settings) {
    /** key used to store the settings into localStorage */
    var STORAGE_KEY = '__editor_settings__';
    /** Event that emits when the settings changes */
    Settings.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    /** Group name for editor settings */
    Settings.EDITOR_KEY = 'editor';
    /** Group name for git settings */
    Settings.GIT_KEY = 'git';
    /** The types of settings */
    var Types;
    (function (Types) {
        Types["Checkbox"] = "Checkbox";
        Types["Number"] = "Number";
        Types["Input"] = "Input";
        Types["Dropdown"] = "Dropdown";
    })(Types = Settings.Types || (Settings.Types = {}));
    /**
     * Gets the setting object with the given `group` and the given `name` inside `settings` array.
     * @param settings an array of `Setting` objects
     * @param group the group of the setting object to find.
     * @param name the name of the setting object to find.
     */
    function get(settings, group, name) {
        return settings.find(function (item) { return item.group === group && item.name === name; });
    }
    Settings.get = get;
    /** Gets all settings */
    function getAll() {
        var defaults = [
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
                comment: "Selects the folding strategy. 'auto' uses the strategies contributed for the current document, 'indentation' uses the indentation based folding strategy"
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
                comment: "Controls whether the editor should automatically format the pasted content. (Require a formatter)",
            },
            {
                name: 'formatOnType', group: 'editor.formatting', type: Types.Checkbox, value: false,
                comment: "Controls whether the editor should automatically format the content each time. (Require a formatter)",
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
                name: 'theme', group: 'editor', type: Types.Dropdown, value: 'pl',
                comment: 'Specifies the color theme of the editor', choices: ['pl', 'vs', 'vs-dark'],
                hidden: true,
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
                name: 'blames', group: 'git', type: Types.Checkbox, value: false,
                comment: 'Annotates each line in the focused file with information from the revision which last modified the line.',
            },
        ];
        var settings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaults;
        var _loop_1 = function (item) {
            if (!settings.some(function (e) { return e.name === item.name && e.group === item.group; })) {
                settings.push(item);
            }
        };
        for (var _i = 0, defaults_1 = defaults; _i < defaults_1.length; _i++) {
            var item = defaults_1[_i];
            _loop_1(item);
        }
        return settings;
    }
    Settings.getAll = getAll;
    /**
     * Gets an object representation of all settings with the given `group` in `settings`
     * @param settings settings array
     * @param group group to extract
     */
    function groups(settings, group) {
        var items = settings.filter(function (setting) { return setting.group.startsWith(group); });
        return items.reduce(function (acc, current, index, array) {
            assign(acc, current.name, current.value);
            return acc;
        }, {});
    }
    Settings.groups = groups;
    /** Saves the settings and emits `changed` event with the new settings */
    function save(settings) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        Settings.changed.next(settings);
    }
    Settings.save = save;
    function assign(obj, path, value) {
        var a = path.split('.');
        var o = obj;
        for (var i = 0; i < a.length - 1; i++) {
            var n = a[i];
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
})(Settings || (Settings = {}));


/***/ }),

/***/ "./src/app/editor/shared/pipes/nicify-name.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/shared/pipes/nicify-name.pipe.ts ***!
  \*********************************************************/
/*! exports provided: NicifyNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NicifyNamePipe", function() { return NicifyNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NicifyNamePipe = /** @class */ (function () {
    function NicifyNamePipe() {
    }
    NicifyNamePipe.prototype.transform = function (v, nicifyProperty) {
        if (!v) {
            return v;
        }
        if (!nicifyProperty) {
            v = v.split('.').pop();
        }
        var builder = [];
        var index = 0;
        var c;
        var length = v.length;
        while (index < length) {
            c = v[index];
            // tslint:disable-next-line: triple-equals
            var isLetter = c.toLowerCase() != c.toUpperCase();
            if (index === 0) {
                builder.push(c.toUpperCase());
            }
            else if (c === c.toUpperCase() && isLetter) {
                builder.push(' ');
                builder.push(c);
            }
            else if (c !== '_' && c !== '.') {
                if (v[index - 1] === '_') {
                    builder.push(' ');
                    builder.push(c.toUpperCase());
                }
                if (v[index - 1] === '.') {
                    builder.push(': ');
                    builder.push(c.toUpperCase());
                }
                else {
                    builder.push(c);
                }
            }
            index++;
        }
        return builder.join('');
    };
    NicifyNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'nicifyName' })
    ], NicifyNamePipe);
    return NicifyNamePipe;
}());



/***/ }),

/***/ "./src/app/editor/shared/pipes/path.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/editor/shared/pipes/path.pipe.ts ***!
  \**************************************************/
/*! exports provided: PathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathPipe", function() { return PathPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PathPipe = /** @class */ (function () {
    function PathPipe() {
    }
    PathPipe.prototype.transform = function (v) {
        if (!v) {
            return v;
        }
        var components = v.split('/');
        if (components[0] === 'lib') {
            return v;
        }
        components[0] = 'home';
        return components.join('/');
    };
    PathPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'path' })
    ], PathPipe);
    return PathPipe;
}());



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
/* harmony import */ var _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/editor-group.model */ "./src/app/editor/shared/models/editor-group.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");







var AbstractEditorService = /** @class */ (function () {
    function AbstractEditorService() {
        this.subscriptions = [];
        this.groups = Object.create(null);
        /** invoked each time a (focus | open | close) event is raised */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AbstractEditorService.prototype.addSubscription = function (subscription) {
        this.subscriptions.push(subscription);
    };
    AbstractEditorService.prototype.removeSubscriptions = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
    };
    AbstractEditorService.prototype.listGroups = function () {
        var _this = this;
        return Object.keys(this.groups).map(function (id) { return _this.groups[id]; });
    };
    AbstractEditorService.prototype.findGroup = function (id) {
        return this.groups[id];
    };
    AbstractEditorService.prototype.findGroups = function (resource) {
        return this.findGroupsPredicate(function (group) {
            return group.someResource(function (item) { return item.path === resource.path; });
        });
    };
    AbstractEditorService.prototype.findGroupsPredicate = function (predicate) {
        return this.listGroups().filter(predicate);
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
    AbstractEditorService.prototype.focusGroup = function (group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, active;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = true;
                        this.disposePreview();
                        active = group.activeResource();
                        if (!active) return [3 /*break*/, 3];
                        if (!group.isPreviewGroup()) return [3 /*break*/, 1];
                        this.previewGroup = group;
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(active.meta && active.meta.previewData)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.open(active, {
                                openToSide: true
                            })];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.groups[group.id()] = group;
                        if (!group.isPreviewGroup()) {
                            this.listGroups().forEach(function (item) {
                                item.focus(false);
                            });
                            group.focus(true);
                        }
                        this.changed.next(this.listGroups());
                        return [2 /*return*/, result];
                }
            });
        });
    };
    AbstractEditorService.prototype.disposeGroup = function (group) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var next;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.findGroup(group.id())) {
                            throw new Error("The group '" + group.id() + "' is not found");
                        }
                        this.disposePreview();
                        if (!group.focused()) return [3 /*break*/, 2];
                        next = this.listGroups().find(function (g) { return !Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["compareGroup"])(g, group); });
                        if (!next) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.focusGroup(next)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        delete this.groups[group.id()];
                        this.changed.next(this.listGroups());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AbstractEditorService.prototype.disposePreview = function () {
        if (this.previewGroup) {
            this.previewGroup.closeAll();
            this.previewGroup = undefined;
        }
    };
    AbstractEditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
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
            var group, groups, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.resources.open(resource)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, Promise.reject(new Error("Unable to open '" + resource.path + "': resource content not found"))];
                        }
                        group = void 0;
                        groups = this.listGroups();
                        options = options || {};
                        if (options.openToSide) {
                            group = new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__["EditorGroup"](this);
                        }
                        else {
                            groups = groups.filter(function (g) { return !g.isPreviewGroup(); }); // remove preview group
                            // tslint:disable-next-line: max-line-length
                            group = groups.find(function (g) { return g.focused() && g.someResource(function (r) { return r.path === resource.path; }); }) // find focused that contains the resource
                                || groups.find(function (g) { return g.focused(); }) // find focused
                                || groups.find(function (_) { return true; }) || new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__["EditorGroup"](this); // find any or create new group
                        }
                        return [4 /*yield*/, group.open(resource, options)];
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
    EditorService.prototype.confirm = function (options) {
        return this.notification.confirmAsync(options);
    };
    EditorService.prototype.saveContent = function (resource) {
        return this.resources.save(resource);
    };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
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
                            var name = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__["basename"])(key.endsWith('/') ? key.slice(0, key.length - 1) : key);
                            _this.repos.push({
                                name: name,
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(commit, 'commit');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
            var success, headers, data, name_1, error_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(home, 'parent');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(url, 'url');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].assert(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["isHome"])(home), 'clone operation is applicable to home only');
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
                        name_1 = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_5__["basename"])(url.endsWith('/') ? url.slice(0, url.length - 1) : url);
                        this.notification.logInfo(url + " cloned into the directory " + name_1);
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
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_6__["Asserts"].requireNonNull(item, 'item');
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
/* harmony import */ var _models_resource_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






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
                if (resource.type !== _models_resource_model__WEBPACK_IMPORTED_MODULE_2__["ResourceTypes"].Folder) {
                    return [2 /*return*/, this.editor.open(resource, options)];
                }
                this.resources.focus(resource);
                return [2 /*return*/, true];
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
                        return [4 /*yield*/, this.resources.findRelativeTo(resource, target)];
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"],
            _resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
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
        this.renamed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** event that emits after a resource is created */
        this.created = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** event that emits after a resource is deleted */
        this.deleted = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** event that emits each time any resource is created|deleted|renamed  */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** event that emits each time the focused resource change */
        this.focusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(ResourceService.prototype, "home", {
        get: function () {
            return this.resources[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceService.prototype, "focused", {
        get: function () {
            return this._focused;
        },
        enumerable: true,
        configurable: true
    });
    ResourceService.prototype.focus = function (resource) {
        this._focused = resource;
        if (resource.type === _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].Folder) {
            resource.expanded = !resource.expanded;
        }
        this.focusChanged.next(resource);
    };
    ResourceService.prototype.getAll = function () {
        return this.resources.slice();
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
     * Finds all the resources which meets the given predicate.
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
     * Finds the resource at `path` relative to the path of the given `resource`.
     * @param resource the resource
     * @param path the path to find.
     * @returns A promise that resolves with the resource.
     */
    ResourceService.prototype.findRelativeTo = function (resource, path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, response, error_1;
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
                        error_1 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * creates the resource on the server.
     * @param resource the resource object to create.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    ResourceService.prototype.create = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, success, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].checkName(resource.name);
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied: write access not granted for ' + resource.path);
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](this.find(resource.parent)), 'permission denied: write access not granted for ' + resource.parent);
                        this.task.emitTaskEvent(true, 'creating resource');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
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
                        error_2 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_2;
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
            var success, data, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].checkName(name);
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isRoot"](resource), 'cannot rename root directory');
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
                        error_3 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_3;
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
            var headers, success, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(resource, 'resource');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](resource), 'permission denied');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isRoot"](resource), 'permission denied');
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
                        error_4 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_4;
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
            var resource, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        this.task.emitTaskEvent(true, 'move');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(src, 'src');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(dst, 'dst');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["canWrite"](dst), 'permission denied');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isFolder"](dst), 'destination must be a directory');
                        resource = void 0;
                        if (!('size' in src)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.drop(src, dst)];
                    case 1:
                        resource = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.drag(src, dst)];
                    case 3:
                        resource = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.sort(dst.children);
                        dst.expanded = true;
                        this.focus(resource);
                        this.changed.next(this.getAll());
                        this.task.emitTaskEvent(false);
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 5:
                        error_5 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_5;
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
            var headers, error_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!resource.changed) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true, 'save');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(resource, 'resource');
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
                        error_6 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Downloads the folder as a zip archive
     * @param resource the resource
     * @throws {ReferenceError} if resource is null or undefined.
     * @throws {TypeError} if resource is not a folder.
     * @returns Promise<void> resolved with true and rejected with an error
     */
    ResourceService.prototype.download = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, error_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(resource, 'resource');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(resource.type === _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["ResourceTypes"].Folder);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true);
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'download_resource').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('filebrowser/option', { params: params }).toPromise()];
                    case 2:
                        _a.sent();
                        this.task.emitTaskEvent(false);
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_7;
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
            var params, response, error_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.focus(resource);
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
                        error_8 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reloads the resources from the server.
     * @returns A promise that resolves with true
     */
    ResourceService.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params, resources, error_9;
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
                        this.changed.next(this.resources.slice());
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, true];
                    case 3:
                        error_9 = _a.sent();
                        this.resources = [];
                        this.changed.next(this.resources.slice());
                        this.task.emitTaskEvent(false);
                        throw error_9;
                    case 4: return [2 /*return*/];
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
                                cache.push(item);
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
            var cache, _i, resources_1, root;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cache = [];
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
                        this.cache = cache;
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
                        this.changed.next(this.getAll());
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ResourceService.prototype.drop = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, headers, newRes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(src.name, 'src.name');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(dst.path, 'dst.path');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].checkName(src.name);
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
    ResourceService.prototype.drag = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, before, after, parent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(src.path, 'src.path');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].requireNonNull(dst.path, 'dst.path');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(src.path !== dst.path, 'cannot move the resource to the same path');
                        src_app_shared_models_assert_model__WEBPACK_IMPORTED_MODULE_8__["Asserts"].assert(!_models_filters_model__WEBPACK_IMPORTED_MODULE_9__["isRoot"](src), 'cannot move a root resource');
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
        this.changed.next(this.resources.slice());
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
/*! exports provided: MonacoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonacoService", function() { return MonacoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
/* harmony import */ var _models_language_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/language.model */ "./src/app/editor/shared/models/language.model.ts");
/* harmony import */ var _core_git_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _core_opener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _core_resource_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_setting_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/setting.model */ "./src/app/editor/shared/models/setting.model.ts");
/* harmony import */ var _models_monaco_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/monaco.model */ "./src/app/editor/shared/models/monaco.model.ts");
/* harmony import */ var _core_editor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
// tslint:disable: max-line-length











var MonacoService = /** @class */ (function () {
    function MonacoService(git, editor, opener, resources, languages) {
        var _this = this;
        this.git = git;
        this.editor = editor;
        this.opener = opener;
        this.resources = resources;
        this.languages = languages;
        this.blames = {};
        this.states = {};
        this.editors = [];
        this.cursorChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.blameChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.didSettingsChanged(_models_setting_model__WEBPACK_IMPORTED_MODULE_8__["Settings"].getAll());
        _models_monaco_model__WEBPACK_IMPORTED_MODULE_9__["MONACO_LOADED"].subscribe(function (monaco) { return _this.onMonacoLoaded(monaco); });
    }
    /**
     * Finds the language id linked to the given `resource`
     * @param resource the resource.
     * @returns the id of the language for the resource or empty string if not found.
     */
    MonacoService.prototype.findLanguage = function (resource) {
        var ext = Object(src_app_shared_models_paths_model__WEBPACK_IMPORTED_MODULE_2__["extname"])(resource.path) || resource.path;
        var language = _models_language_model__WEBPACK_IMPORTED_MODULE_3__["LANGUAGES"].find(function (item) { return item.extension === ext; });
        return !!language ? language.id : '';
    };
    /**
     * Disposes the editor.
     * @param editor the disposed editor.
     */
    MonacoService.prototype.onEditorDisposed = function (editor) {
        var item = this.editors.find(function (e) { return e.editor.getId() === editor.getId(); });
        if (!item) {
            throw new Error('unregistered editor ' + editor.getId());
        }
        this.editors = this.editors.filter(function (e) { return e.editor.getId() !== editor.getId(); });
        item.disposables.forEach(function (e) { return e.dispose(); });
        item.editor.dispose();
        if (this.editors.length === 0) {
            this.cursorChanged.next(undefined);
        }
    };
    /**
     * Overrides the editor features.
     * @param editor the created editor.
     */
    MonacoService.prototype.onEditorCreated = function (editor) {
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
            _this.cursorChanged.next(_this.cursor);
        }));
        disposables.push(editor.onDidChangeCursorPosition(function (e) {
            _this.didCursorChanged(e, editor);
        }));
        disposables.push(editor.onDidChangeModelContent(function () {
        }));
        this.editors.push({ editor: editor, disposables: disposables });
        this.didSettingsChanged(this.settings);
    };
    /**
     * Saves the state of the editor and handles the new active resource.
     * @param context the last opened resource and its viewState
     * @param active the active resource
     * @param model the model of the active resource
     * @param editor the editor that opened the resource
     */
    MonacoService.prototype.onOpened = function (context, active, model, editor) {
        if (context.resource) {
            this.states[context.resource.path] = context.viewState;
        }
        var viewState = this.states[active.path];
        if (viewState) {
            editor.restoreViewState(viewState); // fix #228
        }
        this.cursor = editor.getPosition();
        this.cursorChanged.next(this.cursor);
        this.refreshBlames(active, model);
    };
    /** Gets a value indicating whether blame option is enablad in the settings */
    MonacoService.prototype.enabledBlames = function () {
        return _models_setting_model__WEBPACK_IMPORTED_MODULE_8__["Settings"].get(this.settings, 'git', 'blames').value === true;
    };
    /**
     * Refreshs the blames of the editor
     * @param resource the focused resource
     * @param model the model of the resource
     * @returns A promise that resolves with true
     */
    MonacoService.prototype.refreshBlames = function (resource, model) {
        var _this = this;
        if (this.enabledBlames()) {
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
                _this.refreshBlame(model);
                return true;
            }).catch(function (_) { return false; });
        }
        return true;
    };
    MonacoService.prototype.onMonacoLoaded = function (monaco) {
        var _this = this;
        this.languages.forEach(function (item) { return item.register(); });
        this.editor.addSubscription(this.resources.deleted.subscribe(function (e) {
            _this.disposeModel(e.path);
        }));
        this.editor.addSubscription(this.resources.renamed.subscribe(function (e) {
            _this.disposeModel(e.before);
        }));
        this.editor.addSubscription(_models_setting_model__WEBPACK_IMPORTED_MODULE_8__["Settings"].changed.subscribe(function (e) {
            _this.didSettingsChanged(e);
        }));
    };
    MonacoService.prototype.disposeModel = function (path) {
        var monaco = window.monaco;
        var model = monaco.editor.getModel(monaco.Uri.parse(path));
        if (model) {
            model.dispose();
        }
    };
    MonacoService.prototype.didCursorChanged = function (e, editor) {
        this.cursor = e.position;
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
        this.refreshBlame(editor.getModel());
    };
    MonacoService.prototype.didSettingsChanged = function (settings) {
        var _this = this;
        this.settings = settings;
        this.options = _models_setting_model__WEBPACK_IMPORTED_MODULE_8__["Settings"].groups(settings, _models_setting_model__WEBPACK_IMPORTED_MODULE_8__["Settings"].EDITOR_KEY);
        var monaco = window.monaco;
        if (monaco) {
            this.editors.forEach(function (item) {
                item.editor.updateOptions(_this.options);
            });
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
    MonacoService.prototype.refreshBlame = function (model) {
        if (this.enabledBlames() && model) {
            var blame = void 0;
            var blames = this.blames[model.uri.path];
            if (blames) {
                var lineNumber = this.cursor ? this.cursor.lineNumber : 0;
                var content_1 = model.getLineContent(lineNumber);
                blame = blames.find(function (item) { return item.text.trim() === content_1.trim(); });
            }
            this.blameChanged.next({ blame: blame, modelId: model.id });
        }
    };
    MonacoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_models_language_model__WEBPACK_IMPORTED_MODULE_3__["LANGUAGE_PROVIDERS"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_git_service__WEBPACK_IMPORTED_MODULE_4__["GitService"],
            _core_editor_service__WEBPACK_IMPORTED_MODULE_10__["EditorService"],
            _core_opener_service__WEBPACK_IMPORTED_MODULE_5__["OpenerService"],
            _core_resource_service__WEBPACK_IMPORTED_MODULE_6__["ResourceService"], Array])
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

module.exports = "<span class='blame' *ngIf='enabledBlames()'>\n    {{blame.email}}, \n    {{blame.day | timeAgo}} \n    <ng-container *ngIf='blame.commit'>- {{blame.commit}}</ng-container>\n </span>\n<ngx-monaco-editor [hidden]='editor.diffEditing' class='code-editor' [ngClass]='{\"with-blame\": blame}' [options]=\"{}\" [model]='{}' (onInit)=\"codeEditorLoaded($event)\"></ngx-monaco-editor>\n<ngx-monaco-diff-editor [hidden]='!editor.diffEditing' class='code-editor' [ngClass]='{\"with-blame\": blame}' [options]=\"{}\" [originalModel]=\"{}\" [modifiedModel]=\"{}\" (onInit)=\"diffEditorLoaded($event)\"></ngx-monaco-diff-editor>\n\n\n"

/***/ }),

/***/ "./src/app/editor/workspace/code-editor/code-editor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/editor/workspace/code-editor/code-editor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-editor {\n  height: calc(100% - 36px); }\n\n.code-editor.with-blame {\n  height: calc(100% - (36px + 16px)); }\n\n.blame {\n  color: #999999;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  width: 100%;\n  height: 16px;\n  padding: 0 61px;\n  font-family: Menlo, Monaco, \"Courier New\", monospace;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUNBQWtDLEVBQ3JDOztBQUVEO0VBQ0ksZUFBYztFQUNkLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsd0JBQXVCO0VBQ3ZCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixxREFBb0Q7RUFDcEQsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci93b3Jrc3BhY2UvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZS1lZGl0b3Ige1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7IC8vIDM2ID0gdGFiIGhlaWdodCAxNiA9IGJsYW1lIGhlaWdodFxufVxuXG4uY29kZS1lZGl0b3Iud2l0aC1ibGFtZSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoMzZweCArIDE2cHgpKTsgLy8gMzYgPSB0YWIgaGVpZ2h0IDE2ID0gYmxhbWUgaGVpZ2h0XG59XG5cbi5ibGFtZSB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgNjFweDtcbiAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn0iXX0= */"

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
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _shared_services_core_preview_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/core/preview.service */ "./src/app/editor/shared/services/core/preview.service.ts");









var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent(git, preview, notification, editorService, monacoService) {
        this.git = git;
        this.preview = preview;
        this.notification = notification;
        this.editorService = editorService;
        this.monacoService = monacoService;
        this.subscriptions = [];
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.editor.opened.subscribe(function (uri) {
            _this.open(uri);
        }));
        this.subscriptions.push(this.editor.previewRequested.subscribe(function (item) {
            _this.didPreview(item);
        }));
        this.subscriptions.push(this.editor.diffRequested.subscribe(function () {
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
        this.monacoService.onEditorDisposed(this.editor.codeEditor);
        this.monacoService.onEditorDisposed(this.editor.diffEditor.getModifiedEditor());
    };
    CodeEditorComponent.prototype.codeEditorLoaded = function (codeEditor) {
        this.monacoService.onEditorCreated(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.resource());
    };
    CodeEditorComponent.prototype.diffEditorLoaded = function (diffEditor) {
        this.monacoService.onEditorCreated(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.resource());
    };
    CodeEditorComponent.prototype.enabledBlames = function () {
        return this.monacoService.enabledBlames() && !!this.blame;
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
            if (Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canBePreviewed"])(_this.active)) {
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
                _this.monacoService.refreshBlames(_this.active, _this.editor.codeEditor.getModel());
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
            var context, monaco, uri, language, model;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.blame = null;
                        context = {
                            resource: this.active,
                            viewState: this.editor.codeEditor.saveViewState(),
                        };
                        this.active = resource;
                        monaco = window.monaco;
                        uri = monaco.Uri.parse(resource.path);
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
                        return [4 /*yield*/, this.checkDiffOptions(monaco, language)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.checkCodeOptions(monaco, resource, options)];
                    case 2:
                        _a.sent();
                        this.monacoService.onOpened(context, this.active, model, this.editor.codeEditor);
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeEditorComponent.prototype.checkCodeOptions = function (monaco, resource, options) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_5__["GitService"],
            _shared_services_core_preview_service__WEBPACK_IMPORTED_MODULE_8__["PreviewService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_4__["MonacoService"]])
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

module.exports = "<div class='image-editor'>\n    <div *ngIf='isSVG; else notSVG' [innerHTML]='svg | trustHtml' [ngStyle]='{zoom: editor.zoom}'></div>\n    <ng-template #notSVG>\n        <img [src]='url'  [ngStyle]='{zoom: editor.zoom}' />\n    </ng-template>\n    <div class='image-editor__btn-group'>\n        <div class='image-editor__btn'>{{editor.zoom | number:'1.1-1'}}</div>\n        <div class='image-editor__btn' matTooltip='Zoom In' (click)='editor.zoomIn()'>\n            <i class=\"fas fa-plus\"></i>\n        </div>\n        <div class='image-editor__btn' matTooltip='Zoom Out' (click)='editor.zoomOut()'>\n            <i class=\"fas fa-minus\"></i>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/workspace/image-editor/image-editor.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/editor/workspace/image-editor/image-editor.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-editor {\n  height: calc(100% - 36px);\n  position: relative;\n  background-position: 0px 0px, 10px 10px;\n  background-size: 20px 20px;\n  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);\n  text-align: center; }\n  .image-editor img {\n    text-align: center;\n    display: block;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    max-width: 100%;\n    height: auto;\n    margin: auto;\n    border-radius: 16px;\n    background-color: transparent;\n    /*         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */ }\n  .image-editor .image-editor__btn-group {\n    position: absolute;\n    top: 48px;\n    right: 12px;\n    width: 32px; }\n  .image-editor .image-editor__btn {\n    background-color: #ecedf0;\n    width: 32px;\n    height: 32px;\n    border-radius: 2px 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL2ltYWdlLWVkaXRvci9pbWFnZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLHdDQUF1QztFQUN2QywyQkFBMEI7RUFDMUIsdUxBQXFMO0VBQ3JMLG1CQUFrQixFQW9DckI7RUExQ0Q7SUFRUSxtQkFBa0I7SUFDbEIsZUFBYztJQUNkLG1CQUFrQjtJQUNsQixTQUFRO0lBQ1IsV0FBVTtJQUNWLFlBQVc7SUFDWCxVQUFTO0lBQ1QsZ0JBQWU7SUFDZixhQUFZO0lBQ1osYUFBWTtJQUNaLG9CQUFtQjtJQUNuQiw4QkFBNkI7SUFDckMsMkZBQTJGLEVBQ3RGO0VBckJMO0lBeUJRLG1CQUFrQjtJQUNsQixVQUFTO0lBQ1QsWUFBVztJQUNYLFlBQVcsRUFDZDtFQTdCTDtJQWdDUSwwQkFBeUI7SUFDekIsWUFBVztJQUNYLGFBQVk7SUFDWix1QkFBc0I7SUFDdEIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsZ0JBQWU7SUFDZixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL2ltYWdlLWVkaXRvci9pbWFnZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4LCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWVlIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNlZWUgNzUlLCAjZWVlIDEwMCUpLGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlZSAyNSUsIHdoaXRlIDI1JSwgd2hpdGUgNzUlLCAjZWVlIDc1JSwgI2VlZSAxMDAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vKiAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7ICovXG4gICAgfVxuXG5cbiAgICAuaW1hZ2UtZWRpdG9yX19idG4tZ3JvdXAge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNDhweDtcbiAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgIH1cblxuICAgIC5pbWFnZS1lZGl0b3JfX2J0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VkZjA7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCA0cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59Il19 */"

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
        this.openSubscription = this.editor.opened.subscribe(function (document) {
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

module.exports = "<mat-progress-bar *ngIf='loading' mode=\"indeterminate\"></mat-progress-bar>\n<iframe *ngIf='isURL' class=\"preview-editor\" [srcdoc]=\"content | trustHtml\" frameborder=\"0\" (load)='didFrameLoaded()'></iframe>\n<div *ngIf='isHTML' class='preview-editor' [innerHTML]='content | trustHtml' runScripts></div>\n<div *ngIf='isMarkdown' class='preview-editor'><markdown [data]=\"content\"></markdown></div>\n"

/***/ }),

/***/ "./src/app/editor/workspace/preview-editor/preview-editor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/editor/workspace/preview-editor/preview-editor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-editor {\n  height: calc(100% - 36px);\n  overflow: auto;\n  padding: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL3ByZXZpZXctZWRpdG9yL3ByZXZpZXctZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxhQUFZLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL3ByZXZpZXctZWRpdG9yL3ByZXZpZXctZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweDtcbn0iXX0= */"

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
        this.openSubscription = this.editor.opened.subscribe(function (document) {
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
        this.isURL = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isPL"])(resource);
        this.loading = this.isURL;
        if (this.isHTML && this.scripts) {
            this.scripts.runScripts();
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

/***/ "./src/app/editor/workspace/setting-editor/setting-editor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/editor/workspace/setting-editor/setting-editor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='tab-bar'>\n    <div class=\"tab-item active\">\n        <i class=\"tab-icon fa fa-cog\"></i>&nbsp;\n        <span>Settings</span>\n        <span class='tab-close' (click)='didClose()'>&nbsp;&times;</span>\n    </div>\n</div>\n<div class='setting-editor'>\n    <mat-list class='list-groups'>\n        <mat-list-item *ngFor='let item of groups' (click)='didSelect(item)'>\n            <span class='setting-item' [ngClass]='{ active: selection.title === item.title}'>{{item.title|nicifyName}}</span>\n        </mat-list-item>\n    </mat-list>\n    <mat-list>\n        <ng-container *ngFor=\"let setting of selection.settings\">\n           <mat-list-item>\n                <span mat-line class='setting-item active'>{{setting.name|nicifyName:true}}</span>\n                <p mat-line *ngIf='setting.type !== \"Checkbox\"'>{{setting.comment}}</p>\n                <div mat-line>\n                    <ng-container [ngSwitch]=\"setting.type\">\n                        <mat-checkbox  color='primary' *ngSwitchCase=\"'Checkbox'\" [(ngModel)]='setting.value' (change)='didChange()'>{{setting.comment}}</mat-checkbox>\n                        <mat-form-field *ngSwitchCase=\"'Number'\">\n                            <input matInput type='number' placeholder=\"\" [(ngModel)]=\"setting.value\" (change)='didChange()'>\n                        </mat-form-field>\n                        <mat-form-field *ngSwitchCase=\"'Input'\">\n                            <input matInput type='text' placeholder=\"\" [(ngModel)]=\"setting.value\" (keyup)='didChange()'>\n                        </mat-form-field>\n                        <mat-form-field *ngSwitchCase=\"'Dropdown'\">\n                            <mat-select [(value)]='setting.value' (selectionChange)='didChange()'>\n                                <mat-option *ngFor=\"let choice of setting.choices\" [value]=\"choice\">\n                                    {{choice}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </ng-container>\n                </div>\n            </mat-list-item>\n        </ng-container>\n    </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/editor/workspace/setting-editor/setting-editor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/editor/workspace/setting-editor/setting-editor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".setting-editor {\n  height: calc(100% - 36px);\n  display: flex; }\n\n.mat-form-field {\n  width: 75%; }\n\n.tab-bar {\n  padding: 0; }\n\n.tab-item.active {\n  background-color: #FFF; }\n\n.tab-item .tab-icon {\n  margin-right: 4px; }\n\n.tab-item .tab-close {\n  font-size: 18px; }\n\n.tab-item .tab-close:hover {\n    opacity: 1; }\n\n.tab-item.changed {\n  border-bottom: 1px solid salmon; }\n\n.mat-list {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n\n.mat-list.mat-list-base {\n    margin-bottom: 8px; }\n\n.mat-list.list-groups {\n  width: 180px;\n  padding: 0 12px;\n  overflow: auto; }\n\n.setting-item {\n  cursor: pointer; }\n\n.setting-item.active, .setting-item:hover {\n    color: #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL3NldHRpbmctZWRpdG9yL3NldHRpbmctZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQXlCO0VBQ3pCLGNBQWEsRUFDaEI7O0FBR0Q7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxXQUFVLEVBQ2I7O0FBRUQ7RUFFUSx1QkFBc0IsRUFDekI7O0FBSEw7RUFNUSxrQkFBaUIsRUFDcEI7O0FBUEw7RUFVUSxnQkFBZSxFQUlsQjs7QUFkTDtJQVlZLFdBQVUsRUFDYjs7QUFiVDtFQWlCUSxnQ0FBK0IsRUFDbEM7O0FBR0w7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGVBQWMsRUFJakI7O0FBUEQ7SUFLUSxtQkFBa0IsRUFDckI7O0FBR0w7RUFDSSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZ0JBQWUsRUFJbEI7O0FBTEQ7SUFHUSxlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9zZXR0aW5nLWVkaXRvci9zZXR0aW5nLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nLWVkaXRvciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLnRhYi1iYXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50YWItaXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC50YWItaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIC50YWItY2xvc2Uge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuY2hhbmdlZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzYWxtb247XG4gICAgfVxufVxuXG4ubWF0LWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmLm1hdC1saXN0LWJhc2Uge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxufVxuXG4ubWF0LWxpc3QubGlzdC1ncm91cHMge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zZXR0aW5nLWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLmFjdGl2ZSwgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/workspace/setting-editor/setting-editor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/editor/workspace/setting-editor/setting-editor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SettingEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingEditorComponent", function() { return SettingEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_setting_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/setting.model */ "./src/app/editor/shared/models/setting.model.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation/navigation.service */ "./src/app/editor/navigation/navigation.service.ts");

// tslint:disable: max-line-length




var SettingEditorComponent = /** @class */ (function () {
    function SettingEditorComponent(navigation, monaco) {
        this.navigation = navigation;
        this.monaco = monaco;
        /** setting groups */
        this.groups = [];
        this.settings = _shared_models_setting_model__WEBPACK_IMPORTED_MODULE_2__["Settings"].getAll().filter(function (setting) { return !setting.hidden; });
    }
    SettingEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups = this.settings.map(function (e) {
            return e.group;
        }).sort(function (a, b) {
            return a.split('.').pop().toLowerCase() < b.split('.').pop().toLowerCase() ? -1 : 1;
        }).reduce(function (acc, current, index, array) {
            if (!acc.some(function (item) { return item.title === current; })) {
                acc.push({
                    title: current,
                    settings: _this.settings.filter(function (setting) { return setting.group === current; })
                });
            }
            return acc;
        }, []);
        this.selection = this.groups[0];
    };
    /** Handles close button click event */
    SettingEditorComponent.prototype.didClose = function () {
        this.navigation.settings.next();
    };
    /** Handles settings change event */
    SettingEditorComponent.prototype.didChange = function () {
        _shared_models_setting_model__WEBPACK_IMPORTED_MODULE_2__["Settings"].save(this.settings);
    };
    /**
     * Handles click event on setting group inside the template.
     * @param group the selected group.
     */
    SettingEditorComponent.prototype.didSelect = function (group) {
        this.selection = group;
    };
    SettingEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'setting-editor',
            template: __webpack_require__(/*! ./setting-editor.component.html */ "./src/app/editor/workspace/setting-editor/setting-editor.component.html"),
            styles: [__webpack_require__(/*! ./setting-editor.component.scss */ "./src/app/editor/workspace/setting-editor/setting-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"], _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_3__["MonacoService"]])
    ], SettingEditorComponent);
    return SettingEditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/workspace/welcome/welcome.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/workspace/welcome/welcome.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h3 class='welcome-title'>PL Editor</h3>\n<div class='welcome-section'>\n    <h3>User Interface</h3>\n    <img src=\"static/filebrowser/app/assets/images/interface.png\" alt=\"interface\"> <br/> <br/>\n    <p>\n        PL Editor comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your project.\n        The UI is divided into four areas:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>A)&nbsp; <b>Side Bar</b> Contains different views like the Explorer to assist you while working on your project.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>B)&nbsp; <b>Editor</b> The main area to edit your files. You can open as many editors as you like side by side.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>C)&nbsp; <b>Debugging</b> Display different debugging information below the editor region for output or debug informations.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>D)&nbsp; <b>Status Bar</b> Gives you additional context-specific indicators like the repository of the focused file/folder.</p>\n        </mat-list-item>\n    </mat-list>\n</div>\n\n<div class='welcome-section'>\n    <h3>Side by side editing</h3>\n    <mat-divider></mat-divider>\n    <p>\n        You can open as many editors as you like side by side horizontally.\n        If you already have one editor open, there are multiple ways of opening another editor to the side of the existing one:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>Click on a file in the Explorer.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Press <b> ⌘ →</b> (<b>Ctrl →</b> on Windows/Linux) inside a code editor will split the editor.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Click the <b>Split Editor</b> button in the upper right of an editor.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Press <b>Ctrl + O</b> to open the <b>Quick Open</b> dialog.</p>\n        </mat-list-item>\n    </mat-list>\n    <p>\n        Whenever you open another file, the editor that is active will display the content of that file.\n        So if you have two editors side by side and you want to open file into the right hand editor,\n        make sure that editor is active (by clicking inside it) before opening your file.\n    </p>\n    <p class='welcome-tip'>\n        Tip: You can resize editors and reorder them. Drag and drop the editor title area to reposition or resize the editor.\n    </p>\n</div>\n\n<div class='welcome-section'>\n    <h3>Explorer</h3>\n    <mat-divider></mat-divider>\n    <p>\n        The Explorer is used to browse, open, and manage all of the files and folders in your project.\n        You can do many things from here:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>Create, delete, and rename files and folders.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Move files and folders with drag and drop.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Load, reload, and test pl files </p>\n        </mat-list-item>\n    </mat-list>\n    <p class='welcome-tip'>Tip: You can open quickly a file with <b>Ctrl + O</b></p>\n    <p class='welcome-tip'>Tip: You can drag and drop files (Single file) into the Explorer from outside to copy them</p>\n</div>\n\n<div class='welcome-section'>\n    <h3>Code colorization</h3>\n    <mat-divider></mat-divider>\n    <p>The editor provides a syntax colorization for the following extensions:</p>\n    <mat-list>\n        <mat-list-item *ngFor='let language of languages'> {{language}} </mat-list-item>\n    </mat-list>\n    <p>\n        There is also a special feature for files with <b>.pl</b> and <b>.pltp</b> extensions that allow you to embed a colorization of all the other languages inside a multiline key like in the following image. <br/>\n    </p>\n    <img src=\"static/filebrowser/app/assets/images/embed-style.png\" alt=\"embed style\"> <br/>\n</div>\n\n<div>\n    <h3>Shorcuts</h3>\n    <mat-divider></mat-divider>\n    <table mat-table [dataSource]=\"shorcuts\" class=\"mat-elevation-z1\" style='width: 100%'>\n        <!-- Command -->\n        <ng-container matColumnDef=\"command\">\n            <th mat-header-cell *matHeaderCellDef> Command </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.command}} </td>\n        </ng-container>\n\n        <!-- Action -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/workspace/welcome/welcome.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/workspace/welcome/welcome.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  padding: 4rem 8rem;\n  display: flex;\n  flex-direction: column;\n  overflow: auto; }\n\n.welcome-title {\n  align-self: center; }\n\n.welcome-section {\n  width: 100%; }\n\n.welcome-tip {\n  border-left: .25em solid #dfe2e5;\n  color: #6a737d;\n  padding: 0 1em; }\n\nimg {\n  display: block;\n  width: 50%;\n  height: auto;\n  margin: auto; }\n\n.mat-list-base .mat-list-item, .mat-list-base .mat-list-option {\n  height: 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUNBQWdDO0VBQ2hDLGVBQWM7RUFDZCxlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksZUFBYztFQUNkLFdBQVU7RUFDVixhQUFZO0VBQ1osYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cmVtIDhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ud2VsY29tZS10aXRsZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ud2VsY29tZS1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtdGlwIHtcbiAgICBib3JkZXItbGVmdDogLjI1ZW0gc29saWQgI2RmZTJlNTtcbiAgICBjb2xvcjogIzZhNzM3ZDtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbn1cbmltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/workspace/welcome/welcome.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/workspace/welcome/welcome.component.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_language_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/language.model */ "./src/app/editor/shared/models/language.model.ts");



var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.displayedColumns = ['command', 'action'];
        this.shorcuts = [
            { command: 'F1', action: 'Show all commands (inside a code editor)' },
            { command: 'Ctrl + O', action: 'Quick open a file' },
            { command: 'Ctrl|⌘ + Space', action: 'Trigger suggestion (inside a code editor)' },
            { command: 'Ctrl|⌘ Right Arrow', action: 'Split editor (inside a code editor)' },
            { command: 'Ctrl|⌘ + Enter', action: 'Open preview (inside a code editor)' },
            { command: 'Ctrl|⌘ + Alt + Enter', action: 'Hide preview (inside a code editor)' },
            { command: 'Ctrl|⌘ + S', action: 'Save focused file (inside a code editor)' },
            { command: 'Ctrl|⌘ + Alt + S', action: 'Save all files (inside a code editor)' },
            { command: 'Ctrl|⌘ + K', action: 'Close focused file (inside a code editor)' },
            { command: 'Ctrl|⌘ + Alt + K', action: 'Close all files (inside a code editor)' },
        ];
        this.languages = _shared_models_language_model__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"].reduce(function (p, c, i, a) {
            if (!p.includes(c.id)) {
                p.push(c.id);
            }
            return p;
        }, []);
    }
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/editor/workspace/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/editor/workspace/welcome/welcome.component.scss")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<as-split class='h100' direction='horizontal' gutterSize='2' useTransition='true' cdkDropListGroup>\n    <ng-container *ngFor='let group of groups'>\n        <as-split-area class='editor-group h100' style='overflow: hidden;'>\n            <div class='tab-bar'>\n                <div [id]='group.id()' class='tab-group' cdkDropList [cdkDropListData]=\"group.resources\" (cdkDropListDropped)=\"group.drop($event)\">\n                    <div *ngFor='let resource of group.resources; trackBy: group.trackResource' [matTooltip]=\"resource.path | path\"\n                        [ngClass]=\"{'tab-item': true, active: group.isActive(resource), changed: resource.changed}\"\n                        (click)='group.reopen(resource)' cdkDragAxis='x' cdkDrag>\n                        <img [resourceIcon]=\"resource\"/>\n                        <ng-container *ngIf='group.isPreviewGroup()'>\n                            <span>'Preview'</span>&nbsp;\n                        </ng-container>\n                        <span>{{resource.name}}</span>\n                        <span class='tab-close' (click)='group.close(resource, true)'>&nbsp;&times;</span>\n                    </div>\n                </div>\n                <div class=\"spacer\"></div>\n                <ng-container *ngIf='group.hasAction();'>\n                    <ng-container *ngIf='group.focused()'>\n                        <ng-container *ngFor='let action of group.actions()'>\n                            <div class='tab-item' [matTooltip]='action.tooltip' *ngIf='action.condition(group.activeResource())' (click)='action.invoke(group.activeResource())'>\n                                <i class=\"{{action.icon}}\"></i>\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                    <div class='tab-item' matTooltip='More Options' [matMenuTriggerFor]=\"editorMenu\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                    </div>\n                    <mat-menu #editorMenu=\"matMenu\">\n                        <button mat-menu-item (click)='group.save(group.activeResource())'>Save ⌘S</button>\n                        <button mat-menu-item (click)='group.saveAll()'>Save All ⌘Alt S</button>\n                        <button mat-menu-item (click)='group.close(group.activeResource(), true)'>Close ⌘K</button>\n                        <button mat-menu-item (click)='group.closeAll(true)'>Close All ⌘Alt K</button>\n                        <button mat-menu-item (click)='group.closeSaved()'>Close Saved ⌘Alt U</button>\n                    </mat-menu>\n                </ng-container>\n            </div>\n            <ng-container *ngFor='let editor of group.editors; trackBy: group.trackEditor'>\n                <ng-container [ngSwitch]=\"editor.type()\">\n                    <code-editor [hidden]='!group.activeEditorIs(\"code\")' *ngSwitchCase=\"'code'\" [editor]='editor'></code-editor>\n                    <image-editor [hidden]='!group.activeEditorIs(\"image\")' *ngSwitchCase=\"'image'\" [editor]='editor'></image-editor>\n                    <preview-editor [hidden]='!group.activeEditorIs(\"preview\")' *ngSwitchCase=\"'preview'\" [editor]='editor'></preview-editor>\n                </ng-container>\n            </ng-container>\n        </as-split-area>\n    </ng-container>\n    <as-split-area class='editor-group h100' style='overflow: hidden;' *ngIf='showSettings'>\n        <setting-editor></setting-editor>\n    </as-split-area>\n    <welcome *ngIf='!hasGroup'></welcome>\n</as-split>\n"

/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-group {\n  position: relative;\n  overflow: hidden; }\n\n.tab-bar {\n  padding: 0; }\n\n.tab-bar .tab-group {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    overflow-x: auto; }\n\n.tab-item.active {\n  background-color: #FFF; }\n\n.tab-item .tab-icon {\n  margin-right: 4px; }\n\n.tab-item .tab-close {\n  font-size: 18px; }\n\n.tab-item .tab-close:hover {\n    opacity: 1; }\n\n.tab-item.changed {\n  border-bottom: 1px solid salmon; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9lZGl0b3Ivd29ya3NwYWNlL3dvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVLEVBUWI7O0FBVEQ7SUFHUSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLGFBQVk7SUFDWixZQUFXO0lBQ1gsaUJBQWdCLEVBQ25COztBQUdMO0VBRVEsdUJBQXNCLEVBQ3pCOztBQUhMO0VBTVEsa0JBQWlCLEVBQ3BCOztBQVBMO0VBVVEsZ0JBQWUsRUFJbEI7O0FBZEw7SUFZWSxXQUFVLEVBQ2I7O0FBYlQ7RUFpQlEsZ0NBQStCLEVBQ2xDIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YWItYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC50YWItZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cbn1cblxuLnRhYi1pdGVtIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgfVxuXG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgLnRhYi1jbG9zZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5jaGFuZ2VkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNhbG1vbjtcbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.service */ "./src/app/editor/navigation/navigation.service.ts");




var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(editor, changes, navigation) {
        this.editor = editor;
        this.changes = changes;
        this.navigation = navigation;
        this.subscriptions = [];
        this.groups = [];
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasGroup = false;
        this.groups = this.editor.listGroups();
        this.subscriptions.push(this.editor.changed.subscribe(function (groups) {
            _this.groups = groups;
            _this.hasGroup = groups.length > 0;
            _this.changes.detectChanges();
        }));
        this.subscriptions.push(this.navigation.settings.subscribe(function () {
            _this.showSettings = !_this.showSettings;
        }));
    };
    WorkspaceComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (item) { return item.unsubscribe(); });
    };
    WorkspaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/editor/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.scss */ "./src/app/editor/workspace/workspace.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
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

module.exports = "form {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG59ICJdfQ== */"

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

/***/ "./src/app/shared/components/tree/tree.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport class=\"tree-scroll\" itemSize=\"32\">\n  <ng-container *cdkVirtualFor=\"let item of virtualSource; trackBy: didTrack\"></ng-container>\n  <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <!-- DEFAULT NODE -->\n    <mat-tree-node\n      *matTreeNodeDef=\"let node\" matTreeNodePadding matTreeNodePaddingIndent=\"16\"\n      [id]=\"node.id\" [ngClass]=\"{ focused: node.isFocused, editing: node.isEditing }\">\n      <ng-container *ngTemplateOutlet=\"defaultNodeTemplate; context: { $implicit: node }\"></ng-container>\n      <ng-container *ngIf=\"node.isCreating\">\n        <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n      </ng-container>\n    </mat-tree-node>\n    <!-- EXPANDABLE NODE -->\n    <mat-tree-node\n      *matTreeNodeDef=\"let node; when: isExpandableNode\" matTreeNodePadding matTreeNodePaddingIndent=\"16\" matTreeNodeToggle\n      [id]=\"node.id\" [ngClass]=\"{ focused: node.isFocused, editing: node.isEditing }\">\n      <ng-container *ngTemplateOutlet=\"defaultNodeTemplate; context: { $implicit: node }\"></ng-container>\n      <ng-container *ngIf=\"node.isCreating\">\n        <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n      </ng-container>\n    </mat-tree-node>\n  </mat-tree>\n</cdk-virtual-scroll-viewport>\n<!-- DEFAULT TEMPLATE -->\n<ng-template #defaultNodeTemplate let-node>\n  <ng-container *ngIf=\"!node.isRenaming; else renaming\">\n    <div class=\"node-content\" (click)=\"didNodeClicked(node, $event)\">\n      <ng-container *ngIf=\"template; else default\">\n        <ng-container *ngTemplateOutlet=\"template; context: { $implicit: node }\"></ng-container>\n      </ng-container>\n      <ng-template #default>\n        {{node.name}}\n      </ng-template>\n    </div>\n  </ng-container>\n  <ng-template #renaming>\n    <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n  </ng-template>\n</ng-template>\n<!-- EDITING STATE -->\n<ng-template #editingState>\n  <div class=\"node-content\">\n    <span class=\"input-wrapper\">\n      <input autofocus\n              type='text'\n              placeholder='Press Enter to create ESC to cancel...'\n              [(ngModel)]=\"editing.name\"\n              (keydown)='didEditingChanged($event)'\n              (blur)='didEditingChanged($event)'/>\n      </span>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/components/tree/tree.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree-scroll {\n  height: 100%; }\n\n.mat-tree-node {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 32px;\n  overflow: hidden; }\n\n.mat-tree-node:hover, .mat-tree-node.focused {\n    background: rgba(66, 66, 66, 0.1); }\n\n.mat-tree-node .node-content {\n    cursor: pointer;\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    min-height: 32px;\n    padding: 0 16px;\n    overflow: hidden; }\n\n.mat-tree-node .input-wrapper {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-right: 4px; }\n\n.mat-tree-node input {\n    width: 100%;\n    margin: 0 0 0 16px;\n    padding: 0.1rem 0.3rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.15rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n\n.mat-tree-node input:focus {\n      color: #495057;\n      background-color: #fff;\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n\n.dnd-drag {\n  opacity: 0.5; }\n\n.dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvYXBwcy9maWxlYnJvd3Nlci9jbGllbnQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBOENqQjs7QUFuREQ7SUFRSSxrQ0FBOEIsRUFDL0I7O0FBVEg7SUFZSSxnQkFBZTtJQUNmLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCOztBQXJCSDtJQXdCSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxrQkFBaUIsRUFDbEI7O0FBNUJIO0lBK0JJLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsdUJBQXNCO0lBQ3RCLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGVBQWM7SUFDZCx1QkFBc0I7SUFDdEIsNkJBQTRCO0lBQzVCLDBCQUF5QjtJQUN6Qix1QkFBc0I7SUFDdEIseUVBQXdFLEVBUXpFOztBQWpESDtNQTJDUSxlQUFjO01BQ2QsdUJBQXNCO01BQ3RCLHNCQUFxQjtNQUNyQixXQUFVO01BQ1YsaURBQWdELEVBQ25EOztBQUtMO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksdUNBQXNDO0VBQ3RDLGtDQUE4QixFQUNqQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLXNjcm9sbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmOmhvdmVyLCAmLmZvY3VzZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjYsNjYsNjYsMC4xKTtcbiAgfVxuXG4gIC5ub2RlLWNvbnRlbnQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmlucHV0LXdyYXBwZXIgIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICB9XG4gIH1cblxufVxuXG4uZG5kLWRyYWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRuZC1vdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/tree/tree.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tree/tree.component.ts ***!
  \**********************************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _directives_tree_node_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/tree-node.directive */ "./src/app/shared/directives/tree-node.directive.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");






/** Renders a recursive tree */
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](function (node) { return node.level; }, function (node) { return node.expandable; });
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.virtualSource = [];
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.draggable = function (_) { return false; };
        this.droppable = function (_) { return false; };
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        set: function (nodes) {
            var _this = this;
            this.virtualSource = nodes.slice();
            this.dataSource.data = this.virtualSource.slice(0, 20);
            setTimeout(function () {
                _this.treeControl.dataNodes.forEach(function (node) {
                    if (node.isExpanded) {
                        _this.treeControl.expand(node);
                    }
                });
            }, 30);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.virtualScroll.renderedRangeStream.subscribe(function (range) {
            _this.dataSource.data = _this.virtualSource.slice(range.start, range.end);
        });
    };
    TreeComponent.prototype.isExpandableNode = function (_, node) {
        return node.isExpanded || node.expandable;
    };
    TreeComponent.prototype.didNodeClicked = function (node, event) {
        if (this.focused) {
            this.focused.isFocused = false;
        }
        node.isFocused = true;
        this.focused = node;
        this.clicked.emit({ node: node, event: event });
    };
    TreeComponent.prototype.expand = function (node) {
        this.treeControl.expand(node);
    };
    TreeComponent.prototype.createNode = function (parent, node) {
        parent.isCreating = true;
        parent.isRenaming = false;
        this.editingParent = parent;
        this.editing = this.transformer(node);
        this.editing.isCreating = true;
        this.editing.isRenaming = false;
        this.expand(parent);
    };
    TreeComponent.prototype.renameNode = function (node) {
        node.isRenaming = true;
        this.nameBeforeEditing = node.name;
        this.editing = node;
        this.editing.isCreating = false;
        this.editing.isRenaming = true;
    };
    TreeComponent.prototype.endEditing = function (commit) {
        if (!commit) {
            this.editing.name = this.nameBeforeEditing;
        }
        if (this.editingParent) {
            this.editingParent.isCreating = this.editingParent.isRenaming = false;
        }
        this.editing.isCreating = this.editing.isRenaming = false;
        this.editing = null;
        this.editingParent = null;
    };
    TreeComponent.prototype.didEditingChanged = function (event) {
        this.edited.emit({
            node: this.editing,
            event: event,
        });
    };
    TreeComponent.prototype.didTrack = function (index, item) {
        return item.id || index;
    };
    TreeComponent.prototype.transformer = function (node, level) {
        var data = {
            id: node.id,
            data: node.data,
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
            isExpanded: node.isExpanded
        };
        return data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_directives_tree_node_directive__WEBPACK_IMPORTED_MODULE_4__["TreeNodeDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkVirtualScrollViewport"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkVirtualScrollViewport"])
    ], TreeComponent.prototype, "virtualScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "edited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TreeComponent.prototype, "draggable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TreeComponent.prototype, "droppable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], TreeComponent.prototype, "nodes", null);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/shared/components/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/shared/components/tree/tree.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
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


/**
 * Input element that can be autofocused.
 */
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
            selector: 'input[autofocus]'
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


/**
 * Element that can share a data to a `DroppableDirective` element.
 * - the class `dnd-drag` is added to the element when the element is dragged.
 */
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el) {
        this.el = el;
        /**
         * A value indicating whether the element can share a data or not
         */
        this.dragCondition = true;
    }
    DraggableDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        var node = this.el.nativeElement;
        node.draggable = true;
        var dragstart = function (e) {
            if (!_this.dragCondition) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('dnd-data', _this.dragData);
            node.classList.add('dnd-drag');
            return false;
        };
        node.addEventListener('dragstart', dragstart, false);
        var dragend = function (e) {
            node.classList.remove('dnd-drag');
            return false;
        };
        node.addEventListener('dragend', dragend, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('draggable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DraggableDirective.prototype, "dragCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DraggableDirective.prototype, "dragData", void 0);
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


/**
 * Element that can accept a data shared by a `DraggableDirective` element or from the filesystem.
 *
 * - the class `dnd-over` is added to the element when a dragged data hover it.
 */
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(el) {
        this.el = el;
        /**  A value indicating whether a data can be dropped to this element */
        this.dropCondition = true;
        /** emits after a data is dropped */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DroppableDirective.prototype.ngAfterContentInit = function () {
        if (!this.dropCondition) {
            return;
        }
        var self = this;
        var node = this.el.nativeElement;
        node.draggable = true;
        var dragover = function (e) {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            node.classList.add('dnd-over');
            return false;
        };
        node.addEventListener('dragover', dragover, false);
        var dragenter = function (e) {
            node.classList.add('dnd-over');
            return false;
        };
        node.addEventListener('dragenter', dragenter, false);
        var dragleave = function (e) {
            node.classList.remove('dnd-over');
            return false;
        };
        node.addEventListener('dragleave', dragleave, false);
        var drop = function (e) {
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
            node.classList.remove('dnd-over');
            var destination = node.id;
            var source = e.dataTransfer.getData('dnd-data');
            if (source || file) {
                self.dropped.emit({ src: source, file: file, dst: destination });
            }
            return false;
        };
        node.addEventListener('drop', drop, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('droppable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DroppableDirective.prototype, "dropCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DroppableDirective.prototype, "dropped", void 0);
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


/**
 * Directives that allows to reload scripts tags of a dom element.
 */
// tslint:disable-next-line: directive-selector
var RunScriptsDirective = /** @class */ (function () {
    function RunScriptsDirective(elementRef) {
        this.elementRef = elementRef;
    }
    RunScriptsDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.runScripts();
        });
    };
    /**
     * Reloads the scripts elements of the dom element.
     */
    RunScriptsDirective.prototype.runScripts = function () {
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

/***/ "./src/app/shared/directives/tree-node.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/tree-node.directive.ts ***!
  \**********************************************************/
/*! exports provided: TreeNodeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeDirective", function() { return TreeNodeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/** Element that can be used as a template for a `TreeComponent`  */
var TreeNodeDirective = /** @class */ (function () {
    function TreeNodeDirective() {
    }
    TreeNodeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[treeNode]'
        })
    ], TreeNodeDirective);
    return TreeNodeDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/assert.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/assert.model.ts ***!
  \***********************************************/
/*! exports provided: Asserts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asserts", function() { return Asserts; });
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
            message = message || 'require non null';
            throw new ReferenceError(message);
        }
        return obj;
    }
    Asserts.requireNonNull = requireNonNull;
    function requireNonNullArray(array, message) {
        var _this = this;
        this.requireNonNull(array, message);
        array.forEach(function (item) { return _this.requireNonNull(item); }, message);
        return array;
    }
    Asserts.requireNonNullArray = requireNonNullArray;
    function requireNonNullString(input, message) {
        if (input == null || input.trim().length === 0) {
            message = message || "'require non null or empty";
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
     * Checks if name can be used a file name.
     * @param name the name to evaluate
     * @return true else throw an exception
     */
    function checkName(name) {
        if (!name) {
            throw new ReferenceError('name should not be null or empty');
        }
        if (!Asserts.DISALLOWED_CHAR.every(function (e) { return !name.includes(e); })) {
            throw new Error(name + 'should not contains any of ' + Asserts.DISALLOWED_CHAR);
        }
    }
    Asserts.checkName = checkName;
})(Asserts || (Asserts = {}));


/***/ }),

/***/ "./src/app/shared/models/paths.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/paths.model.ts ***!
  \**********************************************/
/*! exports provided: basename, dirname, extname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extname", function() { return extname; });
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
/**
 * Returns the directory name of a path. Similar to the Unix dirname command.
 * @param path the path to evaluate
 */
function dirname(path) {
    if (!path) {
        return path;
    }
    path = path.replace(/\\/g, '/');
    var head = path.slice(0, path.lastIndexOf('/') + 1);
    if (head && !head.match(/^\/*$/g)) {
        head = head.replace(/\/*$/g, '');
    }
    return head;
}
/**
 * Returns the extension of the path (in lowercase), from the last '.' to end of string in the last portion of the path.
 * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
 * @param path the path to evaluate
 * @returns the extension in lowercase or an empty string.
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../pipes/trust-html.pipe */ "./src/app/shared/pipes/trust-html.pipe.ts");
/* harmony import */ var _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pipes/trust-url.pipe */ "./src/app/shared/pipes/trust-url.pipe.ts");
/* harmony import */ var _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pipes/trust-script.pipe */ "./src/app/shared/pipes/trust-script.pipe.ts");
/* harmony import */ var _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pipes/trust-style.pipe */ "./src/app/shared/pipes/trust-style.pipe.ts");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
/* harmony import */ var _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../directives/draggable.directive */ "./src/app/shared/directives/draggable.directive.ts");
/* harmony import */ var _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../directives/droppable.directive */ "./src/app/shared/directives/droppable.directive.ts");
/* harmony import */ var _directives_tree_node_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../directives/tree-node.directive */ "./src/app/shared/directives/tree-node.directive.ts");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../components/tree/tree.component */ "./src/app/shared/components/tree/tree.component.ts");

/* CORE  */






/* MATERIAL  */






















// TOASTR

// PIPES




// DIRECTIVES





// COMPONENT



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // COMPONENTS
                _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_41__["TreeComponent"],
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_39__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmComponent"],
                // DIRECTIVES
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_36__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_37__["DroppableDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_34__["AutofocusDirective"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_35__["RunScriptsDirective"],
                _directives_tree_node_directive__WEBPACK_IMPORTED_MODULE_38__["TreeNodeDirective"],
                // PIPES
                _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_30__["TrustHtmlPipe"],
                _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_31__["TrustUrlPipe"],
                _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_32__["TrustScriptPipe"],
                _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_33__["TrustStylePipe"],
            ],
            imports: [
                // CORE
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
                // MATERIAL
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
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                // TOASTR
                ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                }),
            ],
            exports: [
                // CORE
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                // MATERIAL
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
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_25__["ScrollingModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
                // TOAST
                ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"],
                // COMPONENTS
                _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_41__["TreeComponent"],
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_39__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmComponent"],
                // DIRECTIVES
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_34__["AutofocusDirective"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_36__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_37__["DroppableDirective"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_35__["RunScriptsDirective"],
                _directives_tree_node_directive__WEBPACK_IMPORTED_MODULE_38__["TreeNodeDirective"],
                // PIPES
                _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_30__["TrustHtmlPipe"],
                _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_31__["TrustUrlPipe"],
                _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_32__["TrustScriptPipe"],
                _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_33__["TrustStylePipe"],
            ],
            entryComponents: [
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_39__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_40__["ConfirmComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trust-html.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/trust-html.pipe.ts ***!
  \*************************************************/
/*! exports provided: TrustHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustHtmlPipe", function() { return TrustHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TrustHtmlPipe = /** @class */ (function () {
    function TrustHtmlPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    TrustHtmlPipe.prototype.transform = function (value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    };
    TrustHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trustHtml'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TrustHtmlPipe);
    return TrustHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trust-script.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/trust-script.pipe.ts ***!
  \***************************************************/
/*! exports provided: TrustScriptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustScriptPipe", function() { return TrustScriptPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TrustScriptPipe = /** @class */ (function () {
    function TrustScriptPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    TrustScriptPipe.prototype.transform = function (value) {
        return this.domSanitizer.bypassSecurityTrustScript(value);
    };
    TrustScriptPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trustScript'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TrustScriptPipe);
    return TrustScriptPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trust-style.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/trust-style.pipe.ts ***!
  \**************************************************/
/*! exports provided: TrustStylePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustStylePipe", function() { return TrustStylePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TrustStylePipe = /** @class */ (function () {
    function TrustStylePipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    TrustStylePipe.prototype.transform = function (value) {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    };
    TrustStylePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trustStyle'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TrustStylePipe);
    return TrustStylePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trust-url.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/trust-url.pipe.ts ***!
  \************************************************/
/*! exports provided: TrustUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustUrlPipe", function() { return TrustUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var TrustUrlPipe = /** @class */ (function () {
    function TrustUrlPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    TrustUrlPipe.prototype.transform = function (value, args) {
        return this.domSanitizer.bypassSecurityTrustUrl(value);
    };
    TrustUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'trustUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TrustUrlPipe);
    return TrustUrlPipe;
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
        this.logAdded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this.logAdded.next(item);
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

module.exports = __webpack_require__(/*! /Users/mamadou/Desktop/PL/premierlangage/apps/filebrowser/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map