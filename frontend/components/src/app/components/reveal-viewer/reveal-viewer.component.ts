import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { AbstractComponent, Property } from "src/app/shared/models/abstract-component.model";
import { ComponentDefinition } from "src/app/shared/models/definition.model";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.js';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'reveal-viewer-component',
    templateUrl: './reveal-viewer.component.html',
    styleUrls: ['./reveal-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'reveal-viewer-component'
    }
})
export class RevaelViwerComponent extends AbstractComponent implements OnDestroy {

    private reveal?: any;
    template: SafeHtml = '';

    @Input()
    set content(value: string | undefined) {
        if (value) {
            this.template = this.sanitizer.bypassSecurityTrustHtml(value);
            this.changeDetectorRef.markForCheck();
            if (!this.reveal) {
                setTimeout(() => {
                    this.reveal = new Reveal(document.querySelector('.r-container'), { plugins: [ Markdown, Highlight ] });
                    this.reveal.initialize();
                }, 100);
            }
        }
    }

    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'content', default: '' }
    ];

    constructor(
        changes: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        super(changes);
    }

    ngOnDestroy(): void {
        if (this.reveal) this.reveal.destroy();
    }

}

export class RevaelViwerComponentDefinition implements ComponentDefinition {
    component = RevaelViwerComponent;
    name = 'Reveal Viewer';
    icon = 'eval-grid.svg';
    link = '/components/reveal-viewer';
    selector = 'c-reveal-viewer';
    description = 'Simple Reveal JS adapter.';
    usages = [{
        label: 'Exemple', path: 'playground/reveal-viewer.pl'
    }];
    css?: { selector: string; description: string; }[];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is clickable' },
        { name: 'content', default: '', type: 'string', description: 'Reveal JS content' }
    ];
}
