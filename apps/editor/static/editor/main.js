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
/* harmony default export */ __webpack_exports__["default"] = ("<h1>ASK</h1>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/debugging.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/debugging.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='tab-bar'>\n    <span id=\"editor-action-focus-notifs\"  class='tab-item' [class.active]=\"index === 0\" [matBadge]=\"problems\" (click)='onFocus(0)'>PROBLEMS</span>\n    <span id=\"editor-action-focus-problems\" class='tab-item' [class.active]=\"index === 1\" [matBadge]=\"notifs\" (click)='onFocus(1)'>NOTIFICATIONS</span>\n    <div class='spacer'></div>\n\n    <div *ngIf=\"index === 1\" id=\"logging-action-clear\" class='tab-item' matTooltip='Clear' (click)='onClearNotifs()'>\n        <i class=\"fas fa-trash-alt\"></i>\n    </div>\n\n    <div id=\"debugging-action-hide\" class='tab-item' matTooltip='Hide' (click)='onClose($event)'>\n        <i class=\"fas fa-times\"></i>\n    </div>\n</div>\n<div class='debugging-content'>\n    <ng-container [ngSwitch]=\"index\">\n     <problems *ngSwitchCase=\"0\"></problems>\n     <logging *ngSwitchCase=\"1\"></logging>\n    </ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/logging/logging.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/logging/logging.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class='logging-content' #container>\n    <h4 class=\"logging-nothing\" *ngIf='empty'>Nothing to display</h4>\n    <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n        <li class='log log--{{item.type}}'>\n        <ng-container [ngSwitch]=\"item.type\">\n            <mat-icon *ngSwitchCase=\"'info'\" mat-list-icon class='log-icon'>info</mat-icon>\n            <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='log-icon'>warning</mat-icon>\n            <mat-icon *ngSwitchDefault mat-list-icon class='log-icon'>error</mat-icon>\n        </ng-container>\n        <p class='log-content' [innerHTML]='item.message | trustHtml'></p>\n        </li>\n        <mat-divider *ngIf='!last'></mat-divider>\n    </ng-container>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/problems/problems.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/problems/problems.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class='problems-content' #container>\n    <h4 class=\"problems-nothing\" *ngIf='empty'>No problems</h4>\n    <ng-container *ngFor=\"let item of items; let last = last; trackBy track\">\n        <li class='problem problem--{{item.type}}'>\n            <img class=\"problem-file-icon\" [src]=\"item.path|icon|async\" />\n            <span class=\"problem-path\" matTooltip=\"Click to open\" (click)=\"openOnEditor(item)\"> {{ item.path }}: {{ item.lineno }}</span>\n            <ng-container [ngSwitch]=\"item.type\">\n                <mat-icon *ngSwitchCase=\"'warning'\" mat-list-icon class='problem-icon'>warning</mat-icon>\n                <mat-icon *ngSwitchDefault mat-list-icon class='problem-icon'>error</mat-icon>\n            </ng-container>\n            <p class='problem-content' [innerHTML]='item.message | trustHtml'></p>\n        </li>\n        <mat-divider *ngIf='!last'></mat-divider>\n    </ng-container>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/editor.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/editor.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='editor-application mat-app-background'>\n  <mat-progress-bar color=\"warn\" mode=\"indeterminate\" *ngIf=\"taskInProgress\"></mat-progress-bar>\n  <div class='editor-split-panel'>\n    <navigation class='navigation' #navigation></navigation>\n    <as-split direction=\"horizontal\" gutterSize='2' useTransition='true'>\n        <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]=\"navigation.size\" [ngSwitch]=\"navigation.index\">\n            <explorer *ngSwitchCase=\"0\" showHeader='true' remote=\"true\"></explorer>\n            <search *ngSwitchCase=\"1\"></search>\n            <git *ngSwitchCase=\"2\"></git>\n        </as-split-area>\n        <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]=\"100 - navigation.size\">\n            <as-split class='split' direction='vertical' gutterSize='2' useTransition='true' (dragEnd)='debugging.dragEnd($event)'>\n                <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]='100 - debugging.size'>\n                    <workspace class='workspace' #workspace></workspace>\n                </as-split-area>\n                <as-split-area class='split-area' style='position: relative; overflow: hidden;' [size]='debugging.size'>\n                    <debugging class='debugging' #debugging></debugging>\n                </as-split-area>\n            </as-split>\n            <quick-open (closed)='showQuickOpen = false' *ngIf='showQuickOpen'></quick-open>\n        </as-split-area>\n    </as-split>\n  </div>\n  <status-bar></status-bar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/explorer/explorer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/explorer/explorer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='tab-bar' *ngIf=\"showHeader\">\n    <span>EXPLORER</span>\n    <div class=\"spacer\"></div>\n    <div class='tab-item' (click)='refresh()' matTooltip='Refresh'>\n        <i class=\"fas fa-sync\"></i>\n    </div>\n</div>\n<div class=\"navigation-content\">\n    <app-tree [nodes]=\"nodes\" [options]=\"treeOptions\">\n        <ng-container *treeNode=\"let node\">\n            <span class='node-label' dnd [dndData]=\"node.id\" [draggable]=\"draggable(node)\"\n                        [droppable]=\"droppable(node)\" (dropped)=\"onDropped($event)\">\n                <img [icon]=\"node\"/>\n                <span matTooltip=\"{{ node.path | path }}\">{{ node.name }}</span>\n            </span>\n            <span class='node-option-group'>\n                <ng-container *ngFor='let option of nodeOptions; let i = index'>\n                    <span *ngIf='!option.divider && !option.forContextMenu && option.enabled(node)'\n                        id=\"node-option-{{ option.id }}-{{ node.path }}\" class='node-option'\n                        matTooltip='{{ option.label }}' (click)='option.action(node, $event)'>\n                        <i [class]=\"option.icon\"></i>&nbsp;\n                    </span>\n                </ng-container>\n            </span>\n        </ng-container>\n    </app-tree>\n</div>\n<ng-template #contextmenu let-node>\n\t<section class=\"context-menu\">\n        <ng-container *ngFor=\"let option of nodeOptions\">\n            <ng-container *ngIf=\"!option.divider &&!option.forHover && option.enabled(node)\">\n                <div (click)=\"option.action(node, $event);\">\n                    <i [class]=\"option.icon\"></i>&nbsp;\n                    <span> {{ option.label }}</span>\n                </div>\n            </ng-container>\n            <mat-divider></mat-divider>\n        </ng-container>\n\t</section>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/git/git.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/git/git.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar mode=\"query\" *ngIf='runningTask()'></mat-progress-bar>\n<div class='navigation-content'>\n  <mat-accordion class='accordion' multi='true'>\n    <mat-expansion-panel class='repositories mat-elevation-z0' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          REPOSITORIES\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-container *ngFor=\"let repo of repositories(); trackBy trackRepo\">\n          <div class='line pointer' [ngClass]='{ selected: isSelection(repo) }' (click)='changeSelection(repo)' [matTooltip]='repo.url'>\n              <span class='line-title' [matBadgeHidden]='repo.count === 0' [matBadge]=\"repo.count\" matBadgePosition=\"after\">{{repo.name}}</span>\n              <div class='spacer'></div>\n              <span class='line-subtitle'>{{repo.branch}}</span>\n              <span [matMenuTriggerFor]=\"options\">\n                  <i class='fas fa-ellipsis-h'></i>\n              </span>\n          </div>\n          <mat-menu #options=\"matMenu\">\n              <button mat-menu-item (click)='add(repo)' matTooltip='Add to git index'>Git Add</button>\n              <button mat-menu-item (click)='push(repo)' matTooltip='Push local changes to remote'>Git Push</button>\n              <button mat-menu-item (click)='pull(repo)' matTooltip='Pull changes from remote'>Git Pull</button>\n              <button mat-menu-item (click)='status(repo)' matTooltip='Show changes'>Git Status</button>\n              <button mat-menu-item (click)='checkout(repo)' matTooltip='Reset the repository to the last commit'>Git Checkout</button>\n          </mat-menu>\n      </ng-container>\n      <br/>\n      <button class='clone' mat-stroked-button matTooltip='Clone' (click)='clone()'>+</button>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel class='changes mat-elevation-z0' *ngIf='selection' expanded='true'>\n      <mat-expansion-panel-header collapsedHeight='48px' expandedHeight='48px'>\n        <mat-panel-title>\n          CHANGES IN {{selection.name | uppercase}}\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <mat-form-field class='commit'>\n          <input matInput placeholder=\"Press enter to commit\" (keydown)='commit($event)' [(ngModel)]='commitMessage'>\n      </mat-form-field>\n        <span *ngIf='selection.count === 0'>nothing to commit, working tree clean</span>\n        <ng-container *ngFor=\"let change of selection.changes; trackBy trackChange\">\n            <div class='line' [ngClass]='{clickable: canOpen(change)}' [matTooltip]=\"change.path|path\">\n                <span class='line-title' [matBadge]=\"change.type\" matBadgePosition=\"after\" (click)='open(change)'>{{change.name}}</span>\n                <div class='spacer'></div>\n                <ng-container *ngIf='hasOption(change)'>\n                    <span class='pointer' [matMenuTriggerFor]=\"menu\">\n                        <i class='fas fa-ellipsis-h'></i>\n                      </span>\n                </ng-container>\n            </div>\n            <mat-menu #menu=\"matMenu\">\n              <ng-container *ngFor='let option of options'>\n                  <button *ngIf='option.enabled(change)' (click)='option.action(change)' mat-menu-item>\n                    {{option.label}}\n                  </button>\n              </ng-container>\n            </mat-menu>\n        </ng-container>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/navigation.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/navigation.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img id=\"nav-action-explorer\" class=\"nav-action\" src=\"static/editor/assets/icons/navigation/explorer.svg\"\n     matTooltip=\"Explorer\" (click)=\"didTapExplorer()\"/>\n\n<img id=\"nav-action-search\" class=\"nav-action\" src=\"static/editor/assets/icons/navigation/search.svg\"\n     matTooltip=\"Search\" (click)='didTapSearch()'/>\n\n<div id=\"nav-action-git\" [matBadge]=\"gitBadge\" matTooltip=\"Git\">\n    <img class='nav-action' src='static/editor/assets/icons/navigation/git.svg' (click)='didTapGit()'/>\n</div>\n\n<div id=\"nav-action-infos\" class=\"nav-action\"  [matBadge]=\"infosBadge\" matTooltip=\"Informations\" (click)=\"didTapInfos()\">\n    <i class=\"fas fa-info\"></i>\n</div>\n\n\n<div id=\"nav-action-components\" class=\"nav-action\" matTooltip=\"Components\" (click)=\"didTapComponents()\">\n    <i class=\"fab fa-uikit\"></i>\n</div>\n\n<div class=\"spacer\"></div>\n\n<div id=\"nav-action-theme\" class=\"nav-action\" matTooltip=\"Switch Theme\" (click)=\"didTapTheme()\">\n    <i class=\"fas fa-palette\"></i>\n</div>\n\n<img id=\"nav-action-settings\" class=\"nav-action\" src=\"static/editor/assets/icons/navigation/settings.svg\"\n     matTooltip=\"Settings\" (click)=\"didTapSettings()\"/>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/search/search.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/search/search.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n    <div class='tab-bar'>\n        <span>SEARCH</span>\n        <div class=\"spacer\"></div>\n    </div>\n    <mat-progress-bar mode='indeterminate' color='warn' *ngIf='querying'></mat-progress-bar>\n    <div class=\"navigation-content\">\n        <mat-form-field class='search'>\n          <input autoFocus autocomplete=\"off\" matInput placeholder=\"Press Enter to search\" (keydown)='search($event)' [(ngModel)]='query'>\n        </mat-form-field>\n        <ng-container>\n            <span class='result'>{{size}} result(s)</span>\n        </ng-container>\n        <explorer [nodes]='entries'></explorer>\n    </div>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/quick-open/quick-open.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/quick-open/quick-open.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='editor-overlay-quickOpenWidget' #quickOpen>\n    <input #input type=\"text\" placeholder=\"Quick Open\" [matAutocomplete]=\"auto\" (blur)='onBlured()' [formControl]=\"form\">\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='onSelected($event)' >\n        <mat-option *ngFor=\"let entry of $entries | async\" [value]=\"entry\">\n            <img [icon]=\"entry\"/><span class='entry-name'>{{entry.name}}</span> - <span class='entry-path'>{{entry.path|path}}</span>\n        </mat-option>\n    </mat-autocomplete>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/status-bar/status-bar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/status-bar/status-bar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"inRepo()\">\n    <span class=\"status-bar-item remote\">\n        <i class='remote-icon {{repoHost()}} fa-1x'></i>\n        <a href=\"{{repoUrl()}}\" target=\"_blank\">{{repoUrl()}}</a>\n        <i> - {{repoBranch()}} </i>\n    </span>\n</ng-container>\n<div class=\"spacer\"></div>\n<span class=\"status-bar-item\" *ngIf='cursor'>Ln {{cursor.lineNumber}}, Col {{cursor.column}}</span>\n\n<ng-container *ngIf='querying()'>\n    <mat-progress-spinner mode='indeterminate' color='warn' strokeWidth='2' diameter='16'></mat-progress-spinner>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/code-editor/code-editor.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/code-editor/code-editor.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-monaco-editor [hidden]='editor.diffEditing' class='code-editor' [options]=\"{}\" [model]='{}' (onInit)=\"codeEditorLoaded($event)\"></ngx-monaco-editor>\n<ngx-monaco-diff-editor [hidden]='!editor.diffEditing' class='code-editor' [options]=\"{}\" [originalModel]=\"{}\" [modifiedModel]=\"{}\" (onInit)=\"diffEditorLoaded($event)\"></ngx-monaco-diff-editor>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/image-editor/image-editor.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/image-editor/image-editor.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='image-editor'>\n    <div *ngIf='isSVG; else notSVG' [innerHTML]='svg | trustHtml' [ngStyle]='{zoom: editor.zoom}'></div>\n    <ng-template #notSVG>\n        <img [src]='url'  [ngStyle]='{zoom: editor.zoom}' />\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/preview-editor/preview-editor.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/preview-editor/preview-editor.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar *ngIf='loading' color=\"warn\" mode=\"indeterminate\"></mat-progress-bar>\n<iframe *ngIf='isURL' class=\"preview-editor\" [srcdoc]=\"content | trustHtml\" frameborder=\"0\" (load)='didFrameLoaded()'></iframe>\n<div *ngIf='isHTML' class='preview-editor' [innerHTML]='content | trustHtml' runScripts></div>\n<div *ngIf='isMarkdown' class='preview-editor'><markdown [data]=\"content\"></markdown></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/setting-editor/setting-editor.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/setting-editor/setting-editor.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='tab-bar'>\n    <div class=\"tab-item active\">\n        <i class=\"tab-icon fa fa-cog\"></i>&nbsp;\n        <span>Settings</span>\n        <span class='tab-close' (click)='didClose()'>&nbsp;&times;</span>\n    </div>\n</div>\n<div class='setting-editor'>\n    <mat-list class='list-groups'>\n        <ng-container *ngFor='let item of groups'>\n            <mat-list-item  *ngIf=\"item.settings.length !== 0\" (click)='didSelect(item)'>\n                <span class='setting-item' [ngClass]='{ active: selection.title === item.title}'>{{item.name|nicifyName}}</span>\n            </mat-list-item>\n        </ng-container>\n    </mat-list>\n    <mat-list>\n        <ng-container *ngFor=\"let setting of selection.settings\">\n           <mat-list-item>\n                <span mat-line class='setting-item active'>{{setting.name|nicifyName:true}}</span>\n                <p mat-line *ngIf='setting.type !== \"Checkbox\"'>{{setting.comment}}</p>\n                <div mat-line>\n                    <ng-container [ngSwitch]=\"setting.type\">\n                        <mat-checkbox  color='primary' *ngSwitchCase=\"'Checkbox'\" [(ngModel)]='setting.value' (change)='didChange()'>{{setting.comment}}</mat-checkbox>\n                        <mat-form-field *ngSwitchCase=\"'Number'\">\n                            <input matInput type='number' placeholder=\"\" [(ngModel)]=\"setting.value\" (change)='didChange()'>\n                        </mat-form-field>\n                        <mat-form-field *ngSwitchCase=\"'Input'\">\n                            <input matInput type='text' placeholder=\"\" [(ngModel)]=\"setting.value\" (keyup)='didChange()'>\n                        </mat-form-field>\n                        <mat-form-field *ngSwitchCase=\"'Dropdown'\">\n                            <mat-select [(value)]='setting.value' (selectionChange)='didChange()'>\n                                <mat-option *ngFor=\"let choice of setting.choices\" [value]=\"choice\">\n                                    {{choice}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </ng-container>\n                </div>\n            </mat-list-item>\n        </ng-container>\n    </mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/welcome/welcome.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/welcome/welcome.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <h3 class='welcome-title'>PL Editor</h3>\n<div class='welcome-section'>\n    <h3>User Interface</h3>\n    <img src=\"static/editor/assets/images/interface.png\" alt=\"interface\"> <br/> <br/>\n    <p>\n        PL Editor comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your project.\n        The UI is divided into four areas:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>A)&nbsp; <b>Side Bar</b> Contains different views like the Explorer to assist you while working on your project.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>B)&nbsp; <b>Editor</b> The main area to edit your files. You can open as many editors as you like side by side.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>C)&nbsp; <b>Debugging</b> Display different debugging information below the editor region for output or debug informations.</p>\n        </mat-list-item>\n\n        <mat-list-item>\n            <p>D)&nbsp; <b>Status Bar</b> Gives you additional context-specific indicators like the repository of the focused file/folder.</p>\n        </mat-list-item>\n    </mat-list>\n</div>\n\n<div class='welcome-section'>\n    <h3>Side by side editing</h3>\n    <mat-divider></mat-divider>\n    <p>\n        You can open as many editors as you like side by side horizontally.\n        If you already have one editor open, there are multiple ways of opening another editor to the side of the existing one:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>Click on a file in the Explorer.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Press <b> ⌘ →</b> (<b>Ctrl →</b> on Windows/Linux) inside a code editor will split the editor.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Click the <b>Split Editor</b> button in the upper right of an editor.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Press <b>Ctrl + O</b> to open the <b>Quick Open</b> dialog.</p>\n        </mat-list-item>\n    </mat-list>\n    <p>\n        Whenever you open another file, the editor that is active will display the content of that file.\n        So if you have two editors side by side and you want to open file into the right hand editor,\n        make sure that editor is active (by clicking inside it) before opening your file.\n    </p>\n    <p class='welcome-tip'>\n        Tip: You can resize editors and reorder them. Drag and drop the editor title area to reposition or resize the editor.\n    </p>\n</div>\n\n<div class='welcome-section'>\n    <h3>Explorer</h3>\n    <mat-divider></mat-divider>\n    <p>\n        The Explorer is used to browse, open, and manage all of the files and folders in your project.\n        You can do many things from here:\n    </p>\n    <mat-list>\n        <mat-list-item>\n            <p>Create, delete, and rename files and folders.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Move files and folders with drag and drop.</p>\n        </mat-list-item>\n        <mat-list-item>\n            <p>Load, reload, and test pl files </p>\n        </mat-list-item>\n    </mat-list>\n    <p class='welcome-tip'>Tip: You can open quickly a file with <b>Ctrl|Cmd + O</b></p>\n    <p class='welcome-tip'>Tip: You can drag and drop files (Single file) into the Explorer from outside to copy them</p>\n</div>\n\n<div class='welcome-section'>\n    <h3>Code colorization</h3>\n    <mat-divider></mat-divider>\n    <p>The editor provides a syntax colorization for the following extensions:</p>\n    <mat-list>\n        <mat-list-item *ngFor='let language of languages'> {{language}} </mat-list-item>\n    </mat-list>\n    <p>\n        There is also a special feature for files with <b>.pl</b> and <b>.pltp</b> extensions that allow you to embed a colorization of all the other languages inside a multiline key like in the following image. <br/>\n    </p>\n    <img src=\"static/editor/assets/images/embed-style.png\" alt=\"embed style\"> <br/>\n</div>\n\n<div>\n    <h3>Shorcuts</h3>\n    <mat-divider></mat-divider>\n    <table mat-table [dataSource]=\"shorcuts\" class=\"mat-elevation-z1\" style='width: 100%'>\n        <!-- Command -->\n        <ng-container matColumnDef=\"command\">\n            <th mat-header-cell *matHeaderCellDef> Command </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.command}} </td>\n        </ng-container>\n\n        <!-- Action -->\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Action </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/workspace.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/workspace.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<as-split class='h100' direction='horizontal' gutterSize='2' useTransition='true' cdkDropListGroup>\n    <ng-container *ngFor='let group of groups'>\n        <as-split-area class='editor-group h100' style='overflow: hidden;'>\n            <div class='tab-bar'>\n                <div [id]='group.id' class='tab-group' cdkDropList [cdkDropListData]=\"group.resources\" (cdkDropListDropped)=\"group.drop($event)\">\n                    <div *ngFor='let resource of group.resources; trackBy: group.trackResource' [matTooltip]=\"resource.path | path\"\n                        [ngClass]=\"{'tab-item': true, active: group.isActive(resource), changed: resource.changed}\"\n                        (click)='group.reopen(resource)' cdkDragAxis='x' cdkDrag>\n                        <img [icon]=\"resource\"/>\n                        <ng-container *ngIf='group.isPreviewGroup()'>\n                            <span>'Preview'</span>&nbsp;\n                        </ng-container>\n                        <span>{{resource.name}}</span>\n                        <span class='tab-close' (click)='group.close(resource, true)'>&nbsp;&times;</span>\n                    </div>\n                </div>\n                <div class=\"spacer\"></div>\n                <ng-container *ngIf='group.hasAction();'>\n                    <ng-container *ngIf='group.focused()'>\n                        <ng-container *ngFor='let action of group.actions'>\n                            <div class='tab-item' [id]=\"action.id\" [matTooltip]='action.tooltip' *ngIf='action.condition(group.activeResource)' (click)='action.invoke(group.activeResource)'>\n                                <i class=\"{{ action.icon }}\"></i>\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                    <div class='tab-item' id=\"editorGroup-action-more\" matTooltip='More Options' [matMenuTriggerFor]=\"editorMenu\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                    </div>\n                    <mat-menu #editorMenu=\"matMenu\">\n                        <button id=\"editorGroup-action-save\" mat-menu-item (click)='group.save(group.activeResource)'>Save ⌘S</button>\n                        <button id=\"editorGroup-action-saveAll\" mat-menu-item (click)='group.saveAll()'>Save All ⌘Alt S</button>\n                        <button id=\"editorGroup-action-close\" mat-menu-item (click)='group.close(group.activeResource, true)'>Close ⌘K</button>\n                        <button id=\"editorGroup-action-closeAll\" mat-menu-item (click)='group.closeAll(true)'>Close All ⌘Alt K</button>\n                        <button id=\"editorGroup-action-closeSaved\" mat-menu-item (click)='group.closeSaved()'>Close Saved ⌘Alt U</button>\n                    </mat-menu>\n                </ng-container>\n            </div>\n            <ng-container *ngFor='let editor of group.editors; trackBy: group.trackEditor'>\n                <ng-container [ngSwitch]=\"editor.type()\">\n                    <code-editor [hidden]='!group.activeEditorIs(\"code\")' *ngSwitchCase=\"'code'\" [editor]='editor'></code-editor>\n                    <image-editor [hidden]='!group.activeEditorIs(\"image\")' *ngSwitchCase=\"'image'\" [editor]='editor'></image-editor>\n                    <preview-editor [hidden]='!group.activeEditorIs(\"preview\")' *ngSwitchCase=\"'preview'\" [editor]='editor'></preview-editor>\n                </ng-container>\n            </ng-container>\n        </as-split-area>\n    </ng-container>\n    <as-split-area class='editor-group h100' style='overflow: hidden;' *ngIf='showSettings'>\n        <setting-editor></setting-editor>\n    </as-split-area>\n    <welcome *ngIf='!hasGroup'></welcome>\n</as-split>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{data?.title}}</h4>\n<p mat-dialog-content>{{data?.message}}</p>\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"true\">{{data?.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data?.noTitle}}</button>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{data?.title}}</h4>\n<div mat-dialog-content>\n\t<p [innerHTML]='data?.message'></p>\n\t<form>\n\t\t<mat-form-field class='full-width' *ngFor='let field of data.fields'>\n\t\t\t<input matInput name='field.value' autocomplete=\"on\" [type]='field.type' [placeholder]=\"field?.placeholder\" [(ngModel)]='field.value' >\n\t\t</mat-form-field>\n\t</form>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"data\">{{data.okTitle}}</button>\n    <button mat-button [mat-dialog-close]=\"false\">{{data.noTitle}}</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tree/tree.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/tree/tree.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-component\">\n  <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <!-- DEFAULT NODE -->\n    <mat-tree-node\n      *matTreeNodeDef=\"let node\" matTreeNodePadding matTreeNodePaddingIndent=\"16\"\n      id=\"tree-node-{{node.id}}\" [ngClass]=\"{ focused: node.focused, editing: node.editing }\" tabindex=\"0\">\n      <ng-container *ngTemplateOutlet=\"defaultNodeTemplate; context: { $implicit: node }\"></ng-container>\n      <ng-container *ngIf=\"node.creating\">\n        <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n      </ng-container>\n    </mat-tree-node>\n    <!-- EXPANDABLE NODE -->\n    <mat-tree-node\n      *matTreeNodeDef=\"let node; when: expandable\" matTreeNodePadding matTreeNodePaddingIndent=\"16\" matTreeNodeToggle\n      id=\"tree-node-{{node.id}}\" [ngClass]=\"{ focused: node.focused }\" tabindex=\"0\">\n      <ng-container *ngTemplateOutlet=\"defaultNodeTemplate; context: { $implicit: node }\"></ng-container>\n      <ng-container *ngIf=\"node.creating\">\n        <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n      </ng-container>\n    </mat-tree-node>\n  </mat-tree>\n</div>\n<!-- DEFAULT TEMPLATE -->\n<ng-template #defaultNodeTemplate let-node>\n  <ng-container *ngIf=\"!node.renaming; else renaming\">\n    <div class=\"node-content\" (click)=\"onClick(node, $event)\" (contextmenu)=\"onContextMenu(node, $event)\">\n      <ng-container *ngIf=\"template; else default\">\n        <ng-container *ngTemplateOutlet=\"template; context: { $implicit: node }\"></ng-container>\n      </ng-container>\n      <ng-template #default>\n        {{node.name}}\n      </ng-template>\n    </div>\n  </ng-container>\n  <ng-template #renaming>\n    <ng-container *ngTemplateOutlet=\"editingState\"></ng-container>\n  </ng-template>\n</ng-template>\n<!-- EDITING STATE -->\n<ng-template #editingState>\n  <div class=\"node-content\">\n    <span class=\"input-wrapper\">\n      <input autofocus\n              type='text'\n              placeholder='Press Enter to create ESC to cancel...'\n              [(ngModel)]=\"editedName\"\n              (keydown)='onEdit($event)'\n              (blur)='onEdit($event)'/>\n      </span>\n  </div>\n</ng-template>\n");

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
        loadChildren: () => Promise.resolve().then(() => __webpack_require__(/*! ./pages/editor/editor.module */ "./src/app/pages/editor/editor.module.ts")).then(m => m.EditorModule),
        resolve: { data: editor_resolver_1.EditorResolver }
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
const settings_1 = __webpack_require__(/*! ./pages/editor/shared/models/settings */ "./src/app/pages/editor/shared/models/settings.ts");
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
            this.setTheme(this.settings.get(settings_1.Settings.EDITOR_KEY, 'theme').value);
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
const angular2_markdown_1 = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js"); // https://www.npmjs.com/package/angular2-markdown
const ngx_monaco_editor_1 = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js"); // https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0
const ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js"); // https://www.npmjs.com/package/ngx-toastr
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const monaco_1 = __webpack_require__(/*! ./pages/editor/shared/models/monaco */ "./src/app/pages/editor/shared/models/monaco.ts");
const shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
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
                headerName: 'X-CSRFToken'
            }),
            angular2_markdown_1.MarkdownModule.forRoot(),
            angular_split_1.AngularSplitModule.forRoot(),
            ngx_monaco_editor_1.MonacoEditorModule.forRoot(monaco_1.MONACO_CONFIG),
            ngx_toastr_1.ToastrModule.forRoot({ preventDuplicates: true }),
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
    constructor() { }
    ngOnInit() { }
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
let AskModule = class AskModule {
};
AskModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [ask_component_1.AskComponent],
        imports: [common_1.CommonModule, shared_module_1.SharedModule, ask_routing_module_1.AskRoutingModule],
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

