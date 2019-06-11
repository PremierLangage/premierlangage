import { AfterContentInit, Directive, ElementRef  } from '@angular/core';

/**
 * Input element that can be autofocused.
 */
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'input[autofocus]'
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
