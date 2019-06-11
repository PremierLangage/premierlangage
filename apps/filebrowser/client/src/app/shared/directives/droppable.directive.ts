import { AfterContentInit, Directive, ElementRef, EventEmitter, Output, Input } from '@angular/core';

/**
 * Element that can accept a data shared by a `DraggableDirective` element or from the filesystem.
 *
 * - the class `dnd-over` is added to the element when a dragged data hover it.
 */
@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[droppable]'
})
export class DroppableDirective implements AfterContentInit {

    /**  A value indicating whether a data can be dropped to this element */
    @Input('droppable')
    dropCondition = true;

    /** emits after a data is dropped */
    @Output()
    dropped: EventEmitter<DndData> = new EventEmitter();

    public constructor(private el: ElementRef) {
    }

    public ngAfterContentInit() {
        if (!this.dropCondition) {
            return;
        }

        const self = this;
        const node = this.el.nativeElement;
        node.draggable = true;

        const dragover = (e: DragEvent) => {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            node.classList.add('dnd-over');
            return false;
        };
        node.addEventListener('dragover', dragover, false);

        const dragenter = (e: DragEvent) => {
            node.classList.add('dnd-over');
            return false;
        };
        node.addEventListener('dragenter', dragenter, false);

        const dragleave = (e: DragEvent) => {
            node.classList.remove('dnd-over');
            return false;
        };
        node.addEventListener('dragleave', dragleave, false);

        const drop = (e: DragEvent) => {
            e.preventDefault();
            let file: File;
            if (e.dataTransfer.items.length > 0) {
                for (let i = 0; i < e.dataTransfer.items.length; i++) {
                    const item = e.dataTransfer.items[i];
                    if (item.kind === 'file') {
                        file = item.getAsFile();
                    }
                }
            } else if (e.dataTransfer.files.length > 0) {
                file = e.dataTransfer.files[0];
            }

            if (e.stopPropagation) { e.stopPropagation(); }

            node.classList.remove('dnd-over');

            const destination = node.id;
            const source = e.dataTransfer.getData('dnd-data');
            if (source || file) {
                self.dropped.emit({src: source, file: file, dst: destination});
            }
            return false;
        };
        node.addEventListener('drop', drop, false);
    }
}

/** Representation of a data shared with a drag and drop action.  */
export interface DndData {
    /** the id of the source node in the dom */
    src?: string;
    /** the id of the destination node in the dom */
    dst?: string;
    /** the file dragged from the file system  */
    file: File;
}
