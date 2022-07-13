declare module MathLive {
    export function makeMathField(id: string | HTMLElement, options?: any): any;
}

declare module MathQuill {
    export function getInterface(id: number): any;
}

declare module noam {

    export const fsm: {
        dfaType: string;
        nfaType: string;
        enfaType: string;

        /**
         * Adds stateObj as a state to the fsm.
         * Throws an Error if no stateObj is passed or if the same state already exists.
         * @param fsm
         * @param stateObj
         * @returns the added state object.
         */
        addState(fsm: Fsm, stateObj: any): any;

        /**
         * Adds symObj as an alphabet symbol to the fsm.
         * Throws an Error if no symObj is passed or if the same symbol already exists.
         * @param fsm
         * @param symObj
         * @returns the added symbol object.
         */
        addSymbol(fsm: Fsm, symObj: any): any;

        /**
         * Makes stateObj an accepting state of the fsm.
         * Throws an Error if stateObj is not a state of the fsm or if it is already
         * accepting.
         */
        addAcceptingState(fsm: Fsm, stateObj: any): any;

        /**
         * Sets stateObj as the start state of the fsm.
         * Throws an Error if stateObj is not a state of the fsm.
         * @param fsm
         * @param stateObj
         */
        setInitialState(fsm: Fsm, stateObj: string): any;

        /** determine if stateObj is an accepting state in fsm */
        isAcceptingState(fsm: string, stateObj: any): boolean;

        /**
         * Adds a transition from fromState to the set of states represented by the array
         * toStates, using transitionSymbol.
         * If a transition for this pair of (fromState, transitionSymbol) already exists,
         * toStates is added to the existing set of destination states.
         * Throws an Error if any of the states is not actually in the fsm or if the
         * transition symbol is not in the fsm's alphabeth.
         * Note that this means that an Error will be thrown if you try to use this to
         * specify an epsilon transition. For that, use addEpsilonTransition instead.
         */
        addTransition(fsm: Fsm, fromState: string, toStates: string[], transitionSymbol: string): any;

        /**
         * Equivalent to addTransition except that there is no transition symbol, i.e. the
         * transition can be executed without consuming an input symbol.
         * @param fsm
         * @param fromState
         * @param toStates
         */
        addEpsilonTransition(fsm: Fsm, fromState: string, toStates: string[]): any;


        /** validates a FSM definition */
        validate(fsm: Fsm): boolean;

        /** determine fsm type based on transition function */
        determineType(fsm: Fsm): 'NFA' | 'DFA' | 'eNFA';

        /** computes epsilon closure of fsm from states array states */
        computeEpsilonClosure(fsm: Fsm, states: string[]): string[];

        /** determines the target states from reading symbol at states array states */
        makeSimpleTransition(fsm: Fsm, states: string[], symbol: string): string[];

        /*
         * makes transition from states array states and for input symbol symbol by:
         *   a) computing the epsilon closure of states
         *   b) making a simple transition from resulting states of a)
         *   c) computing the epsilon closure of resulting states of b)
         */
        makeTransition(fsm: Fsm, states: string[], symbol: string): string[];

        /** read a stream of input symbols and determine target states */
        readString(fsm: Fsm, inputSymbolStream: string): string[];

        /**
         * read a stream of input symbols starting from state and make a list of
         * states that were on the transition path
         * @param fsm
         * @param state
         * @param inputSymbolStream
         */
        transitionTrail(fsm: Fsm, state: string, inputSymbolStream: any): any;

        /** test if a stream of input symbols leads a fsm to an accepting state */
        isStringInLanguage(fsm: Fsm, inputSymbolStream: string): any;


        /** print the fsm transition function and accepting states as an HTML table */
        printHtmlTable(fsm: Fsm): string;

        printDotFormat(fsm: Fsm): string;


        parseFsmFromString(string: string): Fsm;
        serializeFsmToString(fsm: Fsm): string;

        /** determine reachable states */
        getReachableStates(fsm: Fsm, state: string, shouldIncludeInitialState: boolean): string[];

        /** determine and remove unreachable states */
        removeUnreachableStates(fsm: Fsm): Fsm;

        /** determines if two states from potentially different fsms are equivalent */
        areEquivalentStates(fsmA: Fsm, stateA: string, fsmB: Fsm, stateB: string): boolean;

        /** determines if two fsms are equivalent by testing equivalence of starting states */
        areEquivalentFSMs(fsmA: Fsm, fsmB: Fsm): boolean;

        /** finds and removes equivalent states */
        removeEquivalentStates(fsm: Fsm): Fsm;

        convertStatesToNumbers(fsm: Fsm): Fsm;

        minimize(fsm: Fsm): Fsm;

        createRandomFsm(fsmType: string, numStates: number, numAlphabet: number, maxNumToStates: number): Fsm;
        convertNfaToDfa(fsm: Fsm): Fsm;
        convertEnfaToNfa(fsm: Fsm): Fsm;

        /** test whether if the language accepted by the fsm contains at least one string */
        isLanguageNonEmpty(fsm: Fsm): boolean;

        /** test whether if the language accepted by the fsm contains at least one string */
        isLanguageInfinite(fsm: Fsm): boolean;

        /** generate a random string which the fsm accepts */
        randomStringInLanguage(fsm: Fsm): string;

        /** generate a random string which the fsm doest accept */
        randomStringNotInLanguage(fsm: Fsm): string;

        /**
         * get a new fsm which accepts the language L=L1+L2 (set union) where
         * L1 is the language accepted by fsma and
         * L2 is the language accepted by fsmB
         * @param fsmA
         * @param fsmB
         */
        union(fsmA: Fsm, fsmB: Fsm): Fsm;

        /**
         * get a new fsm which accepts the language L=L1/L2 (set intersection) where
         * L1 is the language accepted by fsma and
         * L2 is the language accepted by fsmB
         * @param fsmA
         * @param fsmB
         */
        intersection(fsmA: Fsm, fsmB: Fsm): Fsm;

        /**
         * get a new fsm which accepts the language L=L1-L2 (set intersection) where
         * L1 is the language accepted by fsma and
         * L2 is the language accepted by fsmB
         * @param fsmA
         * @param fsmB
         */
        difference(fsmA: Fsm, fsmB: Fsm): Fsm;

        /**
         * get a new fsm which accepts the complement language of the
         * langauge accepted by the input fsm
         */
        complement(fsm: Fsm): any;

        /**
         * get a new fsm which accepts the language L1L2 where
         * L1 is the language accepted by fsmA and L2 is the
         * langauge accepted by fsmB
         */
        concatenation(fsmA: Fsm, fsmB: Fsm): Fsm;
        kleene(fsm: Fsm): Fsm;
        reverse(fsm: Fsm): Fsm;
        isSubset(fsmA: Fsm, fsmB: Fsm): boolean;
        toRegex(fsm: Fsm): any;
    };

