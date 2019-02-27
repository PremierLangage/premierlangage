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
                _editor_editor_module__WEBPACK_IMPORTED_MODULE_5__["EditorModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
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

module.exports = "<ul class='console__content' #container>\n    <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n        <li class='log log--{{item.type}}'>\n        <ng-container [ngSwitch]=\"item.type\">\n            <mat-icon *ngSwitchCase=\"'info'\" mat-list-icon class='log-icon'>info</mat-icon>\n            <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='log-icon'>warning</mat-icon>\n            <mat-icon *ngSwitchDefault mat-list-icon class='log-icon'>error</mat-icon>\n        </ng-container>\n        <p class='log-content' [innerHTML]='item.message | sanitizeHtml'></p>\n        </li>\n        <mat-divider *ngIf='!last'></mat-divider>\n    </ng-container>\n</ul>"

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

module.exports = "<div class='host'>\n  <div class='host-container'>\n    <navigation #navigation></navigation>\n    <as-split direction=\"horizontal\" gutterSize='5' useTransition='true'>    \n        <as-split-area class='navigation' style='overflow: hidden;' [size]=\"navigation.size\" [ngSwitch]=\"navigation.index\">\n            <explorer *ngSwitchCase=\"0\" [resources]='navigation.resources()' [showHeader]='true'></explorer>\n            <search *ngSwitchCase=\"1\" [resources]='navigation.resources()'></search>\n            <git *ngSwitchCase=\"2\"></git>\n            <settings *ngSwitchCase=\"3\"></settings>\n        </as-split-area>\n        <as-split-area class='h100' style='overflow: hidden;' [size]=\"100 - navigation.size\">\n            <as-split class='workspace' direction='vertical' gutterSize='5' useTransition='true' (dragEnd)='debugging.dragEnd($event)'>\n                <as-split-area class='h100' [size]='100 - debugging.size'>\n                    <workspace></workspace>\n                </as-split-area>\n                <as-split-area class='debugging' style='overflow: hidden;' [size]='debugging.size'>\n                    <debugging #debugging></debugging>\n                </as-split-area>\n            </as-split>\n        </as-split-area>\n    </as-split>\n  </div>\n  <mat-progress-bar mode='indeterminate' color='warn' *ngIf='runningTask()'></mat-progress-bar>\n  <footer></footer>\n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-flow: column;\n  height: calc(100vh - 64px);\n  color: #5a5a5a; }\n  .host .host-container {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    height: 100%;\n    flex: 1; }\n  .navigation {\n  height: 100%;\n  overflow: hidden;\n  background-color: #F6F6F6; }\n  .tab-bar {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  height: 36px;\n  align-items: center;\n  overflow: hidden;\n  background-color: #F5F5F5;\n  border-bottom: 1px solid #dee2e6 !important; }\n  .tab-bar .tab-item {\n    display: inline-flex;\n    height: 100%;\n    align-items: center;\n    position: relative;\n    font-size: 14px;\n    color: #5a5a5a;\n    font-style: normal;\n    padding: 0px 12px;\n    cursor: pointer; }\n  .workspace {\n  position: relative;\n  height: 100%; }\n  .spacer {\n  flex-grow: 1; }\n  .h100 {\n  height: 100%; }\n  .editor-home {\n  text-align: center;\n  padding: 5rem 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsVUFBUztFQUNULGNBQWE7RUFDYixrQkFBaUI7RUFDakIsMkJBQXVDO0VBQ3ZDLGVBQWMsRUFRakI7RUFmRDtJQVNRLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixRQUFPLEVBQ1Y7RUFJTDtFQUNJLGFBQVk7RUFDWixpQkFBZ0I7RUFDaEIsMEJBQXlCLEVBQzVCO0VBRUQ7RUFDSSxXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixhQTlCYTtFQStCYixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6Qiw0Q0FBMEMsRUFhN0M7RUFyQkQ7SUFXUSxxQkFBb0I7SUFDcEIsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixlQUFjO0lBQ2QsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNsQjtFQUdMO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVksRUFDZjtFQUVEO0VBQ0ksYUFBWSxFQUNmO0VBRUQ7RUFDSSxhQUFZLEVBQ2Y7RUFFRDtFQUNJLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kdGFiLWhlaWdodDogMzZweDtcblxuLmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcbiAgICBjb2xvcjogIzVhNWE1YTtcbiAgICAuaG9zdC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cblxuLm5hdmlnYXRpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xufVxuXG4udGFiLWJhciB7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR0YWItaGVpZ2h0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudDtcblxuICAgIC50YWItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzVhNWE1YTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLndvcmtzcGFjZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uaDEwMCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZWRpdG9yLWhvbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cmVtIDNyZW07XG59Il19 */"

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
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/models/monaco.model */ "./src/app/editor/shared/models/monaco.model.ts");
/* harmony import */ var _shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/core/task.service */ "./src/app/editor/shared/services/core/task.service.ts");






var EditorComponent = /** @class */ (function () {
    function EditorComponent(task, monaco, resources) {
        this.task = task;
        this.monaco = monaco;
        this.resources = resources;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        _shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_4__["MONACO_LOADED"].subscribe(function (monaco) { return _this.monaco.register(monaco); });
    };
    /**
 * Gets a value indicating whether a task is running in the editor.
 */
    EditorComponent.prototype.runningTask = function () {
        return this.task.running;
    };
    EditorComponent.prototype.beforeunload = function ($event) {
        if (this.resources.changed()) { // the if is required
            $event.returnValue = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], EditorComponent.prototype, "beforeunload", null);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_3__["MonacoService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_2__["ResourceService"]])
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
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var angular2_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
/* harmony import */ var rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js");
/* harmony import */ var rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_Observable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/editor/editor-routing.module.ts");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./debugging/debugging.component */ "./src/app/editor/debugging/debugging.component.ts");
/* harmony import */ var _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./debugging/console/console.component */ "./src/app/editor/debugging/console/console.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/editor/footer/footer.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/editor/navigation/navigation.component.ts");
/* harmony import */ var _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/explorer/explorer.component */ "./src/app/editor/navigation/explorer/explorer.component.ts");
/* harmony import */ var _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/search/search.component */ "./src/app/editor/navigation/search/search.component.ts");
/* harmony import */ var _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/git/git.component */ "./src/app/editor/navigation/git/git.component.ts");
/* harmony import */ var _navigation_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/settings/settings.component */ "./src/app/editor/navigation/settings/settings.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/editor/workspace/workspace.component.ts");
/* harmony import */ var _shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/models/monaco.model */ "./src/app/editor/shared/models/monaco.model.ts");
/* harmony import */ var _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workspace/code-editor/code-editor.component */ "./src/app/editor/workspace/code-editor/code-editor.component.ts");
/* harmony import */ var _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workspace/image-editor/image-editor.component */ "./src/app/editor/workspace/image-editor/image-editor.component.ts");
/* harmony import */ var _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./workspace/preview-editor/preview-editor.component */ "./src/app/editor/workspace/preview-editor/preview-editor.component.ts");


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
                _editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _navigation_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_13__["ExplorerComponent"],
                _navigation_search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _navigation_git_git_component__WEBPACK_IMPORTED_MODULE_15__["GitComponent"],
                _navigation_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _debugging_debugging_component__WEBPACK_IMPORTED_MODULE_9__["DebuggingComponent"],
                _debugging_console_console_component__WEBPACK_IMPORTED_MODULE_10__["ConsoleComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_17__["WorkspaceComponent"],
                _workspace_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_19__["CodeEditorComponent"],
                _workspace_image_editor_image_editor_component__WEBPACK_IMPORTED_MODULE_20__["ImageEditorComponent"],
                _workspace_preview_editor_preview_editor_component__WEBPACK_IMPORTED_MODULE_21__["PreviewEditorComponent"]
            ],
            imports: [
                _editor_routing_module__WEBPACK_IMPORTED_MODULE_7__["EditorRoutingModule"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_2__["AngularSplitModule"].forRoot(),
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_3__["MonacoEditorModule"].forRoot(_shared_models_monaco_model__WEBPACK_IMPORTED_MODULE_18__["MONACO_CONFIG"]),
                angular2_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot()
            ],
            exports: [
                _editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
            ],
            providers: []
        })
    ], EditorModule);
    return EditorModule;
}());

// https://blog.expo.io/building-a-code-editor-with-monaco-f84b3a06deaf
// http://devarea.com/angular-and-django-websockets-communication/


/***/ }),

/***/ "./src/app/editor/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"inRepo()\">\n    <i class='repo-icon {{repoHost()}} fa-1x'></i> \n    <a class='repo-url' href=\"{{repoUrl()}} \">{{repoUrl()}}</a> <i class='repo-branch'> - {{repoBranch()}} </i>\n</ng-container>\n<div class=\"spacer\"></div>\n<ng-container *ngIf='runningTask()'>\n    <mat-progress-spinner mode='indeterminate' color='primary' strokeWidth='2' diameter='16'></mat-progress-spinner> \n    <span class='task-name'>{{taskName()}} task in progress...</span>\n</ng-container>"

/***/ }),

/***/ "./src/app/editor/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 20px;\n  background-color: #2f77c2;\n  color: white;\n  font-size: 14px;\n  padding: 0 8px; }\n\na {\n  color: white; }\n\n.repo-icon {\n  margin: 0 8px; }\n\n.repo-url {\n  margin-right: 8px; }\n\n.task-name {\n  margin: 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osMEJBQXdCO0VBQ3hCLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyZjc3YzI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbn1cblxuYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVwby1pY29uIHtcbiAgICBtYXJnaW46IDAgOHB4O1xufVxuXG4ucmVwby11cmwge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4udGFzay1uYW1lIHtcbiAgICBtYXJnaW46IDAgNHB4O1xufSJdfQ== */"

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





