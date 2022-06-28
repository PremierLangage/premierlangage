import { Component, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

import { ListItem } from 'src/app/shared/models/list-item.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

/**
 * Renders a reorderable list of data.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sort-list-component',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortListComponent extends AbstractComponent {

    readonly properties: Property[] = [
        { name: 'items', default: [] },
        { name: 'disabled', default: false },
    ];

    /**
     * A list of data to render.
     */
    @Input()
    items: ListItem[] = [];

    /**
     * Disables interactions with the component if sets to true.
     */
    @Input()
    disabled: boolean;

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    drop(event: CdkDragDrop<ListItem[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        this.checkMath();
    }

    trackBy(index: number, _: any) {
        return index;
    }

}


export class SortListComponentDefinition implements ComponentDefinition {
    component = SortListComponent;
    name = 'Sort List';
    icon = 'sort-list.svg';
    selector = 'c-sort-list';
    description = `Sort list lets users drag and drop to reorder a list of items.`;
    link = '/components/sort-list';
    usages = [{ label: 'Example', path: 'playground/sort-list.pl' }];
    properties = [
        { name: 'items', default: [], type: 'SortItem[]', description: '' }
    ];
}