/***/ "./src/app/pages/editor/debugging/debugging.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/debugging/debugging.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n\n.tab-bar {\n  padding: 0px;\n}\n\n.tab-item {\n  background: transparent;\n  color: var(--tab-foreground);\n  font-size: 10px !important;\n}\n\n.debugging-content {\n  overflow: auto;\n  height: calc(100% - 36px);\n  padding: 0;\n}\n\n.mat-badge-medium .mat-badge-content {\n  right: 0px !important;\n  top: -4px !important;\n  right: -10px;\n  background: transparent;\n  font-size: 10px;\n  color: var(--tab-foreground);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9kZWJ1Z2dpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci9kZWJ1Z2dpbmcvZGVidWdnaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURDSTtFQUNJLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ0VSOztBREVBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9kZWJ1Z2dpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFiLWJhciB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuICAgIC50YWItaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGFiLWZvcmVncm91bmQpO1xuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG5cblxuLmRlYnVnZ2luZy1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTRweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHZhcigtLXRhYi1mb3JlZ3JvdW5kKTtcbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YWItYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGFiLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRhYi1mb3JlZ3JvdW5kKTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZWJ1Z2dpbmctY29udGVudCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTRweCAhaW1wb3J0YW50O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10YWItZm9yZWdyb3VuZCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/debugging/debugging.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editor/debugging/debugging.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const navigation_service_1 = __webpack_require__(/*! ../navigation/navigation.service */ "./src/app/pages/editor/navigation/navigation.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const compiler_service_1 = __webpack_require__(/*! ../shared/services/compiler.service */ "./src/app/pages/editor/shared/services/compiler.service.ts");
let DebuggingComponent = class DebuggingComponent {
    constructor(navigation, compiler, notification) {
        this.navigation = navigation;
        this.compiler = compiler;
        this.notification = notification;
        this.subscriptions = [];
        this.openedSize = 60;
        this.size = 5;
        this.index = 0;
    }
    get notifs() {
        return this.notification.size;
    }
    get problems() {
        return this.compiler.problemsCount;
    }
    ngOnInit() {
        this.subscriptions.push(this.navigation.infos.subscribe(() => {
            if (this.size < this.openedSize) {
                this.open();
            }
            else {
                this.close();
            }
        }));
        this.subscriptions.push(this.notification.logAdded.subscribe(this.open.bind(this)));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
    onClose(event) {
        event.stopPropagation();
        this.size = 5;
    }
    onFocus(index) {
        this.index = index;
        this.open();
    }
    onClearNotifs() {
        this.notification.clear();
    }
    dragEnd(data) {
        this.size = data.sizes[1];
        if (this.size < 5) {
            this.size = 5;
        }
    }
    open() {
        if (this.size < this.openedSize) {
            this.size = this.openedSize;
        }
    }
    close() {
        this.size = 5;
    }
};
DebuggingComponent.ctorParameters = () => [
    { type: navigation_service_1.NavigationService },
    { type: compiler_service_1.CompilerService },
    { type: notification_service_1.NotificationService }
];
DebuggingComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'debugging',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./debugging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/debugging.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./debugging.component.scss */ "./src/app/pages/editor/debugging/debugging.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [navigation_service_1.NavigationService,
        compiler_service_1.CompilerService,
        notification_service_1.NotificationService])
], DebuggingComponent);
exports.DebuggingComponent = DebuggingComponent;


/***/ }),

/***/ "./src/app/pages/editor/debugging/logging/logging.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/editor/debugging/logging/logging.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logging-content {\n  height: 100%;\n  padding: 0;\n}\n\n.logging-nothing {\n  padding: 4px;\n}\n\n.log {\n  position: relative;\n  list-style-type: none;\n  list-style-type: none;\n  display: flex;\n  align-items: baseline;\n  padding: 4px 8px;\n}\n\n.log .log-icon {\n  position: absolute;\n}\n\n.log--info .log-icon {\n  color: #009688;\n}\n\n.log--warning .log-icon {\n  color: #FFEB3B;\n}\n\n.log--error .log-icon {\n  color: #F44336;\n}\n\n.log-content {\n  padding: 0 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9sb2dnaW5nL2xvZ2dpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci9kZWJ1Z2dpbmcvbG9nZ2luZy9sb2dnaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQUk7RUFDSSxrQkFBQTtBQ0VSOztBREdJO0VBQ0ksY0FBQTtBQ0FSOztBREtJO0VBQ0ksY0FBQTtBQ0ZSOztBRE9NO0VBQ0UsY0FBQTtBQ0pSOztBRFFBO0VBQ0ksZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9sb2dnaW5nL2xvZ2dpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nZ2luZy1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2dpbmctbm90aGluZyB7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG4ubG9nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIC5sb2ctaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG5cbi5sb2ctLWluZm8ge1xuICAgIC5sb2ctaWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDA5Njg4O1xuICAgIH1cbn1cblxuLmxvZy0td2FybmluZyB7XG4gICAgLmxvZy1pY29uIHtcbiAgICAgICAgY29sb3I6ICNGRkVCM0I7XG4gICAgfVxufVxuXG4ubG9nLS1lcnJvciB7XG4gICAgICAubG9nLWljb24ge1xuICAgICAgICBjb2xvcjojRjQ0MzM2O1xuICAgIH1cbn1cblxuLmxvZy1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDMycHg7XG59XG4iLCIubG9nZ2luZy1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nZ2luZy1ub3RoaW5nIHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ubG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuLmxvZyAubG9nLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2ctLWluZm8gLmxvZy1pY29uIHtcbiAgY29sb3I6ICMwMDk2ODg7XG59XG5cbi5sb2ctLXdhcm5pbmcgLmxvZy1pY29uIHtcbiAgY29sb3I6ICNGRkVCM0I7XG59XG5cbi5sb2ctLWVycm9yIC5sb2ctaWNvbiB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4ubG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDMycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/debugging/logging/logging.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/editor/debugging/logging/logging.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
let LoggingComponent = class LoggingComponent {
    constructor(notification) {
        this.notification = notification;
        this.subscriptions = [];
    }
    get empty() {
        return this.notification.size === 0;
    }
    get items() {
        return this.notification.logs;
    }
    ngOnInit() {
        this.subscriptions.push(this.notification.logAdded.subscribe(_ => {
            this.scrollBottom();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
    clear(event) {
        event.stopPropagation();
        this.notification.clear();
    }
    track(index, _item) {
        return index;
    }
    scrollBottom() {
        if (this.container) {
            this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
        }
    }
};
LoggingComponent.ctorParameters = () => [
    { type: notification_service_1.NotificationService }
];
tslib_1.__decorate([
    core_1.ViewChild('container', { static: true }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], LoggingComponent.prototype, "container", void 0);
LoggingComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'logging',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./logging.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/logging/logging.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./logging.component.scss */ "./src/app/pages/editor/debugging/logging/logging.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [notification_service_1.NotificationService])
], LoggingComponent);
exports.LoggingComponent = LoggingComponent;


/***/ }),

/***/ "./src/app/pages/editor/debugging/problems/problems.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/editor/debugging/problems/problems.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".problems-content {\n  height: 100%;\n  padding: 0;\n}\n\n.problem {\n  position: relative;\n  list-style-type: none;\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: 16px auto;\n  grid-gap: 0 8px;\n  align-items: center;\n  padding: 4px 8px;\n}\n\n.problem:hover {\n  background-color: var(--tab-hoverBackground);\n}\n\n.problems-nothing {\n  padding: 4px;\n}\n\n.problem-file-icon, .problem-icon {\n  width: 16px !important;\n  height: 16px !important;\n  font-size: 16px !important;\n}\n\n.problem-path {\n  cursor: pointer;\n}\n\n.problem-path:hover {\n  text-decoration: underline;\n}\n\n.problem-icon {\n  display: inline-table;\n}\n\n.problem--info .problem-icon {\n  color: #009688;\n}\n\n.problem--warning .problem-icon {\n  color: #FFEB3B;\n}\n\n.problem--error .problem-icon {\n  color: #F44336;\n}\n\n.problem-content {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9wcm9ibGVtcy9wcm9ibGVtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9wcm9ibGVtcy9wcm9ibGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENJO0VBQ0ksNENBQUE7QUNDUjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREFJO0VBQ0ksMEJBQUE7QUNFUjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FERUk7RUFDSSxjQUFBO0FDQ1I7O0FESUk7RUFDSSxjQUFBO0FDRFI7O0FETU07RUFDRSxjQUFBO0FDSFI7O0FET0E7RUFDSSxpQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL2RlYnVnZ2luZy9wcm9ibGVtcy9wcm9ibGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ibGVtcy1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnByb2JsZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnB4IGF1dG87XG4gICAgZ3JpZC1nYXA6IDAgOHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDhweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItaG92ZXJCYWNrZ3JvdW5kKTtcbiAgICB9XG59XG5cbi5wcm9ibGVtcy1ub3RoaW5nIHtcbiAgICBwYWRkaW5nOiA0cHg7XG59XG5cbi5wcm9ibGVtLWZpbGUtaWNvbiwgLnByb2JsZW0taWNvbiB7XG4gICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cbi5wcm9ibGVtLXBhdGgge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuLnByb2JsZW0taWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xufVxuXG4ucHJvYmxlbS0taW5mbyB7XG4gICAgLnByb2JsZW0taWNvbiB7XG4gICAgICAgIGNvbG9yOiAjMDA5Njg4O1xuICAgIH1cbn1cblxuLnByb2JsZW0tLXdhcm5pbmcge1xuICAgIC5wcm9ibGVtLWljb24ge1xuICAgICAgICBjb2xvcjogI0ZGRUIzQjtcbiAgICB9XG59XG5cbi5wcm9ibGVtLS1lcnJvciB7XG4gICAgICAucHJvYmxlbS1pY29uIHtcbiAgICAgICAgY29sb3I6I0Y0NDMzNjtcbiAgICB9XG59XG5cbi5wcm9ibGVtLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuIiwiLnByb2JsZW1zLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9ibGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNnB4IGF1dG87XG4gIGdyaWQtZ2FwOiAwIDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cbi5wcm9ibGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFiLWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi5wcm9ibGVtcy1ub3RoaW5nIHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4ucHJvYmxlbS1maWxlLWljb24sIC5wcm9ibGVtLWljb24ge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9ibGVtLXBhdGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvYmxlbS1wYXRoOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm9ibGVtLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG59XG5cbi5wcm9ibGVtLS1pbmZvIC5wcm9ibGVtLWljb24ge1xuICBjb2xvcjogIzAwOTY4ODtcbn1cblxuLnByb2JsZW0tLXdhcm5pbmcgLnByb2JsZW0taWNvbiB7XG4gIGNvbG9yOiAjRkZFQjNCO1xufVxuXG4ucHJvYmxlbS0tZXJyb3IgLnByb2JsZW0taWNvbiB7XG4gIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4ucHJvYmxlbS1jb250ZW50IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/debugging/problems/problems.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/editor/debugging/problems/problems.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const compiler_service_1 = __webpack_require__(/*! ../../shared/services/compiler.service */ "./src/app/pages/editor/shared/services/compiler.service.ts");
const opener_service_1 = __webpack_require__(/*! ../../shared/services/opener.service */ "./src/app/pages/editor/shared/services/opener.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
let ProblemsComponent = class ProblemsComponent {
    constructor(compiler, opener, notification) {
        this.compiler = compiler;
        this.opener = opener;
        this.notification = notification;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.empty = true;
        this.subscriptions.push(this.compiler.compiled.subscribe(_ => {
            this.items = this.compiler.problems.map(prop => {
                return {
                    type: prop.isWarning ? 'warning' : 'error',
                    message: `${prop.type} ${prop.message}`,
                    path: prop.file,
                    lineno: prop.lineno,
                };
            });
            this.empty = this.items.length === 0;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
    track(index, _item) {
        return index;
    }
    openOnEditor(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.opener.open(item.path, {
                    position: {
                        line: item.lineno,
                        column: 0
                    }
                });
            }
            catch (_a) {
                this.notification.error(`Failed to open '${item.path}'`);
            }
        });
    }
};
ProblemsComponent.ctorParameters = () => [
    { type: compiler_service_1.CompilerService },
    { type: opener_service_1.OpenerService },
    { type: notification_service_1.NotificationService }
];
ProblemsComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'problems',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./problems.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/debugging/problems/problems.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./problems.component.scss */ "./src/app/pages/editor/debugging/problems/problems.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [compiler_service_1.CompilerService,
        opener_service_1.OpenerService,
        notification_service_1.NotificationService])
], ProblemsComponent);
exports.ProblemsComponent = ProblemsComponent;


