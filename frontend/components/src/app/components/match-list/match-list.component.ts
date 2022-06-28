import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';


/**
 * Renders lines between dom elements.
 */
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'match-list-component',
    templateUrl: './match-list.component.html',
    styleUrls: ['./match-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MatchListComponent extends AbstractComponent implements OnInit, OnDestroy {

    private _nodes: MatchListItem[];
    private _links: Link[];
    private instance: jsPlumb.jsPlumbInstance;

    readonly properties: Property[] = [
        {  name: 'disabled', default: false },
        {  name: 'nodes', default: [] },
        {  name: 'links', default: [] },
    ];

    @ViewChild('container', { static: true })
    container: ElementRef;

    /**
     * A value indicating whether the component is disabled or not.
     */
    @Input()
    disabled: boolean;

    /**
     * Gets the dom nodes to render.
     */
    get nodes(): MatchListItem[] {
        return this._nodes || (this._nodes = []);
    }

    /**
     * Sets the dom nodes to render.
     */
    @Input()
    set nodes(value: MatchListItem[]) {
        this._nodes = value || [];
    }

    /**
     * Gets the links between the nodes.
     */
    get links(): Link[] {
        return this._links || (this._links = []);
    }

    /**
     * Sets the links between the nodes.
     */
    @Input()
    set links(value: Link[]) {
        this._links = value || [];
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit(): void {
        this.instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'pointer', zIndex: 2000 },
            Container: this.container.nativeElement,
            ConnectionsDetachable: false,
            Endpoint: [ 'Dot', { radius: 6 } ],
        });

        this.instance.bind('ready', () => {
            this.instance.bind('endpointClick', (point) => {
                (point.connections || []).forEach(conn => {
                    this.disconnect(conn);
                });
            });

            this.instance.bind('beforeDrop', (info) => {
                const source = this.nodes.find(p => p.id === info.sourceId);
                const target = this.nodes.find(p => p.id === info.targetId);

                if (!target.multiple && this.exists(target)) {
                    return false;
                }

                if (!source.multiple && this.exists(source)) {
                    return false;
                }

                this.links.push(this.connect(source, target));
                return true;
            });

            this.onRender();
        });
    }

    ngOnDestroy(): void {
        this.instance.unbind('endpointClick');
        this.instance.unbind('beforeDrop');
    }

    onRender(): void {
        this.instance.batch(() => {
            this.instance.deleteEveryEndpoint();
            setTimeout(() => this.renderNodes(), 300);
            setTimeout(() => this.renderLinks(), 600);
        });
    }

    private exists(node: MatchListItem): boolean {
        return !!this.links.find(conn => {
            return conn.source === node.id || conn.target === node.id;
        });
    }

    private connect(source: MatchListItem, target: MatchListItem): Link {
        return {
            source: source.id,
            target: target.id,
        };
    }

    private disconnect(connection: jsPlumb.Connection) {
        this.links = this.links.filter(conn => {
            const a = conn.source !== connection.endpoints[0].elementId;
            const b = conn.target !== connection.endpoints[1].elementId;
            return a && b;
        });
        this.instance.deleteConnection(connection);
    }

    private renderNodes(): void {
        this.nodes.forEach(node => {
            this.instance.addEndpoint(node.id, {
                id: node.id,
                isSource: !!node.source,
                isTarget: !!node.target,
                anchor: !!node.source ? 'Right' : 'Left',
                maxConnections: -1,
                connector: 'StateMachine',
                cssClass: !!node.target ? 'endpoint-source' : 'endpoint-target',
                radius: 2,
                connectorOverlays: [
                    ['Arrow', { width: 10, length: 10, location: .98, id: 'arrow' }],
                ],
            });
        });
    }

    private renderLinks(): void {
        this.links.forEach(link => {
            this.instance.connect({
                source: link.source,
                target: link.target,
                connector: 'StateMachine',
                overlays: [
                    ['Arrow', { width: 10, length: 10, location: .98, id: 'arrow' }],
                ],
                anchors: ['Right', 'Left'],
                cssClass: link.css,
            });
        });
    }

}

export interface MatchListItem {
    id: string;
    target: boolean;
    source: boolean;
    content: string;
    multiple?: boolean;
    css?: string;
}

export interface Link {
    source: string;
    target: string;
    css?: string;
}


export class MatchListComponentDefinition implements ComponentDefinition {
    component = MatchListComponent;
    name = 'Match List';
    icon = 'match-list.svg';
    selector = 'c-match-list';
    description = `Match list lets users connect items between two lists`;
    link = '/components/match-list';
    usages = [{ label: 'Example', path: 'playground/match-list.pl' }];
    properties = [
        {  name: 'disabled', default: false, type: 'boolean', description: 'A value indicating the disabled state of the component'  },
        {  name: 'nodes', default: [], type: 'MatchListItem[]', description: 'The items to connect'  },
        {  name: 'links', default: [], type: 'MatchListLink[]', description: 'The links between the items'  },
    ];
}
