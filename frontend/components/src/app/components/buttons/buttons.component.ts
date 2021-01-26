import { Component, OnInit } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class ButtonsComponentDefinition implements ComponentDefinition {
    component = ButtonsComponent;
    name = 'Buttons';
    icon = 'input.svg';
    selector = 'c-buttons';
    description = `Provide a fast answer interface. One click answer and validation.`;
    link = '/components/buttons';
    usages = [
        { label: 'Basic', path: 'playground/buttons.pl' },
        { label: 'Autocompletion', path: 'playground/buttons-autocomplete.pl' },
    ];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the input is disabled or not' },
        { name: 'maxlength', default: 0, type: 'number', description: 'The maximum number of characters allowed (0 for infinite) only for type = "text" | "multiline"' },
        { name: 'type', default: 'text', type: '"text" | "number" | "multiline"', description: 'The type of the value returned by the component' },
        { name: 'appearance', default: 'outline', type: '"legacy" | "standard" | "fill" | "outline"', description: 'Appearance' },
        { name: 'value', default: null, type: 'string', description: 'The value of the input box' },
        { name: 'width', default: '100%', type: 'string', description: 'The width of the input box in css units (%, px, rem...)' },
        { name: 'placeholder', default: '', type: 'string', description: 'Text for the input placeholder' },
        { name: 'autocomplete', default: [], type: 'string[]', description: 'Autocompletion source' },

    ];
}
