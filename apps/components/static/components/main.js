(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-editor/automaton-editor.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-editor/automaton-editor.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"automaton-editor-component {{ css }}\" [style.height]=\"editorHeight\">\n    <div class=\"actions\">\n        <ng-container *ngFor=\"let action of actions\">\n            <button mat-raised-button color=\"primary\" (click)=\"action.action()\">\n                {{ action.name }}\n            </button>\n        </ng-container>\n    </div>\n    <div class=\"canvas\" #container></div>\n</div>\n<ng-container *ngIf=\"debug\">\n<pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-viewer/automaton-viewer.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-viewer/automaton-viewer.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"automation-viewer-component {{ css }}\" graphviz></div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-group/checkbox-group.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-group/checkbox-group.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    class=\"checkbox-group-component {{ css }}\"\n    [class.disabled]=\"disabled\"\n    [class.horizontal]=\"horizontal\">\n    <ng-container *ngFor=\"let item of items; trackBy: trackBy\">\n        <div\n            class=\"checkbox-item {{ item.css }}\"\n            [class.checked]=\"item.checked\"\n            (click)=\"onDidCheckboxChange($event, item)\">\n            <mat-checkbox\n                color=\"primary\"\n                [checked]=\"item.checked\"\n                [disabled]=\"disabled\">\n                <div [innerHTML]=\"item.content | markdown | trustHtml\"></div>\n            </mat-checkbox>\n        </div>\n    </ng-container>\n</div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-editor/code-editor.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-editor/code-editor.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"code-editor-component {{ css }}\">\n    <div class=\"code-editor-component-toolbar\">\n        <mat-form-field>\n            <mat-label>Language</mat-label>\n            <mat-select\n                (selectionChange)=\"onDidSelectLanguage($event)\"\n                [value]=\"language\">\n                <mat-option *ngFor=\"let code of codes\" [value]=\"code.language\">\n                    {{ code.language }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <div class=\"spacer\"></div>\n        <button\n            mat-icon-button\n            aria-label=\"Reset the editor default code\"\n            matTooltip=\"Reset the editor default code\"\n            (click)=\"onDidResetEditorCode()\">\n            <mat-icon>refresh</mat-icon>\n        </button>\n    </div>\n    <ngx-monaco-editor\n        [style.height]=\"height\"\n        [options]=\"{}\"\n        [model]=\"{}\"\n        (onInit)=\"onDidLoadEditor($event)\">\n    </ngx-monaco-editor>\n</div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown/countdown.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown/countdown.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"countdown-component {{ css }} anim-scale-pulse\" *ngIf=\"!hidden\">{{ time }}</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drag-drop/drag-drop.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drag-drop/drag-drop.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    dragNdrop\n    class=\"drag-drop-component {{ css }}\"\n    [class.droppable]=\"droppable\"\n    [class.disabled]=\"disabled\"\n    (dropped)=\"dropped($event)\"\n    [innerHTML]=\"content | markdown | trustHtml\">\n</div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph-viewer/graph-viewer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph-viewer/graph-viewer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"graph-viewer-component {{ css }}\" graphviz [graph]=\"graph\"></div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hint/hint.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hint/hint.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"hint-component {{ css }}\">\n    <div *ngIf=\"showIcon\" class=\"hint-component-header\" (click)=\"consume()\">\n        <i class=\"far fa-lightbulb hint-component-icon\"></i>\n        <div *ngIf=\"label\" [innerHTML]=\"label|markdown|trustHtml\"></div>\n    </div>\n    <div class=\"hint-items-container\">\n        <ng-container *ngFor=\"let hint of items; let i=index; trackBy:trackBy\">\n            <div *ngIf=\"hint.consumed\" class=\"hint-item\">\n                <div class=\"hint-index\">\n                    {{ i + 1 }} / {{ items.length }}\n                </div>\n                <div class=\"hint-content {{ hint.css }}\" [innerHTML]=\"hint.content|markdown|trustHtml\"></div>\n            </div>\n        </ng-container>\n        <button\n            *ngIf=\"hasMore\"\n            class=\"hint-button-next\"\n            mat-button\n            (click)=\"consume()\">{{ moreHintTitle }}\n        </button>\n    </div>\n</div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-component {{ css }}\">\n    <mat-form-field\n        class=\"form-field\"\n        [style.width]=\"width\"\n        [appearance]=\"appearance\"\n        floatLabel=\"always\">\n        <mat-label *ngIf=\"placeholder\">{{ placeholder }}</mat-label>\n        <div *ngIf=\"suffix\" matSuffix [innerHTML]=\"suffix | markdown | trustHtml\"></div>\n        <ng-container [ngSwitch]=\"type\">\n            <!-- MULTI LINE -->\n            <ng-container *ngSwitchCase=\"'multiline'\">\n                <textarea\n                    matInput\n                    matTextareaAutosize\n                    type=\"multiline\"\n                    [formControl]=\"form\">\n                </textarea>\n            </ng-container>\n            <!-- NUMERIC -->\n            <ng-container *ngSwitchCase=\"'number'\">\n                <input\n                    matInput\n                    type=\"text\"\n                    inputmode=\"numeric\"\n                    pattern=\"[0-9]*\"\n                    numeric\n                    [(ngModel)]=\"value\"/>\n            </ng-container>\n            <!-- TEXT -->\n            <ng-container *ngSwitchDefault>\n                <input\n                    matInput\n                    type=\"text\"\n                    [formControl]=\"form\"\n                    [matAutocomplete]=\"auto\"/>\n                <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option\n                        *ngFor=\"let option of $autocomplete | async\"\n                        [value]=\"option\">\n                        {{ option }}\n                    </mat-option>\n                </mat-autocomplete>\n            </ng-container>\n        </ng-container>\n    </mat-form-field>\n</div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jsxgraph/jsxgraph.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jsxgraph/jsxgraph.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"id\" class=\"jsxgraph-component {{ css }}\"></div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/match-list/match-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/match-list/match-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"match-list-component {{ css }}\" [class.disabled]=\"disabled\">\n    <div class=\"align-left\">\n        <ng-container *ngFor=\"let node of nodes\">\n            <ng-container *ngIf=\"node.source\">\n                <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: node }\"></ng-container>\n            </ng-container>\n        </ng-container>\n    </div>\n    <div class=\"align-right\">\n        <ng-container *ngFor=\"let node of nodes\">\n            <ng-container *ngIf=\"node.target\">\n                <ng-container *ngTemplateOutlet=\"nodeTemplate; context: { $implicit: node }\"></ng-container>\n            </ng-container>\n        </ng-container>\n    </div>\n</div>\n\n<ng-template #nodeTemplate let-node>\n    <div\n        [id]=\"node.id\"\n        [innerHTML]=\"node.content | markdown | trustHtml\"\n        class=\"match-list-item {{ node.css }}\">\n    </div>\n</ng-template>\n\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-input/math-input.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-input/math-input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #container class=\"math-input-component {{ css }}\" [class.disabled]=\"disabled\"></div>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-matrix/math-matrix.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-matrix/math-matrix.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"resizable; else notResizable\"\n    class=\"math-matrix-component {{ css }}\"\n    mwlResizable\n    [enableGhostResize]=\"true\"\n    [resizeEdges]=\"{bottom: true, right: true}\"\n    (resizeEnd)=\"onResizeEnd($event)\">\n    <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>\n\n<ng-template #notResizable>\n    <div class=\"math-matrix-component\">\n        <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n    </div>\n</ng-template>\n\n<ng-template #template>\n    <div class=\"matrix-container\">\n        <table class=\"matrix-table\">\n            <tbody>\n                <tr *ngFor=\"let row of matrix\">\n                    <td *ngFor=\"let cell of row\" class=\"matrix-cell\" [ngStyle]=\"{ width: cellWidth, height: cellHeight }\">\n                        <input class=\"matrix-input {{ cell.css }}\"\n                        [ngStyle]=\"{ width: cellWidth, height: cellHeight }\"\n                        [disabled]=\"disabled || cell.disabled\"\n                        tabindex=\"1\" [(ngModel)]=\"cell.value\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</ng-template>\n\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\"  [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-group/radio-group.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-group/radio-group.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-radio-group\n    class=\"radio-group-component {{ css }}\"\n    [class.disabled]=\"disabled\"\n    [class.horizontal]=\"horizontal\"\n    [(ngModel)]=\"selection\"\n    [disabled]=\"disabled\"\n    (change)=\"detectChanges()\">\n    <ng-container *ngFor=\"let item of items; let i = index; trackBy: trackBy\">\n        <div\n            class=\"radio-item {{ item.css }}\"\n            (click)=\"selection = item.id\"\n            [class.selected]=\"selection === item.id\">\n            <mat-radio-button\n                color=\"primary\"\n                [name]=\"item.id\"\n                [value]=\"item.id\">\n                <div [innerHTML]=\"item.content | markdown | trustHtml\"></div>\n            </mat-radio-button>\n        </div>\n    </ng-container>\n</mat-radio-group>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sort-list/sort-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sort-list/sort-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list class=\"sort-list-component {{ css }}\" [class.disabled]=\"disabled\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n    <ng-container *ngFor=\"let item of items; trackBy: trackBy\">\n        <mat-list-item class=\"sort-item {{ item.css }}\"\n            cdkDrag [innerHTML]=\"item.content | markdown | trustHtml\">\n        </mat-list-item>\n    </ng-container>\n</mat-list>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-select/text-select.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-select/text-select.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n    #container\n    *ngIf=\"mode === 'word'; else freeMode\"\n    class=\"text-select-component words-mode {{ css }} {{ typo | typography }}\"\n    (click)=\"didWordSelection($event)\"\n    [innerHTML]=\"text | textSelectSplit:options | trustHtml\">\n</div>\n<ng-template #freeMode>\n    <div\n        #container\n        class=\"text-select-component free-mode {{ css }} {{ typo | typography }}\"\n        (mouseup)=\"didFreeSelection($event)\"\n        [innerHTML]=\"text | textSelectSplit:options | trustHtml\">\n    </div>\n</ng-template>\n<ng-container *ngIf=\"debug\">\n    <pre class=\"debug\" [innerHTML]=\"serialize() | json\"></pre>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/advanced-usage/advanced-usage.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/advanced-usage/advanced-usage.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Advanced Usage</h1>\n<mat-divider></mat-divider>\n<next-prev prevLink=\"/components/simple-usage\" nextLink=\"/components/components\"></next-prev>\n<section>\n    <p>\n        We will see in this chapiter advanced usage of the framework and how\n        to extend the functionalities of the components.\n    </p>\n</section>\n\n<section>\n    <h3>=: Operator</h3>\n    <p>\n        The =: operator is an shorthand syntax to create a JSON. As stated in the introduction,\n        a component outside of graders and builders is just a JSON object. When you use the =: operator,\n        the framework will generate a JSON for you. <br>\n        Example:\n    </p>\n    <p>\n        The line <code>sortlist =: SortList</code> is just a shorthand syntax changed at compile time to: <br />\n        <code>sortlist % {{'{'}} \"cid\": \"RANDOM GENERATED CID\", \"selector\": \"c-sort-list\" {{'}'}}</code><br/><br/>\n        So if you replace the =: operator by the generated code you will get the same result.\n    </p>\n</section>\n\n<section>\n    <h3>cid and selector properties</h3>\n    <div>\n        As you can see in the example above, the generated JSON contains two properties:\n        <ul>\n            <li>\n                <b>cid:</b>\n                <p>This is the unique identifier of the component used by the framework to keep a track of the component</p>\n             </li>\n            <li>\n                <b>selector</b>\n                <p>This is the html tag that the framework will insert when you use  <code>|component</code> filter.</p>\n            </li>\n        </ul>\n        So if you write <code> {{'{' }} sortlist|component {{ '}'}}</code> in the form of the PL the framework will replace it with :\n        <code> &lt;c-sort-list cid=\"THE GENERATED CID\"&gt;  &lt;c-sort-list/&gt;</code>\n    </div>\n    <p>\n        =: operator is just a shorthand syntax but you can use the full syntax described here and you will get the same result.\n        You are free to give a custom cid.\n    </p>\n</section>\n\n<section>\n    <h3>Create a component inside a builder</h3>\n    <p>\n        The examples of this tutorial create the components outside of PL graders but if you want to create inside a grader\n        you can instantiate the class associated to the component. The class is the same name as the value you put after =: operator. <br/>\n        Example:\n    </p>\n    <p>\n\n    <code>before==</code> <br/>\n    <code>component1 = Component(cid=\"mycid1\", selector= \"c-sort-list\") # a component with the base class</code> <br/>\n    <code>component2 = MatchList() # cid and selector will be set by the class itself.</code> <br/>\n    <code>globals()[\"component3\"] = SortList() # create a component from a string.</code> <br/>\n    <code>==</code>\n    </p>\n</section>\n\n<section>\n    <h3>Additional notes</h3>\n\n    <p class=\"info\">\n        Components are compatible only with the graders and builders that get\n        the context of the exercise by calling the function\n        <code>sandboxio.get_context()</code>. This is the case for the builder <code>before</code>\n        and the grader <code>evaluator</code>.\n    </p>\n    <p class=\"info\">\n        You can instantiate the component classes without doing a python import\n        because they are added to the context and the sandbox by the framework.\n        So never put a file with the name <code>components.py</code> on the sandbox because it will be removed by the framework.\n    </p>\n    <p class=\"info\">\n        A very important think to keep in mind when you use component is that\n        all the properties you define will be sent to the HTML the component\n        will use only the valid one but students also can see the properties\n        by opening the browser inspector. <br />\n        So NEVER PUT THE ANSWER or any other information that can help the\n        student to find the answer in the component. <br />\n        If you want to save a hidden property, use an another variable like in\n        this example or add the property to the component by prefixing the name\n        of the property by an underscore \"_\". In this way the framework will not\n        send the property the the browser and you can still use it inside your\n        grade and builder codes.\n    </p>\n    <p class=\"info\">\n        You can sets the property <code>debug</code> of a component to\n        <code>true</code> to display the properties of a component in the HTML.\n    </p>\n</section>\n<next-prev prevLink=\"/components/simple-usage\" nextLink=\"/components/components\"></next-prev>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/api-doc/api-doc.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/api-doc/api-doc.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"component\">\n    <h1>{{ component.name }}</h1>\n    <span class=\"selector\">\n        <ng-container *ngFor=\"let selector of component.selector|split:'|'\">\n            &lt;{{ selector }}&gt; &lt;/{{ selector }}&gt; <br/>\n        </ng-container>\n    </span>\n    <mat-divider></mat-divider>\n\n    <section>\n        <div [innerHTML]=\"component.description | trustHtml\"></div>\n    </section>\n\n    <div\n        [innerHTML]=\"\n                docPage(component)\n                | assetData\n                | async\n                | trustHtml\n        \"\n    ></div>\n\n    <section *ngIf=\"component.usages\">\n        <h2>Usage</h2>\n        <playground [tabs]=\"component.usages\"></playground>\n    </section>\n\n    <section *ngIf=\"component.css && component.css.length\">\n        <h3>Appearance</h3>\n        <table>\n            <thead>\n                <tr>\n                    <th><h3>css selector</h3></th>\n                    <th><h3>description</h3></th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let css of component.css\">\n                    <tr>\n                        <th>{{ css.selector }}</th>\n                        <td>{{ css.description }}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </section>\n\n    <section *ngIf=\"component.properties && component.properties.length\">\n        <h2>Properties</h2>\n        <table>\n            <ng-container *ngFor=\"let prop of component.properties\">\n                <thead>\n                    <tr>\n                        <th colspan=\"2\">\n                            <h3>{{ prop.name }}</h3>\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th>Description</th>\n                        <td [innerHTML]=\"prop.description | trustHtml\"></td>\n                    </tr>\n                    <tr>\n                        <th>Type</th>\n                        <td>\n                            <code>{{ prop.type }}</code>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>Default</th>\n                        <td>\n                            <code>{{ prop.default | json }}</code>\n                        </td>\n                    </tr>\n                </tbody>\n            </ng-container>\n        </table>\n    </section>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/css-doc/css-doc.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/css-doc/css-doc.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <p>\n        Component framework comes with a full featured API to custom the css of all the components.\n        Everytime you see a property <code>css</code> on a component,\n        the value of this property should be a space separated list of css classes.<br/>\n    </p>\n\n    <p>\n        Example: <br/>\n        <code>sortlist.items[0][\"css\"] = \"a b c\"</code> will add the css classes a,\n        b and c to the items[0] of the Sort List component.\n    </p>\n\n    <p>\n        The framework provides 80+ css classes that you can use to customize the components. The classes\n        are listed in the section below.\n    </p>\n    <p>\n        You can click on an animation of <b>Animation</b> section to apply it to the elements\n        of the <b>Appearance</b> section. You can copy the css of the elements of <b>Appearance</b> section\n        by clicking on an element.\n    </p>\n</section>\n<section>\n    <h3>Appearance</h3>\n    <div class=\"appearances\">\n        <div class=\"box-appearance {{ css }} animated {{ activeAnimation }} infinite\"\n            *ngFor=\"let css of appearances;\"\n            matTooltip=\"Click to copy\"\n            (click)=\"copyCss(css)\">\n            <div class=\"text\">{{ css }}</div>\n        </div>\n    </div>\n</section>\n\n<section>\n<h3>Animations</h3>\n<div class=\"animations\">\n    <div class=\"box-animation\" *ngFor=\"let animation of animations; trackBy: trackBy\" (click)=\"animate(animation)\">\n        <div class=\"text animated {{ animation }}\">{{ animation }}</div>\n    </div>\n</div>\n</section>\n\n<section>\n    <h3>Animation Options</h3>\n    <p> You can apply the following options to the animations:</p>\n    <ul>\n        <li>fast</li>\n        <li>faster</li>\n        <li>slow</li>\n        <li>slower</li>\n        <li>delay-1s</li>\n        <li>delay-2s</li>\n        <li>delay-3s</li>\n        <li>delay-4s</li>\n        <li>delay-5s</li>\n        <li>infinite</li>\n    </ul>\n</section>\n\n<section>\n    <h3>Usage</h3>\n    <p>\n        If the Css API is not enough for your needs, you can create your own css classes and add them to the components.\n    </p>\n    <playground [tabs]=\"usages\"></playground>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container autosize>\n    <mat-drawer mode=\"side\" [opened]=\"sidebarOpened\">\n    <mat-list>\n        <ng-container *ngFor=\"let guide of guides\">\n            <mat-list-item class=\"nav-item\">\n                <a mat-flat-button [routerLink]=\"guide.link\">{{ guide.name }}</a>\n            </mat-list-item>\n            <mat-divider></mat-divider>\n        </ng-container>\n        <ng-container *ngFor=\"let definition of api\">\n            <mat-list-item class=\"nav-item\">\n                <img [src]=\"('images/' + definition.icon)|assetPath\" [alt]=\"definition.name\">\n                <a class=\"no-hover-effect\" mat-flat-button [routerLink]=\"definition.link\">{{ definition.name }}</a>\n            </mat-list-item>\n            <mat-divider></mat-divider>\n        </ng-container>\n    </mat-list>\n    </mat-drawer>\n    <mat-drawer-content>\n        <mat-toolbar>\n            <button mat-icon-button (click)=\"sidebarOpened = !sidebarOpened\"><mat-icon>menu</mat-icon></button>\n            <span>Components Framework</span>\n        </mat-toolbar>\n        <div class=\"router-outlet\">\n            <router-outlet></router-outlet>\n        </div>\n    </mat-drawer-content>\n</mat-drawer-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/intro/intro.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/intro/intro.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Introduction to components</h1>\n<mat-divider></mat-divider>\n<next-prev nextLink=\"/components/simple-usage\" ></next-prev>\n<section>\n    <h3>Assumptions</h3>\n    <p>\n        These docs assume that you are already familiar with\n        <a href=\"https://www.w3schools.com/\">HTML, CSS</a> and\n        <a href=\"https://documentationpl.readthedocs.io/fr/latest/langage_pl/\"\n            >Premier Langage documentation</a\n        >. Some skills in JavaScript and Python may be useful also.\n    </p>\n</section>\n\n<mat-accordion displayMode=\"flat\">\n    <mat-expansion-panel expanded=\"true\">\n        <mat-expansion-panel-header>\n            <h3>What is Component Framework?</h3>\n        </mat-expansion-panel-header>\n        <p>\n            Component Framework is a UI toolkit for building performant, complex and\n            beautiful exercises.\n        </p>\n        <p>\n            A component implement and encapsulate complex behavior which then can be reused\n            in many places of an exercise.\n        </p>\n\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <h3>Goals</h3>\n        </mat-expansion-panel-header>\n        <ul>\n            <li>\n                <b>Web Standards-based</b>\n                <p>\n                    Components are built on top of the latest standardized web\n                    technologies. Because of this, components works accross all\n                    modern browsers.\n                </p>\n            </li>\n            <li>\n                <b>Encapsulation</b>\n                <p>\n                    An important aspect of components is encapsulation. The structure (HTML), the style (CSS) and behavior (JS)\n                    of a component is encapsulated and isolated from other code of the page so that different parts do not clash.\n                </p>\n            </li>\n            <li>\n                <b>Simplicity</b>\n                <p>\n                    Components are built with simplicity in mind, so that creating\n                    exercise is easy to learn, and accessible to anyone with a\n                    little knowledge in programming. Some components provide auto\n                    correction feature so you just specify your data and the\n                    component will evaluate itself and give a grade to the student\n                    without the need to write any grade code in python or html code\n                    to create the UI.\n                </p>\n            </li>\n            <li>\n                <b>Reusability</b>\n                <p>\n                    All the components are reusable you don't have to extends any file, you just provide your data\n                    and the component will render itself.\n                </p>\n            </li>\n            <li>\n                <b>Extensible</b>\n                <p>\n                    The framework is designed to be extensible so you can customize\n                    the styles, animations and properties of the components.\n                </p>\n            </li>\n        </ul>\n    </mat-expansion-panel>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n            <h3>How it works?</h3>\n        </mat-expansion-panel-header>\n        <section>\n            <p>\n                Generally, when a teacher wants to create an exercise, he thinks about the following questions:\n            </p>\n\n            <ul>\n                <li>What data he will present to the student?</li>\n                <li>What the student will see visually?</li>\n                <li>How he will create the complex UI?</li>\n                <li>How he will handle the actions of the student on the data to evaluate the answer?</li>\n            </ul>\n\n            <div>\n                Components Framework uses MVC design pattern to provide an answer to theses questions.\n                <ul>\n                    <li>\n                        <b>Model</b>\n                        <p>\n                            The model of a component is the properties (data) that define the component.\n                            The properties should be specified using <a href=\"https://www.w3schools.com/js/js_json_intro.asp\">JSON format</a>. <br/>\n                            For example the model of the <a routerLink=\"/components/sort-list\">SortList</a> component is an array of items that\n                            you want to sort.\n                        </p>\n                        <p matTooltip=\"JSON representation of the RadioGroup component\">\n                            <code>mycomponent % {{ '{' }} {{ '}' }}</code> <br/>\n                            <code>mycomponent.cid = mycid </code><br/>\n                            <code>mycomponent.selector = c-radio-group </code><br/>\n                            <code>mycomponent.items %=</code><br/>\n                            <code>{{'['}}</code> <br/>\n                            <code>{{'{'}} \"id\": \"1\" \"content\": \"A\" {{'}'}},</code> <br/>\n                            <code>{{'{'}} \"id\": \"2\" \"content\": \"B\" {{'}'}},</code> <br/>\n                            <code>{{'{'}} \"id\": \"3\" \"content\": \"C\" {{'}'}},</code> <br/>\n                            <code>{{']'}}</code> <br/>\n                            <code>==</code>\n                        </p>\n                        <p>\n                            The difference between a simple JSON object and a component in PremierLangage is that the JSON of a component\n                            contains two special properties <code>cid</code> and <code>selector</code>.\n                            You can learn more about theses properties on the <a routerLink=\"/components/simple-usage\">Simple Usage</a> page\n                            and you will see later that you can use the <code>=:</code> operator to automatically assign the properties.\n                        </p>\n                    </li>\n                    <li>\n                        <b>View</b>\n                        <p>\n                            The view of a component is the HTML <code>selector</code> (h1, div, span...) that allows to render it on the page.\n                            Each component has it's own HTML selector. All the selectors starts with the prefix <code>c-</code>\n                            For example <code>&lt;c-sort-list&gt;&lt;/c-sort-list&gt;</code> is the selector of SortList component.\n                        </p>\n                        <p>\n                            Once a component is added on the page, it will handle the interactions of the student on it and update it's properties\n                            according to the actions of the student. For example in  the case of <code>SortList</code>, if the user change the ordering\n                            of items, the array <code>mycomponent.items</code> will be reordered.\n                        </p>\n                    </li>\n                    <li>\n                        <b>Controler</b>\n                        <p>\n                            The controller of a component is the framework itself. During the lifecyle of\n                            an exercise, the framework keeps a track of the modifications the teacher made\n                            to a component (inside the builder and the grader) and the actions of a student\n                            on the component.\n                        </p>\n                        <p>\n                            The framework synchronize the state of the component to ensure that\n                            inside the grader, the properties of the component are up to date with\n                            the actions of a student and that inside the form of the page, the visual state of the component\n                            is set according to the model modified by the teacher.\n                        </p>\n                        <p>\n                            For example, as you can see there is no <code>selection</code> property on the JSON data,\n                            we specified above, but if you toggle the debug mode of the component below you will see\n                            that the <code>selection</code> property is defined according to your actions on the widget.\n                        </p>\n                    </li>\n                </ul>\n            </div>\n            <p>\n                The following widget is the result of the <a routerLink=\"/components/radio-group\">RadioGroup</a> component described on this section.\n            </p>\n            <button mat-button (click)=\"debug = !debug\">Toggle Debug Mode</button>\n            <radio-group-component [items]=\"radio\" [debug]=\"debug\" [horizontal]=\"true\"></radio-group-component>\n        </section>\n\n    </mat-expansion-panel>\n</mat-accordion>\n\n<section>\n    <h3>Components</h3>\n    <div class=\"grid\">\n        <ng-container *ngFor=\"let definition of api\">\n            <a [routerLink]=\"definition.link\">\n                <mat-card>\n                    <img class=\"card-icon\" [src]=\"('images/' + definition.icon)|assetPath\" [alt]=\"definition.name\">\n                    <mat-card-header>\n                        <mat-card-title>{{ definition.name }}</mat-card-title>\n                    </mat-card-header>\n                    <mat-card-content>{{ definition.description }}</mat-card-content>\n                </mat-card>\n            </a>\n        </ng-container>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/next-prev/next-prev.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/next-prev/next-prev.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"next-prev\">\n    <a *ngIf=\"prevLink\" class=\"prev\" mat-raised-button  color=\"primary\" [routerLink]=\"prevLink\">❮ Prev </a>\n    <div class=\"spacer\"></div>\n    <a *ngIf=\"nextLink\" class=\"next\" mat-raised-button  color=\"primary\" [routerLink]=\"nextLink\"> Next ❯ </a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/playground/playground.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/playground/playground.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list [cols]=\"expanded ? 1 : 2\" rowHeight=\"600px\">\n    <mat-grid-tile>\n        <div class=\"leftside\">\n            <div class=\"buttons\" *ngIf=\"!empty && !loading\">\n                <button\n                    [class.anim-pulse]=\"expanded\"\n                    mat-icon-button\n                    (click)=\"tryIt()\"\n                    aria-label=\"Preview the code\">\n                    <mat-icon>play_circle_filled</mat-icon>\n                </button>\n                <button\n                    [class.anim-pulse]=\"!expanded\"\n                    mat-icon-button\n                    aria-label=\"Expand or shrink the code\"\n                    (click)=\"expanded = !expanded\">\n                    <mat-icon>\n                        {{\n                            expanded ? \"fullscreen_exit\" : \"fullscreen\"\n                        }}\n                    </mat-icon\n                    >\n                </button>\n            </div>\n            <mat-tab-group\n                [dynamicHeight]=\"true\"\n                (selectedTabChange)=\"onDidTabChanged($event)\">\n                <mat-tab *ngFor=\"let tab of tabs\" [label]=\"tab.label\">\n                    <ngx-monaco-editor\n                        class=\"code-editor\"\n                        [(ngModel)]=\"tab.code\"\n                        [options]=\"options\"\n                        (onInit)=\"onInit($event)\">\n                    </ngx-monaco-editor>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile *ngIf=\"!expanded\">\n        <div class=\"rightside\">\n            <iframe\n                *ngIf=\"focus?.preview\"\n                class=\"preview-editor\"\n                frameborder=\"0\"\n                [srcdoc]=\"focus.preview | trustHtml\"\n                (load)=\"onDidLoaded()\">\n            </iframe>\n            <mat-spinner\n                class=\"center\"\n                diameter=\"64\"\n                strokeWidth=\"2\"\n                *ngIf=\"loading\">\n            </mat-spinner>\n        </div>\n    </mat-grid-tile>\n</mat-grid-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/simple-usage/simple-usage.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docs/simple-usage/simple-usage.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Simple Usage</h1>\n<mat-divider></mat-divider>\n<next-prev prevLink=\"/components/intro\" nextLink=\"/components/advanced-usage\" ></next-prev>\n\n<section>\n    <p>\n        The usage guide will based on the <code>Sort List</code> component\n        of the introduction page. This component allow to sort a list of items by dragging\n        them and we will see step by step how it works.\n    </p>\n    <p>\n        Each component documentation page comes with an interactive exercise\n        like the following. You can modify the code\n        inside the editor and click on the preview button to play with the\n        example.\n    </p>\n    <playground [tabs]=\"usages\"></playground>\n</section>\n<section>\n    <h3>Usage explained</h3>\n    <div>\n        <ul>\n            <li>\n                # Step 1: Declaration\n                <p>\n                    This block of code represents the <b>declaration</b> of a component.\n                    Here we use operator <code>=:</code> to tell the framework to creates new SortList component.\n                    After that we specify the property items of the component that will be used to render\n                    the items inside the exercise.\n                </p>\n                <p>In the first example we use the JSON syntax to provides the items of the component. </p>\n                <p>In the second example we use a string syntax to provides the items of the component. </p>\n            </li>\n            <li>\n                # Step 2: Randomization.\n                <p>\n                    Once created we have to randomize the items of the list and keep track to the answer inside a grader.\n                </p>\n                <p>\n                    In the first example we just put the id of the items inside a list <code>answer</code> and call\n                    <code>random.shuffle()</code> on the items to randomize the list. <br/>\n                </p>\n                <p>\n                    In the second example we use the predefined functions <code>parse_string()</code> and\n                    <code>remind()</code> of SortList class to do the same thing. The first one will split the string <code>items</code> using the specified\n                    separator <code>\\n</code> in this case and create a JSON object like in the first example with random id for the items.\n                </p>\n            </li>\n            <li>\n                # Step 3: Exercise form\n                <p>\n                    From this block of code, we define the layout of the exercise and\n                    we insert the component in the HTML using the\n                    <code>|component</code> filter on the variable that hold the component.\n                    This filter will write the html code needed to render the component and map the properties of the component\n                    to the HTML element.\n                </p>\n            </li>\n            <li>\n                # Step 5 Evaluation\n                <p>\n                    After the student submit the form to the server to get a\n                    grade, the framework will sync the state of the component\n                    with the actions of the student. For example in the case of the sort list,\n                    When a student reorder the items the component will update the ordering\n                    of the property <code>sortlist.items</code>. So we compare the id of the elements on the list send by the student\n                    with the saved list <code>answer</code> and update the css property of the items to provide a feedback.\n                </p>\n                <p>\n                    In the case of the second example, we just call the method <code>auto_grade()</code> on the component to auto\n                    evaluate the exercise.</p>\n            </li>\n        </ul>\n    </div>\n</section>\n<next-prev  prevLink=\"/components/intro\"  nextLink=\"/components/advanced-usage\"></next-prev>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{data?.title}}</h4>\n<p mat-dialog-content>{{data?.message}}</p>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"close(true)\">{{data?.okTitle}}</button>\n    <button mat-button (click)=\"close(false)\">{{data?.noTitle}}</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 mat-dialog-title>{{data?.title}}</h4>\n<div mat-dialog-content>\n\t<p [innerHTML]='data?.message'></p>\n\t<form class=\"prompt-form\">\n\t\t<mat-form-field *ngFor='let field of data.fields'>\n\t\t\t<input matInput name='field.value' autocomplete=\"off\" [type]='field.type' [placeholder]=\"field?.placeholder\" [(ngModel)]='field.value' >\n\t\t</mat-form-field>\n\t</form>\n</div>\n\n<div mat-dialog-actions>\n    <button mat-button (click)=\"close(data)\">{{data.okTitle}}</button>\n    <button mat-button (click)=\"close(false)\">{{data.noTitle}}</button>\n</div>\n");

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
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        const origin = window.location.origin;
        this.router.navigateByUrl(window.location.href.replace(origin, ''));
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/prism */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_prism__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-c */ "./node_modules/prismjs/components/prism-c.js");
/* harmony import */ var prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_csharp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-csharp */ "./node_modules/prismjs/components/prism-csharp.js");
/* harmony import */ var prismjs_components_prism_csharp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_csharp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-cpp */ "./node_modules/prismjs/components/prism-cpp.js");
/* harmony import */ var prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_cpp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-json */ "./node_modules/prismjs/components/prism-json.js");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-markdown */ "./node_modules/prismjs/components/prism-markdown.js");
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prismjs/components/prism-python */ "./node_modules/prismjs/components/prism-python.js");
/* harmony import */ var prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_python__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs/components/prism-sql */ "./node_modules/prismjs/components/prism-sql.js");
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js");
/* harmony import */ var _shared_models_code_editor_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/models/code-editor.model */ "./src/app/shared/models/code-editor.model.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/definition.service */ "./src/app/shared/services/definition.service.ts");
/* harmony import */ var _components_automaton_viewer_automaton_viewer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/automaton-viewer/automaton-viewer.component */ "./src/app/components/automaton-viewer/automaton-viewer.component.ts");
/* harmony import */ var _components_automaton_editor_automaton_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/automaton-editor/automaton-editor.component */ "./src/app/components/automaton-editor/automaton-editor.component.ts");
/* harmony import */ var _components_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/checkbox-group/checkbox-group.component */ "./src/app/components/checkbox-group/checkbox-group.component.ts");
/* harmony import */ var _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/code-editor/code-editor.component */ "./src/app/components/code-editor/code-editor.component.ts");
/* harmony import */ var _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/drag-drop/drag-drop.component */ "./src/app/components/drag-drop/drag-drop.component.ts");
/* harmony import */ var _components_graph_viewer_graph_viewer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/graph-viewer/graph-viewer.component */ "./src/app/components/graph-viewer/graph-viewer.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/match-list/match-list.component */ "./src/app/components/match-list/match-list.component.ts");
/* harmony import */ var _components_jsxgraph_jsxgraph_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/jsxgraph/jsxgraph.component */ "./src/app/components/jsxgraph/jsxgraph.component.ts");
/* harmony import */ var _components_math_input_math_input_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/math-input/math-input.component */ "./src/app/components/math-input/math-input.component.ts");
/* harmony import */ var _components_math_matrix_math_matrix_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/math-matrix/math-matrix.component */ "./src/app/components/math-matrix/math-matrix.component.ts");
/* harmony import */ var _components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/radio-group/radio-group.component */ "./src/app/components/radio-group/radio-group.component.ts");
/* harmony import */ var _components_sort_list_sort_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/sort-list/sort-list.component */ "./src/app/components/sort-list/sort-list.component.ts");
/* harmony import */ var _components_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/text-select/text-select.component */ "./src/app/components/text-select/text-select.component.ts");
/* harmony import */ var _components_hint_hint_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/hint/hint.component */ "./src/app/components/hint/hint.component.ts");
/* harmony import */ var _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/countdown/countdown.component */ "./src/app/components/countdown/countdown.component.ts");
/* harmony import */ var _docs_advanced_usage_advanced_usage_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./docs/advanced-usage/advanced-usage.component */ "./src/app/docs/advanced-usage/advanced-usage.component.ts");
/* harmony import */ var _docs_api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./docs/api-doc/api-doc.component */ "./src/app/docs/api-doc/api-doc.component.ts");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./docs/docs.component */ "./src/app/docs/docs.component.ts");
/* harmony import */ var _docs_intro_intro_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./docs/intro/intro.component */ "./src/app/docs/intro/intro.component.ts");
/* harmony import */ var _docs_next_prev_next_prev_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./docs/next-prev/next-prev.component */ "./src/app/docs/next-prev/next-prev.component.ts");
/* harmony import */ var _docs_playground_playground_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./docs/playground/playground.component */ "./src/app/docs/playground/playground.component.ts");
/* harmony import */ var _docs_simple_usage_simple_usage_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./docs/simple-usage/simple-usage.component */ "./src/app/docs/simple-usage/simple-usage.component.ts");
/* harmony import */ var _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./shared/models/definition.model */ "./src/app/shared/models/definition.model.ts");
/* harmony import */ var _docs_css_doc_css_doc_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./docs/css-doc/css-doc.component */ "./src/app/docs/css-doc/css-doc.component.ts");

