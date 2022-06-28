// tslint:disable: no-inferrable-types
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { Automaton, automatonFromString, emptyAutomaton } from 'src/app/shared/models/automaton.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AskService } from 'src/app/shared/services/ask.service';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';

const INITIAL_STATE = 'automaton-state--initial';
const FINAL_STATE = 'automaton-state--final';
const EPSILON = '$';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'automaton-editor-component',
    templateUrl: './automaton-editor.component.html',
    styleUrls: ['./automaton-editor.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AutomatonEditorComponent extends AbstractComponent
    implements AfterViewInit, OnDestroy {
    /** next node id */
    private nextId = 0;
    /** focused node */
    private node: HTMLElement;
    /** instance of jsPlumb object */
    private instance: jsPlumb.jsPlumbInstance;
    /** focused connection */
    private connection: jsPlumb.Connection;

    readonly properties: Property[] = [
        { name: 'automaton', default: emptyAutomaton() },
        { name: 'editorHeight', default: '300px' }
    ];

    @ViewChild('container', { static: true })
    container: ElementRef;

    /** Edited automaton. */
    @Input()
    automaton = null;

    @Input()
    editorHeight: string = '300px';

    actions = [];

    constructor(changes: ChangeDetectorRef, private readonly ask: AskService) {
        super(changes);
    }

    ngAfterViewInit() {
        jsPlumb.ready(() => {
            const instance = (this.instance = jsPlumb.getInstance({
                Endpoint: ['Dot', { radius: 2 }],
                Connector: 'StateMachine',
                HoverPaintStyle: {
                    stroke: '#1e8151',
                    strokeWidth: 2
                },
                ConnectionOverlays: [
                    [
                        'Arrow',
                        {
                            location: 1,
                            id: 'arrow',
                            length: 14,
                            foldback: 0.8
                        }
                    ],
                    [
                        'Label',
                        {
                            label: 'transition',
                            id: 'transition',
                            cssClass: 'transition'
                        }
                    ]
                ],
                Container: this.container.nativeElement
            }));

            instance.registerConnectionType('basic', {
                anchor: 'Continuous',
                connector: 'StateMachine'
            });

            instance.bind('click', connection => {
                this.focus(null, connection);
            });

            instance.bind('beforeDrop', this.createTransition.bind(this));

            jsPlumb.on(
                this.container.nativeElement,
                'dblclick',
                (e: MouseEvent) => {
                    this.createNode(e.offsetX, e.offsetY);
                }
            );

            this.onRender();
        });
    }

    ngOnDestroy() {
        this.instance.reset();
    }

    onRender(): void {
        this.node = null;
        this.connection = null;
        this.instance.reset(true);
        this.instance.getContainer().innerHTML = '';

        try {
            if (typeof this.automaton === 'string') {
                this.automaton = automatonFromString(this.automaton);
            } else if (!this.automaton) {
                this.automaton = emptyAutomaton();
            }
        } catch (error) {
            console.log(error);
            this.automaton = emptyAutomaton();
        }

        this.nextId = this.automaton.states.length;

        const automaton: Automaton = this.automaton;
        automaton.position = this.automaton.position || {};
        automaton.states = this.automaton.states || [];
        automaton.acceptingStates = this.automaton.acceptingStates || [];
        automaton.initialStates = this.automaton.initialStates || [];
        automaton.transitions = this.automaton.transitions || [];

        this.updateAlphabet();

        this.instance.batch(() => {
            automaton.states.forEach(state => {
                const position = automaton.position[state];
                if (position) {
                    this.createNode(position.x, position.y, state);
                } else {
                    this.createNode(
                        Math.random() * 400,
                        Math.random() * 200,
                        state
                    );
                }
            });

            setTimeout(() => {
                automaton.transitions.forEach(transition => {
                    const connection = this.instance.connect({
                        source: transition.fromState,
                        target: transition.toState,
                        type: 'basic'
                    });
                    connection
                        .getOverlay('transition')
                        .setLabel(transition.symbols.join(','));
                });
            }, 300);
        });
    }

    private createTransition(info: jsPlumb.ConnectionMadeEventInfo) {
        const { sourceId, targetId } = info;
        const exists = this.automaton.transitions.find(conn => {
            return conn.fromState === sourceId && conn.toState === targetId;
        });

        if (!exists) {
            info.connection.getOverlay('transition').setLabel(EPSILON);
            this.automaton.transitions.push({
                fromState: sourceId,
                toState: targetId,
                symbols: [EPSILON]
            });
            this.updateAlphabet();
            return true;
        } else {
            return false;
        }
    }

    private createNode(x: number, y: number, nodeId?: string) {
        const node = document.createElement('div');
        const state = nodeId || `S${this.nextId++}`;

        node.id = state;
        node.className = 'automaton-state';
        node.innerHTML = `${state} <div class="endpoint"></div>`;
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        this.automaton.position[node.id] = { x, y };

        if (!nodeId) {
            if (this.automaton.initialStates.length === 0) {
                node.classList.add(INITIAL_STATE);
                this.automaton.initialStates.push(state);
            }
            this.automaton.states.push(state);
        } else {
            if (this.automaton.initialStates.includes(nodeId)) {
                node.classList.add(INITIAL_STATE);
            }

            if (this.automaton.acceptingStates.includes(nodeId)) {
                node.classList.add(FINAL_STATE);
            }
        }

        jsPlumb.on(node, 'click', () => {
            this.focus(node, null);
        });

        this.instance.getContainer().appendChild(node);

        this.instance.draggable(node, {
            drag: e => {
                this.automaton.position[node.id] = { x: e.pos[0], y: e.pos[1] };
                this.detectChanges();
            }
        });

        this.instance.makeSource(node, {
            filter: '.endpoint',
            anchor: 'Continuous',
            connectorStyle: {
                stroke: '#5c96bc',
                strokeWidth: 2,
                outlineStroke: 'transparent',
                outlineWidth: 4
            },
            connectionType: 'basic',
            maxConnections: -1
        });

        this.instance.makeTarget(node, {
            dropOptions: { hoverClass: 'dragHover' },
            anchor: 'Continuous',
            allowLoopback: true
        });

        this.detectChanges();
    }

    private focus(node?: HTMLElement, connection?: jsPlumb.Connection) {
        this.unfocus();

        this.node = node;
        this.connection = connection;
        const actions = [];

        if (this.node) {
            this.node.classList.remove('focused');
            this.node.classList.add('focused');

            const isInitial = this.node.classList.contains(INITIAL_STATE);
            const isFinal = this.node.classList.contains(FINAL_STATE);

            if (!isInitial) {
                actions.push({
                    name: 'Initial',
                    action: () => {
                        this.node.classList.add(INITIAL_STATE);
                        this.automaton.initialStates.push(this.node.id);
                        this.focus(this.node);
                    }
                });
            }

            if (!isFinal) {
                actions.push({
                    name: 'Final',
                    action: () => {
                        this.node.classList.add(FINAL_STATE);
                        if (
                            !this.automaton.acceptingStates.includes(
                                this.node.id
                            )
                        ) {
                            this.automaton.acceptingStates.push(this.node.id);
                        }
                        this.focus(this.node);
                    }
                });
            }
            if (isInitial || isFinal) {
                actions.push({
                    name: 'Normal',
                    action: () => {
                        this.node.classList.remove(INITIAL_STATE);
                        this.node.classList.remove(FINAL_STATE);
                        this.automaton.acceptingStates = this.automaton.acceptingStates.filter(
                            state => {
                                return state !== this.node.id;
                            }
                        );
                        this.focus(this.node);
                    }
                });
            }

            actions.push({
                name: 'Renommer',
                action: async () => {
                    const title = 'État';
                    const hint = 'Entrez un nouveau nom';
                    let newState = await this.prompt(title, hint, this.node.id);

                    if (newState !== false) {
                        newState = newState.trim();
                        if (this.automaton.states.includes(newState)) {
                            alert('État déjà présent');
                        } else {
                            this.automaton.states = [
                                newState,
                                ...this.automaton.states.filter(state => {
                                    return state !== this.node.id;
                                })
                            ];

                            this.automaton.acceptingStates = this.automaton.acceptingStates.map(
                                state => {
                                    if (state === this.node.id) {
                                        return newState;
                                    }
                                    return state;
                                }
                            );

                            this.automaton.initialStates = this.automaton.initialStates.map(
                                state => {
                                    if (state === this.node.id) {
                                        return newState;
                                    }
                                    return state;
                                }
                            );

                            this.automaton.transitions.forEach(transition => {
                                if (transition.fromState === this.node.id) {
                                    transition.fromState = newState;
                                }
                                if (transition.toState === this.node.id) {
                                    transition.toState = newState;
                                }
                            });
                            this.node.innerHTML = this.node.id = newState;
                        }
                    }
                    this.updateAlphabet();
                    this.detectChanges();
                }
            });

            actions.push({
                name: 'Supprimer',
                action: () => {
                    // remove initial state
                    this.automaton.initialStates = this.automaton.initialStates.filter(
                        state => {
                            return state !== this.node.id;
                        }
                    );

                    // remove acceptingStates
                    this.automaton.acceptingStates = this.automaton.acceptingStates.filter(
                        state => {
                            return state !== this.node.id;
                        }
                    );

                    // remove state
                    this.automaton.states = this.automaton.states.filter(
                        state => {
                            return state !== this.node.id;
                        }
                    );

                    // remove transition
                    this.automaton.transitions = this.automaton.transitions.filter(
                        transition => {
                            return (
                                transition.fromState !== this.node.id &&
                                transition.toState !== this.node.id
                            );
                        }
                    );
                    delete this.automaton.position[node.id];
                    // remove node from the dom
                    this.instance.remove(this.node);
                    this.focus();
                    this.updateAlphabet();
                }
            });
        }

        if (this.connection) {
            const canvas = (connection as any).canvas as HTMLElement;
            canvas.classList.add('focused');
            actions.push({
                name: 'Changer Transition',
                action: async () => {
                    const s = this.connection.endpoints[0];
                    const t = this.connection.endpoints[1];
                    const transition = this.automaton.transitions.find(e => {
                        return (
                            e.fromState === s.elementId &&
                            e.toState === t.elementId
                        );
                    });

                    const title = 'Transition';
                    const hint =
                        'Entrez les symboles en les séparant par une virgule';
                    const input = await this.prompt(
                        title,
                        hint,
                        transition.symbols.join(',')
                    );

                    if (input !== false) {
                        const symbols: string[] = input
                            .split(',')
                            .map((symbol: string) => {
                                return symbol.trim();
                            })
                            .filter((symbol: string) => !!symbol);

                        if (symbols.length === 0) {
                            alert(
                                'Vous devez saisir les symboles en les séparant par une virgule'
                            );
                        } else {
                            this.connection
                                .getOverlay('transition')
                                .setLabel(symbols.join(','));
                            transition.symbols = symbols;
                        }

                        this.updateAlphabet();
                    }
                }
            });

            actions.push({
                name: 'Supprimer Transition',
                action: async () => {
                    const s = this.connection.endpoints[0];
                    const t = this.connection.endpoints[1];
                    this.automaton.transitions = this.automaton.transitions.filter(
                        e => {
                            return !(
                                e.fromState === s.elementId &&
                                e.toState === t.elementId
                            );
                        }
                    );
                    this.instance.deleteConnection(this.connection);
                    this.focus(null, null);
                }
            });
        }

        this.actions = actions;
        this.detectChanges();
    }

    private unfocus() {
        if (this.connection) {
            let canvas: HTMLElement;
            if (this.connection) {
                canvas = (this.connection as any).canvas as HTMLElement;
                canvas.classList.remove('focused');
            }
        }

        if (this.node) {
            this.node.classList.remove('focused');
        }
    }

    private updateAlphabet() {
        this.automaton.alphabet = [];
        this.automaton.transitions.forEach(transition => {
            transition.symbols.forEach(symbol => {
                if (!this.automaton.alphabet.includes(symbol)) {
                    this.automaton.alphabet.push(symbol);
                }
            });
        });
        this.detectChanges();
    }

    private async prompt(title: string, hint: string, val: string) {
        const options = await this.ask.promptAsync({
            title: title,
            okTitle: 'OK',
            noTitle: 'Annuler',
            fields: [
                { type: 'text', placeholder: hint, value: val, required: true }
            ]
        });
        return options ? options.fields[0].value : false;
    }
}

export class AutomatonEditorComponentDefinition implements ComponentDefinition {
    component = AutomatonEditorComponent;
    name = 'Automaton Editor';
    icon = 'automaton.svg';
    selector = 'c-automaton-editor';
    description = `A visual automaton editor with drag & drop capabilities.`;
    link = '/components/automaton-editor';
    usages = [{ label: 'Example', path: 'playground/automaton-editor.pl' }];
    properties = [
        {
            name: 'automaton',
            default: 'An empty automaton',
            type: 'Automaton|string',
            description: 'String or Object representation of the automaton'
        },
        {
            name: 'editorHeight',
            default: '300px',
            type: 'string',
            description: 'Editor height'
        }
    ];
}
