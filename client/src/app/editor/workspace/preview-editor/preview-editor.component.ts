import { ViewEncapsulation, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageEditor, PreviewEditor } from '../../shared/models/editor.model';
import { IEditorTab } from '../../shared/services/core/opener.service';
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
        this.open(this.editor.data());
        this.openSubscription = this.editor.onOpened.subscribe(data => {
            this.open(data);
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

    private open(data: IEditorTab): void {
        this.content = data.resource.meta.previewData;
        this.isMarkdown = isMarkdown(data.resource);
        this.isHTML = isSVG(data.resource);
        this.isURL = isPl(data.resource);

        this.loading = this.isURL;

        if (this.isHTML && this.scripts) {
            this.scripts.reinsertScripts();
        }
    }

}
