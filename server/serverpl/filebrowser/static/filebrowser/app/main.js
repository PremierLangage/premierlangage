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
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");




var routes = [
    { path: 'filebrowser', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"] }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editor_editor_config__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editor/editor.config */ "./src/app/editor/editor.config.ts");
/* harmony import */ var _editor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./editor/explorer/explorer.component */ "./src/app/editor/explorer/explorer.component.ts");
/* harmony import */ var _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/directives/autofocus.directive */ "./src/app/shared/directives/autofocus.directive.ts");
/* harmony import */ var _shared_pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/pipes/sanitize-html.pipe */ "./src/app/shared/pipes/sanitize-html.pipe.ts");
/* harmony import */ var _shared_directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
/* harmony import */ var _shared_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/directives/draggable.directive */ "./src/app/shared/directives/draggable.directive.ts");
/* harmony import */ var _shared_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/directives/droppable.directive */ "./src/app/shared/directives/droppable.directive.ts");
/* harmony import */ var _shared_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _editor_console_console_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./editor/console/console.component */ "./src/app/editor/console/console.component.ts");
/* harmony import */ var _editor_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./editor/footer/footer.component */ "./src/app/editor/footer/footer.component.ts");
/* harmony import */ var _editor_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./editor/sidebar/sidebar.component */ "./src/app/editor/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shared/components/empty-state/empty-state.component */ "./src/app/shared/components/empty-state/empty-state.component.ts");
/* harmony import */ var _editor_search_search_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./editor/search/search.component */ "./src/app/editor/search/search.component.ts");
/* harmony import */ var _editor_git_git_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./editor/git/git.component */ "./src/app/editor/git/git.component.ts");












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_28__["EditorComponent"],
                _editor_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_30__["ExplorerComponent"],
                _shared_directives_draggable_directive__WEBPACK_IMPORTED_MODULE_34__["DraggableDirective"],
                _shared_directives_droppable_directive__WEBPACK_IMPORTED_MODULE_35__["DroppableDirective"],
                _shared_directives_autofocus_directive__WEBPACK_IMPORTED_MODULE_31__["AutofocusDirective"],
                _shared_pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_32__["SanitizeHtmlPipe"],
                _shared_directives_run_scripts_directive__WEBPACK_IMPORTED_MODULE_33__["RunScriptsDirective"],
                _shared_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_36__["PromptComponent"],
                _shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_37__["ConfirmComponent"],
                _editor_console_console_component__WEBPACK_IMPORTED_MODULE_38__["ConsoleComponent"],
                _shared_components_empty_state_empty_state_component__WEBPACK_IMPORTED_MODULE_41__["EmptyStateComponent"],
                _editor_footer_footer_component__WEBPACK_IMPORTED_MODULE_39__["FooterComponent"],
                _editor_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_40__["SidebarComponent"],
                _editor_search_search_component__WEBPACK_IMPORTED_MODULE_42__["SearchComponent"],
                _editor_git_git_component__WEBPACK_IMPORTED_MODULE_43__["GitComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken'
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
                //preventDuplicates: true,
                }),
                angular_split__WEBPACK_IMPORTED_MODULE_24__["AngularSplitModule"].forRoot(),
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_25__["MonacoEditorModule"].forRoot(_editor_editor_config__WEBPACK_IMPORTED_MODULE_29__["MONACO_CONFIG"]),
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
                _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]],
            entryComponents: [
                _shared_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_36__["PromptComponent"],
                _shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_37__["ConfirmComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/editor/console/console.component.html":
/*!*******************************************************!*\
  !*** ./src/app/editor/console/console.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='host'>\n    <div class='tab-bar' (click)='didTapOpen($event)'>\n        <h3 class='tab-item'>CONSOLE</h3>\n        <div class='spacer'></div>\n        <div class='tab-item' matTooltip='Clear' (click)='didTapClear($event)'>\n            <i class=\"fas fa-trash-alt\"></i>\n        </div>\n        <div class='tab-item' matTooltip='Clear' (click)='didTapClose($event)'>\n                <i class=\"fas fa-times\"></i>\n        </div>\n    </div>\n    <mat-divider></mat-divider>\n    <app-empty-state *ngIf='empty; else notEmpty' icon='error_outline' title='Nothing to display' subtitle='Informations, Warnings and Errors will be displayed here.'></app-empty-state>\n    <ng-template #notEmpty>\n        <ul class='container-log' #container>\n            <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n                <li class='log__item log__item--{{item.type}}'>\n                <ng-container [ngSwitch]=\"item.type\">\n                    <mat-icon *ngSwitchCase=\"'info'\" mat-list-icon class='log__item-icon'>info</mat-icon>\n                    <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='log__item-icon'>warning</mat-icon>\n                    <mat-icon *ngSwitchDefault mat-list-icon class='log__item-icon'>error</mat-icon>\n                </ng-container>\n                <p class='log__item-content' [innerHTML]='item.message | sanitizeHtml'></p>\n                </li>\n                <mat-divider *ngIf='!last'></mat-divider>\n            </ng-container>\n        </ul>\n    </ng-template>        \n</div>"

/***/ }),

/***/ "./src/app/editor/console/console.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/editor/console/console.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".host {\n  position: relative;\n  overflow: hidden;\n  height: 100%; }\n\n.tab-item {\n  background: transparent; }\n\n.container-log {\n  overflow: auto;\n  height: calc(100% - 36px);\n  padding: 0; }\n\n.log__item {\n  position: relative;\n  list-style-type: none;\n  list-style-type: none;\n  display: flex;\n  align-items: baseline;\n  padding: 8px; }\n\n.log__item .log__item-icon {\n    position: absolute; }\n\n.log__item--info .log__item-icon {\n  color: #009688; }\n\n.log__item--warning .log__item-icon {\n  color: #FFEB3B; }\n\n.log__item--error .log__item-icon {\n  color: #F44336; }\n\n.log__item-content {\n  padding: 0 32px; }\n\n.empty {\n  width: 200px;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2NvbnNvbGUvY29uc29sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsYUFBWSxFQUNmOztBQUVEO0VBQ0ksd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksZUFBYztFQUNkLDBCQUF5QjtFQUN6QixXQUFVLEVBQ2I7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHNCQUFxQjtFQUNyQixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGFBQVksRUFJZjs7QUFWRDtJQVFRLG1CQUFrQixFQUNyQjs7QUFHTDtFQUVRLGVBQWMsRUFDakI7O0FBR0w7RUFFUSxlQUFjLEVBQ2pCOztBQUdMO0VBRVEsZUFBYSxFQUNoQjs7QUFHTDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvY29uc29sZS9jb25zb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhYi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRhaW5lci1sb2cge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvZ19faXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIC5sb2dfX2l0ZW0taWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG5cbi5sb2dfX2l0ZW0tLWluZm8ge1xuICAgIC5sb2dfX2l0ZW0taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDA5Njg4O1xuICAgIH1cbn1cblxuLmxvZ19faXRlbS0td2FybmluZyB7XG4gICAgLmxvZ19faXRlbS1pY29uIHtcbiAgICAgICAgY29sb3I6ICNGRkVCM0I7XG4gICAgfVxufVxuXG4ubG9nX19pdGVtLS1lcnJvciB7XG4gICAgICAubG9nX19pdGVtLWljb24ge1xuICAgICAgICBjb2xvcjojRjQ0MzM2O1xuICAgIH1cbn1cblxuLmxvZ19faXRlbS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDMycHg7XG59XG5cbi5lbXB0eSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/console/console.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/console/console.component.ts ***!
  \*****************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/logging.service */ "./src/app/shared/services/logging.service.ts");