var FooterComponent = /** @class */ (function () {
    function FooterComponent(task, resources) {
        this.task = task;
        this.resources = resources;
    }
    FooterComponent.prototype.ngOnInit = function () {
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

module.exports = " <ng-container *ngIf='showHeader; else tree'>\n    <div class='tab-bar'>\n        <span>EXPLORER</span>       \n        <div class=\"spacer\"></div>\n        <div class='tab-item' (click)='didTapRefresh()' matTooltip='Refresh'>\n            <i class=\"fas fa-sync\"></i>\n        </div>\n    </div>\n    <div class='navigation_content'>\n        <explorer [resources]='resources' [showHeader]='false'></explorer>\n    </div>\n</ng-container>\n<ng-template #tree>\n    <ul class='tree'>\n        <li *ngFor='let resource of resources; trackBy:trackByFn'>\n            <div *ngIf='resource.renaming; else notEditing' class='tree__item editing'>\n                <span>\n                    <i class=\"{{resource.icon}}\"></i>&nbsp;\n                    <input autofocus\n                           type='text' \n                           placeholder='Press Enter to create ESC to cancel...' \n                           [(ngModel)]='newName' \n                           (keydown)='didEditingChanged(resource, $event)' \n                           (blur)='didEditingChanged(resource, $event)'/>\n                </span>\n            </div>    \n            <ng-template #notEditing>\n                <div id='{{resource.path}}' class='tree__item' [ngClass]='{selected: isSelection(resource), changed: resource.changed, opened: resource.opened}' \n                    draggable droppable [dragCondition]='draggable(resource)' [dropCondition]='droppable(resource)' (handleDrop)='didDropData($event)'\n                    (click)='didTapOnResource(resource, $event)'>\n                    <span class='tree__item-label'>\n                        <i class=\"{{icon(resource)}}\"></i>&nbsp;\n                        <span>{{resource.name}}</span>\n                    </span>\n                    <span class='tree__item-option-group'>\n                        <ng-container *ngFor='let option of options'>\n                            <span class='tree__item-option' *ngIf='option.enabled(resource)' matTooltip='{{option.label}}' (click)='option.action(resource, $event)'>\n                                <i class=\"{{option.icon}}\"></i>&nbsp;\n                            </span>\n                        </ng-container>\n                    </span>\n                    <div class='overlay'></div>\n                </div>\n            </ng-template>\n            <div *ngIf='creating && newResource.parent === resource.path'>\n                <div class='tree__item editing'>\n                    <span>\n                        <i class=\"{{newResource.icon}}\"></i>&nbsp;\n                        <input autofocus\n                               type='text' \n                               placeholder='Press Enter to create ESC to cancel...' \n                               [(ngModel)]='newResource.name' \n                               (keydown)='didEditingChanged(newResource, $event)' \n                               (blur)='didEditingChanged(newResource, $event)'/>\n                    </span>\n                </div>   \n            </div>\n            <explorer *ngIf='resource.expanded' [resources]=\"resource.children\" [showHeader]='false'></explorer>\n        </li>\n    </ul>        \n</ng-template>\n"

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
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/resource.model */ "./src/app/editor/shared/models/resource.model.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");









var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(task, opener, notification, resourceService, editorService) {
        this.task = task;
        this.opener = opener;
        this.notification = notification;
        this.resourceService = resourceService;
        this.editorService = editorService;
        /** the dynamic options of the resources */
        this.options = [];
        var that = this;
        this.resources = this.resourceService.resources;
        this.newName = '';
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBeTested"], action: function (r, e) {
                    that.optionTest(r, e);
                } },
            { icon: 'fas fa-play', label: 'Load', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBeLoaded"], action: function (r, e) {
                    that.optionLoad(r, e);
                } },
            { icon: 'fas fa-sync', label: 'Reload', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBeReloaded"], action: function (r, e) {
                    that.optionReload(r, e);
                } },
            { icon: 'far fa-file', label: 'New File', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canAddFile"], action: function (r, e) {
                    that.optionAddFile(r, e);
                } },
            { icon: 'far fa-folder', label: 'New Folder', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canAddFile"], action: function (r, e) {
                    that.optionFolder(r, e);
                } },
            { icon: 'far fa-edit', label: 'Rename', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBeRenamed"], action: function (r, e) {
                    that.optionRename(r, e);
                } },
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["canBeDeleted"], action: function (r, e) {
                    that.optionDelete(r, e);
                } },
            { icon: 'fas fa-lock', label: 'Read Only', enabled: _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["readonly"], action: function () { } },
        ];
    }
    /** Handles refresh button click by retrieving resources from the server. */
    ExplorerComponent.prototype.didTapRefresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm, _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        confirm = this.resourceService.findPredicate(function (e) { return e.changed && e.opened; });
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
                        return [4 /*yield*/, this.editorService.closeAll()];
                    case 4:
                        if (!_b.sent()) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.resourceService.refresh()];
                    case 5:
                        _b.sent();
                        this.notification.success('refreshed !');
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
        return !resource.opened && !_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["isRoot"](resource) && resource.write;
    };
    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    ExplorerComponent.prototype.droppable = function (resource) {
        return _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["isFolder"](resource) && resource.write;
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
        var srcName = _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["basename"](srcPath);
        var src = this.resourceService.find(srcPath);
        var dst = this.resourceService.find(dstPath);
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
                _this.resourceService.move(src || data.file, dst).catch(function (error) {
                    _this.notification.error(error);
                });
            }
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
                    promise = this.resourceService.rename(resource, this.newName);
                }
                else {
                    promise = this.resourceService.create(resource);
                }
                promise.then(function () {
                    _this.creating = _this.renaming = false;
                    resource.renaming = resource.creating = false;
                    _this.newName = '';
                    _this.newResource = undefined;
                }).catch(function (error) {
                    _this.creating = _this.renaming = false;
                    resource.renaming = resource.creating = false;
                    _this.newName = '';
                    _this.newResource = undefined;
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
        if (_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["isFolder"](resource)) {
            resource.expanded = !resource.expanded;
        }
        else {
            this.opener.openURI(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["asURI"](resource));
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
        if (_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_7__["isFolder"](resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    };
    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    ExplorerComponent.prototype.isSelection = function (resource) {
        return this.resourceService.isSelection(resource);
    };
    /** Used in the html template with *ngFor to keep track of the resource */
    ExplorerComponent.prototype.trackByFn = function (_index, item) {
        return item.path;
    };
    ExplorerComponent.prototype.optionAddFile = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_6__["newResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_6__["FILE_RESOURCE"]);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    };
    ExplorerComponent.prototype.optionFolder = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = Object(_shared_models_resource_model__WEBPACK_IMPORTED_MODULE_6__["newResource"])(resource, _shared_models_resource_model__WEBPACK_IMPORTED_MODULE_6__["FOLDER_RESOURCE"]);
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
                _this.resourceService.delete(resource).catch(function (error) {
                    _this.notification.logError(error);
                });
            }
        });
    };
    ExplorerComponent.prototype.optionLoad = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.resourceService.loadPLTP(resource).then(function (response) {
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
                _this.resourceService.reloadPLTP(resource, data.fields[0].value).then((function (response) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExplorerComponent.prototype, "resources", void 0);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _shared_services_core_opener_service__WEBPACK_IMPORTED_MODULE_3__["OpenerService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_4__["ResourceService"],
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_8__["EditorService"]])
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
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/core/editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/models/editor.model */ "./src/app/editor/shared/models/editor.model.ts");









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
        return item.type !== '??' && item.type !== 'D';
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
            this.opener.openURI(Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["asURIFragment"])(this.resources.find(item.path), _shared_models_editor_model__WEBPACK_IMPORTED_MODULE_8__["DIFF_FRAGMENT"]));
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
                            this.opener.openURI(Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["asURI"])(resource));
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
    /** gets the repositories */
    GitComponent.prototype.repositories = function () {
        return this.git.repos;
    };
    /** gets a value indicating whether a git command is running */
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
            _shared_services_core_editor_service__WEBPACK_IMPORTED_MODULE_7__["EditorService"],
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
    function NavigationComponent(git, resource, notification) {
        this.git = git;
        this.resource = resource;
        this.notification = notification;
        this.size = 25;
        this.index = 0;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resource.refresh().catch(function (error) { return _this.notification.logError(error); });
    };
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
    NavigationComponent.prototype.resources = function () {
        return this.resource.resources;
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

module.exports = "<ng-container>\n    <div class='tab-bar border-bottom'>\n        <span>SEARCH</span>       \n        <div class=\"spacer\"></div>\n    </div>\n    <mat-form-field class='search'>\n        <input autoFocus matInput placeholder=\"Press enter to search\" (keydown)='search($event)' [(ngModel)]='searchValue'>\n    </mat-form-field>\n    <div class=\"navigation_content\">\n        <explorer [resources]='result'></explorer>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/editor/navigation/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/editor/navigation/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation_content {\n  padding: 0 8px;\n  height: calc(100% - 36px); }\n\n.search {\n  width: 90%;\n  margin: 0 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL25hdmlnYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9uYXZpZ2F0aW9uL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbl9jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xufVxuXG4uc2VhcmNoIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCAxNnB4O1xufSJdfQ== */"

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



var SearchComponent = /** @class */ (function () {
    function SearchComponent(editor) {
        this.editor = editor;
        this.resources = [];
        this.result = [];
        this.searchValue = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.changeMode = function (mode) {
        this.mode = mode;
    };
    SearchComponent.prototype.search = function (event) {
        var _this = this;
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this._runningTask = true;
            this.searchValue = this.searchValue.trim().toLocaleLowerCase();
            if (this.searchValue) {
                this.editor.findAll((function (e) {
                    return e.path.toLocaleLowerCase().includes(_this.searchValue);
                })).then(function (res) {
                    _this.result = res;
                });
                this._runningTask = false;
            }
        }
    };
    Object.defineProperty(SearchComponent.prototype, "runningTask", {
        get: function () { return this._runningTask; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchComponent.prototype, "resources", void 0);
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
/* harmony import */ var _filters_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");




var EditorGroup = /** @class */ (function () {
    function EditorGroup(editorService) {
        this.editors = [];
        this.tabs = [];
        this._actions = [];
        this._id = ++EditorGroup.COUNTER;
        this._editorService = editorService;
    }
    EditorGroup.prototype.id = function () {
        return this._id;
    };
    EditorGroup.prototype.empty = function () {
        return !this.tabs.some(function (_) { return true; });
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
        return !groups.find(function (g) { return g.id() !== _this.id() && g.isActive(_this._activeTab); });
    };
    EditorGroup.prototype.isActive = function (tab) {
        return this._activeTab.resource.path === tab.resource.path;
    };
    EditorGroup.prototype.isChanged = function (tab) {
        return tab.resource.changed;
    };
    EditorGroup.prototype.someTab = function (predicate) {
        return this.tabs.some(predicate);
    };
    EditorGroup.prototype.someEditor = function (predicate) {
        return this.editors.some(predicate);
    };
    EditorGroup.prototype.someAction = function () {
        return !this.empty() && !this.somePreview();
    };
    EditorGroup.prototype.somePreview = function () {
        return this.someEditor(function (e) { return e.type() === _editor_model__WEBPACK_IMPORTED_MODULE_1__["PREVIEW_EDITOR"]; });
    };
    EditorGroup.prototype.open = function (tab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var editor;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!tab.preview) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._editorService.openContent(tab.resource)];
                    case 1:
                        if (!(_a.sent())) {
                            if (this.empty()) {
                                this.dispose();
                            }
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2:
                        editor = this.editors.find(function (e) { return e.canOpen(tab); }) || this.createEditor(tab);
                        if (!editor) {
                            throw new Error('The is no registered editor that can open \'' + tab.resource.path + '\'');
                        }
                        if (tab.resource.opened) {
                            this._activeTab.position = undefined; // unset position because to scroll to the position only once.
                        }
                        tab.resource.opened = true;
                        this._activeTab = tab;
                        this._activeEditor = editor;
                        this._activeEditor.open(tab);
                        this._actions = this._activeEditor.actions() || [];
                        if (tab.preview) {
                            if (this.tabs.length === 0) {
                                this.tabs.push(tab);
                            }
                            else {
                                this.tabs[0] = tab;
                            }
                        }
                        else if (!this.someTab(function (e) { return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["compareTab"])(e, tab); })) {
                            this.tabs.push(tab);
                        }
                        return [4 /*yield*/, this._editorService.updateGroup(this)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditorGroup.prototype.openSide = function (tab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._editorService.open(tab, true)];
            });
        });
    };
    EditorGroup.prototype.save = function (tab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this._editorService.saveContent(tab.resource)];
            });
        });
    };
    EditorGroup.prototype.saveAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, tab;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.tabs;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        tab = _a[_i];
                        return [4 /*yield*/, this.save(tab)];
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
    EditorGroup.prototype.close = function (tab, confirm) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var changed, options, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        changed = this.confirmBeforeClose(tab);
                        options = {
                            title: 'Do you want to close \'' + tab.resource.name + '\'?',
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
                            tab.resource.content = tab.resource.lastContent;
                            tab.resource.changed = false;
                        }
                        if (confirm) {
                            tab.resource.meta.previewData = undefined;
                        }
                        return [4 /*yield*/, this.removeTab(tab)];
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
                        changed = this.someTab(function (tab) { return _this.confirmBeforeClose(tab); });
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
                        if (!(this.tabs.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.close(this.tabs[0], false)];
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
                        if (!this.someTab(function (e) { return !e.resource.changed; })) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.tabs.length)) return [3 /*break*/, 4];
                        if (!!this.tabs[i].resource.changed) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.close(this.tabs[i])];
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
    EditorGroup.prototype.removeTab = function (tab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.tabs.findIndex(function (e) { return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["compareTab"])(e, tab); });
                        if (index === -1) {
                            throw new Error(tab.title + " is not a part of the group '" + this.id() + "'");
                        }
                        this._activeTab = null;
                        this.tabs.splice(index, 1);
                        tab.resource.opened = this._editorService.findGroups(tab).length > 0;
                        index = Math.max(0, index - 1);
                        if (index < this.tabs.length) {
                            this._activeTab = this.tabs[index];
                        }
                        if (this._activeTab) {
                            this.open(this._activeTab);
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
                    case 0: return [4 /*yield*/, this.removeTab(this.tabs[index])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EditorGroup.prototype.findTab = function (predicate) {
        return this.tabs.find(function (e) { return predicate(e); });
    };
    EditorGroup.prototype.findTabAt = function (index) {
        return this.tabs[index];
    };
    EditorGroup.prototype.actions = function () {
        return this._actions || (this._actions = []);
    };
    EditorGroup.prototype.dispose = function () {
        return this._editorService.removeGroup(this);
    };
    EditorGroup.prototype.activeTab = function () {
        return this._activeTab;
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
    EditorGroup.prototype.drop = function (event) {
        var source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        var target = this;
        if (this.somePreview() || source.somePreview()) {
            return;
        }
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            var movedTab = source.findTabAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    };
    EditorGroup.prototype.trackTab = function (index, tab) {
        return tab.resource.path;
    };
    EditorGroup.prototype.trackEditor = function (index, editor) {
        return editor.id();
    };
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE
    EditorGroup.prototype.createEditor = function (data) {
        for (var _i = 0, INSTANTIATORS_1 = _editor_model__WEBPACK_IMPORTED_MODULE_1__["INSTANTIATORS"]; _i < INSTANTIATORS_1.length; _i++) {
            var item = INSTANTIATORS_1[_i];
            if (item.condition(data)) {
                var editor = item.create(this, data);
                this.editors.push(editor);
                return editor;
            }
        }
        return null;
    };
    EditorGroup.prototype.confirmBeforeClose = function (tab) {
        if (this.somePreview()) {
            return false;
        }
        return tab.resource.changed && this._editorService.findGroups(tab).length === 1;
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
/*! exports provided: CODE_EDITOR, PREVIEW_EDITOR, IMAGE_EDITOR, DIFF_FRAGMENT, AbstractEditor, CodeEditor, ImageEditor, PreviewEditor, INSTANTIATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE_EDITOR", function() { return CODE_EDITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_EDITOR", function() { return PREVIEW_EDITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_EDITOR", function() { return IMAGE_EDITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIFF_FRAGMENT", function() { return DIFF_FRAGMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditor", function() { return CodeEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditor", function() { return ImageEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewEditor", function() { return PreviewEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSTANTIATORS", function() { return INSTANTIATORS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _filters_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.model */ "./src/app/editor/shared/models/filters.model.ts");
// tslint:disable: max-line-length



var CODE_EDITOR = 'code';
var PREVIEW_EDITOR = 'preview';
var IMAGE_EDITOR = 'image';
var DIFF_FRAGMENT = 'diff';
var AbstractEditor = /** @class */ (function () {
    function AbstractEditor(group, data) {
        this.onOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._id = ++AbstractEditor.ID_COUNTER;
        this._data = data;
        this._group = group;
    }
    AbstractEditor.prototype.id = function () {
        return this._id;
    };
    AbstractEditor.prototype.data = function () {
        return this._data;
    };
    AbstractEditor.prototype.group = function () {
        return this._group;
    };
    AbstractEditor.prototype.open = function (data) {
        this._data = data;
        this.onOpened.next(data);
    };
    AbstractEditor.prototype.focus = function (focused) {
        this._focused = focused;
    };
    AbstractEditor.prototype.hasFocus = function () {
        return this._focused;
    };
    AbstractEditor.ID_COUNTER = 0;
    return AbstractEditor;
}());

var CodeEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CodeEditor, _super);
    function CodeEditor(group, data) {
        var _this = _super.call(this, group, data) || this;
        _this.onDiffEditing = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    CodeEditor.prototype.type = function () {
        return CODE_EDITOR;
    };
    CodeEditor.prototype.actions = function () {
        return [
            this.preview(),
            this.diffMode(),
            this.codeMode(),
            this.splitRight()
        ];
    };
    CodeEditor.prototype.canOpen = function (data) {
        return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsCode"])(data);
    };
    CodeEditor.prototype.open = function (data) {
        if (data.uri.fragment === DIFF_FRAGMENT) {
            this.diffEditing = true;
        }
        data.uri = data.uri.with({ fragment: '' });
        _super.prototype.open.call(this, data);
    };
    CodeEditor.prototype.preview = function () {
        var _this = this;
        return {
            icon: 'fas fa-play', tooltip: 'Preview', condition: function (item) { return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["canBePreviewed"])(item); }, invoke: function (item) {
                _this.group().editorService().previewResource(item);
            }
        };
    };
    CodeEditor.prototype.diffMode = function () {
        var _this = this;
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: function (item) { return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["isRepo"])(item) && !_this.diffEditing; }, invoke: function (_) {
                _this.diffEditing = true;
                _this.onDiffEditing.next(_this.diffEditing);
            }
        };
    };
    CodeEditor.prototype.codeMode = function () {
        var _this = this;
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: function (item) { return _this.diffEditing; }, invoke: function (_) {
                _this.diffEditing = false;
                _this.onDiffEditing.next(_this.diffEditing);
            }
        };
    };
    CodeEditor.prototype.splitRight = function () {
        var _this = this;
        return {
            icon: 'fas fa-columns', tooltip: 'Split Editor Right', condition: function () { return true; }, invoke: function (item) {
                _this.group().openSide(Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["asTab"])(item));
            }
        };
    };
    return CodeEditor;
}(AbstractEditor));

var ImageEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageEditor, _super);
    function ImageEditor(group, data) {
        var _this = _super.call(this, group, data) || this;
        _this.zoom = 0.7;
        return _this;
    }
    ImageEditor.prototype.type = function () {
        return IMAGE_EDITOR;
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
    ImageEditor.prototype.canOpen = function (data) {
        return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsImage"])(data);
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
    function PreviewEditor(group, data) {
        return _super.call(this, group, data) || this;
    }
    PreviewEditor.prototype.type = function () {
        return PREVIEW_EDITOR;
    };
    PreviewEditor.prototype.actions = function () {
        return [
            {
                icon: 'fas fa-refresh', tooltip: 'Refresh', condition: function (item) { return true; }, invoke: function (item) {
                }
            }
        ];
    };
    PreviewEditor.prototype.canOpen = function (data) {
        return Object(_filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsPreview"])(data);
    };
    return PreviewEditor;
}(AbstractEditor));

var INSTANTIATORS = [
    { condition: _filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsImage"], create: function (group, data) { return new ImageEditor(group, data); } },
    { condition: _filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsPreview"], create: function (group, data) { return new PreviewEditor(group, data); } },
    { condition: _filters_model__WEBPACK_IMPORTED_MODULE_2__["openAsCode"], create: function (group, data) { return new CodeEditor(group, data); } }
];


/***/ }),

/***/ "./src/app/editor/shared/models/filters.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shared/models/filters.model.ts ***!
  \*******************************************************/
/*! exports provided: DISALLOWED_CHAR, canRead, canWrite, readonly, isFolder, isFile, isRoot, isPl, isMarkdown, isPltp, isSVG, canBePreviewed, isHome, isNotRoot, fromServer, isRepo, canAddFile, canCopy, canAddFolder, canBeRenamed, canBeDeleted, canBeTested, canBeLoaded, canBeReloaded, extension, canBeUsedAsFileName, checkName, requireNonNull, assert, basename, asURI, asURIGoTo, asURIFragment, asTab, compareTab, compareGroup, resourceIsURI, openAsCode, openAsImage, openAsPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISALLOWED_CHAR", function() { return DISALLOWED_CHAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canRead", function() { return canRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canWrite", function() { return canWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFolder", function() { return isFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return isRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPl", function() { return isPl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkdown", function() { return isMarkdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPltp", function() { return isPltp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSVG", function() { return isSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBePreviewed", function() { return canBePreviewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotRoot", function() { return isNotRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromServer", function() { return fromServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRepo", function() { return isRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFile", function() { return canAddFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCopy", function() { return canCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFolder", function() { return canAddFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeRenamed", function() { return canBeRenamed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeDeleted", function() { return canBeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeTested", function() { return canBeTested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeLoaded", function() { return canBeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeReloaded", function() { return canBeReloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extension", function() { return extension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeUsedAsFileName", function() { return canBeUsedAsFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkName", function() { return checkName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireNonNull", function() { return requireNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asURI", function() { return asURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asURIGoTo", function() { return asURIGoTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asURIFragment", function() { return asURIFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asTab", function() { return asTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTab", function() { return compareTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareGroup", function() { return compareGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceIsURI", function() { return resourceIsURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsCode", function() { return openAsCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsImage", function() { return openAsImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAsPreview", function() { return openAsPreview; });
var DISALLOWED_CHAR = ['/', ' ', '\t', '\n', ';', '#', '+', '&'];
function canRead(item) {
    return item && item.read;
}
function canWrite(item) {
    return item && item.write;
}
function readonly(item) {
    return !canWrite(item);
}
function isFolder(item) {
    return item && item.type === 'folder';
}
function isFile(item) {
    return item && item.type === 'file';
}
function isRoot(item) {
    return item && item.name === 'home' || item.name === 'home/'
        || item.name === 'lib' || item.name === 'lib/';
}
function isPl(item) {
    return extension(item) === 'pl';
}
function isMarkdown(item) {
    return extension(item) === 'md';
}
function isPltp(item) {
    return extension(item) === 'pltp';
}
function isSVG(item) {
    return extension(item) === 'svg';
}
function canBePreviewed(item) {
    return isPl(item) || isSVG(item) || isMarkdown(item);
}
function isHome(item) {
    return item && item.name === 'home';
}
function isNotRoot(item) {
    return !isRoot(item);
}
function fromServer(resource) {
    return !resource.meta || resource.meta.downloadUrl;
}
function isRepo(item) {
    return item && item.repo;
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
    return !item.opened && canWrite(item) && !isRoot(item);
}
function canBeDeleted(item) {
    return !item.opened && canWrite(item) && isNotRoot(item);
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
function extension(resource) {
    var dotIndex = resource.name.lastIndexOf('.');
    return resource.name.substring(dotIndex + 1).toLowerCase();
}
function canBeUsedAsFileName(name) {
    return name && DISALLOWED_CHAR.every(function (e) { return !name.includes(e); });
}
function checkName(name) {
    if (!name) {
        throw new Error('a resource name cannot be empty');
    }
    if (!canBeUsedAsFileName(name)) {
        throw new Error(name + ' cannot sould not contains any of ' + DISALLOWED_CHAR);
    }
}
function requireNonNull(param, name) {
    if (!param && typeof (param) !== 'boolean') {
        throw new TypeError(name + ' param is required !');
    }
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function basename(path) {
    if (!path) {
        return path;
    }
    var array = path.split('/');
    return array[array.length - 1];
}
function asURI(resource) {
    var monaco = window.monaco;
    return monaco.Uri.file(resource.path);
}
function asURIGoTo(resource, line, column) {
    var monaco = window.monaco;
    return monaco.Uri.file(resource.path).with({ fragment: line + "," + column });
}
function asURIFragment(resource, fragment) {
    var monaco = window.monaco;
    return monaco.Uri.file(resource.path).with({ fragment: fragment });
}
function asTab(resource, preview) {
    return {
        resource: resource,
        uri: asURI(resource),
        title: preview ? 'Preview \'' + resource.name + '\'' : resource.name,
        preview: preview,
        icon: resource.icon
    };
}
function compareTab(tab1, tab2) {
    return tab1.resource.path === tab2.resource.path;
}
function compareGroup(grp1, grp2) {
    return grp1.id() === grp2.id();
}
function resourceIsURI(resource, uri) {
    return '/' + resource.path === uri.path;
}
function openAsCode(data) {
    return !openAsImage(data);
}
function openAsImage(data) {
    return !openAsPreview(data) && data.resource.meta && data.resource.meta.image && !isSVG(data.resource);
}
function openAsPreview(data) {
    return data.resource.meta && data.resource.meta.previewData !== undefined;
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
    { extension: 'bat', id: 'bat' },
    { extension: 'ini', id: 'ini' },
    { extension: 'php', id: 'php' },
    { extension: 'pl', id: 'pl' },
    { extension: 'pltp', id: 'pl' }
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
/*! exports provided: FILE_RESOURCE, FOLDER_RESOURCE, newResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_RESOURCE", function() { return FILE_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLDER_RESOURCE", function() { return FOLDER_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newResource", function() { return newResource; });
/* harmony import */ var _filters_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.model */ "./src/app/editor/shared/models/filters.model.ts");

