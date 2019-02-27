import { ViewEncapsulation, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ImageEditor } from '../../shared/models/editor.model';
import { IEditorTab } from '../../shared/services/core/opener.service';
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
        this.open(this.editor.data());
        this.openSubscription =  this.editor.onOpened.subscribe(data => {
            this.open(data);
        });
    }

    ngOnDestroy(): void {
        this.openSubscription.unsubscribe();
    }

    private open(data: IEditorTab) {
        this.svg = data.resource.content;
        this.url = data.resource.meta.downloadUrl;
        this.isSVG = isSVG(data.resource);
        console.log(data.resource);
    }

}