var ConsoleComponent = /** @class */ (function () {
    function ConsoleComponent(logging) {
        this.logging = logging;
        this.openedSize = 60;
        this.size = 0;
        this.items = [];
    }
    ConsoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.empty = true;
        this.logging.addEvent.subscribe(function (message) {
            _this.empty = false;
            _this.items.push(message);
            _this.open();
            _this.scrollBottom();
        });
        this.logging.openEvent.subscribe(function () {
            _this.open();
        });
    };
    ConsoleComponent.prototype.didTapClear = function (event) {
        event.stopPropagation();
        this.items = [];
        this.empty = true;
        this.logging.clear();
    };
    ConsoleComponent.prototype.didTapOpen = function (event) {
        event.stopPropagation();
        this.open();
    };
    ConsoleComponent.prototype.didTapClose = function (event) {
        event.stopPropagation();
        this.size = 5;
    };
    ConsoleComponent.prototype.track = function (index, _item) {
        return index;
    };
    ConsoleComponent.prototype.dragEnd = function (data) {
        this.size = data.sizes[1];
        if (this.size < 5) {
            this.size = 5;
        }
    };
    ConsoleComponent.prototype.open = function () {
        if (this.size < this.openedSize) {
            this.size = this.openedSize;
        }
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
            selector: 'app-console',
            template: __webpack_require__(/*! ./console.component.html */ "./src/app/editor/console/console.component.html"),
            styles: [__webpack_require__(/*! ./console.component.scss */ "./src/app/editor/console/console.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_2__["LoggingService"]])
    ], ConsoleComponent);
    return ConsoleComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='editor-host'>\n  <div class='editor__container'>\n    <app-sidebar #sidebar></app-sidebar>\n    <as-split direction=\"horizontal\" gutterSize='5' useTransition='true'>\n        <as-split-area [size]=\"sidebar.size\">\n          <app-explorer *ngIf='sidebar.index === 0' [resources]='resources()' [isRoot]='true'></app-explorer>\n          <app-search *ngIf='sidebar.index === 1' [resources]='resources()'></app-search>\n          <app-git *ngIf='sidebar.index === 2'></app-git>\n        </as-split-area>   \n        <as-split-area [size]=\"100 - sidebar.size\" class='editor__workspace-container'>\n            <as-split (dragEnd)='console.dragEnd($event)' direction='vertical' gutterSize='5' useTransition='true' class='editor__workspace'>\n                <as-split-area [size]='100 - console.size'>\n                    <as-split direction='horizontal' gutterSize='5' useTransition='true' cdkDropListGroup>\n                        <as-split-area *ngFor='let editor of editors' style='position: relative; overflow: hidden;'>\n                            <div class='tab-bar border-bottom'>\n                                <div class='item-group' cdkDropList [cdkDropListData]=\"editor.resources\" (cdkDropListDropped)=\"editor.drop($event)\">\n                                    <div *ngFor='let resource of editor.resources;trackBy: editor.track'\n                                        [ngClass]=\"{'tab-item': true, active: editor.isSelected(resource), changed: resource.changed}\"\n                                        (click)='didTapOpenResource(resource, editor)' cdkDragAxis='x'cdkDrag>\n                                        <i class=\"tab-icon {{resource.icon}}\"></i>\n                                        <span>{{editor.title(resource)}}</span>\n                                        <span class='tab-close' (click)='didTapCloseResource(resource, editor, $event)'>\n                                            &nbsp;{{ resource.changed ? '&bull;' : '&times;' }}\n                                        </span>\n                                    </div>\n                                </div>\n                                <div class=\"spacer\"></div>    \n                                <ng-container *ngFor='let option of editor.options'>\n                                    <div class='tab-item' matTooltip='{{option.tooltip}}' *ngIf='option.enabled(editor.selection)' (click)='option.action(editor.selection)' >\n                                        <i class=\"{{option.icon}}\"></i>\n                                    </div>\n                                </ng-container>\n                                <div *ngIf='editor.type===\"code\"' class='tab-item' matTooltip='More Options' [matMenuTriggerFor]=\"editorMenu\">\n                                    <i class=\"fas fa-ellipsis-h\"></i>\n                                </div>\n                                <mat-menu #editorMenu=\"matMenu\">\n                                    <button mat-menu-item (click)='editor.didSave()'>Save (Ctrl+S)</button>\n                                    <button mat-menu-item (click)='editor.didClose()'>Close (Ctrl+W)</button>\n                                    <button mat-menu-item (click)='editor.didSaveAll()'>Save All (Ctrl+Alt+W)</button>\n                                    <button mat-menu-item (click)='editor.didCloseAll()'>Close All (Ctrl+Alt+W)</button>\n                                    <button mat-menu-item (click)='editor.didCloseSaved()'>Close Saved</button>\n                                </mat-menu>\n                            </div>  \n                            <ng-container [ngSwitch]=\"editor.type\">\n                                <!-- code editor -->\n                                <ng-container *ngSwitchCase=\"'code'\">\n                                    <ngx-monaco-diff-editor [hidden]='!editor.diffMode' class='code-editor' [options]=\"{}\" [originalModel]='{}' [modifiedModel]='{}' (onInit)=\"editor.onInitDiff($event)\"></ngx-monaco-diff-editor>\n                                    <ngx-monaco-editor [hidden]='editor.diffMode' class='code-editor' [options]=\"{}\" [model]='{}' (onInit)=\"editor.onInit($event)\"></ngx-monaco-editor>\n                                </ng-container>\n                                <!-- preview editor -->\n                                <div *ngSwitchCase=\"'preview'\" class='preview-editor'>\n                                    <div class='preview-editor__content' [innerHTML]='editor.content() | sanitizeHtml' runScripts></div>\n                                </div>\n                                <!-- image editor -->\n                                <div *ngSwitchCase=\"'image'\" class='image-editor'>\n                                    <img src='{{editor.selection.image}}'  [ngStyle]='{zoom: editor.zoom}' />\n                                    <div class='code-editor__btn-group'>\n                                        <div class='code-editor__btn' matTooltip='Zoom In' (click)='editor.zoomIn()'>\n                                            <i class=\"fas fa-plus\"></i>\n                                        </div>\n                                        <div class='code-editor__btn' matTooltip='Zoom Out' (click)='editor.zoomOut()'>\n                                            <i class=\"fas fa-minus\"></i>\n                                        </div>\n                                    </div>\n                                </div>  \n                            </ng-container>\n                        </as-split-area>\n                    </as-split>\n                </as-split-area>\n                <as-split-area [(size)]='console.size' style='overflow: hidden;'>\n                    <app-console #console></app-console>\n                </as-split-area>\n            </as-split>\n        </as-split-area>\n    </as-split>\n  </div>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor-host {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-flow: column;\n  height: calc(100vh - 64px);\n  color: #5a5a5a; }\n\n.editor__container {\n  position: relative;\n  display: flex;\n  flex: 1;\n  overflow: hidden; }\n\n.tab-bar {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  height: 36px;\n  align-items: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n  background-color: #F5F5F5; }\n\n.tab-item {\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  color: #5a5a5a;\n  font-style: normal;\n  padding: 0px 12px;\n  cursor: pointer; }\n\n.editor__workspace-container {\n  position: relative; }\n\n.editor__workspace-container .editor__workspace {\n    height: 100%; }\n\n.editor__workspace-container .tab-bar .item-group {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%; }\n\n.editor__workspace-container .tab-item {\n    background-color: #ecedf0; }\n\n.editor__workspace-container .tab-item.active {\n      background-color: #FFF; }\n\n.editor__workspace-container .tab-item .tab-icon {\n      margin-right: 4px; }\n\n.editor__workspace-container .tab-item .tab-close {\n      font-size: 18px; }\n\n.editor__workspace-container .tab-item .tab-close:hover {\n        opacity: 1; }\n\n.editor__workspace-container .tab-item.changed .tab-close {\n      color: red;\n      font-size: 36px; }\n\n.editor__workspace-container .code-editor, .editor__workspace-container .preview-editor, .editor__workspace-container .image-editor {\n    height: calc(100%); }\n\n.editor__workspace-container .image-editor {\n    background-color: #fff;\n    background-size: 100% 1.2em;\n    background-image: linear-gradient(0deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), linear-gradient(#eee 0.05em, transparent 0.05em); }\n\n.editor__workspace-container .image-editor img {\n      margin: auto;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n\n.editor__workspace-container .image-editor .code-editor__btn-group {\n      position: absolute;\n      top: 48px;\n      right: 12px;\n      width: 32px; }\n\n.editor__workspace-container .image-editor .code-editor__btn {\n      background-color: #ecedf0;\n      width: 32px;\n      height: 32px;\n      border-radius: 2px 4px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: zoom-in;\n      margin-bottom: 8px; }\n\n.editor__workspace-container .preview-editor {\n    overflow: auto; }\n\n.editor__workspace-container .preview-editor .preview-editor__content {\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n      padding: 0 12px; }\n\n.sidebar-panel {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #ecedf0;\n  overflow: hidden; }\n\n.sidebar-panel .tab-bar {\n    font-size: 1rem;\n    padding: 0 0 0 16px; }\n\n.sidebar-panel .sidebar-panel__content {\n    position: relative;\n    margin-top: 8px;\n    overflow-y: auto;\n    margin: 0;\n    height: calc(100% - 36px); }\n\n.spacer {\n  flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsVUFBUztFQUNULGNBQWE7RUFDYixrQkFBaUI7RUFDakIsMkJBQXVDO0VBQ3ZDLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFFBQU87RUFDUCxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixhQXZCYTtFQXdCYixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQiwwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLG1CQUFrQixFQXlGckI7O0FBMUZEO0lBR1EsYUFBWSxFQUNmOztBQUpMO0lBT1EsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osWUFBVyxFQUNkOztBQVhMO0lBY1EsMEJBQXlCLEVBcUI1Qjs7QUFuQ0w7TUFpQlksdUJBQXNCLEVBQ3pCOztBQWxCVDtNQXFCWSxrQkFBaUIsRUFDcEI7O0FBdEJUO01BeUJZLGdCQUFlLEVBSWxCOztBQTdCVDtRQTJCZ0IsV0FBVSxFQUNiOztBQTVCYjtNQWdDWSxXQUFTO01BQ1QsZ0JBQWUsRUFDbEI7O0FBbENUO0lBc0NRLG1CQUFrQixFQUNyQjs7QUF2Q0w7SUEwQ1EsdUJBQXNCO0lBQ3RCLDRCQUEyQjtJQVMzQiwwSkFDOEQsRUEwQmpFOztBQS9FTDtNQXdEWSxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLE9BQU07TUFBRSxRQUFPO01BQUUsVUFBUztNQUFFLFNBQVEsRUFDdkM7O0FBM0RUO01BOERZLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsWUFBVztNQUNYLFlBQVcsRUFDZDs7QUFsRVQ7TUFxRVksMEJBQXlCO01BQ3pCLFlBQVc7TUFDWCxhQUFZO01BQ1osdUJBQXNCO01BQ3RCLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsd0JBQXVCO01BQ3ZCLGdCQUFlO01BQ2YsbUJBQWtCLEVBQ3JCOztBQTlFVDtJQWtGUSxlQUFjLEVBT2pCOztBQXpGTDtNQW9GWSxZQUFXO01BQ1gsYUFBWTtNQUNaLGVBQWM7TUFDZCxnQkFBZSxFQUNsQjs7QUFLVDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixpQkFBZ0IsRUFjbkI7O0FBbkJEO0lBUVEsZ0JBQWU7SUFDZixvQkFBbUIsRUFDdEI7O0FBVkw7SUFhUSxtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsVUFBUztJQUNULDBCQUF5QixFQUM1Qjs7QUFHTDtFQUNJLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLWhlaWdodDogNjRweDtcbiR0YWItaGVpZ2h0OiAzNnB4O1xuXG4uZWRpdG9yLWhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcbiAgICBjb2xvcjogIzVhNWE1YTtcbn1cblxuLmVkaXRvcl9fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YWItYmFyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHRhYi1oZWlnaHQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4udGFiLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1YTVhNWE7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXRvcl9fd29ya3NwYWNlLWNvbnRhaW5lciAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuZWRpdG9yX193b3Jrc3BhY2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC50YWItYmFyICAuaXRlbS1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC50YWItaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VkZjA7XG5cbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWItY2xvc2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuY2hhbmdlZCAudGFiLWNsb3NlIHtcbiAgICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb2RlLWVkaXRvciwgLnByZXZpZXctZWRpdG9yLCAuaW1hZ2UtZWRpdG9yIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xuICAgIH1cblxuICAgIC5pbWFnZS1lZGl0b3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMS4yZW07XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDc5cHgsICNhYmNlZDQgNzlweCwgI2FiY2VkNCA4MXB4LCB0cmFuc3BhcmVudCA4MXB4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNlZWUgLjA1ZW0sIHRyYW5zcGFyZW50IC4wNWVtKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgNzlweCwgI2FiY2VkNCA3OXB4LCAjYWJjZWQ0IDgxcHgsIHRyYW5zcGFyZW50IDgxcHgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1saW5lYXItZ3JhZGllbnQoI2VlZSAuMDVlbSwgdHJhbnNwYXJlbnQgLjA1ZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDc5cHgsICNhYmNlZDQgNzlweCwgI2FiY2VkNCA4MXB4LCB0cmFuc3BhcmVudCA4MXB4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1saW5lYXItZ3JhZGllbnQoI2VlZSAuMDVlbSwgdHJhbnNwYXJlbnQgLjA1ZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQoMGRlZywgdHJhbnNwYXJlbnQgNzlweCwgI2FiY2VkNCA3OXB4LCAjYWJjZWQ0IDgxcHgsIHRyYW5zcGFyZW50IDgxcHgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLW8tbGluZWFyLWdyYWRpZW50KCNlZWUgLjA1ZW0sIHRyYW5zcGFyZW50IC4wNWVtKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHRyYW5zcGFyZW50IDc5cHgsICNhYmNlZDQgNzlweCwgI2FiY2VkNCA4MXB4LCB0cmFuc3BhcmVudCA4MXB4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgjZWVlIC4wNWVtLCB0cmFuc3BhcmVudCAuMDVlbSk7XG4gICAgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNvZGUtZWRpdG9yX19idG4tZ3JvdXAge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0OHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2RlLWVkaXRvcl9fYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VkZjA7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpZXctZWRpdG9yIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIC5wcmV2aWV3LWVkaXRvcl9fY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5zaWRlYmFyLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VkZjA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAudGFiLWJhciB7IFxuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLXBhbmVsX19jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _models_code_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/code-editor */ "./src/app/models/code-editor.ts");
/* harmony import */ var _models_image_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/image-editor */ "./src/app/models/image-editor.ts");
/* harmony import */ var _models_preview_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/preview-editor */ "./src/app/models/preview-editor.ts");
/* harmony import */ var _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/logging.service */ "./src/app/shared/services/logging.service.ts");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./git/git-service */ "./src/app/editor/git/git-service.ts");