var FILE_RESOURCE = 'file';
var FOLDER_RESOURCE = 'folder';
function newResource(parent, type) {
    Object(_filters_model__WEBPACK_IMPORTED_MODULE_0__["assert"])(type === FILE_RESOURCE || type === FOLDER_RESOURCE, "type param must be '" + FILE_RESOURCE + "' or '" + FOLDER_RESOURCE + "'");
    Object(_filters_model__WEBPACK_IMPORTED_MODULE_0__["assert"])(parent.type === 'folder', 'resource.type must be folder');
    Object(_filters_model__WEBPACK_IMPORTED_MODULE_0__["assert"])(parent.children.every(function (e) { return !e.renaming; }), 'cannot edit multiple resources');
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
        lastContent: undefined,
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

/***/ "./src/app/editor/shared/models/schemas.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shared/models/schemas.model.ts ***!
  \*******************************************************/
/*! exports provided: Schemas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schemas", function() { return Schemas; });
var Schemas;
(function (Schemas) {
    /**
     * A schema that is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    Schemas.inMemory = 'inmemory';
    /**
     * A schema that is used for setting files
     */
    Schemas.vscode = 'vscode';
    /**
     * A schema that is used for internal private files
     */
    Schemas.internal = 'private';
    /**
     * A walk-through document.
     */
    Schemas.walkThrough = 'walkThrough';
    /**
     * An embedded code snippet.
     */
    Schemas.walkThroughSnippet = 'walkThroughSnippet';
    Schemas.http = 'http';
    Schemas.https = 'https';
    Schemas.file = 'file';
    Schemas.mailto = 'mailto';
    Schemas.untitled = 'untitled';
    Schemas.data = 'data';
    Schemas.command = 'command';
})(Schemas || (Schemas = {}));


/***/ }),

/***/ "./src/app/editor/shared/services/core/compiler.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editor/shared/services/core/compiler.service.ts ***!
  \*****************************************************************/
