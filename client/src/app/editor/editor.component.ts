import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/editor/services/resource.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent {

    constructor(private readonly resources: ResourceService) {}

    @HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
        if (this.resources.findPredicate(e => e.changed)) {
            $event.returnValue = true;
        }
    }
}