var EditorComponent = /** @class */ (function () {
    function EditorComponent(editorService, changeDetector, notification, logging, git) {
        this.editorService = editorService;
        this.changeDetector = changeDetector;
        this.notification = notification;
        this.logging = logging;
        this.git = git;
        this.editors = [];
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editorService.refresh();
        this.editorService.subscribeRefreshEvent(function () {
            while (_this.editors.length > 0) {
                _this.editors[0].closeAll();
            }
        });
        this.editorService.subscribeSelectEvent(function (resource) {
            _this.openResource(resource);
        });
        this.editorService.subscribeDeleteEvent(function (resource) {
            _this.closeResource(resource);
        });
    };
    EditorComponent.prototype.didTapOpenResource = function (resource, editor) {
        editor.open(resource);
    };
    EditorComponent.prototype.didTapCloseResource = function (resource, editor, event) {
        event.stopPropagation();
        this.confirmThenClose(resource, editor);
    };
    EditorComponent.prototype.didTapPreviewResource = function (resource) {
        var _this = this;
        this.editors = this.editors.filter(function (e) { return e.type !== 'preview'; });
        this.editorService.preview(resource).then(function () {
            var preview = new _models_preview_editor__WEBPACK_IMPORTED_MODULE_6__["PreviewEditor"](_this, resource);
            _this.editors.push(preview);
            preview.open(resource);
        }).catch(function (error) {
            _this.logging.error(error);
        });
    };
    EditorComponent.prototype.openResource = function (resource) {
        var _this = this;
        this.editorService.open(resource).then(function (opened) {
            if (opened) {
                var editor = _this.editors.find(function (e) { return e.canOpen(resource); });
                if (editor) {
                    editor.open(resource);
                }
                else {
                    if (resource.image) {
                        _this.editors.push(new _models_image_editor__WEBPACK_IMPORTED_MODULE_5__["ImageEditor"](_this, resource));
                    }
                    else {
                        _this.editors.push(new _models_code_editor__WEBPACK_IMPORTED_MODULE_4__["CodeEditor"](_this, resource));
                    }
                }
            }
        }).catch(function (error) {
            _this.logging.error(error);
        });
    };
    EditorComponent.prototype.confirmThenClose = function (resource, editor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(editor.type === 'code')) return [3 /*break*/, 3];
                        options = {
                            title: "Do you want to close'" + resource.name + "'?",
                            message: "Your changes will be lost if you don't save them.",
                        };
                        _a = !resource.changed;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.notification.confirmAsync(options)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a) {
                            editor.close(resource, this.editors);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        editor.close(resource, this.editors);
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.confirm = function (options) {
        return this.notification.confirmAsync(options);
    };
    EditorComponent.prototype.closeResource = function (resource) {
        var i = 0;
        var contains = false;
        while (true) {
            i = 0;
            contains = false;
            while (i < this.editors.length) {
                if (this.editors[i].contains(resource)) {
                    contains = true;
                    this.editors[i].close(resource, this.editors);
                }
                i++;
            }
            if (!contains) {
                break;
            }
        }
    };
    EditorComponent.prototype.detectChanges = function () {
        this.changeDetector.detectChanges();
    };
    EditorComponent.prototype.resources = function () {
        return this.editorService.resources;
    };
    EditorComponent.prototype.runningTask = function () {
        return this.editorService.runningTask;
    };
    EditorComponent.prototype.lastRevision = function (resource) {
        return this.git.show(resource);
    };
    EditorComponent.prototype.save = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.editorService.save(resource).then(function () {
                    _this.notification.success('resource saved on the server !');
                    _this.detectChanges();
                }).catch(function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    EditorComponent.prototype.beforeunload = function ($event) {
        if (this.editorService.findPredicate(function (e) { return e.changed; })) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _shared_services_logging_service__WEBPACK_IMPORTED_MODULE_7__["LoggingService"],
            _git_git_service__WEBPACK_IMPORTED_MODULE_8__["GitService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.config.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.config.ts ***!
  \*****************************************/
/*! exports provided: PREMIER_LANGAGE, LANGUAGES, MONACO_CONFIG, onMonacoLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREMIER_LANGAGE", function() { return PREMIER_LANGAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONACO_CONFIG", function() { return MONACO_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMonacoLoad", function() { return onMonacoLoad; });
var PREMIER_LANGAGE = 'premierlangage';
var LANGUAGES = {
    css: 'css',
    cs: 'csharp',
    js: 'javascript',
    ts: 'typescript',
    html: 'html',
    md: 'markdown',
    py: 'python',
    r: 'r',
    sql: 'sql',
    mysql: 'mysql',
    java: 'java',
    c: 'cpp',
    cpp: 'cpp',
    h: 'cpp',
    xml: 'xml',
    bat: 'bat',
    ini: 'ini',
    php: 'php',
    pl: 'premierlangage',
    pltp: 'premierlangage'
};
var MONACO_CONFIG = {
    baseUrl: '/static/filebrowser/app/assets',
    defaultOptions: {
        value: '',
        theme: PREMIER_LANGAGE,
        language: '',
        renderWhitespace: 'all',
        renderControlCharacters: true,
        renderLineHighlight: true,
        renderIndentGuides: true,
        automaticLayout: true,
        lineNumbers: "on",
        roundedSelection: true,
        scrollBeyondLastLine: false,
        scrollbar: {
            verticalScrollbarSize: 7,
            horizontalScrollbarSize: 7,
        },
    },
    onMonacoLoad: onMonacoLoad
};
function onMonacoLoad() {
    var monaco = window.monaco;
    var editor = monaco.editor;
    var SPECIAL_PATTERN = /(title|author|introduction|introductionh|teacher|text|texth|build|before|form|template|extends|builder|grader)(?=(=|(\+=)|=%))/;
    var VARIABLE_PATTERN = /\w+(\.\w+)*(?=(=|\+=|=%|==))/;
    var REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)[~\s\/]*(\w+:\/)?([a-zA-Z0-9_\./]+)/;
    monaco.languages.register({ id: PREMIER_LANGAGE });
    monaco.languages.setMonarchTokensProvider(PREMIER_LANGAGE, {
        tokenizer: {
            root: [
                [SPECIAL_PATTERN, 'special'],
                [VARIABLE_PATTERN, 'variable'],
                [REFERENCE_PATTERN, 'reference']
            ]
        }
    });
    editor.defineTheme(PREMIER_LANGAGE, {
        base: 'vs',
        inherit: true,
        rules: [
            { token: 'special', foreground: '1382dd', fontStyle: 'bold' },
            { token: 'variable', foreground: '1382dd' },
        ]
    });
}


/***/ }),

/***/ "./src/app/editor/editor.service.ts":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_resource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/resource */ "./src/app/models/resource.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.utils */ "./src/app/editor/editor.utils.ts");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./git/git-service */ "./src/app/editor/git/git-service.ts");







// Rename failed to execute.
/** Provides services for the editor*/
var EditorService = /** @class */ (function () {
    function EditorService(http, git) {
        this.http = http;
        this.git = git;
        this.onRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onSelected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onDeleted = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onRunningTask = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.previewFunctions = {};
        /** the resources array */
        this.resources = [];
        this.previewFunctions = {
            'pl': this.previewPL,
        };
    }
    /**
     * Adds new file resource into 'resource'
     * @param resource the resource (must be a directory)
     * @returns The added resource
     */
    EditorService.prototype.addFile = function (resource) {
        return this.add(resource, 'file');
    };
    /**
     * Adds new directory resource into 'resource'
     * @param resource the resource (must be a directory)
     * @returns The added resource
     */
    EditorService.prototype.addFolder = function (resource) {
        return this.add(resource, 'folder');
    };
    /**
     * Cancels the editition or the creation of the resource depending to it's state.
     * - If the resource exists, the function will reset it's name to the name before the edition
     * - Else the function will cancel the creation of the resource by removing it to the local cache.
     * @param resource the resource (resource.editing must be == true)
     */
    EditorService.prototype.cancelOrRemove = function (resource) {
        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](resource.editing, 'resource should be in editing state');
        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](_editor_utils__WEBPACK_IMPORTED_MODULE_5__["canWrite"](resource), 'permission denied');
        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](!_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isRoot"](resource), 'permission denied');
        var path = resource.path;
        var success = false;
        if (resource.nameBeforeEdition) {
            resource.name = resource.nameBeforeEdition;
            success = true;
        }
        else {
            resource.path += '/' + resource.name;
            success = this.remove(resource.path);
            if (!success) {
                resource.path = path;
            }
        }
        if (success) {
            delete resource.editing;
            delete resource.parentRef;
            delete resource.nameBeforeEdition;
        }
        return success;
    };
    /**
     * Creates or renames the resource if needed.
     * @param resource the resource object to creates.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    EditorService.prototype.createOrRename = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](_editor_utils__WEBPACK_IMPORTED_MODULE_5__["canWrite"](resource.parentRef), 'permission denied');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](!resource.parentRef.children.find(function (it) {
                            return it.name === resource.name && !it.editing;
                        }), 'resource name already exists !');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["checkName"](resource.name);
                        var data = {
                            name: 'create_resource',
                            path: resource.path + '/' + resource.name,
                            content: resource.content,
                            type: resource.type
                        };
                        if (resource.nameBeforeEdition) {
                            data.name = "rename_resource";
                            data.path = resource.path;
                            data['target'] = resource.name;
                            delete data.content;
                            delete data.type;
                        }
                        _this.emitTaskEvent(true, 'create');
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        _this.http.post('filebrowser/option', data, { headers: headers }).toPromise().then(function (response) {
                            resource.path = response['path'];
                            resource.icon = response['icon'];
                            _this.sort(resource.parentRef.children);
                            delete resource.editing;
                            delete resource.parentRef;
                            delete resource.nameBeforeEdition;
                            _this.git.refresh();
                            _this.emitTaskEvent(false, 'create');
                            resolve(true);
                        }).catch(function (error) {
                            _this.emitTaskEvent(false, 'create');
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Deletes the resource object from the server.
     * @param resource the resource object to deletes.
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    EditorService.prototype.delete = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](resource, 'resource');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](_editor_utils__WEBPACK_IMPORTED_MODULE_5__["canWrite"](resource), 'permission denied');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](!_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isRoot"](resource), 'permission denied');
                        this.emitTaskEvent(true, "delete");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'delete_resource',
                                path: resource.path
                            }, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        if (this.remove(resource.path)) {
                            this.emitDeleteEvent(resource);
                        }
                        this.emitTaskEvent(false, 'delete');
                        this.git.refresh();
                        return [2 /*return*/, false];
                    case 2:
                        error_1 = _a.sent();
                        this.emitTaskEvent(false, 'delete');
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Emits editor refresh event.
     */
    EditorService.prototype.emitRefreshEvent = function () {
        this.onRefreshed.next();
    };
    /**
     * Emits resource selection event.
     * @param resource the resource
     */
    EditorService.prototype.emitSelectEvent = function (resource) {
        this.onSelected.next(resource);
    };
    /**
     * Emits resource deletion event.
     * @param resource the resource
     */
    EditorService.prototype.emitDeleteEvent = function (resource) {
        this.onDeleted.next(resource);
    };
    /**
     * Finds the resource with the given path.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    EditorService.prototype.find = function (path) {
        path = path.trim();
        return this.findPredicate(function (item) { return item.path === path; });
    };
    /**
     * Finds the resource which meets the given predicate.
     * @param predicate the predicate to test
     * @returns the resource or undefined
     */
    EditorService.prototype.findPredicate = function (predicate) {
        function recursive(resource) {
            if (!resource)
                return undefined;
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
     * @returns the resources array or undefined
     */
    EditorService.prototype.findAll = function (predicate) {
        var result = [];
        this.emitTaskEvent(true, 'search');
        function recursive(resource) {
            if (!resource)
                return undefined;
            if (predicate(resource)) {
                result.push(resource);
            }
            if (resource.children) {
                for (var _i = 0, _a = resource.children; _i < _a.length; _i++) {
                    var root = _a[_i];
                    var result_1 = recursive(root);
                    if (result_1) {
                        return result_1;
                    }
                }
            }
            return undefined;
        }
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var root = _a[_i];
            recursive(root);
        }
        this.emitTaskEvent(false, 'search');
        return result;
    };
    EditorService.prototype.loadPLTP = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, params, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.emitTaskEvent(true, 'load pltp');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'load_pltp').set('path', resource.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.emitTaskEvent(false, 'load pltp');
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.emitTaskEvent(false, 'load pltp');
                        throw error_2;
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    EditorService.prototype.reloadPLTP = function (resource, activityId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, data, headers, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.emitTaskEvent(true, 'reload pltp');
                        data = {
                            name: "reload_pltp",
                            path: resource.path,
                            activity_id: activityId,
                        };
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.emitTaskEvent(false, 'reload pltp');
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        this.emitTaskEvent(false, 'reload pltp');
                        throw error_3;
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
    EditorService.prototype.move = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resource, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        this.emitTaskEvent(true, 'move');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](src, 'src');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](dst, 'dst');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](_editor_utils__WEBPACK_IMPORTED_MODULE_5__["canWrite"](dst), 'permission denied');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isFolder"](dst), 'destination must be a directory');
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
                        this.emitTaskEvent(false, 'move');
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 5:
                        error_4 = _a.sent();
                        this.emitTaskEvent(false, 'move');
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
    EditorService.prototype.save = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.emitTaskEvent(true, 'save');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](resource, 'resource');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        return [4 /*yield*/, this.http.post('filebrowser/option', {
                                name: 'update_resource', path: resource.path, content: resource.content
                            }, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        this.emitTaskEvent(false, 'save');
                        this.git.refresh();
                        return [2 /*return*/, true];
                    case 2:
                        error_5 = _a.sent();
                        this.emitTaskEvent(false, 'save');
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Opens the content of the resource on the server (if not already opened)
     * @param resource the resource
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    EditorService.prototype.open = function (resource) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.selection = resource;
                        if (resource.type === 'folder') {
                            resource.expanded = !resource.expanded;
                            resolve(false);
                        }
                        else {
                            _this.emitTaskEvent(true, 'open');
                            if ((resource.content || resource.image) && !resource.dirty) {
                                _this.emitTaskEvent(false, 'open');
                                resolve(true);
                            }
                            else {
                                var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resource').set('path', resource.path);
                                _this.http.get('filebrowser/option', { params: params }).toPromise().then(function (response) {
                                    _this.emitTaskEvent(false, 'open');
                                    resource.content = response['content'];
                                    resource.image = response['image'];
                                    resource.changed = false;
                                    resource.dirty = false;
                                    Object(_models_resource__WEBPACK_IMPORTED_MODULE_3__["resourceInit"])(resource);
                                    resolve(true);
                                }).catch(function (error) {
                                    _this.emitTaskEvent(false, 'open');
                                    if (error.error && error.error.includes("codec can't decode")) {
                                        reject(resource.name + ' is not displayed in the editor because it is either binary or uses an unsupported text encoding.');
                                    }
                                    else {
                                        reject(error);
                                    }
                                });
                            }
                        }
                    })];
            });
        });
    };
    /**
     * Gets a value indicating whether the given resource is the selected one inside the explorer
     * @param resource the resource
     * @returns true if the resource is the selected one false otherwise
     */
    EditorService.prototype.isSelection = function (resource) {
        return this.selection && resource.path === this.selection.path;
    };
    /**
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    EditorService.prototype.preview = function (resource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.emitTaskEvent(true, 'preview');
            var ext = _editor_utils__WEBPACK_IMPORTED_MODULE_5__["extensionOf"](resource);
            var action = _this.previewFunctions[ext];
            action(resource, _this).then(function (response) {
                _this.emitTaskEvent(false, 'preview');
                resource.state.preview = response.preview;
                resolve(true);
            }).catch(function (error) {
                _this.emitTaskEvent(false, 'preview');
                reject(error);
            });
        });
    };
    EditorService.prototype.subscribeRefreshEvent = function (completion) {
        this.onRefreshed.subscribe(completion);
    };
    EditorService.prototype.subscribeSelectEvent = function (completion) {
        this.onSelected.subscribe(completion);
    };
    EditorService.prototype.subscribeDeleteEvent = function (completion) {
        this.onDeleted.subscribe(completion);
    };
    EditorService.prototype.subscribeTaskEvent = function (completion) {
        this.onRunningTask.subscribe(completion);
    };
    /**
     * Reloads the resources from the server.
     * @returns Promise<boolean> resolved with true or rejected with an error.
     */
    EditorService.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.emitTaskEvent(true, 'refresh');
                        _this.emitRefreshEvent();
                        if (_this.subscription)
                            _this.subscription.unsubscribe();
                        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'get_resources');
                        _this.subscription = _this.http.get('/filebrowser/option', { params: params })
                            .subscribe(function (response) {
                            _this.resources = response;
                            if (_this.resources.length > 0) {
                                _this.resources[0].expanded = true;
                                _this.sort(_this.resources);
                            }
                            _this.git.refresh();
                            _this.emitTaskEvent(false, 'refresh');
                            resolve(true);
                        }, function (error) {
                            _this.emitTaskEvent(false, 'refresh');
                            reject(error);
                        });
                    })];
            });
        });
    };
    EditorService.prototype.add = function (resource, type) {
        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](resource.type === 'folder', 'resource.type must be folder');
        resource.children = resource.children || [];
        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](resource.children.every(function (e) { return !e.editing; }), 'cannot edit multiple resources');
        resource.expanded = true;
        var newResource = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, resource, { editing: true, name: '', type: type, icon: 'fas fa-' + type, children: [], parent: resource.path, parentRef: resource });
        resource.children.push(newResource);
        return newResource;
    };
    EditorService.prototype.emitTaskEvent = function (running, taskName) {
        this.runningTask = running;
        this.taskName = taskName;
        this.onRunningTask.next(running);
    };
    EditorService.prototype.moveResource = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var headers, response, srcLastParent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](src.path, 'src.path');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](dst.path, 'dst.path');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](src.path != dst.path, 'cannot move the resource to the same path');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["assert"](!_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isRoot"](src), 'cannot move a root resource');
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
    EditorService.prototype.moveFile = function (src, dst) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var formData, headers, newRes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](src.name, 'src.name');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["requireNonNull"](dst.path, 'dst.path');
                        _editor_utils__WEBPACK_IMPORTED_MODULE_5__["checkName"](src.name);
                        formData = new FormData();
                        formData.append('file', src, src.name);
                        formData.append('path', dst.path);
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                        headers.set('Content-Type', null);
                        headers.set('Accept', "multipart/form-data");
                        return [4 /*yield*/, this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise()];
                    case 1:
                        _a.sent();
                        newRes = this.addFile(dst);
                        newRes.path += '/' + src.name;
                        newRes.name = src.name;
                        delete newRes.editing;
                        return [2 /*return*/, newRes];
                }
            });
        });
    };
    EditorService.prototype.previewPL = function (resource, service) {
        var data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content,
            'requested_action': 'preview'
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    };
    EditorService.prototype.remove = function (path) {
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
    EditorService.prototype.sort = function (resources) {
        if (resources) {
            resources.sort(function (a, b) {
                if (a.type === b.type) {
                    return a.name < b.name ? -1 : 1;
                }
                return a.type === 'folder' ? -1 : 1;
            });
            for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                var item = resources_1[_i];
                this.sort(item.children);
            }
        }
    };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _git_git_service__WEBPACK_IMPORTED_MODULE_6__["GitService"]])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/editor/editor.utils.ts":