/*! exports provided: CompilerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilerService", function() { return CompilerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompilerService = /** @class */ (function () {
    function CompilerService() {
        this.state = {};
    }
    CompilerService.prototype.restoreState = function (resource) {
        if (resource.path in this.state) {
            return this.state[resource.path];
        }
        return undefined;
    };
    CompilerService.prototype.saveState = function (uri, state) {
        this.state[uri.path] = state;
    };
    CompilerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], CompilerService);
    return CompilerService;
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
        this.groups = Object.create(null);
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
    AbstractEditorService.prototype.findGroups = function (tab) {
        return this.listGroups().filter(function (group) {
            return group.someTab(function (item) { return Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["compareTab"])(tab, item); });
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
                        if (!!Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["compareGroup"])(this.previewGroup, group)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.previewGroup.closeAll()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 6];
                    case 3:
                        if (!Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["openAsPreview"])(group.activeTab())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.open(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["asTab"])(group.activeTab().resource, true))];
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
                        newFocused = this.listGroups().find(function (g) { return !Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["compareGroup"])(g, group); });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbstractEditorService);
    return AbstractEditorService;
}());

var EditorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditorService, _super);
    function EditorService(resourceService, notification) {
        var _this = _super.call(this) || this;
        _this.resourceService = resourceService;
        _this.notification = notification;
        return _this;
    }
    EditorService.prototype.open = function (tab, sideBySide) {
        var _this = this;
        var group;
        var groups = this.listGroups();
        if (sideBySide || tab.preview) {
            // tslint:disable-next-line: max-line-length
            group = tab.preview ? (groups.find(function (g) { return g.somePreview(); }) || new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__["EditorGroup"](this)) : new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__["EditorGroup"](this);
        }
        else {
            groups = groups.filter(function (g) { return !g.somePreview(); }); // remove preview group
            group = groups.find(function (g) { return g.focused() && g.someTab(function (t) { return Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["compareTab"])(t, tab); }); }) // find focused that contains the tab
                || groups.find(function (g) { return g.focused(); }) // find focused
                || groups.find(function (_) { return true; }) || new _models_editor_group_model__WEBPACK_IMPORTED_MODULE_2__["EditorGroup"](this); // find any or create new group
        }
        return group.open(tab).catch(function (error) {
            _this.notification.logError(error);
            return false;
        });
    };
    EditorService.prototype.confirm = function (options) {
        return this.notification.confirmAsync(options);
    };
    EditorService.prototype.openContent = function (resource) {
        return this.resourceService.open(resource);
    };
    EditorService.prototype.saveContent = function (resource) {
        return this.resourceService.save(resource);
    };
    EditorService.prototype.previewResource = function (resource) {
        var _this = this;
        var preview = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, resource);
        return this.resourceService.preview(preview).then(function () {
            _this.open(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["asTab"])(resource));
            return preview;
        }).catch(function (error) {
            _this.notification.logError(error);
            return null;
        });
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
                                name: Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["basename"])(key),
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(commit, 'commit');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
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
    GitService.prototype.clone = function (parent, url, username, password, destination) {
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
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(parent, 'parent');
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(url, 'url');
                        Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["assert"])(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["isHome"])(parent), 'clone operation is applicable to home only');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = {
                            'name': 'git_clone',
                            'path': parent.path,
                            url: url,
                            username: username,
                            password: password,
                            destination: destination
                        };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        _b.sent();
                        this.notification.logInfo(url + " cloned into the directory " + Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["basename"])(url));
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
/*! exports provided: AbstractOpenerService, OpenerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractOpenerService", function() { return AbstractOpenerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenerService", function() { return OpenerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/shared/services/core/editor.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/schemas.model */ "./src/app/editor/shared/models/schemas.model.ts");
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");







var AbstractOpenerService = /** @class */ (function () {
    function AbstractOpenerService() {
    }
    AbstractOpenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AbstractOpenerService);
    return AbstractOpenerService;
}());

var OpenerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OpenerService, _super);
    function OpenerService(editorService, resourceService, notificationService) {
        var _this = _super.call(this) || this;
        _this.editorService = editorService;
        _this.resourceService = resourceService;
        _this.notificationService = notificationService;
        return _this;
    }
    OpenerService.prototype.openURI = function (resource, openToSide) {
        if (openToSide === void 0) { openToSide = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scheme, path, query, fragment, position, match, target;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                scheme = resource.scheme, path = resource.path, query = resource.query, fragment = resource.fragment;
                if (!scheme) {
                    return [2 /*return*/, Promise.resolve(false)];
                }
                if (scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].http || scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].https || scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].mailto) {
                    // open http or default mail application
                    console.log(scheme, path);
                    this.openURL(resource.toString(true));
                    return [2 /*return*/, Promise.resolve(true)];
                }
                match = /^L?(\d+)(?:,(\d+))?/.exec(fragment);
                if (match) {
                    // support file:///some/file.js#73,84
                    // support file:///some/file.js#L73
                    position = {
                        // tslint:disable-next-line: radix
                        line: parseInt(match[1]),
                        // tslint:disable-next-line: radix
                        column: match[2] ? parseInt(match[2]) : 1
                    };
                    // remove fragment
                    resource = resource.with({ fragment: '' });
                }
                target = this.resourceService.find(resource.path);
                if (!target) {
                    return [2 /*return*/, Promise.reject(new Error('Unable to open \'' + resource.path + '\': File not found'))];
                }
                return [2 /*return*/, this.editorService.open({
                        uri: resource,
                        resource: target,
                        position: position,
                        title: target.name,
                        icon: target.icon,
                    }, openToSide)];
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
    OpenerService.prototype.openReference = function (base, target) {
        var _this = this;
        if (target.scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].http || target.scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].https || target.scheme === _models_schemas_model__WEBPACK_IMPORTED_MODULE_4__["Schemas"].mailto) {
            this.openURL(target.toString(true));
        }
        else {
            var resource = this.resourceService.find(base.path);
            this.resourceService.findReference(resource, target.path).then(function (reference) {
                _this.openURI(Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["asURI"])(reference));
            }).catch(function (error) {
                _this.notificationService.logError(error);
            });
        }
    };
    OpenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"],
            _resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], OpenerService);
    return OpenerService;
}(AbstractOpenerService));



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
/* harmony import */ var _git_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./git.service */ "./src/app/editor/shared/services/core/git.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.service */ "./src/app/editor/shared/services/core/task.service.ts");
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");







