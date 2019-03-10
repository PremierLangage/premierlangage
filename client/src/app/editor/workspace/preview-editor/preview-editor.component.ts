import { ViewEncapsulation, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageEditor, PreviewEditor } from '../../shared/models/editor.model';
import { Subscription } from 'rxjs';
import { RunScriptsDirective } from 'src/app/shared/directives/run-scripts.directive';
import { isMarkdown, isSVG, isPl } from '../../shared/models/filters.model';
import { IResource } from '../../shared/models/resource.model';

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
        this.open(this.editor.resource());
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

    private open(resource: IResource): void {
        this.content = resource.meta.previewData;
        this.isMarkdown = isMarkdown(resource);
        this.isHTML = isSVG(resource);
        this.isURL = isPl(resource);

        this.loading = this.isURL;

        if (this.isHTML && this.scripts) {
            this.scripts.reinsertScripts();
        }
    }

}