/*!****************************************!*\
  !*** ./src/app/editor/editor.utils.ts ***!
  \****************************************/
/*! exports provided: DISALLOWED_CHAR, canRead, canWrite, readonly, isFolder, isFile, isRoot, isPl, isMarkdown, isPltp, canBePreviewed, isHome, isNotRoot, isRepo, canAddFile, canCopy, canAddFolder, canBeRenamed, canBeDeleted, canBeTested, canBeLoaded, canBeReloaded, extensionOf, language, canBeUsedAsFileName, checkName, requireNonNull, assert, basename */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBePreviewed", function() { return canBePreviewed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotRoot", function() { return isNotRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRepo", function() { return isRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFile", function() { return canAddFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canCopy", function() { return canCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAddFolder", function() { return canAddFolder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeRenamed", function() { return canBeRenamed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeDeleted", function() { return canBeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeTested", function() { return canBeTested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeLoaded", function() { return canBeLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeReloaded", function() { return canBeReloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensionOf", function() { return extensionOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canBeUsedAsFileName", function() { return canBeUsedAsFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkName", function() { return checkName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requireNonNull", function() { return requireNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony import */ var _editor_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.config */ "./src/app/editor/editor.config.ts");

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
    return item && item.type == 'folder';
}
function isFile(item) {
    return item && item.type == 'file';
}
function isRoot(item) {
    return item && item.name === 'home' || item.name === 'home/'
        || item.name === 'lib' || item.name === 'lib/';
}
function isPl(item) {
    return item && item.name.endsWith('.pl');
}
function isMarkdown(item) {
    return item && item.name.endsWith('.md');
}
function isPltp(item) {
    return item && item.name.endsWith('.pltp');
}
function canBePreviewed(item) {
    return item && isPl(item);
}
function isHome(item) {
    return item && item.name === 'home';
}
function isNotRoot(item) {
    return !isRoot(item);
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
function extensionOf(resource) {
    var dotIndex = resource.name.lastIndexOf('.');
    return resource.name.substring(dotIndex + 1);
}
function language(resource) {
    var extension = extensionOf(resource);
    if (extension in _editor_config__WEBPACK_IMPORTED_MODULE_0__["LANGUAGES"])
        return _editor_config__WEBPACK_IMPORTED_MODULE_0__["LANGUAGES"][extension];
    return '';
}
function canBeUsedAsFileName(name) {
    return name && DISALLOWED_CHAR.every(function (e) { return !name.includes(e); });
}
function checkName(name) {
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
    if (!path)
        return path;
    var array = path.split('/');
    return array[array.length - 1];
}


/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"sidebar-panel\" *ngIf='isRoot; else tree'>\n    <div class='tab-bar border-bottom'>\n        <span>EXPLORER</span>       \n        <div class=\"spacer\"></div>\n        <div class='tab-item' (click)='didTapRefresh()' matTooltip='Refresh'>\n            <i class=\"fas fa-sync\"></i>\n        </div>\n        <mat-progress-spinner mode='indeterminate' color='warn' strokeWidth='2' diameter='24' *ngIf='runningTask()'></mat-progress-spinner>\n    </div>\n    <div class=\"sidebar-panel__content\">\n        <app-explorer [resources]='resources' [isRoot]='false'></app-explorer>\n    </div>\n</div>\n\n<ng-template #tree>\n<ul class='tree'>\n    <li *ngFor='let resource of resources; trackBy:trackByFn' id='resource.path'>\n        <div *ngIf='resource.editing; else notEditing' class='tree__item editing'>\n            <span>\n                <i class=\"{{resource.icon}}\"></i>&nbsp;\n                <input appAutofocus type='text' placeholder='Press Enter to create ESC to cancel...' \n                    [(ngModel)]='resource.name' (keydown)='didEditingChanged(resource, $event)' (blur)='didEditingChanged(resource, $event)'/>\n            </span>\n        </div>    \n        <ng-template #notEditing>\n            <div id='{{resource.path}}' [ngClass]='{tree__item: true, selected: isSelection(resource)}' \n                 appDraggable appDroppable [dragCondition]='draggable(resource)' [dropCondition]='droppable(resource)'\n                 (handleDrop)='didDropData($event)' (click)='didTapOnResource(resource, $event)'>\n                <span class='tree__item-label'>\n                    <i class=\"{{icon(resource)}}\"></i>&nbsp;\n                    <span>{{resource.name}}</span>\n                </span>\n                <span class='tree__item-option-group'>\n                    <ng-container *ngFor='let option of options'>\n                        <span class='tree__item-option' *ngIf='option.enabled(resource)' matTooltip='{{option.label}}' (click)='option.action(resource, $event)'>\n                            <i class=\"{{option.icon}}\"></i>&nbsp;\n                        </span>\n                    </ng-container>\n                </span>\n                <div class='overlay'></div>\n            </div>\n        </ng-template>\n        <app-explorer *ngIf='resource.expanded' [resources]=\"resource.children\" [isRoot]='false'></app-explorer>\n    </li>\n</ul>        \n</ng-template>\n"

/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tree {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n  .tree li {\n    padding-left: 16px; }\n  .tree .tree__item {\n    position: relative;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer; }\n  .tree .tree__item .overlay {\n      display: none;\n      pointer-events: none;\n      position: absolute;\n      left: auto !important;\n      right: 0;\n      top: 0;\n      width: 100vw;\n      height: 100%; }\n  .tree .tree__item .tree__item-option-group {\n      visibility: hidden;\n      font-size: 14px;\n      margin-right: 4px; }\n  .tree .tree__item .tree__item-option-group .tree__item-option {\n        cursor: pointer; }\n  .tree .tree__item .tree__item-label {\n      display: inline-flex;\n      align-items: center;\n      min-width: 100px; }\n  .tree .tree__item:hover .overlay, .tree .tree__item.selected .overlay {\n      display: block;\n      background: rgba(66, 66, 66, 0.1); }\n  .tree .tree__item:hover .tree__item-option-group {\n      visibility: visible; }\n  .tree .tree__item.editing span {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      margin-right: 4px; }\n  .tree input {\n    width: 90%;\n    margin: 4px 8px;\n    padding: 0.1rem 0.3rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    border-radius: 0.15rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .tree input:focus {\n      color: #495057;\n      background-color: #fff;\n      border-color: #80bdff;\n      outline: 0;\n      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n  .dnd-drag {\n  opacity: 0.5; }\n  .dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULFdBQVU7RUFDVixzQkFBcUIsRUFzRnhCO0VBekZEO0lBTVEsbUJBQWtCLEVBQ3JCO0VBUEw7SUFVUSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLGdCQUFlLEVBbURsQjtFQWxFTDtNQWtCWSxjQUFhO01BQ2IscUJBQW9CO01BQ3BCLG1CQUFrQjtNQUNsQixzQkFBcUI7TUFDckIsU0FBUTtNQUNSLE9BQU07TUFDTixhQUFZO01BQ1osYUFBWSxFQUNmO0VBMUJUO01BNkJZLG1CQUFrQjtNQUNsQixnQkFBZTtNQUNmLGtCQUFpQixFQUlwQjtFQW5DVDtRQWlDZ0IsZ0JBQWUsRUFDbEI7RUFsQ2I7TUFzQ1kscUJBQW9CO01BQ3BCLG9CQUFtQjtNQUNuQixpQkFBZ0IsRUFDbkI7RUF6Q1Q7TUE2Q2dCLGVBQWM7TUFDZCxrQ0FBOEIsRUFDakM7RUEvQ2I7TUFvRGdCLG9CQUFtQixFQUN0QjtFQXJEYjtNQTJEZ0IsY0FBYTtNQUNiLG9CQUFtQjtNQUNuQixZQUFXO01BQ1gsa0JBQWlCLEVBQ3BCO0VBL0RiO0lBcUVRLFdBQVU7SUFDVixnQkFBZTtJQUNmLHVCQUFzQjtJQUN0QixnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2QsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1QiwwQkFBeUI7SUFDekIsdUJBQXNCO0lBQ3RCLHlFQUF3RSxFQVEzRTtFQXZGTDtNQWlGWSxlQUFjO01BQ2QsdUJBQXNCO01BQ3RCLHNCQUFxQjtNQUNyQixXQUFVO01BQ1YsaURBQWdELEVBQ25EO0VBS1Q7RUFDSSxhQUFZLEVBQ2Y7RUFFRDtFQUNJLHVDQUFzQztFQUN0QyxrQ0FBOEIsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJlZSB7IFxuICAgIG1hcmdpbjogMDsgXG4gICAgcGFkZGluZzogMDsgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcbiAgICBcbiAgICBsaSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDsgXG4gICAgfVxuXG4gICAgLnRyZWVfX2l0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICAgICAgICAub3ZlcmxheSB7IFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dzsgXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLnRyZWVfX2l0ZW0tb3B0aW9uLWdyb3VwIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICAudHJlZV9faXRlbS1vcHRpb24ge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAudHJlZV9faXRlbS1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgICY6aG92ZXIsICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAudHJlZV9faXRlbS1vcHRpb24tZ3JvdXAge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5lZGl0aW5nIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3BhbiAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiA0cHggOHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG4uZG5kLWRyYWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRuZC1vdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/editor/explorer/explorer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/explorer/explorer.component.ts ***!
  \*******************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/logging.service */ "./src/app/shared/services/logging.service.ts");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor.utils */ "./src/app/editor/editor.utils.ts");






var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(service, notification, logging) {
        this.service = service;
        this.notification = notification;
        this.logging = logging;
        /** the dynamic options of the resources */
        this.options = [];
        var self = this;
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canBeTested"], action: function (r, e) { return self.optionTest(r, e); } },
            { icon: 'fas fa-play', label: 'Load', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canBeLoaded"], action: function (r, e) { return self.optionLoad(r, e); } },
            { icon: 'fas fa-sync', label: 'Reload', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canBeReloaded"], action: function (r, e) { return self.optionReload(r, e); } },
            { icon: 'far fa-file', label: 'New File', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canAddFile"], action: function (r, e) { return self.optionAddFile(r, e); } },
            { icon: 'far fa-folder', label: 'New Folder', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canAddFile"], action: function (r, e) { return self.optionFolder(r, e); } },
            { icon: 'far fa-edit', label: 'Rename', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canBeRenamed"], action: function (r, e) { return self.optionRename(r, e); } },
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["canBeDeleted"], action: function (r, e) { return self.optionDelete(r, e); } },
            { icon: 'fas fa-lock', label: 'Read Only', enabled: _editor_utils__WEBPACK_IMPORTED_MODULE_5__["readonly"], action: function () { } },
        ];
    }
    /** Handles refresh button click by retrieving resources from the server. */
    ExplorerComponent.prototype.didTapRefresh = function () {
        var _this = this;
        this.notification.confirmAsync({ title: 'You will lose any unsaved changes after this. Are you sure ?' }).then(function (confirmed) {
            if (confirmed) {
                _this.service.refresh().catch(function (error) {
                    _this.logging.error(error);
                });
            }
        });
    };
    /**
     * Gets a value indicating whether the resource is draggrable
     * @param resource the resource object.
     * 	@returns true only if the resource is not a root folder.
     */
    ExplorerComponent.prototype.draggable = function (resource) {
        return !_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isRoot"](resource) && resource.write;
    };
    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    ExplorerComponent.prototype.droppable = function (resource) {
        return _editor_utils__WEBPACK_IMPORTED_MODULE_5__["isFolder"](resource) && resource.write;
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
        var srcName = _editor_utils__WEBPACK_IMPORTED_MODULE_5__["basename"](srcPath);
        var src = this.service.find(srcPath);
        var dst = this.service.find(dstPath);
        if (src && src.parent === data.dst)
            return;
        var options = {
            title: "Are you sure you want to move '" + srcName + "'?",
        };
        this.notification.confirmAsync(options).then(function (confirmed) {
            if (confirmed) {
                _this.service.move(src || data.file, dst).catch(function (error) {
                    _this.logging.error(error);
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
        if (event.type == 'blur' && this.skipNextBlurEvent) {
            this.skipNextBlurEvent = false;
            return;
        }
        if (event.keyCode === 27) { // escape key
            this.skipNextBlurEvent = true;
            if (resource.editing) {
                this.service.cancelOrRemove(resource);
            }
            else {
                this.optionDelete(resource, event);
            }
        }
        else if (event.type == 'blur' || event.keyCode === 13) { // focus losed or enter key
            this.skipNextBlurEvent = true;
            this.service.createOrRename(resource).then(function () {
                _this.didTapOnResource(resource, event);
            }).catch(function (error) {
                _this.logging.error(error);
            });
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
        this.service.emitSelectEvent(resource);
    };
    /**
     * Gets the font awesome class representing the resource
     *
     * @returns
     * - fas fa-folder | fas fa-folder-open If the resource is folder
     * - resource.icon otherwise.
     */
    ExplorerComponent.prototype.icon = function (resource) {
        if (_editor_utils__WEBPACK_IMPORTED_MODULE_5__["isFolder"](resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    };
    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    ExplorerComponent.prototype.isSelection = function (resource) {
        return this.service.isSelection(resource);
    };
    /**
     * Gets a value indicating whether a task is running in the editor.
     */
    ExplorerComponent.prototype.runningTask = function () {
        return this.service.runningTask;
    };
    /** Used in the html template with *ngFor to keep track of the resource */
    ExplorerComponent.prototype.trackByFn = function (_index, item) {
        return item.path;
    };
    ExplorerComponent.prototype.optionAddFile = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.service.addFile(resource);
    };
    ExplorerComponent.prototype.optionFolder = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        this.service.addFolder(resource);
    };
    ExplorerComponent.prototype.optionDelete = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.notification.confirmAsync({
            title: "Are you sure you want to delete '" + resource.name + "'?",
        }).then(function (confirmed) {
            if (confirmed) {
                _this.service.delete(resource).catch(function (error) {
                    _this.logging.error(error);
                });
            }
        });
    };
    ExplorerComponent.prototype.optionLoad = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.service.loadPLTP(resource).then(function (response) {
            _this.logging.info(response);
        }).catch(function (error) {
            _this.logging.error(error);
        });
    };
    ExplorerComponent.prototype.optionReload = function (resource, event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        var options = {
            title: 'Reload Activity',
            message: 'ID of the activity which should be reloaded with this PLTP. It should be the ID inside the URL used on your LTI consumer (Moodle, Blackboard, ...), and not the URL in your address bar after clicking on said URL.<br><br><strong>Caution: The order in which PL are included should stay the same, as well as the total number of PL. May not work if the PLTP used to reload activity is too different than the original one',
            fields: [
                { type: 'number', placeholder: 'Activity ID', required: true, value: 0 }
            ]
        };
        this.notification.promptAsync(options).then(function (data) {
            if (data.fields) {
                _this.service.reloadPLTP(resource, data.fields[0].value).then((function (response) {
                    _this.logging.info(response);
                })).catch(function (error) {
                    _this.logging.error(error);
                });
            }
        });
    };
    ExplorerComponent.prototype.optionRename = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        resource.editing = true;
        resource.nameBeforeEdition = resource.name;
        resource.parentRef = this.service.find(resource.parent);
    };
    ExplorerComponent.prototype.optionTest = function (resource, event) {
        event.preventDefault();
        event.stopPropagation();
        window.open('/filebrowser/option?name=test_pl&path=' + resource.path, "_blank");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExplorerComponent.prototype, "resources", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ExplorerComponent.prototype, "isRoot", void 0);
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/editor/explorer/explorer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./explorer.component.scss */ "./src/app/editor/explorer/explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/editor/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"inRepo()\">\n    <i class='repo-icon {{repoHost()}} fa-1x'></i> \n    <a class='repo-url' href=\"{{repoUrl()}} \">{{repoUrl()}}</a>\n    <i class='repo-branch'>{{repoBranch()}}</i>\n</ng-container>\n<div class=\"spacer\"></div>\n<ng-container *ngIf='runningTask()'>\n    <mat-progress-spinner mode='indeterminate' color='warn' strokeWidth='2' diameter='24'></mat-progress-spinner> \n    <span class='task-name'>{{taskName()}} task in progress...</span>\n</ng-container>"

/***/ }),

/***/ "./src/app/editor/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 32px;\n  background-color: #343A40;\n  color: white;\n  font-size: 12px;\n  padding: 0 8px; }\n\n.repo-icon {\n  margin: 0 8px; }\n\n.repo-url {\n  margin-right: 8px; }\n\n.task-name {\n  margin: 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osMEJBQXdCO0VBQ3hCLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNDNBNDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLnJlcG8taWNvbiB7XG4gICAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnJlcG8tdXJsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnRhc2stbmFtZSB7XG4gICAgbWFyZ2luOiAwIDRweDtcbn0iXX0= */"

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
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.utils */ "./src/app/editor/editor.utils.ts");




var FooterComponent = /** @class */ (function () {
    function FooterComponent(editor) {
        this.editor = editor;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.runningTask = function () {
        return this.editor.runningTask;
    };
    FooterComponent.prototype.taskName = function () {
        return this.editor.taskName;
    };
    FooterComponent.prototype.inRepo = function () {
        return _editor_utils__WEBPACK_IMPORTED_MODULE_3__["isRepo"](this.editor.selection);
    };
    FooterComponent.prototype.repoHost = function () {
        return this.editor.selection.repo.host;
    };
    FooterComponent.prototype.repoUrl = function () {
        return this.editor.selection.repo.url;
    };
    FooterComponent.prototype.repoBranch = function () {
        return this.editor.selection.repo.branch;
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/editor/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/editor/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/editor/git/git-service.ts":
/*!*******************************************!*\
  !*** ./src/app/editor/git/git-service.ts ***!
  \*******************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _editor_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.utils */ "./src/app/editor/editor.utils.ts");
/* harmony import */ var src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/logging.service */ "./src/app/shared/services/logging.service.ts");





var GitService = /** @class */ (function () {
    function GitService(http, logging) {
        this.http = http;
        this.logging = logging;
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
                                name: Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["basename"])(key),
                                url: key,
                                path: data.path,
                                branch: data.branch,
                                count: data.changes.length,
                                changes: data.changes
                            });
                            return false;
                        });
                        this.count = this.repos.reduce(function (p, c, _i, _a) { return p + c.count; }, 0);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.logging.error(error_1);
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
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_show').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _b.sent();
                        this.logging.error(error_2);
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
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_status').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        this.logging.error(error_3);
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
                        _b.trys.push([1, 3, , 4]);
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_add').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _b.sent();
                        this.logging.error(error_4);
                        return [3 /*break*/, 4];
                    case 4:
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
                        _b.trys.push([1, 3, , 4]);
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('name', 'git_checkout').set('path', item.path);
                        return [4 /*yield*/, this.http.get('/filebrowser/option', { params: params, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _b.sent();
                        this.logging.error(error_5);
                        return [3 /*break*/, 4];
                    case 4:
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
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(commit, 'commit');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_commit', 'path': item.path, commit: commit };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _b.sent();
                        this.logging.error(error_6);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.push = function (item, username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
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
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_push', 'path': item.path, username: username, password: password };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        this.refresh();
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _b.sent();
                        this.logging.error(error_7);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.pull = function (item, username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
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
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(item, 'item');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_pull', 'path': item.path, username: username, password: password };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_8 = _b.sent();
                        this.logging.error(error_8);
                        return [3 /*break*/, 4];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService.prototype.clone = function (parent, url, username, password, destination) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (destination === void 0) { destination = ''; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, headers, data, response, error_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        success = false;
                        this.runningTask = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(parent, 'parent');
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["requireNonNull"])(url, 'url');
                        Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["assert"])(Object(_editor_utils__WEBPACK_IMPORTED_MODULE_3__["isHome"])(parent), 'clone operation is applicable to home only');
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
                        data = { 'name': 'git_clone', 'path': parent.path, url: url, username: username, password: password, destination: destination };
                        return [4 /*yield*/, this.http.post('/filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise()];
                    case 2:
                        response = _b.sent();
                        this.logging.info(response);
                        success = true;
                        return [3 /*break*/, 4];
                    case 3:
                        error_9 = _b.sent();
                        this.logging.error(error_9);
                        return [2 /*return*/, false];
                    case 4:
                        this.runningTask = false;
                        return [2 /*return*/, success];
                }
            });
        });
    };
    GitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_4__["LoggingService"]])
    ], GitService);
    return GitService;
}());



/***/ }),

/***/ "./src/app/editor/git/git.component.html":
/*!***********************************************!*\
  !*** ./src/app/editor/git/git.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"query\" *ngIf='runningTask()'></mat-progress-bar>\n<mat-accordion class='accordion' multi='true'>\n    <mat-expansion-panel class='repositories mat-elevation-z0' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          REPOSITORIES\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-container *ngFor=\"let repo of repositories(); trackBy trackRepo\">\n          <div class='line pointer' (click)='changeSelection(repo)' [matTooltip]='repo.url'> \n              <span class='line-title' [matBadgeHidden]='repo.count === 0' [matBadge]=\"repo.count\" matBadgePosition=\"after\">{{repo.name}}</span>\n              <div class='spacer'></div>\n              <span class='line-subtitle'>{{repo.branch}}</span>\n              <span [matMenuTriggerFor]=\"options\">\n                  <i class='fas fa-ellipsis-h'></i>\n              </span>\n          </div>\n          <mat-menu #options=\"matMenu\">\n              <button mat-menu-item (click)='add(repo)'>Git add</button>\n              <button mat-menu-item (click)='push(repo)'>Git push</button>\n              <button mat-menu-item (click)='pull(repo)'>Git pull</button>\n              <button mat-menu-item (click)='status(repo)'>Git status</button>\n              <button mat-menu-item (click)='checkout(repo)'>Git checkout</button>\n          </mat-menu>\n      </ng-container>\n      <br/>\n      <button class='clone' mat-stroked-button matTooltip='Clone' (click)='clone()'>+</button>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel class='changes mat-elevation-z0' *ngIf='selection' expanded='true'>\n        <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n          <mat-panel-title>\n            CHANGES IN {{selection.name | uppercase}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-form-field class='commit' *ngIf='selection.count > 0; else uptodate'>\n            <input matInput placeholder=\"Press enter to commit\" (keydown)='commit($event)' [(ngModel)]='commitMessage'>\n        </mat-form-field>\n        <ng-template #uptodate> <span>nothing to commit, working tree clean</span> </ng-template>\n        <ng-container *ngFor=\"let change of selection.changes; trackBy trackChange\">\n            <div class='line' [matTooltip]=\"change.path\"> \n                <span class='line-title' [matBadge]=\"change.type\" matBadgePosition=\"after\">{{change.name}}</span>\n                <div class='spacer'></div>\n                <span class='pointer' [matMenuTriggerFor]=\"menu\">\n                  <i class='fas fa-ellipsis-h'></i>\n                </span>\n            </div>\n            <mat-menu #menu=\"matMenu\">\n              <ng-container *ngFor='let option of options'>\n                  <button *ngIf='option.enabled(change)' (click)='option.action(change)' mat-menu-item>\n                    {{option.label}}\n                  </button>\n              </ng-container>\n            </mat-menu>\n        </ng-container>\n    </mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/editor/git/git.component.scss":
/*!***********************************************!*\
  !*** ./src/app/editor/git/git.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion {\n  overflow: hidden; }\n\n.line {\n  display: flex;\n  height: 32px;\n  align-items: center;\n  overflow: visible; }\n\n.line-title {\n  font-size: 1em;\n  margin-right: 8px; }\n\n.line-title .mat-badge-content {\n    right: -24px;\n    top: 0; }\n\n.line-subtitle {\n  margin-right: 8px; }\n\n.commit, .clone {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL2dpdC9naXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBS3BCOztBQVBEO0lBSVEsYUFBWTtJQUNaLE9BQU0sRUFDVDs7QUFHTDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9naXQvZ2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5saW5lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLTI0cHg7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG59XG5cbi5saW5lLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNvbW1pdCwgLmNsb25lIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/editor/git/git.component.ts":
/*!*********************************************!*\
  !*** ./src/app/editor/git/git.component.ts ***!
  \*********************************************/
/*! exports provided: GitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitComponent", function() { return GitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _git_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./git-service */ "./src/app/editor/git/git-service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var GitComponent = /** @class */ (function () {
    function GitComponent(editor, git, notification) {
        this.editor = editor;
        this.git = git;
        this.notification = notification;
        /** changes options */
        this.options = [];
        /** value of commit input form */
        this.commitMessage = '';
    }
    GitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options.push({ label: 'Open file', enabled: function (item) { return _this.canOpen(item); }, action: function (item) { return _this.open(item); } });
        this.options.push({ label: 'Git add', enabled: function (item) { return _this.canAdd(item); }, action: function (item) { return _this.add(item); } });
        this.options.push({ label: 'Git checkout', enabled: function (item) { return _this.canCheckout(item); }, action: function (item) { return _this.checkout(item); } });
    };
    GitComponent.prototype.ngOnDestroy = function () {
    };
    GitComponent.prototype.refreshSelection = function () {
        var _this = this;
        if (this.selection) {
            this.selection = this.repositories().find(function (e) { return e.url === _this.selection.url; });
        }
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
        return item.type !== 'A';
    };
    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    GitComponent.prototype.canCheckout = function (item) {
        return item.type !== '??';
    };
    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    GitComponent.prototype.canOpen = function (item) {
        return !item.isdir;
    };
    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    GitComponent.prototype.open = function (item) {
        this.editor.emitSelectEvent(this.editor.find(item.path));
    };
    /**
     * gets a value indicating whether a git add command is possible in the given item
     *	@param _item the repository item.
     */
    GitComponent.prototype.add = function (_item) {
        return true;
    };
    /**
     * executes git push command on the given repository item
     *	@param item the repository item.
     */
    GitComponent.prototype.push = function (item) {
        this.git.push(item);
    };
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    GitComponent.prototype.pull = function (item) {
        var _this = this;
        this.notification.confirmAsync({
            title: 'Please confirm your action',
            message: 'You will lose the unsaved changes after this action !'
        }).then(function (confirmed) {
            if (confirmed) {
                _this.git.pull(item).then(function (success) {
                    if (success) {
                        _this.editor.refresh().then(function (succees) {
                            if (success) {
                                _this.refreshSelection();
                            }
                        });
                    }
                });
            }
        });
    };
    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    GitComponent.prototype.status = function (repo) {
        this.git.status(repo);
    };
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    GitComponent.prototype.checkout = function (repo) {
        var _this = this;
        this.notification.confirmAsync({ title: 'This action will reset all your local changes up to your last commit !' }).then(function (confirmed) {
            if (confirmed) {
                _this.git.checkout(repo).then(function (success) {
                    if (success) {
                        var resource_1 = _this.editor.find(repo.path);
                        if (resource_1) {
                            resource_1.dirty = true;
                            _this.editor.open(resource_1).then(function (opened) {
                                if (opened) {
                                    _this.editor.emitSelectEvent(resource_1);
                                }
                            });
                        }
                        _this.selection.changes = _this.selection.changes.filter(function (e) { return e.path !== resource_1.path; });
                    }
                    _this.refreshSelection();
                });
            }
        });
    };
    /**
     * executes git commit command on the selected repository with the
     * value of commit message input form if enter key is pressed.
     *	@param event the keyboard event of the input.
     */
    GitComponent.prototype.commit = function (event) {
        var _this = this;
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
     * executes git clone command.
     * - if the command succeed, the resources of the editor will be refreshed.
     */
    GitComponent.prototype.clone = function () {
        var _this = this;
        var fields = [
            { type: 'url', placeholder: 'Url', required: true, value: '' },
            { type: 'text', placeholder: 'Username', required: false, value: '' },
            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
        ];
        var options = {
            title: 'Clone repository',
            fields: fields
        };
        this.notification.warning('Please close the opened editors before submitting the form');
        this.notification.promptAsync(options).then((function (response) {
            if (response) {
                _this.git.clone(_this.editor.resources[0], response.fields[0].value, response.fields[1].value, response.fields[2].value)
                    .then((function (success) {
                    if (success) {
                        _this.editor.refresh();
                        _this.refreshSelection();
                    }
                }));
            }
        }));
    };
    /** gets the repositories */
    GitComponent.prototype.repositories = function () {
        return this.git.repos;
    };
    /** gets a value indicating whether a git command is running */
    GitComponent.prototype.runningTask = function () {
        return this.git.runningTask;
    };
    GitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-git',
            template: __webpack_require__(/*! ./git.component.html */ "./src/app/editor/git/git.component.html"),
            styles: [__webpack_require__(/*! ./git.component.scss */ "./src/app/editor/git/git.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"], _git_service__WEBPACK_IMPORTED_MODULE_3__["GitService"], src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], GitComponent);
    return GitComponent;
}());