/***/ }),

/***/ "./src/app/pages/editor/editor-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editor/editor-routing.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
const editor_component_1 = __webpack_require__(/*! ./editor.component */ "./src/app/pages/editor/editor.component.ts");
const routes = [
    { path: '', component: editor_component_1.EditorComponent }
];
let EditorRoutingModule = class EditorRoutingModule {
};
EditorRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], EditorRoutingModule);
exports.EditorRoutingModule = EditorRoutingModule;


/***/ }),

/***/ "./src/app/pages/editor/editor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/editor/editor.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-application {\n  position: relative;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  color: #5a5a5a;\n}\n\n.editor-split-panel {\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  flex: 1;\n}\n\n.editor-split-panel .split {\n  position: relative;\n  height: 100%;\n}\n\n.editor-split-panel .split-area {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.navigation-content {\n  height: calc(100% - var(--tab-height)) !important;\n  background-color: var(--sideBar-background);\n  margin: 0px;\n  padding: 0px;\n  overflow: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.navigation-content * {\n  font-size: 12px;\n}\n\n.tab-bar {\n  z-index: 1;\n  display: flex;\n  position: relative;\n  height: var(--tab-height);\n  background-color: var(--tab-inactiveBackground);\n  align-items: center;\n  overflow: hidden;\n  padding: 0px;\n}\n\n.tab-bar .tab-group {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.tab-bar .tab-item {\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  font-style: normal;\n  padding: 0px 12px;\n  cursor: pointer;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.tab-bar .tab-item.active {\n  background-color: var(--tab-activeBackground);\n  color: var(--tab-activeForeground);\n}\n\n.tab-bar .tab-item.changed {\n  border-bottom: 1px solid salmon;\n}\n\n.tab-bar .tab-item:hover {\n  background-color: var(--tab-hoverBackground);\n}\n\n.tab-bar .tab-item .tab-icon {\n  margin-right: 4px;\n}\n\n.tab-bar .tab-item .tab-close {\n  font-size: 18px;\n}\n\n.tab-bar .tab-item .tab-close:hover {\n  opacity: 1;\n}\n\n.tree-component .mat-tree {\n  background: transparent !important;\n}\n\n.tree-component .mat-tree .mat-tree-node:hover, .tree-component .mat-tree .mat-tree-node.focused {\n  background-color: var(--sideBar-hoverBackground) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREtBO0VBQ0ksaURBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRko7O0FER0k7RUFDSSxlQUFBO0FDRFI7O0FES0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRko7O0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FES0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hSOztBREtRO0VBQ0ksNkNBQUE7RUFDQSxrQ0FBQTtBQ0haOztBRE1RO0VBQ0ksK0JBQUE7QUNKWjs7QURPUTtFQUNJLDRDQUFBO0FDTFo7O0FEUVE7RUFDSSxpQkFBQTtBQ05aOztBRFNRO0VBQ0ksZUFBQTtBQ1BaOztBRFFZO0VBQ0ksVUFBQTtBQ05oQjs7QURjSTtFQUNJLGtDQUFBO0FDWFI7O0FEYVk7RUFDSSwyREFBQTtBQ1hoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWFwcGxpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5lZGl0b3Itc3BsaXQtcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXg6IDE7XG5cbiAgICAuc3BsaXQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuc3BsaXQtYXJlYSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxufVxuXG4ubmF2aWdhdGlvbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRhYi1oZWlnaHQpKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXItYmFja2dyb3VuZCk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICoge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG4udGFiLWJhciB7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IHZhcigtLXRhYi1oZWlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1pbmFjdGl2ZUJhY2tncm91bmQpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAudGFiLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB9XG5cbiAgICAudGFiLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYWN0aXZlQmFja2dyb3VuZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGFiLWFjdGl2ZUZvcmVncm91bmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jaGFuZ2VkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzYWxtb247XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYi1ob3ZlckJhY2tncm91bmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYi1jbG9zZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi50cmVlLWNvbXBvbmVudCB7XG4gICAgLm1hdC10cmVlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLm1hdC10cmVlLW5vZGUge1xuICAgICAgICAgICAgJjpob3ZlciwgJi5mb2N1c2VkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlQmFyLWhvdmVyQmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5lZGl0b3ItYXBwbGljYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICM1YTVhNWE7XG59XG5cbi5lZGl0b3Itc3BsaXQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbn1cbi5lZGl0b3Itc3BsaXQtcGFuZWwgLnNwbGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZWRpdG9yLXNwbGl0LXBhbmVsIC5zcGxpdC1hcmVhIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZpZ2F0aW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRhYi1oZWlnaHQpKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlQmFyLWJhY2tncm91bmQpO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubmF2aWdhdGlvbi1jb250ZW50ICoge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50YWItYmFyIHtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IHZhcigtLXRhYi1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItaW5hY3RpdmVCYWNrZ3JvdW5kKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMHB4O1xufVxuLnRhYi1iYXIgLnRhYi1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4udGFiLWJhciAudGFiLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50YWItYmFyIC50YWItaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItYWN0aXZlQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10YWItYWN0aXZlRm9yZWdyb3VuZCk7XG59XG4udGFiLWJhciAudGFiLWl0ZW0uY2hhbmdlZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzYWxtb247XG59XG4udGFiLWJhciAudGFiLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWItaG92ZXJCYWNrZ3JvdW5kKTtcbn1cbi50YWItYmFyIC50YWItaXRlbSAudGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi50YWItYmFyIC50YWItaXRlbSAudGFiLWNsb3NlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRhYi1iYXIgLnRhYi1pdGVtIC50YWItY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udHJlZS1jb21wb25lbnQgLm1hdC10cmVlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi50cmVlLWNvbXBvbmVudCAubWF0LXRyZWUgLm1hdC10cmVlLW5vZGU6aG92ZXIsIC50cmVlLWNvbXBvbmVudCAubWF0LXRyZWUgLm1hdC10cmVlLW5vZGUuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXItaG92ZXJCYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/editor/editor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/editor/editor.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const resource_service_1 = __webpack_require__(/*! ./shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const task_service_1 = __webpack_require__(/*! ./shared/services/task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
let EditorComponent = class EditorComponent {
    constructor(task, resources) {
        this.task = task;
        this.resources = resources;
    }
    get taskInProgress() {
        return this.task.running;
    }
    ngOnInit() {
    }
    beforeunload($event) {
        if (!!this.resources.findPredicate(item => item.changed)) { // the if is required
            $event.returnValue = true;
        }
    }
    keypressed($event) {
        if (($event.ctrlKey || $event.metaKey) && $event.key === 'o') {
            $event.preventDefault();
            $event.stopPropagation();
            this.showQuickOpen = true;
        }
    }
};
EditorComponent.ctorParameters = () => [
    { type: task_service_1.TaskService },
    { type: resource_service_1.ResourceService }
];
tslib_1.__decorate([
    core_1.HostListener('window:beforeunload', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EditorComponent.prototype, "beforeunload", null);
tslib_1.__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], EditorComponent.prototype, "keypressed", null);
EditorComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-editor',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/editor.component.html")).default,
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./editor.component.scss */ "./src/app/pages/editor/editor.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [task_service_1.TaskService,
        resource_service_1.ResourceService])
], EditorComponent);
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/pages/editor/editor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
const debugging_component_1 = __webpack_require__(/*! ./debugging/debugging.component */ "./src/app/pages/editor/debugging/debugging.component.ts");
const logging_component_1 = __webpack_require__(/*! ./debugging/logging/logging.component */ "./src/app/pages/editor/debugging/logging/logging.component.ts");
const problems_component_1 = __webpack_require__(/*! ./debugging/problems/problems.component */ "./src/app/pages/editor/debugging/problems/problems.component.ts");
const editor_routing_module_1 = __webpack_require__(/*! ./editor-routing.module */ "./src/app/pages/editor/editor-routing.module.ts");
const editor_component_1 = __webpack_require__(/*! ./editor.component */ "./src/app/pages/editor/editor.component.ts");
const explorer_component_1 = __webpack_require__(/*! ./navigation/explorer/explorer.component */ "./src/app/pages/editor/navigation/explorer/explorer.component.ts");
const git_component_1 = __webpack_require__(/*! ./navigation/git/git.component */ "./src/app/pages/editor/navigation/git/git.component.ts");
const navigation_component_1 = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/pages/editor/navigation/navigation.component.ts");
const search_component_1 = __webpack_require__(/*! ./navigation/search/search.component */ "./src/app/pages/editor/navigation/search/search.component.ts");
const quick_open_component_1 = __webpack_require__(/*! ./quick-open/quick-open.component */ "./src/app/pages/editor/quick-open/quick-open.component.ts");
const icon_directive_1 = __webpack_require__(/*! ./shared/directives/icon.directive */ "./src/app/pages/editor/shared/directives/icon.directive.ts");
const nicify_name_pipe_1 = __webpack_require__(/*! ./shared/pipes/nicify-name.pipe */ "./src/app/pages/editor/shared/pipes/nicify-name.pipe.ts");
const path_pipe_1 = __webpack_require__(/*! ./shared/pipes/path.pipe */ "./src/app/pages/editor/shared/pipes/path.pipe.ts");
const status_bar_component_1 = __webpack_require__(/*! ./status-bar/status-bar.component */ "./src/app/pages/editor/status-bar/status-bar.component.ts");
const code_editor_component_1 = __webpack_require__(/*! ./workspace/code-editor/code-editor.component */ "./src/app/pages/editor/workspace/code-editor/code-editor.component.ts");
const image_editor_component_1 = __webpack_require__(/*! ./workspace/image-editor/image-editor.component */ "./src/app/pages/editor/workspace/image-editor/image-editor.component.ts");
const preview_editor_component_1 = __webpack_require__(/*! ./workspace/preview-editor/preview-editor.component */ "./src/app/pages/editor/workspace/preview-editor/preview-editor.component.ts");
const setting_editor_component_1 = __webpack_require__(/*! ./workspace/setting-editor/setting-editor.component */ "./src/app/pages/editor/workspace/setting-editor/setting-editor.component.ts");
const welcome_component_1 = __webpack_require__(/*! ./workspace/welcome/welcome.component */ "./src/app/pages/editor/workspace/welcome/welcome.component.ts");
const workspace_component_1 = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/pages/editor/workspace/workspace.component.ts");
let EditorModule = class EditorModule {
};
EditorModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [
            path_pipe_1.PathPipe,
            nicify_name_pipe_1.NicifyNamePipe,
            icon_directive_1.IconDirective,
            editor_component_1.EditorComponent,
            navigation_component_1.NavigationComponent,
            explorer_component_1.ExplorerComponent,
            search_component_1.SearchComponent,
            git_component_1.GitComponent,
            status_bar_component_1.FooterComponent,
            debugging_component_1.DebuggingComponent,
            problems_component_1.ProblemsComponent,
            logging_component_1.LoggingComponent,
            workspace_component_1.WorkspaceComponent,
            code_editor_component_1.CodeEditorComponent,
            image_editor_component_1.ImageEditorComponent,
            preview_editor_component_1.PreviewEditorComponent,
            setting_editor_component_1.SettingEditorComponent,
            welcome_component_1.WelcomeComponent,
            quick_open_component_1.QuickOpenComponent
        ],
        imports: [
            shared_module_1.SharedModule,
            editor_routing_module_1.EditorRoutingModule,
        ],
    })
], EditorModule);
exports.EditorModule = EditorModule;


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
let EditorResolver = class EditorResolver {
    constructor(settings, resources, notification) {
        this.settings = settings;
        this.resources = resources;
        this.notification = notification;
    }
    resolve(route, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.resources.refresh();
                yield this.settings.loadSettings();
            }
            catch (error) {
                this.notification.error(error.message);
            }
        });
    }
};
EditorResolver.ctorParameters = () => [
    { type: settings_service_1.SettingsService },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
EditorResolver = tslib_1.__decorate([
    core_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [settings_service_1.SettingsService,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], EditorResolver);
exports.EditorResolver = EditorResolver;


/***/ }),

