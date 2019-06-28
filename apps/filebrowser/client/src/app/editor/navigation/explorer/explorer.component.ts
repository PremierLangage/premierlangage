import { Subscription } from 'rxjs';
import { Component, ViewEncapsulation, Input, OnInit, ViewChild, OnDestroy, ViewChildren } from '@angular/core';

import { basename } from 'src/app/shared/models/paths.model';
import { IResource, ResourceTypes, createResource, } from '../../shared/models/resource.model';
import * as filters from '../../shared/models/filters.model';

import { PLService } from '../../shared/services/core/pl.service';
import { OpenerService } from '../../shared/services/core/opener.service';
import { EditorService } from '../../shared/services/core/editor.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { DndData } from 'src/app/shared/directives/droppable.directive';
import { PrompOptions } from 'src/app/shared/components/prompt/prompt.component';
import { TreeComponent, Tree, Node, NodeEvent } from 'src/app/shared/components/tree/tree.component';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExplorerComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    /** the tree resources */
    @Input()
    set items(items: IResource[]) {
        this.nodes = items.map(item => this.transform(item));
    }

    /** shows header element if sets to true */
    @Input()
    readonly showHeader: boolean;

    /** retrieves the items from the server if sets to true */
    @Input()
    readonly remote: boolean;

    /** nodes options */
    readonly options = [];

    @ViewChild(TreeComponent)
    tree: TreeComponent;
    nodes: Tree[] = [];

    constructor(
        private readonly pl: PLService,
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
    ) {
        this.options = [
          { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: (n: Node, e: MouseEvent) => {
              this.optionTest(n, e);
          }},
          { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: (n: Node, e: MouseEvent) => {
              this.optionLoad(n, e );
          }},
          { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: (n: Node, e: MouseEvent) => {
              this.optionReload(n, e );
          }},
          { icon: 'far fa-file', label: 'New File', enabled: filters.canAddChild, action: (n: Node, e: MouseEvent) => {
              this.optionAddFile(n, e);
          }},
          { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddChild, action: (n: Node, e: MouseEvent) => {
              this.optionAddFolder(n, e );
          }},
          { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: (n: Node, e: MouseEvent) => {
              this.optionRename(n, e );
          }},
          { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: (n: Node, e: MouseEvent) => {
              this.optionDelete(n, e );
          }},
          { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.isReadOnly, action: () => { } },
          { icon: 'fas fa-download', label: 'Download', enabled: filters.isFolder, action: (n: Node, e: MouseEvent) => {
              this.optionDownload(n, e);
          }},
        ];
    }

    ngOnInit() {
        if (this.remote) {
            this.items = this.resources.getAll();
            this.subscription = this.resources.changed.subscribe(data => {
                this.items = data;
            });
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    /**
     * Gets a value indicating whether the resource is draggrable
     * @param node the node.
     * 	@returns true only if the resource is not a root folder.
     */
    draggable(node: Node) {
        const resource = node.data as IResource;
        return !resource.opened && !filters.isRoot(resource) && resource.write;
    }

    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param node the node.
     * 	@returns true only if the resource is a folder.
     */
    droppable(node: Node) {
        const resource = node.data as IResource;
        return filters.isFolder(resource) && resource.write;
    }

    /**
     * Handles refresh button click by retrieving resources from the server.
     */
    async didRefresh() {
        const confirm = this.resources.findPredicate(e => e.changed && e.opened);
        try {
            if (!confirm || await this.notification.confirmAsync({
                title: 'You will lose any unsaved changes after this. Are you sure ?',
                okTitle: 'Refresh',
                noTitle: 'Cancel'
            })) {
                if (await this.editor.closeAll()) {
                    await this.resources.refresh();
                } else {
                    this.notification.logError('an error occured while trying to close the editor groups');
                }
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
    async didEdit(e: NodeEvent) {
        const { node, event } = e;
        const resource = node.data as IResource;
        if (event.keyCode === 27) { // escape key
            this.tree.endEditing(false);
        } else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
            if (!node.name) {
                this.tree.endEditing(false);
                return;
            }
            try {
              if (node.isRenaming) {
                  await this.resources.rename(resource, node.name);
                  this.tree.endEditing(true);
              } else {
                  resource.name = node.name;
                  await this.resources.create(resource);
                  this.tree.endEditing(true);
              }
            } catch (error) {
                this.tree.endEditing(false);
                this.notification.logError(error);
            }
        }
    }

    /**
     * Handles click on a tree node.
     * @param e the node.
     */
    async didSelect(e: NodeEvent) {
        const resource = e.node.data as IResource;
        await this.opener.open(resource.path);
    }

    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will save the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param e the dropped data.
     */
    async didDropped(e: DndData) {
        const srcPath = e.src || e.file.name;
        const dstPath = e.dst;
        if (srcPath === dstPath) {
            return;
        }
        const srcName = basename(srcPath);
        const src = this.resources.find(srcPath);
        const dst = this.resources.find(dstPath);
        if (src && src.parent !== e.dst) {
            const options = {
                title: `Are you sure you want to move '${srcName}' to '${dst.name}'?`,
                okTitle: 'Move',
                noTitle: 'Cancel'
            };
            try {
                const confirmed = await this.notification.confirmAsync(options);
                if (confirmed) {
                    await this.resources.move(src || e.file , dst);
                }
            } catch (error) {
                this.notification.logError(error);
            }
        }
    }

    private async optionDelete(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        const resource = node.data as IResource;
        try {
          const confirmed = await this.notification.confirmAsync({
              title: 'Are you sure you want to delete \'' + resource.name + '\'?',
              okTitle: 'Delete',
              noTitle: 'Cancel'
          });
          if (confirmed) {
              await this.resources.delete(resource);
          }
        } catch (error) {
          this.notification.logError(error);
        }

    }

    private optionDownload(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL(`/filebrowser/option?name=download_resource&path=${node.id}`);
    }

    private optionAddFile(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        const resource = node.data as IResource;
        this.tree.createNode(node, this.transform(createResource(resource, ResourceTypes.File)));
    }

    private optionAddFolder(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        const resource = node.data as IResource;
        this.tree.createNode(node, this.transform(createResource(resource, ResourceTypes.Folder)));
    }

    private optionLoad(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        const resource = node.data as IResource;
        this.pl.load(resource).then(response => {
            this.notification.logInfo(response);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private optionReload(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        const resource = node.data as IResource;
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
                this.pl.reload(resource, data.fields[0].value).then((response => {
                    this.notification.logInfo(response);
                })).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }

    private optionRename(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        const resource = node.data as IResource;
        resource.renaming = true;
        resource.creating = false;
        this.tree.renameNode(node);
    }

    private optionTest(node: Node, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL('/filebrowser/option?name=test_pl&path=' + node.id);
    }

    private transform(item: IResource): Tree {
        const node: Tree = {
            data: item,
            id: item.path,
            name: item.name,
            isExpanded: item.expanded,
            children: (item.children || []).map(data => this.transform(data))
        };
        return node;
    }

}