var ResourceService = /** @class */ (function () {
    function ResourceService(http, task, git) {
        this.http = http;
        this.task = task;
        this.git = git;
        this.previewProviders = {};
        this.resources = [];
        this.previewProviders = {
            'pl': this.previewPL,
            'svg': this.previewSVG,
            'md': this.previewMD,
        };
    }
    /**
     * Renames the resource on the server.
     * @param resource the resource object to rename.
     * @param name the new name of the resource.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    ResourceService.prototype.rename = function (resource, name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, data, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["checkName"](name);
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](resource), 'permission denied');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](this.find(resource.parent)), 'permission denied on parent directory');
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        this.task.emitTaskEvent(true, 'rename');
                        if (!(name === resource.name)) return [3 /*break*/, 2];
                        success = true;
                        return [3 /*break*/, 4];
                    case 2:
                        data = {
                            name: 'rename_resource',
                            path: resource.path,
                            target: name,
                        };
                        return [4 /*yield*/, this.endEdition(data, resource)];
                    case 3:
                        success = _a.sent();
                        if (success) {
                            resource.name = name;
                        }
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.task.emitTaskEvent(false);
                        throw error_1;
                    case 6:
                        this.task.emitTaskEvent(false);
                        return [2 /*return*/, success];
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
            var data, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["checkName"](resource.name);
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](resource), 'permission denied');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](this.find(resource.parent)), 'permission denied on parent directory');
                        this.task.emitTaskEvent(true, 'create resource');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["checkName"](resource.name);
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](this.find(resource.parent)), 'permission denied');
                        data = {
                            name: 'create_resource',
                            path: resource.parent + '/' + resource.name,
                            content: resource.content,
                            type: resource.type
                        };
                        return [4 /*yield*/, this.endEdition(data, resource)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_2 = _a.sent();
                        this.task.emitTaskEvent(false, 'create resource');
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
            var headers, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](resource, 'resource');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](resource), 'permission denied');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](!_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["isRoot"](resource), 'permission denied');
                        this.task.emitTaskEvent(true, 'delete');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'delete_resource',
                                path: resource.path
                            }, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        if (this.remove(resource.path)) {
                            this.task.emitDeleteEvent(resource);
                        }
                        this.task.emitTaskEvent(false, 'delete');
                        this.git.refresh();
                        return [2 /*return*/, false];
                    case 2:
                        error_3 = _a.sent();
                        this.task.emitTaskEvent(false, 'delete');
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** Gets a value indicating whether any resource is changec */
    ResourceService.prototype.changed = function () {
        return this.findPredicate(function (item) { return item.changed; }) !== undefined;
    };
    /**
     * Finds the resource with the given path.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    ResourceService.prototype.find = function (path) {
        path = path.trim();
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return this.findPredicate(function (item) { return '/' + item.path === path; });
    };
    /**
     * Finds the resource which meets the given predicate.
     * @param predicate the predicate to test
     * @returns the resource or undefined
     */
    ResourceService.prototype.findPredicate = function (predicate) {
        function recursive(resource) {
            if (!resource) {
                return undefined;
            }
            if (predicate(resource)) {
                return resource;
            }
            if (resource.children) {
                for (var _i = 0, _a = resource.children; _i < _a.length; _i++) {
                    var root = _a[_i];
                    var result = recursive(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var root = _a[_i];
            var resource = recursive(root);
            if (resource) {
                return resource;
            }
        }
        return undefined;
    };
    /**
     * Finds the resources which meets the given predicate.
     * @param predicate the predicate to test
     * @returns A Promise resolved with the search result
     */
    ResourceService.prototype.findAll = function (predicate) {
        var _this = this;
        return new Promise(function (resolve) {
            var result = [];
            _this.task.emitTaskEvent(true, 'search');
            function recursive(resource) {
                if (!resource) {
                    return undefined;
                }
                if (predicate(resource)) {
                    result.push(resource);
                }
                if (resource.children) {
                    for (var _i = 0, _a = resource.children; _i < _a.length; _i++) {
                        var root = _a[_i];
                        var item = recursive(root);
                        if (item) {
                            return item;
                        }
                    }
                }
                return undefined;
            }
            for (var _i = 0, _a = _this.resources; _i < _a.length; _i++) {
                var root = _a[_i];
                recursive(root);
            }
            _this.task.emitTaskEvent(false, 'search');
            resolve(result);
        });
    };
    ResourceService.prototype.loadPLTP = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, params, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'load pltp');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'load_pltp').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.task.emitTaskEvent(false, 'load pltp');
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        this.task.emitTaskEvent(false, 'load pltp');
                        throw error_4;
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    ResourceService.prototype.reloadPLTP = function (resource, activityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, data, headers, error_5;
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
                        this.task.emitTaskEvent(false, 'reload pltp');
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        this.task.emitTaskEvent(false, 'reload pltp');
                        throw error_5;
                    case 3: return [2 /*return*/, response];
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
            var resource, error_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        this.task.emitTaskEvent(true, 'move');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](src, 'src');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](dst, 'dst');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["canWrite"](dst), 'permission denied');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["isFolder"](dst), 'destination must be a directory');
                        resource = void 0;
                        if (!('size' in src)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.moveFile(src, dst)];
                    case 1:
                        resource = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.moveResource(src, dst)];
                    case 3:
                        resource = _a.sent();
                        _a.label = 4;
                    case 4:
                        this.sort(dst.children);
                        dst.expanded = true;
                        this.selection = resource;
                        this.task.emitTaskEvent(false, 'move');
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 5:
                        error_6 = _a.sent();
                        this.task.emitTaskEvent(false, 'move');
                        throw error_6;
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
            var headers, error_7;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["fromServer"](resource)) {
                            return [2 /*return*/, true];
                        }
                        if (!resource.changed) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true, 'save');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](resource, 'resource');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'update_resource', path: resource.path, content: resource.content
                            }, { headers: headers }).toPromise()];
                    case 2:
                        _a.sent();
                        resource.changed = false;
                        resource.lastContent = resource.content;
                        this.task.emitTaskEvent(false, 'save');
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 3:
                        error_7 = _a.sent();
                        this.task.emitTaskEvent(false, 'save');
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
                        this.task.emitTaskEvent(false, 'resolve path');
                        return [2 /*return*/, this.find(response)];
                    case 2:
                        error_8 = _a.sent();
                        this.task.emitTaskEvent(false, 'resolve path');
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceService.prototype.compilePL = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, data, headers, error_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.task.emitTaskEvent(true, 'compilation');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](resource, 'resource');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["isPl"](resource), 'pl resource is expected');
                        data = {
                            'name': 'compile_pl',
                            'path': resource.path,
                        };
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', data, { headers: headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_9 = _a.sent();
                        this.task.emitTaskEvent(false, 'compilation');
                        throw error_9;
                    case 3:
                        this.task.emitTaskEvent(false, 'compilation');
                        return [2 /*return*/, response];
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
            var params, response, error_10;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["fromServer"](resource)) {
                            return [2 /*return*/, true];
                        }
                        this.selection = resource;
                        if (resource.type === 'folder') {
                            resource.expanded = !resource.expanded;
                            return [2 /*return*/, false];
                        }
                        if (resource.content && !resource.dirty) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.task.emitTaskEvent(true, 'open');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resource').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('filebrowser/option', { params: params }).toPromise()];
                    case 2:
                        response = _a.sent();
                        resource.content = resource.lastContent = response['content'];
                        resource.meta = response['meta'];
                        resource.changed = false;
                        resource.dirty = false;
                        this.task.emitTaskEvent(false, 'open');
                        return [2 /*return*/, true];
                    case 3:
                        error_10 = _a.sent();
                        this.task.emitTaskEvent(false, 'open');
                        throw error_10;
                    case 4: return [2 /*return*/];
                }
            });
        });
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
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<Resource> resolved with the resource
     */
    ResourceService.prototype.preview = function (resource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.task.emitTaskEvent(true, 'preview');
            var ext = _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["extension"](resource);
            var action = _this.previewProviders[ext];
            action(resource, _this).then(function (response) {
                _this.task.emitTaskEvent(false, 'preview');
                resource.meta.previewData = response.preview;
                resolve(resource);
            }).catch(function (error) {
                _this.task.emitTaskEvent(false, 'preview');
                reject(error);
            });
        });
    };
    ResourceService.prototype.restore = function (path) {
        var name = _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["basename"](path);
        var parentPath = path.substring(0, path.length - (name.length + 1));
        var parent = this.find(parentPath);
        var resource = Object(_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["newResource"])(parent, _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["FILE_RESOURCE"]);
        resource.creating = resource.renaming = false;
        resource.name = name;
        resource.path = parentPath + '/' + name;
        parent.children = parent.children || [];
        parent.children.push(resource);
        return resource;
    };
    /**
     * Reloads the resources from the server.
     * @returns Promise<boolean> resolved with true or rejected with an error.
     */
    ResourceService.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.task.emitTaskEvent(true, 'refresh');
                        _this.task.emitRefreshEvent();
                        if (_this.subscription) {
                            _this.subscription.unsubscribe();
                        }
                        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resources');
                        _this.subscription = _this.http.get('/filebrowser/option', { params: params })
                            .subscribe(function (response) {
                            _this.resources = response;
                            if (_this.resources.length > 0) {
                                _this.resources[0].expanded = true;
                                _this.sort(_this.resources);
                            }
                            _this.git.refresh();
                            _this.task.emitTaskEvent(false, 'refresh');
                            resolve(true);
                        }, function (error) {
                            _this.task.emitTaskEvent(false, 'refresh');
                            reject(error);
                        });
                    })];
            });
        });
    };
    ResourceService.prototype.endEdition = function (postData, resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, parent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', postData, { headers: headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        resource.path = response['path'];
                        resource.icon = response['icon'];
                        parent = this.find(resource.parent);
                        parent.children = parent.children || [];
                        if (resource.creating) {
                            parent.children.push(resource);
                        }
                        this.sort(parent.children);
                        resource.renaming = false;
                        resource.creating = false;
                        this.git.refresh();
                        this.task.emitTaskEvent(false, 'create resource');
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ResourceService.prototype.moveResource = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, srcLastParent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](src.path, 'src.path');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](dst.path, 'dst.path');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](src.path !== dst.path, 'cannot move the resource to the same path');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["assert"](!_models_filters_model__WEBPACK_IMPORTED_MODULE_6__["isRoot"](src), 'cannot move a root resource');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'move_resource',
                                path: src.path,
                                dst: dst.path
                            }, { headers: headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        srcLastParent = this.find(src.parent);
                        srcLastParent.children = srcLastParent.children.filter(function (item) { return item.path !== src.path; });
                        src.parent = dst.path;
                        src.path = response['path'];
                        dst.children.push(src);
                        return [2 /*return*/, src];
                }
            });
        });
    };
    ResourceService.prototype.moveFile = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, headers, newRes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](src.name, 'src.name');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["requireNonNull"](dst.path, 'dst.path');
                        _models_filters_model__WEBPACK_IMPORTED_MODULE_6__["checkName"](src.name);
                        formData = new FormData();
                        formData.append('file', src, src.name);
                        formData.append('path', dst.path);
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                        headers.set('Content-Type', null);
                        headers.set('Accept', 'multipart/form-data');
                        return [4 /*yield*/, this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        newRes = Object(_models_resource_model__WEBPACK_IMPORTED_MODULE_3__["newResource"])(dst, _models_resource_model__WEBPACK_IMPORTED_MODULE_3__["FILE_RESOURCE"]);
                        newRes.path = dst.path + '/' + src.name;
                        newRes.name = src.name;
                        newRes.renaming = newRes.creating = false;
                        dst.children = dst.children || [];
                        dst.children.push(newRes);
                        return [2 /*return*/, newRes];
                }
            });
        });
    };
    ResourceService.prototype.sort = function (resources) {
        if (resources) {
            resources.sort(function (a, b) {
                if (a.type === b.type) {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                }
                return a.type === 'folder' ? -1 : 1;
            });
            for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                var item = resources_1[_i];
                this.sort(item.children);
            }
        }
    };
    ResourceService.prototype.remove = function (path) {
        function remove_recursive(items) {
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].path === path) {
                        items.splice(i, 1);
                        return true;
                    }
                    else {
                        if (remove_recursive(items[i].children)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        return remove_recursive(this.resources);
    };
    ResourceService.prototype.previewPL = function (resource, service) {
        var data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    };
    ResourceService.prototype.previewMD = function (resource, service) {
        return Promise.resolve({ preview: resource.content });
    };
    ResourceService.prototype.previewSVG = function (resource) {
        return Promise.resolve({ preview: resource.content });
    };
    ResourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
            _git_service__WEBPACK_IMPORTED_MODULE_4__["GitService"]])
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
        this.onRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
    /**
     * Emits editor refresh event.
     */
    TaskService.prototype.emitRefreshEvent = function () {
        this.onRefreshed.next();
    };
    /**
     * Emits resource selection event.
     * @param resource the resource
     */
    TaskService.prototype.emitSelectEvent = function (resource) {
        this.onSelected.next(resource);
    };
    /**
     * Emits resource deletion event.
     * @param resource the resource
     */
    TaskService.prototype.emitDeleteEvent = function (resource) {
        this.onDeleted.next(resource);
    };
    TaskService.prototype.emitTaskEvent = function (running, taskName) {
        if (taskName === void 0) { taskName = null; }
        this._running = running;
        this._taskName = taskName;
        this.onRunningTask.next(running);
    };
    TaskService.prototype.subscribeRefreshEvent = function (completion) {
        this.onRefreshed.subscribe(completion);
    };
    TaskService.prototype.subscribeSelectEvent = function (completion) {
        this.onSelected.subscribe(completion);
    };
    TaskService.prototype.subscribeDeleteEvent = function (completion) {
        this.onDeleted.subscribe(completion);
    };
    TaskService.prototype.subscribeTaskEvent = function (completion) {
        this.onRunningTask.subscribe(completion);
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
/* harmony import */ var _models_filters_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/filters.model */ "./src/app/editor/shared/models/filters.model.ts");
/* harmony import */ var _models_language_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/language.model */ "./src/app/editor/shared/models/language.model.ts");
/* harmony import */ var _core_opener_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/opener.service */ "./src/app/editor/shared/services/core/opener.service.ts");
/* harmony import */ var _core_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");






