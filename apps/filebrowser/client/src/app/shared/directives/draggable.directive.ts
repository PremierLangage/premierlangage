import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

/**
 * Element that can share a data to a `DroppableDirective` element.
 * - the class `dnd-drag` is added to the element when the element is dragged.
 */
@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[draggable]'
})
export class DraggableDirective implements AfterContentInit {

    /**
     * A value indicating whether the element can share a data or not
     */
    @Input('draggable')
    dragCondition = true;

    /** The data to share with the element */
    @Input()
    dragData: any;

    constructor(private el: ElementRef) {}

    ngAfterContentInit() {
        const node = this.el.nativeElement;
        node.draggable = true;

        const dragstart = (e: DragEvent) => {
            if (!this.dragCondition) {
              e.preventDefault();
              return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('dnd-data', this.dragData);
            node.classList.add('dnd-drag');
            return false;
        };
        node.addEventListener('dragstart', dragstart, false);

        const dragend = (e: DragEvent) => {
            node.classList.remove('dnd-drag');
            return false;
        };
        node.addEventListener('dragend', dragend, false);
    }

}
