import { Component, OnInit, Input, ViewEncapsulation, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Property, AbstractComponent } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

declare let MathQuill: any;

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
    }

    get config() {
        return this.configuration || (this.configuration = {});
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit(): void {
        let MQ = MathQuill.getInterface(2);
        
        this.math = MQ.MathField(this.container.nativeElement, {
            handlers: {
                edit: () => {
                    this.value = this.math.latex()
                }
            },
            charsThatBreakOutOfSupSub: '+-=<>',
            autoCommands: 'pi theta sqrt sum infty infin emptyset',
            autoOperatorNames: 'sin cos tan ln exp cup cap',
            ...(this.config || {})
        });
    }

    ngOnDestroy(): void {
    }

    onRender(): void {
    }

}

export class MathInputQuillComponentDefinition implements ComponentDefinition {
    component = MathInputQuillComponent;
    name = 'Math Input Quill';
    icon = 'math-input.svg';
    selector = 'c-math-input-quill';
    link = '/components/math-input-quill';
    description = `Math inputs provides a way for users to enter mathematical expressions. This version uses MathQuill instead of MathLive.`;
    usages = [{ label: 'Example', path: 'playground/math-input.pl' }];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'disabled state of the component' },
        { name: 'value', default: '', type: 'string', description: 'The typed text in latex format' },
        { name: 'config', default: '', type: 'MathInputConfig', description: 'Input Configurations' },
    ];
}