// tslint:disable: max-line-length
var PL = 'pl';
var MonacoService = /** @class */ (function () {
    function MonacoService(opener, resources) {
        this.opener = opener;
        this.resources = resources;
        this.editors = [];
    }
    MonacoService_1 = MonacoService;
    MonacoService.prototype.register = function (monaco) {
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        monaco.languages.register({
            id: PL,
            extensions: ['.pl', '.pltp'],
        });
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
                    [/#.+/, 'comment'],
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
        monaco.editor.defineTheme(PL, {
            base: 'vs',
            inherit: true,
            rules: [
                { token: 'key', foreground: '1382dd', fontStyle: 'bold' },
            ]
        });
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
                        var url = match[match.length - 1];
                        var index = match.index + match.input.length - url.length;
                        var range = new monaco.Range(i + 1, index, i + 1, index + url.length + 1);
                        var comment = false;
                        while (index >= 0) {
                            if (lines[i][index] === '#') {
                                comment = true;
                                break;
                            }
                            index--;
                        }
                        if (!comment) {
                            links.push({
                                range: range,
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
        /*         monaco.languages.registerHoverProvider(PREMIER_LANGAGE, {
                    provideHover: function(model, position) {
                        const lineContent = model.getLineContent(position.lineNumber);
                        const token = model.getWordAtPosition(position);
                        if (token) {
                            const keys = self.getKeys();
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
        
                            if (token.word in BUILT_IN_WORDS) {
                                const lineCount = model.getLineCount();
                                return {
                                    range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                                    contents: [
                                        { value: '**PL BUILT-IN**' },
                                        { value: BUILT_IN_WORDS[token.word] }
                                    ]
                                };
                            }
                        }
                    }
                }); */
        monaco.languages.registerCompletionItemProvider(PL, {
            provideCompletionItems: function (model, position) {
                var line = model.getLineContent(position.lineNumber);
                if (line.includes('{{')) {
                    return [];
                }
                return Object.keys(MonacoService_1.BUILD_IN_WORDS).map(function (name) { return ({
                    label: name,
                    detail: MonacoService_1.BUILD_IN_WORDS[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }); });
            },
        });
        /*      monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
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
    MonacoService.prototype.findLanguage = function (resource) {
        var ext = Object(_models_filters_model__WEBPACK_IMPORTED_MODULE_2__["extension"])(resource);
        for (var _i = 0, LANGUAGES_1 = _models_language_model__WEBPACK_IMPORTED_MODULE_3__["LANGUAGES"]; _i < LANGUAGES_1.length; _i++) {
            var item = LANGUAGES_1[_i];
            if (item.extension === ext) {
                return item.id;
            }
        }
        return '';
    };
    MonacoService.prototype.registerEditor = function (editor) {
        var _this = this;
        var contribution = editor.getContribution('editor.linkDetector');
        contribution.openerService.open = function (uri) {
            _this.opener.openReference(editor.getModel().uri, uri);
        };
        editor.onDidBlurEditor(function () {
        });
        editor.onDidFocusEditor(function () {
        });
        editor.onDidChangeCursorPosition(function (e) {
            for (var _i = 0, _a = _this.editors; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.getId() !== editor.getId() && item.getModel().getModeId() === editor.getModel().getModeId()) {
                    item.setPosition(e.position);
                }
            }
        });
        editor.onDidChangeModelContent(function () {
        });
        this.editors.push(editor);
    };
    MonacoService.prototype.disposeEditor = function (editor) {
        var monaco = window.monaco;
        var models = monaco.editor.getModels();
        for (var _i = 0, models_1 = models; _i < models_1.length; _i++) {
            var model = models_1[_i];
            if (model._attachedEditorCount === 0) {
                model.dispose();
            }
        }
        this.editors = this.editors.filter(function (e) { return e.getId() !== editor.getId(); });
    };
    var MonacoService_1;
    MonacoService.BUILD_IN_WORDS = {
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
    MonacoService.REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:\/)?([~a-zA-Z0-9_\.\/]+)/;
    MonacoService.OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)/;
    MonacoService.CLOSE_PATTERN = /^==\s*$/;
    MonacoService = MonacoService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_opener_service__WEBPACK_IMPORTED_MODULE_4__["OpenerService"],
            _core_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"]])
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

module.exports = "<ngx-monaco-editor [hidden]='editor.diffEditing' class='code-editor' [options]=\"{}\" [model]='{}' (onInit)=\"codeEditorLoaded($event)\"></ngx-monaco-editor>\n<ngx-monaco-diff-editor [hidden]='!editor.diffEditing' class='code-editor' [options]=\"{}\" [originalModel]=\"{}\" [modifiedModel]=\"{}\" (onInit)=\"diffEditorLoaded($event)\"></ngx-monaco-diff-editor>"

/***/ }),

/***/ "./src/app/editor/workspace/code-editor/code-editor.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/editor/workspace/code-editor/code-editor.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".code-editor {\n  height: calc(100% - 36px); }\n\n.monaco-editor .detected-link {\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci93b3Jrc3BhY2UvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZS1lZGl0b3Ige1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG59XG4ubW9uYWNvLWVkaXRvciAuZGV0ZWN0ZWQtbGluayB7XG4gICAgY29sb3I6IGJsdWU7XG59Il19 */"

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
/* harmony import */ var _shared_services_core_compiler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/core/compiler.service */ "./src/app/editor/shared/services/core/compiler.service.ts");
/* harmony import */ var _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/core/resource.service */ "./src/app/editor/shared/services/core/resource.service.ts");
/* harmony import */ var _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/monaco/monaco.service */ "./src/app/editor/shared/services/monaco/monaco.service.ts");
/* harmony import */ var _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/core/git.service */ "./src/app/editor/shared/services/core/git.service.ts");








var CodeEditorComponent = /** @class */ (function () {
    function CodeEditorComponent(compiler, resources, git, notification, monacoService) {
        this.compiler = compiler;
        this.resources = resources;
        this.git = git;
        this.notification = notification;
        this.monacoService = monacoService;
    }
    CodeEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openSubscription = this.editor.onOpened.subscribe(function (uri) {
            _this.open(uri);
        });
        this.diffSubscription = this.editor.onDiffEditing.subscribe(function (mode) {
            if (mode) {
                _this.open(_this.editor.data());
            }
            else {
                _this.open(_this.editor.data());
                _this.editor.diffEditor.getModel().original.dispose();
                _this.editor.diffEditor.getModel().modified.dispose();
            }
        });
    };
    CodeEditorComponent.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
        this.diffSubscription.unsubscribe();
        this.monacoService.disposeEditor(this.editor.codeEditor);
    };
    CodeEditorComponent.prototype.codeEditorLoaded = function (codeEditor) {
        this.monacoService.registerEditor(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.data());
    };
    CodeEditorComponent.prototype.diffEditorLoaded = function (diffEditor) {
        this.monacoService.registerEditor(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.data());
    };
    CodeEditorComponent.prototype.open = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, error_1, monaco, language, model, meta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.active = data.resource;
                        if (!this.editor.diffEditing) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.git.show(this.active)];
                    case 2:
                        _a.diffContent = (_b.sent()) || '';
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.notification.logError(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        monaco = window.monaco;
                        language = this.monacoService.findLanguage(this.active);
                        model = monaco.editor.getModel(data.uri) || monaco.editor.createModel(this.active.content, language, data.uri);
                        if (model.getValue() !== this.active.content) {
                            model.setValue(this.active.content);
                            this.active.changed = false;
                            this.active.lastContent = this.active.content;
                        }
                        meta = this.active.meta;
                        this.readonly = (this.editor.diffEditing || !this.active.write);
                        this.editor.codeEditor.setModel(model);
                        this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
                        this.editor.codeEditor.focus();
                        if (data.position) {
                            this.editor.codeEditor.setPosition({
                                lineNumber: data.position.line, column: data.position.line
                            });
                            this.editor.codeEditor.revealLineInCenter(data.position.line, monaco.editor.ScrollType.Smooth);
                        }
                        if (this.editor.diffEditing) {
                            this.editor.diffEditor.setModel({
                                original: monaco.editor.createModel(this.diffContent, language),
                                modified: monaco.editor.createModel(this.active.content, language),
                            });
                            this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: this.readonly });
                            this.editor.diffEditor.getModifiedEditor().focus();
                        }
                        if (this.readonly) {
                            this.notification.warning('readonly editor');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeEditorComponent.prototype.addCommands = function (editor) {
        var _this = this;
        editor.onDidChangeModelContent(function () {
            _this.didContentChanged(editor);
        });
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function () {
            _this.editor.group().save(_this.editor.data()).catch(function (error) {
                _this.notification.logError(error);
            });
        }, '');
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, function () {
            _this.editor.group().saveAll().catch(function (error) {
                _this.notification.logError(error);
            });
        }, '');
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, function () {
            _this.editor.group().close(_this.editor.data(), true).catch(function (error) {
                _this.notification.logError(error);
            });
        }, '');
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, function () {
            _this.editor.group().closeAll(true).catch(function (error) {
                _this.notification.logError(error);
            });
        }, '');
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, function () {
            _this.editor.group().closeSaved().catch(function (error) {
                _this.notification.logError(error);
            });
        }, '');
        // tslint:enable: no-bitwise
    };
    CodeEditorComponent.prototype.didContentChanged = function (editor) {
        if (!this.readonly) {
            var model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.lastContent !== this.active.content;
        }
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_core_compiler_service__WEBPACK_IMPORTED_MODULE_4__["CompilerService"],
            _shared_services_core_resource_service__WEBPACK_IMPORTED_MODULE_5__["ResourceService"],
            _shared_services_core_git_service__WEBPACK_IMPORTED_MODULE_7__["GitService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _shared_services_monaco_monaco_service__WEBPACK_IMPORTED_MODULE_6__["MonacoService"]])
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
        this.open(this.editor.data());
        this.openSubscription = this.editor.onOpened.subscribe(function (data) {
            _this.open(data);
        });
    };
    ImageEditorComponent.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
    };
    ImageEditorComponent.prototype.open = function (data) {
        this.svg = data.resource.content;
        this.url = data.resource.meta.downloadUrl;
        this.isSVG = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_3__["isSVG"])(data.resource);
        console.log(data.resource);
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
        this.open(this.editor.data());
        this.openSubscription = this.editor.onOpened.subscribe(function (data) {
            _this.open(data);
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
    PreviewEditorComponent.prototype.open = function (data) {
        this.content = data.resource.meta.previewData;
        this.isMarkdown = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isMarkdown"])(data.resource);
        this.isHTML = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isSVG"])(data.resource);
        this.isURL = Object(_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_4__["isPl"])(data.resource);
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

module.exports = "<!-- LITTLE HACK TO PRELOAD MONACO EDITOR -->\n<ngx-monaco-editor [hidden]='true' [options]='{}' [model]='{}'></ngx-monaco-editor>\n<as-split class='h100' direction='horizontal' gutterSize='5' useTransition='true' cdkDropListGroup>\n    <ng-container *ngFor='let group of groups'>\n        <as-split-area class='editor-group h100' style='overflow: hidden;'>\n            <div class='tab-bar'>\n                <div [id]='group.id()' class='tab-group' cdkDropList [cdkDropListData]=\"group.tabs\" (cdkDropListDropped)=\"group.drop($event)\">\n                    <div *ngFor='let tab of group.tabs; trackBy: group.trackTab' [matTooltip]=\"tab.resource.path\"\n                        [ngClass]=\"{'tab-item': true, active: group.isActive(tab), changed: group.isChanged(tab)}\"\n                        (click)='group.open(tab)' cdkDragAxis='x' cdkDrag>\n                        <i class=\"tab-icon {{tab.icon}}\"></i>\n                        <span>{{tab.title}}</span>\n                        <span class='tab-close' (click)='group.close(tab, true)'>&nbsp;&times;</span>\n                    </div>\n                </div>\n                <div class=\"spacer\"></div>  \n                <ng-container *ngIf='group.someAction();'>\n                    <ng-container *ngIf='group.focused()'>\n                        <ng-container *ngFor='let action of group.actions()'>\n                            <div class='tab-item' [matTooltip]='action.tooltip' *ngIf='action.condition(group.activeTab().resource)' (click)='action.invoke(group.activeTab().resource)'>\n                                <i class=\"{{action.icon}}\"></i>\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                    <div class='tab-item' matTooltip='More Options' [matMenuTriggerFor]=\"editorMenu\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                    </div>\n                    <mat-menu #editorMenu=\"matMenu\">\n                        <button mat-menu-item (click)='group.save(group.activeTab())'>Save ⌘S</button>\n                        <button mat-menu-item (click)='group.saveAll()'>Save All ⌘Alt S</button>\n                        <button mat-menu-item (click)='group.close(group.activeTab(), true)'>Close ⌘K</button>\n                        <button mat-menu-item (click)='group.closeAll(true)'>Close All ⌘Alt K</button>\n                        <button mat-menu-item (click)='group.closeSaved()'>Close Saved ⌘Alt U</button>\n                    </mat-menu>\n                </ng-container>\n            </div>\n            <ng-container *ngFor='let editor of group.editors; trackBy group.trackEditor'>\n                <ng-container [ngSwitch]=\"editor.type()\">\n                    <code-editor [hidden]='!group.activeEditorIs(\"code\")' *ngSwitchCase=\"'code'\" [editor]='editor'></code-editor>\n                    <image-editor [hidden]='!group.activeEditorIs(\"image\")' *ngSwitchCase=\"'image'\" [editor]='editor'></image-editor>\n                    <preview-editor [hidden]='!group.activeEditorIs(\"preview\")' *ngSwitchCase=\"'preview'\" [editor]='editor'></preview-editor>\n                </ng-container>\n            </ng-container>\n        </as-split-area>\n    </ng-container>\n</as-split>"

/***/ }),

/***/ "./src/app/editor/workspace/workspace.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/editor/workspace/workspace.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-group {\n  position: relative;\n  overflow: hidden; }\n\n.tab-bar {\n  padding: 0; }\n\n.tab-bar .tab-group {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    overflow-x: auto; }\n\n.tab-item.active {\n  background-color: #FFF; }\n\n.tab-item .tab-icon {\n  margin-right: 4px; }\n\n.tab-item .tab-close {\n  font-size: 18px; }\n\n.tab-item .tab-close:hover {\n    opacity: 1; }\n\n.tab-item.changed {\n  border-bottom: 1px solid salmon; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksV0FBVSxFQVFiOztBQVREO0lBR1EsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osWUFBVztJQUNYLGlCQUFnQixFQUNuQjs7QUFHTDtFQUVRLHVCQUFzQixFQUN6Qjs7QUFITDtFQU1RLGtCQUFpQixFQUNwQjs7QUFQTDtFQVVRLGdCQUFlLEVBSWxCOztBQWRMO0lBWVksV0FBVSxFQUNiOztBQWJUO0VBZ0JRLGdDQUErQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci93b3Jrc3BhY2Uvd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvci1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiLWJhciB7XG4gICAgcGFkZGluZzogMDtcbiAgICAudGFiLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG59XG5cbi50YWItaXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC50YWItaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cblxuICAgIC50YWItY2xvc2Uge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmNoYW5nZWQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2FsbW9uO1xuICAgIH1cblxufVxuIl19 */"

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
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groups = this.editor.listGroups();
        this.editor.onGroupChanged.subscribe(function (groups) {
            _this.groups = groups;
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
/* harmony import */ var _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../pipes/sanitize-html.pipe */ "./src/app/shared/pipes/sanitize-html.pipe.ts");
/* harmony import */ var _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
/* harmony import */ var _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../directives/draggable.directive */ "./src/app/shared/directives/draggable.directive.ts");
/* harmony import */ var _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../directives/droppable.directive */ "./src/app/shared/directives/droppable.directive.ts");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/empty-state/empty-state.component */ "./src/app/shared/components/empty-state/empty-state.component.ts");
/* harmony import */ var _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pipes/sanitize-url.pipe */ "./src/app/shared/pipes/sanitize-url.pipe.ts");

