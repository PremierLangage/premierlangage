import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

declare const JXG: any;

/**
 * Renders dynamic mathematics geometric objects
 */
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'jsxgraph-component',
    templateUrl: './jsxgraph.component.html',
    styleUrls: ['./jsxgraph.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class JSXGraphComponent extends AbstractComponent
    implements OnInit, OnDestroy {
    private static NEXT_ID = 0;
    readonly properties: Property[] = [
        { name: 'disabled', default: false },
        { name: 'attributes', default: null },
        { name: 'script', default: null },
        { name: 'points', default: {} }
    ];

    id: string;

    /**
     * A value indicating whether the component is disabled or not.
     */
    @Input()
    disabled: boolean;

    @Input()
    board: any;

    /**
     * the points drawed inside the box.
     */
    @Input()
    points: { [k: string]: Point } = {};

    @Input()
    script: any;

    @Input()
    attributes: any;

    constructor(changes: ChangeDetectorRef) {
        super(changes);
        this.id = 'graph_' + ++JSXGraphComponent.NEXT_ID;
    }

    ngOnInit() {}

    ngOnDestroy(): void {
        this.freeBoard();
    }

    onRender(): void {
        this.initBoard();

        if (this.board.objectsList) {
            this.board.objectsList.forEach((object: any) => {
                if (
                    JXG.isPoint(object) &&
                    object.name &&
                    !(object.name in this.points)
                ) {
                    this.points[object.name] = {
                        x: object.X(),
                        y: object.Y()
                    };
                }
            });
        }

        Object.keys(this.points).forEach(name => {
            const object = this.board.objectsList.find((o: any) => {
                return JXG.isPoint(o) && o.name === name;
            });

            if (object) {
                const point = this.points[name];
                const array = [point.x, point.y];
                object.setPosition(JXG.COORDS_BY_USER, array);
            }
        });

        this.board.fullUpdate();

        if (this.disabled) {
            this.board.removeEventHandlers();
        }
        this.board.on('update', this.updatePoints.bind(this));
    }

    private initBoard() {
        JXG.Options = JXG.merge(JXG.Options, {
            board: {
                showCopyright: false,
                keepAspectRatio: true
            },
            elements: {
                highlight: false,
                showInfobox: false
            },
            point: {
                showInfobox: false
            }
        });

        this.freeBoard();

        this.attributes = {
            boundingbox: [-10, 10, 10, -10],
            axis: true,
            ...(this.attributes || {})
        };

        this.board = JXG.JSXGraph.initBoard(this.id, this.attributes);
        if (this.script) {
            const code = decodeURIComponent(this.script);
            const exec = new Function('board', code);
            exec(this.board);
        }

        this.points = this.points || {};

        const w = window as any;
        if (w.onMathDrawerReady) {
            w.onMathDrawerReady(this);
        }

        this.detectChanges();
    }

    private freeBoard() {
        if (this.board) {
            JXG.JSXGraph.freeBoard(this.board);
        }
    }

    private updatePoints(): void {
        if (this.board.objectsList) {
            for (const o of this.board.objectsList) {
                if (JXG.isPoint(o) && o.name) {
                    this.points[o.name] = {
                        x: o.X(),
                        y: o.Y()
                    };
                }
            }
        }
        this.detectChanges();
    }
}

export interface Point {
    x: number;
    y: number;
}

export class JSXGraphComponentDefinition implements ComponentDefinition {
    component = JSXGraphComponent;
    name = 'JSX Graph';
    icon = 'jsxgraph.svg';
    selector = 'c-math-drawer | c-jsxgraph'; // TODO (will be renamed to c-jsxgraph soon)
    description = `JSXGraph lib wrapper.`;
    link = '/components/jsxgraph';
    usages = [
        { label: 'Example', path: 'playground/jsxgraph.pl' }
    ];
    properties = [
        {
            name: 'disabled',
            default: false,
            type: 'boolean',
            description: 'disabled state of the component'
        },
        {
            name: 'attributes',
            default: null,
            type: 'BoardAttributes',
            description: 'the attributes of the board'
        },
        {
            name: 'script',
            default: null,
            type: 'string',
            description: 'javascript script to draw objects inside the board'
        },
        {
            name: 'points',
            default: {},
            type: 'Dict<string, Point>',
            description:
                'A dictionnary of the points where keys are the name of the points and value the position of the points'
        }
    ];
}
