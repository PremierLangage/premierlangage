import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { RadioItem } from 'src/app/shared/models/radio-item.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'radio-group-component',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadioGroupComponent extends AbstractComponent {

   readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'horizontal', default: false },
        { name: 'items', default: [] },
        { name: 'selection', default: '' },
    ];

    _selection: string;
    _items: RadioItem[] = [];

    @Input()
    disabled: boolean;

    @Input()
    horizontal = false;

    get selection(): string {
        return this._selection;
    }

    @Input()
    set selection(value: string) {
        this._selection = value;
    }

    get items(): RadioItem[] {
        return this._items || (this._items = []);
    }

    @Input()
    set items(value: RadioItem[]) {
        this._items = value || [];
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    trackBy(index: number, item: RadioItem) {
        return item.id || index;
    }
}


export class RadioGroupComponentDefinition implements ComponentDefinition {
    component = RadioGroupComponent;
    name = 'Radio Group';
    icon = 'radio-group.svg';
    selector = 'c-radio-group';
    description = `Radio inputs allow you to present a set of exclusive options.`;
    link = '/components/radio-group';
    usages = [{ label: 'Example', path: 'playground/radio-group.pl' }];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is clickable' },
        { name: 'items', default: [], type: 'RadioItem[]', description: 'An array of items (described in <b>Representation</b> section)' },
        { name: 'selection', default: '', type: 'string', description: 'The id of the selected item'  },
        { name: 'horizontal', default: false, type: 'boolean', description: 'A value indicating whether the items should be displayed horizontaly' },
    ];
}
