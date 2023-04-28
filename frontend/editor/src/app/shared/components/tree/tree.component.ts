import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ContentChild, HostListener, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Subscription } from 'rxjs';
import { TreeNodeDirective } from '../../directives/tree-node.directive';
import { INode, ITreeFilterOptions, ITreeNode, ITreeOptions } from '../../models/tree.model';

/** Renders a recursive tree */
@Component({
  selector: 'app-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.scss'],
})
export class TreeComponent<T extends INode> implements OnInit, OnDestroy {

    private _nodes: T[] = [];
    private activeNode: ITreeNode<T>;
    private selectedNodes: ITreeNode<T>[] = [];
    private hiddenNodes = {};
    private shiftKeyPressed: boolean;
    private restored: boolean;

    private readonly subscriptions: Subscription[] = [];
    private readonly expandedNodes = {};
    private readonly treeFlattener: MatTreeFlattener<T, ITreeNode<T>>;

    readonly filterOptions: ITreeFilterOptions = {
        query: '',
        regex: true,
        pattern: null,
        error: ''
    };

    readonly treeControl: FlatTreeControl<ITreeNode<T>>;
    readonly dataSource: MatTreeFlatDataSource<T, ITreeNode<T>>;
    readonly editing: { label: string, node: ITreeNode<T>, parent?: ITreeNode<T>} = {
        label: '',
        node: null,
    };

    /**
     * TemplateRef that renders a node (a default renderer will be used if not provided)
     */
    @ContentChild(TreeNodeDirective, { read: TemplateRef, static: true })
    template: any;

    @Input()
    options: ITreeOptions<T> = {
        id: '',
        idField: '',
    };

    /**
     * Array of root nodes of the tree.
     */
    @Input()
    set nodes(nodes: T[]) {
        this._nodes = nodes || [];
        this.refresh(this._nodes);
    }