/* angular core  */






/* material design  */


























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_29__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmComponent"],
                _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_31__["EmptyStateComponent"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_27__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_28__["DroppableDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_24__["AutofocusDirective"],
                _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_25__["SanitizeHtmlPipe"],
                _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_32__["SanitizeResourceUrlPipe"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_26__["RunScriptsDirective"],
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
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
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
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"],
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
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_29__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmComponent"],
                _components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_31__["EmptyStateComponent"],
                _directives_draggable_directive__WEBPACK_IMPORTED_MODULE_27__["DraggableDirective"],
                _directives_droppable_directive__WEBPACK_IMPORTED_MODULE_28__["DroppableDirective"],
                _directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_24__["AutofocusDirective"],
                _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_25__["SanitizeHtmlPipe"],
                _pipes_sanitize_url_pipe__WEBPACK_IMPORTED_MODULE_32__["SanitizeResourceUrlPipe"],
                _directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_26__["RunScriptsDirective"],
            ],
            entryComponents: [
                _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_29__["PromptComponent"],
                _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmComponent"],
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
        if (stackTrace === void 0) { stackTrace = true; }
        this.log(message, 'info', stackTrace);
    };
    NotificationService.prototype.logWarning = function (message, stackTrace) {
        if (stackTrace === void 0) { stackTrace = true; }
        this.log(message, 'warning', stackTrace);
    };
    NotificationService.prototype.logError = function (message, stackTrace) {
        if (stackTrace === void 0) { stackTrace = true; }
        this.log(message, 'error', stackTrace);
    };
    NotificationService.prototype.log = function (message, type, stackTrace) {
        if (stackTrace === void 0) { stackTrace = true; }
        var item = { message: this.parseMessage(message, stackTrace), type: type };
        this.onLogAdded.next(item);
        this.size++;
    };
    NotificationService.prototype.parseMessage = function (message, stackTrace) {
        var msg = message;
        if (typeof message !== 'string') {
            msg = message.error;
            if (!msg) {
                if (message.stack) {
                    var trace = stackTrace ? message.stack.split('\n').join('<br/>') : '';
                    msg = message.message + trace;
                }
                else {
                    msg = JSON.stringify(message);
                }
            }
        }
        return msg;
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