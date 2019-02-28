import { ViewEncapsulation, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { WebEditor } from '../../shared/models/editor.model';
import { IEditorDocument } from '../../shared/services/core/opener.service';
import { Subscription } from 'rxjs';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'web-editor',
    templateUrl: './web-editor.component.html',
    styleUrls: ['./web-editor.component.scss'],
})
export class WebEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: WebEditor;
    content: string;

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

    private open(document: IEditorDocument): void {
        this.content = document.resource.meta.previewData;
    }

}
