import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'next-prev',
    templateUrl: './next-prev.component.html',
    styleUrls: ['./next-prev.component.scss']
})
export class NextPrevComponent {

    @Input()
    prevLink: string;

    @Input()
    nextLink: string;
}
