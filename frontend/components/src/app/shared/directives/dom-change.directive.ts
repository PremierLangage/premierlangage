import { Directive, Output, EventEmitter, ElementRef, OnDestroy, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
  selector: '[domChange]'
})
export class DomChangeDirective implements OnDestroy {
    private changes: MutationObserver;


    @Output()
    domChange = new EventEmitter();

    @Input()
    domAttributes = false;
    @Input()
    domChildList = true;
    @Input()
    domCharacterData = false;

    constructor(private elementRef: ElementRef) {
        const element = this.elementRef.nativeElement;

        this.changes = new MutationObserver((mutations: MutationRecord[]) => {
                mutations.forEach((mutation: MutationRecord) => this.domChange.emit(mutation));
            }
        );

        this.changes.observe(element, {
            attributes: this.domAttributes,
            childList: this.domChildList,
            characterData: this.domCharacterData
        });
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
    }

}