/***/ "./src/app/pages/editor/navigation/explorer/explorer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/editor/navigation/explorer/explorer.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-bar {\n  font-size: 1rem;\n  margin: 0;\n  padding: 0 0 0 16px;\n}\n\n.mat-tree {\n  background-color: transparent;\n  padding: 0;\n}\n\n.node-content .node-label {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  display: block;\n  overflow: hidden;\n}\n\n.node-content .node-option-group {\n  position: absolute;\n  right: 0;\n  visibility: hidden;\n  font-size: 14px;\n}\n\n.node-content .node-option-group .node-option {\n  cursor: pointer;\n}\n\n.node-content:hover .node-option-group {\n  visibility: visible;\n}\n\n.dnd-drag {\n  opacity: 0.5;\n}\n\n.dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1);\n}\n\n.mat-divider {\n  border-top-color: #333;\n}\n\n.context-menu {\n  background-color: #fafafa;\n  padding: 4pt;\n  font-size: 10pt;\n  z-index: 1000;\n  box-shadow: 0 0 12pt rgba(0, 0, 0, 0.25);\n  border-radius: 4pt;\n  padding: 0.5em 0 0.5em 0;\n  -webkit-animation: fadeIn 0.1s ease-out;\n          animation: fadeIn 0.1s ease-out;\n  opacity: 1;\n  display: block;\n}\n\n.context-menu hr {\n  border: none;\n  border-bottom: 1px solid #eee;\n}\n\n.context-menu div {\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  color: #333;\n  padding: 0.5em 2em 0.5em 0.75em;\n  max-width: 18em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.context-menu div:hover {\n  background-color: #333;\n  color: #fff;\n}\n\n.context-menu div::before {\n  content: \"\";\n  margin-right: 0.75em;\n  width: 0.5em;\n  height: 1em;\n  display: inline-block;\n}\n\n/* Animatinons */\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.is-fadingIn {\n  -webkit-animation: fadeIn 0.1s ease-out;\n  animation: fadeIn 0.1s ease-out;\n  opacity: 1;\n  display: block;\n}\n\n.is-fadingOut {\n  -webkit-animation: fadeOut 0.1s ease-out;\n  animation: fadeOut 0.1s ease-out;\n  opacity: 0;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci9uYXZpZ2F0aW9uL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDTSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtBQ0VSOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUEsZ0JBQUE7O0FBQ0E7RUFDRTtJQUNFLFVBQUE7RUNDRjtFRENBO0lBQ0UsVUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLFVBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLFVBQUE7RUNERjtFREdBO0lBQ0UsVUFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLFVBQUE7RUNGRjtFRElBO0lBQ0UsVUFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDRSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLHdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWJhciB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xufVxuXG4ubWF0LXRyZWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5vZGUtY29udGVudCAubm9kZS1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5vZGUtY29udGVudCAubm9kZS1vcHRpb24tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC5ub2RlLW9wdGlvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5ub2RlLWNvbnRlbnQ6aG92ZXIgLm5vZGUtb3B0aW9uLWdyb3VwIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZG5kLWRyYWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRuZC1vdmVyIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LDY2LDY2LDAuMSk7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcbn1cblxuLmNvbnRleHQtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDRwdDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICB6LWluZGV4OiAxMDAwO1xuICBib3gtc2hhZG93OiAwIDAgMTJwdCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHQ7XG4gIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4xcyBlYXNlLW91dDtcbiAgb3BhY2l0eToxLjA7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi5jb250ZXh0LW1lbnUgaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uY29udGV4dC1tZW51IGRpdiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDAuNWVtIDJlbSAwLjVlbSAwLjc1ZW07XG4gIG1heC13aWR0aDogMThlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jb250ZXh0LW1lbnUgZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250ZXh0LW1lbnUgZGl2OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1ZW07XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogQW5pbWF0aW5vbnMgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxLjA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuMDtcbiAgfVxufVxuXG4uaXMtZmFkaW5nSW4ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMXMgZWFzZS1vdXQ7XG4gIG9wYWNpdHk6IDEuMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pcy1mYWRpbmdPdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjFzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4xcyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMC4wO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIi50YWItYmFyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDE2cHg7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubm9kZS1jb250ZW50IC5ub2RlLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ub2RlLWNvbnRlbnQgLm5vZGUtb3B0aW9uLWdyb3VwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubm9kZS1jb250ZW50IC5ub2RlLW9wdGlvbi1ncm91cCAubm9kZS1vcHRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ub2RlLWNvbnRlbnQ6aG92ZXIgLm5vZGUtb3B0aW9uLWdyb3VwIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmRuZC1kcmFnIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZG5kLW92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjEpO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xufVxuXG4uY29udGV4dC1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogNHB0O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IDAgMCAxMnB0IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDRwdDtcbiAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjFzIGVhc2Utb3V0O1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRleHQtbWVudSBociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5jb250ZXh0LW1lbnUgZGl2IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMC41ZW0gMmVtIDAuNWVtIDAuNzVlbTtcbiAgbWF4LXdpZHRoOiAxOGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbnRleHQtbWVudSBkaXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRleHQtbWVudSBkaXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1yaWdodDogMC43NWVtO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIEFuaW1hdGlub25zICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5pcy1mYWRpbmdJbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC4xcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4xcyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pcy1mYWRpbmdPdXQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjFzIGVhc2Utb3V0O1xuICBhbmltYXRpb246IGZhZGVPdXQgMC4xcyBlYXNlLW91dDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/navigation/explorer/explorer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/editor/navigation/explorer/explorer.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
const resource_1 = __webpack_require__(/*! ../../shared/models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
const pl_service_1 = __webpack_require__(/*! ../../shared/services/pl.service */ "./src/app/pages/editor/shared/services/pl.service.ts");
const opener_service_1 = __webpack_require__(/*! ../../shared/services/opener.service */ "./src/app/pages/editor/shared/services/opener.service.ts");
const editor_service_1 = __webpack_require__(/*! ../../shared/services/editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const resource_service_1 = __webpack_require__(/*! ../../shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const tree_component_1 = __webpack_require__(/*! src/app/shared/components/tree/tree.component */ "./src/app/shared/components/tree/tree.component.ts");
const overlay_1 = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
const portal_1 = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
const filters = __webpack_require__(/*! ../../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
let ExplorerComponent = class ExplorerComponent {
    constructor(pl, editor, opener, overlay, resources, notification, viewContainerRef) {
        this.pl = pl;
        this.editor = editor;
        this.opener = opener;
        this.overlay = overlay;
        this.resources = resources;
        this.notification = notification;
        this.viewContainerRef = viewContainerRef;
        this.subscriptions = [];
        /**
         * nodes options
         */
        this.nodeOptions = [
            { id: 'share', icon: 'fas fa-share', label: 'Share', enabled: filters.canBeTested, action: this.optionShare.bind(this) },
            { id: 'test', icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.optionTest.bind(this) },
            { id: 'load-pla', icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.optionLoad.bind(this) },
            { id: 'reload-pla', icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.optionReload.bind(this) },
            { id: 'new-file', icon: 'far fa-file', label: 'New File', enabled: filters.canAddChild, action: this.optionAddFile.bind(this) },
            { id: 'new-folder', icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddChild, action: this.optionAddFolder.bind(this) },
            { divider: true },
            // { id: 'copy', icon: 'fas fa-copy', label: 'Copy', enabled: _ => true, action: this.optionCopy.bind(this), forContextMenu: true  },
            // { id: 'paste', icon: 'fas fa-paste', label: 'Paste', enabled: node => this.toCopy && filters.isFolder(node), action: this.optionPaste.bind(this), forContextMenu: true  },
            { id: 'copy-path', icon: 'fas fa-link', label: 'Copy Path', enabled: _ => true, action: this.optionCopyPath.bind(this), forContextMenu: true },
            { divider: true },
            { id: 'rename', icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: this.optionRename.bind(this) },
            { id: 'delete', icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: this.optionDelete.bind(this) },
            { divider: true },
            { id: 'readonly', icon: 'fas fa-lock', label: 'Read Only', enabled: filters.isReadOnly, action: () => { }, forHover: true },
            { id: 'download', icon: 'fas fa-download', label: 'Download', enabled: filters.isFolder, action: this.optionDownload.bind(this) },
        ];
        this.treeOptions = {
            idField: 'path',
            selected: this.onSelected.bind(this),
            edited: this.onEdited.bind(this),
            contextmenu: (e) => {
                this.openContextMenu(e.event, e.node);
            }
        };
    }
    ngOnInit() {
        if (this.remote) {
            this.nodes = this.resources.getAll();
            this.subscriptions.push(this.resources.changed.subscribe(data => {
                this.nodes = data;
            }));
        }
        this.subscriptions.push(this.resources.focused.subscribe(data => {
            this.tree.onFocus(data);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    /**
     * Gets a value indicating whether the resource is draggrable
     * @param node the node.
     * 	@returns true only if the resource is not a root folder.
     */
    draggable(node) {
        return !filters.isRoot(node) && node.write;
    }
    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param node the node.
     * 	@returns true only if the resource is a folder.
     */
    droppable(node) {
        return filters.isFolder(node) && node.write;
    }
    /**
     * Handles refresh button click by retrieving resources from the server.
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirm = this.resources.findPredicate(e => e.changed && e.opened);
            try {
                if (!confirm || (yield this.notification.confirmAsync({
                    title: 'You will lose any unsaved changes after this. Are you sure ?',
                    okTitle: 'Refresh',
                    noTitle: 'Cancel'
                }))) {
                    if (yield this.editor.closeAll()) {
                        yield this.resources.refresh();
                    }
                    else {
                        this.notification.logError('an error occured while trying to close the editor groups');
                    }
                }
            }
            catch (error) {
                this.notification.logError(error);
            }
        });
    }
    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will save the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param e the dropped data.
     */
    onDropped(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const srcPath = e.src || e.file.name;
            const dstPath = e.dst;
            if (srcPath === dstPath) {
                return;
            }
            const srcName = paths_model_1.basename(srcPath);
            const src = this.resources.find(srcPath);
            const dst = this.resources.find(dstPath);
            if (src && src.parent === e.dst) {
                return;
            }
            const options = {
                title: `Are you sure you want to move '${srcName}' to '${dst.name}'?`,
                okTitle: 'Move',
                noTitle: 'Cancel'
            };
            try {
                const confirmed = yield this.notification.confirmAsync(options);
                if (confirmed) {
                    yield this.resources.move(src || e.file, dst);
                    this.tree.collapse(dst);
                    this.tree.expand(dst);
                }
            }
            catch (error) {
                this.notification.logError(error);
            }
        });
    }
    /**
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param e the node.
     */
    onEdited(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { node, event } = e;
            if (event.keyCode === 27) { // escape key
                this.tree.endEdit();
            }
            else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
                if (!e.editedText) {
                    this.tree.endEdit();
                    return;
                }
                try {
                    if (node.renaming) {
                        yield this.resources.rename(node, e.editedText);
                        this.tree.endEdit();
                    }
                    else {
                        node.name = e.editedText;
                        yield this.resources.create(node);
                        this.tree.endEdit();
                    }
                }
                catch (error) {
                    this.tree.endEdit();
                    this.notification.logError(error);
                }
            }
        });
    }
    onSelected(e) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (e.node.type === resource_1.ResourceTypes.Folder) {
                this.resources.focus(e.node);
            }
            else {
                yield this.opener.open(e.node.path);
            }
        });
    }
    optionDelete(node, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.preventDefault(event);
            try {
                const confirmed = yield this.notification.confirmAsync({
                    title: 'Are you sure you want to delete \'' + node.name + '\'?',
                    okTitle: 'Delete',
                    noTitle: 'Cancel'
                });
                if (confirmed) {
                    yield this.resources.delete(node);
                }
            }
            catch (error) {
                this.notification.logError(error);
            }
        });
    }
    optionDownload(node, event) {
        this.preventDefault(event);
        this.opener.openURL(this.resources.downloadURL(node));
    }
    optionAddFile(node, event) {
        this.preventDefault(event);
        this.tree.pushNode(node, resource_1.createResource(node, resource_1.ResourceTypes.File));
    }
    optionAddFolder(node, event) {
        this.preventDefault(event);
        this.tree.pushNode(node, resource_1.createResource(node, resource_1.ResourceTypes.Folder));
    }
    optionLoad(node, event) {
        this.preventDefault(event);
        this.pl.load(node).then(response => {
            this.notification.logInfo(response);
        }).catch(error => {
            this.notification.logError(error);
        });
    }
    optionReload(node, event) {
        this.preventDefault(event);
        const options = {
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
        this.notification.promptAsync(options).then((data) => {
            if (data.fields) {
                this.pl.reload(node, data.fields[0].value).then((response => {
                    this.notification.logInfo(response);
                })).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }
    optionRename(node, event) {
        this.preventDefault(event);
        this.tree.renameNode(node);
    }
    optionTest(node, event) {
        this.preventDefault(event);
        this.opener.openURL(this.resources.testURL(node));
    }
    optionCopyPath(node, event) {
        this.preventDefault(event);
        this.editor.copyToClipboard(node.path);
        this.notification.snack('Copied to clipboard!', {
            duration: 3000
        });
    }
    optionShare(node, event) {
        this.preventDefault(event);
        this.editor.copyToClipboard(this.resources.testURL(node));
        this.notification.snack('Copied to clipboard!', {
            duration: 3000
        });
    }
    openContextMenu(event, node) {
        this.preventDefault(event);
        const { x, y } = event;
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo({ x, y })
            .withPositions([
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
            }
        ]);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.overlayRef.attach(new portal_1.TemplatePortal(this.contextmenu, this.viewContainerRef, {
            $implicit: node
        }));
        setTimeout(() => {
            this.contextMenuSubscription = rxjs_1.fromEvent(document, 'click')
                .pipe(operators_1.filter(e => {
                const clickTarget = e.target;
                return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
            }), operators_1.take(1)).subscribe(() => this.closeContextMenu());
        }, 500);
    }
    closeContextMenu() {
        // tslint:disable-next-line: no-unused-expression
        this.contextMenuSubscription && this.contextMenuSubscription.unsubscribe();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
        this.closeContextMenu();
    }
};
ExplorerComponent.ctorParameters = () => [
    { type: pl_service_1.PLService },
    { type: editor_service_1.EditorService },
    { type: opener_service_1.OpenerService },
    { type: overlay_1.Overlay },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService },
    { type: core_1.ViewContainerRef }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Array)
], ExplorerComponent.prototype, "nodes", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], ExplorerComponent.prototype, "showHeader", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Boolean)
], ExplorerComponent.prototype, "remote", void 0);
tslib_1.__decorate([
    core_1.ViewChild(tree_component_1.TreeComponent, { static: true }),
    tslib_1.__metadata("design:type", tree_component_1.TreeComponent)
], ExplorerComponent.prototype, "tree", void 0);
tslib_1.__decorate([
    core_1.ViewChild('contextmenu', { static: true }),
    tslib_1.__metadata("design:type", core_1.TemplateRef)
], ExplorerComponent.prototype, "contextmenu", void 0);
ExplorerComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'explorer',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./explorer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/explorer/explorer.component.html")).default,
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./explorer.component.scss */ "./src/app/pages/editor/navigation/explorer/explorer.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [pl_service_1.PLService,
        editor_service_1.EditorService,
        opener_service_1.OpenerService,
        overlay_1.Overlay,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService,
        core_1.ViewContainerRef])
], ExplorerComponent);
exports.ExplorerComponent = ExplorerComponent;


/***/ }),

/***/ "./src/app/pages/editor/navigation/git/git.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/editor/navigation/git/git.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation-content {\n  height: 100%;\n  overflow: auto;\n}\n\n.mat-accordion .mat-expansion-panel {\n  background-color: transparent;\n}\n\n.line {\n  display: flex;\n  height: 32px;\n  align-items: center;\n  padding-right: 8px;\n  overflow: visible;\n}\n\n.line.selected {\n  border-right: 1px solid;\n}\n\n.line.clickable .line-title {\n  cursor: pointer;\n}\n\n.line-title {\n  font-size: 1em;\n  margin-right: 8px;\n}\n\n.line-title.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -30px;\n}\n\n.line-title.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: 0;\n}\n\n.line-subtitle {\n  margin-right: 8px;\n}\n\n.commit, .clone {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vZ2l0L2dpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vZ2l0L2dpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDSTtFQUNJLHVCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FER0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFSTtFQUNJLFlBQUE7QUNBUjs7QURHSTtFQUNJLE1BQUE7QUNEUjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0b3IvbmF2aWdhdGlvbi9naXQvZ2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbiAgICB9XG4gICAgJi5jbGlja2FibGUgLmxpbmUtdGl0bGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubGluZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICAmLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG59XG5cbi5saW5lLXN1YnRpdGxlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNvbW1pdCwgLmNsb25lIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuIiwiLm5hdmlnYXRpb24tY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLmxpbmUuc2VsZWN0ZWQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbn1cbi5saW5lLmNsaWNrYWJsZSAubGluZS10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpbmUtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubGluZS10aXRsZS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTMwcHg7XG59XG4ubGluZS10aXRsZS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IDA7XG59XG5cbi5saW5lLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jb21taXQsIC5jbG9uZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/editor/navigation/git/git.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/editor/navigation/git/git.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const git_service_1 = __webpack_require__(/*! ../../shared/services/git.service */ "./src/app/pages/editor/shared/services/git.service.ts");
const resource_service_1 = __webpack_require__(/*! ../../shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const opener_service_1 = __webpack_require__(/*! ../../shared/services/opener.service */ "./src/app/pages/editor/shared/services/opener.service.ts");
const editor_service_1 = __webpack_require__(/*! ../../shared/services/editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const filters_1 = __webpack_require__(/*! ../../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
let GitComponent = class GitComponent {
    constructor(git, opener, editor, resources, notification) {
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
    ngOnInit() {
        this.options.push({ label: 'Open File', enabled: (item) => this.canOpen(item), action: (item) => {
                this.open(item);
            } });
        this.options.push({ label: 'Git Add', enabled: (item) => this.canAdd(item), action: (item) => {
                this.add(item);
            } });
        this.options.push({ label: 'Git Checkout', enabled: (item) => this.canCheckout(item), action: (item) => {
                this.checkout(item);
            } });
    }
    ngOnDestroy() {
    }
    /** used inside the html template to checks if a repo is selected */
    isSelection(item) {
        return this.selection && this.selection.url === item.url;
    }
    /**
     * changes the selected repository.
     * @param item the new seleted repository.
     */
    changeSelection(item) {
        this.selection = item;
    }
    /** used inside html template with *ngFor to keep track of the repository item */
    trackRepo(_index, item) {
        return item.url;
    }
    /** used inside html template with *ngFor to keep track of the repository item */
    trackChange(_index, item) {
        return item.path;
    }
    /**
     * gets a value indicating whether git add command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canAdd(item) {
        return item.type.includes('M') || !item.type.includes('D');
    }
    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canCheckout(item) {
        return item.type !== '??' && !item.type.includes('D');
    }
    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    canOpen(item) {
        return !item.isdir && !item.type.includes('D');
    }
    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    open(item) {
        if (this.canOpen(item)) {
            this.opener.open(item.path, {
                diffMode: true
            });
        }
    }
    /**
     * executes git add command on the given repository item.
     *	@param item the repository item.
     */
    add(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (yield this.git.add(item)) {
                this.refresh();
                return true;
            }
            return false;
        });
    }
    /**
     * executes git push command on the given repository item
     *	@param item the repository item.
     */
    push(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fields = [
                { type: 'text', placeholder: 'Login', required: false, value: '' },
                { type: 'password', placeholder: 'Passsword', required: false, value: '' },
            ];
            const options = {
                title: 'Push',
                fields: fields
            };
            const response = yield this.notification.promptAsync(options);
            if (response) {
                const login = response.fields[0].value;
                const password = response.fields[1].value;
                return this.git.push(item, login, password);
            }
            return false;
        });
    }
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    pull(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.notification.confirmAsync({
                title: 'Please confirm your action',
                message: 'This action will pull the latest changes from the remote server and close the opened editors!',
                okTitle: 'Pull',
                noTitle: 'Cancel'
            });
            try {
                if (confirmed) {
                    const success = yield this.git.pull(item);
                    if (success) {
                        if (yield this.editor.closeAll()) {
                            const refreshed = yield this.resources.refresh();
                            if (refreshed) {
                                this.refresh();
                                return true;
                            }
                            return false;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
            catch (error) {
                this.notification.logError(error);
                return false;
            }
        });
    }
    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    status(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.git.status(item);
        });
    }
    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    checkout(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.notification.confirmAsync({
                title: 'Please confirm your action',
                message: 'This action will reset all your local changes up to your last commit and close the opened editors!',
                okTitle: 'Checkout',
                noTitle: 'Cancel'
            });
            try {
                if (confirmed) {
                    const success = yield this.git.checkout(item);
                    if (success) {
                        if (yield this.editor.closeAll()) {
                            const refreshed = yield this.resources.refresh();
                            if (refreshed) {
                                const resource = yield this.resources.find(item.path);
                                if (resource && filters_1.isFile(resource)) {
                                    this.opener.open(resource.path, {
                                        diffMode: true
                                    });
                                }
                                this.refresh();
                                return true;
                            }
                            return false;
                        }
                        return false;
                    }
                    return false;
                }
            }
            catch (error) {
                this.notification.logError(error);
                return false;
            }
        });
    }
    /**
     * executes git clone command.
     * - if the command succeed, the resources of the editor will be refreshed.
     */
    clone() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fields = [
                { type: 'url', placeholder: 'Url', required: true, value: '' },
                { type: 'text', placeholder: 'Username', required: false, value: '' },
                { type: 'password', placeholder: 'Passsword', required: false, value: '' },
            ];
            const options = {
                title: 'Clone repository',
                fields: fields
            };
            const response = yield this.notification.promptAsync(options);
            try {
                if (response) {
                    if (!!this.resources.findPredicate(item => item.changed)) {
                        const confirmOptions = {
                            title: 'Please confirm your action',
                            message: 'This action will create new directory and close the opened editors!',
                            okTitle: 'Clone',
                            noTitle: 'Cancel'
                        };
                        if (!(yield this.notification.confirmAsync(confirmOptions))) {
                            return false;
                        }
                    }
                    const url = response.fields[0].value;
                    const username = response.fields[1].value;
                    const password = response.fields[2].value;
                    const success = yield this.git.clone(this.resources.home, url, username, password);
                    if (success) {
                        if ((yield this.editor.closeAll()) && (yield this.resources.refresh())) {
                            this.refresh();
                            return true;
                        }
                        return false;
                    }
                    return false;
                }
            }
            catch (error) {
                this.notification.logError(error);
                return false;
            }
        });
    }
    /**
     * executes git commit command on the selected repository with the
     * value of commit message input form if enter key is pressed.
     *	@param event the keyboard event of the input.
     */
    commit(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            if (this.commitMessage) {
                this.git.commit(this.selection, this.commitMessage).then((success) => {
                    if (success) {
                        this.commitMessage = '';
                        this.selection.changes = this.selection.changes.filter(e => !e.type.includes('M'));
                    }
                });
            }
            else {
                this.notification.logError('commit message is required');
            }
        }
    }
    /**
     * gets the repositories
     * */
    repositories() {
        return this.git.repos;
    }
    /**
     * gets a value indicating whether a git command is running
     * */
    runningTask() {
        return this.git.runningTask;
    }
    hasOption(item) {
        return this.options.some(option => option.enabled(item));
    }
    refresh() {
        if (this.selection) {
            this.selection = this.repositories().find(item => {
                return item.url === this.selection.url;
            }) || this.repositories().find(_ => true);
        }
    }
};
GitComponent.ctorParameters = () => [
    { type: git_service_1.GitService },
    { type: opener_service_1.OpenerService },
    { type: editor_service_1.EditorService },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
GitComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'git',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./git.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/git/git.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./git.component.scss */ "./src/app/pages/editor/navigation/git/git.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [git_service_1.GitService,
        opener_service_1.OpenerService,
        editor_service_1.EditorService,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], GitComponent);
exports.GitComponent = GitComponent;


/***/ }),

/***/ "./src/app/pages/editor/navigation/navigation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/editor/navigation/navigation.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 0 0 0;\n  background-color: var(--activityBar-background);\n  color: var(--activityBar-foreground);\n  width: 50px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.nav-action {\n  cursor: pointer;\n  width: 36px;\n  height: 36px;\n  margin-bottom: 16px;\n  overflow: visible;\n}\n\n.nav-action .fas, .nav-action .fab {\n  width: 36px;\n  height: 36px;\n  font-size: 36px;\n  text-align: center;\n}\n\n.mat-badge-content {\n  width: unset !important;\n  height: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRElBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZpdHlCYXItYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IHZhcigtLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2LWFjdGlvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuXG4gICAgLmZhcywgLmZhYiB7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3Rpdml0eUJhci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWFjdGl2aXR5QmFyLWZvcmVncm91bmQpO1xuICB3aWR0aDogNTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXYtYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5uYXYtYWN0aW9uIC5mYXMsIC5uYXYtYWN0aW9uIC5mYWIge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/editor/navigation/navigation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/navigation/navigation.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const git_service_1 = __webpack_require__(/*! ../shared/services/git.service */ "./src/app/pages/editor/shared/services/git.service.ts");
const navigation_service_1 = __webpack_require__(/*! ./navigation.service */ "./src/app/pages/editor/navigation/navigation.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const settings_service_1 = __webpack_require__(/*! ../shared/services/settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
const settings_1 = __webpack_require__(/*! ../shared/models/settings */ "./src/app/pages/editor/shared/models/settings.ts");
let NavigationComponent = class NavigationComponent {
    constructor(git, settings, navigation, notification) {
        this.git = git;
        this.settings = settings;
        this.navigation = navigation;
        this.notification = notification;
        this.size = 25;
        this.index = 0;
    }
    get gitBadge() {
        return this.git.size;
    }
    get infosBadge() {
        return this.notification.size;
    }
    didTapButton(index) {
        if (index === this.index) {
            this.size = this.size === 25 ? 0 : 25;
        }
        this.index = index;
    }
    didTapExplorer() {
        this.didTapButton(0);
    }
    didTapSearch() {
        this.didTapButton(1);
    }
    didTapGit() {
        this.didTapButton(2);
    }
    didTapInfos() {
        this.navigation.infos.next();
    }
    didTapComponents() {
        const url = window.location.origin + '/components';
        window.open(url, '_blank');
    }
    didTapTheme() {
        const theme = this.settings.get(settings_1.Settings.EDITOR_KEY, 'theme');
        const newTheme = theme.value === 'light-theme' ? 'dark-theme' : 'light-theme';
        this.settings.set(settings_1.Settings.EDITOR_KEY, 'theme', newTheme);
    }
    didTapSettings() {
        this.navigation.settings.next();
    }
};
NavigationComponent.ctorParameters = () => [
    { type: git_service_1.GitService },
    { type: settings_service_1.SettingsService },
    { type: navigation_service_1.NavigationService },
    { type: notification_service_1.NotificationService }
];
NavigationComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'navigation',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/navigation.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/pages/editor/navigation/navigation.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [git_service_1.GitService,
        settings_service_1.SettingsService,
        navigation_service_1.NavigationService,
        notification_service_1.NotificationService])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;


