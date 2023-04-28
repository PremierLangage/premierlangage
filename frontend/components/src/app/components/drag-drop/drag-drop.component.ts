import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DragDropDirective, DragDropEvent } from 'src/app/shared/directives/drag-drop.directive';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { DragDropService } from 'src/app/shared/services/drag-drop.service';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'drag-drop-component',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropComponent extends AbstractComponent implements OnInit, OnDestroy {

    readonly properties: Property[] = [
        { name: 'content', default: '' },
        { name: 'droppedId', default: '' },
        { name: 'disabled', default: false },
        { name: 'droppable', default: false },
    ];

    @ViewChild(DragDropDirective, { static: true })
    private directive: DragDropDirective;

    @Input()
    content = '';

    @Input()
    droppedId: string;

    @Input()
    disabled: boolean;

    @Input()
    droppable: boolean;


    constructor(
        changes: ChangeDetectorRef,
        private readonly dragdrop: DragDropService
    ) {
        super(changes);
    }

    ngOnInit(): void {
        this.dragdrop.register(this.directive.id, this);
    }

    ngOnDestroy(): void {
        if (this.directive) {
            this.dragdrop.unregister(this.directive.id);
        }
    }

    dropped(event: DragDropEvent): void {
        const { source, destination } = event;
        if (source !== destination) {
            const src = this.dragdrop.get(source) as DragDropComponent;
            const dst = this.dragdrop.get(destination) as DragDropComponent;
            if (!dst.droppable) {
                if (src.droppedId === dst.cid) {
                    src.droppedId = src.content = '';
                }
                return;
            }
            if (src.droppable && src.droppedId && dst.droppedId) {
                const content = src.content;
                src.content = dst.content;
                dst.content = content;

                const droppedId = src.droppedId;
                src.droppedId = dst.droppedId;
                dst.droppedId = droppedId;
            } else {
                dst.content = src.content;
                dst.droppedId = src.cid;
            }

            this.checkMath();

        }
    }

}

export class DragDropComponentDefinition implements ComponentDefinition {
    component = DragDropComponent;
    name = 'Drag & Drop';
    icon = 'drag-drop.svg';
    selector = 'c-drag-drop';
    description = `Drag & Drop lets users to drag and drop items between multiple sources and targets`;
    link = '/components/drag-drop';
    usages = [{ label: 'Example', path: 'playground/drag-drop.pl' }];
    properties = [
        { name: 'content', default: '', type: 'string', description: 'The HTML, markdown, Mathjax or text content of the component'  },
        { name: 'droppedId', default: '', type: 'string', description: 'The cid of the dropped component'  },
        { name: 'disabled', default: false , type: 'boolean', description: 'A value indicating whether the component is disabled' },
        { name: 'droppable', default: false, type: 'boolean', description: 'A value indicating whether the component is a drop zone'  },
    ];
}
