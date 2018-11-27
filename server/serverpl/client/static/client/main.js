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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #FFF;\n}\n\n.sidenav {\n    width: 250px;\n}\n\n.toolbar {\n    background-color: #343A40;\n    color: #FFF;\n    height: 96px;\n}\n\n.toolbar__title {\n    margin: 0px 2rem;\n    font-size: 24px;\n}\n\n.toolbar__item {\n    display: flex;\n    align-items: center;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    text-decoration: none;\n    font-size: initial;\n    line-height: 20px;\n    color: rgba(255, 255, 255, 0.5);\n}\n\n.toolbar__item:hover {\n    color: rgba(255, 255, 255, 1);\n}\n\n.toolbar__spacer {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQjtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLDhCQUE4QjtDQUNqQzs7QUFDRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cblxuLnNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLnRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNBNDA7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgaGVpZ2h0OiA5NnB4O1xufVxuXG4udG9vbGJhcl9fdGl0bGUge1xuICAgIG1hcmdpbjogMHB4IDJyZW07XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udG9vbGJhcl9faXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi50b29sYmFyX19pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cbi50b29sYmFyX19zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav class='sidenav' mode=\"side\" #sidenav></mat-sidenav>\n  <mat-sidenav-content class='sidenav-content'>\n    <mat-toolbar class='toolbar'>\n    <img src=\"/static/client/assets/images/upem.png\" width=\"135\" height=\"70\"/>\n\n    <span class='toolbar__title'>{{ title }}</span>\n      \n    <a class='toolbar__item' routerLink=\"\"><i class=\"fas fa-graduation-cap\"></i>&nbsp;Mes Cours</a>\n    <a class='toolbar__item' routerLink=\"/pleditor\"><i class=\"fas fa-cloud\"></i>&nbsp;PL Editor</a>\n    <a class='toolbar__item' href=\"/ask/\"><i class=\"fas fa-question\"></i>&nbsp;FAQ</a>\n    <a class='toolbar__item' href=\"/documentation/\"><i class=\"fas fa-book\"></i>&nbsp;Documentation</a>\n    <a class='toolbar__item' href=\"/admin/\"><i class=\"fas fa-cog\"></i>&nbsp;Administration</a> <!-- TODO if admin -->\n\n    <span class='toolbar__spacer'></span>\n    <a class='toolbar__item'><i class=\"fas fa-user\"></i>&nbsp;Log-in</a> <!-- TODO if not logged -->\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Premier Langage";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pleditor_pleditor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pleditor/pleditor.component */ "./src/app/pleditor/pleditor.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _pleditor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pleditor/explorer/explorer.component */ "./src/app/pleditor/explorer/explorer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var monacoConfig = {
    baseUrl: './static/client/assets/',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: function () {
        var monaco = window.monaco;
        console.log(monaco);
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pleditor_pleditor_component__WEBPACK_IMPORTED_MODULE_8__["PlEditorComponent"],
                _pleditor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_10__["ExplorerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_4__["MonacoEditorModule"].forRoot(monacoConfig),
                angular_split__WEBPACK_IMPORTED_MODULE_5__["AngularSplitModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pleditor_pleditor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pleditor/pleditor.component */ "./src/app/pleditor/pleditor.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'pleditor', component: _pleditor_pleditor_component__WEBPACK_IMPORTED_MODULE_2__["PlEditorComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/pleditor/explorer/explorer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pleditor/explorer/explorer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    width: 100%;\n    height: 100%;\n    background-color: #F6F6F6;\n    border-right: 1px solid #CCC;\n}\n\n.header {\n    height: 24px;\n    width: 100%;\n    border-bottom: 1px solid #CCC;\n}\n\n.header span {\n    font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxlZGl0b3IvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGxlZGl0b3IvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xufVxuXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XG59XG5cbi5oZWFkZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pleditor/explorer/explorer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pleditor/explorer/explorer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header'>\n    <span>Explorer</span>\n</div>"

/***/ }),

/***/ "./src/app/pleditor/explorer/explorer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pleditor/explorer/explorer.component.ts ***!
  \*********************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent() {
    }
    ExplorerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/pleditor/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./src/app/pleditor/explorer/explorer.component.css")]
        })
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/pleditor/pleditor.component.css":
/*!*************************************************!*\
  !*** ./src/app/pleditor/pleditor.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    height: calc(100vh - 96px - 280px);\n    display: flex;\n}\n\n.editor-toolbar {\n    width: 24px;\n    height: calc(100vh - 96px);\n    background-color: #F6F6F6;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-right: 1px solid #CCC;\n}\n\n.editor-content {\n    height: calc(100vh - 96px);\n    width: calc(100vw - 24px);\n    overflow: hidden;\n}\n\n.editor-tabs {\n    width: 100%;\n    height: 24px;\n    background-color: #F6F6F6;\n    border-bottom: 1px solid #CCC;\n}\n\nngx-monaco-editor {\n    height: 100%;\n    /* width: calc(100vw - 32px);\n    height: calc(100vh - 96px); */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxlZGl0b3IvcGxlZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsNkJBQTZCO0NBQ2hDOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiw4QkFBOEI7Q0FDakM7O0FBRUQ7SUFDSSxhQUFhO0lBQ2I7a0NBQzhCO0NBQ2pDIiwiZmlsZSI6InNyYy9hcHAvcGxlZGl0b3IvcGxlZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NnB4IC0gMjgwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lZGl0b3ItdG9vbGJhciB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTZweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xufVxuXG4uZWRpdG9yLWNvbnRlbnQge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk2cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjRweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVkaXRvci10YWJzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxubmd4LW1vbmFjby1lZGl0b3Ige1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk2cHgpOyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pleditor/pleditor.component.html":
/*!**************************************************!*\
  !*** ./src/app/pleditor/pleditor.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='editor-toolbar'>\n    <button mat-icon-button  matTooltip=\"Explorer\">\n        <mat-icon aria-label=\"Explorer\">file_copy</mat-icon>\n    </button>\n    <button mat-icon-button matTooltip=\"Settings\">\n        <mat-icon aria-label=\"Explorer\">settings</mat-icon>\n    </button>\n</div>\n\n<div class='editor-content'>\n    <as-split direction=\"horizontal\">\n        <as-split-area size=\"20\">\n            <app-explorer></app-explorer>\n        </as-split-area>\n        <as-split-area size=\"80\">\n            <as-split direction=\"vertical\">\n                <as-split-area size=\"90\">\n                    <div class='editor-tabs'></div>\n                    <ngx-monaco-editor [options]=\"editorOptions\" [(ngModel)]=\"code\"></ngx-monaco-editor>                \n                </as-split-area>\n                <as-split-area size=\"10\">          \n                </as-split-area>\n            </as-split>\n        </as-split-area>\n    </as-split>\n</div>"

/***/ }),

/***/ "./src/app/pleditor/pleditor.component.ts":
/*!************************************************!*\
  !*** ./src/app/pleditor/pleditor.component.ts ***!
  \************************************************/
/*! exports provided: PlEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlEditorComponent", function() { return PlEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlEditorComponent = /** @class */ (function () {
    function PlEditorComponent() {
        this.editorOptions = {
            theme: 'vs',
            language: 'javascript'
        };
        this.code = '';
    }
    PlEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pleditor',
            template: __webpack_require__(/*! ./pleditor.component.html */ "./src/app/pleditor/pleditor.component.html"),
            styles: [__webpack_require__(/*! ./pleditor.component.css */ "./src/app/pleditor/pleditor.component.css")]
        })
    ], PlEditorComponent);
    return PlEditorComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


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