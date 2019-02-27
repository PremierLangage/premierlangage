import { ViewEncapsulation, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ImageEditor } from '../../shared/models/editor.model';
import { IEditorDocument } from '../../shared/services/core/opener.service';
import { isSVG } from '../../shared/models/filters.model';
import { Subscription } from 'rxjs';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.scss'],
  })
export class ImageEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: ImageEditor;
    svg: string;
    url: string;
    isSVG: boolean;

    private openSubscription: Subscription;

    constructor() {}

    ngOnInit() {
        this.open(this.editor.document());
        this.openSubscription =  this.editor.onOpened.subscribe(document => {
            this.open(document);
        });
    }

    ngOnDestroy(): void {
        this.openSubscription.unsubscribe();
    }

    private open(document: IEditorDocument) {
        this.svg = document.resource.content;
        this.url = document.resource.meta.downloadUrl;
        this.isSVG = isSVG(document.resource);
        console.log(document.resource);
    }

}

