import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PreviewEditor } from '../../shared/models/editors.model';
import { Subscription } from 'rxjs';
import { RunScriptsDirective } from 'src/app/shared/directives/run-scripts.directive';
import { isMarkdown, isSVG, isPL } from '../../shared/models/filters.model';
import { IResource } from '../../shared/models/resources.model';
import { NotificationService } from 'src/app/core/notification.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'preview-editor',
    templateUrl: './preview-editor.component.html',
    styleUrls: ['./preview-editor.component.scss'],
})
export class PreviewEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: PreviewEditor;
    @ViewChild(RunScriptsDirective, { static: true })
    scripts: RunScriptsDirective;

    private counter: number;
    content: string;
    isMarkdown: boolean;
    isURL: boolean;
    isHTML: boolean;
    loading: boolean;

    private openSubscription: Subscription;

    constructor(
        private readonly notification : NotificationService,
    ) { }

    ngOnInit() {
        let browserInfo = navigator.userAgent;
        let browser : string;
        if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
            browser = 'Opera';
        } else if (browserInfo.includes('Edg')) {
            browser = 'Edge';
        } else if (browserInfo.includes('Chrome')) {
            browser = 'Chrome';
        } else if (browserInfo.includes('Safari')) {
            browser = 'Safari';
        } else if (browserInfo.includes('Firefox')) {
            browser = 'Firefox'
        } else {
            browser = 'unknown'
        }
        
        if (browser === 'Firefox') {
            this.notification.warning('Attention, la fonction de prévisualisation est instable sur Firefox. Veuillez utiliser un autre navigateur.');
        }
        this.open(this.editor.resource);
        this.openSubscription = this.editor.onDidOpen.subscribe(e => {
            this.open(e.resource);
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
        this.isURL = isPL(resource);

        this.loading = this.isURL;

        if (this.isHTML && this.scripts) {
            this.scripts.runScripts();
        }
    }

}
