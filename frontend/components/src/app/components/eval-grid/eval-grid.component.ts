import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from "@angular/core";
import { MatRadioChange } from "@angular/material";
import { AbstractComponent, Property } from "src/app/shared/models/abstract-component.model";
import { ComponentDefinition } from "src/app/shared/models/definition.model";
import { EvalGridItem } from "src/app/shared/models/eval-grid-item.model";


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'eval-grid-component',
    templateUrl: './eval-grid.component.html',
    styleUrls: ['./eval-grid.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'eval-grid-component'
    }
})
export class EvalGridComponent extends AbstractComponent {

    _items: EvalGridItem[] = [];

    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'items', default: [] }
    ];

    @Input() disabled: boolean;

    @Input()
    set items(value: EvalGridItem[]) {
        this._items = (value || []);
        this._items.forEach(item => item.selected = (item.selected === undefined) ? -1 : item.selected);
    }
    get items() {
        return this._items || (this._items = []);
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    update(event: MatRadioChange, index: number) {
        this._items[index].selected = event.value;
    }

}

export class EvalGridComponentDefinition implements ComponentDefinition {
    component = EvalGridComponent;
    name = 'Eval Grid';
    icon = 'eval-grid.svg';
    link = '/components/eval-grid';
    selector = 'c-eval-grid';
    description = 'Eval grid allow you to present multiple set of exclsive options.';
    usages = [{
        label: 'Exemple', path: 'playground/eval-grid.pl'
    }];
    css?: { selector: string; description: string; }[];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is clickable' },
        { name: 'items', default: [], type: 'EvalGridItem[]', description: '' }
    ];

}
