import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Property, AbstractComponent } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'math-input-quill-component',
  templateUrl: './math-input-quill.component.html',
  styleUrls: ['./math-input-quill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MathInputQuillComponent extends AbstractComponent implements OnInit, OnDestroy {
    private math: any;
    private configuration: {};
    private textarea: HTMLElement;

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
            this.math.config(value);
        }
        this.detectChanges();
    }

    get config() {
        return this.configuration || (this.configuration = {});
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
        // Creating textarea for the MathQuill component
        this.textarea = document.createElement("textarea");
        this.textarea.setAttribute("autocorrect", "off");
    }

    ngOnInit(): void {

        let MQ = MathQuill.getInterface(2);
        
        this.math = MQ.MathField(this.container.nativeElement, {
            handlers: {
                edit: () => {
                    this.value = this.math.latex()
                }
            },
            substituteTextarea: () => {
                return this.textarea;
            },
            ...(this.config || {})
        });

        
    }

    ngOnDestroy(): void {
    }

    onRender(): void {
        if (this.disabled) {
            this.textarea.setAttribute("disabled", "disabled");
        }
    }

}

export class MathInputQuillComponentDefinition implements ComponentDefinition {
    component = MathInputQuillComponent;
    name = 'Math Input Quill';
    icon = 'math-input.svg';
    selector = 'c-math-input-quill';
    link = '/components/math-input-quill';
    description = `Math inputs provides a way for users to enter mathematical expressions. This newer version uses MathQuill instead of MathLive. The old one is left for legacy compatibility`;
    usages = [{ label: 'Example', path: 'playground/math-input-quill.pl' }];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the component' },
        { name: 'value', default: '', type: 'string', description: 'The typed text in latex format' },
        { name: 'config', default: '', type: 'MathInputConfig', description: 'Input Configurations' },
    ];
}
