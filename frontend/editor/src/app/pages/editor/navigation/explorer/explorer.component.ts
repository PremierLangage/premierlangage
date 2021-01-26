// tslint:disable: max-line-length
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/core/menu.service';
import { NotificationService } from 'src/app/core/notification.service';
import { PrompOptions } from 'src/app/shared/components/prompt/prompt.component';
import { TreeComponent } from 'src/app/shared/components/tree/tree.component';
import { DndData } from 'src/app/shared/directives/dnd.directive';
import { INodeContextMenuEvent, INodeEditEvent, ITreeFilterEvent, ITreeOptions } from 'src/app/shared/models/tree.model';
import { Paths } from 'src/app/shared/utils/paths';
import * as filters from '../../shared/models/filters.model';
import { createResource, IResource, ResourceTypes } from '../../shared/models/resources.model';
import { EditorService } from '../../shared/services/editor.service';
import { OpenerService } from '../../shared/services/opener.service';
import { ResourceService } from '../../shared/services/resource.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],

})
export class ExplorerComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private copiedNodes: IResource[];

    /**
     * nodes options
     */
    readonly nodeOptions: (NodeAction)[] = [

        { id: 'test', icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: this.optionTest.bind(this) },
        { id: 'share', icon: 'fas fa-share', label: 'Share', enabled: filters.canBeTested, action: this.optionShare.bind(this) },
        { id: 'load-pla', icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: this.optionLoad.bind(this) },
        { id: 'reload-pla', icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: this.optionReload.bind(this) },

        { divider: true },

        { id: 'new-file', icon: 'far fa-file', label: 'New File', enabled: filters.canAddChild, action: this.optionAddFile.bind(this) },
        { id: 'new-folder', icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddChild, action: this.optionAddFolder.bind(this) },

        { divider: true },

        { id: 'copy-path', icon: 'fas fa-link', label: 'Copy Path', enabled: _ => true, action: this.optionPath.bind(this), forContextMenu: true  },
        { id: 'copy', icon: 'fas fa-clone', label: 'Copy (Ctrl|⌘ C)', enabled: n => !filters.isRoot(n) ,
            action: (node, event) => {
                this.preventEvent(event);
                const selections = this.tree.selections();
                if (!selections.some(s => s.path === node.path)) {
                    selections.push(node);
                }
                this.optionCopy(selections);
            }
        },
        { id: 'paste', icon: 'fas fa-paste', label: 'Paste (Ctrl|⌘ V)', enabled: _ => this.copiedNodes && this.copiedNodes.length > 0, action: this.optionPaste.bind(this)  },

        { divider: true },

        { id: 'rename', icon: 'far fa-edit', label: 'Rename (Ctrl|⌘ ⏎)', enabled: filters.canBeRenamed, action: this.optionRename.bind(this) },
        { id: 'delete', icon: 'far fa-trash-alt', label: 'Delete (Ctrl|⌘ ⌫)', enabled: filters.canBeDeleted, action: this.optionDelete.bind(this) },

        { divider: true },

        { id: 'more', icon: 'fas fa-ellipsis-h', label: 'More (Right Click)', enabled: _ => true,
            action: (n, e) => {
                this.contextMenu({
                    event: e,
                    nodes: [n]
                });
            },
            forHover: true,
        },
        { id: 'download', icon: 'fas fa-download', label: 'Download', enabled: filters.isFolder, action: this.optionDownload.bind(this), forContextMenu: true },
        { id: 'readonly', icon: 'fas fa-lock', label: 'Read Only', enabled: filters.isReadOnly, action: () => { } },

    ];

    readonly treeOptions: ITreeOptions<IResource> = {
        id: 'editor.explorer.tree',
        idField: 'path',
        onDidClick: this.onClicked.bind(this),
        onDidEdit: this.onEdited.bind(this),
        onDidContextMenu: this.contextMenu.bind(this),
        onDidFilter: this.optionFilter.bind(this),
        onDidCopy: this.optionCopy.bind(this),
        onDidPaste: this.optionPaste.bind(this),
        onDidDelete: this.optionDelete.bind(this),
    };

    @ViewChild(TreeComponent, { static: true })
    tree: TreeComponent<IResource>;

    @ViewChild('contextmenu', { static: true })
    contextMenuRef: TemplateRef<any>;

    nodes: IResource[];

    constructor(
        private readonly menu: MenuService,
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
        private readonly viewContainerRef: ViewContainerRef,
    ) {}

    ngOnInit() {
        this.nodes = this.resources.getAll();

        this.subscriptions.push(this.resources.changed.subscribe(data => {
            this.nodes = data;
        }));

        this.subscriptions.push(this.editor.onDidBeforeLeave.subscribe(() => {
            this.tree.save();
        }));

        this.subscriptions.push(this.editor.activeResource.subscribe(data => {
            this.tree.toggleNode(data);
        }));
        this.subscriptions.push(this.resources.created.subscribe(data => {
            if (filters.isFile(data)) {
                this.opener.open(data.path);
            }
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    /**
     * Gets a value indicating whether the resource is draggrable
     * @param node the node.
     * 	@returns true only if the resource is not a root folder.
     */
    draggable(node: IResource) {
        return !filters.isRoot(node) && node.write;
    }

    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param node the node.
     * 	@returns true only if the resource is a folder.
     */
    droppable(node: IResource) {
        return filters.isFolder(node) && node.write;
    }

    /**
     * Handles refresh button click by retrieving resources from the server.
     */
    async refresh() {
        const confirm = this.resources.findPredicate(e => e.changed && e.opened);
        try {
            if (!confirm || await this.notification.confirmAsync({
                title: 'You will lose any unsaved changes after this. Are you sure ?',
                okTitle: 'Refresh',
                noTitle: 'Cancel'
            })) {
                await this.editor.closeAllEditorGroups();
                await this.resources.refresh();
            }
        } catch (error) {
            this.notification.logError(error);
        }
    }

    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will save the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param e the dropped data.
     */
    async onDropped(e: DndData) {
        const srcPath = e.src || e.file.name;
        const dstPath = e.dst;
        if (srcPath === dstPath) {
            return;
        }
        const srcName = Paths.basename(srcPath);
        const src = this.resources.find(srcPath);
        const dst = this.resources.find(dstPath);
        if (src && src.parent === e.dst) {
            return;
        }
        const options = {
            title: `Are you sure you want to move '${srcName}' to '${dst.name}'?`,
            okTitle: 'Move',
            noTitle: 'Cancel'
        };
        try {
            const confirmed = await this.notification.confirmAsync(options);
            if (confirmed) {
                await this.resources.move(src || e.file , dst);
                this.tree.expandNode(dst);
            }
        } catch (error) {
            this.notification.logError(error);
        }
    }

    /**
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param e the node.
     */
    private async onEdited(e: INodeEditEvent<IResource>) {
        const { node, event, editType } = e;
        event.stopPropagation();
        if (event.keyCode === 27) { // escape key
            this.tree.endEdit();
        } else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
            if (!e.editedText) {
                this.tree.endEdit();
                return;
            }
            try {
                if (editType === 'rename') {
                    await this.resources.rename(node, e.editedText);
                    this.tree.endEdit();
                } else {
                    node.name = e.editedText;
                    await this.resources.create(node);
                    this.tree.endEdit();
                }
            } catch (error) {
                this.tree.endEdit();
                this.notification.logError(error);
            }
        }
    }

    private async onClicked(e: IResource) {
        if (e.type === ResourceTypes.File) {
            await this.opener.open(e.path);
        }
        this.editor.activeResource.next(e);
    }

    private async optionDelete(node: IResource, event: Event) {
        this.preventEvent(event);

        try {
            const selections = this.resources.removeDuplicates(this.tree.selections());
            const size = selections.length;
            if (size > 1) {
                let title = `Are you sure you want to delete the following ${size} files?`;
                if (selections.every(s => s.type === ResourceTypes.Folder)) {
                    title = `Are you sure you want to delete the following ${size} directories and their contents?`;
                } else if (selections.some(s => s.type === ResourceTypes.Folder)) {
                    title = `Are you sure you want to delete the following ${size} files/directories and their contents?`;
                }
                const message = selections.map(s => s.name).join('<br/>');
                const confirmed = await this.notification.confirmAsync({
                    title,
                    message,
                    okTitle: 'Delete',
                    noTitle: 'Cancel'
                });
                if (confirmed) {
                    await this.resources.deleteAll(selections);
                }
            } else {
                let title = `Are you sure you want to delete '${node.name}'?`;
                if (node.type === ResourceTypes.Folder) {
                    title = `Are you sure you want to delete '${node.name}' and its contents?`;
                }
                const confirmed = await this.notification.confirmAsync({
                    title,
                    okTitle: 'Delete',
                    noTitle: 'Cancel'
                });
                if (confirmed) {
                    await this.resources.delete(node);
                }
            }
        } catch (error) {
            this.notification.logError(error);
        }

    }

    private optionDownload(node: IResource, event: Event) {
        this.preventEvent(event);
        this.opener.openURL(this.resources.getDownloadURL(node));
    }

    private optionAddFile(node: IResource, event: Event) {
        this.preventEvent(event);
        this.tree.addNode(node, createResource(node, ResourceTypes.File));
    }

    private optionAddFolder(node: IResource, event: Event) {
        this.preventEvent(event);
        this.tree.addNode(node, createResource(node, ResourceTypes.Folder));
    }

    private optionLoad(node: IResource, event: Event) {
        this.preventEvent(event);
        this.resources.load(node).then(response => {
            this.notification.logInfo(response);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private optionReload(node: IResource, event: Event) {
       this.preventEvent(event);
        const options: PrompOptions = {
            title: 'Reload Activity',
            message: 'ID of the activity which should be reloaded with this PLTP.'
                   + 'It should be the ID inside the URL used on your LTI consumer (Moodle, Blackboard, ...), '
                   + 'and not the URL in your address bar after clicking on said URL.<br><br>'
                   + '<strong>Caution: The order in which PL are included should stay the same, '
                   + 'as well as the total number of PL. May not work if the PLTP used to reload activity '
                   + 'is too different than the original one',
            fields: [
                { type: 'number', placeholder: 'Activity ID', required: true, value: 0 }
            ]
        };
        this.notification.promptAsync(options).then((data) => {
            if (data.fields) {
                this.resources.reload(node, data.fields[0].value).then((response => {
                    this.notification.logInfo(response);
                })).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }

    private optionRename(node: IResource, event: Event) {
        this.preventEvent(event);
        this.tree.renameNode(node);
    }

    private optionTest(node: IResource, event: Event) {
        this.preventEvent(event);
        this.opener.openURL(this.resources.getTestUrl(node));
    }

    private optionPath(node: IResource, event: Event) {
        this.preventEvent(event);
        this.editor.copyToClipboard(node.path);
        this.notification.snack('Copied to clipboard!', {
            duration: 3000
        });
    }

    private optionShare(node: IResource, event: Event) {
        this.preventEvent(event);
        this.editor.copyToClipboard(this.resources.getTestUrl(node));
        this.notification.snack('Copied to clipboard!', {
            duration: 3000
        });
    }

    private contextMenu(e: INodeContextMenuEvent<IResource>) {
        const { nodes, event } = e;
        this.menu.open({
            event,
            data: nodes[0],
            templateRef: this.contextMenuRef,
            containerRef: this.viewContainerRef,
        });
    }

    private optionCopy(nodes: IResource[]) {
        if (nodes.some(node => filters.isRoot(node))) {
            this.notification.error(`cannot copy a root directory`);
        } else {
            this.copiedNodes = nodes.slice();
            this.notification.snack(`copied ${nodes.length} resource(s)`, {
                duration: 3000
            });
        }
    }

    private async optionPaste(node: IResource) {
        try {
            if (this.copiedNodes && this.copiedNodes.length) {
                await this.resources.clone(this.copiedNodes, node);
                this.tree.expandNode(node);
            }
        } catch (error) {
            this.notification.logError(error);
        }
    }

    private optionFilter(e: ITreeFilterEvent<IResource>) {
        const { node, options, hiddens } = e;
        const { query, regex, pattern } = options;
        const consume = (n: IResource) => {
            let visible = false;
            if (regex) {
                if (pattern && n.path.match(pattern)) {
                    visible = true;
                }
            } else if (n.path.toLowerCase().includes(query)) {
                visible = true;
            }

            for (const child of n.children || []) {
                if (consume(child)) {
                    visible = true;
                }
            }
            if (!visible) {
                hiddens[n.path] = true;
            }
            return visible;
        };
        consume(node);
    }

    private preventEvent(event: Event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

}

export interface NodeAction {
    id?: string;
    icon?: string;
    label?: string;
    divider?: boolean;
    forHover?: boolean;
    forContextMenu?: boolean;
    enabled?: (node: IResource) => boolean;
    action?: (node: IResource, e: MouseEvent) => void;
}