// CORE







// REQUIREMENTS
// syntax hightlighting for https://www.npmjs.com/package/ngx-markdown















 // https://www.npmjs.com/package/ngx-markdown

// COMPONENTS
















// DOC









let AppModule = class AppModule {
    constructor(injector, definitions) {
        this.injector = injector;
        this.definitions = definitions;
    }
    ngDoBootstrap() {
        customElements.define('c-root', Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], { injector: this.injector }));
        this.definitions.forEach(definition => {
            definition.selector.split('|').forEach(selector => {
                customElements.define(selector.trim(), Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(definition.component, { injector: this.injector }));
            });
        });
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_24__["DefinitionService"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_automaton_viewer_automaton_viewer_component__WEBPACK_IMPORTED_MODULE_25__["AutomatonViewerComponent"],
            _components_automaton_editor_automaton_editor_component__WEBPACK_IMPORTED_MODULE_26__["AutomatonEditorComponent"],
            _components_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_27__["CheckboxGroupComponent"],
            _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_28__["CodeEditorComponent"],
            _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_40__["CountDownComponent"],
            _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_29__["DragDropComponent"],
            _components_graph_viewer_graph_viewer_component__WEBPACK_IMPORTED_MODULE_30__["GraphViewerComponent"],
            _components_hint_hint_component__WEBPACK_IMPORTED_MODULE_39__["HintComponent"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"],
            _components_jsxgraph_jsxgraph_component__WEBPACK_IMPORTED_MODULE_33__["JSXGraphComponent"],
            _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_32__["MatchListComponent"],
            _components_math_input_math_input_component__WEBPACK_IMPORTED_MODULE_34__["MathInputComponent"],
            _components_math_matrix_math_matrix_component__WEBPACK_IMPORTED_MODULE_35__["MathMatrixComponent"],
            _components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_36__["RadioGroupComponent"],
            _components_sort_list_sort_list_component__WEBPACK_IMPORTED_MODULE_37__["SortListComponent"],
            _components_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_38__["TextSelectComponent"],
            _docs_docs_component__WEBPACK_IMPORTED_MODULE_43__["DocsComponent"],
            _docs_intro_intro_component__WEBPACK_IMPORTED_MODULE_44__["IntroComponent"],
            _docs_next_prev_next_prev_component__WEBPACK_IMPORTED_MODULE_45__["NextPrevComponent"],
            _docs_css_doc_css_doc_component__WEBPACK_IMPORTED_MODULE_49__["CssDocComponent"],
            _docs_api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_42__["ApiDocComponent"],
            _docs_playground_playground_component__WEBPACK_IMPORTED_MODULE_46__["PlaygroundComponent"],
            _docs_simple_usage_simple_usage_component__WEBPACK_IMPORTED_MODULE_47__["SimpleUsageComponent"],
            _docs_advanced_usage_advanced_usage_component__WEBPACK_IMPORTED_MODULE_41__["AdvancedUsageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientXsrfModule"].withOptions({
                cookieName: 'csrftoken',
                headerName: 'X-CSRFToken'
            }),
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_20__["ResizableModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_23__["MarkdownModule"].forRoot(),
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_5__["MonacoEditorModule"].forRoot({
                baseUrl: '/static/editor/assets',
                defaultOptions: {
                    automaticLayout: true
                },
                onMonacoLoad: _shared_models_code_editor_model__WEBPACK_IMPORTED_MODULE_21__["onMonacoLoaded"]
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
        ],
        entryComponents: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_automaton_viewer_automaton_viewer_component__WEBPACK_IMPORTED_MODULE_25__["AutomatonViewerComponent"],
            _components_automaton_editor_automaton_editor_component__WEBPACK_IMPORTED_MODULE_26__["AutomatonEditorComponent"],
            _components_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_27__["CheckboxGroupComponent"],
            _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_28__["CodeEditorComponent"],
            _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_40__["CountDownComponent"],
            _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_29__["DragDropComponent"],
            _components_graph_viewer_graph_viewer_component__WEBPACK_IMPORTED_MODULE_30__["GraphViewerComponent"],
            _components_hint_hint_component__WEBPACK_IMPORTED_MODULE_39__["HintComponent"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponent"],
            _components_jsxgraph_jsxgraph_component__WEBPACK_IMPORTED_MODULE_33__["JSXGraphComponent"],
            _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_32__["MatchListComponent"],
            _components_math_input_math_input_component__WEBPACK_IMPORTED_MODULE_34__["MathInputComponent"],
            _components_math_matrix_math_matrix_component__WEBPACK_IMPORTED_MODULE_35__["MathMatrixComponent"],
            _components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_36__["RadioGroupComponent"],
            _components_sort_list_sort_list_component__WEBPACK_IMPORTED_MODULE_37__["SortListComponent"],
            _components_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_38__["TextSelectComponent"],
        ],
        providers: [
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_automaton_viewer_automaton_viewer_component__WEBPACK_IMPORTED_MODULE_25__["AutomatonViewerComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_automaton_editor_automaton_editor_component__WEBPACK_IMPORTED_MODULE_26__["AutomatonEditorComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_checkbox_group_checkbox_group_component__WEBPACK_IMPORTED_MODULE_27__["CheckboxGroupComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_28__["CodeEditorComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_40__["CountDownComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_29__["DragDropComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_graph_viewer_graph_viewer_component__WEBPACK_IMPORTED_MODULE_30__["GraphViewerComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_hint_hint_component__WEBPACK_IMPORTED_MODULE_39__["HintComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_input_input_component__WEBPACK_IMPORTED_MODULE_31__["InputComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_jsxgraph_jsxgraph_component__WEBPACK_IMPORTED_MODULE_33__["JSXGraphComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_32__["MatchListComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_math_input_math_input_component__WEBPACK_IMPORTED_MODULE_34__["MathInputComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_math_matrix_math_matrix_component__WEBPACK_IMPORTED_MODULE_35__["MathMatrixComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_radio_group_radio_group_component__WEBPACK_IMPORTED_MODULE_36__["RadioGroupComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_sort_list_sort_list_component__WEBPACK_IMPORTED_MODULE_37__["SortListComponentDefinition"] },
            { provide: _shared_models_definition_model__WEBPACK_IMPORTED_MODULE_48__["COMPONENT_DEFINITIONS"], multi: true, useClass: _components_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_38__["TextSelectComponentDefinition"] },
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
        _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_24__["DefinitionService"]])
], AppModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _docs_advanced_usage_advanced_usage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs/advanced-usage/advanced-usage.component */ "./src/app/docs/advanced-usage/advanced-usage.component.ts");
/* harmony import */ var _docs_docs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/docs.component */ "./src/app/docs/docs.component.ts");
/* harmony import */ var _docs_css_doc_css_doc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./docs/css-doc/css-doc.component */ "./src/app/docs/css-doc/css-doc.component.ts");
/* harmony import */ var _docs_api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./docs/api-doc/api-doc.component */ "./src/app/docs/api-doc/api-doc.component.ts");
/* harmony import */ var _docs_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/intro/intro.component */ "./src/app/docs/intro/intro.component.ts");
/* harmony import */ var _docs_simple_usage_simple_usage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/simple-usage/simple-usage.component */ "./src/app/docs/simple-usage/simple-usage.component.ts");









const routes = [
    {
        path: 'components', component: _docs_docs_component__WEBPACK_IMPORTED_MODULE_4__["DocsComponent"],
        children: [
            { path: 'intro', component: _docs_intro_intro_component__WEBPACK_IMPORTED_MODULE_7__["IntroComponent"] },
            { path: 'simple-usage', component: _docs_simple_usage_simple_usage_component__WEBPACK_IMPORTED_MODULE_8__["SimpleUsageComponent"] },
            { path: 'advanced-usage', component: _docs_advanced_usage_advanced_usage_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedUsageComponent"] },
            { path: 'css-doc', component: _docs_css_doc_css_doc_component__WEBPACK_IMPORTED_MODULE_5__["CssDocComponent"] },
            { path: '**', component: _docs_api_doc_api_doc_component__WEBPACK_IMPORTED_MODULE_6__["ApiDocComponent"], pathMatch: 'full' },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                enableTracing: false,
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/components/automaton-editor/automaton-editor.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/automaton-editor/automaton-editor.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.automaton-editor-component {\n  height: 550px;\n  max-height: 700px;\n  border: 1px solid #CCC;\n  background-color: #CCC;\n  display: flex;\n  position: relative;\n}\n.automaton-editor-component .actions {\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  z-index: 100;\n}\n.automaton-editor-component .actions button {\n  margin-right: 4px;\n}\n.automaton-editor-component .canvas {\n  flex: 1;\n  position: relative;\n  overflow: auto;\n}\n.automaton-editor-component .automaton-state, .automaton-editor-component .endpoint {\n  -webkit-touch-callout: none !important;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.automaton-editor-component .automaton-state {\n  padding: 16px;\n  position: absolute;\n  z-index: 4;\n  opacity: 0.8;\n  cursor: move;\n  background-color: white;\n  font-size: 18px;\n  border: 1px solid #2e6f9a;\n  border-radius: 50%;\n  box-shadow: 2px 2px 19px #e0e0e0;\n  -o-box-shadow: 2px 2px 19px #e0e0e0;\n  -webkit-box-shadow: 2px 2px 19px #e0e0e0;\n  -moz-box-shadow: 2px 2px 19px #e0e0e0;\n  -moz-border-radius: 8px;\n  transition: background-color 0.25s ease-in;\n}\n.automaton-editor-component .automaton-state.focused, .automaton-editor-component .automaton-state:hover {\n  background-color: #5c96bc;\n  color: white;\n}\n.automaton-editor-component .automaton-state.automaton-state--initial:before {\n  content: \"→\";\n  font-size: 48px;\n  position: absolute;\n  left: -48px;\n  top: 50%;\n  transform: translate(0, -50%);\n  color: black;\n}\n.automaton-editor-component .automaton-state.automaton-state--final:after {\n  content: \" \";\n  position: absolute;\n  z-index: -1;\n  top: 3px;\n  left: 3px;\n  right: 3px;\n  bottom: 3px;\n  border: 3px solid #2e6f9a;\n  border-radius: 50%;\n}\n.automaton-editor-component .endpoint {\n  position: absolute;\n  bottom: 37%;\n  right: -6px;\n  width: 1em;\n  height: 1em;\n  background-color: orange;\n  cursor: pointer;\n  box-shadow: 0 0 2px black;\n  transition: box-shadow 0.25s ease-in;\n  border-radius: 50%;\n}\n.automaton-editor-component .endpoint:hover {\n  box-shadow: 0 0 6px black;\n}\n.automaton-editor-component .jtk-endpoint {\n  z-index: 3;\n}\n.automaton-editor-component path, .automaton-editor-component .jtk-endpoint {\n  cursor: pointer;\n}\n.automaton-editor-component .transition {\n  transition: background-color 0.25s ease-in;\n  background-color: white;\n  opacity: 0.8;\n  padding: 0.3em;\n  border-radius: 0.5em;\n  border: 1px solid #346789;\n  cursor: pointer;\n}\n.automaton-editor-component .jtk-connector.focused + .transition, .automaton-editor-component .transition.jtk-hover, .automaton-editor-component .jtk-source-hover, .automaton-editor-component .jtk-target-hover {\n  background-color: #1e8151;\n  color: white;\n}\n.automaton-editor-component .jtk-connector.focused path {\n  stroke: #1e8151 !important;\n  stroke-width: 2;\n}\n@media (max-width: 600px) {\n  .automaton-editor-component {\n    margin-left: 0;\n    margin-top: 10px;\n    width: 100%;\n    height: 364px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRvbWF0b24tZWRpdG9yL2F1dG9tYXRvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWFtYWRvdS9EZXNrdG9wL1BML2NvbXBvbmVudHMvc3JjL2FwcC9jb21wb25lbnRzL2F1dG9tYXRvbi1lZGl0b3IvYXV0b21hdG9uLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FERUo7QUNBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FERVI7QUNEUTtFQUNJLGlCQUFBO0FER1o7QUNDSTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDUjtBQ0VJO0VBQ0ksc0NBQUE7RUFDQSxvQ0FBQTtFQUVBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBREFSO0FDR0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUlBLDBDQUFBO0FETFI7QUNPUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRExaO0FDUVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUROWjtBQ1NRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEUFo7QUNXSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBR0Esb0NBQUE7RUFDQSxrQkFBQTtBRFRSO0FDV1E7RUFDSSx5QkFBQTtBRFRaO0FDYUk7RUFDSSxVQUFBO0FEWFI7QUNjSTtFQUNJLGVBQUE7QURaUjtBQ2VJO0VBR0ksMENBQUE7RUFFQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURkUjtBQ2lCSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRGZSO0FDbUJJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FEakJSO0FDc0JBO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFRG5CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRvbWF0b24tZWRpdG9yL2F1dG9tYXRvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMDA7XG59XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmFjdGlvbnMgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmNhbnZhcyB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmF1dG9tYXRvbi1zdGF0ZSwgLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5lbmRwb2ludCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5hdXRvbWF0b24tc3RhdGUge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIG9wYWNpdHk6IDAuODtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmU2ZjlhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTlweCAjZTBlMGUwO1xuICAtby1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5hdXRvbWF0b24tc3RhdGUuZm9jdXNlZCwgLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5hdXRvbWF0b24tc3RhdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM5NmJjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmF1dG9tYXRvbi1zdGF0ZS5hdXRvbWF0b24tc3RhdGUtLWluaXRpYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLihpJcIjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC00OHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hdXRvbWF0b24tZWRpdG9yLWNvbXBvbmVudCAuYXV0b21hdG9uLXN0YXRlLmF1dG9tYXRvbi1zdGF0ZS0tZmluYWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgcmlnaHQ6IDNweDtcbiAgYm90dG9tOiAzcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyZTZmOWE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hdXRvbWF0b24tZWRpdG9yLWNvbXBvbmVudCAuZW5kcG9pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzclO1xuICByaWdodDogLTZweDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMnB4IGJsYWNrO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hdXRvbWF0b24tZWRpdG9yLWNvbXBvbmVudCAuZW5kcG9pbnQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNnB4IGJsYWNrO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5qdGstZW5kcG9pbnQge1xuICB6LWluZGV4OiAzO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IHBhdGgsIC5hdXRvbWF0b24tZWRpdG9yLWNvbXBvbmVudCAuanRrLWVuZHBvaW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC50cmFuc2l0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBhZGRpbmc6IDAuM2VtO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0Njc4OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5qdGstY29ubmVjdG9yLmZvY3VzZWQgKyAudHJhbnNpdGlvbiwgLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC50cmFuc2l0aW9uLmp0ay1ob3ZlciwgLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IC5qdGstc291cmNlLWhvdmVyLCAuYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmp0ay10YXJnZXQtaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4MTUxO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYXV0b21hdG9uLWVkaXRvci1jb21wb25lbnQgLmp0ay1jb25uZWN0b3IuZm9jdXNlZCBwYXRoIHtcbiAgc3Ryb2tlOiAjMWU4MTUxICFpbXBvcnRhbnQ7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hdXRvbWF0b24tZWRpdG9yLWNvbXBvbmVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM2NHB4O1xuICB9XG59IiwiLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IHtcbiAgICBoZWlnaHQ6IDU1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQ0NDO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhbnZhcyB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLmF1dG9tYXRvbi1zdGF0ZSwgLmVuZHBvaW50IHtcbiAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lICAhaW1wb3J0YW50O1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hdXRvbWF0b24tc3RhdGUge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDQ7XG5cbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJlNmY5YTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTlweCAjZTBlMGUwO1xuICAgICAgICAtby1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDE5cHggI2UwZTBlMDtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG5cbiAgICAgICAgJi5mb2N1c2VkLCAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1Yzk2YmM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmF1dG9tYXRvbi1zdGF0ZS0taW5pdGlhbDpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ+KGkic7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAtNDhweDtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAmLmF1dG9tYXRvbi1zdGF0ZS0tZmluYWw6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzJlNmY5YTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5lbmRwb2ludCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAzNyU7XG4gICAgICAgIHJpZ2h0OiAtNnB4O1xuICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW47XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDZweCBibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qdGstZW5kcG9pbnQge1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cblxuICAgIHBhdGgsIC5qdGstZW5kcG9pbnQge1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG5cbiAgICAudHJhbnNpdGlvbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0Njc4OTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5qdGstY29ubmVjdG9yLmZvY3VzZWQgKyAudHJhbnNpdGlvbiwgIC50cmFuc2l0aW9uLmp0ay1ob3ZlciwgLmp0ay1zb3VyY2UtaG92ZXIsIC5qdGstdGFyZ2V0LWhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlODE1MTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuXG4gICAgLmp0ay1jb25uZWN0b3IuZm9jdXNlZCBwYXRoIHtcbiAgICAgICAgc3Ryb2tlOiAjMWU4MTUxICFpbXBvcnRhbnQ7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmF1dG9tYXRvbi1lZGl0b3ItY29tcG9uZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzY0cHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/automaton-editor/automaton-editor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/automaton-editor/automaton-editor.component.ts ***!
  \***************************************************************************/
/*! exports provided: AutomatonEditorComponent, AutomatonEditorComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatonEditorComponent", function() { return AutomatonEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatonEditorComponentDefinition", function() { return AutomatonEditorComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/automaton.model */ "./src/app/shared/models/automaton.model.ts");
/* harmony import */ var src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/ask.service */ "./src/app/shared/services/ask.service.ts");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");

// tslint:disable: no-inferrable-types




const INITIAL_STATE = 'automaton-state--initial';
const FINAL_STATE = 'automaton-state--final';
const EPSILON = '$';
let AutomatonEditorComponent = class AutomatonEditorComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
    constructor(changes, ask) {
        super(changes);
        this.ask = ask;
        /** next node id */
        this.nextId = 0;
        this.properties = [
            { name: 'automaton', default: Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_2__["emptyAutomaton"])() },
            { name: 'editorHeight', default: '300px' }
        ];
        /** Edited automaton. */
        this.automaton = null;
        this.editorHeight = '300px';
        this.actions = [];
    }
    ngAfterViewInit() {
        jsPlumb.ready(() => {
            const instance = (this.instance = jsPlumb.getInstance({
                Endpoint: ['Dot', { radius: 2 }],
                Connector: 'StateMachine',
                HoverPaintStyle: {
                    stroke: '#1e8151',
                    strokeWidth: 2
                },
                ConnectionOverlays: [
                    [
                        'Arrow',
                        {
                            location: 1,
                            id: 'arrow',
                            length: 14,
                            foldback: 0.8
                        }
                    ],
                    [
                        'Label',
                        {
                            label: 'transition',
                            id: 'transition',
                            cssClass: 'transition'
                        }
                    ]
                ],
                Container: this.container.nativeElement
            }));
            instance.registerConnectionType('basic', {
                anchor: 'Continuous',
                connector: 'StateMachine'
            });
            instance.bind('click', connection => {
                this.focus(null, connection);
            });
            instance.bind('beforeDrop', this.createTransition.bind(this));
            jsPlumb.on(this.container.nativeElement, 'dblclick', (e) => {
                this.createNode(e.offsetX, e.offsetY);
            });
            this.onRender();
        });
    }
    ngOnDestroy() {
        this.instance.reset();
    }
    onRender() {
        this.node = null;
        this.connection = null;
        this.instance.reset(true);
        this.instance.getContainer().innerHTML = '';
        try {
            if (typeof this.automaton === 'string') {
                this.automaton = Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_2__["automatonFromString"])(this.automaton);
            }
            else if (!this.automaton) {
                this.automaton = Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_2__["emptyAutomaton"])();
            }
        }
        catch (error) {
            console.log(error);
            this.automaton = Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_2__["emptyAutomaton"])();
        }
        this.nextId = this.automaton.states.length;
        const automaton = this.automaton;
        automaton.position = this.automaton.position || {};
        automaton.states = this.automaton.states || [];
        automaton.acceptingStates = this.automaton.acceptingStates || [];
        automaton.initialStates = this.automaton.initialStates || [];
        automaton.transitions = this.automaton.transitions || [];
        this.updateAlphabet();
        this.instance.batch(() => {
            automaton.states.forEach(state => {
                const position = automaton.position[state];
                if (position) {
                    this.createNode(position.x, position.y, state);
                }
                else {
                    this.createNode(Math.random() * 400, Math.random() * 200, state);
                }
            });
            setTimeout(() => {
                automaton.transitions.forEach(transition => {
                    const connection = this.instance.connect({
                        source: transition.fromState,
                        target: transition.toState,
                        type: 'basic'
                    });
                    connection
                        .getOverlay('transition')
                        .setLabel(transition.symbols.join(','));
                });
            }, 300);
        });
    }
    createTransition(info) {
        const { sourceId, targetId } = info;
        const exists = this.automaton.transitions.find(conn => {
            return conn.fromState === sourceId && conn.toState === targetId;
        });
        if (!exists) {
            info.connection.getOverlay('transition').setLabel(EPSILON);
            this.automaton.transitions.push({
                fromState: sourceId,
                toState: targetId,
                symbols: [EPSILON]
            });
            this.updateAlphabet();
            return true;
        }
        else {
            return false;
        }
    }
    createNode(x, y, nodeId) {
        const node = document.createElement('div');
        const state = nodeId || `S${this.nextId++}`;
        node.id = state;
        node.className = 'automaton-state';
        node.innerHTML = `${state} <div class="endpoint"></div>`;
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        this.automaton.position[node.id] = { x, y };
        if (!nodeId) {
            if (this.automaton.initialStates.length === 0) {
                node.classList.add(INITIAL_STATE);
                this.automaton.initialStates.push(state);
            }
            this.automaton.states.push(state);
        }
        else {
            if (this.automaton.initialStates.includes(nodeId)) {
                node.classList.add(INITIAL_STATE);
            }
            if (this.automaton.acceptingStates.includes(nodeId)) {
                node.classList.add(FINAL_STATE);
            }
        }
        jsPlumb.on(node, 'click', () => {
            this.focus(node, null);
        });
        this.instance.getContainer().appendChild(node);
        this.instance.draggable(node, {
            drag: e => {
                this.automaton.position[node.id] = { x: e.pos[0], y: e.pos[1] };
                this.detectChanges();
            }
        });
        this.instance.makeSource(node, {
            filter: '.endpoint',
            anchor: 'Continuous',
            connectorStyle: {
                stroke: '#5c96bc',
                strokeWidth: 2,
                outlineStroke: 'transparent',
                outlineWidth: 4
            },
            connectionType: 'basic',
            maxConnections: -1
        });
        this.instance.makeTarget(node, {
            dropOptions: { hoverClass: 'dragHover' },
            anchor: 'Continuous',
            allowLoopback: true
        });
        this.detectChanges();
    }
    focus(node, connection) {
        this.unfocus();
        this.node = node;
        this.connection = connection;
        const actions = [];
        if (this.node) {
            this.node.classList.remove('focused');
            this.node.classList.add('focused');
            const isInitial = this.node.classList.contains(INITIAL_STATE);
            const isFinal = this.node.classList.contains(FINAL_STATE);
            if (!isInitial) {
                actions.push({
                    name: 'Initial',
                    action: () => {
                        this.node.classList.add(INITIAL_STATE);
                        this.automaton.initialStates.push(this.node.id);
                        this.focus(this.node);
                    }
                });
            }
            if (!isFinal) {
                actions.push({
                    name: 'Final',
                    action: () => {
                        this.node.classList.add(FINAL_STATE);
                        if (!this.automaton.acceptingStates.includes(this.node.id)) {
                            this.automaton.acceptingStates.push(this.node.id);
                        }
                        this.focus(this.node);
                    }
                });
            }
            if (isInitial || isFinal) {
                actions.push({
                    name: 'Normal',
                    action: () => {
                        this.node.classList.remove(INITIAL_STATE);
                        this.node.classList.remove(FINAL_STATE);
                        this.automaton.acceptingStates = this.automaton.acceptingStates.filter(state => {
                            return state !== this.node.id;
                        });
                        this.focus(this.node);
                    }
                });
            }
            actions.push({
                name: 'Renommer',
                action: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const title = 'État';
                    const hint = 'Entrez un nouveau nom';
                    let newState = yield this.prompt(title, hint, this.node.id);
                    if (newState !== false) {
                        newState = newState.trim();
                        if (this.automaton.states.includes(newState)) {
                            alert('État déjà présent');
                        }
                        else {
                            this.automaton.states = [
                                newState,
                                ...this.automaton.states.filter(state => {
                                    return state !== this.node.id;
                                })
                            ];
                            this.automaton.acceptingStates = this.automaton.acceptingStates.map(state => {
                                if (state === this.node.id) {
                                    return newState;
                                }
                                return state;
                            });
                            this.automaton.initialStates = this.automaton.initialStates.map(state => {
                                if (state === this.node.id) {
                                    return newState;
                                }
                                return state;
                            });
                            this.automaton.transitions.forEach(transition => {
                                if (transition.fromState === this.node.id) {
                                    transition.fromState = newState;
                                }
                                if (transition.toState === this.node.id) {
                                    transition.toState = newState;
                                }
                            });
                            this.node.innerHTML = this.node.id = newState;
                        }
                    }
                    this.updateAlphabet();
                    this.detectChanges();
                })
            });
            actions.push({
                name: 'Supprimer',
                action: () => {
                    // remove initial state
                    this.automaton.initialStates = this.automaton.initialStates.filter(state => {
                        return state !== this.node.id;
                    });
                    // remove acceptingStates
                    this.automaton.acceptingStates = this.automaton.acceptingStates.filter(state => {
                        return state !== this.node.id;
                    });
                    // remove state
                    this.automaton.states = this.automaton.states.filter(state => {
                        return state !== this.node.id;
                    });
                    // remove transition
                    this.automaton.transitions = this.automaton.transitions.filter(transition => {
                        return (transition.fromState !== this.node.id &&
                            transition.toState !== this.node.id);
                    });
                    delete this.automaton.position[node.id];
                    // remove node from the dom
                    this.instance.remove(this.node);
                    this.focus();
                    this.updateAlphabet();
                }
            });
        }
        if (this.connection) {
            const canvas = connection.canvas;
            canvas.classList.add('focused');
            actions.push({
                name: 'Changer Transition',
                action: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const s = this.connection.endpoints[0];
                    const t = this.connection.endpoints[1];
                    const transition = this.automaton.transitions.find(e => {
                        return (e.fromState === s.elementId &&
                            e.toState === t.elementId);
                    });
                    const title = 'Transition';
                    const hint = 'Entrez les symboles en les séparant par une virgule';
                    const input = yield this.prompt(title, hint, transition.symbols.join(','));
                    if (input !== false) {
                        const symbols = input
                            .split(',')
                            .map((symbol) => {
                            return symbol.trim();
                        })
                            .filter((symbol) => !!symbol);
                        if (symbols.length === 0) {
                            alert('Vous devez saisir les symboles en les séparant par une virgule');
                        }
                        else {
                            this.connection
                                .getOverlay('transition')
                                .setLabel(symbols.join(','));
                            transition.symbols = symbols;
                        }
                        this.updateAlphabet();
                    }
                })
            });
            actions.push({
                name: 'Supprimer Transition',
                action: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const s = this.connection.endpoints[0];
                    const t = this.connection.endpoints[1];
                    this.automaton.transitions = this.automaton.transitions.filter(e => {
                        return !(e.fromState === s.elementId &&
                            e.toState === t.elementId);
                    });
                    this.instance.deleteConnection(this.connection);
                    this.focus(null, null);
                })
            });
        }
        this.actions = actions;
        this.detectChanges();
    }
    unfocus() {
        if (this.connection) {
            let canvas;
            if (this.connection) {
                canvas = this.connection.canvas;
                canvas.classList.remove('focused');
            }
        }
        if (this.node) {
            this.node.classList.remove('focused');
        }
    }
    updateAlphabet() {
        this.automaton.alphabet = [];
        this.automaton.transitions.forEach(transition => {
            transition.symbols.forEach(symbol => {
                if (!this.automaton.alphabet.includes(symbol)) {
                    this.automaton.alphabet.push(symbol);
                }
            });
        });
        this.detectChanges();
    }
    prompt(title, hint, val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = yield this.ask.promptAsync({
                title: title,
                okTitle: 'OK',
                noTitle: 'Annuler',
                fields: [
                    { type: 'text', placeholder: hint, value: val, required: true }
                ]
            });
            return options ? options.fields[0].value : false;
        });
    }
};
AutomatonEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__["AskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AutomatonEditorComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AutomatonEditorComponent.prototype, "automaton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AutomatonEditorComponent.prototype, "editorHeight", void 0);
AutomatonEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'automaton-editor-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./automaton-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-editor/automaton-editor.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./automaton-editor.component.scss */ "./src/app/components/automaton-editor/automaton-editor.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__["AskService"]])
], AutomatonEditorComponent);

