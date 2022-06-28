import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs-compat/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/take';
import { LANGUAGE_PROVIDERS } from '../pages/editor/shared/languages/language';
import { PremierLangage } from '../pages/editor/shared/languages/premierlangage';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { TreeComponent } from './components/tree/tree.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { DndDirective } from './directives/dnd.directive';
import { RunScriptsDirective } from './directives/run-scripts.directive';
import { TreeNodeDirective } from './directives/tree-node.directive';
import { MaterialModule } from './material.module';
import { TrustHtmlPipe } from './pipes/trust-html.pipe';
import { TrustResourceUrlPipe } from './pipes/trust-resource-url.pipe';
import { TrustScriptPipe } from './pipes/trust-script.pipe';
import { TrustStylePipe } from './pipes/trust-style.pipe';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import { THEME_PROVIDERS } from './themes/theme';
import { DarkTheme } from './themes/theme.dark';
import { LightTheme } from './themes/theme.light';
import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MarkdownModule } from 'ngx-markdown';
import { LoadingComponent } from './components/loading/loading.component';
import { AssetPipe } from './pipes/asset.pipe';
import { HighlightWordsDirective } from './directives/highlight-words.directive';

@NgModule({
    declarations: [
        TreeComponent,
        PromptComponent,
        ConfirmComponent,
        LoadingComponent,

        DndDirective,
        AutofocusDirective,
        RunScriptsDirective,
        TreeNodeDirective,
        HighlightWordsDirective,

        AssetPipe,
        TrustHtmlPipe,
        TrustUrlPipe,
        TrustScriptPipe,
        TrustStylePipe,
        TrustResourceUrlPipe,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AngularSplitModule,
        MonacoEditorModule,
        MarkdownModule,
        NgScrollbarModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
        AngularSplitModule,
        MonacoEditorModule,
        MarkdownModule,
        NgScrollbarModule,

        TreeComponent,
        PromptComponent,
        ConfirmComponent,
        LoadingComponent,

        AutofocusDirective,
        DndDirective,
        RunScriptsDirective,
        TreeNodeDirective,
        HighlightWordsDirective,

        AssetPipe,
        TrustHtmlPipe,
        TrustUrlPipe,
        TrustScriptPipe,
        TrustStylePipe,
        TrustResourceUrlPipe,
    ],
    providers: [
        { provide: LANGUAGE_PROVIDERS, multi: true, useClass: PremierLangage },
        { provide: THEME_PROVIDERS, multi: true, useClass: DarkTheme },
        { provide: THEME_PROVIDERS, multi: true, useClass: LightTheme }
    ],
    entryComponents: [PromptComponent, ConfirmComponent]
})
export class SharedModule {}
