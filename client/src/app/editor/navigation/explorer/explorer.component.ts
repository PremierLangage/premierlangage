import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { Resource } from '../../models/resource.model';
import { TaskService } from '../../services/task.service';
import { LoggingService } from '../../services/logging.service';
import { ResourceService } from '../../services/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PrompOptions } from 'src/app/shared/components/prompt/prompt.component';
import { DropData } from 'src/app/shared/directives/droppable.directive';
import * as utils from '../../editor.utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExplorerComponent {

    private skipNextBlurEvent: boolean;

    /** the tree resources */
    @Input()
    readonly resources: Resource[];

    /** shows header element if sets to true */
    @Input()
    readonly showHeader: boolean;

    /** the dynamic options of the resources */
    readonly options = [];

    constructor(
        private readonly task: TaskService,
        private readonly logging: LoggingService,
        private readonly resource: ResourceService,
        private readonly notification: NotificationService,
    ) {
        const that = this;
        this.resources = this.resource.resources;
        this.options = [
            { icon: 'fas fa-check', label: 'Test', enabled: utils.canBeTested, action: (r: Resource, e: MouseEvent) => {
                that.optionTest(r, e);
            }},
            { icon: 'fas fa-play', label: 'Load', enabled: utils.canBeLoaded, action: (r: Resource, e: MouseEvent) => {
                that.optionLoad(r, e );
            }},
            { icon: 'fas fa-sync', label: 'Reload', enabled: utils.canBeReloaded, action: (r: Resource, e: MouseEvent) => {
                that.optionReload(r, e );
            }},
            { icon: 'far fa-file', label: 'New File', enabled: utils.canAddFile, action: (r: Resource, e: MouseEvent) => {
                that.optionAddFile(r, e);
            }},
            { icon: 'far fa-folder', label: 'New Folder', enabled: utils.canAddFile, action: (r: Resource, e: MouseEvent) => {
                that.optionFolder(r, e );
            }},
            { icon: 'far fa-edit', label: 'Rename', enabled: utils.canBeRenamed, action: (r: Resource, e: MouseEvent) => {
                that.optionRename(r, e );
            }},
            { icon: 'far fa-trash-alt', label: 'Delete', enabled: utils.canBeDeleted, action: (r: Resource, e: MouseEvent) => {
                that.optionDelete(r, e );
            }},
            { icon: 'fas fa-lock', label: 'Read Only', enabled: utils.readonly, action: function () { } },
        ];
    }

    /** Handles refresh button click by retrieving resources from the server. */
    didTapRefresh() {
        this.notification.confirmAsync({ title: 'You will lose any unsaved changes after this. Are you sure ?'}).then(confirmed => {
            if (confirmed) {
                this.resource.refresh().catch(error => {
                    this.logging.error(error);
                });
            }
        });
    }

    /**
     * Gets a value indicating whether the resource is draggrable
     * @param resource the resource object.
     * 	@returns true only if the resource is not a root folder.
     */
    draggable(resource: Resource) {
        return !utils.isRoot(resource) && resource.write;
    }

    /**
     * Gets a value indicating a resource is droppable into the given 'resource'
     * @param resource the resource object.
     * 	@returns true only if the resource is folder.
     */
    droppable(resource: Resource) {
        return utils.isFolder(resource) && resource.write;
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
        const srcName = utils.basename(srcPath);
        const src = this.resource.find(srcPath);
        const dst = this.resource.find(dstPath);
        if (src && src.parent === data.dst) {
            return;
        }
        const options = {
            title: 'Are you sure you want to move \'' + srcName + '\'?',
        };
        this.notification.confirmAsync(options).then(confirmed => {
            if (confirmed) {
                this.resource.move(src || data.file , dst).catch(error => {
                    this.logging.error(error);
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
        if (event.type === 'blur' && this.skipNextBlurEvent) {
            this.skipNextBlurEvent = false;
            return;
        }
        if (event.keyCode === 27) { // escape key
            this.skipNextBlurEvent = true;
            if (resource.editing) {
                this.resource.cancelOrRemove(resource);
            } else {
                this.optionDelete(resource, event);
            }
        } else if (event.type === 'blur' || event.keyCode === 13) { // focus losed or enter key
            this.skipNextBlurEvent = true;
            // TODO not make server call if name is not modified
            this.resource.createOrRename(resource).then(() => {
                this.didTapOnResource(resource, event);
            }).catch(error => {
                this.logging.error(error);
            });
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
        this.task.emitSelectEvent(resource);
    }

    /**
     * Gets the font awesome class representing the resource
     *
     * @returns
     * - fas fa-folder | fas fa-folder-open If the resource is folder
     * - resource.icon otherwise.
     */
    icon(resource: Resource) {
        if (utils.isFolder(resource)) {
            return resource.expanded ? 'fas fa-folder-open' : 'fas fa-folder';
        }
        return resource.icon;
    }

    /**
     * Gets a value indicating whether the resource is the selected one in the explorer.
     * @param resource the resource object.
     */
    isSelection(resource: Resource) {
        return this.resource.isSelection(resource);
    }

    /**
     * Gets a value indicating whether a task is running in the editor.
     */
    runningTask() {
        return this.task.running;
    }

    /** Used in the html template with *ngFor to keep track of the resource */
    trackByFn(_index: number, item: Resource) {
        return item.path;
    }


    private optionAddFile(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.resource.addFile(resource);
    }

    private optionFolder(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.resource.addFolder(resource);
    }

    private optionDelete(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.notification.confirmAsync({
            title: 'Are you sure you want to delete \'' + resource.name + '\'?',
        }).then(confirmed => {
            if (confirmed) {
                this.resource.delete(resource).catch(error => {
                    this.logging.error(error);
                });
            }
        });
    }

    private optionLoad(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.resource.loadPLTP(resource).then(response => {
            this.logging.info(response);
        }).catch(error => {
            this.logging.error(error);
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
                this.resource.reloadPLTP(resource, data.fields[0].value).then((response => {
                    this.logging.info(response);
                })).catch(error => {
                    this.logging.error(error);
                });
            }
        });
    }

    private optionRename(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        resource.editing = true;
        resource.nameBeforeEdition = resource.name;
        resource.parentRef = this.resource.find(resource.parent);
    }

    private optionTest(resource: Resource, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        window.open('/filebrowser/option?name=test_pl&path=' + resource.path, '_blank');
    }

}