/***/ }),

/***/ "./src/app/pages/editor/navigation/navigation.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editor/navigation/navigation.service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
let NavigationService = class NavigationService {
    constructor() {
        this.infos = new rxjs_1.Subject();
        this.settings = new rxjs_1.Subject();
    }
};
NavigationService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' })
], NavigationService);
exports.NavigationService = NavigationService;


/***/ }),

/***/ "./src/app/pages/editor/navigation/search/search.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/editor/navigation/search/search.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation-content {\n  padding: 0 8px;\n  height: calc(100% - 36px);\n  overflow: auto;\n}\n\n.search {\n  width: 90%;\n  margin: 0 16px;\n}\n\n.result {\n  padding: 0 16px;\n  font-size: 1.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL25hdmlnYXRpb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zZWFyY2gge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5yZXN1bHQge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBmb250LXNpemU6IDEuMTtcbn1cbiIsIi5uYXZpZ2F0aW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnJlc3VsdCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZm9udC1zaXplOiAxLjE7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/navigation/search/search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/editor/navigation/search/search.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const resource_service_1 = __webpack_require__(/*! ../../shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const resource_1 = __webpack_require__(/*! ../../shared/models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
let SearchComponent = class SearchComponent {
    constructor(resources) {
        this.resources = resources;
        this.dataSource = [];
        this.entries = [];
        this.query = '';
        this.size = 0;
        this.empty = false;
    }
    ngOnInit() {
        this.dataSource = this.resources.findAll((r => {
            return true;
        }));
    }
    search(event) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this.querying = true;
            this.query = this.query.trim().toLocaleLowerCase();
            if (this.query) {
                this.entries = this.dataSource.filter((e => {
                    const index = e.name.toLocaleLowerCase().indexOf(this.query);
                    return e.type === resource_1.ResourceTypes.File && index === 0;
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
    }
};
SearchComponent.ctorParameters = () => [
    { type: resource_service_1.ResourceService }
];
SearchComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'search',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/navigation/search/search.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/editor/navigation/search/search.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [resource_service_1.ResourceService])
], SearchComponent);
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/pages/editor/quick-open/quick-open.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/editor/quick-open/quick-open.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#editor-overlay-quickOpenWidget {\n  z-index: 100000;\n  left: 0;\n  right: 0;\n  width: 40%;\n  margin: auto;\n  position: absolute;\n  top: 36px;\n  padding: 0 4px;\n}\n#editor-overlay-quickOpenWidget input {\n  width: 100%;\n  height: 44px;\n  margin: 0 0 0 16px;\n  padding: 0.1rem 0.3rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.15rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n#editor-overlay-quickOpenWidget input:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.entry-icon {\n  font-size: 14px;\n}\n.entry-name {\n  font-size: 14px;\n}\n.entry-path {\n  font-size: 10px;\n}\ndiv.mat-autocomplete-panel {\n  height: auto;\n  max-height: 400px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3F1aWNrLW9wZW4vcXVpY2stb3Blbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL3F1aWNrLW9wZW4vcXVpY2stb3Blbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQ0VSO0FERFE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnREFBQTtBQ0daO0FERUE7RUFDSSxlQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL3F1aWNrLW9wZW4vcXVpY2stb3Blbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlZGl0b3Itb3ZlcmxheS1xdWlja09wZW5XaWRnZXQge1xuICAgIHotaW5kZXg6IDEwMDAwMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2cHg7XG4gICAgcGFkZGluZzogMCA0cHg7XG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lbnRyeS1pY29uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnRyeS1uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnRyeS1wYXRoIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbmRpdi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiIsIiNlZGl0b3Itb3ZlcmxheS1xdWlja09wZW5XaWRnZXQge1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNnB4O1xuICBwYWRkaW5nOiAwIDRweDtcbn1cbiNlZGl0b3Itb3ZlcmxheS1xdWlja09wZW5XaWRnZXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDAgMCAwIDE2cHg7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4xNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuI2VkaXRvci1vdmVybGF5LXF1aWNrT3BlbldpZGdldCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuXG4uZW50cnktaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmVudHJ5LW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnRyeS1wYXRoIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5kaXYubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/quick-open/quick-open.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/quick-open/quick-open.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
const resource_1 = __webpack_require__(/*! ../shared/models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
const opener_service_1 = __webpack_require__(/*! ../shared/services/opener.service */ "./src/app/pages/editor/shared/services/opener.service.ts");
const resource_service_1 = __webpack_require__(/*! ../shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
__webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm2015/add/operator/debounceTime.js");
let QuickOpenComponent = class QuickOpenComponent {
    constructor(opener, resources) {
        this.opener = opener;
        this.resources = resources;
        this.closed = new core_1.EventEmitter();
        this.form = new forms_1.FormControl();
        this.data = this.resources.findAll(resource => {
            return resource.type === resource_1.ResourceTypes.File;
        });
        this.$entries = this.form
            .valueChanges
            .debounceTime(200)
            .pipe(operators_1.startWith(''), operators_1.map(query => query ? this.filter(query) : this.data.slice()));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 200);
    }
    onBlured() {
        this.closed.emit();
    }
    onSelected(e) {
        this.closed.emit();
        this.opener.open(e.option.value.path);
    }
    filter(query) {
        query = (query || '').toLowerCase();
        return this.data.filter(item => {
            return item.name.toLowerCase().indexOf(query) === 0;
        });
    }
};
QuickOpenComponent.ctorParameters = () => [
    { type: opener_service_1.OpenerService },
    { type: resource_service_1.ResourceService }
];
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], QuickOpenComponent.prototype, "closed", void 0);
tslib_1.__decorate([
    core_1.ViewChild('input', { static: true }),
    tslib_1.__metadata("design:type", core_1.ElementRef)
], QuickOpenComponent.prototype, "input", void 0);
QuickOpenComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'quick-open',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./quick-open.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/quick-open/quick-open.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./quick-open.component.scss */ "./src/app/pages/editor/quick-open/quick-open.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [opener_service_1.OpenerService, resource_service_1.ResourceService])
], QuickOpenComponent);
exports.QuickOpenComponent = QuickOpenComponent;


/***/ }),