    constructor() {
        this.treeControl = new FlatTreeControl<ITreeNode<T>>(
            node => node.level,
            node => node.expandable
        );

        this.treeFlattener = new MatTreeFlattener<T, ITreeNode<T>>(
            (node, level) => this.transformer(node, level),
            node => node.level,
            node => node.expandable,
            node => this.children(node)
        );

        this.dataSource = new MatTreeFlatDataSource(
            this.treeControl,
            this.treeFlattener
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.save();
    }

    //#region API

    isSelected(node: T) {
        if (node == null) {
            throw new ReferenceError('node');
        }
        const e = this.findNode(node);
        return e && e.selected;
    }

    isActive(node: T) {
        if (node == null) {
            throw new ReferenceError('node');
        }
        const e = this.findNode(node);
        return e && e.active;
    }

    selections() {
        return (this.selectedNodes || []).map(s => s.data);
    }

    /**
     * Sets the passed node as the active one then expands it and recursively expand all its parents.
     * @param e the id of a node or a reference to a  node.
     */
    expandNode(e: string | T | ITreeNode<T>) {
        this._expandNode(e, true);
    }

    /**
     * Sets the passed node as the active one then collapse it.
     * @param e the id of a node or a reference to a  node.
     */
    collapseNode(e: string | T | ITreeNode<T>) {
        const recursive = (node: ITreeNode<T>, firstCall: boolean) => {
            if (node) {
                if (firstCall) {
                    this.activateAndFocus(node);
                }

                node.expanded = false;
                delete this.expandedNodes[this.activeNode.id];
                this.treeControl.collapse(node);

                if (this.options.onDidCollapse) {
                    this.options.onDidCollapse(node.data);
                }
            }
        };

        recursive(this.findNode(e), true);
    }

    /**
     * Adds `node` to the children of `parent`
     * and sets the parent in a editing state.
     * @param parent the parent of the node to add.
     * @param node the node to add.
     * @throws {ReferenceError} if `parent` or `node` is null.
     */
    addNode(parent: T, node: T): void {
        if (parent == null) {
            throw new ReferenceError('parent');
        }
        if (node == null) {
            throw new ReferenceError('node');
        }

        const parentNode = this.findNode(parent);
        parentNode.creating = true;
        parentNode.renaming = false;
        parentNode.expanded = true;

        this.editing.label = '';
        this.editing.node = this.transformer(node);

        this.editing.node.creating = true;
        this.editing.node.renaming = false;

        this.editing.parent = parentNode;
        this.treeControl.expand(parentNode);
    }

    /**
     * Starts renaming the given node.
     * @param node the node to rename.
     * @throws {ReferenceError} if `node` is null.
     */
    renameNode(node: T) {
        if (node == null) {
            throw new ReferenceError('node');
        }

        this.editing.label = node.name;
        this.editing.node = this.findNode(node);
        this.editing.node.creating = false;
        this.editing.node.renaming = true;
    }

    /**
     * End the editing of the current node in a editing state.
     */
    endEdit() {
        const { parent, node } = this.editing;
        if (parent) {
            parent.creating = parent.renaming = false;
        }
        if (node) {
            node.creating = node.renaming = false;
            this.editing.node = this.editing.parent = null;
        }
    }

    /**
     * Toggles the expanded|collapse state of the given node and focus it by moving
     * the scrollbar to make it visible.
     * @param e id of the node to select or a reference to the node.
     */
    toggleNode(e: string | T): void {
        if (!e) {
            return;
        }
        if (this.activeNode) {
            this.activeNode.active = this.activeNode.selected = false;
        }
        this.activeNode = null;
        const node = this.findNode(e);
        if (node) {
            if (node.expanded) {
                this.collapseNode(node);
            } else {
                this.expandNode(node);
            }
        }
    }

    filter(query: string) {
        this.filterOptions.query = query;
        this.filterOptions.error = '';
        this.hiddenNodes = {};
        if (query == null || query.trim() === '') {
            this.refresh(this._nodes);
        } else {
            query = query.trim().toLowerCase();
            this.filterOptions.query = query;
            if (this.filterOptions.regex) {
                try {
                    this.filterOptions.pattern = new RegExp(query, 'gi');
                } catch (error) {
                    this.filterOptions.error = error.message;
                    return;
                }
            }

            const nodes = (this.treeControl.dataNodes || []).filter(e => e.level === 0);
            for (const node of nodes) {
                this.options.onDidFilter({
                    node: node.data,
                    options: this.filterOptions,
                    hiddens: this.hiddenNodes
                });
            }

            this.refresh(this._nodes);

            this.treeControl.dataNodes.forEach(node => {
                node.filter = null;
                if (this.filterOptions.pattern) {
                    if (this.filterOptions.pattern.test(node.name)) {
                        node.filter = this.filterOptions;
                        node.expanded = true;
                        this.treeControl.expand(node);
                    }
                } else if (node.name.toLowerCase().includes(this.filterOptions.query)) {
                    node.filter = this.filterOptions;
                    node.expanded = true;
                    this.treeControl.expand(node);
                }
            });
        }
    }

    save() {
        if (this.options.id) {
            const state = {
                filter: {
                    query: this.filterOptions.query,
                    regex: this.filterOptions.regex,
                },
                active: this.activeNode ? this.activeNode.id : '',
                expandedNodes: this.expandedNodes
            };
            localStorage.setItem(this.options.id, JSON.stringify(state));
        }
    }

    restore() {
        if (!this.restored) {
            this.restored = true;
            if (this.options.id) {
                const state = JSON.parse(localStorage.getItem(this.options.id)) || {};
                Object.assign(this.expandedNodes, state.expandedNodes || {});
                return state;
            }
        }
        return {};
    }

    //#endregion

    //#region CALLED FROM TEMPLATE

    /**
     * Loop trackby function called from the template
     * @param _ the index
     * @param item the node
     */
    onTrack(_: number, item: T) {
        return item[this.options.idField];
    }

    /**
     * Handles focus event from the template.
     * @param node the focused node.
     */
    onFocus(node: ITreeNode<T>) {
        node.selected = true;
        if (this.shiftKeyPressed || this.selectedNodes.length > 1) {
            if (!this.inSelections(node)) {
                this.selectedNodes.push(node);
            }
        } else {
            this.clearSelections();
            this.selectedNodes.push(node);
        }
    }

    /**
     * Handles keyboard event on the focused node.
     * @param node the focused node.
     * @param e the original event.
     */
    onKeyDown(node: ITreeNode<T>, e: KeyboardEvent) {
        const eventTarget = e.target as HTMLElement;
        if (eventTarget) {
            const navigate = (targetEl: HTMLElement, prevEl: HTMLElement, nextEl: HTMLElement) => {
                const target = this.findNode(targetEl);
                if (!target) {
                    return;
                }
                const prevNode = this.findNode(prevEl);
                const currNode = this.findNode(eventTarget);
                const nextNode = this.findNode(nextEl);
                const undo = (prevNode && targetEl.id === prevEl.id && prevNode.selected);
                const redo = (nextNode && targetEl.id === nextEl.id && nextNode.selected);
                if (undo || redo) {
                    currNode.selected = false;
                    this.selectedNodes = this.selectedNodes.filter(s => s.id !== currNode.id);
                    targetEl.focus();
                } else {
                    if (target.selected) {
                        target.selected = false;
                        this.selectedNodes = this.selectedNodes.filter(s => s.id !== target.id);
                    } else {
                        targetEl.focus();
                    }
                }
                e.preventDefault();
            };
            const prev = eventTarget.previousElementSibling as HTMLElement;
            const next = eventTarget.nextElementSibling as HTMLElement;
            switch (e.key) {
                case 'ArrowUp':
                    navigate(prev, prev, next);
                    break;
                case 'ArrowDown':
                    navigate(next, prev, next);
                    break;
                case 'Enter':
                    if (this.options.onDidEdit) {
                        this.clearSelections();
                        this.renameNode(node.data);
                    }
                    break;
                case 'c':
                case 'C':
                    if (e.ctrlKey || e.metaKey) {
                        if (this.options.onDidCopy) {
                            this.options.onDidCopy(this.selectedNodes.map(n => n.data));
                        }
                    }
                    break;
                case 'v':
                case 'V':
                    if (e.ctrlKey || e.metaKey) {
                        if (this.options.onDidPaste) {
                            this.options.onDidPaste(node.data);
                        }
                    }
                    break;
                case 'Backspace':
                    if ((e.ctrlKey || e.metaKey) && this.options.onDidDelete) {
                        this.options.onDidDelete(node.data);
                    }
                    break;
            }

        }
    }

    /**
     * Handles node edit event from the template.
     * @param event original event.
     */
    onEdit(event: Event) {
        if (this.options.onDidEdit) {
            this.options.onDidEdit({
                event,
                node: this.editing.node.data,
                editType: this.editing.node.renaming ? 'rename' : 'create',
                editedText: this.editing.label,
            });
        }
    }

    /**
     * Handles click event from the template.
     * @param node the clicked node.
     */
    onClick(node: ITreeNode<T>) {
        if (this.shiftKeyPressed) {
            node.selected = true;
            if (!this.inSelections(node)) {
                this.selectedNodes.push(node);
            }
        } else {
            this.clearSelections();
            this.selectedNodes.push(node);
            if (this.options.onDidClick) {
                this.options.onDidClick(node.data);
            }
        }
    }

    /**
     * Handles right click event from the template.
     * @param node the clicked node.
     * @param event the original event.
     */
    onContextMenu(node: ITreeNode<T>, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.inSelections(node)) {
            this.selectedNodes.push(node);
        }

        if (this.options.onDidContextMenu) {
            this.options.onDidContextMenu({
                nodes: this.selectedNodes.map(item => item.data),
                event
            });
        }
    }

