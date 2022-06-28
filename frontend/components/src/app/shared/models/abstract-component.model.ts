import { ChangeDetectorRef, Input } from '@angular/core';

export abstract class AbstractComponent {

    /** unique identifier of the component. */
    @Input()
    cid: string;

    /** displays the properties of the component */
    @Input()
    debug: boolean;

    /** html selection of the component */
    @Input()
    selector: string;

    /**
     * state of the component
     */
    @Input()
    css = '';


    /** list of properties to serialize/deserialize. */
    abstract readonly properties: Property[];

    /**
     * JSON representation of the component.
     */
    @Input()
    readonly serialize = () => {
        const object = {};
        this.props().forEach(prop => {
            object[prop.name] = this[prop.name];
            if (object[prop.name] == null && prop.default != null) {
                if (typeof (prop.default) === 'function') {
                    object[prop.name] = prop.default(this);
                } else {
                    object[prop.name] = prop.default;
                }
            }
        });
        this.onValidate(object);
        return object;
    }

    /** Initializes the component from a JSON. */
    @Input()
    readonly deserialize = (object: any) => {
        this.props().forEach(prop => {
            this[prop.name] = object[prop.name] || this[prop.name];
            if (this[prop.name] == null && prop.default != null) {
                if (typeof (prop.default) === 'function') {
                    this[prop.name] = prop.default(this);
                } else {
                    this[prop.name] = prop.default;
                }
            }
        });

        this.onValidate(this);
        this.onRender();
        this.detectChanges();
    }

    /** */
    @Input()
    readonly refresh = () => {
        const components = document.querySelectorAll('[cid]');
        components.forEach((e: any) => {
            e.detectChanges();
        });
        this.checkMath();
    }

    /** Invokes detectChanges of ChangeDetectorRef. */
    @Input()
    readonly detectChanges = () => {
        this.changes.detectChanges();
    }

    constructor(private readonly changes: ChangeDetectorRef) {}


    /** Lifecyle hook called after the component is deserialized. */
    onRender(): void | Promise<void> {
    }

    /**
     * Lifecyle hook called after the component is serialized|deserialized to validate
     * the state of the component.
     */
    onValidate(object: any): void {
    }

    /** Check MathJax on the page. */
    checkMath() {
        setTimeout(() => {
            if ('MathJax' in window) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
            } else {
                console.log('MathJax script is not present on the page');
            }
        } , 100);
    }

    private props() {
       return [
            { name: 'cid', default: '' },
            { name: 'css', default: '' },
            { name: 'debug', default: false },
            { name: 'selector', default: '' },
            ...this.properties,
        ];
    }

}

export interface Property {
    name: string;
    default: any;
}
