import { AfterContentInit, Directive, ElementRef, EventEmitter, Output, Input } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[droppable]'
})
export class DroppableDirective implements AfterContentInit {
    @Input()
    dropCondition = true;
    @Output()
    handDrop: EventEmitter<DropData> = new EventEmitter();

    public constructor(private el: ElementRef) {
    }

    public ngAfterContentInit() {
        if (!this.dropCondition) {
            return;
        }

        const self = this;
        const el = this.el.nativeElement;
        el.draggable = true;

        el.addEventListener('dragover', function(e: DragEvent) {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) { e.preventDefault(); }
            this.classList.add('dnd-over');
            return false;
        }, false);

        el.addEventListener('dragenter', function(e: DragEvent) {
            this.classList.add('dnd-over');
            return false;
        }, false);

        el.addEventListener('dragleave', function(e: DragEvent) {
            this.classList.remove('dnd-over');
            return false;
        }, false);

        el.addEventListener('drop', function(e: DragEvent) {
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

            this.classList.remove('dnd-over');

            const destination = this.id;
            const source = e.dataTransfer.getData('Text');
            if (source || file) {
                self.handDrop.emit({src: source, file: file, dst: destination});
            }
            return false;
        }, false);
      }
}

/** Representation of a data shared with a drag and drop action.  */
export interface DropData {
    /** the id of the source node in the dom */
    src?: string;
    /** the id of the destination node in the dom */
    dst?: string;
    /** the file dragged from the file system  */
    file: File;
}
