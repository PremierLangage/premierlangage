import {Component, Input, ContentChild, TemplateRef, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { TreeNodeDirective } from '../../directives/tree-node.directive';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DndData } from '../../directives/droppable.directive';


/** Representation of a tree node */
export interface Node {
    /** unique id of the ndoe */
    id: string;
    /** name of the node */
    name: string;
    /** level of the node */
    level: number;
    /** is the node expandable? */
    expandable: boolean;
    /** data of the node */
    data?: any;
    /** is the node focused */
    isFocused?: boolean;
    /** is the node expanded */
    isExpanded?: boolean;
    /** is the node in a create state */
    isCreating?: boolean;
    /** is the node in a rename state */
    isRenaming?: boolean;
}

/** Representation of a recursive tree. */
export interface Tree {
    /**
     * Unique ID for the node.
     * If one is not supplied it will be created by the tree library.
     */
    id: string;

    /**
     * Will be displayed by default in the tree.
     */
    name: string;

    /**
     * An array of the node's children.
     * Each child is an object with the same structure as the parent node.
     */
    children?: Tree[];

    /** Is the node expanded */
    isExpanded?: boolean;

    /** optional data */
    data?: any;
}

export interface NodeEvent {
    node: Node;
    event: any;
}


/** Renders a recursive tree */
@Component({
  selector: 'app-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.scss'],
})
export class TreeComponent implements AfterViewInit {
    private nameBeforeEditing: string;
    private editingParent: Node;

    /** a reference to the focused node */
    focused: Node;

    /** a reference to the node currenlty in a editing state */
    editing: Node;

    treeControl = new FlatTreeControl<Node>(node => node.level, node => node.expandable);
    treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    virtualSource = [];

    /**
     * TemplateRef that renders a node (a default renderer will be used if not provided)
     */
    @ContentChild(TreeNodeDirective, {read: TemplateRef})
    template: any;

    @ViewChild(CdkVirtualScrollViewport)
    virtualScroll: CdkVirtualScrollViewport;

    @Output()
    readonly edited = new EventEmitter<NodeEvent>();
    @Output()
    readonly clicked = new EventEmitter<NodeEvent>();
    @Output()
    readonly dropped = new EventEmitter<DndData>();

    @Input()
    draggable: (node: Node) => boolean = _ => false

    @Input()
    droppable: (node: Node) => boolean = _ => false

    @Input()
    set nodes(nodes: Tree[]) {
        this.virtualSource = nodes.slice();
        this.dataSource.data = this.virtualSource.slice(0, 20);
        setTimeout(() => {
          this.treeControl.dataNodes.forEach(node => {
              if (node.isExpanded) {
                  this.treeControl.expand(node);
              }
          });
        }, 30);
    }

    constructor() {}

    ngAfterViewInit() {
        this.virtualScroll.renderedRangeStream.subscribe(range => {
            this.dataSource.data = this.virtualSource.slice(range.start, range.end);
        });
    }

    isExpandableNode(_: number, node: Node) {
        return node.isExpanded || node.expandable;
    }

    didNodeClicked(node: Node, event: MouseEvent) {
        if (this.focused) {
          this.focused.isFocused = false;
        }
        node.isFocused = true;
        this.focused = node;
        this.clicked.emit({ node: node, event: event });
    }

    expand(node: Node) {
        this.treeControl.expand(node);
    }

    createNode(parent: Node, node: Tree) {
        parent.isCreating = true;
        parent.isRenaming = false;
        this.editingParent = parent;
        this.editing = this.transformer(node);
        this.editing.isCreating = true;
        this.editing.isRenaming = false;
        this.expand(parent);
    }

    renameNode(node: Node) {
        node.isRenaming = true;
        this.nameBeforeEditing = node.name;
        this.editing = node;
        this.editing.isCreating = false;
        this.editing.isRenaming = true;
    }

    endEditing(commit: boolean) {
        if (!commit) {
            this.editing.name = this.nameBeforeEditing;
        }
        if (this.editingParent) {
            this.editingParent.isCreating = this.editingParent.isRenaming = false;
        }
        this.editing.isCreating = this.editing.isRenaming = false;
        this.editing = null;
        this.editingParent = null;
    }

    didEditingChanged(event: any) {
        this.edited.emit({
          node: this.editing,
          event,
        });
    }

    private transformer(node: Tree, level?: number): Node {
        const data = {
          id: node.id,
          data: node.data,
          expandable: !!node.children && node.children.length > 0,
          name: node.name,
          level: level,
          isExpanded: node.isExpanded
        };
        return data;
    }

}