/***/ }),

/***/ "./src/app/editor/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\n    <div class='tab-bar border-bottom'>\n        <span>SEARCH</span>       \n        <div class=\"spacer\"></div>\n        <div class='tab-item' (click)='changeMode(\"F\")' matTooltip='Search File'>\n            <i class=\"fas fa-file\"></i>\n        </div>\n        <div class='tab-item' (click)='changeMode(\"T\")' matTooltip='Search Text'>\n            <i class=\"fas fa-font\"></i>\n        </div>\n    </div>\n    <div class=\"sidebar-panel__content\">\n        <mat-form-field class='search'>\n            <input appAutoFocus matInput placeholder=\"Press enter to search\" (keydown)='search($event)' [(ngModel)]='searchValue'>\n        </mat-form-field>\n        <app-explorer [resources]='result'></app-explorer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/editor/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/editor/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-panel__content {\n  padding: 0 8px; }\n\n.search {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1wYW5lbF9fY29udGVudCB7XG4gICAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5zZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/editor/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");



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
        if (event.keyCode === 13) {
            this.searchValue = this.searchValue.trim().toLocaleLowerCase();
            if (this.searchValue) {
                this.result = this.editor.findAll((function (e) {
                    return e.path.toLocaleLowerCase().includes(_this.searchValue);
                }));
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SearchComponent.prototype, "resources", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/editor/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/editor/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/editor/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/editor/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class='sidebar-icon' src='static/filebrowser/app/assets/icons/explorer.svg' matTooltip=\"Explorer\" (click)='didTapButton(0)'/>\n<img class='sidebar-icon' src='static/filebrowser/app/assets/icons/search.svg' matTooltip=\"Search\" (click)='didTapButton(1)'/>\n<div [matBadge]=\"gitBadge()\" matTooltip=\"Git\">\n    <img class='sidebar-icon' src='static/filebrowser/app/assets/icons/git.svg' (click)='didTapButton(2)'/>\n</div>\n<div [matBadge]=\"consoleBadge()\" matTooltip=\"Console\">\n    <div class='sidebar-icon'(click)='didTapButton(3)'>\n        <i class='fas fa-info'></i>\n    </div>\n</div>\n<div class='spacer'></div>\n<img class='sidebar-icon' src='static/filebrowser/app/assets/icons/settings.svg'  matTooltip=\"Settings\" (click)='didTapButton(4)'/>"

/***/ }),

