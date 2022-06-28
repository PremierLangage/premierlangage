export interface INodeContextMenuEvent<T extends INode> {
    nodes: T[];
    event: any;
}

export interface INodeEditEvent<T extends INode> {
    node: T;
    editedText: string;
    editType: 'create' | 'rename';
    event: any;
}

export interface ITreeFilterOptions {
    query: string;
    regex?: boolean;
    pattern?: RegExp;
    error?: string;
}

export interface ITreeFilterEvent<T> {
    node: T;
    options: ITreeFilterOptions;
    hiddens: { [k: string]: boolean };
}

/** Representation of a tree node */
export interface INode {
    /** name of the node */
    name: string;

    /**
     * An array of the node's children.
     */
    children?: INode[];
}

/**
 * Internal representation of a tree node.
 */
export interface ITreeNode<T> extends INode {
    __internal__: boolean;
    /** A unique key of this node. */
    id: string;

    /** Reference to the original data. */
    data: T;

    /** Level in the tree (starts from 0). */
    level: number;

    /** A value indicating whether the node is expandable */
    expandable: boolean;

    filter?: ITreeFilterOptions;

    /** A value indicating whether the node is activated (the focused node) */
    active?: boolean;

    /** A value indicating whether the node is expanded */
    expanded?: boolean;

    /** A value indicating whether the node is selected (allow multi selection) */
    selected?: boolean;

    /** A value indicating whether a new child node is currently being created inside the node.  */
    creating?: boolean;

    /** A value indicating whether the node is in editing state.  */
    renaming?: boolean;
}

/** */
export interface ITreeOptions<T extends INode> {
    /** The unique identifier of the tree used to save and restore the state of the tree. */
    id: string;

    /**
     * A string representing the attribute of the node that contains the unique ID.
     * This will be used to construct the path, which is an array of IDs that point to the node.
     *
     * If not provided the component will throw an exception.
     */
    idField: string;

    /**
     * Event called after a node is edited in the tree.
     * @param e informations about the event.
     */
    onDidEdit?: (e: INodeEditEvent<T>) => void;

    /**
     * Event called after a node is clicked in the tree.
     * @param e informations about the event.
     */
    onDidClick?: (e: T) => void;

    /**
     * Event called after a node is expanded in the tree.
     * @param e informations about the event.
     */
    onDidExpand?: (e: T) => void;

    /**
     * Event called after a node is expanded in the tree.
     * @param e informations about the event.
     */
    onDidCollapse?: (e: T) => void;

     /**
     * Event called after a node is edited in the tree.
     * @param e informations about the event.
     */
    onDidContextMenu?: (e: INodeContextMenuEvent<T>) => void;

    onDidCopy?: (e: T[]) => void;

    onDidPaste?: (e: T) => void;

    onDidDelete?: (e: T) => void;

    onDidFilter?: (e: ITreeFilterEvent<T>) => void;
}

