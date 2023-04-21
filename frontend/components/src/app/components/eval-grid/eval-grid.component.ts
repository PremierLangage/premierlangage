import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { AbstractComponent, Property } from "src/app/shared/models/abstract-component.model";
import { ComponentDefinition } from "src/app/shared/models/definition.model";


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'eval-grid-component',
    templateUrl: './eval-grid.component.html',
    styleUrls: ['./eval-grid.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EvalGridComponent extends AbstractComponent implements OnInit {

    readonly properties: Property[] = [
        { name: 'disabled', default: false }
    ];

    @Input() disabled: boolean;

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit(): void {

    }

}

export class EvalGridComponentDefinition implements ComponentDefinition {
    component = EvalGridComponent;
    name = 'Eval Grid';
    icon = 'eval-grid.svg';
    link = '/components/eval-grid';
    selector = 'c-eval-grid';
    description = 'Evaluation grid';
    usages = [{
        label: 'Exemple', path: 'playground/eval-grid.pl'
    }];
    css?: { selector: string; description: string; }[];
    properties = [
        { name: 'disabled', default: false, type: 'boolean', description: 'A value indicating whether the component is clickable' },
    ];

}
