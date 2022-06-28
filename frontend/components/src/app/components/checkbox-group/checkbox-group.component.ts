// tslint:disable: no-inferrable-types
// tslint:disable: max-line-length
import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { CheckboxItem } from 'src/app/shared/models/checkbox-item.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

/** Renders a group of checkbox items. */
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'checkbox-group-component',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CheckboxGroupComponent extends AbstractComponent {
    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'horizontal', default: false },
        { name: 'items', default: [] }
    ];

    private _items: CheckboxItem[] = [];

    @Input()
    disabled = false;

    @Input()
    horizontal = false;

    get items(): CheckboxItem[] {
        return this._items || (this._items = []);
    }

    @Input()
    set items(value: CheckboxItem[]) {
        this._items = value || [];
        this._items.forEach(item => {
            item.checked = item.checked || false;
        });
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    onDidCheckboxChange(event: Event, item: CheckboxItem) {
        event.preventDefault();
        event.stopPropagation();
        item.checked = !item.checked;
        this.detectChanges();
    }

    trackBy(index: number, item: CheckboxItem) {
        return item.id || index;
    }
}

export class CheckboxGroupComponentDefinition implements ComponentDefinition {
    component = CheckboxGroupComponent;
    name = 'Checkbox Group';
    icon = 'checkbox-group.svg';
    selector = 'c-checkbox-group';
    link = '/components/checkbox-group';
    description = `Checkboxs can be used to let the user know they need to make a binary decision`;
    usages = [{ label: 'Example', path: 'playground/checkbox-group.pl' }];
    properties = [
        {
            name: 'disabled',
            default: false,
            type: 'boolean',
            description: 'A value indicating whether the component is clickable'
        },
        {
            name: 'horizontal',
            default: false,
            type: 'boolean',
            description:
                'A value indicating whether the items should be displayed horizontaly'
        },
        {
            name: 'items',
            default: [],
            type: 'CheckboxItem[]',
            description:
                'An array of items (described in <b>Representation</b> section)'
        }
    ];
}
