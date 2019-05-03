import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownComponent } from './markdown.component';
import { MarkdownService } from './markdown.service';
import { MarkdownConfig } from './markdown.config';
var MarkdownModule = (function () {
    function MarkdownModule() {
    }
    MarkdownModule.forRoot = function () {
        return {
            ngModule: MarkdownModule,
            providers: [MarkdownConfig]
        };
    };
    MarkdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [MarkdownComponent],
                    providers: [MarkdownService],
                    exports: [MarkdownComponent],
                    entryComponents: [MarkdownComponent]
                },] },
    ];
    /** @nocollapse */
    MarkdownModule.ctorParameters = function () { return []; };
    return MarkdownModule;
}());
export { MarkdownModule };
//# sourceMappingURL=markdown.module.js.map