import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { PrompOptions } from 'src/app/shared/components/prompt/prompt.component';
import { DropData } from 'src/app/shared/directives/droppable.directive';

import { TaskService } from '../../shared/services/core/task.service';
import { OpenerService } from '../../shared/services/core/opener.service';
import { EditorService } from '../../shared/services/core/editor.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

import { asURI } from 'src/app//shared/models/paths.model';
import { basename } from 'src/app/shared/models/paths.model';
import { Resource, ResourceTypes, newResource, } from '../../shared/models/resource.model';
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
    readonly resources: Resource[];

    /** shows header element if sets to true */
    @Input()
    readonly showHeader: boolean;

    /** the dynamic options of the resources */
    readonly options = [];

    /** rename input value */
    newName: string;
    newResource: Resource;

    constructor(
        private readonly task: TaskService,
        private readonly opener: OpenerService,
        private readonly notification: NotificationService,
        private readonly resourceService: ResourceService,
        private readonly editorService: EditorService,
    ) {
        const that = this;
        this.resources = this.resourceService.resources;
        this.newName = '';
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: filters.canBeTested, action: (r: Resource, e: MouseEvent) => {
                that.optionTest(r, e);
            }},
            { icon: 'fas fa-play', label: 'Load', enabled: filters.canBeLoaded, action: (r: Resource, e: MouseEvent) => {
                that.optionLoad(r, e );
            }},
            { icon: 'fas fa-sync', label: 'Reload', enabled: filters.canBeReloaded, action: (r: Resource, e: MouseEvent) => {
                that.optionReload(r, e );
            }},
            { icon: 'far fa-file', label: 'New File', enabled: filters.canAddFile, action: (r: Resource, e: MouseEvent) => {
                that.optionAddFile(r, e);
            }},
            { icon: 'far fa-folder', label: 'New Folder', enabled: filters.canAddFile, action: (r: Resource, e: MouseEvent) => {
                that.optionFolder(r, e );
            }},
            { icon: 'far fa-edit', label: 'Rename', enabled: filters.canBeRenamed, action: (r: Resource, e: MouseEvent) => {
                that.optionRename(r, e );
            }},
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: filters.canBeDeleted, action: (r: Resource, e: MouseEvent) => {
                that.optionDelete(r, e );
            }},
            { icon: 'fas fa-lock', label: 'Read Only', enabled: filters.isReadonly, action: function () { } },
        ];
    }

    /** Handles refresh button click by retrieving resources from the server. */
    async didTapRefresh() {
        const confirm = this.resourceService.findPredicate(e => e.changed && e.opened);
        try {
            if (!confirm || await this.notification.confirmAsync({
                title: 'You will lose any unsaved changes after this. Are you sure ?',
                okTitle: 'Refresh',
                noTitle: 'Cancel'
            })) {
                if (await this.editorService.closeAll()) {
                    await this.resourceService.refresh();
                    this.notification.success('refreshed !');
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
    draggable(resource: Resource) {
        return !resource.opened && !filters.isRoot(resource) && resource.write;
    }

    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    droppable(resource: Resource) {
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
        const src = this.resourceService.find(srcPath);
        const dst = this.resourceService.find(dstPath);
        if (src) {
            if (src.parent === data.dst) {
                return;
            }
            if (src.opened) {
                throw new Error('Cannot move an opened resource');
            }
        }

        const options = {
            title: 'Are you sure you want to move \'' + srcName + '\'?',
            okTitle: 'Move',
            noTitle: 'Cancel'
        };
        this.notification.confirmAsync(options).then(confirmed => {
            if (confirmed) {
                this.resourceService.move(src || data.file , dst).catch(error => {
                    this.notification.error(error);
                });
            }
        });
    }

    /**
     * Handles focus and keyboard event while the resource is in edition mode.
     * - If the event is a escapse keydown event, the function will cancel the edition of the resource
     * - If the event is a blur of enter keydown event, the function will rename or creates the resource on the server.
     * @param resource the resource object.
     * @param event KeyboardEvent or Focus event.
     */
    didEditingChanged(resource: Resource, event: any) {
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
                    promise = this.resourceService.rename(resource, this.newName);
                } else {
                    promise = this.resourceService.create(resource);
                }
                promise.then(() => {
                    this.creating = this.renaming = false;
                    resource.renaming = resource.creating = false;
                    this.newName = '';
                    this.newResource = undefined;
                }).catch(error => {
                    this.creating = this.renaming = false;
                    resource.renaming = resource.creating = false;
                    this.newName = '';
                    this.newResource = undefined;
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
    didTapOnResource(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        if (filters.isFolder(resource)) {
            resource.expanded = !resource.expanded;
        } else {
            this.opener.openURI(asURI(resource));
        }
    }

    /**
     * Gets the font awesome class representing the resource
     *
     * @returns
     * - fas fa-folder | fas fa-folder-open If the resource is folder
     * - resource.icon otherwise.
     */
    icon(resource: Resource) {
        if (filters.isFolder(resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    }

    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    isSelection(resource: Resource) {
        return this.resourceService.isSelection(resource);
    }

    /** Used in the html template with *ngFor to keep track of the resource */
    trackByFn(_index: number, item: Resource) {
        return item.path;
    }


    private optionAddFile(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = newResource(resource, ResourceTypes.FILE);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    }

    private optionFolder(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newResource = newResource(resource, ResourceTypes.FOLDER);
        this.creating = this.newResource.creating = true;
        this.renaming = false;
    }

    private optionDelete(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.notification.confirmAsync({
            title: 'Are you sure you want to delete \'' + resource.name + '\'?',
            okTitle: 'Delete',
            noTitle: 'Cancel'
        }).then(confirmed => {
            if (confirmed) {
                this.resourceService.delete(resource).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }

    private optionLoad(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.resourceService.loadPLTP(resource).then(response => {
            this.notification.logInfo(response);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private optionReload(resource: Resource, event: MouseEvent) {
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
                this.resourceService.reloadPLTP(resource, data.fields[0].value).then((response => {
                    this.notification.logInfo(response);
                })).catch(error => {
                    this.notification.logError(error);
                });
            }
        });
    }

    private optionRename(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.newName = resource.name;
        resource.renaming = this.renaming = true;
        resource.creating = this.creating = false;
    }

    private optionTest(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.opener.openURL('/filebrowser/option?name=test_pl&path=' + resource.path);
    }

}
