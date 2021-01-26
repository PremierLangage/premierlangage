// CORE
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// REQUIREMENTS

// syntax hightlighting for https://www.npmjs.com/package/ngx-markdown
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';

import { ResizableModule } from 'angular-resizable-element';
import { onMonacoLoaded } from './shared/models/code-editor.model';
import { SharedModule } from './shared/shared.module';
import { MarkdownModule } from 'ngx-markdown'; // https://www.npmjs.com/package/ngx-markdown
import { DefinitionService } from './shared/services/definition.service';

// COMPONENTS
import { AutomatonViewerComponent, AutomatonViewerComponentDefinition } from './components/automaton-viewer/automaton-viewer.component';
import { AutomatonEditorComponent, AutomatonEditorComponentDefinition } from './components/automaton-editor/automaton-editor.component';
import { CheckboxGroupComponent, CheckboxGroupComponentDefinition } from './components/checkbox-group/checkbox-group.component';
import { CodeEditorComponent, CodeEditorComponentDefinition } from './components/code-editor/code-editor.component';
import { DragDropComponent, DragDropComponentDefinition } from './components/drag-drop/drag-drop.component';
import { GraphViewerComponent, GraphViewerComponentDefinition } from './components/graph-viewer/graph-viewer.component';
import { InputComponent, InputComponentDefinition } from './components/input/input.component';
import { MatchListComponent, MatchListComponentDefinition } from './components/match-list/match-list.component';
import { JSXGraphComponent, JSXGraphComponentDefinition } from './components/jsxgraph/jsxgraph.component';
import { MathInputComponent, MathInputComponentDefinition } from './components/math-input/math-input.component';
import { MathMatrixComponent, MathMatrixComponentDefinition } from './components/math-matrix/math-matrix.component';
import { RadioGroupComponent, RadioGroupComponentDefinition } from './components/radio-group/radio-group.component';
import { SortListComponent, SortListComponentDefinition } from './components/sort-list/sort-list.component';
import { TextSelectComponent, TextSelectComponentDefinition } from './components/text-select/text-select.component';
import { HintComponent, HintComponentDefinition } from './components/hint/hint.component';
import { CountDownComponent, CountDownComponentDefinition } from './components/countdown/countdown.component';


// DOC
import { AdvancedUsageComponent } from './docs/advanced-usage/advanced-usage.component';
import { ApiDocComponent } from './docs/api-doc/api-doc.component';
import { DocsComponent } from './docs/docs.component';
import { IntroComponent } from './docs/intro/intro.component';
import { NextPrevComponent } from './docs/next-prev/next-prev.component';
import { PlaygroundComponent } from './docs/playground/playground.component';
import { SimpleUsageComponent } from './docs/simple-usage/simple-usage.component';
import { COMPONENT_DEFINITIONS } from './shared/models/definition.model';
import { CssDocComponent } from './docs/css-doc/css-doc.component';


@NgModule({
  declarations: [
    AppComponent,

    AutomatonViewerComponent,
    AutomatonEditorComponent,
    CheckboxGroupComponent,
    CodeEditorComponent,
    CountDownComponent,
    DragDropComponent,
    GraphViewerComponent,
    HintComponent,
    InputComponent,
    JSXGraphComponent,
    MatchListComponent,
    MathInputComponent,
    MathMatrixComponent,
    RadioGroupComponent,
    SortListComponent,
    TextSelectComponent,

    DocsComponent,
    IntroComponent,
    NextPrevComponent,
    CssDocComponent,
    ApiDocComponent,
    PlaygroundComponent,
    SimpleUsageComponent,
    AdvancedUsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
        cookieName: 'csrftoken',
        headerName: 'X-CSRFToken'
    }),

    ResizableModule,
    MarkdownModule.forRoot(),
    MonacoEditorModule.forRoot({
        baseUrl: '/static/editor/assets',
        defaultOptions: {
            automaticLayout: true
        },
        onMonacoLoad: onMonacoLoaded
    }),
    SharedModule,
  ],
  entryComponents: [
    AppComponent,

    AutomatonViewerComponent,
    AutomatonEditorComponent,
    CheckboxGroupComponent,
    CodeEditorComponent,
    CountDownComponent,
    DragDropComponent,
    GraphViewerComponent,
    HintComponent,
    InputComponent,
    JSXGraphComponent,
    MatchListComponent,
    MathInputComponent,
    MathMatrixComponent,
    RadioGroupComponent,
    SortListComponent,
    TextSelectComponent,
  ],
  providers: [
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: AutomatonViewerComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: AutomatonEditorComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: CheckboxGroupComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: CodeEditorComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: CountDownComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: DragDropComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: GraphViewerComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: HintComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: InputComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: JSXGraphComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: MatchListComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: MathInputComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: MathMatrixComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: RadioGroupComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: SortListComponentDefinition },
    { provide: COMPONENT_DEFINITIONS, multi: true, useClass: TextSelectComponentDefinition },
  ],
})
export class AppModule {

    constructor(
        private readonly injector: Injector,
        private readonly definitions: DefinitionService
    ) {}

    ngDoBootstrap() {
        customElements.define('c-root', createCustomElement(
            AppComponent, { injector: this.injector }
        ));

        this.definitions.forEach(definition => {
            definition.selector.split('|').forEach(selector => {
                customElements.define(selector.trim(), createCustomElement(
                    definition.component, { injector: this.injector }
                ));
            });
        });
    }

}