class AutomatonEditorComponentDefinition {
    constructor() {
        this.component = AutomatonEditorComponent;
        this.name = 'Automaton Editor';
        this.icon = 'automaton.svg';
        this.selector = 'c-automaton-editor';
        this.description = `A visual automaton editor with drag & drop capabilities.`;
        this.link = '/components/automaton-editor';
        this.usages = [{ label: 'Example', path: 'playground/automaton-editor.pl' }];
        this.properties = [
            {
                name: 'automaton',
                default: 'An empty automaton',
                type: 'Automaton|string',
                description: 'String or Object representation of the automaton'
            },
            {
                name: 'editorHeight',
                default: '300px',
                type: 'string',
                description: 'Editor height'
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/automaton-viewer/automaton-viewer.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/automaton-viewer/automaton-viewer.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0b21hdG9uLXZpZXdlci9hdXRvbWF0b24tdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/automaton-viewer/automaton-viewer.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/automaton-viewer/automaton-viewer.component.ts ***!
  \***************************************************************************/
/*! exports provided: AutomatonViewerComponent, AutomatonViewerComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatonViewerComponent", function() { return AutomatonViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatonViewerComponentDefinition", function() { return AutomatonViewerComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/graphviz.directive */ "./src/app/shared/directives/graphviz.directive.ts");
/* harmony import */ var src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/automaton.model */ "./src/app/shared/models/automaton.model.ts");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");





let AutomatonViewerComponent = class AutomatonViewerComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [{ name: 'automaton', default: null }];
    }
    ngOnInit() {
        this.onRender();
    }
    onRender() {
        let i = 0;
        try {
            this.renderer.graph = Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_3__["automatonToDotFormat"])(Object(src_app_shared_models_automaton_model__WEBPACK_IMPORTED_MODULE_3__["automatonFromString"])(this.automaton));
            this.renderer.render();
        }
        catch (_a) {
            i++;
            if (i < 5) {
                setTimeout(this.onRender.bind(this), 300);
            }
        }
    }
};
AutomatonViewerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__["GraphvizDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__["GraphvizDirective"])
], AutomatonViewerComponent.prototype, "renderer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AutomatonViewerComponent.prototype, "automaton", void 0);
AutomatonViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'automaton-viewer-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./automaton-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/automaton-viewer/automaton-viewer.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./automaton-viewer.component.scss */ "./src/app/components/automaton-viewer/automaton-viewer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AutomatonViewerComponent);

