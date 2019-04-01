import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { DropData } from 'src/app/shared/directives/droppable.directive';
import { PrompOptions } from 'src/app/shared/components/prompt/prompt.component';

import { TaskService } from '../../shared/services/core/task.service';
import { OpenerService } from '../../shared/services/core/opener.service';
import { EditorService } from '../../shared/services/core/editor.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { basename } from 'src/app/shared/models/paths.model';
import { IResource, ResourceTypes, createResource, } from '../../shared/models/resource.model';
import { PLService } from '../../shared/services/core/pl.service';

import * as filters from '../../shared/models/filters.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExplorerComponent {

    private renaming: boolean;
    private creating: boolean;

    /** the tree resources */
    @Input()
    readonly items: IResource[];

    /** shows header element if sets to true */
    @Input()
    readonly showHeader: boolean;

    /** the dynamic options of the resources */
    readonly options = [];

    /** rename input value */
    newName: string;
    newResource: IResource;

    constructor(
        private readonly pl: PLService,
        private readonly task: TaskService,
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly notification: NotificationService,
        private readonly resources: ResourceService,
    ) {
        const that = this;
        this.items = this.resources.resources;
        this.newName = '';
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: (r: IResource, e: MouseEvent) => {
                that.optionTest(r, e);
            }},
            { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: (r: IResource, e: MouseEvent) => {
                that.optionLoad(r, e );
            }},
            { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: (r: IResource, e: MouseEvent) => {
                that.optionReload(r, e );
            }},
            { icon: 'far fa-file', label: 'New File', enabled: filters.canAddChild, action: (r: IResource, e: MouseEvent) => {
                that.optionAddFile(r, e);
            }},
            { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddChild, action: (r: IResource, e: MouseEvent) => {
                that.optionFolder(r, e );
            }},
            { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: (r: IResource, e: MouseEvent) => {
                that.optionRename(r, e );
            }},
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: (r: IResource, e: MouseEvent) => {
                that.optionDelete(r, e );
            }},
            { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.isReadOnly, action: function () { } },
        ];
    }

    /** Handles refresh button click by retrieving resources from the server. */
    async didTapRefresh() {
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
     * Gets a value indicating whether the resource is draggrable
     * @param resource the resource object.
     * 	@returns true only if the resource is not a root folder.
     */
    draggable(resource: IResource) {
        return !resource.opened && !filters.isRoot(resource) && resource.write;
    }

    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    droppable(resource: IResource) {
        return filters.isFolder(resource) && resource.write;
    }

    /**
     * Handles drag and drop event by asking a confirmation to the user then :
     * - If 'data.file' exists, the function will saved the file on the server to the directory 'data.dst'.
     * - If data.src exists, the function will move the resource 'data.src' to the directory 'data.dst'.
     * @param data the data shared using the dragNdrop move.
     */
    didDropData(data: DropData) {
        const srcPath = data.src || data.file.name;
        const dstPath = data.dst;
        const srcName = basename(srcPath);
        const src = this.resources.find(srcPath);
        const dst = this.resources.find(dstPath);
        if (src) {
            if (src.parent === data.dst) {
                return;
            }
            if (src.opened) {
                throw new Error('Cannot move an opened resource');
            }
        }
        const options = {
            title: `Are you sure you want to move '${srcName}' to '${dst.name}'?`,
            okTitle: 'Move',
            noTitle: 'Cancel'
        };
        this.notification.confirmAsync(options).then(confirmed => {
            if (confirmed) {
                this.resources.move(src || data.file , dst).catch(error => {
                    this.notification.logError(error);
                });
            }
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    /**
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param resource the resource object.
     * @param event KeyboardEvent or Focus event.
     */
    didEditingChanged(resource: IResource, event: any) {
        if (this.renaming || this.creating) {
            if (event.keyCode === 27) { // escape key
                if (this.renaming) {
                    resource.renaming = this.renaming = false;
                    this.newName = '';
                } else {
                    this.creating = false;
                    this.newResource = undefined;
                }
            } else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
                let promise: Promise<boolean>;
                if (this.renaming) {
                    promise = this.resources.rename(resource, this.newName);
                } else {
                    if (!resource.name && event.type === 'blur') {
                        this.endEdition(resource);
                        return;
                    }
                    promise = this.resources.create(resource);
                }
                promise.then(() => {
                    this.endEdition(resource);
                }).catch(error => {
                    this.endEdition(resource);
                    this.notification.error(error);
                });
            }
        }
    }

    /**
     * Emits resource selection event.
     * @param resource the resource object.
     * @param event the mouse event.
     */
    didTapOnResource(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        if (filters.isFolder(resource)) {
            resource.expanded = !resource.expanded;
            this.resources.selection = resource;
        } else {
            this.opener.open(resource.path);
        }
    }

    /**
     * Gets the font awesome class representing the resource
     *
     * @returns
     * - fas fa-folder | fas fa-folder-open If the resource is folder
     * - resource.icon otherwise.
     */
    icon(resource: IResource) {
        if (filters.isFolder(resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    }

    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    isSelection(resource: IResource) {
        return this.resources.isSelection(resource);
    }

    /** Used in the html template with *ngFor to keep track of the resource */
    trackByFn(_index: number, item: IResource) {
        return item.path;
    }


    private optionAddFile(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = createResource(resource, ResourceTypes.File);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    }

    private optionFolder(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = createResource(resource, ResourceTypes.Folder);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    }

    private optionDelete(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.notification.confirmAsync({
            title: 'Are you sure you want to delete \'' + resource.name + '\'?',
            okTitle: 'Delete',
            noTitle: 'Cancel'
        }).then(confirmed => {
            if (confirmed) {
                this.resources.delete(resource).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }

    private optionLoad(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.pl.load(resource).then(response => {
            this.notification.logInfo(response);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private optionReload(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
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

    private optionRename(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newName = resource.name;
        resource.renaming = this.renaming = true;
        resource.creating = this.creating = false;
    }

    private optionTest(resource: IResource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL('/filebrowser/option?name=test_pl&path=' + resource.path);
    }

    private endEdition(resource: IResource) {
        this.creating = this.renaming = resource.renaming = resource.creating = false;
        this.newName = '';
        this.newResource = undefined;
    }

}