/***/ "./src/app/editor/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/editor/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  width: 50px;\n  background: #343A40;\n  align-items: center;\n  padding: 8px 0; }\n  :host .sidebar-icon {\n    width: 36px;\n    height: 36px;\n    margin-bottom: 24px;\n    cursor: pointer;\n    overflow: visible; }\n  :host .fas {\n    width: 36px;\n    height: 36px;\n    color: white;\n    font-size: 36px;\n    text-align: center; }\n  :host .mat-badge-content {\n    z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvcHJlbWllcmxhbmdhZ2UvY2xpZW50L3NyYy9hcHAvZWRpdG9yL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsZUFBYyxFQXFCakI7RUEzQkQ7SUFTUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixnQkFBZTtJQUNmLGtCQUFpQixFQUNwQjtFQWRMO0lBaUJRLFlBQVc7SUFDWCxhQUFZO0lBQ1osYUFBWTtJQUNaLGdCQUFlO0lBQ2YsbUJBQWtCLEVBQ3JCO0VBdEJMO0lBeUJRLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzNDNBNDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBcbiAgICAuc2lkZWJhci1pY29uIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAuZmFzIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubWF0LWJhZGdlLWNvbnRlbnQgIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/editor/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/editor/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../git/git-service */ "./src/app/editor/git/git-service.ts");
/* harmony import */ var src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/logging.service */ "./src/app/shared/services/logging.service.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(git, logging) {
        this.git = git;
        this.logging = logging;
        this.size = 25;
        this.index = 0;
    }
    SidebarComponent.prototype.didTapButton = function (index) {
        switch (index) {
            case 3:
                this.logging.openEvent.next();
                break;
            default:
                if (index === this.index) {
                    this.size = this.size == 25 ? 0 : 25;
                }
                this.index = index;
                break;
        }
    };
    SidebarComponent.prototype.gitBadge = function () {
        return this.git.count;
    };
    SidebarComponent.prototype.consoleBadge = function () {
        return this.logging.size;
        ;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/editor/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/editor/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_git_git_service__WEBPACK_IMPORTED_MODULE_2__["GitService"], src_app_shared_services_logging_service__WEBPACK_IMPORTED_MODULE_3__["LoggingService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/models/code-editor.ts":
/*!***************************************!*\
  !*** ./src/app/models/code-editor.ts ***!
  \***************************************/
/*! exports provided: CodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditor", function() { return CodeEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor_editor_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor/editor.utils */ "./src/app/editor/editor.utils.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor */ "./src/app/models/editor.ts");



var CodeEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CodeEditor, _super);
    function CodeEditor(component, resource) {
        var _this = _super.call(this, component, resource) || this;
        _this.type = 'code';
        _this.loadOptions();
        return _this;
    }
    CodeEditor.prototype.loadOptions = function () {
        var _this = this;
        this.options.push({
            icon: 'fas fa-play', tooltip: 'Preview', enabled: _editor_editor_utils__WEBPACK_IMPORTED_MODULE_1__["canBePreviewed"], action: function (item) {
                _this.component.didTapPreviewResource(item);
            }
        });
        this.options.push({
            icon: 'fas fa-eye', tooltip: 'Open Changes', enabled: function (item) { return _this.canDiff(item); }, action: function (item) {
                _this.openDiffEditor();
            }
        });
        this.options.push({
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', enabled: function (item) { return _this.diffMode; }, action: function (item) {
                _this.closeDiffEditor();
            }
        });
        this.options.push({
            icon: 'fas fa-columns', tooltip: 'Split Editor Right', enabled: function () { return true; }, action: function () {
                _this.component.editors.push(new CodeEditor(_this.component, _this.selection));
            }
        });
    };
    CodeEditor.prototype.closeDiffEditor = function () {
        this.diffMode = false;
        this.editor.setValue(this.selection.content);
    };
    CodeEditor.prototype.openDiffEditor = function () {
        this.diffMode = true;
        this.open(this.selection);
    };
    CodeEditor.prototype.open = function (resource) {
        var _this = this;
        var monaco = window.monaco;
        this.selection.state.state = this.editor.saveViewState();
        if (resource.state.model) {
            this.editor.restoreViewState(resource.state.state);
        }
        else {
            resource.state.model = monaco.editor.createModel(resource.content, Object(_editor_editor_utils__WEBPACK_IMPORTED_MODULE_1__["language"])(resource), resource.path);
        }
        this.editor.setModel(resource.state.model);
        this.editor.updateOptions({ readOnly: !resource.write });
        if (this.diffMode) {
            this.component.lastRevision(resource).then(function (value) {
                if (value) {
                    var originalModel = monaco.editor.createModel(value, Object(_editor_editor_utils__WEBPACK_IMPORTED_MODULE_1__["language"])(resource));
                    _this.diffEditor.setModel({
                        original: originalModel,
                        modified: _this.editor.model
                    });
                    _this.diffEditor.modifiedEditor.updateOptions({ readOnly: !resource.write });
                    _this.diffEditor.modifiedEditor.focus();
                }
            });
        }
        else {
            this.editor.focus();
        }
        _super.prototype.open.call(this, resource);
    };
    CodeEditor.prototype.addCommands = function (editor) {
        var self = this;
        editor.onDidChangeModelContent(function () {
            self.didChange();
        });
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_S, function () {
            self.didSave();
        });
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, function () {
            self.didSaveAll();
        });
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_W, function () {
            self.didClose();
        });
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_W, function () {
            self.didCloseAll();
        });
    };
    CodeEditor.prototype.onInit = function (editor) {
        this.editor = editor;
        this.addCommands(this.editor);
        this.open(this.selection);
    };
    CodeEditor.prototype.onInitDiff = function (editor) {
        this.diffEditor = editor;
        this.addCommands(this.diffEditor.modifiedEditor);
    };
    CodeEditor.prototype.didChange = function () {
        if (this.diffMode) {
            this.selection.content = this.diffEditor.modifiedEditor.getValue();
        }
        else {
            this.selection.content = this.editor.getValue();
        }
        this.selection.changed = true;
    };
    /** save the focued resource */
    CodeEditor.prototype.didSave = function () {
        this.selection.changed = false;
        this.component.save(this.selection);
    };
    /** saves the resources */
    CodeEditor.prototype.didSaveAll = function () {
        for (var _i = 0, _a = this.resources; _i < _a.length; _i++) {
            var e = _a[_i];
            this.component.save(e);
        }
    };
    /** close the focused resource after asking a confirmation */
    CodeEditor.prototype.didClose = function () {
        this.component.confirmThenClose(this.selection, this);
    };
    /** closes all resources and ask confirmation if any of them is changed */
    CodeEditor.prototype.didCloseAll = function () {
        var _this = this;
        if (this.resources.some(function (e) { return e.changed; })) {
            var options = {
                title: "Do you want to close the files ?",
                message: "Your changes will be lost if you don't save them.",
            };
            this.component.confirm(options).then(function (confirmed) {
                if (confirmed) {
                    _this.closeAll();
                }
            });
        }
        else {
            this.closeAll();
        }
    };
    /** closes saved resources without asking confirmation */
    CodeEditor.prototype.didCloseSaved = function () {
        while (this.resources.some(function (e) { return !e.changed; })) {
            for (var i = 0; i < this.resources.length; i++) {
                if (!this.resources[i].changed) {
                    this.close(this.resources[i], this.component.editors);
                }
            }
        }
    };
    CodeEditor.prototype.canOpen = function (resource) {
        return !resource.image;
    };
    CodeEditor.prototype.canDiff = function (resource) {
        return Object(_editor_editor_utils__WEBPACK_IMPORTED_MODULE_1__["isRepo"])(resource) && !this.diffMode;
    };
    return CodeEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_2__["Editor"]));