/***/ "./src/app/pages/editor/shared/directives/icon.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/editor/shared/directives/icon.directive.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const resource_service_1 = __webpack_require__(/*! ../services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const theme_icons_1 = __webpack_require__(/*! ../../../../shared/themes/theme.icons */ "./src/app/shared/themes/theme.icons.ts");
let IconDirective = class IconDirective {
    constructor(el, resources, changes) {
        this.el = el;
        this.resources = resources;
        this.changes = changes;
    }
    ngOnInit() {
        this.el.nativeElement.classList.add('resource-icon');
        this.subscription = this.resources.focused.subscribe(focus => {
            if (focus && this.resource && focus.path === this.resource.path) {
                this.resource = focus;
                this.refresh();
            }
        });
        this.refresh();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const native = this.el.nativeElement;
            native.src = yield theme_icons_1.iconPath(this.resource);
            native.style.width = '16px';
            native.style.height = '16px';
            native.style.marginRight = '4px';
        });
    }
};
IconDirective.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: resource_service_1.ResourceService },
    { type: core_1.ChangeDetectorRef }
];
tslib_1.__decorate([
    core_1.Input('icon'),
    tslib_1.__metadata("design:type", Object)
], IconDirective.prototype, "resource", void 0);
IconDirective = tslib_1.__decorate([
    core_1.Directive({
        // tslint:disable-next-line: directive-selector
        selector: '[icon]'
    }),
    tslib_1.__metadata("design:paramtypes", [core_1.ElementRef,
        resource_service_1.ResourceService,
        core_1.ChangeDetectorRef])
], IconDirective);
exports.IconDirective = IconDirective;


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
                    const result = {
                        links: []
                    };
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
                                    result.links.push({
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
                    return result;
                },
                resolveLink: function (link, _token) {
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
            {
                provideCompletionItems: (model, position) => {
                    // 10 is an arbitrary number to provide completion only for line starts.
                    if (position.column > 10) {
                        return null;
                    }
                    // const line = model.getLineContent(position.lineNumber);
                    const suggestions = Object.keys(PremierLangage_1.BUILT_IN).map(name => {
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
                            detail: PremierLangage_1.BUILT_IN[name],
                            insertText: `${name} == #|${embed}| \n\n==`,
                            kind: monaco.languages.CompletionItemKind.Snippet,
                        };
                    });
                    return { suggestions };
                },
            },
            {
                triggerCharacters: ['c-'],
                provideCompletionItems: (model, position) => {
                    // 10 is an arbitrary number to provide completion only for line starts.
                    if (position.column > 10) {
                        return null;
                    }
                    // const line = model.getLineContent(position.lineNumber);
                    const suggestions = Object.keys(PremierLangage_1.COMPONENTS).map(name => {
                        const component = PremierLangage_1.COMPONENTS[name];
                        return {
                            label: name,
                            detail: '',
                            insertText: component.snippet,
                            kind: monaco.languages.CompletionItemKind.Snippet
                        };
                    });
                    return {
                        suggestions,
                    };
                },
            },
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
                        return { suggestions };
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
                        return { suggestions };
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
PremierLangage.COMPONENTS = {
    'c-automaton-editor': {
        snippet: `
component =: AutomatonEditor
`,
    },
    'c-automaton-drawer': {
        snippet: `
component =: AutomatonDrawer
component.automaton ==
#states
s0
s1
#initial
s0
#accepting
s1
#alphabet
a
b
#transitions
s0:a>s1
s1:b>s1
==
`,
    },
    'c-checkbox-group': {
        snippet: `
component =: CheckboxGroup
component.items %=
[
    { "id": "A", "content": "A" },
    { "id": "B", "content": "B" }
]
==
`,
    },
    'c-code-editor': {
        snippet: `
component =: CodeEditor
component.language = python
component.code ==
TYPE YOUR CODE HERE
==
`,
    },
    'c-drag-drop': {
        snippet: `
drag =: DragDrop
drag.cid = 'DRAG'
drag.content = Drag Me

drop =: DragDrop
drop.cid = 'DROP'
drop.droppable % true
`,
    },
    'c-input': {
        snippet: `
component =: Input
component.type = text
`,
    },
    'c-match-list': {
        snippet: `
component =: MatchList
component.items %=
[
    { id: 'S1', content: 'S1', target: false, source: true },
    { id: 'S2', content: 'S2', target: false, source: true },
    { id: 'S3', content: 'S3', target: false, source: true },

    { id: 'T1', content: 'T1', target: true, source: false },
    { id: 'T2', content: 'T2', target: true, source: false },
    { id: 'T3', content: 'T3', target: true, source: false },
]
==

`,
        description: '...',
    },
    'c-math-input': {
        snippet: `
component =: MathInput
`,
    },
    'c-math-drawer': {
        snippet: `
component =: MathDrawer
`,
    },
    'c-matrix': {
        snippet: `
component =: Matrix
component.matrix %=
[
    [{ "value": 0 }, { "value": 0 }],
    [{ "value": 0 }, { "value": 0 }]
]
==
`,
    },
    'c-radio-group': {
        snippet: `
component =: RadioGroup
component.items %=
[
    { "id": "R1", "content": "R1" },
    { "id": "R2", "content": "R2" }
]
==
`,
    },
    'c-sort-list': {
        snippet: `
component =: SortList
component.items %=
[
    { "id": "A", "content": "A" },
    { "id": "B", "content": "B" }
]
==
`,
    },
    'c-text': {
        snippet: `
component =: Text
component.text ==
YOUR TEXT HERE
==
component.selectable = true
`,
    },
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

/***/ "./src/app/pages/editor/shared/models/editor-actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editor-actions.ts ***!
  \**************************************************************/
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

/***/ "./src/app/pages/editor/shared/models/editor-groups.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editor-groups.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const drag_drop_1 = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
const editors_1 = __webpack_require__(/*! ./editors */ "./src/app/pages/editor/shared/models/editors.ts");
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
        return this.someEditor(e => e.type() === editors_1.EditorTypes.Preview);
    }
    someEditor(predicate) {
        return this._editors.some(predicate);
    }
    someResource(predicate) {
        return this._resources.some(predicate);
    }
    containsEditor(editor) {
        return this.someEditor(e => e.id() === editor.id());
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
            else if (!this.someResource(e => e.path === resource.path)) {
                this._resources.push(resource);
            }
            resource.opened = true;
            return yield this._editorService.focusGroup(this);
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
            return this._editorService.saveContent(resource);
        });
    }
    saveAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (const resource of this._resources) {
                if (!(yield this.save(resource))) {
                    return false;
                }
            }
            return true;
        });
    }
    close(resource, confirm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const changed = this.closeGuard(resource);
            const options = {
                title: 'Do you want to close \'' + resource.name + '\'?',
                message: 'Your changes will be lost if you don\'t save them.',
                okTitle: 'Don\'t Save',
                noTitle: 'Cancel'
            };
            if (!(confirm && changed) || (yield this.confirm(options))) {
                if (changed) {
                    resource.content = resource.savedContent;
                    resource.changed = false;
                }
                if (confirm) {
                    resource.meta.previewData = undefined;
                }
                return yield this.removeResource(resource);
            }
            return false;
        });
    }
    closeAll(confirm) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const changed = this.someResource(tab => this.closeGuard(tab));
            const options = {
                title: 'Do you want to close the files ?',
                message: 'Your changes will be lost if you don\'t save them.',
                okTitle: 'Don\'t Save',
                noTitle: 'Cancel'
            };
            if (!(confirm && changed) || (yield this.confirm(options))) {
                while (this._resources.length > 0) {
                    if (!(yield this.close(this._resources[0], false))) {
                        return false;
                    }
                }
            }
            return true;
        });
    }
    closeSaved() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            while (this.someResource(e => !e.changed)) {
                for (let i = 0; i < this._resources.length; i++) {
                    if (!this._resources[i].changed) {
                        if (!(yield this.close(this._resources[i]))) {
                            return false;
                        }
                    }
                }
            }
            return true;
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
        return !!this._activeEditor && this._activeEditor.type() === type;
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
        return editor.id();
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
        for (const item of editors_1.INSTANTIATORS) {
            if (item.condition(resource)) {
                const editor = item.create(this, resource);
                this._editors.push(editor);
                return editor;
            }
        }
        return undefined;
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
                return this.empty() && (yield this._editorService.disposeGroup(this)) || true;
            }
            return false;
        });
    }
}
EditorGroup.NEXT_ID = 0;
exports.EditorGroup = EditorGroup;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/editors.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editor/shared/models/editors.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const filters_1 = __webpack_require__(/*! ./filters */ "./src/app/pages/editor/shared/models/filters.ts");
const editor_actions_1 = __webpack_require__(/*! ./editor-actions */ "./src/app/pages/editor/shared/models/editor-actions.ts");
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
    id() {
        return this._id;
    }
    group() {
        return this._group;
    }
    focus(focused) {
        this._focused = focused;
    }
    open(resource, options) {
        this._resource = resource;
        this.opened.next(resource);
    }
    hasFocus() {
        return this._focused;
    }
    resource() {
        return this._resource;
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
    type() {
        return EditorTypes.Code;
    }
    actions() {
        return [
            this.preview(),
            this.onDiff(),
            this.offDiff(),
            this.splitEditor()
        ];
    }
    open(resource, options) {
        this.diffEditing = options && options.diffMode;
        super.open(resource, options);
    }
    split() {
        this.group().editorService().open(this.resource(), {
            openToSide: true
        });
    }
    canOpen(resource) {
        return openAsCode(resource);
    }
    preview() {
        return {
            id: editor_actions_1.EditorActions.preview, icon: 'fas fa-play', tooltip: 'Preview ⌘Enter',
            condition: filters_1.canBePreviewed, invoke: (item) => {
                this.previewRequested.next(item);
            }
        };
    }
    onDiff() {
        const that = this;
        return {
            id: editor_actions_1.EditorActions.onDiff, icon: 'fas fa-eye', tooltip: 'Open Changes',
            condition: (item) => {
                return filters_1.isRepo(item) && !that.diffEditing;
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
            id: editor_actions_1.EditorActions.offDiff, icon: 'fas fa-eye-slash', tooltip: 'Close Changes',
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
            id: editor_actions_1.EditorActions.splitEditor, icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: () => {
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
    type() {
        return EditorTypes.Image;
    }
    actions() {
        return [
            {
                id: editor_actions_1.EditorActions.zoomInImage, icon: 'fas fa-plus', tooltip: 'Zoom In',
                condition: (_) => true, invoke: (_) => {
                    this.zoomIn();
                }
            },
            {
                id: editor_actions_1.EditorActions.zoomOutImage, icon: 'fas fa-minus', tooltip: 'Zoom Out',
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
    constructor(group, document) {
        super(group, document);
    }
    type() {
        return EditorTypes.Preview;
    }
    actions() {
        return [];
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
    return !openAsPreview(resource) && resource.meta && resource.meta.image && !filters_1.isSVG(resource);
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

/***/ "./src/app/pages/editor/shared/models/filters.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/editor/shared/models/filters.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const resource_1 = __webpack_require__(/*! ./resource */ "./src/app/pages/editor/shared/models/resource.ts");
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
    return !!item && item.type === resource_1.ResourceTypes.Folder;
}
exports.isFolder = isFolder;
/**
 * Gets a value indicating whether the resource is a file.
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function isFile(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return !!item && item.type === resource_1.ResourceTypes.File;
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
    return canWrite(item) && isFile(item) && (isPLTP(item) || isPLA(item));
}
exports.canBeLoaded = canBeLoaded;
/**
 * Gets a value indicating whether the resource can be reloaded (PLTP only).
 * @param item the resource
 * @throws {ReferenceError} if item is null
 */
function canBeReloaded(item) {
    assert_model_1.Asserts.requireNonNull(item, 'param "item" is required');
    return canWrite(item) && isFile(item) && (isPLTP(item) || isPLA(item));
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

/***/ "./src/app/pages/editor/shared/models/monaco.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/editor/shared/models/monaco.ts ***!
  \******************************************************/
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

/***/ "./src/app/pages/editor/shared/models/resource.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/editor/shared/models/resource.ts ***!
  \********************************************************/
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
function createResource(parent, type) {
    assert_model_1.Asserts.assert(parent.type === 'folder', 'resource.type must be folder');
    assert_model_1.Asserts.assert(parent.children.every(e => !e.renaming), 'cannot edit multiple resources');
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
exports.createResource = createResource;


/***/ }),

/***/ "./src/app/pages/editor/shared/models/settings.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/editor/shared/models/settings.ts ***!
  \********************************************************/
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

/***/ "./src/app/pages/editor/shared/pipes/icon.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/editor/shared/pipes/icon.pipe.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const theme_icons_1 = __webpack_require__(/*! ../../../../shared/themes/theme.icons */ "./src/app/shared/themes/theme.icons.ts");
let IconPipe = class IconPipe {
    transform(input) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield theme_icons_1.iconPath(input);
        });
    }
};
IconPipe = tslib_1.__decorate([
    core_1.Pipe({ name: 'icon' })
], IconPipe);
exports.IconPipe = IconPipe;


/***/ }),

/***/ "./src/app/pages/editor/shared/pipes/nicify-name.pipe.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editor/shared/pipes/nicify-name.pipe.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let NicifyNamePipe = class NicifyNamePipe {
    transform(v, nicifyProperty) {
        if (!v) {
            return v;
        }
        if (!nicifyProperty) {
            v = v.split('.').pop();
        }
        const builder = [];
        let index = 0;
        let c;
        const length = v.length;
        while (index < length) {
            c = v[index];
            // tslint:disable-next-line: triple-equals
            const isLetter = c.toLowerCase() != c.toUpperCase();
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
    }
};
NicifyNamePipe = tslib_1.__decorate([
    core_1.Pipe({ name: 'nicifyName' })
], NicifyNamePipe);
exports.NicifyNamePipe = NicifyNamePipe;


/***/ }),

/***/ "./src/app/pages/editor/shared/pipes/path.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/editor/shared/pipes/path.pipe.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
let PathPipe = class PathPipe {
    transform(v) {
        if (!v) {
            return v;
        }
        const components = v.split('/');
        if (components[0] === 'lib') {
            return v;
        }
        components[0] = 'home';
        return components.join('/');
    }
};
PathPipe = tslib_1.__decorate([
    core_1.Pipe({ name: 'path' })
], PathPipe);
exports.PathPipe = PathPipe;


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
const filters_1 = __webpack_require__(/*! ../models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const task_service_1 = __webpack_require__(/*! ./task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
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
                if (!filters_1.isPL(resource)) {
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
                    const params = new http_1.HttpParams().set('path', resource.path);
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
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const editor_groups_1 = __webpack_require__(/*! ../models/editor-groups */ "./src/app/pages/editor/shared/models/editor-groups.ts");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const resource_service_1 = __webpack_require__(/*! ./resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const filters_1 = __webpack_require__(/*! ../models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
class AbstractEditorService {
    constructor() {
        this.events = {};
        this.subscriptions = [];
        this.groups = Object.create(null);
        /** invoked each time a (focus | open | close) event is raised */
        this.changed = new rxjs_1.Subject();
    }
    on(eventName, action) {
        const subject = this.events[eventName] || (this.events[eventName] = new rxjs_1.Subject());
        return subject.subscribe(e => {
            action(e);
        });
    }
    fire(eventName, data) {
        const e = this.events[eventName];
        e.next(data);
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
                if (!(yield groups[0].closeAll())) {
                    return false;
                }
                groups = this.listGroups();
            }
            return true;
        });
    }
    closePreview() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.previewGroup) {
                return Promise.resolve(true);
            }
            return this.previewGroup.closeAll();
        });
    }
    focusGroup(group) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let result = true;
            this.disposePreview();
            const active = group.activeResource;
            if (active) {
                if (group.isPreviewGroup()) {
                    this.previewGroup = group;
                }
                else if (active.meta && active.meta.previewData) {
                    result = yield this.open(active, {
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
            return result;
        });
    }
    disposeGroup(group) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.findGroup(group.id)) {
                throw new Error(`The group '${group.id}' is not found`);
            }
            this.disposePreview();
            if (group.focused()) {
                const next = this.listGroups().find(g => !filters_1.compareGroup(g, group));
                if (next) {
                    yield this.focusGroup(next);
                }
            }
            delete this.groups[group.id];
            this.changed.next(this.listGroups());
            return true;
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
                    group = new editor_groups_1.EditorGroup(this);
                }
                else {
                    groups = groups.filter(g => !g.isPreviewGroup()); // remove preview group
                    // tslint:disable-next-line: max-line-length
                    group = groups.find(g => g.focused() && g.someResource(r => r.path === resource.path)) // find focused that contains the resource
                        || groups.find(g => g.focused()) // find focused
                        || groups.find(_ => true) || new editor_groups_1.EditorGroup(this); // find any or create new group
                }
                return yield group.open(resource, options);
            }
            catch (error) {
                this.notification.logError(error);
                return false;
            }
        });
    }
    focusGroup(group) {
        const _super = Object.create(null, {
            focusGroup: { get: () => super.focusGroup }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const focused = yield _super.focusGroup.call(this, group);
            if (focused) {
                this.resources.focus(group.activeResource);
            }
            return focused;
        });
    }
    confirm(options) {
        return this.notification.confirmAsync(options);
    }
    saveContent(resource) {
        return this.resources.save(resource);
    }
};
EditorService.ctorParameters = () => [
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
EditorService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
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
const filters_1 = __webpack_require__(/*! ../models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
let GitService = class GitService {
    constructor(http, settings, notification) {
        this.http = http;
        this.settings = settings;
        this.notification = notification;
        this.blames = {};
        this.repos = [];
    }
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let success = false;
            try {
                this.runningTask = true;
                const response = yield this.http.get('/api/git/changes').toPromise();
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
                this.notification.logError(error);
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
                const params = new http_1.HttpParams().set('path', item.path);
                response = yield this.http.get('/api/git/show', { params: params, responseType: 'text' }).toPromise();
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
                const params = new http_1.HttpParams().set('path', item.path);
                const response = yield this.http.get('api/git/status', { params: params, responseType: 'text' }).toPromise();
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
                const params = new http_1.HttpParams().set('path', item.path);
                const response = yield this.http.get('/api/git/add', { params: params, responseType: 'text' }).toPromise();
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
                const params = new http_1.HttpParams().set('path', item.path);
                const response = yield this.http.get('/api/git/checkout', { params: params, responseType: 'text' }).toPromise();
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
                const response = yield this.http.post('/api/git/commit', data, { headers: headers, responseType: 'text' }).toPromise();
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
                const response = yield this.http.post('/api/git/push', data, { headers: headers, responseType: 'text' }).toPromise();
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
                const response = yield this.http.post('/api/git/pull', data, { headers: headers, responseType: 'text' }).toPromise();
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
                assert_model_1.Asserts.assert(filters_1.isHome(home), 'clone operation is applicable to home only');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                const data = {
                    'path': home.path,
                    url: url,
                    username: username,
                    password: password,
                    destination: destination
                };
                yield this.http.post('/api/git/clone', data, { headers: headers, responseType: 'text' }).toPromise();
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
                const params = new http_1.HttpParams().set('path', item.path);
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                response = (yield this.http.get('/api/git/blame', { headers: headers, params: params }).toPromise());
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
    { type: settings_service_1.SettingsService },
    { type: notification_service_1.NotificationService }
];
GitService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        settings_service_1.SettingsService,
        notification_service_1.NotificationService])
], GitService);
exports.GitService = GitService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/monaco.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/monaco.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
var MonacoService_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
const language_1 = __webpack_require__(/*! ../languages/language */ "./src/app/pages/editor/shared/languages/language.ts");
const opener_service_1 = __webpack_require__(/*! ./opener.service */ "./src/app/pages/editor/shared/services/opener.service.ts");
const resource_service_1 = __webpack_require__(/*! ./resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const settings_1 = __webpack_require__(/*! ../models/settings */ "./src/app/pages/editor/shared/models/settings.ts");
const monaco_1 = __webpack_require__(/*! ../models/monaco */ "./src/app/pages/editor/shared/models/monaco.ts");
const editor_service_1 = __webpack_require__(/*! ./editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const theme_1 = __webpack_require__(/*! ../../../../shared/themes/theme */ "./src/app/shared/themes/theme.ts");
const settings_service_1 = __webpack_require__(/*! ./settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
let MonacoService = MonacoService_1 = class MonacoService {
    constructor(editor, opener, settings, resources, themes, languages) {
        this.editor = editor;
        this.opener = opener;
        this.settings = settings;
        this.resources = resources;
        this.themes = themes;
        this.languages = languages;
        this.states = {};
        this.editors = [];
        this.cursorChanged = new rxjs_1.Subject();
        monaco_1.MONACO_LOADED.subscribe(this.onMonacoLoaded.bind(this));
    }
    static parseURI(path) {
        return monaco.Uri.parse('file://' + path);
    }
    /**
     * Finds the language id linked to the given `resource`
     * @param resource the resource.
     * @returns the id of the language for the resource or empty string if not found.
     */
    findLanguage(resource) {
        const ext = paths_model_1.extname(resource.path) || resource.path;
        const language = language_1.LANGUAGES.find(item => item.extension === ext);
        return !!language ? language.id : '';
    }
    /**
     * Disposes the editor.
     * @param editor the disposed editor.
     */
    onEditorDisposed(editor) {
        const item = this.editors.find(e => e.editor.getId() === editor.getId());
        if (!item) {
            throw new Error('unregistered editor ' + editor.getId());
        }
        this.editors = this.editors.filter(e => e.editor.getId() !== editor.getId());
        item.disposables.forEach(e => e.dispose());
        item.editor.dispose();
        if (this.editors.length === 0) {
            this.cursorChanged.next(undefined);
        }
    }
    /**
     * Overrides the editor features.
     * @param editor the created editor.
     */
    onEditorCreated(editor) {
        const disposables = [];
        const linkDetector = editor.getContribution('editor.linkDetector');
        linkDetector.openerService.open = (uri) => {
            this.opener.openReference(editor.getModel().uri.path, uri.path);
        };
        disposables.push(linkDetector);
        disposables.push(editor.onDidBlurEditorText(() => {
            this.cursorChanged.next(this.cursor);
        }));
        disposables.push(editor.onDidChangeCursorPosition(e => {
            this.onCursorChanged(e, editor);
        }));
        disposables.push(editor.onDidChangeModelContent(() => {
        }));
        this.editors.push({ editor, disposables });
        this.updateSettings();
    }
    /**
     * Saves the state of the editor and handles the new active resource.
     * @param context the last opened resource and its viewState
     * @param active the active resource
     * @param model the model of the active resource
     * @param editor the editor that opened the resource
     */
    onOpened(context, active, model, editor) {
        if (context.resource) {
            this.states[context.resource.path] = context.viewState;
        }
        const viewState = this.states[active.path];
        if (viewState) {
            editor.restoreViewState(viewState); // fix #228
        }
        this.cursor = editor.getPosition();
        this.cursorChanged.next(this.cursor);
    }
    onMonacoLoaded() {
        this.themes.forEach(theme => {
            monaco.editor.defineTheme(theme.id, {
                base: theme.base,
                inherit: theme.inherit,
                rules: theme.rules,
                colors: theme.colors
            });
        });
        this.languages.forEach(language => {
            monaco.languages.register({
                id: language.id,
                extensions: language.extensions || [],
                aliases: language.aliases || []
            });
            monaco.languages.setMonarchTokensProvider(language.id, language.syntax());
            language.hoversProviders().forEach(provider => {
                monaco.languages.registerHoverProvider(language.id, provider);
            });
            language.foldingsProviders().forEach(provider => {
                monaco.languages.registerFoldingRangeProvider(language.id, provider);
            });
            language.linksProviders().forEach(provider => {
                monaco.languages.registerLinkProvider(language.id, provider);
            });
            language.completionsProviders().forEach(provider => {
                monaco.languages.registerCompletionItemProvider(language.id, provider);
            });
        });
        this.editor.subscribe(this.resources.deleted.subscribe(e => {
            this.disposeModel(e.path);
        }));
        this.editor.subscribe(this.resources.renamed.subscribe(e => {
            this.disposeModel(e.before);
        }));
        this.editor.subscribe(this.settings.changed.subscribe(_ => {
            this.updateSettings();
        }));
    }
    disposeModel(path) {
        const model = monaco.editor.getModel(MonacoService_1.parseURI(path));
        if (model) {
            model.dispose();
        }
    }
    onCursorChanged(e, editor) {
        this.cursor = e.position;
        this.cursorChanged.next(e.position);
        for (const item of this.editors) {
            if (item.editor.getId() !== editor.getId()) {
                const model = item.editor.getModel();
                if (model && model.id === editor.getModel().id) {
                    item.editor.setPosition(e.position);
                }
            }
        }
    }
    updateSettings() {
        const settings = this.settings.extract(settings_1.Settings.EDITOR_KEY);
        if (monaco) {
            this.editors.forEach(item => {
                item.editor.updateOptions(settings);
            });
            monaco.editor.setTheme(settings['theme']);
        }
    }
};
MonacoService.ctorParameters = () => [
    { type: editor_service_1.EditorService },
    { type: opener_service_1.OpenerService },
    { type: settings_service_1.SettingsService },
    { type: resource_service_1.ResourceService },
    { type: Array, decorators: [{ type: core_1.Inject, args: [theme_1.THEME_PROVIDERS,] }] },
    { type: Array, decorators: [{ type: core_1.Inject, args: [language_1.LANGUAGE_PROVIDERS,] }] }
];
MonacoService = MonacoService_1 = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__param(4, core_1.Inject(theme_1.THEME_PROVIDERS)),
    tslib_1.__param(5, core_1.Inject(language_1.LANGUAGE_PROVIDERS)),
    tslib_1.__metadata("design:paramtypes", [editor_service_1.EditorService,
        opener_service_1.OpenerService,
        settings_service_1.SettingsService,
        resource_service_1.ResourceService, Array, Array])
], MonacoService);
exports.MonacoService = MonacoService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/opener.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/opener.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const resource_1 = __webpack_require__(/*! ../models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
const editor_service_1 = __webpack_require__(/*! ./editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const resource_service_1 = __webpack_require__(/*! ./resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/** Implementation of IOpenService interface */
let OpenerService = class OpenerService {
    constructor(editor, resources, notification) {
        this.editor = editor;
        this.resources = resources;
        this.notification = notification;
    }
    open(path, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!path) {
                return Promise.reject(new Error('parameter "path" is required'));
            }
            path = path.trim();
            if (path.startsWith('http') || path.startsWith('mailto')) {
                // open http or default mail application
                this.openURL(path);
                return Promise.resolve(true);
            }
            const resource = this.resources.find(path);
            if (!resource) {
                return Promise.reject(new Error(`Unable to open '${path}': resource not found`));
            }
            if (resource.type !== resource_1.ResourceTypes.Folder) {
                return this.editor.open(resource, options);
            }
            return false;
        });
    }
    openReference(base, target) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const resource = this.resources.find(base);
                if (!resource) {
                    return Promise.reject(new Error(`Unable to open '${target}': '${base}' not found`));
                }
                const reference = yield this.resources.findRelativeTo(resource, target);
                if (!reference) {
                    return Promise.reject(new Error(`Unable to open '${base}': resource not found relative to '${base}'`));
                }
                return yield this.editor.open(reference);
            }
            catch (error) {
                this.notification.logError(error);
                return false;
            }
        });
    }
    openURL(url, openInNewTab = true) {
        if (openInNewTab) {
            window.open(url, '_blank');
        }
        else {
            window.open(url);
        }
    }
};
OpenerService.ctorParameters = () => [
    { type: editor_service_1.EditorService },
    { type: resource_service_1.ResourceService },
    { type: notification_service_1.NotificationService }
];
OpenerService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [editor_service_1.EditorService,
        resource_service_1.ResourceService,
        notification_service_1.NotificationService])
], OpenerService);
exports.OpenerService = OpenerService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/pl.service.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/pl.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const task_service_1 = __webpack_require__(/*! ./task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
let PLService = class PLService {
    constructor(http, task) {
        this.http = http;
        this.task = task;
    }
    load(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                this.task.emitTaskEvent(true, 'load pltp');
                const params = new http_1.HttpParams().set('name', 'load_pltp').set('path', resource.path);
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
                this.task.emitTaskEvent(true, 'reload pltp');
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
};
PLService.ctorParameters = () => [
    { type: http_1.HttpClient },
    { type: task_service_1.TaskService }
];
PLService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
        task_service_1.TaskService])
], PLService);
exports.PLService = PLService;


/***/ }),