    export const re: {
        string: String;
        array: Array;
        tree: Tree;
    };

    class Tree {
        tags: Tags;

        // The choices parameter must be an array of expression trees.
        // Returns the root of a new tree that represents the expression that is the union of
        // all the choices.
        makeAlt(choices: any[]): { tag: Tags.ALT, choices: any }

        // The elements parameter must be an array of expression trees.
        // Returns the root of a new tree that represents the expression that is the sequence
        // of all the elements.
        makeSeq(elements: any[]): { tag: Tags.SEQ, elements: any };

        // Wraps the given expressin tree unde a Kleene star operator.
        // Returns the root of the new tree.
        makeKStar(expr: any): { tag: Tags.KSTAR,  expr: any };

        /** Creates a node that represents the literal obj. */
        makeLit(obj: string): { tag: Tags.LIT, obj: string };

        /** Returns a node representing the empty string regular expression. */
        makeEps(): { tag: Tags.EPS };

        /** Returns the equivalent FSM for the specified regular expression in the tree representation. */
        toAutomaton(regex: {}): Fsm;

        /**
         * Returns a random regex containing at most @a numSymbols symbols from the
         * specified array of possible symbols @a alphabet. The probability distribution
         * of symbol selection is uniform and can be skewed by repeating elements in
         * alphabet. The parameter @a cfg is optional and can contain the following
         * fields:
         *   ALT_PROB    - the probability that alteration is used between two subexpressions
         *                 instead of sequencing (default 0.5)
         *   KLEENE_PROB - the probability that any subexpression is put under the Kleene
         *                 star operator (default 0.1)
         *   EPS_PROB    - the probability that epsilon is added as an alteration choice
         *                 (default 0.1)
         */
        random(numSymbols: number, alphabet: string[], cfg: {}): string;

