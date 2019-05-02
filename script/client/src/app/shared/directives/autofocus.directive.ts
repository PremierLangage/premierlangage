import { AfterContentInit, Directive, ElementRef  } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[autofocus]'
})
export class AutofocusDirective implements AfterContentInit {
    public constructor(private el: ElementRef) {
    }

    public ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 500);
    }

}