class AutomatonViewerComponentDefinition {
    constructor() {
        this.component = AutomatonViewerComponent;
        this.name = 'Automaton Viewer';
        this.icon = 'automaton.svg';
        this.selector = 'c-automaton-drawer | c-automaton-viewer';
        this.description = `Print a non editable automaton.`;
        this.link = '/components/automaton-viewer';
        this.usages = [
            { label: 'Example', path: 'playground/automaton-viewer.pl' }
        ];
        this.properties = [
            {
                name: 'automaton',
                default: null,
                type: 'string',
                description: 'Visual or Object notation of the automaton'
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/checkbox-group/checkbox-group.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/checkbox-group/checkbox-group.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-group-component {\n  display: flex;\n  flex-direction: column;\n}\n.checkbox-group-component .mat-checkbox {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n.checkbox-group-component .mat-checkbox-layout {\n  margin-bottom: 0px;\n}\n.checkbox-group-component .checkbox-item {\n  transition: all 0.25s ease-in-out;\n  border-radius: 7px;\n  border: 2px solid #f4f4f4;\n  margin-bottom: 12px;\n  padding: 12px 12px 12px 12px;\n  transition: border 0.25s ease-in-out;\n  position: relative;\n}\n.checkbox-group-component .checkbox-item:hover, .checkbox-group-component .checkbox-item.checked {\n  border: 2px solid #3f51b5;\n}\n.checkbox-group-component .checkbox-item img {\n  margin: 0 8px;\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n}\n.checkbox-group-component.horizontal {\n  flex-direction: row;\n}\n.checkbox-group-component.horizontal .checkbox-item {\n  margin-right: 12px;\n  margin-bottom: 0px;\n}\n.checkbox-group-component.disabled {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURHSTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDRFI7QURHUTtFQUNJLHlCQUFBO0FDRFo7QURJUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRlo7QURNSTtFQUNJLG1CQUFBO0FDSlI7QURLUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRE9JO0VBQ0ksb0JBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gtZ3JvdXAtY29tcG9uZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubWF0LWNoZWNrYm94IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWl0ZW0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6aG92ZXIsICYuY2hlY2tlZCB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmhvcml6b250YWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAuY2hlY2tib3gtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuIiwiLmNoZWNrYm94LWdyb3VwLWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2hlY2tib3gtZ3JvdXAtY29tcG9uZW50IC5tYXQtY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jaGVja2JveC1ncm91cC1jb21wb25lbnQgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY2hlY2tib3gtZ3JvdXAtY29tcG9uZW50IC5jaGVja2JveC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDEycHg7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjI1cyBlYXNlLWluLW91dDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoZWNrYm94LWdyb3VwLWNvbXBvbmVudCAuY2hlY2tib3gtaXRlbTpob3ZlciwgLmNoZWNrYm94LWdyb3VwLWNvbXBvbmVudCAuY2hlY2tib3gtaXRlbS5jaGVja2VkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcbn1cbi5jaGVja2JveC1ncm91cC1jb21wb25lbnQgLmNoZWNrYm94LWl0ZW0gaW1nIHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5jaGVja2JveC1ncm91cC1jb21wb25lbnQuaG9yaXpvbnRhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2hlY2tib3gtZ3JvdXAtY29tcG9uZW50Lmhvcml6b250YWwgLmNoZWNrYm94LWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jaGVja2JveC1ncm91cC1jb21wb25lbnQuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/checkbox-group/checkbox-group.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/checkbox-group/checkbox-group.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckboxGroupComponent, CheckboxGroupComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupComponent", function() { return CheckboxGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroupComponentDefinition", function() { return CheckboxGroupComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");

// tslint:disable: no-inferrable-types
// tslint:disable: max-line-length


/** Renders a group of checkbox items. */
let CheckboxGroupComponent = class CheckboxGroupComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'horizontal', default: false },
            { name: 'items', default: [] }
        ];
        this._items = [];
        this.disabled = false;
        this.horizontal = false;
    }
    get items() {
        return this._items || (this._items = []);
    }
    set items(value) {
        this._items = value || [];
        this._items.forEach(item => {
            item.checked = item.checked || false;
        });
    }
    onDidCheckboxChange(event, item) {
        event.preventDefault();
        event.stopPropagation();
        item.checked = !item.checked;
        this.detectChanges();
    }
    trackBy(index, item) {
        return item.id || index;
    }
};
CheckboxGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxGroupComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxGroupComponent.prototype, "horizontal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], CheckboxGroupComponent.prototype, "items", null);
CheckboxGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'checkbox-group-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkbox-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/checkbox-group/checkbox-group.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkbox-group.component.scss */ "./src/app/components/checkbox-group/checkbox-group.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CheckboxGroupComponent);

class CheckboxGroupComponentDefinition {
    constructor() {
        this.component = CheckboxGroupComponent;
        this.name = 'Checkbox Group';
        this.icon = 'checkbox-group.svg';
        this.selector = 'c-checkbox-group';
        this.link = '/components/checkbox-group';
        this.description = `Checkboxs can be used to let the user know they need to make a binary decision`;
        this.usages = [{ label: 'Example', path: 'playground/checkbox-group.pl' }];
        this.properties = [
            {
                name: 'disabled',
                default: false,
                type: 'boolean',
                description: 'A value indicating whether the component is clickable'
            },
            {
                name: 'horizontal',
                default: false,
                type: 'boolean',
                description: 'A value indicating whether the items should be displayed horizontaly'
            },
            {
                name: 'items',
                default: [],
                type: 'CheckboxItem[]',
                description: 'An array of items (described in <b>Representation</b> section)'
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/code-editor/code-editor.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/code-editor/code-editor.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".code-editor-component .editor-container {\n  height: var(--height, auto);\n  border-bottom: 1px solid #DDD;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  -o-box-shadow: 1px 1px 5px 0px #DDD;\n  box-shadow: 1px 1px 5px 0px #DDD;\n  filter: progid:DXImageTransform.Microsoft.Shadow(color=#DDD, Direction=134, Strength=5);\n}\n.code-editor-component .code-editor-component-toolbar {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 0px 8px;\n}\n.code-editor-component .spacer {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUdBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1RkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDREo7QURJRTtFQUNJLE9BQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29kZS1lZGl0b3ItY29tcG9uZW50IHtcbiAgLmVkaXRvci1jb250YWluZXIge1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0LCBhdXRvKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCAjREREO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICNEREQ7XG4gICAgLW8tYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICNEREQ7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICNEREQ7XG4gICAgZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5TaGFkb3coY29sb3I9I0RERCwgRGlyZWN0aW9uPTEzNCwgU3RyZW5ndGg9NSk7XG4gIH1cblxuICAuY29kZS1lZGl0b3ItY29tcG9uZW50LXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gIH1cblxuICAuc3BhY2VyIHtcbiAgICAgIGZsZXg6IDE7XG4gIH1cbn1cbiIsIi5jb2RlLWVkaXRvci1jb21wb25lbnQgLmVkaXRvci1jb250YWluZXIge1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgYXV0byk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICNEREQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICNEREQ7XG4gIC1vLWJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCAjREREO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggI0RERDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KGNvbG9yPSNEREQsIERpcmVjdGlvbj0xMzQsIFN0cmVuZ3RoPTUpO1xufVxuLmNvZGUtZWRpdG9yLWNvbXBvbmVudCAuY29kZS1lZGl0b3ItY29tcG9uZW50LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAwcHggOHB4O1xufVxuLmNvZGUtZWRpdG9yLWNvbXBvbmVudCAuc3BhY2VyIHtcbiAgZmxleDogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/code-editor/code-editor.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/code-editor/code-editor.component.ts ***!
  \*****************************************************************/
/*! exports provided: CodeEditorComponent, CodeEditorComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function() { return CodeEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponentDefinition", function() { return CodeEditorComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



let CodeEditorComponent = class CodeEditorComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.disposables = [];
        this.states = {};
        this.editorContent = '';
        this.properties = [
            { name: 'code', default: '' },
            { name: 'codes', default: [] },
            { name: 'theme', default: 'dark' },
            { name: 'height', default: 200 },
            { name: 'tabSize', default: 4 },
            { name: 'language', default: 'python' },
            { name: 'lineNumbers', default: 'on' },
            { name: 'autoIndent', default: true },
            { name: 'renderWhitespace', default: 'all' },
            { name: 'renderIndentGuides', default: true },
        ];
        this.codes = [];
        this.theme = 'dark';
        this.height = '200px';
        this.tabSize = 4;
        this.language = 'python';
        this.lineNumbers = 'on';
        this.autoIndent = false;
        this.renderWhitespace = 'all';
    }
    get code() {
        return this.editorContent;
    }
    set code(value) {
        this.editorContent = value;
        if (this.editor) {
            this.editor.getModel().setValue(value);
        }
    }
    ngOnDestroy() {
        this.disposables.forEach(e => e.dispose());
    }
    onDidResetEditorCode() {
        const document = this.findDocument(this.language);
        this.code = document.code = document.defaultCode;
    }
    onDidSelectLanguage(e) {
        if (this.language !== e.value) {
            this.selectLanguage(e.value);
        }
    }
    onDidLoadEditor(editor) {
        this.editor = editor;
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => { }, '');
        this.disposables.push(editor.onDidChangeModelContent(this.onDidChangeContent.bind(this)));
        this.onRender();
    }
    onRender() {
        this.codes = this.codes || [];
        if (!this.codes.length) {
            this.codes.push({
                code: this.code,
                language: this.language,
                defaultCode: this.code,
            });
        }
        this.codes.forEach(code => {
            code.defaultCode = code.defaultCode || code.code;
            if (code.language === this.language) {
                this.editorContent = code.code;
            }
        });
        if (this.editor) {
            this.editor.updateOptions({
                autoIndent: this.autoIndent,
                lineNumbers: this.lineNumbers,
                renderWhitespace: this.renderWhitespace,
                quickSuggestions: false,
                scrollbar: {
                    horizontalScrollbarSize: 4,
                    verticalScrollbarSize: 4
                },
            });
            this.editor.getModel().updateOptions({
                tabSize: this.tabSize,
                insertSpaces: true,
                trimAutoWhitespace: true,
            });
            monaco.editor.setTheme(this.theme === 'light' ? 'vs' : 'vs-dark');
            this.selectLanguage(this.language);
        }
    }
    onDidChangeContent() {
        const doc = this.findDocument(this.language);
        this.editorContent = doc.code = this.editor.getValue();
    }
    selectLanguage(newLanguage) {
        const document = this.findDocument(newLanguage);
        const lastState = this.states[newLanguage];
        const currState = this.editor.saveViewState();
        const uri = monaco.Uri.parse('file://' + newLanguage);
        this.states[this.language] = currState;
        this.language = newLanguage;
        this.editorContent = document.code;
        const model = monaco.editor.getModel(uri) || monaco.editor.createModel(document.code, newLanguage, uri);
        this.editor.setModel(model);
        if (lastState) {
            this.editor.restoreViewState(lastState);
        }
    }
    findDocument(language) {
        return this.codes.find(e => e.language.trim() === language.trim());
    }
};
CodeEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], CodeEditorComponent.prototype, "codes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CodeEditorComponent.prototype, "theme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CodeEditorComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CodeEditorComponent.prototype, "tabSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CodeEditorComponent.prototype, "language", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CodeEditorComponent.prototype, "lineNumbers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CodeEditorComponent.prototype, "autoIndent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CodeEditorComponent.prototype, "renderWhitespace", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], CodeEditorComponent.prototype, "code", null);
CodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'code-editor-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/code-editor/code-editor.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code-editor.component.scss */ "./src/app/components/code-editor/code-editor.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CodeEditorComponent);

class CodeEditorComponentDefinition {
    constructor() {
        this.component = CodeEditorComponent;
        this.name = 'Code Editor';
        this.icon = 'code-editor.svg';
        this.description = `A powerful code editor`;
        this.selector = 'c-code-editor';
        this.link = '/components/code-editor';
        this.usages = [
            { label: 'Single Language', path: 'playground/code-editor.pl' },
            { label: 'Multi Language', path: 'playground/code-editor-multi-language.pl' }
        ];
        this.properties = [
            { name: 'code', default: '', type: 'string', description: 'Code to display in the editor' },
            { name: 'codes', default: [], type: 'CodeDocument[]', description: 'List of codes in a multi language mode' },
            { name: 'theme', default: 'dark', type: '"light" | "dark"', description: 'editor theme' },
            { name: 'height', default: '200px', type: 'string', description: 'editor height in px' },
            { name: 'tabSize', default: 4, type: 'number', description: 'editor tabulation size' },
            { name: 'language', default: 'python', type: 'string', description: 'the language of the editor' },
            { name: 'lineNumbers', default: 'on', type: '"on" | "off" ', description: 'Control the rendering of line numbers.' },
            { name: 'autoIndent', default: true, type: 'boolean', description: 'Enable auto indentation adjustment.' },
            { name: 'renderWhitespace', default: 'all', type: '"all" | "none" | "boundary"', description: 'Enable rendering of whitespace.' },
            { name: 'renderIndentGuides', default: true, type: 'boolean', description: 'Enable rendering of indent guides' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/countdown/countdown.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/countdown/countdown.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".countdown-component {\n  border: 1px solid;\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n  font-size: 24px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  background-color: #007bff;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3VudGRvd24vY291bnRkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudGRvd24tY29tcG9uZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi5jb3VudGRvd24tY29tcG9uZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/countdown/countdown.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/countdown/countdown.component.ts ***!
  \*************************************************************/
/*! exports provided: CountDownComponent, CountDownComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponent", function() { return CountDownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountDownComponentDefinition", function() { return CountDownComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



let CountDownComponent = class CountDownComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'time', default: 0 },
            { name: 'disabled', default: false },
            { name: 'hidden', default: false },
            { name: 'actions', default: [] },
        ];
        this._time = 0;
        this.disabled = false;
        this.hidden = false;
        this.actions = [];
    }
    get time() {
        return this._time;
    }
    set time(val) {
        this._time = val;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onRender() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                if (!this.disabled && this.time > 0) {
                    this.time--;
                    if (this.actions) {
                        this.actions.forEach(action => {
                            if (this.time <= action.time && !action.consumed) {
                                action.consumed = true;
                                new Function(action.action)();
                                this.refresh();
                            }
                        });
                    }
                    this.detectChanges();
                }
            }, 1000);
        }
    }
};
CountDownComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], CountDownComponent.prototype, "time", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountDownComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountDownComponent.prototype, "hidden", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountDownComponent.prototype, "actions", void 0);
CountDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'countdown-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/countdown/countdown.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./countdown.component.scss */ "./src/app/components/countdown/countdown.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CountDownComponent);

class CountDownComponentDefinition {
    constructor() {
        this.component = CountDownComponent;
        this.name = 'Countdown';
        this.icon = 'countdown.svg';
        this.selector = 'c-countdown';
        this.description = `Countdown provides a way to trigger an action after a specified delay`;
        this.link = '/components/countdown';
        this.usages = [{ label: 'Example', path: 'playground/countdown.pl' }];
        this.properties = [
            { name: 'time', default: '', type: 'string', description: 'The remaining time' },
            { name: 'hidden', default: '', type: 'string', description: 'A value indicating whether the component is hidden' },
            { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is disabled' },
            // tslint:disable-next-line: max-line-length
            { name: 'actions', default: [], type: 'CountDownAction[]', description: 'A value indicating whether the component is a drop zone' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/drag-drop/drag-drop.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/drag-drop/drag-drop.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drag-drop-component {\n  cursor: pointer;\n  display: inline-flex;\n  min-width: 3em;\n  min-height: 2em;\n  vertical-align: middle;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  margin: 8px;\n  background-color: AntiqueWhite;\n}\n.drag-drop-component.droppable {\n  border: 1px solid black;\n}\n.drag-drop-component.droppable.dnd-over, .drag-drop-component.droppable:hover {\n  border: 2px solid black;\n}\n.drag-drop-component.disabled {\n  border: 1px dashed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvZHJhZy1kcm9wL2RyYWctZHJvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsOEJBQUE7QUNESjtBRElJO0VBQ0ksdUJBQUE7QUNGUjtBRElRO0VBQ0ksdUJBQUE7QUNGWjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kcmFnLWRyb3AvZHJhZy1kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYWctZHJvcC1jb21wb25lbnQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICAgIG1pbi13aWR0aDogM2VtO1xuICAgIG1pbi1oZWlnaHQ6IDJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAgIG1hcmdpbjogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IEFudGlxdWVXaGl0ZTtcblxuXG4gICAgJi5kcm9wcGFibGUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgICAgICAmLmRuZC1vdmVyLCAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG59XG4iLCIuZHJhZy1kcm9wLWNvbXBvbmVudCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1pbi13aWR0aDogM2VtO1xuICBtaW4taGVpZ2h0OiAyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBBbnRpcXVlV2hpdGU7XG59XG4uZHJhZy1kcm9wLWNvbXBvbmVudC5kcm9wcGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5kcmFnLWRyb3AtY29tcG9uZW50LmRyb3BwYWJsZS5kbmQtb3ZlciwgLmRyYWctZHJvcC1jb21wb25lbnQuZHJvcHBhYmxlOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4uZHJhZy1kcm9wLWNvbXBvbmVudC5kaXNhYmxlZCB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/drag-drop/drag-drop.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/drag-drop/drag-drop.component.ts ***!
  \*************************************************************/
/*! exports provided: DragDropComponent, DragDropComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponent", function() { return DragDropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropComponentDefinition", function() { return DragDropComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/drag-drop.directive */ "./src/app/shared/directives/drag-drop.directive.ts");
/* harmony import */ var src_app_shared_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/drag-drop.service */ "./src/app/shared/services/drag-drop.service.ts");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");





let DragDropComponent = class DragDropComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
    constructor(changes, dragdrop) {
        super(changes);
        this.dragdrop = dragdrop;
        this.properties = [
            { name: 'content', default: '' },
            { name: 'droppedId', default: '' },
            { name: 'disabled', default: false },
            { name: 'droppable', default: false },
        ];
        this.content = '';
    }
    ngOnInit() {
        this.dragdrop.register(this.directive.id, this);
    }
    ngOnDestroy() {
        if (this.directive) {
            this.dragdrop.unregister(this.directive.id);
        }
    }
    dropped(event) {
        const { source, destination } = event;
        if (source !== destination) {
            const src = this.dragdrop.get(source);
            const dst = this.dragdrop.get(destination);
            if (!dst.droppable) {
                if (src.droppedId === dst.cid) {
                    src.droppedId = src.content = '';
                }
                return;
            }
            if (src.droppable && src.droppedId && dst.droppedId) {
                const content = src.content;
                src.content = dst.content;
                dst.content = content;
                const droppedId = src.droppedId;
                src.droppedId = dst.droppedId;
                dst.droppedId = droppedId;
            }
            else {
                dst.content = src.content;
                dst.droppedId = src.cid;
            }
            this.checkMath();
        }
    }
};
DragDropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_shared_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_3__["DragDropService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__["DragDropDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__["DragDropDirective"])
], DragDropComponent.prototype, "directive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DragDropComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], DragDropComponent.prototype, "droppedId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], DragDropComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], DragDropComponent.prototype, "droppable", void 0);
DragDropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'drag-drop-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drag-drop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drag-drop/drag-drop.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drag-drop.component.scss */ "./src/app/components/drag-drop/drag-drop.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_shared_services_drag_drop_service__WEBPACK_IMPORTED_MODULE_3__["DragDropService"]])
], DragDropComponent);

class DragDropComponentDefinition {
    constructor() {
        this.component = DragDropComponent;
        this.name = 'Drag & Drop';
        this.icon = 'drag-drop.svg';
        this.selector = 'c-drag-drop';
        this.description = `Drag & Drop lets users to drag and drop items between multiple sources and targets`;
        this.link = '/components/drag-drop';
        this.usages = [{ label: 'Example', path: 'playground/drag-drop.pl' }];
        this.properties = [
            { name: 'content', default: '', type: 'string', description: 'The HTML, markdown, Mathjax or text content of the component' },
            { name: 'droppedId', default: '', type: 'string', description: 'The cid of the dropped component' },
            { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is disabled' },
            { name: 'droppable', default: false, type: 'boolean', description: 'A value indicating whether the component is a drop zone' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/graph-viewer/graph-viewer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/graph-viewer/graph-viewer.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGgtdmlld2VyL2dyYXBoLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/graph-viewer/graph-viewer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/graph-viewer/graph-viewer.component.ts ***!
  \*******************************************************************/
/*! exports provided: GraphViewerComponent, GraphViewerComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphViewerComponent", function() { return GraphViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphViewerComponentDefinition", function() { return GraphViewerComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/graphviz.directive */ "./src/app/shared/directives/graphviz.directive.ts");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");




let GraphViewerComponent = class GraphViewerComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [{ name: 'graph', default: '' }];
    }
    ngOnInit() {
    }
    onRender() {
        this.renderer.render();
    }
};
GraphViewerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__["GraphvizDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_2__["GraphvizDirective"])
], GraphViewerComponent.prototype, "renderer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GraphViewerComponent.prototype, "graph", void 0);
GraphViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'graph-viewer-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graph-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/graph-viewer/graph-viewer.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./graph-viewer.component.scss */ "./src/app/components/graph-viewer/graph-viewer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], GraphViewerComponent);

class GraphViewerComponentDefinition {
    constructor() {
        this.component = GraphViewerComponent;
        this.name = 'Graph Viewer';
        this.icon = 'graph.svg';
        this.selector = 'c-graph-drawer | c-graph-viewer';
        this.description = `Graph drawer prints a non editable graph.`;
        this.link = '/components/graph-viewer';
        this.usages = [
            { label: 'Example', path: 'playground/graph-viewer.pl' }
        ];
        this.properties = [
            {
                name: 'graph',
                default: '',
                type: 'string',
                description: 'A graph in DOT format '
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/hint/hint.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/hint/hint.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hint-component .hint-component-header {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.hint-component .hint-component-icon {\n  font-size: 24px;\n  color: #856404;\n  margin-right: 8px;\n}\n.hint-component .hint-items-container {\n  margin: 8px 0;\n}\n.hint-component .hint-item {\n  display: flex;\n  align-items: flex-start;\n}\n.hint-component .hint-content {\n  border-left: 4px solid #f6f7f7;\n  padding-left: 16px;\n  position: relative;\n  flex: 1;\n}\n.hint-component .hint-index {\n  color: #00457c;\n  font-weight: 600;\n  margin-right: 13px;\n  white-space: nowrap;\n}\n.hint-component .hint-button-next {\n  color: #856404;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvaGludC9oaW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hpbnQvaGludC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0hSO0FETUk7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDSlI7QURPSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRFFJO0VBQ0ksY0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oaW50L2hpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGludC1jb21wb25lbnQge1xuICAgIC5oaW50LWNvbXBvbmVudC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmhpbnQtY29tcG9uZW50LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjODU2NDA0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAuaGludC1pdGVtcy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5oaW50LWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAuaGludC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZjZmN2Y3O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuaGludC1pbmRleCB7XG4gICAgICAgIGNvbG9yOiAjMDA0NTdjO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmhpbnQtYnV0dG9uLW5leHQge1xuICAgICAgICBjb2xvcjogIzg1NjQwNDtcbiAgICB9XG59XG4iLCIuaGludC1jb21wb25lbnQgLmhpbnQtY29tcG9uZW50LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oaW50LWNvbXBvbmVudCAuaGludC1jb21wb25lbnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM4NTY0MDQ7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmhpbnQtY29tcG9uZW50IC5oaW50LWl0ZW1zLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uaGludC1jb21wb25lbnQgLmhpbnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmhpbnQtY29tcG9uZW50IC5oaW50LWNvbnRlbnQge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNmNmY3Zjc7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xufVxuLmhpbnQtY29tcG9uZW50IC5oaW50LWluZGV4IHtcbiAgY29sb3I6ICMwMDQ1N2M7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogMTNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5oaW50LWNvbXBvbmVudCAuaGludC1idXR0b24tbmV4dCB7XG4gIGNvbG9yOiAjODU2NDA0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/hint/hint.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hint/hint.component.ts ***!
  \***************************************************/
/*! exports provided: HintComponent, HintComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintComponent", function() { return HintComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HintComponentDefinition", function() { return HintComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");
/* harmony import */ var src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/ask.service */ "./src/app/shared/services/ask.service.ts");




let HintComponent = class HintComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes, ask) {
        super(changes);
        this.ask = ask;
        this.properties = [
            { name: 'items', default: [] },
            { name: 'label', default: '' },
            { name: 'script', default: '' },
            { name: 'shouldConfirm', default: true },
            { name: 'consumedCount', default: 0 },
            { name: 'confirmMessage', default: '' },
            { name: 'confirmTitle', default: 'Use a hint ?' },
            { name: 'confirmOkTitle', default: 'Yes' },
            { name: 'confirmNoTitle', default: 'No' },
            { name: 'moreHintTitle', default: '+ More' },
        ];
        this.confirmMessage = '';
        this.confirmTitle = 'Use a hint ?';
        this.confirmOkTitle = 'Yes';
        this.confirmNoTitle = 'No';
        this.moreHintTitle = '+ More';
        this.label = '';
        this.script = '';
        this.items = [];
        this.shouldConfirm = true;
        this.consumedCount = 0;
    }
    get showIcon() {
        return !!this.script || (this.consumedCount === 0 && !!this.items.length);
    }
    get hasMore() {
        return !this.script && (this.consumedCount > 0 && this.items.some(e => !e.consumed));
    }
    ngOnInit() {
    }
    consume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.shouldConfirm && this.consumedCount === 0) {
                const confirmed = yield this.ask.confirmAsync({
                    title: this.confirmTitle,
                    message: this.confirmMessage,
                    okTitle: this.confirmOkTitle,
                    noTitle: this.confirmNoTitle,
                });
                if (confirmed) {
                    this.next();
                }
            }
            else {
                this.next();
            }
        });
    }
    next() {
        if (this.script) {
            new Function(decodeURIComponent(this.script))();
            this.refresh();
        }
        else {
            for (const hint of this.items || []) {
                if (!hint.consumed) {
                    hint.consumed = true;
                    this.consumedCount++;
                    this.detectChanges();
                    this.checkMath();
                    return;
                }
            }
        }
    }
    trackBy(index, _) {
        return index;
    }
};
HintComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__["AskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "confirmMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "confirmTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "confirmOkTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "confirmNoTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "moreHintTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "script", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], HintComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "shouldConfirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HintComponent.prototype, "consumedCount", void 0);
HintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'hint-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hint/hint.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hint.component.scss */ "./src/app/components/hint/hint.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_shared_services_ask_service__WEBPACK_IMPORTED_MODULE_3__["AskService"]])
], HintComponent);

class HintComponentDefinition {
    constructor() {
        this.component = HintComponent;
        this.name = 'Hint';
        this.icon = 'hint.svg';
        this.selector = 'c-hint';
        this.description = `Provides a way to propose predefined or context based hints to a student.`;
        this.link = '/components/hint';
        this.usages = [
            { label: 'Basic Hint', path: 'playground/hint-basic.pl' },
            { label: 'Dynamic Hint', path: 'playground/hint-dynamic.pl' },
        ];
        this.properties = [
            { name: 'items', default: [], type: 'HintItem[]', description: 'A list of hints' },
            { name: 'label', default: '', type: 'string', description: 'The text displayed on  the side of the hint icon' },
            { name: 'confirmMessage', default: '', type: 'string', description: 'Message of the confirm dialog' },
            { name: 'confirmTitle', default: 'Use a hint?', type: 'string', description: 'Title of the confirm dialog' },
            { name: 'confirmOkTitle', default: 'Yes', type: 'string', description: 'Title of the confirm dialog positive button' },
            { name: 'confirmNoTitle', default: 'No', type: 'string', description: 'Title of the confirm dialog negavite button' },
            { name: 'moreHintTitle', default: '+ More', type: 'string', description: 'Title of the button to display more hints' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/input/input.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-component .mat-form-field-infix {\n  border-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWNvbXBvbmVudCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG59XG4iLCIuaW5wdXQtY29tcG9uZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent, InputComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponentDefinition", function() { return InputComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");





let InputComponent = class InputComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'value', default: '' },
            { name: 'autocomplete', default: [] },
            { name: 'type', default: 'text' },
            { name: 'suffix', default: '' },
            { name: 'width', default: '100%' },
            { name: 'appearance', default: 'outline' },
            { name: 'placeholder', default: '' },
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.$autocomplete = this.form
            .valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => {
            this.value = value;
            return this.filter(value);
        }));
        this.value = '';
        this.suffix = '';
        this.disabled = false;
        this.placeholder = '';
        this.appearance = 'outline';
        this.type = 'text';
        this.width = '100%';
        this.autocomplete = [];
    }
    onRender() {
        this.form.setValue(this.value);
        this.form.enable();
        if (this.disabled) {
            this.form.disable();
        }
    }
    onValidate(data) {
        if (data.value == null || data.value.toString().trim() === '') {
            data.value = this.type === 'number' ? 0 : '';
        }
        else if (data.value && this.type === 'number') {
            data.value = Number.parseFloat(data.value.toString().replace(',', '.'));
        }
    }
    filter(value) {
        if (!value || this.type === 'number') {
            return [];
        }
        const convert = (v) => {
            return v
                .trim()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
        };
        value = convert(value);
        return this.autocomplete.filter(option => {
            return convert(option).includes(value);
        });
    }
};
InputComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "suffix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputComponent.prototype, "appearance", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "autocomplete", void 0);
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'input-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.scss */ "./src/app/components/input/input.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], InputComponent);

class InputComponentDefinition {
    constructor() {
        this.component = InputComponent;
        this.name = 'Input';
        this.icon = 'input.svg';
        this.selector = 'c-input';
        this.description = `Inputs provides a way for users to enter a data.`;
        this.link = '/components/input';
        this.usages = [
            { label: 'Basic', path: 'playground/input.pl' },
            { label: 'Autocompletion', path: 'playground/input-autocomplete.pl' },
        ];
        this.properties = [
            { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the input is disabled or not' },
            { name: 'type', default: 'text', type: '"text" | "number" | "multiline"', description: 'The type of the value returned by the component' },
            { name: 'appearance', default: 'outline', type: '"legacy" | "standard" | "fill" | "outline"', description: 'Appearance' },
            { name: 'value', default: null, type: 'string', description: 'The value of the input box' },
            { name: 'suffix', default: null, type: 'string', description: 'Suffix content' },
            { name: 'width', default: '100%', type: 'string', description: 'The width of the input box in css units (%, px, rem...)' },
            { name: 'placeholder', default: '', type: 'string', description: 'Text for the input placeholder' },
            { name: 'autocomplete', default: [], type: 'string[]', description: 'Autocompletion source' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/jsxgraph/jsxgraph.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/jsxgraph/jsxgraph.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jsxgraph-component {\n  max-width: 400px;\n  width: 90vw;\n  max-height: 400px;\n  height: 90vw;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvanN4Z3JhcGgvanN4Z3JhcGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvanN4Z3JhcGgvanN4Z3JhcGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pzeGdyYXBoL2pzeGdyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpzeGdyYXBoLWNvbXBvbmVudCB7XG4gICAgbWF4LXdpZHRoOjQwMHB4O1xuICAgIHdpZHRoOjkwdnc7XG4gICAgbWF4LWhlaWdodDo0MDBweDtcbiAgICBoZWlnaHQ6OTB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbiIsIi5qc3hncmFwaC1jb21wb25lbnQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogOTB2dztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIGhlaWdodDogOTB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/components/jsxgraph/jsxgraph.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/jsxgraph/jsxgraph.component.ts ***!
  \***********************************************************/
/*! exports provided: JSXGraphComponent, JSXGraphComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSXGraphComponent", function() { return JSXGraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSXGraphComponentDefinition", function() { return JSXGraphComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");
var JSXGraphComponent_1;



/**
 * Renders dynamic mathematics geometric objects
 */
let JSXGraphComponent = JSXGraphComponent_1 = class JSXGraphComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'attributes', default: null },
            { name: 'script', default: null },
            { name: 'points', default: {} }
        ];
        /**
         * the points drawed inside the box.
         */
        this.points = {};
        this.id = 'graph_' + ++JSXGraphComponent_1.NEXT_ID;
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.freeBoard();
    }
    onRender() {
        this.initBoard();
        if (this.board.objectsList) {
            this.board.objectsList.forEach((object) => {
                if (JXG.isPoint(object) &&
                    object.name &&
                    !(object.name in this.points)) {
                    this.points[object.name] = {
                        x: object.X(),
                        y: object.Y()
                    };
                }
            });
        }
        Object.keys(this.points).forEach(name => {
            const object = this.board.objectsList.find((o) => {
                return JXG.isPoint(o) && o.name === name;
            });
            if (object) {
                const point = this.points[name];
                const array = [point.x, point.y];
                object.setPosition(JXG.COORDS_BY_USER, array);
            }
        });
        this.board.fullUpdate();
        if (this.disabled) {
            this.board.removeEventHandlers();
        }
        this.board.on('update', this.updatePoints.bind(this));
    }
    initBoard() {
        JXG.Options = JXG.merge(JXG.Options, {
            board: {
                showCopyright: false,
                keepAspectRatio: true
            },
            elements: {
                highlight: false,
                showInfobox: false
            },
            point: {
                showInfobox: false
            }
        });
        this.freeBoard();
        this.attributes = Object.assign({ boundingbox: [-10, 10, 10, -10], axis: true }, (this.attributes || {}));
        this.board = JXG.JSXGraph.initBoard(this.id, this.attributes);
        if (this.script) {
            const code = decodeURIComponent(this.script);
            const exec = new Function('board', code);
            exec(this.board);
        }
        this.points = this.points || {};
        const w = window;
        if (w.onMathDrawerReady) {
            w.onMathDrawerReady(this);
        }
        this.detectChanges();
    }
    freeBoard() {
        if (this.board) {
            JXG.JSXGraph.freeBoard(this.board);
        }
    }
    updatePoints() {
        if (this.board.objectsList) {
            for (const o of this.board.objectsList) {
                if (JXG.isPoint(o) && o.name) {
                    this.points[o.name] = {
                        x: o.X(),
                        y: o.Y()
                    };
                }
            }
        }
        this.detectChanges();
    }
};
JSXGraphComponent.NEXT_ID = 0;
JSXGraphComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], JSXGraphComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], JSXGraphComponent.prototype, "board", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], JSXGraphComponent.prototype, "points", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], JSXGraphComponent.prototype, "script", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], JSXGraphComponent.prototype, "attributes", void 0);
JSXGraphComponent = JSXGraphComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'jsxgraph-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./jsxgraph.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jsxgraph/jsxgraph.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./jsxgraph.component.scss */ "./src/app/components/jsxgraph/jsxgraph.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], JSXGraphComponent);

class JSXGraphComponentDefinition {
    constructor() {
        this.component = JSXGraphComponent;
        this.name = 'JSX Graph';
        this.icon = 'jsxgraph.svg';
        this.selector = 'c-math-drawer | c-jsxgraph'; // TODO (will be renamed to c-jsxgraph soon)
        this.description = `JSXGraph lib wrapper.`;
        this.link = '/components/jsxgraph';
        this.usages = [
            { label: 'Example', path: 'playground/jsxgraph.pl' }
        ];
        this.properties = [
            {
                name: 'disabled',
                default: false,
                type: 'boolean',
                description: 'disabled state of the component'
            },
            {
                name: 'attributes',
                default: null,
                type: 'BoardAttributes',
                description: 'the attributes of the board'
            },
            {
                name: 'script',
                default: null,
                type: 'string',
                description: 'javascript script to draw objects inside the board'
            },
            {
                name: 'points',
                default: {},
                type: 'Dict<string, Point>',
                description: 'A dictionnary of the points where keys are the name of the points and value the position of the points'
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/match-list/match-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/match-list/match-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".match-list-component {\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n  min-height: 100px;\n}\n.match-list-component.disabled {\n  pointer-events: none;\n  border: dashed 1px #ccc;\n}\n.match-list-component.disabled svg {\n  pointer-events: none;\n}\n.match-list-component .align-left {\n  float: left;\n  text-align: right;\n}\n.match-list-component .align-right {\n  float: right;\n  text-align: left;\n}\n.match-list-component .match-list-item {\n  position: relative;\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.match-list-component .match-list-item img {\n  width: 64px;\n  height: 64px;\n}\n.match-list-component .jtk-connector path {\n  stroke-width: 4;\n}\n.match-list-component svg.error-state, .match-list-component svg.warning-state, .match-list-component svg.success-state {\n  background-color: unset !important;\n  border: unset !important;\n  border-radius: unset !important;\n}\n.match-list-component svg.error-state path {\n  stroke: red;\n}\n.match-list-component svg.warning-state path {\n  stroke: yellow;\n}\n.match-list-component svg.success-state path {\n  stroke: green;\n}\n.match-list-component img {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.match-list-component img:hover {\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvbWF0Y2gtbGlzdC9tYXRjaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hdGNoLWxpc3QvbWF0Y2gtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQVE7RUFDSSxvQkFBQTtBQ0VaO0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREdJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRFI7QURJSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFo7QURLSTtFQUNJLGVBQUE7QUNIUjtBRE1JO0VBQ0ksa0NBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDSlI7QURPSTtFQUNJLFdBQUE7QUNMUjtBRFFJO0VBQ0ksY0FBQTtBQ05SO0FEU0k7RUFDSSxhQUFBO0FDUFI7QURVSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1JSO0FEU1E7RUFDSSwwQ0FBQTtBQ1BaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXRjaC1saXN0L21hdGNoLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0Y2gtbGlzdC1jb21wb25lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBib3JkZXI6IGRhc2hlZCAxcHggI2NjYztcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFsaWduLWxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuXG4gICAgLmFsaWduLXJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5tYXRjaC1saXN0LWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo4cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5qdGstY29ubmVjdG9yIHBhdGgge1xuICAgICAgICBzdHJva2Utd2lkdGg6IDQ7XG4gICAgfVxuXG4gICAgc3ZnLmVycm9yLXN0YXRlLCBzdmcud2FybmluZy1zdGF0ZSwgc3ZnLnN1Y2Nlc3Mtc3RhdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgc3ZnLmVycm9yLXN0YXRlIHBhdGgge1xuICAgICAgICBzdHJva2U6IHJlZDtcbiAgICB9XG5cbiAgICBzdmcud2FybmluZy1zdGF0ZSBwYXRoIHtcbiAgICAgICAgc3Ryb2tlOiB5ZWxsb3c7XG4gICAgfVxuXG4gICAgc3ZnLnN1Y2Nlc3Mtc3RhdGUgcGF0aCB7XG4gICAgICAgIHN0cm9rZTogZ3JlZW47XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuIiwiLm1hdGNoLWxpc3QtY29tcG9uZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICNjY2M7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQuZGlzYWJsZWQgc3ZnIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQgLmFsaWduLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQgLmFsaWduLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1hdGNoLWxpc3QtY29tcG9uZW50IC5tYXRjaC1saXN0LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm1hdGNoLWxpc3QtY29tcG9uZW50IC5tYXRjaC1saXN0LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbi5tYXRjaC1saXN0LWNvbXBvbmVudCAuanRrLWNvbm5lY3RvciBwYXRoIHtcbiAgc3Ryb2tlLXdpZHRoOiA0O1xufVxuLm1hdGNoLWxpc3QtY29tcG9uZW50IHN2Zy5lcnJvci1zdGF0ZSwgLm1hdGNoLWxpc3QtY29tcG9uZW50IHN2Zy53YXJuaW5nLXN0YXRlLCAubWF0Y2gtbGlzdC1jb21wb25lbnQgc3ZnLnN1Y2Nlc3Mtc3RhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQgc3ZnLmVycm9yLXN0YXRlIHBhdGgge1xuICBzdHJva2U6IHJlZDtcbn1cbi5tYXRjaC1saXN0LWNvbXBvbmVudCBzdmcud2FybmluZy1zdGF0ZSBwYXRoIHtcbiAgc3Ryb2tlOiB5ZWxsb3c7XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQgc3ZnLnN1Y2Nlc3Mtc3RhdGUgcGF0aCB7XG4gIHN0cm9rZTogZ3JlZW47XG59XG4ubWF0Y2gtbGlzdC1jb21wb25lbnQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5tYXRjaC1saXN0LWNvbXBvbmVudCBpbWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/match-list/match-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/match-list/match-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MatchListComponent, MatchListComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchListComponent", function() { return MatchListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchListComponentDefinition", function() { return MatchListComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



/**
 * Renders lines between dom elements.
 */
let MatchListComponent = class MatchListComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'nodes', default: [] },
            { name: 'links', default: [] },
        ];
    }
    /**
     * Gets the dom nodes to render.
     */
    get nodes() {
        return this._nodes || (this._nodes = []);
    }
    /**
     * Sets the dom nodes to render.
     */
    set nodes(value) {
        this._nodes = value || [];
    }
    /**
     * Gets the links between the nodes.
     */
    get links() {
        return this._links || (this._links = []);
    }
    /**
     * Sets the links between the nodes.
     */
    set links(value) {
        this._links = value || [];
    }
    ngOnInit() {
        this.instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            Container: this.container.nativeElement,
            ConnectionsDetachable: false,
            Endpoint: ['Dot', { radius: 6 }],
        });
        this.instance.bind('ready', () => {
            this.instance.bind('endpointClick', (point) => {
                (point.connections || []).forEach(conn => {
                    this.disconnect(conn);
                });
            });
            this.instance.bind('beforeDrop', (info) => {
                const source = this.nodes.find(p => p.id === info.sourceId);
                const target = this.nodes.find(p => p.id === info.targetId);
                if (!target.multiple && this.exists(target)) {
                    return false;
                }
                if (!source.multiple && this.exists(source)) {
                    return false;
                }
                this.links.push(this.connect(source, target));
                return true;
            });
            this.onRender();
        });
    }
    ngOnDestroy() {
        this.instance.unbind('endpointClick');
        this.instance.unbind('beforeDrop');
    }
    onRender() {
        this.instance.batch(() => {
            this.instance.deleteEveryEndpoint();
            setTimeout(() => this.renderNodes(), 300);
            setTimeout(() => this.renderLinks(), 600);
        });
    }
    exists(node) {
        return !!this.links.find(conn => {
            return conn.source === node.id || conn.target === node.id;
        });
    }
    connect(source, target) {
        return {
            source: source.id,
            target: target.id,
        };
    }
    disconnect(connection) {
        this.links = this.links.filter(conn => {
            const a = conn.source !== connection.endpoints[0].elementId;
            const b = conn.target !== connection.endpoints[1].elementId;
            return a && b;
        });
        this.instance.deleteConnection(connection);
    }
    renderNodes() {
        this.nodes.forEach(node => {
            this.instance.addEndpoint(node.id, {
                id: node.id,
                isSource: !!node.source,
                isTarget: !!node.target,
                anchor: !!node.source ? 'Right' : 'Left',
                maxConnections: -1,
                connector: 'StateMachine',
                cssClass: !!node.target ? 'endpoint-source' : 'endpoint-target',
                radius: 2,
                connectorOverlays: [
                    ['Arrow', { width: 10, length: 10, location: .98, id: 'arrow' }],
                ],
            });
        });
    }
    renderLinks() {
        this.links.forEach(link => {
            this.instance.connect({
                source: link.source,
                target: link.target,
                connector: 'StateMachine',
                overlays: [
                    ['Arrow', { width: 10, length: 10, location: .98, id: 'arrow' }],
                ],
                anchors: ['Right', 'Left'],
                cssClass: link.css,
            });
        });
    }
};
MatchListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MatchListComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MatchListComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], MatchListComponent.prototype, "nodes", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], MatchListComponent.prototype, "links", null);
MatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'match-list-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/match-list/match-list.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match-list.component.scss */ "./src/app/components/match-list/match-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MatchListComponent);

