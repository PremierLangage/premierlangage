import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GraphvizDirective } from 'src/app/shared/directives/graphviz.directive';
import { automatonFromString, automatonToDotFormat } from 'src/app/shared/models/automaton.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'automaton-viewer-component',
    templateUrl: './automaton-viewer.component.html',
    styleUrls: ['./automaton-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AutomatonViewerComponent extends AbstractComponent implements OnInit {

    readonly properties: Property[] = [{ name: 'automaton', default: null }];

    @ViewChild(GraphvizDirective, { static: true })
    renderer: GraphvizDirective;

    @Input()
    automaton: string;

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit() {
        this.onRender();
    }

    onRender() {
        let i = 0;
        try {
            this.renderer.graph = automatonToDotFormat(
                automatonFromString(this.automaton)
            );
            this.renderer.render();
        } catch {
            i++;
            if (i < 5) {
                setTimeout(this.onRender.bind(this), 300);
            }
        }
    }
}

export class AutomatonViewerComponentDefinition implements ComponentDefinition {
    component = AutomatonViewerComponent;
    name = 'Automaton Viewer';
    icon = 'automaton.svg';
    selector = 'c-automaton-drawer | c-automaton-viewer';
    description = `Print a non editable automaton.`;
    link = '/components/automaton-viewer';
    usages = [
        { label: 'Example', path: 'playground/automaton-viewer.pl' }
    ];
    properties = [
        {
            name: 'automaton',
            default: null,
            type: 'string',
            description: 'Visual or Object notation of the automaton'
        }
    ];
}