        /**
         * Returns the array representation (i.e. noam.re.array) of @a regex which must
         * be in the tree (i.e. noam.re.tree) representation.
         * Parentheses are inserted into the array to preserve the meaning of the
         * regex. However, this does not really lead to minimal parenthesization because
         * it doesn't consider any rewriting rules. More specifically, if there were
         * parentheses that modify associativity of alteration or sequencing in the
         * original regex that was parsed into this tree, they will be preserved
         * even though they are not necessary.
         */
        toArray(regex: {}): any[];

         /**
         * Returns the string representation of @a regex which must be in the tree
         * (i.e. noam.re.tree) representation. This is not always possible, so
         * this function throws when the regex contains some symbols which are not
         * single-character strings.
         *
         * Semantically equivalent to first calling toArray and then calling
         * noam.re.array.toString on the result.
         */
        toString(regex: {}): string;

        simplify(tree: {}, config?: {}): { tag: Tags, elements: { tag: Tags, obj: string }[] };
    }

    class Array {
        // Returns the tree representation of the regex given by @a arr.
        toTree(arr: any): {};

        /**
         * Returns the string representation of the regex given by @a arr.
         * Throws if the regex contains any symbols which are not one-character strings
         * and special symbols from noam.re.array.specials.
         */
        toString(arr: any[]): string;

        /**
         * Returns the automaton accepting the language represented by the regex @a arr.
         *
         * Semantically equivalent to first calling toTree on @a arr and then converting
         * the result to an automaton via noam.re.tree.toAutomaton.
         */
        toAutomaton(arr: any[]): Fsm;

        // Returns a random regex in the array representation.
        // See noam.re.tree.random for further information.
        random(numSymbols: number, alphabet: string[], cfg: {}): any;
    }

    class String {

        /**
         * Returns the array representation of the regex represented by @a str.
         * Throws an Error if @a str contains illegal escape sequences.
         */
        toArray(str: string): Array;

        /**
         * Returns the tree representation of the regex represented by @a str.
         *
         * Semantically equivalent to first converting the @a str to the array
         * representation via noam.re.string.toArray and then converting the
         * result to a tree via noam.re.array.toTree.
         */
        toTree(str: string): Tree;

        /**
         * Returns an FSM accepting the language of the regex represented by @a str
         *
         * Semantically equivalent to first converting the @a str to the array
         * representation via noam.re.string.toArray, then converting the
         * result to a tree via noam.re.array.toTree and finally converting the result
         * of that to an automaton via noam.re.tree.toAutomaton.
         */
        toAutomaton(str: string): Fsm;

        /**
         * Returns a random regex string. @a alphabet must be a string. The other
         * parameters have exactly the same role as in noam.re.tree.random.
         */
        random(numSymbols: number, alphabet: string, cfg: {}): string;

        simplify(str: string, numIterations: number, appliedPatterns: any): string;
    }

    interface Fsm {
        states: string[];
        initialState : string;
        acceptingStates : string[];
        alphabet : string[];
        transitions : Transition[];
    }

    interface Transition {
        fromState: string;
        symbol: string;
        toStates:  string[];
    }

    enum Tags {
        ALT = 'alt',
        SEQ = 'sequence',
        KSTAR = 'kleene_star',
        LIT = 'literal',
        EPS = 'epsilon',
    }

}

// https://github.com/jsplumb/jsplumb/blob/master/index.d.ts
declare module jsPlumb {

    interface PaintStyle {
        stroke?: string;
        fill?: string;
        strokeWidth?: number;
        lineWidth?: number;
        fillStyle?: string;
        strokeStyle?: string;
    }

