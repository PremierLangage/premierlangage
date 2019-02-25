import { ViewEncapsulation, Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageEditor } from '../../shared/models/editor.model';
import { IEditorTab } from '../../shared/services/core/opener.service';
import { Subscription } from 'rxjs';
import { RunScriptsDirective } from 'src/app/shared/directives/run-scripts.directive';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'preview-editor',
    templateUrl: './preview-editor.component.html',
    styleUrls: ['./preview-editor.component.scss'],
})
export class PreviewEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: ImageEditor;
    @ViewChild(RunScriptsDirective)
    scripts: RunScriptsDirective;

    private html: string;
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

    private open(data: IEditorTab): void {
        this.html = data.resource.meta.html;
        if (this.scripts) {
            this.scripts.reinsertScripts();
        }
    }

}