/***/ "./src/app/pages/editor/shared/services/preview.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/preview.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
const task_service_1 = __webpack_require__(/*! ./task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
let PreviewService = class PreviewService {
    constructor(task, http) {
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
    preview(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.task.emitTaskEvent(true, 'preview');
                const response = yield this.previewProviders[paths_model_1.extname(resource.path)](resource, this);
                resource.meta.previewData = response.preview;
                this.task.emitTaskEvent(false);
                return resource;
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    previewPL(resource, service) {
        const data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content
        };
        const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    }
    previewMD(resource, service) {
        return Promise.resolve({ preview: resource.content });
    }
    previewSVG(resource) {
        return Promise.resolve({ preview: resource.content });
    }
};
PreviewService.ctorParameters = () => [
    { type: task_service_1.TaskService },
    { type: http_1.HttpClient }
];
PreviewService = tslib_1.__decorate([
    core_1.Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [task_service_1.TaskService,
        http_1.HttpClient])
], PreviewService);
exports.PreviewService = PreviewService;


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
const resource_1 = __webpack_require__(/*! ../models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
const git_service_1 = __webpack_require__(/*! ./git.service */ "./src/app/pages/editor/shared/services/git.service.ts");
const task_service_1 = __webpack_require__(/*! ./task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
const assert_model_1 = __webpack_require__(/*! src/app/shared/models/assert.model */ "./src/app/shared/models/assert.model.ts");
const filters = __webpack_require__(/*! ../models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
let ResourceService = class ResourceService {
    constructor(git, http, task) {
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
        this.renamed = new rxjs_1.Subject();
        /** event that emits after a resource is created */
        this.created = new rxjs_1.Subject();
        /** event that emits after a resource is deleted */
        this.deleted = new rxjs_1.Subject();
        /** event that emits each time any resource is created|deleted|renamed  */
        this.changed = new rxjs_1.Subject();
        /** event that emits each time the focused resource change */
        this.focused = new rxjs_1.Subject();
    }
    get home() {
        return this.resources[0];
    }
    focus(resource) {
        this.focused.next(resource);
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
            return undefined;
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
                const params = new http_1.HttpParams()
                    .set('name', 'resolve_path')
                    .set('path', resource.path)
                    .set('target', path);
                const response = yield this.http.get('filebrowser/option', { params: params, responseType: 'text' }).toPromise();
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
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    create(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.checkName(resource.name);
            assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied: write access not granted for ' + resource.path);
            assert_model_1.Asserts.assert(filters.canWrite(this.find(resource.parent)), 'permission denied: write access not granted for ' + resource.parent);
            this.task.emitTaskEvent(true, 'creating resource');
            if (resource.name.endsWith('pl')) {
                resource.content = `
@ /utils/sandboxio.py
grader  =@ /grader/evaluator.py
builder =@ /builder/before.py

before== #|python|
==

evaluator== #|python|
grade = (100, 'OK')
==



title== #|html|
==

text== #|html|
==

form== #|html|
==
`;
            }
            try {
                const data = {
                    name: 'create_resource',
                    path: resource.parent + '/' + resource.name,
                    content: resource.content,
                    type: resource.type
                };
                const success = yield this.edit(data, resource);
                this.task.emitTaskEvent(false);
                return success;
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
     * @returns Promise<boolean> resolved with true if the resource is renamed.
     */
    rename(resource, name) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.checkName(name);
            assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied');
            assert_model_1.Asserts.assert(!filters.isRoot(resource), 'cannot rename root directory');
            if (name === resource.name) {
                return Promise.resolve(true);
            }
            try {
                let success = false;
                this.task.emitTaskEvent(true, 'rename');
                const data = {
                    name: 'rename_resource',
                    path: resource.path,
                    target: name,
                };
                success = yield this.edit(data, resource);
                this.task.emitTaskEvent(false);
                return success;
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
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    delete(resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                assert_model_1.Asserts.requireNonNull(resource, 'resource');
                assert_model_1.Asserts.assert(filters.canWrite(resource), 'permission denied');
                assert_model_1.Asserts.assert(!filters.isRoot(resource), 'permission denied');
                this.task.emitTaskEvent(true, 'delete');
                const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                yield this.http.post('filebrowser/option', {
                    name: 'delete_resource',
                    path: resource.path
                }, { headers: headers }).toPromise();
                const success = this.remove(resource.path);
                this.task.emitTaskEvent(false);
                this.git.refresh();
                return success;
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    /**
     * Moves the file|resource 'src' to the resource 'dst'.
     * @param src the source file or resource
     * @param dst the destination resource
     * @returns Promise<boolean> rejected with a string error message or resolved with true
     */
    move(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.task.emitTaskEvent(true, 'move');
                assert_model_1.Asserts.requireNonNull(src, 'src');
                assert_model_1.Asserts.requireNonNull(dst, 'dst');
                assert_model_1.Asserts.assert(filters.canWrite(dst), 'permission denied');
                assert_model_1.Asserts.assert(filters.isFolder(dst), 'destination must be a directory');
                let resource;
                if ('size' in src) { // File type contains size property
                    resource = yield this.drop(src, dst);
                }
                else {
                    resource = yield this.drag(src, dst);
                }
                this.sort(dst.children);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
                this.git.refresh();
                return true;
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
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
            if (!resource.changed) {
                return true;
            }
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
                this.git.refresh();
                return true;
            }
            catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
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
            assert_model_1.Asserts.assert(resource.type === resource_1.ResourceTypes.Folder);
            try {
                this.task.emitTaskEvent(true);
                const params = new http_1.HttpParams().set('name', 'download_resource').set('path', resource.path);
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
            if (resource.type === resource_1.ResourceTypes.Folder) {
                return true;
            }
            if (filters.isLoaded(resource) && !resource.dirty) {
                return true;
            }
            try {
                this.task.emitTaskEvent(true, 'retrieving resource content');
                const params = new http_1.HttpParams().set('name', 'get_resource').set('path', resource.path);
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
    /**
     * Reloads the resources from the server.
     * @returns A promise that resolves with true
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.task.emitTaskEvent(true, 'retrieving resources');
                const params = new http_1.HttpParams().set('name', 'get_resources');
                const resources = yield this.http.get('/filebrowser/option', { params: params }).toPromise();
                if (resources.length > 0) {
                    this.sort(resources);
                }
                yield this.build(resources);
                this.changed.next(this.resources.slice());
                this.task.emitTaskEvent(false);
                return true;
            }
            catch (error) {
                this.resources = [];
                this.changed.next(this.resources.slice());
                this.task.emitTaskEvent(false);
                throw error;
            }
        });
    }
    testURL(resource) {
        return window.location.origin + '/filebrowser/option?name=test_pl&path=' + resource.path;
    }
    downloadURL(resource) {
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
            this.git.refresh();
        });
    }
    edit(data, resource) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const response = yield this.http.post('filebrowser/option', data, {
                headers: headers
            }).toPromise();
            const parent = this.find(resource.parent);
            parent.children = parent.children || [];
            const after = response['path'];
            const before = resource.path;
            if (resource.renaming) {
                resource.name = paths_model_1.basename(after);
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
            return true;
        });
    }
    drop(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src.name, 'src.name');
            assert_model_1.Asserts.requireNonNull(dst.path, 'dst.path');
            assert_model_1.Asserts.checkName(src.name);
            const formData = new FormData();
            formData.append('file', src, src.name);
            formData.append('path', dst.path);
            const headers = new http_1.HttpHeaders();
            headers.set('Content-Type', null);
            headers.set('Accept', 'multipart/form-data');
            yield this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise();
            const newRes = resource_1.createResource(dst, resource_1.ResourceTypes.File);
            newRes.path = dst.path + '/' + src.name;
            newRes.name = src.name;
            newRes.renaming = newRes.creating = false;
            dst.children = dst.children || [];
            dst.children.push(newRes);
            this.cache.push(newRes);
            return newRes;
        });
    }
    drag(src, dst) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            assert_model_1.Asserts.requireNonNull(src.path, 'src.path');
            assert_model_1.Asserts.requireNonNull(dst.path, 'dst.path');
            assert_model_1.Asserts.assert(src.path !== dst.path, 'cannot move the resource to the same path');
            assert_model_1.Asserts.assert(!filters.isRoot(src), 'cannot move a root resource');
            const headers = new http_1.HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const response = yield this.http.post('filebrowser/option', {
                name: 'move_resource',
                path: src.path,
                dst: dst.path
            }, { headers: headers }).toPromise();
            const before = src.path;
            const after = response['path'];
            const parent = this.find(src.parent);
            parent.children = parent.children.filter(item => item.path !== src.path);
            src.parent = dst.path;
            src.path = after;
            dst.children.push(src);
            this.replace(before, after);
            this.changed.next(this.getAll());
            return src;
        });
    }
    replace(oldPath, newPath) {
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
        for (const item of this.cache) {
            doAction(item);
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
        this.changed.next(this.getAll());
        return true;
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
    { type: git_service_1.GitService },
    { type: http_1.HttpClient },
    { type: task_service_1.TaskService }
];
ResourceService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [git_service_1.GitService,
        http_1.HttpClient,
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
const settings_1 = __webpack_require__(/*! ../models/settings */ "./src/app/pages/editor/shared/models/settings.ts");
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
        localStorage.setItem(settings_1.Settings.STORAGE_KEY, JSON.stringify(this.settings));
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
            const store = localStorage.getItem(settings_1.Settings.STORAGE_KEY);
            this.settings = JSON.parse(store);
            if (!this.settings) {
                this.settings = {};
            }
            const defaults = settings_1.Settings.defaults;
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

/***/ "./src/app/pages/editor/shared/services/task.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/editor/shared/services/task.service.ts ***!
  \**************************************************************/
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

/***/ "./src/app/pages/editor/status-bar/status-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/editor/status-bar/status-bar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 20px;\n  background-color: var(--statusBar-background);\n  color: var(--statusBar-foreground);\n  font-size: 12px;\n  padding: 0 8px;\n}\n\n.status-bar-item {\n  margin-right: 8px;\n}\n\n.status-bar-item:hover {\n  background-color: var(--statusBarItem-hoverBackground);\n}\n\n.remote .remote-icon {\n  margin: 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL3N0YXR1cy1iYXIvc3RhdHVzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLHNEQUFBO0FDQ0o7O0FER0k7RUFBZ0IsYUFBQTtBQ0NwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRvci9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzQmFyLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOiB2YXIoLS1zdGF0dXNCYXItZm9yZWdyb3VuZCk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uc3RhdHVzLWJhci1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN0YXR1cy1iYXItaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RhdHVzQmFySXRlbS1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4ucmVtb3RlIHtcbiAgICAucmVtb3RlLWljb24geyAgbWFyZ2luOiAwIDRweDsgfVxufVxuXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGF0dXNCYXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1zdGF0dXNCYXItZm9yZWdyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5zdGF0dXMtYmFyLWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnN0YXR1cy1iYXItaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0YXR1c0Jhckl0ZW0taG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLnJlbW90ZSAucmVtb3RlLWljb24ge1xuICBtYXJnaW46IDAgNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/editor/status-bar/status-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/status-bar/status-bar.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const filters_1 = __webpack_require__(/*! ../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const monaco_service_1 = __webpack_require__(/*! ../shared/services/monaco.service */ "./src/app/pages/editor/shared/services/monaco.service.ts");
const resource_service_1 = __webpack_require__(/*! ../shared/services/resource.service */ "./src/app/pages/editor/shared/services/resource.service.ts");
const task_service_1 = __webpack_require__(/*! ../shared/services/task.service */ "./src/app/pages/editor/shared/services/task.service.ts");
let FooterComponent = class FooterComponent {
    constructor(task, monaco, resources) {
        this.task = task;
        this.monaco = monaco;
        this.resources = resources;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.monaco.cursorChanged.subscribe(cursor => {
            this.cursor = cursor;
        }));
        this.subscriptions.push(this.resources.focused.subscribe(resource => {
            this.focused = resource;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    querying() {
        return this.task.running;
    }
    taskName() {
        return this.task.taskName;
    }
    inRepo() {
        return !!this.focused && filters_1.isRepo(this.focused);
    }
    repoHost() {
        return !!this.focused && this.focused.repo.host;
    }
    repoUrl() {
        return !!this.focused && this.focused.repo.url;
    }
    repoBranch() {
        return !!this.focused && this.focused.repo.branch;
    }
};
FooterComponent.ctorParameters = () => [
    { type: task_service_1.TaskService },
    { type: monaco_service_1.MonacoService },
    { type: resource_service_1.ResourceService }
];
FooterComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'status-bar',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./status-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/status-bar/status-bar.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./status-bar.component.scss */ "./src/app/pages/editor/status-bar/status-bar.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [task_service_1.TaskService,
        monaco_service_1.MonacoService,
        resource_service_1.ResourceService])
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/code-editor/code-editor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/code-editor/code-editor.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".code-editor {\n  height: calc(100% - 36px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0b3Ivd29ya3NwYWNlL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvZGUtZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpOyAvLyAzNiA9IHRhYiBoZWlnaHQgMTYgPSBibGFtZSBoZWlnaHRcbn1cbiIsIi5jb2RlLWVkaXRvciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/code-editor/code-editor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/code-editor/code-editor.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const editors_1 = __webpack_require__(/*! ../../shared/models/editors */ "./src/app/pages/editor/shared/models/editors.ts");
const notification_service_1 = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
const monaco_service_1 = __webpack_require__(/*! ../../shared/services/monaco.service */ "./src/app/pages/editor/shared/services/monaco.service.ts");
const git_service_1 = __webpack_require__(/*! ../../shared/services/git.service */ "./src/app/pages/editor/shared/services/git.service.ts");
const filters_1 = __webpack_require__(/*! ../../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const editor_service_1 = __webpack_require__(/*! ../../shared/services/editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const preview_service_1 = __webpack_require__(/*! ../../shared/services/preview.service */ "./src/app/pages/editor/shared/services/preview.service.ts");
const compiler_service_1 = __webpack_require__(/*! ../../shared/services/compiler.service */ "./src/app/pages/editor/shared/services/compiler.service.ts");
const settings_service_1 = __webpack_require__(/*! ../../shared/services/settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
let CodeEditorComponent = class CodeEditorComponent {
    constructor(git, compiler, preview, notification, editorService, monacoService, settings) {
        this.git = git;
        this.compiler = compiler;
        this.preview = preview;
        this.notification = notification;
        this.editorService = editorService;
        this.monacoService = monacoService;
        this.settings = settings;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.editor.opened.subscribe(uri => {
            this.open(uri);
        }));
        this.subscriptions.push(this.editor.previewRequested.subscribe((item) => {
            this.didPreview(item);
        }));
        this.subscriptions.push(this.editor.diffRequested.subscribe(() => {
            this.open(this.editor.resource());
        }));
        this.subscriptions.push(this.settings.changed.subscribe(_ => {
            this.compile().catch();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
        this.editorChanges.dispose();
        this.monacoService.onEditorDisposed(this.editor.codeEditor);
        this.monacoService.onEditorDisposed(this.editor.diffEditor.getModifiedEditor());
    }
    codeEditorLoaded(codeEditor) {
        this.monacoService.onEditorCreated(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
    }
    diffEditorLoaded(diffEditor) {
        this.monacoService.onEditorCreated(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.resource());
    }
    addCommands(editor) {
        this.editorChanges = editor.onDidChangeModelContent(() => {
            this.didContentChanged(editor);
        });
        const empty = '';
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            this.didSave();
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
            this.editor.group().saveAll().catch(error => {
                this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, () => {
            this.editor.group().close(this.editor.resource(), true).catch(error => {
                this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, () => {
            this.editor.group().closeAll(true).catch(error => {
                this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, () => {
            this.editor.group().closeSaved().catch(error => {
                this.notification.logError(error);
            });
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            if (filters_1.canBePreviewed(this.active)) {
                this.didPreview(this.active);
            }
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Enter, () => {
            this.editorService.closePreview();
        }, empty);
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.RightArrow, () => {
            this.editor.split();
        }, empty);
        // tslint:enable: no-bitwise
    }
    didSave() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const resource = this.editor.resource();
                const success = yield this.editor.group().save(resource);
                if (success) {
                    yield this.compile();
                }
            }
            catch (error) {
                this.notification.logError(error);
            }
        });
    }
    didContentChanged(editor) {
        if (!this.readonly) {
            const model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.savedContent !== this.active.content;
        }
    }
    didPreview(item) {
        this.preview.preview(item).then(() => {
            this.editorService.open(item);
        }).catch(error => {
            this.notification.logError(error);
        });
    }
    open(resource, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const context = {
                resource: this.active,
                viewState: this.editor.codeEditor.saveViewState(),
            };
            this.active = resource;
            const monaco = window.monaco;
            const uri = monaco_service_1.MonacoService.parseURI(resource.path);
            const language = this.monacoService.findLanguage(this.active);
            const model = monaco.editor.getModel(uri) || monaco.editor.createModel(this.active.content, language, uri);
            if (model.getValue() !== this.active.content) {
                model.setValue(this.active.content);
                this.active.changed = false;
                this.active.savedContent = this.active.content;
            }
            this.readonly = this.editor.diffEditing || !this.active.write;
            this.editor.codeEditor.setModel(model);
            this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
            this.editor.codeEditor.focus();
            yield this.checkDiffOptions(monaco, language);
            yield this.checkCodeOptions(monaco, options);
            this.monacoService.onOpened(context, this.active, model, this.editor.codeEditor);
            this.compile().catch();
        });
    }
    checkCodeOptions(monaco, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (options) {
                if (options.position) {
                    this.editor.codeEditor.setPosition({
                        lineNumber: options.position.line, column: options.position.line
                    });
                    this.editor.codeEditor.revealLineInCenter(options.position.line, monaco.editor.ScrollType.Smooth);
                }
            }
        });
    }
    checkDiffOptions(monaco, language) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.editor.diffEditing) {
                let diff = '';
                try {
                    diff = (yield this.git.show(this.active)) || '';
                }
                catch (_) { }
                this.editor.diffEditor.setModel({
                    original: monaco.editor.createModel(diff, language),
                    modified: monaco.editor.createModel(this.active.content, language),
                });
                this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: this.readonly });
                this.editor.diffEditor.getModifiedEditor().focus();
            }
        });
    }
    compile() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const resource = this.editor.resource();
            try {
                yield this.compiler.compile(resource);
                this.decorations = this.decorations || [];
                const editor = this.editor.codeEditor;
                const errors = this.compiler.errors(resource);
                if (this.compiler.enabled) {
                    this.decorations = editor.deltaDecorations(this.decorations, errors.map(error => {
                        const message = `**${error.type}**: ${error.message}`;
                        return {
                            range: new monaco.Range(error.lineno, 1, error.lineno, 1),
                            options: {
                                isWholeLine: true,
                                className: 'error-line-content',
                                glyphMarginClassName: 'error-glyph-margin',
                                glyphMarginHoverMessage: { value: message, isTrusted: true },
                            }
                        };
                    }));
                }
                else {
                    this.decorations = editor.deltaDecorations(this.decorations, []);
                }
            }
            catch (_a) { }
        });
    }
};
CodeEditorComponent.ctorParameters = () => [
    { type: git_service_1.GitService },
    { type: compiler_service_1.CompilerService },
    { type: preview_service_1.PreviewService },
    { type: notification_service_1.NotificationService },
    { type: editor_service_1.EditorService },
    { type: monaco_service_1.MonacoService },
    { type: settings_service_1.SettingsService }
];
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", editors_1.CodeEditor)
], CodeEditorComponent.prototype, "editor", void 0);
CodeEditorComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'code-editor',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./code-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/code-editor/code-editor.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./code-editor.component.scss */ "./src/app/pages/editor/workspace/code-editor/code-editor.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [git_service_1.GitService,
        compiler_service_1.CompilerService,
        preview_service_1.PreviewService,
        notification_service_1.NotificationService,
        editor_service_1.EditorService,
        monaco_service_1.MonacoService,
        settings_service_1.SettingsService])
], CodeEditorComponent);
exports.CodeEditorComponent = CodeEditorComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/image-editor/image-editor.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/image-editor/image-editor.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-editor {\n  height: calc(100% - 36px);\n  position: relative;\n  background-position: 0px 0px, 10px 10px;\n  background-size: 20px 20px;\n  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%);\n  text-align: center;\n}\n.image-editor img {\n  text-align: center;\n  display: block;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  max-width: 100%;\n  height: auto;\n  margin: auto;\n  border-radius: 16px;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9pbWFnZS1lZGl0b3IvaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZGl0b3Ivd29ya3NwYWNlL2ltYWdlLWVkaXRvci9pbWFnZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGtNQUNJO0VBRUosa0JBQUE7QUNESjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9pbWFnZS1lZGl0b3IvaW1hZ2UtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWVkaXRvciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMTBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VlZSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCAjZWVlIDc1JSwgI2VlZSAxMDAlKSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWVlIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNlZWUgNzUlLCAjZWVlIDEwMCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxufVxuIiwiLmltYWdlLWVkaXRvciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweCwgMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWVlIDI1JSwgdHJhbnNwYXJlbnQgMjUlLCB0cmFuc3BhcmVudCA3NSUsICNlZWUgNzUlLCAjZWVlIDEwMCUpLCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlZWUgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgI2VlZSA3NSUsICNlZWUgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWFnZS1lZGl0b3IgaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/image-editor/image-editor.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/image-editor/image-editor.component.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const editors_1 = __webpack_require__(/*! ../../shared/models/editors */ "./src/app/pages/editor/shared/models/editors.ts");
const filters_1 = __webpack_require__(/*! ../../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
let ImageEditorComponent = class ImageEditorComponent {
    constructor() { }
    ngOnInit() {
        this.open(this.editor.resource());
        this.openSubscription = this.editor.opened.subscribe(document => {
            this.open(document);
        });
    }
    ngOnDestroy() {
        this.openSubscription.unsubscribe();
    }
    open(resource) {
        this.svg = resource.content;
        this.url = resource.meta.downloadUrl;
        this.isSVG = filters_1.isSVG(resource);
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", editors_1.ImageEditor)
], ImageEditorComponent.prototype, "editor", void 0);
ImageEditorComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'image-editor',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./image-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/image-editor/image-editor.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./image-editor.component.scss */ "./src/app/pages/editor/workspace/image-editor/image-editor.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ImageEditorComponent);
exports.ImageEditorComponent = ImageEditorComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/preview-editor/preview-editor.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/preview-editor/preview-editor.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-editor {\n  height: calc(100% - 36px);\n  width: 100%;\n  overflow: auto;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9wcmV2aWV3LWVkaXRvci9wcmV2aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9wcmV2aWV3LWVkaXRvci9wcmV2aWV3LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0b3Ivd29ya3NwYWNlL3ByZXZpZXctZWRpdG9yL3ByZXZpZXctZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cbiIsIi5wcmV2aWV3LWVkaXRvciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzZweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/preview-editor/preview-editor.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/preview-editor/preview-editor.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const editors_1 = __webpack_require__(/*! ../../shared/models/editors */ "./src/app/pages/editor/shared/models/editors.ts");
const run_scripts_directive_1 = __webpack_require__(/*! src/app/shared/directives/run-scripts.directive */ "./src/app/shared/directives/run-scripts.directive.ts");
const filters_1 = __webpack_require__(/*! ../../shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
let PreviewEditorComponent = class PreviewEditorComponent {
    constructor() { }
    ngOnInit() {
        this.open(this.editor.resource());
        this.openSubscription = this.editor.opened.subscribe(document => {
            this.open(document);
        });
    }
    ngOnDestroy() {
        this.openSubscription.unsubscribe();
    }
    didFrameLoaded() {
        this.counter++;
        // for some reason onload of iframe is called twice
        this.loading = this.counter % 2 === 0;
    }
    open(resource) {
        this.content = resource.meta.previewData;
        this.isMarkdown = filters_1.isMarkdown(resource);
        this.isHTML = filters_1.isSVG(resource);
        this.isURL = filters_1.isPL(resource);
        this.loading = this.isURL;
        if (this.isHTML && this.scripts) {
            this.scripts.runScripts();
        }
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", editors_1.PreviewEditor)
], PreviewEditorComponent.prototype, "editor", void 0);
tslib_1.__decorate([
    core_1.ViewChild(run_scripts_directive_1.RunScriptsDirective, { static: true }),
    tslib_1.__metadata("design:type", run_scripts_directive_1.RunScriptsDirective)
], PreviewEditorComponent.prototype, "scripts", void 0);
PreviewEditorComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'preview-editor',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./preview-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/preview-editor/preview-editor.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./preview-editor.component.scss */ "./src/app/pages/editor/workspace/preview-editor/preview-editor.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], PreviewEditorComponent);
exports.PreviewEditorComponent = PreviewEditorComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/setting-editor/setting-editor.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/setting-editor/setting-editor.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".setting-editor {\n  height: calc(100% - 36px);\n  display: flex;\n}\n\n.mat-form-field {\n  width: 75%;\n}\n\n.tab-bar {\n  padding: 0;\n}\n\n.mat-list {\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\n.mat-list.mat-list-base {\n  margin-bottom: 8px;\n}\n\n.mat-list.list-groups {\n  width: 180px;\n  padding: 0 12px;\n  overflow: auto;\n}\n\n.setting-item {\n  cursor: pointer;\n}\n\n.setting-item.active, .setting-item:hover {\n  color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9zZXR0aW5nLWVkaXRvci9zZXR0aW5nLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS9zZXR0aW5nLWVkaXRvci9zZXR0aW5nLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQUo7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FEQ0k7RUFDSSxjQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0b3Ivd29ya3NwYWNlL3NldHRpbmctZWRpdG9yL3NldHRpbmctZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmctZWRpdG9yIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4udGFiLWJhciB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1saXN0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgJi5tYXQtbGlzdC1iYXNlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLm1hdC1saXN0Lmxpc3QtZ3JvdXBzIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2V0dGluZy1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5hY3RpdmUsICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB9XG59XG4iLCIuc2V0dGluZy1lZGl0b3Ige1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNzUlO1xufVxuXG4udGFiLWJhciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLm1hdC1saXN0Lm1hdC1saXN0LWJhc2Uge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtbGlzdC5saXN0LWdyb3VwcyB7XG4gIHdpZHRoOiAxODBweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNldHRpbmctaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXR0aW5nLWl0ZW0uYWN0aXZlLCAuc2V0dGluZy1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/setting-editor/setting-editor.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/editor/workspace/setting-editor/setting-editor.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// tslint:disable: max-line-length
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const navigation_service_1 = __webpack_require__(/*! ../../navigation/navigation.service */ "./src/app/pages/editor/navigation/navigation.service.ts");
const settings_service_1 = __webpack_require__(/*! ../../shared/services/settings.service */ "./src/app/pages/editor/shared/services/settings.service.ts");
let SettingEditorComponent = class SettingEditorComponent {
    constructor(settings, navigation) {
        this.settings = settings;
        this.navigation = navigation;
        /** setting groups */
        this.groups = [];
    }
    ngOnInit() {
        const settings = this.settings.getAll();
        const groups = Object.keys(settings).sort((a, b) => {
            return a.split('.').pop().toLowerCase() < b.split('.').pop().toLowerCase() ? -1 : 1;
        });
        this.groups = groups.reduce((acc, groupName) => {
            if (!acc.some(item => item.name === groupName)) {
                acc.push({
                    name: groupName,
                    settings: this.settings.ofGroup(groupName).filter(setting => {
                        return !setting.hidden;
                    })
                });
            }
            return acc;
        }, []);
        if (this.groups.length > 0) {
            this.selection = this.groups[0];
        }
    }
    /** Handles close button click event */
    didClose() {
        this.navigation.settings.next();
    }
    /** Handles settings change event */
    didChange() {
        this.settings.update(this.groups);
    }
    /**
     * Handles click event on setting group inside the template.
     * @param group the selected group.
     */
    didSelect(group) {
        this.selection = group;
    }
};
SettingEditorComponent.ctorParameters = () => [
    { type: settings_service_1.SettingsService },
    { type: navigation_service_1.NavigationService }
];
SettingEditorComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'setting-editor',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./setting-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/setting-editor/setting-editor.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./setting-editor.component.scss */ "./src/app/pages/editor/workspace/setting-editor/setting-editor.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [settings_service_1.SettingsService,
        navigation_service_1.NavigationService])
], SettingEditorComponent);
exports.SettingEditorComponent = SettingEditorComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/welcome/welcome.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/editor/workspace/welcome/welcome.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  padding: 4rem 8rem;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.welcome-title {\n  align-self: center;\n}\n\n.welcome-section {\n  width: 100%;\n}\n\n.welcome-tip {\n  border-left: 0.25em solid #dfe2e5;\n  color: #6a737d;\n  padding: 0 1em;\n}\n\nimg {\n  display: block;\n  width: 50%;\n  height: auto;\n  margin: auto;\n}\n\n.mat-list-base .mat-list-item, .mat-list-base .mat-list-option {\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci93b3Jrc3BhY2Uvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRvci93b3Jrc3BhY2Uvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNHJlbSA4cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLndlbGNvbWUtdGl0bGUge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWxjb21lLXRpcCB7XG4gICAgYm9yZGVyLWxlZnQ6IC4yNWVtIHNvbGlkICNkZmUyZTU7XG4gICAgY29sb3I6ICM2YTczN2Q7XG4gICAgcGFkZGluZzogMCAxZW07XG59XG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0sIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgIGhlaWdodDogMzJweDtcbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cmVtIDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ud2VsY29tZS10aXRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLndlbGNvbWUtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VsY29tZS10aXAge1xuICBib3JkZXItbGVmdDogMC4yNWVtIHNvbGlkICNkZmUyZTU7XG4gIGNvbG9yOiAjNmE3MzdkO1xuICBwYWRkaW5nOiAwIDFlbTtcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGhlaWdodDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/welcome/welcome.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/editor/workspace/welcome/welcome.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const language_1 = __webpack_require__(/*! ../../shared/languages/language */ "./src/app/pages/editor/shared/languages/language.ts");
let WelcomeComponent = class WelcomeComponent {
    constructor() {
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
        this.languages = language_1.LANGUAGES.reduce((p, c, i, a) => {
            if (!p.includes(c.id)) {
                p.push(c.id);
            }
            return p;
        }, []);
    }
};
WelcomeComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'welcome',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/welcome/welcome.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./welcome.component.scss */ "./src/app/pages/editor/workspace/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "./src/app/pages/editor/workspace/workspace.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/editor/workspace/workspace.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editor-group {\n  position: relative;\n  overflow: hidden;\n}\n\n.tab-bar {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXRvci93b3Jrc3BhY2Uvd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdG9yL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdG9yLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYi1iYXIge1xuICAgIHBhZGRpbmc6IDA7XG59XG4iLCIuZWRpdG9yLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiLWJhciB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/editor/workspace/workspace.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/editor/workspace/workspace.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const editor_service_1 = __webpack_require__(/*! ../shared/services/editor.service */ "./src/app/pages/editor/shared/services/editor.service.ts");
const navigation_service_1 = __webpack_require__(/*! ../navigation/navigation.service */ "./src/app/pages/editor/navigation/navigation.service.ts");
let WorkspaceComponent = class WorkspaceComponent {
    constructor(editor, changes, navigation) {
        this.editor = editor;
        this.changes = changes;
        this.navigation = navigation;
        this.subscriptions = [];
        this.groups = [];
    }
    ngOnInit() {
        this.hasGroup = false;
        this.groups = this.editor.listGroups();
        this.subscriptions.push(this.editor.changed.subscribe((groups) => {
            this.groups = groups;
            this.hasGroup = groups.length > 0;
            this.changes.detectChanges();
        }));
        this.subscriptions.push(this.navigation.settings.subscribe(() => {
            this.showSettings = !this.showSettings;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }
};
WorkspaceComponent.ctorParameters = () => [
    { type: editor_service_1.EditorService },
    { type: core_1.ChangeDetectorRef },
    { type: navigation_service_1.NavigationService }
];
WorkspaceComponent = tslib_1.__decorate([
    core_1.Component({
        // tslint:disable-next-line: component-selector
        selector: 'workspace',
        template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./workspace.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/editor/workspace/workspace.component.html")).default,
        styles: [tslib_1.__importDefault(__webpack_require__(/*! ./workspace.component.scss */ "./src/app/pages/editor/workspace/workspace.component.scss")).default]
    }),
    tslib_1.__metadata("design:paramtypes", [editor_service_1.EditorService,
        core_1.ChangeDetectorRef,
        navigation_service_1.NavigationService])
], WorkspaceComponent);
exports.WorkspaceComponent = WorkspaceComponent;


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
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
        setTimeout(function () {
            changes.detectChanges();
        }, 1);
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
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvbXB0L3Byb21wdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG59ICIsImZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".tree-component {\n  height: 100%;\n}\n.tree-component .mat-tree-node {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 32px;\n  overflow: hidden;\n}\n.tree-component .mat-tree-node:hover, .tree-component .mat-tree-node.focused {\n  background-color: rgba(66, 66, 66, 0.1);\n}\n.tree-component .mat-tree-node .node-content {\n  cursor: pointer;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 32px;\n  padding: 0 16px;\n  overflow: hidden;\n}\n.tree-component .mat-tree-node .input-wrapper {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-right: 4px;\n}\n.tree-component .mat-tree-node input {\n  width: 100%;\n  margin: 0 0 0 16px;\n  padding: 0.1rem 0.3rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.15rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.tree-component .mat-tree-node input:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.tree-component .dnd-drag {\n  opacity: 0.5;\n}\n.tree-component .dnd-over {\n  box-shadow: inset 0px 0px 0px 2px #CCC;\n  background: rgba(66, 66, 66, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvZWRpdG9yL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBUTtFQUNJLHVDQUFBO0FDRVo7QURBUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVo7QURDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0NaO0FERVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FDQVo7QURFWTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdEQUFBO0FDQWhCO0FES0k7RUFDSSxZQUFBO0FDSFI7QURNSTtFQUNJLHNDQUFBO0VBQ0EsaUNBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmVlLWNvbXBvbmVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpob3ZlciwgJi5mb2N1c2VkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsNjYsNjYsMC4xKTtcbiAgICAgICAgfVxuICAgICAgICAubm9kZS1jb250ZW50IHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC13cmFwcGVyICB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM4MGJkZmY7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZG5kLWRyYWcge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmRuZC1vdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMnB4ICNDQ0M7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjYsNjYsNjYsMC4xKTtcbiAgICB9XG59XG4iLCIudHJlZS1jb21wb25lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udHJlZS1jb21wb25lbnQgLm1hdC10cmVlLW5vZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50cmVlLWNvbXBvbmVudCAubWF0LXRyZWUtbm9kZTpob3ZlciwgLnRyZWUtY29tcG9uZW50IC5tYXQtdHJlZS1ub2RlLmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuMSk7XG59XG4udHJlZS1jb21wb25lbnQgLm1hdC10cmVlLW5vZGUgLm5vZGUtY29udGVudCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udHJlZS1jb21wb25lbnQgLm1hdC10cmVlLW5vZGUgLmlucHV0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4udHJlZS1jb21wb25lbnQgLm1hdC10cmVlLW5vZGUgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMCAxNnB4O1xuICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi50cmVlLWNvbXBvbmVudCAubWF0LXRyZWUtbm9kZSBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzgwYmRmZjtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMjUpO1xufVxuLnRyZWUtY29tcG9uZW50IC5kbmQtZHJhZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi50cmVlLWNvbXBvbmVudCAuZG5kLW92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAycHggI0NDQztcbiAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjEpO1xufSJdfQ== */");

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
const core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
const tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
const tree_2 = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
const tree_node_directive_1 = __webpack_require__(/*! ../../directives/tree-node.directive */ "./src/app/shared/directives/tree-node.directive.ts");
/** Renders a recursive tree */
let TreeComponent = class TreeComponent {
    constructor() {
        this.options = {
            idField: ''
        };
    }
    set nodes(nodes) {
        this._nodes = nodes;
        this.build();
    }
    ngOnInit() {
        this.build();
    }
    /**
     * Checks if the `node`is expandable
     */
    expandable(_, node) {
        return node.expanded || node.expandable;
    }
    /**
     * Expands the passed node and recursively expand all its parents.
     */
    expand(e) {
        const node = this.findNode(e);
        if (node) {
            if (this.options.expanded) {
                this.options.expanded(node);
            }
            const parent = this.findParent(node);
            this.treeControl.expand(parent);
            if (parent) {
                parent.expanded = true;
                if (this.options.expanded) {
                    this.options.expanded(parent);
                }
            }
            if (parent && parent.level > 0) {
                this.expand(parent);
            }
        }
    }
    collapse(e) {
        const node = this.findNode(e);
        if (node) {
            this.treeControl.collapse(node);
        }
    }
    /**
     * Adds `node` to the children of `parent`
     * and sets the parent in a editing state.
     * @param parent the parent of the node to add.
     * @param node the node to add.
     */
    pushNode(parent, node) {
        parent.creating = true;
        parent.renaming = false;
        parent.expanded = true;
        this.editedName = '';
        this.editing = this.transformer(node);
        this.editing.creating = true;
        this.editing.renaming = false;
        this.editingParent = parent;
        this.treeControl.expand(parent);
    }
    renameNode(node) {
        node.renaming = true;
        this.editedName = node.name;
        this.editing = node;
        this.editing.creating = false;
        this.editing.renaming = true;
    }
    endEdit() {
        if (this.editingParent) {
            this.editingParent.creating = this.editingParent.renaming = false;
        }
        this.editing.creating = this.editing.renaming = false;
        this.editing = this.editingParent = null;
        // TODO fix throw exception after renaming
    }
    /**
     * Emits `editing` event with the original
     * KeyboardEvent `event`
     * @param event the original event.
     */
    onEdit(event) {
        if (this.options.edited) {
            this.options.edited({
                node: this.editing,
                event,
                editedText: this.editedName,
            });
        }
    }
    onTrack(_, item) {
        return item.id;
    }
    /**
     * Focus the node `e` inside the tree, expand all its parents
     * and moves the scroller to make the node visible.
     * @param e A node id or a reference to a node.
     */
    onFocus(e) {
        if (this.focused) {
            this.focused.focused = false;
            this.focused = null;
        }
        this.focused = this.findNode(e);
        if (this.focused) {
            this.focused.focused = true;
            this.focused.expanded = this.focused.expandable && !this.focused.expanded;
            this.expand(this.focused);
            const node = document.getElementById('tree-node-' + this.focused.id);
            if (node) {
                node.focus();
            }
        }
    }
    /**
     * Focus the `node` and emits `clicked` event.
     * @param node the node.
     * @param event original event.
     */
    onClick(node, event) {
        if (this.options.selected) {
            this.options.selected({ node, event });
        }
    }
    onContextMenu(node, event) {
        if (this.options.contextmenu) {
            this.options.contextmenu({ node, event });
        }
    }
    build() {
        this.treeControl = new tree_1.FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new tree_2.MatTreeFlattener((node, level) => this.transformer(node, level), node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.connect();
    }
    findNode(e) {
        if (e && typeof (e) === 'string') {
            return this.treeControl.dataNodes.find(n => n.id === e);
        }
        return e;
    }
    /**
    * Iterates over each node in reverse order and return the first node
    * that has a lower level than the passed node.
    */
    findParent(node) {
        const currentLevel = this.treeControl.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.treeControl.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
    }
    connect() {
        if (this.options.idField && this.dataSource) {
            this.dataSource.data = this._nodes;
            this.treeControl.dataNodes.forEach(node => {
                if (node.expanded) {
                    this.treeControl.expand(node);
                }
            });
        }
    }
    transformer(node, level) {
        node.level = level;
        node.expandable = !!node.children && node.children.length > 0;
        if (!this.options.idField) {
            throw new Error('@Input() idField must be provided');
        }
        if (!(this.options.idField in node)) {
            throw new Error(`property '${this.options.idField}' must be present in the nodes`);
        }
        node.id = node[this.options.idField];
        return node;
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
    prompt(options, completion) {
        this.promptAsync(options).then((data) => {
            completion(data);
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
    confirm(options, confirm, cancel) {
        this.confirmAsync(options).then((success) => {
            if (success && confirm) {
                confirm();
            }
            else if (!success && cancel) {
                cancel();
            }
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
const icon_pipe_1 = __webpack_require__(/*! src/app/pages/editor/shared/pipes/icon.pipe */ "./src/app/pages/editor/shared/pipes/icon.pipe.ts");
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
const ngx_monaco_editor_1 = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
const angular2_markdown_1 = __webpack_require__(/*! angular2-markdown */ "./node_modules/angular2-markdown/index.js");
const loading_component_1 = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
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
            trust_html_pipe_1.TrustHtmlPipe,
            trust_url_pipe_1.TrustUrlPipe,
            trust_script_pipe_1.TrustScriptPipe,
            trust_style_pipe_1.TrustStylePipe,
            trust_resource_url_pipe_1.TrustResourceUrlPipe,
            icon_pipe_1.IconPipe
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule,
            angular_split_1.AngularSplitModule,
            ngx_monaco_editor_1.MonacoEditorModule,
            angular2_markdown_1.MarkdownModule,
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule,
            angular_split_1.AngularSplitModule,
            ngx_monaco_editor_1.MonacoEditorModule,
            angular2_markdown_1.MarkdownModule,
            tree_component_1.TreeComponent,
            prompt_component_1.PromptComponent,
            confirm_component_1.ConfirmComponent,
            loading_component_1.LoadingComponent,
            autofocus_directive_1.AutofocusDirective,
            dnd_directive_1.DndDirective,
            run_scripts_directive_1.RunScriptsDirective,
            tree_node_directive_1.TreeNodeDirective,
            trust_html_pipe_1.TrustHtmlPipe,
            trust_url_pipe_1.TrustUrlPipe,
            trust_script_pipe_1.TrustScriptPipe,
            trust_style_pipe_1.TrustStylePipe,
            trust_resource_url_pipe_1.TrustResourceUrlPipe,
            icon_pipe_1.IconPipe
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

/***/ "./src/app/shared/themes/theme.files.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/themes/theme.files.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
class FileIcons {
}
exports.FileIcons = FileIcons;
/**
 * Defines file icons
 */
exports.fileIcons = {
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

/***/ "./src/app/shared/themes/theme.folders.ts":
/*!************************************************!*\
  !*** ./src/app/shared/themes/theme.folders.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable: max-line-length
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Defines folder icons
 */
exports.folderIcons = [
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

/***/ "./src/app/shared/themes/theme.icons.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/themes/theme.icons.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const paths_model_1 = __webpack_require__(/*! src/app/shared/models/paths.model */ "./src/app/shared/models/paths.model.ts");
const filters_1 = __webpack_require__(/*! ../../pages/editor/shared/models/filters */ "./src/app/pages/editor/shared/models/filters.ts");
const resource_1 = __webpack_require__(/*! ../../pages/editor/shared/models/resource */ "./src/app/pages/editor/shared/models/resource.ts");
const theme_files_1 = __webpack_require__(/*! ./theme.files */ "./src/app/shared/themes/theme.files.ts");
const theme_folders_1 = __webpack_require__(/*! ./theme.folders */ "./src/app/shared/themes/theme.folders.ts");
const BASE_DIR = 'static/editor/assets/icons/explorer/';
function iconPath(input) {
    let path = '';
    if (input) {
        if (input.type === resource_1.ResourceTypes.Folder) {
            const theme = theme_folders_1.folderIcons[0];
            path = BASE_DIR + theme.defaultIcon.name;
            if (filters_1.isRoot(input)) {
                path = BASE_DIR + theme.rootFolder.name;
            }
            else {
                const icon = theme.icons.find(item => item.folderNames.includes(input.name.toLowerCase()));
                if (icon) {
                    path = BASE_DIR + icon.name;
                }
            }
            if (input.expanded) {
                path += '-open';
            }
            path += '.svg';
        }
        else {
            const extension = paths_model_1.extname(input.path);
            const icon = theme_files_1.fileIcons.icons.find(item => {
                return (item.fileExtensions || []).includes(extension);
            }) || theme_files_1.fileIcons.defaultIcon;
            path = BASE_DIR + icon.name + '.svg';
        }
        return path;
    }
    return '';
}
exports.iconPath = iconPath;


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

module.exports = __webpack_require__(/*! /Users/mamadou/Desktop/PL/editor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map