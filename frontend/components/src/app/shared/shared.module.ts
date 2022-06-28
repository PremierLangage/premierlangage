import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { DomChangeDirective } from './directives/dom-change.directive';
import { DragDropDirective } from './directives/drag-drop.directive';
import { GraphvizDirective } from './directives/graphviz.directive';
import { NumericDirective } from './directives/numeric.directive';
import { MaterialModule } from './material.module';
import { AssetDataPipe } from './pipes/asset-data.pipe';
import { AssetPathPipe } from './pipes/asset-path.pipe';
import { PrettyPrintPipe } from './pipes/pretty-print.pipe';
import { TrustHtmlPipe } from './pipes/trust-html.pipe';
import { TrustResourceUrlPipe } from './pipes/trust-resource-url.pipe';
import { TrustScriptPipe } from './pipes/trust-script.pipe';
import { TrustStylePipe } from './pipes/trust-style.pipe';
import { TrustUrlPipe } from './pipes/trust-url.pipe';
import { TypographyPipe } from './pipes/typography.pipe';
import { TextSelectSplitPipe } from './pipes/text-select-split.pipe';
import { EscapeHtmlPipe } from './pipes/escape-html.pipe';
import { SplitPipe } from './pipes/split.pipe';

@NgModule({
    declarations: [
        DomChangeDirective,
        DragDropDirective,
        GraphvizDirective,
        NumericDirective,

        AssetDataPipe,
        AssetPathPipe,
        TrustUrlPipe,
        TrustResourceUrlPipe,
        TrustHtmlPipe,
        TrustStylePipe,
        TrustScriptPipe,
        TypographyPipe,
        PrettyPrintPipe,
        TextSelectSplitPipe,
        EscapeHtmlPipe,
        SplitPipe,

        PromptComponent,
        ConfirmComponent,

    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        DomChangeDirective,
        DragDropDirective,
        GraphvizDirective,
        NumericDirective,

        AssetDataPipe,
        AssetPathPipe,
        TrustUrlPipe,
        TrustResourceUrlPipe,
        TrustHtmlPipe,
        TrustStylePipe,
        TrustScriptPipe,
        TypographyPipe,
        TextSelectSplitPipe,
        PrettyPrintPipe,
        EscapeHtmlPipe,
        SplitPipe,

        PromptComponent,
        ConfirmComponent,

        MaterialModule
    ],
    providers: [
    ],
    entryComponents: [PromptComponent, ConfirmComponent]
})
export class SharedModule {}