    type Selector = string;
    type UUID = string;
    type ElementId = string;
    type ElementRef = ElementId | Element;
    type ElementGroupRef = ElementId | Element | Array<ElementId> | Array<Element>;
    type ConnectionId = string;

    function extend(target: Object, source: Object): any;

    function addClass(el: NodeListOf<Element>, clazz: string): void;

    function removeClass(el: NodeListOf<Element>, clazz: string): void;

    function on(el: any, event: string, delegateSelector: string, handler: Function): void;
    function on(el: any, event: string, handler: Function): void;

    function off(el: any, event: string, handler: Function): void;

    function revalidate(el: Element): void;

    function getInstance(_defaults?: Defaults): jsPlumbInstance;

    function ready(action: () => void);
    function getSelector(selector: string): any;

    class jsPlumbInstance {

        addEndpoint(el: ElementGroupRef, params?: EndpointOptions, referenceParams?: EndpointOptions): Endpoint | Array<Endpoint>;

        addEndpoints(target: ElementGroupRef, endpoints: Array<EndpointOptions>, referenceParams?: EndpointOptions): Array<Endpoint>;

        animate(el: ElementRef, properties?: Object, options?: Object): void;

        batch(fn: Function, doNotRepaintAfterwards?: boolean/* =false */): void;

        bind(event: "connection", callback: (info: ConnectionMadeEventInfo, originalEvent: Event) => void, insertAtStart?: boolean/* =false */): void;
        bind(event: "click", callback: (info: Connection, originalEvent: Event) => void, insertAtStart?: boolean/* =false */): void;
        bind(event: "endpointClick" | "endpointDblClick", callback: (endpoint: Endpoint, originalEvent: Event) => void, insertAtStart?: boolean/* =false */): void;

        bind(event: string, callback: (info: OnConnectionBindInfo, originalEvent: Event) => void, insertAtStart?: boolean/* =false */): void;

        cleanupListeners(): void;

        connect(params: ConnectParams, referenceParams?: Object): Connection;

        deleteEndpoint(object: UUID | Endpoint, doNotRepaintAfterwards?: boolean/* =false */): jsPlumbInstance;

        deleteEveryConnection(): void;

        deleteEveryEndpoint(): jsPlumbInstance;

        deleteConnection(conn: Connection): void;

        doWhileSuspended(): jsPlumbInstance;

        draggable(el: Object, options?: DragOptions): jsPlumbInstance;

        empty(el: string | Element | Selector): void;

        fire(event: string, value: Object, originalEvent: Event): void;

        getAllConnections(): Connection[];

        getConnections(scope: string, options: Object, scope2?: string | string, source?: string | string | Selector, target?: string | string | Selector, flat?: boolean/* =false */): Array<any> | Map<any, any>;

        getContainer(): Element;

        getDefaultScope(): string;

        getEndpoint(uuid: string): Endpoint;

        getEndpoints(element:string|Element):Array<Endpoint>;

        getScope(Element: Element | string): string;

        getSelector(context?: Element | Selector, spec?: string): void;

        getSourceScope(element: Element | string): string;

        getTargetScope(element: Element | string): string;

        getType(id: string, typeDescriptor: string): Object;

        hide(el: string | Element | Selector, changeEndpoints?: boolean/* =false */): jsPlumbInstance;

        importDefaults(defaults: Object): jsPlumbInstance;

        isHoverSuspended(): boolean;

        isSource(el: string | Element | Selector): boolean;

        isSourceEnabled(el: string | Element | Selector, connectionType?: string): boolean;

        isSuspendDrawing(): boolean;

        isSuspendEvents(): boolean;

        isTarget(el: string | Element | Selector): boolean;

        isTargetEnabled(el: string | Element | Selector): boolean;

        makeSource(el: string | Element | Selector, params: Object, endpoint?: string | Array<any>, parent?: string | Element, scope?: string, dragOptions?: Object, deleteEndpointsOnEmpty?: boolean/* =false */, filter?: Function): void;

