import { ViewEncapsulation, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageEditor, PreviewEditor } from '../../shared/models/editor.model';
import { IEditorDocument } from '../../shared/services/core/opener.service';
import { Subscription } from 'rxjs';
import { RunScriptsDirective } from 'src/app/shared/directives/run-scripts.directive';
import { isMarkdown, isSVG, isPl } from '../../shared/models/filters.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'preview-editor',
    templateUrl: './preview-editor.component.html',
    styleUrls: ['./preview-editor.component.scss'],
})
export class PreviewEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: PreviewEditor;
    @ViewChild(RunScriptsDirective)
    scripts: RunScriptsDirective;

    private counter: number;
    content: string;
    isMarkdown: boolean;
    isURL: boolean;
    isHTML: boolean;
    loading: boolean;

    private openSubscription: Subscription;

    constructor() { }

    ngOnInit() {
        this.open(this.editor.document());
        this.openSubscription = this.editor.onOpened.subscribe(document => {
            this.open(document);
        });
    }

    ngOnDestroy(): void {
        this.openSubscription.unsubscribe();
    }

    didFrameLoaded() {
        this.counter++;
        // for some reason onload of iframe is called twice
        this.loading = this.counter % 2 === 0;
    }

    private open(document: IEditorDocument): void {
        this.content = document.resource.meta.previewData;
        this.isMarkdown = isMarkdown(document.resource);
        this.isHTML = isSVG(document.resource);
        this.isURL = isPl(document.resource);

        this.loading = this.isURL;

        if (this.isHTML && this.scripts) {
            this.scripts.reinsertScripts();
        }
    }

}