class MatchListComponentDefinition {
    constructor() {
        this.component = MatchListComponent;
        this.name = 'Match List';
        this.icon = 'match-list.svg';
        this.selector = 'c-match-list';
        this.description = `Match list lets users connect items between two lists`;
        this.link = '/components/match-list';
        this.usages = [{ label: 'Example', path: 'playground/match-list.pl' }];
        this.properties = [
            { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating the disabled state of the component' },
            { name: 'nodes', default: [], type: 'MatchListItem[]', description: 'The items to connect' },
            { name: 'links', default: [], type: 'MatchListLink[]', description: 'The links between the items' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/math-input/math-input.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/math-input/math-input.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".math-input-component {\n  border: 1px solid #ddd;\n  padding: 5px;\n  margin: 10px 0 10px 0;\n  border-radius: 5px;\n  background-color: #fff;\n  font-size: large;\n}\n.math-input-component .ML__fieldcontainer__field {\n  height: 24px;\n}\n.math-input-component .ML__virtual-keyboard-toggle {\n  z-index: 100;\n}\n.math-input-component.disabled {\n  pointer-events: none;\n  border: 1px dashed;\n}\n.math-input-component .ML__fieldcontainer__field {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvbWF0aC1pbnB1dC9tYXRoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hdGgtaW5wdXQvbWF0aC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FER0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLHVCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hdGgtaW5wdXQvbWF0aC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRoLWlucHV0LWNvbXBvbmVudCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuXG4gICAgLk1MX19maWVsZGNvbnRhaW5lcl9fZmllbGQge1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLk1MX192aXJ0dWFsLWtleWJvYXJkLXRvZ2dsZSB7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZDtcbiAgICB9XG4gICAgLk1MX19maWVsZGNvbnRhaW5lcl9fZmllbGQge1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG4iLCIubWF0aC1pbnB1dC1jb21wb25lbnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLm1hdGgtaW5wdXQtY29tcG9uZW50IC5NTF9fZmllbGRjb250YWluZXJfX2ZpZWxkIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLm1hdGgtaW5wdXQtY29tcG9uZW50IC5NTF9fdmlydHVhbC1rZXlib2FyZC10b2dnbGUge1xuICB6LWluZGV4OiAxMDA7XG59XG4ubWF0aC1pbnB1dC1jb21wb25lbnQuZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkO1xufVxuLm1hdGgtaW5wdXQtY29tcG9uZW50IC5NTF9fZmllbGRjb250YWluZXJfX2ZpZWxkIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/math-input/math-input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/math-input/math-input.component.ts ***!
  \***************************************************************/
/*! exports provided: MathInputComponent, MathInputComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathInputComponent", function() { return MathInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathInputComponentDefinition", function() { return MathInputComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



let MathInputComponent = class MathInputComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.listeners = [];
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'value', default: '' },
            { name: 'config', default: {} },
        ];
    }
    set config(value) {
        this.configuration = value;
        if (this.math) {
            this.math.$setConfig(value);
        }
        this.detectChanges();
    }
    get config() {
        return this.configuration || (this.configuration = {});
    }
    ngOnInit() {
        this.math = MathLive.makeMathField(this.container.nativeElement, Object.assign({ onContentDidChange: (field) => {
                this.value = field.$latex();
            }, virtualKeyboardTheme: 'material', smartFence: false, smartSuperscript: true, virtualKeyboardMode: 'manual', virtualKeyboards: 'all' }, (this.config || {})));
        const { textarea } = this.math;
        const onBlur = () => this.math.$perform('hideVirtualKeyboard');
        textarea.addEventListener('blur', onBlur, false);
        this.listeners.push(() => {
            textarea.removeEventListener('blur', onBlur, false);
        });
        const element = this.math.$el();
        const toggle = element.querySelector('.ML__virtual-keyboard-toggle');
        const onFocus = () => textarea.focus();
        toggle.addEventListener('click', onFocus, false);
        this.listeners.push(() => {
            toggle.removeEventListener('click', onFocus, false);
        });
    }
    ngOnDestroy() {
        this.listeners.forEach(l => l());
    }
    onRender() {
        this.math.$insert(this.value || '', '{format: "latex"}');
    }
};
MathInputComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MathInputComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MathInputComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MathInputComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], MathInputComponent.prototype, "config", null);
MathInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'math-input-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./math-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-input/math-input.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./math-input.component.scss */ "./src/app/components/math-input/math-input.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MathInputComponent);

class MathInputComponentDefinition {
    constructor() {
        this.component = MathInputComponent;
        this.name = 'Math Input';
        this.icon = 'math-input.svg';
        this.selector = 'c-math-input';
        this.link = '/components/math-input';
        this.description = `Math inputs provides a way for users to enter mathematical expressions.`;
        this.usages = [{ label: 'Example', path: 'playground/math-input.pl' }];
        this.properties = [
            { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the component' },
            { name: 'value', default: '', type: 'string', description: 'The typed text in latex format' },
            { name: 'config', default: '', type: 'MathInputConfig', description: 'Input Configurations' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/math-matrix/math-matrix.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/math-matrix/math-matrix.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".math-matrix-component {\n  display: inline-block;\n  position: relative;\n  margin: 5px;\n  vertical-align: middle;\n}\n.math-matrix-component .matrix-input {\n  border: none;\n  border-radius: 4px;\n  text-align: center;\n  font-style: italic;\n  font-size: 12pt;\n  color: black;\n  background-color: LightGrey;\n  z-index: 10;\n}\n.math-matrix-component .matrix-container {\n  display: inline-block;\n  overflow: hidden;\n}\n.math-matrix-component .matrix-table {\n  table-layout: fixed;\n  width: auto;\n}\n.math-matrix-component .matrix-cell {\n  margin: 0;\n  position: relative;\n  height: 2em;\n  width: 3em;\n}\n.math-matrix-component mwlResizable {\n  box-sizing: border-box;\n}\n.math-matrix-component:before, .math-matrix-component:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  border: 2px solid #000;\n  width: 6px;\n  height: 100%;\n}\n.math-matrix-component:before {\n  left: -6px;\n  border-right: 0;\n}\n.math-matrix-component:after {\n  right: -6px;\n  border-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvbWF0aC1tYXRyaXgvbWF0aC1tYXRyaXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWF0aC1tYXRyaXgvbWF0aC1tYXRyaXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FER0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURJSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FES0k7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hSO0FET0k7RUFDSSxzQkFBQTtBQ0xSO0FEU0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ05KO0FEU0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXRoLW1hdHJpeC9tYXRoLW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRoLW1hdHJpeC1jb21wb25lbnQge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgLm1hdHJpeC1pbnB1dCB7XG4gICAgICAgIGJvcmRlciA6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogTGlnaHRHcmV5O1xuICAgICAgICB6LWluZGV4OjEwO1xuXG4gICAgfVxuXG4gICAgLm1hdHJpeC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLm1hdHJpeC10YWJsZSB7XG4gICAgICAgIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLm1hdHJpeC1jZWxsIHtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgd2lkdGg6IDNlbTtcbiAgICB9XG5cblxuICAgIG13bFJlc2l6YWJsZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIHJlcXVpcmVkIGZvciB0aGUgZW5hYmxlR2hvc3RSZXNpemUgb3B0aW9uIHRvIHdvcmtcbiAgICB9XG59XG5cbi5tYXRoLW1hdHJpeC1jb21wb25lbnQ6YmVmb3JlLCAubWF0aC1tYXRyaXgtY29tcG9uZW50OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdGgtbWF0cml4LWNvbXBvbmVudDpiZWZvcmUge1xuICAgIGxlZnQ6IC02cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4ubWF0aC1tYXRyaXgtY29tcG9uZW50OmFmdGVyIHtcbiAgICByaWdodDogLTZweDtcbiAgICBib3JkZXItbGVmdDogMDtcbn1cbiIsIi5tYXRoLW1hdHJpeC1jb21wb25lbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubWF0aC1tYXRyaXgtY29tcG9uZW50IC5tYXRyaXgtaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBMaWdodEdyZXk7XG4gIHotaW5kZXg6IDEwO1xufVxuLm1hdGgtbWF0cml4LWNvbXBvbmVudCAubWF0cml4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXRoLW1hdHJpeC1jb21wb25lbnQgLm1hdHJpeC10YWJsZSB7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuLm1hdGgtbWF0cml4LWNvbXBvbmVudCAubWF0cml4LWNlbGwge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAzZW07XG59XG4ubWF0aC1tYXRyaXgtY29tcG9uZW50IG13bFJlc2l6YWJsZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXRoLW1hdHJpeC1jb21wb25lbnQ6YmVmb3JlLCAubWF0aC1tYXRyaXgtY29tcG9uZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdGgtbWF0cml4LWNvbXBvbmVudDpiZWZvcmUge1xuICBsZWZ0OiAtNnB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi5tYXRoLW1hdHJpeC1jb21wb25lbnQ6YWZ0ZXIge1xuICByaWdodDogLTZweDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/math-matrix/math-matrix.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/math-matrix/math-matrix.component.ts ***!
  \*****************************************************************/
/*! exports provided: MathMatrixComponent, MathMatrixComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathMatrixComponent", function() { return MathMatrixComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathMatrixComponentDefinition", function() { return MathMatrixComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



let MathMatrixComponent = class MathMatrixComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this._matrix = [];
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'resizable', default: false },
            { name: 'cellWidth', default: '3em' },
            { name: 'cellHeight', default: '2em' },
            { name: 'matrix', default: [] },
        ];
        this.cellWidth = '3em';
        this.cellHeight = '2em';
    }
    get matrix() {
        return this._matrix || [];
    }
    set matrix(value) {
        this._matrix = value || [];
    }
    rows() {
        return this.matrix.length;
    }
    cols() {
        return this.rows() > 0 ? this.matrix[0].length : 0;
    }
    onResizeEnd(event) {
        if (event.edges.right > 0) {
            if (this.rows() === 0 || this.cols() === 0) {
                this.matrix = [[{ value: 0 }]];
            }
            else {
                this.matrix.forEach(row => {
                    row.push({ value: 0 });
                });
            }
        }
        else if (event.edges.right < 0) {
            for (let i = 0; i < this.rows(); i++) {
                this.matrix[i].pop();
            }
        }
        else if (event.edges.bottom > 0) {
            const row = [];
            for (let i = 0; i < this.cols(); i++) {
                row.push({ value: 0 });
            }
            if (row.length === 0) {
                row.push({ value: 0 });
            }
            this.matrix.push(row);
        }
        else if (event.edges.bottom < 0) {
            this.matrix.pop();
        }
    }
    onValidate(data) {
        for (const row of data.matrix) {
            for (const cell of row) {
                cell.value = Number.parseFloat(cell.value) || 0;
            }
        }
    }
};
MathMatrixComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MathMatrixComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MathMatrixComponent.prototype, "resizable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MathMatrixComponent.prototype, "cellWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MathMatrixComponent.prototype, "cellHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], MathMatrixComponent.prototype, "matrix", null);
MathMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'math-matrix-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./math-matrix.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/math-matrix/math-matrix.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./math-matrix.component.scss */ "./src/app/components/math-matrix/math-matrix.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], MathMatrixComponent);

class MathMatrixComponentDefinition {
    constructor() {
        this.component = MathMatrixComponent;
        this.name = 'Math Matrix';
        this.icon = 'math-matrix.svg';
        this.selector = 'c-math-matrix';
        this.description = `Matrix matrix provides a way for users to enter a matrix.`;
        this.link = '/components/math-matrix';
        this.usages = [{ label: 'Example', path: 'playground/math-matrix.pl' }];
        this.properties = [
            { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the matrix' },
            { name: 'resizable', default: false, type: 'boolean', description: 'A value indicating whether the matrix is resizable' },
            { name: 'cellWidth', default: '3em', type: 'string', description: 'Cell width' },
            { name: 'cellHeight', default: '2em', type: 'string', description: 'Cell height' },
            { name: 'matrix', default: [], type: 'MatrixCell', description: 'The matrix' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/radio-group/radio-group.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/radio-group/radio-group.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radio-group-component {\n  display: flex;\n  flex-direction: column;\n}\n.radio-group-component .mat-radio-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n}\n.radio-group-component .mat-radio-label {\n  margin-bottom: 0px;\n}\n.radio-group-component .radio-item {\n  transition: all 0.25s ease-in-out;\n  border-radius: 7px;\n  border: 2px solid #f4f4f4;\n  margin-bottom: 12px;\n  padding: 12px 12px 12px 12px;\n  transition: border 0.25s ease-in-out;\n  position: relative;\n}\n.radio-group-component .radio-item:hover, .radio-group-component .radio-item.selected {\n  border: 2px solid #3f51b5;\n}\n.radio-group-component .radio-item img {\n  margin: 0 8px;\n  width: 64px;\n  height: 64px;\n  border-radius: 12px;\n}\n.radio-group-component.horizontal {\n  flex-direction: row;\n}\n.radio-group-component.horizontal .radio-item {\n  margin-right: 12px;\n  margin-bottom: 0px;\n}\n.radio-group-component.disabled {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURHSTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDRFI7QURHUTtFQUNJLHlCQUFBO0FDRFo7QURJUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRlo7QURNSTtFQUNJLG1CQUFBO0FDSlI7QURLUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRE9JO0VBQ0ksb0JBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tZ3JvdXAtY29tcG9uZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5tYXQtcmFkaW8tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLnJhZGlvLWl0ZW0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6aG92ZXIsICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNmNTFiNTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5ob3Jpem9udGFsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLnJhZGlvLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbiIsIi5yYWRpby1ncm91cC1jb21wb25lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudCAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudCAubWF0LXJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudCAucmFkaW8taXRlbSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjRmNGY0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4IDEycHggMTJweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYWRpby1ncm91cC1jb21wb25lbnQgLnJhZGlvLWl0ZW06aG92ZXIsIC5yYWRpby1ncm91cC1jb21wb25lbnQgLnJhZGlvLWl0ZW0uc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudCAucmFkaW8taXRlbSBpbWcge1xuICBtYXJnaW46IDAgOHB4O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudC5ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yYWRpby1ncm91cC1jb21wb25lbnQuaG9yaXpvbnRhbCAucmFkaW8taXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnJhZGlvLWdyb3VwLWNvbXBvbmVudC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/radio-group/radio-group.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/radio-group/radio-group.component.ts ***!
  \*****************************************************************/
/*! exports provided: RadioGroupComponent, RadioGroupComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponent", function() { return RadioGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupComponentDefinition", function() { return RadioGroupComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");



let RadioGroupComponent = class RadioGroupComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'disabled', default: false },
            { name: 'horizontal', default: false },
            { name: 'items', default: [] },
            { name: 'selection', default: '' },
        ];
        this._items = [];
        this.horizontal = false;
    }
    get selection() {
        return this._selection;
    }
    set selection(value) {
        this._selection = value;
    }
    get items() {
        return this._items || (this._items = []);
    }
    set items(value) {
        this._items = value || [];
    }
    trackBy(index, item) {
        return item.id || index;
    }
};
RadioGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RadioGroupComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RadioGroupComponent.prototype, "horizontal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], RadioGroupComponent.prototype, "selection", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], RadioGroupComponent.prototype, "items", null);
RadioGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'radio-group-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radio-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/radio-group/radio-group.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radio-group.component.scss */ "./src/app/components/radio-group/radio-group.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], RadioGroupComponent);

class RadioGroupComponentDefinition {
    constructor() {
        this.component = RadioGroupComponent;
        this.name = 'Radio Group';
        this.icon = 'radio-group.svg';
        this.selector = 'c-radio-group';
        this.description = `Radio inputs allow you to present a set of exclusive options.`;
        this.link = '/components/radio-group';
        this.usages = [{ label: 'Example', path: 'playground/radio-group.pl' }];
        this.properties = [
            { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is clickable' },
            { name: 'items', default: [], type: 'RadioItem[]', description: 'An array of items (described in <b>Representation</b> section)' },
            { name: 'selection', default: '', type: 'string', description: 'The id of the selected item' },
            { name: 'horizontal', default: false, type: 'boolean', description: 'A value indicating whether the items should be displayed horizontaly' },
        ];
    }
}


/***/ }),

/***/ "./src/app/components/sort-list/sort-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/sort-list/sort-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-list-component {\n  display: block;\n  padding: 0 !important;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.sort-list-component.disabled {\n  pointer-events: none;\n  border: dashed 1px #ccc;\n}\n.sort-list-component .sort-item {\n  cursor: move;\n  min-height: 48px;\n  height: auto;\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  display: block;\n  text-align: center;\n}\n.sort-list-component .cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.sort-list-component .cdk-drag-placeholder {\n  opacity: 0;\n}\n.sort-list-component .cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.sort-list-component .sort-item:last-child {\n  border: none;\n}\n.sort-list-component .mat-list.cdk-drop-list-dragging .sort-item:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvc29ydC1saXN0L3NvcnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb3J0LWxpc3Qvc29ydC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUNDUjtBREVJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREdJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FDRFI7QURNSTtFQUNJLFVBQUE7QUNKUjtBRE9JO0VBQ0ksc0RBQUE7QUNMUjtBRFFJO0VBQ0ksWUFBQTtBQ05SO0FEU0k7RUFDSSxzREFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3J0LWxpc3Qvc29ydC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnQtbGlzdC1jb21wb25lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBkYXNoZWQgMXB4ICNjY2M7XG4gICAgfVxuXG4gICAgLnNvcnQtaXRlbSB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIH1cblxuICAgIC5zb3J0LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuc29ydC1pdGVtOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIH1cblxufVxuIiwiLnNvcnQtbGlzdC1jb21wb25lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc29ydC1saXN0LWNvbXBvbmVudC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXI6IGRhc2hlZCAxcHggI2NjYztcbn1cbi5zb3J0LWxpc3QtY29tcG9uZW50IC5zb3J0LWl0ZW0ge1xuICBjdXJzb3I6IG1vdmU7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb3J0LWxpc3QtY29tcG9uZW50IC5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uc29ydC1saXN0LWNvbXBvbmVudCAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLnNvcnQtbGlzdC1jb21wb25lbnQgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5zb3J0LWxpc3QtY29tcG9uZW50IC5zb3J0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zb3J0LWxpc3QtY29tcG9uZW50IC5tYXQtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5zb3J0LWl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sort-list/sort-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/sort-list/sort-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SortListComponent, SortListComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortListComponent", function() { return SortListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortListComponentDefinition", function() { return SortListComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");




/**
 * Renders a reorderable list of data.
 */
let SortListComponent = class SortListComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.properties = [
            { name: 'items', default: [] },
            { name: 'disabled', default: false },
        ];
        /**
         * A list of data to render.
         */
        this.items = [];
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.items, event.previousIndex, event.currentIndex);
        this.checkMath();
    }
    trackBy(index, _) {
        return index;
    }
};
SortListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SortListComponent.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SortListComponent.prototype, "disabled", void 0);
SortListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'sort-list-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sort-list/sort-list.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort-list.component.scss */ "./src/app/components/sort-list/sort-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SortListComponent);

class SortListComponentDefinition {
    constructor() {
        this.component = SortListComponent;
        this.name = 'Sort List';
        this.icon = 'sort-list.svg';
        this.selector = 'c-sort-list';
        this.description = `Sort list lets users drag and drop to reorder a list of items.`;
        this.link = '/components/sort-list';
        this.usages = [{ label: 'Example', path: 'playground/sort-list.pl' }];
        this.properties = [
            { name: 'items', default: [], type: 'SortItem[]', description: '' }
        ];
    }
}


/***/ }),

/***/ "./src/app/components/text-select/text-select.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/text-select/text-select.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-select-component.words-mode {\n  cursor: pointer;\n}\n\n.text-select-component.free-mode {\n  cursor: text;\n}\n\n.highlight-state {\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1zZWxlY3QvdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1zZWxlY3QvdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1zZWxlY3QvdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1zZWxlY3QtY29tcG9uZW50LndvcmRzLW1vZGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtc2VsZWN0LWNvbXBvbmVudC5mcmVlLW1vZGUge1xuICAgIGN1cnNvcjogdGV4dDtcbn1cblxuLmhpZ2hsaWdodC1zdGF0ZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGNvbG9yOiAjMDA0MDg1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2U1ZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjhkYWZmO1xufVxuXG4iLCIudGV4dC1zZWxlY3QtY29tcG9uZW50LndvcmRzLW1vZGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LXNlbGVjdC1jb21wb25lbnQuZnJlZS1tb2RlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG4uaGlnaGxpZ2h0LXN0YXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGNvbG9yOiAjMDA0MDg1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlNWZmO1xuICBib3JkZXItY29sb3I6ICNiOGRhZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/text-select/text-select.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/text-select/text-select.component.ts ***!
  \*****************************************************************/
/*! exports provided: TextSelectComponent, TextSelectComponentDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSelectComponent", function() { return TextSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSelectComponentDefinition", function() { return TextSelectComponentDefinition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_text_select_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/text-select.model */ "./src/app/shared/models/text-select.model.ts");
/* harmony import */ var _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/abstract-component.model */ "./src/app/shared/models/abstract-component.model.ts");




let TextSelectComponent = class TextSelectComponent extends _shared_models_abstract_component_model__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"] {
    constructor(changes) {
        super(changes);
        this.wrappers = [];
        this.properties = [
            { name: 'text', default: '' },
            { name: 'mode', default: 'word' },
            { name: 'typo', default: src_app_shared_models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].body1 },
            { name: 'separator', default: ' ' },
            { name: 'selections', default: [] }
        ];
        this.options = {
            mode: 'word',
            separator: ' ',
            attributes: (index) => {
                const item = this.selections.find(e => e.index === index);
                return item ? `class="${item.css || 'highlight-state'}"` : '';
            }
        };
    }
    get separator() {
        return this.options.separator;
    }
    set separator(value) {
        this.options.separator = value;
    }
    get mode() {
        return this.options.mode;
    }
    set mode(value) {
        this.options.mode = value;
    }
    get text() {
        return this._text || (this._text = '');
    }
    set text(value) {
        this._selections = [];
        this._text = value || '';
    }
    get typo() {
        return this._typo || (this._typo = src_app_shared_models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].body1);
    }
    set typo(value) {
        this._typo = value || src_app_shared_models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].body1;
    }
    get selections() {
        return this._selections || (this._selections = []);
    }
    set selections(value) {
        this._selections = value || [];
    }
    onRender() {
        setTimeout(() => {
            if (this.options.mode === 'free') {
                this.selections.forEach(s => {
                    const tokens = s.index.toString().split(':');
                    const i = Number.parseInt(tokens[0], 10);
                    const j = Number.parseInt(tokens[1], 10);
                    this.selectRange(i, j, s.css || 'highlight-state');
                });
            }
        }, 100);
    }
    didWordSelection(e) {
        const node = e.target;
        const index = Number.parseInt(node.getAttribute('data-index'), 10);
        if (!Number.isNaN(index)) {
            let i = 0;
            for (const item of this._selections) {
                if (item.index === index) {
                    this._selections.splice(i, 1);
                    node.className = '';
                    return;
                }
                i++;
            }
            node.className = 'highlight-state';
            this._selections.push({
                index,
                content: node.innerHTML.trim()
            });
        }
    }
    didFreeSelection(e) {
        const fn = window.getSelection || document.getSelection;
        const selection = fn();
        const startNode = selection.anchorNode.parentElement;
        const endNode = selection.focusNode.parentElement;
        const si = Number.parseInt(startNode.getAttribute('data-index'), 10);
        const ei = Number.parseInt(endNode.getAttribute('data-index'), 10);
        const i = Math.min(si, ei);
        const j = Math.max(si, ei);
        this.selectRange(i, j, 'highlight-state');
    }
    selectRange(i, j, className) {
        function unwrap(wrapper) {
            // place childNodes in document fragment
            const docFrag = document.createDocumentFragment();
            while (wrapper.firstChild) {
                const child = wrapper.removeChild(wrapper.firstChild);
                docFrag.appendChild(child);
            }
            // replace wrapper with document fragment
            wrapper.parentNode.replaceChild(docFrag, wrapper);
        }
        const p = this.container.nativeElement;
        const a = p.querySelector(`[data-index="${i}"]`);
        const b = p.querySelector(`[data-index="${j}"]`);
        const c = this.wrappers.find(e => {
            return e.node.contains(a) || e.node.contains(b);
        });
        if (c) {
            unwrap(c.node);
            this.selections = this.selections.filter(e => e.index !== c.selection.index);
            this.wrappers = this.wrappers.filter(e => e !== c);
        }
        else {
            const wrapper = document.createElement('span');
            wrapper.className = className;
            p.insertBefore(wrapper, a);
            let node = a;
            while (node && !node.isSameNode(b)) {
                const next = node.nextElementSibling;
                p.removeChild(node);
                wrapper.appendChild(node);
                node = next;
            }
            p.removeChild(b);
            wrapper.appendChild(b);
            const index = i + ':' + j;
            const selection = {
                index,
                content: wrapper.textContent.trim()
            };
            if (!this.selections.some(e => e.index === index)) {
                this.selections.push(selection);
            }
            this.wrappers.push({
                node: wrapper,
                selection
            });
        }
        this.detectChanges();
    }
};
TextSelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TextSelectComponent.prototype, "container", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TextSelectComponent.prototype, "separator", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TextSelectComponent.prototype, "mode", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TextSelectComponent.prototype, "text", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], TextSelectComponent.prototype, "typo", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], TextSelectComponent.prototype, "selections", null);
TextSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'text-select-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-select/text-select.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-select.component.scss */ "./src/app/components/text-select/text-select.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TextSelectComponent);