/***/ }),

/***/ "./src/app/models/editor.ts":
/*!**********************************!*\
  !*** ./src/app/models/editor.ts ***!
  \**********************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource */ "./src/app/models/resource.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");


var Editor = /** @class */ (function () {
    function Editor(component, resource) {
        this.resources = [];
        this.options = [];
        this.selection = resource;
        this.component = component;
    }
    Editor.prototype.close = function (resource, editors) {
        var _this = this;
        var index = this.resources.findIndex(function (e) { return e.path === resource.path; });
        if (index == -1) {
            throw new Error('undefined resource in the editor');
        }
        this.selection = undefined;
        this.resources.splice(index, 1);
        index = Math.max(0, index - 1);
        if (index < this.resources.length) {
            this.selection = this.resources[index];
        }
        if (this.selection) {
            this.open(this.selection);
        }
        if (editors.findIndex(function (e) { return e.contains(resource); }) == -1) {
            Object(_resource__WEBPACK_IMPORTED_MODULE_0__["resourceInit"])(resource);
        }
        if (this.isEmpty()) {
            editors.splice(editors.findIndex(function (e) { return e === _this; }), 1);
        }
        this.component.detectChanges();
    };
    Editor.prototype.closeAll = function () {
        while (this.resources.length > 0) {
            this.close(this.resources[0], this.component.editors);
        }
    };
    Editor.prototype.contains = function (resource) {
        return this.resources.findIndex(function (item) { return item.path === resource.path; }) != -1;
    };
    Editor.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    Editor.prototype.isEmpty = function () {
        return this.resources.length === 0;
    };
    Editor.prototype.isSelected = function (resource) {
        return resource.path === this.selection.path;
    };
    Editor.prototype.open = function (resource) {
        if (!this.contains(resource)) {
            this.resources.push(resource);
        }
        this.selection = resource;
        this.component.detectChanges();
    };
    Editor.prototype.title = function (resource) {
        return resource.name;
    };
    Editor.prototype.track = function (_index, item) {
        return item.path;
    };
    Editor.prototype.length = function () {
        return this.resources.length;
    };
    return Editor;
}());



