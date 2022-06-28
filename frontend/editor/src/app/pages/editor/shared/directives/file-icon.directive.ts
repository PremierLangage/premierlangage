import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { IResource } from '../models/resources.model';
import { icon } from '../models/icons.model';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[fileIcon]'
})
export class FileIconDirective implements OnInit {
    private _expanded: boolean;

    @Input('fileIcon')
    resource: IResource;

    @Input()
    set expanded(expanded: boolean) {
        this._expanded = expanded;
        this.updateIcon();
    }

    constructor(
        private readonly el: ElementRef,
    ) {
    }

    ngOnInit(): void {
        this.el.nativeElement.classList.add('resource-icon');
        this.updateIcon();
    }


    private updateIcon(): void {
        const native = this.el.nativeElement as HTMLImageElement;
        native.src = icon(this.resource, this._expanded);
        native.style.width = '16px';
        native.style.height = '16px';
        native.style.marginRight = '4px';
    }

}
