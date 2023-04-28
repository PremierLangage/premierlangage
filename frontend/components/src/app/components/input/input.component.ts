import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent extends AbstractComponent {

    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'value', default: '' },
        { name: 'autocomplete', default: [] },
        { name: 'type', default: 'text' },
        { name: 'width', default: '100%' },
        { name: 'appearance', default: 'outline' },
        { name: 'maxlength', default: 0 },
        { name: 'placeholder', default: '' },
    ];

    readonly form = new FormControl();
    readonly $autocomplete: Observable<string[]> = this.form
        .valueChanges
        .pipe(
            startWith(''),
            map(value => {
                this.value = value;
                return this.filter(value);
            })
        );

    @Input()
    value = '';

    @Input()
    disabled = false;

    @Input()
    maxlength = 0;

    @Input()
    placeholder = '';

    @Input()
    appearance: 'legacy' | 'standard' | 'fill' | 'outline' = 'outline';

    @Input()
    type: 'number' | 'text' | 'multiline' = 'text';

    @Input()
    width = '100%';

    @Input()
    autocomplete = [];


    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    onRender() {
        this.form.setValue(this.value);
        this.form.enable();
        if (this.disabled) {
            this.form.disable();
        }
    }

    onValidate(data: any) {
        if (data.value == null || data.value.toString().trim() === '') {
            data.value = this.type === 'number' ? 0 : '';
        } else if (data.value && this.type === 'number') {
            data.value = Number.parseFloat(data.value.toString().replace(',', '.'));
        }
    }

    private filter(value: string): string[] {
        if (!value || this.type === 'number') {
            return [];
        }

        const convert = (v: string) => {
            return v
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
        };

        value = convert(value);

        return this.autocomplete.filter(option => {
            return convert(option).includes(value);
        });
    }
}

export class InputComponentDefinition implements ComponentDefinition {
    component = InputComponent;
    name = 'Input';
    icon = 'input.svg';
    selector = 'c-input';
    description = `Inputs provides a way for users to enter a data.`;
    link = '/components/input';
    usages = [
        { label: 'Basic', path: 'playground/input.pl' },
        { label: 'Autocompletion', path: 'playground/input-autocomplete.pl' },
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