        makeTarget(el: string | Element | Selector, params: Object, endpoint?: string | Array<any>, scope?: string, dropOptions?: Object, deleteEndpointsOnEmpty?: boolean/* =true */, maxConnections?: number/* =-1 */, onMaxConnections?: Function): void;

        off(el: Element | Element | string, event: string, fn: Function): jsPlumbInstance;

        on(el: Element | Element | string, children?: string, event?: string, fn?: Function): jsPlumbInstance;

        ready(fn: Function): void;

        recalculateOffsets(el: string | Element | Selector): void;

        registerConnectionType(typeId: string, type: Object): void;

        registerConnectionTypes(types: Object): void;

        registerEndpointType(typeId: string, type: Object): void;

        registerEndpointTypes(types: Object): void;

        remove(el: string | Element | Selector): void;

        removeAllEndpoints(el: string | Element | Selector, recurse?: boolean/* =false */): jsPlumbInstance;

        repaint(el: string | Element | Selector): jsPlumbInstance;

        repaintEverything(clearEdits?: boolean/* =false */): jsPlumbInstance;

        reset(doNotUnbindInstanceEventListeners?: boolean): void;

        restoreDefaults(): jsPlumbInstance;

        revalidate(el: string | Element | Selector): void;

        select(params?: Object, scope?: string | string, source?: string | string, target?: string | string, connections?: Connection[]): { each(fn: (conn: Connection) => void): void };

        getHoverPaintStyle(params?: Object, scope?: string | string/* =jsPlumb.DefaultScope */, source?: string | Element | Selector | Array<any>, target?: string | Element | Selector | Array<any>, element?: string | Element | Selector | Array<any>): Selection;

        setContainer(el: string | Element | Selector): void;

        setHover(container: string | Element | Selector): void;

        setDefaultScope(scope: string): jsPlumbInstance;

        setDraggable(el: string | Object | Array<any>, draggable: boolean): void;

        setHoverSuspended(hover: boolean): void;

        setIdChanged(oldId: string, newId: string): void;

        setParent(el: Selector | Element, newParent: Selector | Element | string): void;

        setScope(el: Element | string, scope: string): void;

        setSource(connection: Connection, source: string | Element | Endpoint, doNotRepaint?: boolean/* =false */): jsPlumbInstance;

        setSourceEnabled(el: string | Element | Selector, state: boolean): jsPlumbInstance;

        setSourceScope(el: Element | string, scope: string, connectionType?: string): void;

        setSuspendDrawing(val: boolean, repaintAfterwards?: boolean/* =false */): boolean;

        setSuspendEvents(val: boolean): void;

        setTarget(connection: Connection, target: string | Element | Endpoint, doNotRepaint?: boolean/* =false */): jsPlumbInstance;

        setTargetEnabled(el: string | Element | Selector, state: boolean): jsPlumbInstance;

        setTargetScope(el: Element | string, scope: string, connectionType?: string): void;

        setZoom(zoom: number): void;

        show(el: string | Element | Selector, changeEndpoints?: boolean/* =false */): jsPlumbInstance;

        toggleDraggable(el: string | Element | Selector): boolean;

        toggleSourceEnabled(el: string | Element | Selector): boolean;

        toggleTargetEnabled(el: string | Element | Selector): boolean;

        toggleVisible(el: string | Element | Selector, changeEndpoints?: boolean/* =false */): void;

        unbind(eventOrListener?: string | Function, listener?: Function): void;

        unmakeEverySource(): jsPlumbInstance;

        unmakeEveryTarget(): jsPlumbInstance;

        unmakeSource(el: string | Element | Selector): jsPlumbInstance;

        unmakeTarget(el: string | Element | Selector): jsPlumbInstance;
    }

    interface ConnectionMadeEventInfo {
        connection: Connection;
        source: HTMLDivElement;
        sourceEndpoint: Endpoint;
        sourceId: string;
        target: HTMLDivElement;
        targetEndpoint: Endpoint;
        targetId: string;
    }