class TextSelectComponentDefinition {
    constructor() {
        this.component = TextSelectComponent;
        this.name = 'Text Select';
        this.icon = 'text-select.svg';
        this.selector = 'c-text | c-text-select';
        this.description = 'This component provides a way to select a part of a text.';
        this.link = '/components/text-select';
        this.usages = [
            { label: 'Word Mode', path: 'playground/text-select.pl' },
            { label: 'Free Mode', path: 'playground/text-select-free.pl' }
        ];
        this.properties = [
            { name: 'text', default: '""', type: 'string', description: 'Text to display' },
            { name: 'mode', default: 'word', type: '"word" | "free"', description: 'Text selection mode' },
            { name: 'typo', default: 'body1', type: 'string', description: 'Text typography' },
            { name: 'separator', default: '" "', type: 'string', description: 'Words separator in the case where the property "mode" is sets to "word".' },
            { name: 'selections', default: [], type: 'TextSelection[]', description: 'The selected ranges' },
        ];
    }
}


/***/ }),

/***/ "./src/app/docs/advanced-usage/advanced-usage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/docs/advanced-usage/advanced-usage.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdvancedUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedUsageComponent", function() { return AdvancedUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdvancedUsageComponent = class AdvancedUsageComponent {
    constructor() {
        this.styles = [
            { label: 'Styling a component', path: 'playground/styles.pl' },
        ];
        this.decorator = [
            { label: 'Decorate a component', path: 'playground/decorator.pl' },
        ];
    }
};
AdvancedUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'advanced-usage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advanced-usage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/advanced-usage/advanced-usage.component.html")).default
    })
], AdvancedUsageComponent);



/***/ }),

/***/ "./src/app/docs/api-doc/api-doc.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/docs/api-doc/api-doc.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3MvYXBpLWRvYy9hcGktZG9jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/docs/api-doc/api-doc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/docs/api-doc/api-doc.component.ts ***!
  \***************************************************/
/*! exports provided: ApiDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiDocComponent", function() { return ApiDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/definition.service */ "./src/app/shared/services/definition.service.ts");




let ApiDocComponent = class ApiDocComponent {
    constructor(router, definitions) {
        this.router = router;
        this.definitions = definitions;
    }
    ngOnInit() {
        const origin = window.location.origin;
        const href = window.location.href.replace(origin, '');
        this.refresh(href);
        this.subscription = this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.refresh(e.url);
            }
        });
    }
    ngOnDestroy() {
        // tslint:disable-next-line: no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    }
    docPage(definition) {
        return 'docs/' + definition.link.split('/').pop() + '.html';
    }
    refresh(url) {
        this.component = this.definitions.findOne(c => c.link === url);
        if (!this.component) {
            this.router.navigateByUrl('/components/intro');
        }
    }
};
ApiDocComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_3__["DefinitionService"] }
];
ApiDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'api-doc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api-doc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/api-doc/api-doc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api-doc.component.scss */ "./src/app/docs/api-doc/api-doc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_3__["DefinitionService"]])
], ApiDocComponent);



/***/ }),

/***/ "./src/app/docs/css-doc/css-doc.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/docs/css-doc/css-doc.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".animations, .appearances {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(6, 160px);\n}\n\n.active-animation {\n  text-align: center;\n  margin-top: 56px;\n  font-size: 1em;\n  font-family: sans-serif;\n  text-transform: uppercase;\n}\n\n.box-animation {\n  width: 160px;\n  height: 120px;\n  /* float: left; */\n  background: #347fc3;\n  border: 1px solid #fff;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.box-animation .text {\n  text-align: center;\n  margin-top: 56px;\n  color: #fff;\n  font-size: 1em;\n  font-family: sans-serif;\n  text-transform: uppercase;\n}\n\n.box-appearance {\n  width: 160px;\n  height: 120px;\n  float: left;\n  overflow: hidden;\n  cursor: pointer;\n  margin: 0 2px;\n}\n\n.box-appearance .text {\n  text-align: center;\n  margin-top: 56px;\n  font-size: 1em;\n  font-family: sans-serif;\n  text-transform: uppercase;\n}\n\n.animated {\n  -webkit-animation-duration: 2.5s;\n          animation-duration: 2.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2RvY3MvY3NzLWRvYy9jc3MtZG9jLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb2NzL2Nzcy1kb2MvY3NzLWRvYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUNBRjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNGSjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0hSOztBRFFBO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9kb2NzL2Nzcy1kb2MvY3NzLWRvYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFuaW1hdGlvbnMsIC5hcHBlYXJhbmNlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxNjBweCk7XG59XG5cbi5hY3RpdmUtYW5pbWF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5ib3gtYW5pbWF0aW9uIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMzQ3ZmMzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxufVxuXG4uYm94LWFwcGVhcmFuY2Uge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMCAycHg7XG5cblxuICAgIC50ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG5cbn1cblxuLmFuaW1hdGVkIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbiIsIi5hbmltYXRpb25zLCAuYXBwZWFyYW5jZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMTYwcHgpO1xufVxuXG4uYWN0aXZlLWFuaW1hdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYm94LWFuaW1hdGlvbiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgLyogZmxvYXQ6IGxlZnQ7ICovXG4gIGJhY2tncm91bmQ6ICMzNDdmYzM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib3gtYW5pbWF0aW9uIC50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYm94LWFwcGVhcmFuY2Uge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAycHg7XG59XG4uYm94LWFwcGVhcmFuY2UgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDU2cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/docs/css-doc/css-doc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/docs/css-doc/css-doc.component.ts ***!
  \***************************************************/
/*! exports provided: CssDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssDocComponent", function() { return CssDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/clipboard.service */ "./src/app/shared/services/clipboard.service.ts");




