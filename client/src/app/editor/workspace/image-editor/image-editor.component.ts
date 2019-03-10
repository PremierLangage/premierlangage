import { ViewEncapsulation, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ImageEditor } from '../../shared/models/editor.model';
import { isSVG } from '../../shared/models/filters.model';
import { IResource } from '../../shared/models/resource.model';

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
        this.open(this.editor.resource());
        this.openSubscription =  this.editor.onOpened.subscribe(document => {
            this.open(document);
        });
    }

    ngOnDestroy(): void {
        this.openSubscription.unsubscribe();
    }

    private open(resource: IResource) {
        this.svg = resource.content;
        this.url = resource.meta.downloadUrl;
        this.isSVG = isSVG(resource);
    }

}

