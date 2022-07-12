import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Property, AbstractComponent } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'math-input-component',
  templateUrl: './math-input.component.html',
  styleUrls: ['./math-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MathInputComponent extends AbstractComponent implements OnInit, OnDestroy {
    private math: any;
    private configuration: {};
    private readonly listeners: (() => void)[] = [];

    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'value', default: '' },
        { name: 'config', default: {} },
    ];

    @ViewChild('container', { static: true })
    container: ElementRef;

    @Input()
    disabled: boolean;

    @Input()
    value: string;

    @Input()
    set config(value: any) {
        this.configuration = value;
        if (this.math) {
            this.math.$setConfig(value);
        }
        this.detectChanges();
    }

    get config() {
        return this.configuration || (this.configuration = {});
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit(): void {
        this.math = MathLive.makeMathField(this.container.nativeElement, {
            onContentDidChange: (field: any) => {
                this.value = field.$latex();
            },
            virtualKeyboardTheme: 'material', // 'material' | 'apple'
            smartFence: false,
            smartSuperscript: true,
            virtualKeyboardMode: 'manual', // 'manual' | 'off' | 'onfocus'
            virtualKeyboards: 'all', // 'all' | 'numeric' | 'roman' | 'greek' | 'functions' | 'command'
            ...(this.config || {})
        });

        const { textarea } = this.math;
        const onBlur = () => this.math.$perform('hideVirtualKeyboard');
        textarea.addEventListener('blur', onBlur, false);
        this.listeners.push(() => {
            textarea.removeEventListener('blur', onBlur, false);
        });

        const element = this.math.$el();
        const toggle: HTMLElement = element.querySelector('.ML__virtual-keyboard-toggle');

        const onFocus = () => textarea.focus();
        toggle.addEventListener('click', onFocus, false);
        this.listeners.push(() => {
            toggle.removeEventListener('click', onFocus, false);
        });
    }

    ngOnDestroy(): void {
        this.listeners.forEach(l => l());
    }

    onRender(): void {
        this.math.$insert(this.value || '', '{format: "latex"}');
    }

}

export class MathInputComponentDefinition implements ComponentDefinition {
    component = MathInputComponent;
    name = 'Math Input';
    icon = 'math-input.svg';
    selector = 'c-math-input';
    link = '/components/math-input';
    description = `Math inputs provides a way for users to enter mathematical expressions.`;
    usages = [{ label: 'Example', path: 'playground/math-input.pl' }];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the component' },
        { name: 'value', default: '', type: 'string', description: 'The typed text in latex format' },
        { name: 'config', default: '', type: 'MathInputConfig', description: 'Input Configurations' },
    ];
}