    interface OnConnectionBindInfo {
        connection: Connection;// the new Connection.you can register listeners on this etc.
        sourceId: string;// - id of the source element in the Connection
        originalSourceId: string;
        newSourceId: string;
        targetId: string;// - id of the target element in the Connection
        originalTargetId: string;
        newTargetId: string;
        source: Element;// - the source element in the Connection
        target: Element;//- the target element in the Connection
        sourceEndpoint: Endpoint;//- the source Endpoint in the Connection
        newSourceEndpoint: Endpoint;
        targetEndpoint: Endpoint;//- the targetEndpoint in the Connection
        newTargetEndpoint: Endpoint;
    }

    interface Defaults {
        Endpoint?: EndpointSpec;
        Endpoints?: [ EndpointSpec, EndpointSpec ];
        Anchor?: AnchorSpec;
        Anchors?: [ AnchorSpec, AnchorSpec ];
        PaintStyle?: PaintStyle;
        /** Connectors hover styles */
        HoverPaintStyle?: PaintStyle;
        EndpointStyle?: PaintStyle;
        EndpointHoverStyle?: PaintStyle;
        ConnectionsDetachable?: boolean;
        ReattachConnections?: boolean;
        ConnectionOverlays?: Array<OverlaySpec>;
        Container?: any; // string(selector or id) or element
        DragOptions?: DragOptions;
        Connector?:ConnectorSpec;
    }

    interface Connections {
        detach(): void;
        length: number;
        each(e: (c: Connection) => void): void;
    }

    interface ConnectParams {
        uuids?: [UUID, UUID];
        source?: ElementRef | Endpoint;
        target?: ElementRef | Endpoint;
        detachable?: boolean;
        deleteEndpointsOnDetach?: boolean;
        endpoint?: EndpointSpec;
        anchor?: AnchorSpec;
        anchors?: [AnchorSpec, AnchorSpec];
        label?: string;
        connector?: ConnectorSpec;
        overlays?:Array<OverlaySpec>;
        cssClass?: string;
        type?: string;
    }

    interface DragEventCallbackOptions {
        drag: object; // The associated Drag instance
        e: MouseEvent;
        el: HTMLElement; // element being dragged
        pos: [number, number]; // x,y location of the element. drag event only.
    }

    interface DragOptions {
        containment?: string;
        start?: (params:DragEventCallbackOptions) => void;
        drag?: (params:DragEventCallbackOptions) => void;
        stop?: (params:DragEventCallbackOptions) => void;
        cursor?: string;
        zIndex?: number;
    }

    interface DropOptions {
        hoverClass: string;
    }

    interface Connection {
        id: ConnectionId;
        setDetachable(detachable: boolean): void;
        setParameter(name: string, value: any): void;
        endpoints: [Endpoint, Endpoint];
        getOverlay(s: string): Overlay;
        showOverlay(s: string): void;
        hideOverlay(s: string): void;
        setLabel(s: string): void;
        getElement(): Connection;
        repaint():void;
        bind(event: string, callback: (info: Connection, originalEvent?: Event) => void): void;

    }


    /* -------------------------------------------- CONNECTORS ---------------------------------------------------- */

    interface ConnectorOptions {
    }

    type UserDefinedConnectorId = string;
    type ConnectorId = "Bezier" | "StateMachine" | "Flowchart" | "Straight" | UserDefinedConnectorId;
    type ConnectorSpec = ConnectorId | [ConnectorId, ConnectorOptions];


    /* -------------------------------------------- ENDPOINTS ------------------------------------------------------ */

    type EndpointId = "Rectangle" | "Dot" | "Blank" | UserDefinedEndpointId;
    type UserDefinedEndpointId = string;
    type EndpointSpec = EndpointId | [EndpointId, EndpointOptions];