/***/ }),

/***/ "./src/app/models/image-editor.ts":
/*!****************************************!*\
  !*** ./src/app/models/image-editor.ts ***!
  \****************************************/
/*! exports provided: ImageEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditor", function() { return ImageEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/app/models/editor.ts");


var ImageEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageEditor, _super);
    function ImageEditor(component, resource) {
        var _this = _super.call(this, component, resource) || this;
        _this.type = 'image';
        _this.zoom = 0.5;
        _this.open(resource);
        return _this;
    }
    ImageEditor.prototype.zoomIn = function () {
        this.zoom = Math.min(this.zoom + .05, 1);
    };
    ImageEditor.prototype.zoomOut = function () {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    };
    ImageEditor.prototype.canOpen = function (resource) {
        return resource.image !== undefined;
    };
    return ImageEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]));



/***/ }),

/***/ "./src/app/models/preview-editor.ts":
/*!******************************************!*\
  !*** ./src/app/models/preview-editor.ts ***!
  \******************************************/
/*! exports provided: PreviewEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewEditor", function() { return PreviewEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/app/models/editor.ts");


var PreviewEditor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PreviewEditor, _super);
    function PreviewEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'preview';
        return _this;
    }
    PreviewEditor.prototype.canOpen = function (resource) {
        return resource.state.preview !== undefined;
    };
    PreviewEditor.prototype.content = function () {
        return this.selection.state.preview;
    };
    PreviewEditor.prototype.title = function (resource) {
        return 'Preview ' + resource.name;
    };
    PreviewEditor.prototype.open = function (resource) {
        if (this.resources.length === 0)
            this.resources.push(resource);
        this.resources[0] = resource;
        this.selection = resource;
    };
    return PreviewEditor;
}(_editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]));



/***/ }),

/***/ "./src/app/models/resource.ts":
/*!************************************!*\
  !*** ./src/app/models/resource.ts ***!
  \************************************/
/*! exports provided: resourceInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceInit", function() { return resourceInit; });
function resourceInit(resource) {
    if (resource.state && resource.state.model)
        resource.state.model.dispose();
    resource.state = {
        model: undefined,
        state: undefined,
        preview: undefined,
    };
}


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

module.exports = "<h4 mat-dialog-title>{{data?.title}}</h4>\n<div mat-dialog-content>\n\t<p [innerHTML]='data?.message'></p>\n\t<form>\n\t\t<mat-form-field class='full-width' *ngFor='let field of data.fields'>\n\t\t\t<input matInput name='field.value' autocomplete=\"off\" [type]='field.type' [placeholder]=\"field?.placeholder\" [(ngModel)]='field.value' >\n\t\t</mat-form-field>\n\t</form>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"data\">{{data.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data.noTitle}}</button>\n</div>"

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
            selector: '[appAutofocus]'
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dragCondition'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DraggableDirective.prototype, "dragCondition", void 0);
    DraggableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDraggable]'
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
        this.handDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DroppableDirective.prototype.ngAfterContentInit = function () {
        if (!this.dropCondition)
            return;
        var self = this;
        var el = this.el.nativeElement;
        el.draggable = true;
        el.addEventListener('dragover', function (e) {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault)
                e.preventDefault();
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
            if (e.stopPropagation)
                e.stopPropagation();
            this.classList.remove('dnd-over');
            var destination = this.id;
            var source = e.dataTransfer.getData('Text');
            if (source || file) {
                self.handDrop.emit({ src: source, file: file, dst: destination });
            }
            return false;
        }, false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dropCondition'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DroppableDirective.prototype, "dropCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('handleDrop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DroppableDirective.prototype, "handDrop", void 0);
    DroppableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDroppable]'
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
                scriptCopy.innerHTML = script.innerHTML;
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
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/logging.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/logging.service.ts ***!
  \****************************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoggingService = /** @class */ (function () {
    function LoggingService() {
        this.addEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._size = 0;
    }
    LoggingService.prototype.message = function (message, type) {
        var msg = message;
        if (typeof message !== 'string') {
            msg = message.error;
            if (!msg) {
                if (message.stack) {
                    msg = message.stack.split('\n').join('<br/>');
                }
                else {
                    msg = JSON.stringify(message);
                }
            }
        }
        var item = { message: msg, type: type };
        this.addEvent.next(item);
        this._size++;
    };
    LoggingService.prototype.info = function (message) {
        this.message(message, 'info');
    };
    LoggingService.prototype.warning = function (message) {
        this.message(message, 'warning');
    };
    LoggingService.prototype.error = function (message) {
        this.message(message, 'error');
    };
    LoggingService.prototype.clear = function () {
        this._size = 0;
    };
    Object.defineProperty(LoggingService.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    LoggingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggingService);
    return LoggingService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");






var NotificationService = /** @class */ (function () {
    function NotificationService(toastr, dialog) {
        this.toastr = toastr;
        this.dialog = dialog;
    }
    NotificationService.prototype.success = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.success(message, title, {
            enableHtml: true,
            onActivateTick: true,
        });
    };
    NotificationService.prototype.warning = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.warning(message, title, {
            enableHtml: true,
            onActivateTick: true,
        });
    };
    NotificationService.prototype.error = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.error(message, title, {
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
        var ref = this.dialog.open(_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"], {
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
        var ref = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
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
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], NotificationService);
    return NotificationService;
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