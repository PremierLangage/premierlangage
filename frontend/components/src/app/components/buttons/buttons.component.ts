import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import {RadioItem} from "../../shared/models/radio-item.model";
import {AbstractComponent, Property} from "../../shared/models/abstract-component.model";


@Component({
  selector: 'buttons-component',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent extends AbstractComponent {

  readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'horizontal', default: false },
        { name: 'items', default: [] },
        { name: 'type', default: 'text' },
    ];
    @Input()
    type: 'svg' | 'text' | 'multiline' | 'icon' = 'text';

    @Input()
    css: '';


    get items(): RadioItem[] {
        return this.items || (this.items = []);
    }

    @Input()
    set items(value: RadioItem[]) {
        this.items = value || [];
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

  ngOnInit(): void {
  }






}

export class ButtonsComponentDefinition implements ComponentDefinition {
    component = ButtonsComponent;
    name = 'Buttons';
    icon = 'buttons.svg';
    selector = 'c-buttons';
    description = `Provide a fast answer interface. One click answer and validation.`;
    link = '/components/buttons';
    usages = [
        { label: 'Basic', path: 'playground/buttons.pl' },
        { label:'icon', path:  'playground/buttons-icon.pl'}
    ];
    properties = [
         { name: 'appearance', default: 'line', type: '"box" | "line" | "pile"', description: 'Appearance' },
         { name: 'type', default: 'text', type: '"text" | "icon" | "multiline" | "svg"', description: 'The type of the value returned by the component' },
          { name: 'buttons', default: [], type: 'ButtonItem[]', description: 'An array of items (described in <b>Representation</b> section)' },

    ];
}
