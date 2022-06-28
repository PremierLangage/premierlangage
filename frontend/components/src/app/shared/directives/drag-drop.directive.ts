import { AfterContentInit, Directive, ElementRef, EventEmitter, OnDestroy, Output, Renderer2 } from '@angular/core';

export interface DragDropEvent {
    source: string;
    destination: string;
}

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[dragNdrop]'
})
export class DragDropDirective implements OnDestroy, AfterContentInit {
    private static NODE_ID = 0;
    private readonly events = [];

    readonly id: string;

    @Output()
    dropped: EventEmitter<DragDropEvent> = new EventEmitter();

    public constructor(
        private readonly el: ElementRef,
        private readonly renderer: Renderer2,
    ) {
        this.id = 'dnd-' + ++DragDropDirective.NODE_ID;
    }

    ngAfterContentInit(): void {
        const node: HTMLElement = this.el.nativeElement;
        this.setDraggable(node);
        this.setDroppable(node);
    }

    ngOnDestroy(): void {
        this.events.forEach((e) => e());
    }

    private setDraggable(node: HTMLElement) {
        this.renderer.setAttribute(node, 'id', this.id);
        this.renderer.setProperty(node, 'draggable', true);

        const dragstart = (e: DragEvent) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('dnd-id', node.id);
            this.renderer.addClass(node, 'dnd-drag');
            return false;
        };
        node.addEventListener('dragstart', dragstart, false);
        const dragend = (_: DragEvent) => {
            this.renderer.removeClass(node, 'dnd-drag');
            return false;
        };
        node.addEventListener('dragend', dragend, false);
    }

    private setDroppable(node: HTMLElement) {
        const dragover = (e: DragEvent) => {
            e.dataTransfer.dropEffect = 'move';
            if (e.preventDefault) {
                e.preventDefault();
            }
            this.renderer.addClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragover', dragover);

        const dragenter = (_: DragEvent) => {
            this.renderer.removeClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragenter', dragenter);

        const dragleave = (_: DragEvent) => {
            this.renderer.removeClass(node, 'dnd-over');
            return false;
        };
        this.addListener(node, 'dragleave', dragleave);

        const drop = (e: DragEvent) => {
            e.preventDefault();
            this.renderer.removeClass(node, 'dnd-over');
            const dndId = e.dataTransfer.getData('dnd-id');
            if (dndId) {
                this.dropped.emit({
                    source: dndId,
                    destination: this.id,
                });
            }
            return false;
        };
        this.addListener(node, 'drop', drop);
    }

    private addListener(node: any, event: string, handler: any) {
        this.renderer.listen(node, event, handler);
        this.events.push(() => {
            node.removeEventListener(event, handler, false);
        });
    }
}

