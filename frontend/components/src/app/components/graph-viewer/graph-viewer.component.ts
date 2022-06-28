import { ChangeDetectorRef, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GraphvizDirective } from 'src/app/shared/directives/graphviz.directive';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'graph-viewer-component',
    templateUrl: './graph-viewer.component.html',
    styleUrls: ['./graph-viewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GraphViewerComponent extends AbstractComponent implements OnInit {
    readonly properties: Property[] = [{ name: 'graph', default: '' }];

    @ViewChild(GraphvizDirective, { static: true })
    renderer: GraphvizDirective;

    @Input()
    graph: string;

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit() {
    }

    onRender() {
        this.renderer.render();
    }

}

export class GraphViewerComponentDefinition implements ComponentDefinition {
    component = GraphViewerComponent;
    name = 'Graph Viewer';
    icon = 'graph.svg';
    selector = 'c-graph-drawer | c-graph-viewer';
    description = `Graph drawer prints a non editable graph.`;
    link = '/components/graph-viewer';
    usages = [
        { label: 'Example', path: 'playground/graph-viewer.pl' }
    ];
    properties = [
        {
            name: 'graph',
            default: '',
            type: 'string',
            description: 'A graph in DOT format '
        }
    ];
}