let CssDocComponent = class CssDocComponent {
    constructor(alert, clipboard) {
        this.alert = alert;
        this.clipboard = clipboard;
        this.usages = [
            { label: 'Css API', path: 'playground/css-api.pl' },
        ];
        this.appearances = [
            'success-state', 'warning-state', 'error-state',
            'success-border', 'warning-border', 'error-border',
        ];
        this.animations = [
            'bounce', 'flash', 'pulse', 'rubberBand', 'shake',
            'headShake', 'swing', 'tada', 'wobble', 'jello',
            'jackInTheBox', 'heartBeat', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight',
            'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
            'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight',
            'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig',
            'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
            'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn',
            'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft',
            'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollIn', 'rollOut',
            'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut',
            'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft',
            'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp',
        ];
        this.activeAnimation = 'pulse';
    }
    ngOnInit() {
    }
    animate(animation) {
        this.activeAnimation = animation;
    }
    copyCss(appearance) {
        this.clipboard.copy(`${appearance} animated ${this.activeAnimation} infinite`);
        this.alert.snack('Copied');
    }
    trackBy(index, _) {
        return index;
    }
};
CssDocComponent.ctorParameters = () => [
    { type: src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: src_app_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"] }
];
CssDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'css-doc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./css-doc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/css-doc/css-doc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./css-doc.component.scss */ "./src/app/docs/css-doc/css-doc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        src_app_shared_services_clipboard_service__WEBPACK_IMPORTED_MODULE_3__["ClipboardService"]])
], CssDocComponent);



/***/ }),

/***/ "./src/app/docs/docs.component.scss":
/*!******************************************!*\
  !*** ./src/app/docs/docs.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-drawer {\n  width: 250px;\n}\nmat-drawer .nav-item {\n  cursor: pointer;\n}\nmat-drawer .nav-item a {\n  background-color: transparent;\n}\nmat-drawer .nav-item img {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nmat-drawer .nav-item:hover {\n  background-color: rgba(66, 66, 66, 0.06);\n}\nmat-drawer-container {\n  width: 100%;\n  height: 100vh;\n}\nmat-drawer-content {\n  background-color: white;\n  font-family: system-ui, sans-serif;\n}\nmat-drawer-content .info {\n  background-color: #f5f7fa;\n  color: #020814;\n  padding: 8px;\n  border-left: 6px solid #3f51b5;\n}\nmat-drawer-content .paragraphe {\n  max-width: 40em;\n}\nmat-drawer-content .selector {\n  display: block;\n  color: #721c24;\n  margin-bottom: 8px;\n}\nmat-drawer-content .shadow {\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);\n}\nmat-drawer-content section {\n  margin-top: 8px;\n  margin-bottom: 1.2em;\n  line-height: 1.6rem;\n  font-weight: 400;\n  color: #444;\n}\nmat-drawer-content code {\n  background-color: #f5f7fa;\n  border-radius: 4px;\n  color: #020814;\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0;\n  padding: 4px 6px;\n  white-space: pre-wrap;\n}\nmat-drawer-content table {\n  border-width: 1px 0 0 1px;\n  font-size: 13px;\n  margin: 2em 0;\n  overflow-x: auto;\n  width: 100%;\n}\nmat-drawer-content table, mat-drawer-content th, mat-drawer-content td {\n  border-collapse: collapse;\n  border-color: #edf2f6;\n  border-style: solid;\n}\nmat-drawer-content thead {\n  display: table-header-group;\n  vertical-align: middle;\n}\nmat-drawer-content tbody tr {\n  background-color: #fff !important;\n}\nmat-drawer-content th, mat-drawer-content td {\n  border-width: 0 1px 1px 0;\n  line-height: 1.5;\n  padding: 1em;\n  text-align: left;\n}\nmat-drawer-content h3 {\n  font-family: \"SFMono-Regular\", \"Roboto Mono\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n  font-size: 1.25rem;\n  margin: 2rem 0 1rem;\n  padding: 0;\n}\n.router-outlet {\n  padding: 0em 4em;\n}\n@media (max-width: 768px) {\n  .router-outlet {\n    padding: 0em 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2RvY3MvZG9jcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jcy9kb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDUTtFQUNJLDZCQUFBO0FDQ1o7QURFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQVo7QURHUTtFQUNJLHdDQUFBO0FDRFo7QURNQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSEo7QURNQTtFQUNJLHVCQUFBO0VBQ0Esa0NBQUE7QUNISjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7QUNMUjtBRFFJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05SO0FEU0k7RUFDSSwyQ0FBQTtBQ1BSO0FEVUk7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1JSO0FEWUk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ1ZSO0FEYUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDWFI7QURjSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEZUk7RUFDSSwyQkFBQTtFQUNBLHNCQUFBO0FDYlI7QURnQkk7RUFDRyxpQ0FBQTtBQ2RQO0FEaUJJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksb0dBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ2hCUjtBRHFCQTtFQUNJLGdCQUFBO0FDbEJKO0FEcUJBO0VBQ0k7SUFDSSxnQkFBQTtFQ2xCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZG9jcy9kb2NzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuXG4gICAgLm5hdi1pdGVte1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuMDYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLHNhbnMtc2VyaWY7XG5cblxuICAgIC5pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYTtcbiAgICAgICAgY29sb3I6ICMwMjA4MTQ7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjM2Y1MWI1O1xuICAgIH1cblxuICAgIC5wYXJhZ3JhcGhlIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MGVtO1xuICAgIH1cblxuICAgIC5zZWxlY3RvciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzcyMWMyNDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLDAsMCwuMSk7XG4gICAgfVxuXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuXG4gICAgY29kZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY29sb3I6ICMwMjA4MTQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luOiAyZW0gMDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgdGFibGUsIHRoLCB0ZCB7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2VkZjJmNjtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmYgIWltcG9ydGFudFxuICAgIH1cblxuICAgIHRoLCB0ZCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlNGTW9uby1SZWd1bGFyXCIsXCJSb2JvdG8gTW9ub1wiLENvbnNvbGFzLFwiTGliZXJhdGlvbiBNb25vXCIsTWVubG8sQ291cmllcixtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbn1cblxuLnJvdXRlci1vdXRsZXQge1xuICAgIHBhZGRpbmc6MGVtIDRlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnJvdXRlci1vdXRsZXQge1xuICAgICAgICBwYWRkaW5nOjBlbSA4cHg7XG4gICAgfVxufVxuIiwibWF0LWRyYXdlciB7XG4gIHdpZHRoOiAyNTBweDtcbn1cbm1hdC1kcmF3ZXIgLm5hdi1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWF0LWRyYXdlciAubmF2LWl0ZW0gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxubWF0LWRyYXdlciAubmF2LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbm1hdC1kcmF3ZXIgLm5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjA2KTtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgLmluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICBjb2xvcjogIzAyMDgxNDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzZjUxYjU7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgLnBhcmFncmFwaGUge1xuICBtYXgtd2lkdGg6IDQwZW07XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgLnNlbGVjdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0O1xufVxubWF0LWRyYXdlci1jb250ZW50IGNvZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMDIwODE0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwYWRkaW5nOiA0cHggNnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5tYXQtZHJhd2VyLWNvbnRlbnQgdGFibGUge1xuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMmVtIDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LWRyYXdlci1jb250ZW50IHRhYmxlLCBtYXQtZHJhd2VyLWNvbnRlbnQgdGgsIG1hdC1kcmF3ZXItY29udGVudCB0ZCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1jb2xvcjogI2VkZjJmNjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB0aGVhZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB0Ym9keSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbm1hdC1kcmF3ZXItY29udGVudCB0aCwgbWF0LWRyYXdlci1jb250ZW50IHRkIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxubWF0LWRyYXdlci1jb250ZW50IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgXCJSb2JvdG8gTW9ub1wiLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucm91dGVyLW91dGxldCB7XG4gIHBhZGRpbmc6IDBlbSA0ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucm91dGVyLW91dGxldCB7XG4gICAgcGFkZGluZzogMGVtIDhweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/docs/docs.component.ts":
/*!****************************************!*\
  !*** ./src/app/docs/docs.component.ts ***!
  \****************************************/
/*! exports provided: DocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsComponent", function() { return DocsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/definition.service */ "./src/app/shared/services/definition.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DocsComponent = class DocsComponent {
    constructor(router, definitions) {
        this.router = router;
        this.definitions = definitions;
        this.sidebarOpened = true;
        this.guides = [
            { name: 'Introduction', link: '/components/intro' },
            { name: 'Simple Usage', link: '/components/simple-usage' },
            { name: 'Advanced Usage', link: '/components/advanced-usage' },
            { name: 'CSS API', link: '/components/css-doc' },
        ];
    }
    ngOnInit() {
        this.api = this.definitions.findAll();
    }
    ngOnDestroy() {
    }
};
DocsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__["DefinitionService"] }
];
DocsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'docs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./docs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/docs.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./docs.component.scss */ "./src/app/docs/docs.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__["DefinitionService"]])
], DocsComponent);



/***/ }),

/***/ "./src/app/docs/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/docs/intro/intro.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-accordion {\n  margin-bottom: 16px;\n}\n\n.mat-expansion-panel-body {\n  line-height: 1.8em;\n}\n\n.grid {\n  -moz-column-width: 320px;\n       column-width: 320px;\n  -moz-column-gap: 15px;\n       column-gap: 15px;\n}\n\n.grid a {\n  display: block;\n}\n\n.grid .mat-card {\n  cursor: pointer;\n  margin: 0 2px 15px;\n  display: inline-block;\n  width: calc(100% - 32px);\n  padding: 0 0 8px 0;\n}\n\n.grid .mat-card .card-icon {\n  width: 100%;\n  height: 231px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.grid .mat-card .mat-card-content {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.grid .mat-card:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2RvY3MvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvY3MvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO09BQUEsbUJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxjQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNBWjs7QURHUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURJUTtFQUNJLDBDQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9kb2NzL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWFjY29yZGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4uZ3JpZCB7XG4gICAgY29sdW1uLXdpZHRoOiAzMjBweDtcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xuXG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5tYXQtY2FyZCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIDJweCAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgcGFkZGluZzogMCAwIDhweCAwO1xuXG4gICAgICAgIC5jYXJkLWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIzMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLDMzLDMzLC4yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1hdC1hY2NvcmRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xufVxuXG4uZ3JpZCB7XG4gIGNvbHVtbi13aWR0aDogMzIwcHg7XG4gIGNvbHVtbi1nYXA6IDE1cHg7XG59XG4uZ3JpZCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZ3JpZCAubWF0LWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAycHggMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIHBhZGRpbmc6IDAgMCA4cHggMDtcbn1cbi5ncmlkIC5tYXQtY2FyZCAuY2FyZC1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5ncmlkIC5tYXQtY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZ3JpZCAubWF0LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLCAzMywgMzMsIDAuMik7XG59Il19 */");

/***/ }),

/***/ "./src/app/docs/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/docs/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/definition.service */ "./src/app/shared/services/definition.service.ts");



let IntroComponent = class IntroComponent {
    constructor(definitions) {
        this.definitions = definitions;
        this.radio = [
            { 'id': '1', 'content': 'A' },
            { 'id': '2', 'content': 'B' },
            { 'id': '3', 'content': 'C' }
        ];
        this.debug = false;
    }
    ngOnInit() {
        this.api = this.definitions.findAll();
    }
};
IntroComponent.ctorParameters = () => [
    { type: src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__["DefinitionService"] }
];
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.scss */ "./src/app/docs/intro/intro.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_definition_service__WEBPACK_IMPORTED_MODULE_2__["DefinitionService"]])
], IntroComponent);



/***/ }),

/***/ "./src/app/docs/next-prev/next-prev.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/docs/next-prev/next-prev.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".next-prev {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2RvY3MvbmV4dC1wcmV2L25leHQtcHJldi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9jcy9uZXh0LXByZXYvbmV4dC1wcmV2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RvY3MvbmV4dC1wcmV2L25leHQtcHJldi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXh0LXByZXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogOHB4IDA7XG59XG4iLCIubmV4dC1wcmV2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiA4cHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/docs/next-prev/next-prev.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/docs/next-prev/next-prev.component.ts ***!
  \*******************************************************/
/*! exports provided: NextPrevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextPrevComponent", function() { return NextPrevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NextPrevComponent = class NextPrevComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NextPrevComponent.prototype, "prevLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NextPrevComponent.prototype, "nextLink", void 0);
NextPrevComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'next-prev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./next-prev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/next-prev/next-prev.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./next-prev.component.scss */ "./src/app/docs/next-prev/next-prev.component.scss")).default]
    })
], NextPrevComponent);



/***/ }),

/***/ "./src/app/docs/playground/playground.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/docs/playground/playground.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leftside, .rightside {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n}\n.leftside .buttons, .rightside .buttons {\n  position: absolute;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  justify-content: center;\n  padding-right: 8px;\n}\n.leftside .mat-tab-group, .rightside .mat-tab-group {\n  width: 100%;\n  height: 100%;\n}\n.leftside .code-editor, .rightside .code-editor {\n  width: 100%;\n  height: 600px;\n}\n.leftside .preview-editor, .rightside .preview-editor {\n  height: 100%;\n  width: calc(100% - 16px);\n  border: 1px solid #ccc;\n  margin: 0 8px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL2RvY3MvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb2NzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNEUjtBRElJO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2RvY3MvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRzaWRlLCAucmlnaHRzaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYnV0dG9ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgLm1hdC10YWItZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgfVxuXG4gICAgLmNvZGUtZWRpdG9yIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgfVxuXG4gICAgLnByZXZpZXctZWRpdG9yIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG5cbn1cbiIsIi5sZWZ0c2lkZSwgLnJpZ2h0c2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxlZnRzaWRlIC5idXR0b25zLCAucmlnaHRzaWRlIC5idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5sZWZ0c2lkZSAubWF0LXRhYi1ncm91cCwgLnJpZ2h0c2lkZSAubWF0LXRhYi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubGVmdHNpZGUgLmNvZGUtZWRpdG9yLCAucmlnaHRzaWRlIC5jb2RlLWVkaXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuLmxlZnRzaWRlIC5wcmV2aWV3LWVkaXRvciwgLnJpZ2h0c2lkZSAucHJldmlldy1lZGl0b3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwIDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/docs/playground/playground.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/docs/playground/playground.component.ts ***!
  \*********************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/http.service */ "./src/app/shared/services/http.service.ts");
// tslint:disable: no-inferrable-types



let PlaygroundComponent = class PlaygroundComponent {
    constructor(http) {
        this.http = http;
        this.options = {
            theme: 'vs-dark',
            language: 'premierlangage',
            automaticLayout: true,
        };
    }
    get tabs() {
        return this._tabs;
    }
    set tabs(val) {
        this._tabs = val;
        this.tabs.forEach((tab) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            tab.code = yield this.http.asset(tab.path);
        }));
        this.empty = this.tabs.length === 0;
        if (!this.empty) {
            this.focus = this.tabs[0];
        }
        this.expanded = true;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    tryIt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.expanded = false;
            this.focus.preview = '';
            try {
                this.focus.preview = yield this.http.preview(this.focus.code);
                this.loading = false;
            }
            catch (error) {
                this.focus.preview = '<div style="font-size: 18px;">' + error.message + '</div>';
                this.loading = false;
            }
        });
    }
    onInit(editor) {
        editor.updateOptions({
            renderWhitespace: 'all',
            autoIndent: true,
            autoClosingBrackets: true,
            scrollbar: {
                verticalScrollbarSize: 4,
                horizontalScrollbarSize: 4,
            },
            quickSuggestions: false
        });
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => { }, '');
    }
    onDidLoaded() {
        this.loading = false;
    }
    onDidTabChanged(e) {
        this.focus = this.tabs[e.index];
    }
};
PlaygroundComponent.ctorParameters = () => [
    { type: src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], PlaygroundComponent.prototype, "tabs", null);
PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'playground',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playground.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/playground/playground.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playground.component.scss */ "./src/app/docs/playground/playground.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], PlaygroundComponent);



/***/ }),

/***/ "./src/app/docs/simple-usage/simple-usage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/docs/simple-usage/simple-usage.component.ts ***!
  \*************************************************************/
/*! exports provided: SimpleUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleUsageComponent", function() { return SimpleUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimpleUsageComponent = class SimpleUsageComponent {
    constructor() {
        this.usages = [
            { label: 'Manual Evaluation', path: 'playground/sort-list.pl' },
            { label: 'Automatic Evaluation', path: 'playground/sort-list-auto-grade.pl' }
        ];
    }
};
SimpleUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'simple-usage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-usage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/docs/simple-usage/simple-usage.component.html")).default
    })
], SimpleUsageComponent);



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
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmComponent = class ConfirmComponent {
    constructor(dialog, data, changes, ngZone) {
        this.dialog = dialog;
        this.data = data;
        this.ngZone = ngZone;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
    close(result) {
        this.ngZone.run(() => this.dialog.close(result));
    }
};
ConfirmComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm/confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm.component.scss */ "./src/app/shared/components/confirm/confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], ConfirmComponent);



/***/ }),

/***/ "./src/app/shared/components/prompt/prompt.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/prompt/prompt.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prompt-form {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n.prompt-form mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW1hZG91L0Rlc2t0b3AvUEwvY29tcG9uZW50cy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb21wdC9wcm9tcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9tcHQvcHJvbXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb21wdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAzMDBweDtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG59XG4iLCIucHJvbXB0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuLnByb21wdC1mb3JtIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let PromptComponent = class PromptComponent {
    constructor(dialog, data, ngZone) {
        this.dialog = dialog;
        this.data = data;
        this.ngZone = ngZone;
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
    close(result) {
        this.ngZone.run(() => this.dialog.close(result));
    }
};
PromptComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
PromptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prompt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prompt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/prompt/prompt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prompt.component.scss */ "./src/app/shared/components/prompt/prompt.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], PromptComponent);



/***/ }),

/***/ "./src/app/shared/directives/dom-change.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/dom-change.directive.ts ***!
  \***********************************************************/
/*! exports provided: DomChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomChangeDirective", function() { return DomChangeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DomChangeDirective = class DomChangeDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.domChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.domAttributes = false;
        this.domChildList = true;
        this.domCharacterData = false;
        const element = this.elementRef.nativeElement;
        this.changes = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => this.domChange.emit(mutation));
        });
        this.changes.observe(element, {
            attributes: this.domAttributes,
            childList: this.domChildList,
            characterData: this.domCharacterData
        });
    }
    ngOnDestroy() {
        this.changes.disconnect();
    }
};
DomChangeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DomChangeDirective.prototype, "domChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DomChangeDirective.prototype, "domAttributes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DomChangeDirective.prototype, "domChildList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DomChangeDirective.prototype, "domCharacterData", void 0);
DomChangeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[domChange]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], DomChangeDirective);



/***/ }),

/***/ "./src/app/shared/directives/drag-drop.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/drag-drop.directive.ts ***!
  \**********************************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var DragDropDirective_1;


let DragDropDirective = DragDropDirective_1 = class DragDropDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.events = [];
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.id = 'dnd-' + ++DragDropDirective_1.NODE_ID;
    }
    ngAfterContentInit() {
        const node = this.el.nativeElement;
        this.setDraggable(node);
        this.setDroppable(node);
    }
    ngOnDestroy() {
        this.events.forEach((e) => e());
    }
    setDraggable(node) {
        this.renderer.setAttribute(node, 'id', this.id);
        this.renderer.setProperty(node, 'draggable', true);
        const dragstart = (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('dnd-id', node.id);
            this.renderer.addClass(node, 'dnd-drag');
            return false;
        };
        node.addEventListener('dragstart', dragstart, false);
        const dragend = (_) => {
            this.renderer.removeClass(node, 'dnd-drag');
            return false;
        };
        node.addEventListener('dragend', dragend, false);
    }
    setDroppable(node) {
        const dragover = (e) => {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.renderer.addClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragover', dragover);
        const dragenter = (_) => {
            this.renderer.removeClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragenter', dragenter);
        const dragleave = (_) => {
            this.renderer.removeClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragleave', dragleave);
        const drop = (e) => {
            e.preventDefault();
            this.renderer.removeClass(node, 'dnd-over');
            const dndId = e.dataTransfer.getData('dnd-id');
            if (dndId) {
                this.dropped.emit({
                    source: dndId,
                    destination: this.id,
                });
            }
            return false;
        };
        this.addListener(node, 'drop', drop);
    }
    addListener(node, event, handler) {
        this.renderer.listen(node, event, handler);
        this.events.push(() => {
            node.removeEventListener(event, handler, false);
        });
    }
};
DragDropDirective.NODE_ID = 0;
DragDropDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], DragDropDirective.prototype, "dropped", void 0);
DragDropDirective = DragDropDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[dragNdrop]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], DragDropDirective);



/***/ }),

/***/ "./src/app/shared/directives/graphviz.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/graphviz.directive.ts ***!
  \*********************************************************/
/*! exports provided: GraphvizDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphvizDirective", function() { return GraphvizDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-graphviz */ "./node_modules/d3-graphviz/build/d3-graphviz.js");
/* harmony import */ var d3_graphviz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_graphviz__WEBPACK_IMPORTED_MODULE_2__);



let GraphvizDirective = class GraphvizDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get graph() {
        return this._graph;
    }
    set graph(value) {
        this._graph = value;
        this.render();
    }
    render() {
        if (this.elementRef && this._graph) {
            try {
                const viz = Object(d3_graphviz__WEBPACK_IMPORTED_MODULE_2__["graphviz"])(this.elementRef.nativeElement);
                viz.renderDot(this._graph || '');
            }
            catch (error) {
                console.error(error);
            }
        }
    }
};
GraphvizDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], GraphvizDirective.prototype, "graph", null);
GraphvizDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[graphviz]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], GraphvizDirective);



/***/ }),

/***/ "./src/app/shared/directives/numeric.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/numeric.directive.ts ***!
  \********************************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumericDirective = class NumericDirective {
    constructor(el) {
        this.el = el;
        this.decimalCounter = 0;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.decimal = true;
        this.inputElement = el.nativeElement;
    }
    onKeyDown(e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) || // Allow: Cmd+X (Mac)
            (this.decimal && e.key === '.' && this.decimalCounter < 1) // Allow: only one decimal point
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    }
    onKeyUp(e) {
        if (!this.decimal) {
            return;
        }
        else {
            this.decimalCounter =
                this.el.nativeElement.value.split('.').length - 1;
        }
    }
    onPaste(event) {
        const pastedInput = event.clipboardData.getData('text/plain');
        let pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(pastedInput)) {
            pasted = document.execCommand('insertText', false, pastedInput.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(pastedInput);
                document.execCommand('paste');
            }
        }
    }
    onDrop(event) {
        const textData = event.dataTransfer.getData('text');
        this.inputElement.focus();
        let pasted = false;
        if (!this.decimal) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9]/g, ''));
        }
        else if (this.isValidDecimal(textData)) {
            pasted = document.execCommand('insertText', false, textData.replace(/[^0-9.]/g, ''));
        }
        if (pasted) {
            event.preventDefault();
        }
        else {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textData);
                document.execCommand('paste');
            }
        }
    }
    isValidDecimal(string) {
        return string.split('.').length <= 2;
    }
};
NumericDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NumericDirective.prototype, "decimal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NumericDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NumericDirective.prototype, "onKeyUp", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('paste', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ClipboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NumericDirective.prototype, "onPaste", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DragEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NumericDirective.prototype, "onDrop", null);
NumericDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: 'input[numeric]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NumericDirective);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");

/* CORE  */





/* MATERIAL  */






























