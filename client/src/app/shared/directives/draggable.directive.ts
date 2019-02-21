import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[draggable]'
})
export class DraggableDirective implements AfterContentInit {
    @Input()
    dragCondition = true;

    public constructor(private el: ElementRef) {
    }

    public ngAfterContentInit() {
        const self = this;
        const el = this.el.nativeElement;
        el.draggable = true;

        el.addEventListener(
          'dragstart',
          function(e) {
            if (!self.dragCondition) {
              e.preventDefault();
              return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('dnd-drag');
            return false;
          },
          false
        );

        el.addEventListener(
          'dragend',
          function(e) {
            this.classList.remove('dnd-drag');
            return false;
          },
          false
        );
    }
}