    //#endregion

    //#region PRIVATE

    private children(node: T): T[] {
        if (this.filterOptions.query) {
            return ((node.children || []) as T[]).filter(e => {
                return !this.hiddenNodes[e[this.options.idField]];
            });
        } else {
            return node.children as T[];
        }
    }

    private refresh(nodes: T[]) {
        const state = this.restore();
        this.dataSource.data = nodes;
        this.treeControl.dataNodes.forEach(node => {
            if (node.expanded) {
                this.treeControl.expand(node);
            }
        });
        this.clearSelections();
        setTimeout(() => {
            const { active, filter } = state;
            if (active) {
                const activeNode = this.findNode(active);
                if (activeNode) {
                    this.activateAndFocus(activeNode);
                }
            }
            if (filter && filter.query) {
                this.filter(filter.query);
            }

        }, 300);
    }

    private clearSelections() {
        this.selectedNodes.forEach(s => s.selected = false);
        this.selectedNodes = [];
    }

    private inSelections(node: ITreeNode<T>) {
        return this.selectedNodes.some(s => s.id === node.id);
    }

    private activateAndFocus(node: ITreeNode<T>) {
        node.active = node.selected = true;
        this.activeNode = node;
        const domNode = document.getElementById('tree-node-' + this.activeNode.id);
        if (domNode) {
            domNode.focus();
        }
    }