let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            // CORE
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        ],
        exports: [
            // CORE
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_25__["MatTreeModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__["MatTabsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"]
        ],
        entryComponents: [],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/models/abstract-component.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/models/abstract-component.model.ts ***!
  \***********************************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class AbstractComponent {
    constructor(changes) {
        this.changes = changes;
        /**
         * state of the component
         */
        this.css = '';
        /**
         * JSON representation of the component.
         */
        this.serialize = () => {
            const object = {};
            this.props().forEach(prop => {
                object[prop.name] = this[prop.name];
                if (object[prop.name] == null && prop.default != null) {
                    if (typeof (prop.default) === 'function') {
                        object[prop.name] = prop.default(this);
                    }
                    else {
                        object[prop.name] = prop.default;
                    }
                }
            });
            this.onValidate(object);
            return object;
        };
        /** Initializes the component from a JSON. */
        this.deserialize = (object) => {
            this.props().forEach(prop => {
                this[prop.name] = object[prop.name] || this[prop.name];
                if (this[prop.name] == null && prop.default != null) {
                    if (typeof (prop.default) === 'function') {
                        this[prop.name] = prop.default(this);
                    }
                    else {
                        this[prop.name] = prop.default;
                    }
                }
            });
            this.onValidate(this);
            this.onRender();
            this.detectChanges();
        };
        /** */
        this.refresh = () => {
            const components = document.querySelectorAll('[cid]');
            components.forEach((e) => {
                e.detectChanges();
            });
            this.checkMath();
        };
        /** Invokes detectChanges of ChangeDetectorRef. */
        this.detectChanges = () => {
            this.changes.detectChanges();
        };
    }
    /** Lifecyle hook called after the component is deserialized. */
    onRender() {
    }
    /**
     * Lifecyle hook called after the component is serialized|deserialized to validate
     * the state of the component.
     */
    onValidate(object) {
    }
    /** Check MathJax on the page. */
    checkMath() {
        setTimeout(() => {
            if ('MathJax' in window) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
            }
            else {
                console.log('MathJax script is not present on the page');
            }
        }, 100);
    }
    props() {
        return [
            { name: 'cid', default: '' },
            { name: 'css', default: '' },
            { name: 'debug', default: false },
            { name: 'selector', default: '' },
            ...this.properties,
        ];
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AbstractComponent.prototype, "cid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AbstractComponent.prototype, "debug", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AbstractComponent.prototype, "selector", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbstractComponent.prototype, "css", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbstractComponent.prototype, "serialize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbstractComponent.prototype, "deserialize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbstractComponent.prototype, "refresh", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbstractComponent.prototype, "detectChanges", void 0);


/***/ }),

/***/ "./src/app/shared/models/automaton.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/automaton.model.ts ***!
  \**************************************************/
/*! exports provided: emptyAutomaton, stringFromAutomaton, automatonFromString, automatonToDotFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyAutomaton", function() { return emptyAutomaton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFromAutomaton", function() { return stringFromAutomaton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automatonFromString", function() { return automatonFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "automatonToDotFormat", function() { return automatonToDotFormat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function emptyAutomaton() {
    return {
        alphabet: [],
        initialStates: [],
        acceptingStates: [],
        states: [],
        transitions: [],
        position: {},
    };
}
function stringFromAutomaton(automaton) {
    const lines = [];
    lines.push('#states');
    automaton.states.forEach(e => lines.push(e));
    lines.push('#initials');
    automaton.initialStates.forEach(e => lines.push(e));
    lines.push('#accepting');
    automaton.acceptingStates.forEach(e => lines.push(e));
    lines.push('#alphabet');
    automaton.alphabet.forEach(e => lines.push(e));
    lines.push('#transitions');
    automaton.transitions.forEach(transition => {
        transition.symbols.forEach(symbol => {
            lines.push(`${transition.fromState}:${symbol}>${transition.toState}`);
        });
    });
    return lines.join('\n');
}
function automatonFromString(input) {
    const lines = input.split(/\r?\n/);
    const automaton = emptyAutomaton();
    let states = [];
    let initials = [];
    let accepting = [];
    let alphabet = [];
    const transitions = [];
    let parseState = null;
    const parseCounts = {
        states: 0,
        initials: 0,
        accepting: 0,
        alphabet: 0,
        transitions: 0
    };
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].replace(/\s/g, '');
        if (line.length === 0) {
            continue;
        }
        else if (line[0] === '#') {
            parseState = line.substr(1);
            if (typeof parseCounts[parseState] === 'undefined') {
                throw new Error('Line ' + (i + 1).toString() + ': invalid section name ' +
                    parseState + '. Must be one of: states, initials, \
                                accepting, alphabet, transitions.');
            }
            else {
                parseCounts[parseState] += 1;
                if (parseCounts[parseState] > 1) {
                    throw new Error(`Line ${(i + 1)}: duplicate section name ${parseState}.`);
                }
            }
        }
        else {
            if (parseState == null) {
                throw new Error('Line ' + (i + 1).toString() + ': no #section declared. \
                                Add one section: states, initial, accepting, \
                                alphabet, transitions.');
            }
            else if (parseState === 'states') {
                states = states.concat(line.split(';'));
            }
            else if (parseState === 'initials') {
                initials = initials.concat(line.split(';'));
            }
            else if (parseState === 'accepting') {
                accepting = accepting.concat(line.split(';'));
            }
            else if (parseState === 'alphabet') {
                alphabet = alphabet.concat(line.split(';'));
            }
            else if (parseState === 'transitions') {
                const state_rest = line.split(':');
                const fromStates = state_rest[0].split(',');
                const parts = state_rest[1].split(';');
                let symbols = [];
                let toStates = [];
                for (let j = 0; j < parts.length; j++) {
                    const left_right = parts[j].split('>');
                    symbols = left_right[0].split(',');
                    toStates = left_right[1].split(',');
                }
                transitions.push({
                    fromState: fromStates[0],
                    toState: toStates[0],
                    symbols: symbols
                });
            }
        }
    }
    for (const k in parseCounts) {
        if (parseCounts[k] !== 1) {
            throw new Error('Specification missing #' + parseCounts[k] +
                ' section.');
        }
    }
    automaton.states = states;
    automaton.initialStates = initials;
    automaton.alphabet = alphabet;
    automaton.acceptingStates = accepting;
    automaton.transitions = transitions;
    return automaton;
}
function automatonToDotFormat(automaton) {
    const result = ['digraph finite_state_machine {', '  rankdir=LR;'];
    const accStates = ['  node [shape = doublecircle];'];
    let i = 0, trans = [];
    for (i = 0; i < automaton.acceptingStates.length; i++) {
        accStates.push(automaton.acceptingStates[i].toString());
    }
    accStates.push(';');
    if (accStates.length > 2) {
        result.push(accStates.join(' '));
    }
    result.push('  node [shape = circle];');
    i = 0;
    automaton.initialStates.forEach(state => {
        result.push(`  secret_node${i} [style=invis, shape=point]`);
        const arrow = [`  secret_node${i} ->`];
        arrow.push(state);
        arrow.push('[style=bold];');
        result.push(arrow.join(' '));
        i++;
    });
    automaton.transitions.forEach(transition => {
        let initTransition = false;
        automaton.initialStates.forEach(init => {
            if (init === transition.toState) {
                trans = [' '];
                trans.push(transition.toState);
                trans.push('->');
                trans.push(transition.fromState);
                trans.push('[');
                trans.push('label =');
                trans.push('"' + transition.symbols.join(',') + '"');
                trans.push(' dir = back];');
                result.push(trans.join(' '));
                initTransition = true;
                return true;
            }
        });
        if (!initTransition) {
            trans = [' '];
            trans.push(transition.fromState.toString());
            trans.push('->');
            trans.push(transition.toState.toString());
            trans.push('[');
            trans.push('label =');
            trans.push('"' + transition.symbols.join(',') + '"');
            trans.push(' ];');
            result.push(trans.join(' '));
        }
    });
    result.push('}');
    return result.join('\n').replace(/\$/g, '$');
}


/***/ }),

/***/ "./src/app/shared/models/code-editor.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/code-editor.model.ts ***!
  \****************************************************/
/*! exports provided: onMonacoLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMonacoLoaded", function() { return onMonacoLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function onMonacoLoaded() {
    monaco.languages.register({
        id: 'premierlangage',
        extensions: ['pl'],
    });
    monaco.languages.setMonarchTokensProvider('premierlangage', {
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
    });
}


/***/ }),

/***/ "./src/app/shared/models/definition.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/definition.model.ts ***!
  \***************************************************/
/*! exports provided: COMPONENT_DEFINITIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENT_DEFINITIONS", function() { return COMPONENT_DEFINITIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const COMPONENT_DEFINITIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Definition Provider');


/***/ }),

/***/ "./src/app/shared/models/text-select.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/text-select.model.ts ***!
  \****************************************************/
/*! exports provided: Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Typography; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Typography;
(function (Typography) {
    Typography["display4"] = "display4";
    Typography["display3"] = "display3";
    Typography["display2"] = "display2";
    Typography["display1"] = "display1";
    Typography["headline"] = "headline";
    Typography["title"] = "title";
    Typography["subheading2"] = "subheading2";
    Typography["subheading1"] = "subheading1";
    Typography["body1"] = "body1";
    Typography["body2"] = "body2";
    Typography["caption"] = "caption";
})(Typography || (Typography = {}));


/***/ }),

/***/ "./src/app/shared/pipes/asset-data.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/asset-data.pipe.ts ***!
  \*************************************************/
/*! exports provided: AssetDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDataPipe", function() { return AssetDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/shared/services/http.service.ts");



let AssetDataPipe = class AssetDataPipe {
    constructor(http) {
        this.http = http;
    }
    transform(path) {
        return this.http.asset(path);
    }
};
AssetDataPipe.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
AssetDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'assetData' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], AssetDataPipe);



/***/ }),

/***/ "./src/app/shared/pipes/asset-path.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/asset-path.pipe.ts ***!
  \*************************************************/
/*! exports provided: AssetPathPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetPathPipe", function() { return AssetPathPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let AssetPathPipe = class AssetPathPipe {
    transform(path) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].assets + '/' + path;
    }
};
AssetPathPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'assetPath' })
], AssetPathPipe);



/***/ }),

/***/ "./src/app/shared/pipes/escape-html.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/escape-html.pipe.ts ***!
  \**************************************************/
/*! exports provided: EscapeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EscapeHtmlPipe = class EscapeHtmlPipe {
    constructor() { }
    transform(value) {
        if (!value) {
            return '';
        }
        const obj = { '<': '&lt;', '>': '&gt;', '\'': '&apos;', '"': '&qout;', '&': '&amp;' };
        return value.split('').map(x => obj.hasOwnProperty(x) ? obj[x] : x).join('');
    }
};
EscapeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'escapeHtml'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EscapeHtmlPipe);



/***/ }),

/***/ "./src/app/shared/pipes/pretty-print.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/pretty-print.pipe.ts ***!
  \***************************************************/
/*! exports provided: PrettyPrintPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrettyPrintPipe", function() { return PrettyPrintPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrettyPrintPipe = class PrettyPrintPipe {
    transform(val) {
        return JSON.stringify(val, undefined, 4)
            .replace(' ', '&nbsp;')
            .replace('\n', '<br/>');
    }
};
PrettyPrintPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'prettyPrint'
    })
], PrettyPrintPipe);



/***/ }),

/***/ "./src/app/shared/pipes/split.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/split.pipe.ts ***!
  \********************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SplitPipe = class SplitPipe {
    constructor() { }
    transform(value, separator = ' ') {
        value = (value || '').trim();
        return value.split(separator).map(e => e.trim());
    }
};
SplitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'split'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SplitPipe);



/***/ }),

/***/ "./src/app/shared/pipes/text-select-split.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/text-select-split.pipe.ts ***!
  \********************************************************/
/*! exports provided: TextSelectSplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSelectSplitPipe", function() { return TextSelectSplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TextSelectSplitPipe = class TextSelectSplitPipe {
    transform(value, options) {
        const { mode, separator, attributes } = options;
        value = (value || '').trim();
        if (mode === 'word') {
            return value.split(separator).reduce((acc, curr, index) => {
                if (curr.trim().length === 0) {
                    return acc;
                }
                return `${acc} <span data-index="${index}" ${attributes ? attributes(index) : ''}>${curr}</span>`;
            }, '');
        }
        else {
            const html = [];
            let index = 0;
            for (const c of value) {
                html.push(`<span data-index="${index}" ${attributes ? attributes(index) : ''}>${c}</span>`);
                index++;
            }
            return html.join('');
        }
    }
};
TextSelectSplitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'textSelectSplit'
    })
], TextSelectSplitPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let TrustHtmlPipe = class TrustHtmlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
};
TrustHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TrustHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trustHtml'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], TrustHtmlPipe);



/***/ }),

/***/ "./src/app/shared/pipes/trust-resource-url.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/trust-resource-url.pipe.ts ***!
  \*********************************************************/
/*! exports provided: TrustResourceUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrustResourceUrlPipe", function() { return TrustResourceUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let TrustResourceUrlPipe = class TrustResourceUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
TrustResourceUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TrustResourceUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trustResourceUrl'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], TrustResourceUrlPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let TrustScriptPipe = class TrustScriptPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustScript(value);
    }
};
TrustScriptPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TrustScriptPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trustScript'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], TrustScriptPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let TrustStylePipe = class TrustStylePipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    }
};
TrustStylePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TrustStylePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trustStyle'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], TrustStylePipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let TrustUrlPipe = class TrustUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value, args) {
        return this.domSanitizer.bypassSecurityTrustUrl(value);
    }
};
TrustUrlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
TrustUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'trustUrl'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], TrustUrlPipe);



/***/ }),

/***/ "./src/app/shared/pipes/typography.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/typography.pipe.ts ***!
  \*************************************************/
/*! exports provided: TypographyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyPipe", function() { return TypographyPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/text-select.model */ "./src/app/shared/models/text-select.model.ts");



let TypographyPipe = class TypographyPipe {
    constructor() { }
    transform(value) {
        switch (value) {
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].display4: return 'mat-display-4';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].display3: return 'mat-display-3';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].display2: return 'mat-display-2';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].display1: return 'mat-display-1';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].headline: return 'mat-h1';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].title: return 'mat-h2';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].subheading2: return 'mat-h3';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].subheading1: return 'mat-h4';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].body1: return 'mat-body-1';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].body2: return 'mat-body-2';
            case _models_text_select_model__WEBPACK_IMPORTED_MODULE_2__["Typography"].caption: return 'mat-caption';
            default: return 'mat-body-1';
        }
    }
};
TypographyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'typography'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TypographyPipe);



/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AlertService = class AlertService {
    constructor(zone, snackbar) {
        this.zone = zone;
        this.snackbar = snackbar;
    }
    snack(message, config) {
        this.zone.run(() => {
            this.snackbar.open(message, '', config || {
                duration: 3000
            });
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], AlertService);



/***/ }),

/***/ "./src/app/shared/services/ask.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/ask.service.ts ***!
  \************************************************/
/*! exports provided: AskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskService", function() { return AskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");





let AskService = class AskService {
    constructor(dialog, ngZone) {
        this.dialog = dialog;
        this.ngZone = ngZone;
    }
    promptAsync(options) {
        const ref = this.dialog.open(_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__["PromptComponent"], {
            hasBackdrop: true,
            disableClose: true,
            data: options,
        });
        return new Promise(resolve => {
            this.ngZone.run(() => {
                let subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }
    confirmAsync(options) {
        const ref = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], {
            hasBackdrop: true,
            disableClose: true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise((resolve) => {
            this.ngZone.run(() => {
                let subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }
};
AskService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], AskService);



/***/ }),

/***/ "./src/app/shared/services/clipboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/clipboard.service.ts ***!
  \******************************************************/
/*! exports provided: ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClipboardService = class ClipboardService {
    copy(data) {
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
};
ClipboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ClipboardService);



/***/ }),

/***/ "./src/app/shared/services/definition.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/definition.service.ts ***!
  \*******************************************************/
/*! exports provided: DefinitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionService", function() { return DefinitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_definition_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/definition.model */ "./src/app/shared/models/definition.model.ts");



let DefinitionService = class DefinitionService {
    constructor(components) {
        this.components = components;
        this.components = this.components.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }).map(this.injectRequiredProperties.bind(this));
    }
    forEach(consume) {
        this.components.forEach(consume);
    }
    findOne(predicate) {
        return this.components.find(predicate);
    }
    findAll() {
        return this.components.slice();
    }
    injectRequiredProperties(def) {
        // tslint:disable-next-line: max-line-length
        def.properties.push({ name: 'debug', default: false, type: 'boolean', description: 'Prints the current properties of the component' });
        def.properties.push({ name: 'selector', default: '', type: 'string', description: 'Selector of the component.' });
        def.properties.push({ name: 'cid', default: '', type: 'string', description: 'Unique identifier of the component' });
        def.properties.push({
            name: 'css', default: '', type: 'string',
            description: 'A space separated list of css classes to add to the component container'
        });
        def.properties = def.properties.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        def.properties = def.properties.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        return def;
    }
};
DefinitionService.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_models_definition_model__WEBPACK_IMPORTED_MODULE_2__["COMPONENT_DEFINITIONS"],] }] }
];
DefinitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_models_definition_model__WEBPACK_IMPORTED_MODULE_2__["COMPONENT_DEFINITIONS"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], DefinitionService);



/***/ }),

/***/ "./src/app/shared/services/drag-drop.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/drag-drop.service.ts ***!
  \******************************************************/
/*! exports provided: DragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DragDropService = class DragDropService {
    constructor() {
        this.components = {};
    }
    register(id, component) {
        this.components[id] = component;
    }
    unregister(id) {
        delete this.components[id];
    }
    get(id) {
        if (!id) {
            return undefined;
        }
        return this.components[id];
    }
};
DragDropService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DragDropService);



/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
        this.cache = {};
    }
    asset(path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            path = this.resolveAsset(path);
            if (path in this.cache) {
                return this.cache[path];
            }
            const content = yield this.http.get(path, { responseType: 'text' }).toPromise();
            this.cache[path] = content;
            return content;
        });
    }
    preview(content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = {
                'name': 'preview_pl',
                'content': content
            };
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json;charset=UTF-8');
            const response = yield this.http.post('filebrowser/option', data, {
                headers: headers
            }).toPromise();
            return response.preview;
        });
    }
    loadExternalStyles(styleUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const styleElement = document.createElement('link');
                styleElement.href = this.resolveBundle(styleUrl);
                styleElement.onload = resolve;
                document.head.appendChild(styleElement);
            });
        });
    }
    loadExternalScripts(scriptUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const scriptElement = document.createElement('script');
                scriptElement.src = this.resolveBundle(scriptUrl);
                scriptElement.onload = resolve;
                document.body.appendChild(scriptElement);
            });
        });
    }
    resolveAsset(path) {
        const assets = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assets;
        path = assets + '/' + path;
        if (path.startsWith('https://cdn.staticaly.com')) {
            path += '?env=dev';
        }
        return path;
    }
    resolveBundle(path) {
        const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        path = baseUrl + '/' + path;
        if (path.startsWith('https://cdn.staticaly.com')) {
            path += '?env=dev';
        }
        return path;
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/prompt/prompt.component */ "./src/app/shared/components/prompt/prompt.component.ts");
/* harmony import */ var _directives_dom_change_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/dom-change.directive */ "./src/app/shared/directives/dom-change.directive.ts");
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/drag-drop.directive */ "./src/app/shared/directives/drag-drop.directive.ts");
/* harmony import */ var _directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/graphviz.directive */ "./src/app/shared/directives/graphviz.directive.ts");
/* harmony import */ var _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/numeric.directive */ "./src/app/shared/directives/numeric.directive.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _pipes_asset_data_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/asset-data.pipe */ "./src/app/shared/pipes/asset-data.pipe.ts");
/* harmony import */ var _pipes_asset_path_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/asset-path.pipe */ "./src/app/shared/pipes/asset-path.pipe.ts");
/* harmony import */ var _pipes_pretty_print_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/pretty-print.pipe */ "./src/app/shared/pipes/pretty-print.pipe.ts");
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/trust-html.pipe */ "./src/app/shared/pipes/trust-html.pipe.ts");
/* harmony import */ var _pipes_trust_resource_url_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/trust-resource-url.pipe */ "./src/app/shared/pipes/trust-resource-url.pipe.ts");
/* harmony import */ var _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/trust-script.pipe */ "./src/app/shared/pipes/trust-script.pipe.ts");
/* harmony import */ var _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/trust-style.pipe */ "./src/app/shared/pipes/trust-style.pipe.ts");
/* harmony import */ var _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/trust-url.pipe */ "./src/app/shared/pipes/trust-url.pipe.ts");
/* harmony import */ var _pipes_typography_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/typography.pipe */ "./src/app/shared/pipes/typography.pipe.ts");
/* harmony import */ var _pipes_text_select_split_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/text-select-split.pipe */ "./src/app/shared/pipes/text-select-split.pipe.ts");
/* harmony import */ var _pipes_escape_html_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/escape-html.pipe */ "./src/app/shared/pipes/escape-html.pipe.ts");
/* harmony import */ var _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/split.pipe */ "./src/app/shared/pipes/split.pipe.ts");






















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _directives_dom_change_directive__WEBPACK_IMPORTED_MODULE_5__["DomChangeDirective"],
            _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__["DragDropDirective"],
            _directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_7__["GraphvizDirective"],
            _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__["NumericDirective"],
            _pipes_asset_data_pipe__WEBPACK_IMPORTED_MODULE_10__["AssetDataPipe"],
            _pipes_asset_path_pipe__WEBPACK_IMPORTED_MODULE_11__["AssetPathPipe"],
            _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_17__["TrustUrlPipe"],
            _pipes_trust_resource_url_pipe__WEBPACK_IMPORTED_MODULE_14__["TrustResourceUrlPipe"],
            _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_13__["TrustHtmlPipe"],
            _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_16__["TrustStylePipe"],
            _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_15__["TrustScriptPipe"],
            _pipes_typography_pipe__WEBPACK_IMPORTED_MODULE_18__["TypographyPipe"],
            _pipes_pretty_print_pipe__WEBPACK_IMPORTED_MODULE_12__["PrettyPrintPipe"],
            _pipes_text_select_split_pipe__WEBPACK_IMPORTED_MODULE_19__["TextSelectSplitPipe"],
            _pipes_escape_html_pipe__WEBPACK_IMPORTED_MODULE_20__["EscapeHtmlPipe"],
            _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_21__["SplitPipe"],
            _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"],
            _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
        ],
        exports: [
            _directives_dom_change_directive__WEBPACK_IMPORTED_MODULE_5__["DomChangeDirective"],
            _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_6__["DragDropDirective"],
            _directives_graphviz_directive__WEBPACK_IMPORTED_MODULE_7__["GraphvizDirective"],
            _directives_numeric_directive__WEBPACK_IMPORTED_MODULE_8__["NumericDirective"],
            _pipes_asset_data_pipe__WEBPACK_IMPORTED_MODULE_10__["AssetDataPipe"],
            _pipes_asset_path_pipe__WEBPACK_IMPORTED_MODULE_11__["AssetPathPipe"],
            _pipes_trust_url_pipe__WEBPACK_IMPORTED_MODULE_17__["TrustUrlPipe"],
            _pipes_trust_resource_url_pipe__WEBPACK_IMPORTED_MODULE_14__["TrustResourceUrlPipe"],
            _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_13__["TrustHtmlPipe"],
            _pipes_trust_style_pipe__WEBPACK_IMPORTED_MODULE_16__["TrustStylePipe"],
            _pipes_trust_script_pipe__WEBPACK_IMPORTED_MODULE_15__["TrustScriptPipe"],
            _pipes_typography_pipe__WEBPACK_IMPORTED_MODULE_18__["TypographyPipe"],
            _pipes_text_select_split_pipe__WEBPACK_IMPORTED_MODULE_19__["TextSelectSplitPipe"],
            _pipes_pretty_print_pipe__WEBPACK_IMPORTED_MODULE_12__["PrettyPrintPipe"],
            _pipes_escape_html_pipe__WEBPACK_IMPORTED_MODULE_20__["EscapeHtmlPipe"],
            _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_21__["SplitPipe"],
            _components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"],
            _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"],
            _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]
        ],
        providers: [],
        entryComponents: [_components_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponent"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"]]
    })
], SharedModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    assets: '/static/components/assets',
    baseUrl: '/static/components'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mamadou/Desktop/PL/components/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map