    interface EndpointOptions {
        anchor?: AnchorSpec;
        endpoint?: Endpoint;
        enabled?: boolean;//= true
        paintStyle?: PaintStyle;
        hoverPaintStyle?: PaintStyle;
        cssClass?: string;
        hoverClass?: string;
        maxConnections?: number;//= 1?
        dragOptions?: DragOptions;
        dropOptions?: DropOptions;
        connectorStyle?: PaintStyle;
        connectorHoverStyle?: PaintStyle;
        connector?: ConnectorSpec;
        connectorOverlays?: Array<OverlaySpec>;
        connectorClass?: string;
        connectorHoverClass?: string;
        connectionsDetachable?: boolean;//= true
        isSource?: boolean;//= false
        isTarget?: boolean;//= false
        reattach?: boolean;//= false
        parameters?: object;
        "connector-pointer-events"?: string;
        connectionType?: string;
        dragProxy?: string | Array<string>;
        id?: string;
        scope?: string;
        reattachConnections?: boolean;
        type?: string; // "Dot", etc.
        radius?: number;
    }

    class Endpoint {
        anchor: Anchor;
        connections?: Array<Connection>;
        maxConnections: number;//= 1?
        id: string;
        scope: string;
        type: EndpointId;
        elementId: string;
        setEndpoint(spec: EndpointSpec): void;

        connectorSelector(): Connection;

        isEnabled(): boolean;

        setEnabled(enabled: boolean): void;

        setHover(hover: boolean): void;

        getElement(): Element;

        setElement(el: Element): void;
    }

    /**
     * The actual component that does the rendering.
     */
    interface EndpointRenderer {
    }

    /* -------------------------------------------- ANCHORS -------------------------------------------------------- */

    interface AnchorOptions {
    }

    type AnchorOrientationHint = -1 | 0 | 1;

    interface Anchor {
        type: AnchorId;
        cssClass: string;
        elementId: string;
        id: string;
        locked: boolean;
        offsets: [number, number];
        orientation: [AnchorOrientationHint, AnchorOrientationHint];
        x: number;
        y: number;
    }

    type AnchorId =
        "Assign" |
        "AutoDefault" |
        "Bottom" |
        "BottomCenter" |
        "BottomLeft" |
        "BottomRight" |
        "Center" |
        "Continuous" |
        "ContinuousBottom" |
        "ContinuousLeft" |
        "ContinuousRight" |
        "ContinuousTop" |
        "Left" |
        "LeftMiddle" |
        "Perimeter" |
        "Right" |
        "RightMiddle" |
        "Top" |
        "TopCenter" |
        "TopLeft" |
        "TopRight";


    type AnchorSpec = AnchorId | [AnchorId, AnchorOptions]


    /* --------------------------------------- OVERLAYS ------------------------------------------------------------- */

    interface OverlayOptions {
    }

    interface ArrowOverlayOptions extends OverlayOptions {
        width?: number; // 20
        length?: number; // 20
        location?: number; // 0.5
        direction?: number; // 1
        foldback?: number; // 0.623
        paintStyle?: PaintStyle;
    }

    interface LabelOverlayOptions extends OverlayOptions {
        label: string;
        cssClass?: string;
        location?: number; // 0.5
        labelStyle?: {
            font?: string;
            color?: string;
            fill?: string;
            borderStyle?: string;
            borderWidth?: number;// integer
            padding?: number; //integer
        };
    }

    type OverlayId = "Label" | "Arrow" | "PlainArrow" | "Custom";

    type OverlaySpec = OverlayId | [OverlayId, OverlayOptions];

    interface Overlay {
        setLabel(label: string): void;
    }
}

declare module jsPlumbUtil {
    type UUID = string;

    function isArray(obj:any):boolean;
    function isNumber(obj:any):boolean;
    function isString(obj:any):boolean;
    function isBoolean(obj:any):boolean;
    function isNull(obj:any):boolean;
    function isObject(obj:any):boolean;
    function isDate(obj:any):boolean;
    function isFunction(obj:any):boolean;
    function isNamedFunction(obj:any):boolean;
    function isEmpty(obj:any):boolean;
    function extend(target: Object, source: Object): any;
    function uuid(): UUID;
    function findWithFunction(list:Array<any>, fn:(obj:any)=>boolean):number;
    function addWithFunction(list:Array<any>, item:any, fn:(obj:any)=>boolean):void;
    function removeWithFunction(list:Array<any>, fn:(obj:any)=>boolean):number;
    function suggest(list:Array<any>, item:any, insertAtHead?:boolean):boolean;
    function fastTrim(s:string):string;
}