    private _expandNode(e: string | T | ITreeNode<T>, focus: boolean) {
        const recursive = (node: ITreeNode<T>, firstCall: boolean) => {
            if (node) {
                if (focus && firstCall) {
                    this.activateAndFocus(node);
                }
                this.expandedNodes[node.id] = node.expanded = true;
                this.treeControl.expand(node);
                if (this.options.onDidExpand) {
                    this.options.onDidExpand(node.data);
                }
                const parent = this.findParent(node);
                if (parent && parent.level > 0) {
                    recursive(parent, false);
                }
            }
        };
        recursive(this.findNode(e), true);
    }

    private findNode(e: string | HTMLElement | T | ITreeNode<T>): ITreeNode<T> {
        if (!e) {
            return null;
        }

        if (typeof(e) ===  'string') {
            return this.treeControl.dataNodes.find(n => n.id === e);
        }

        if (e instanceof Element || e instanceof HTMLElement) {
            return this.findNode((e.id || '').replace('tree-node-', ''));
        }

        if ('__internal__' in  e) {
            return e as ITreeNode<T>;
        }

        if (!this.treeControl.dataNodes) {
            return null;
        }

        return this.treeControl.dataNodes.find(n => {
            return n.id === e[this.options.idField];
        });
    }

    private findParent(node: ITreeNode<T>): ITreeNode<T> {
        if (!node) {
            return null;
        }

        const level = this.treeControl.getLevel(node);
        if (level < 1) {
            return null;
        }

        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        let currentNode: ITreeNode<T>;
        for (let i = startIndex; i >= 0; i--) {
            currentNode = this.treeControl.dataNodes[i];
            if (this.treeControl.getLevel(currentNode) < level) {
                return currentNode;
            }
        }
    }

    private transformer(node: T, level?: number): ITreeNode<T> {
        if (!this.options.idField) {
            throw new Error('"options.idField" must be provided');
        }

        if (!(this.options.idField in node)) {
            throw new Error(`property '${this.options.idField}' must be present in the nodes`);
        }

        const id = node[this.options.idField];
        const r = {
            __internal__: true,
            name: node.name,
            children: node.children,
            data: node,
            level: level || 0,
            id,
            expandable: !!node.children && node.children.length > 0,
            expanded: this.expandedNodes[id] || false,
        };
        return r;
    }

    @HostListener('document:keyup', ['$event'])
    private keyup($event: KeyboardEvent) {
        this.shiftKeyPressed = $event.shiftKey;
    }

    @HostListener('document:keydown', ['$event'])
    private keydown($event: KeyboardEvent) {
        this.shiftKeyPressed = $event.shiftKey;
    }

    //#endregion
}

