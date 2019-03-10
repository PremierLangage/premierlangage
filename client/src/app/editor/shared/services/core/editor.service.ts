import { Subject, Subscription } from 'rxjs';
import { IEditor, CodeEditor, openAsPreview } from '../../models/editor.model';
import { IEditorGroup, EditorGroup } from '../../models/editor-group.model';
import { IResource } from '../../models/resource.model';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { compareGroup } from '../../models/filters.model';
import { IOpenOptions } from './opener.service';

export interface IEditorService {
    /**
     * Opens the resource with the right editor.
     * @param resource The resource
     * @pram options Open options
     * @returns true if the resource is opened false otherwise
     */
    open(resource: IResource, options: IOpenOptions): Promise<boolean>;

    /**
     * Gets an array of the opened editor groups.
    */
    listGroups(): IEditorGroup[];

    /**
     * Finds the group with the given id.
     * @param id the id of the group
     * @returns the group or undefined.
     */
    findGroup(id: number): IEditorGroup;

    /**
     * Finds all the groups whichs contains the resource.
     * @param resource the resource
     * @returns an array of editor groups
     */
    findGroups(resource: IResource): IEditorGroup[];

    /**
     * Refreshs the editor group.
     * - focus 'group' if it's not a preview group.
     * - open the preview group with the active resource of 'group' if needed.
     * - close the preview group if the active resource of 'group' is not a previewed resource.
     *
     * @param group the group
     */
    updateGroup(group: IEditorGroup): Promise<boolean>;

    /**
     * Disposes the editor group and focus a random group.
     * @param group the group
     */
    removeGroup(group: IEditorGroup): Promise<boolean>;

    /**
     * Saves the content of the resource.
     * @param resource the resource
     */
    saveContent(resource: IResource): Promise<boolean>;

    /**
     * Opens a confirm dialog
     * @param options dialog options
     */
    confirm(options: ConfirmOptions): Promise<boolean>;

    /**
     * Closes all the groups
     */
    closeAll(): Promise<boolean>;

    /**
     * Closes preview group
     */
    closePreview(): Promise<boolean>;

    /**
     * Focus the editor group and unfocus all the others.
     * @param group the editor group
     */
    focus(group: IEditorGroup): void;

    /**
     * Invokes 'completion' after each group change.
     * @param completion function to invoke.
     */
    subscribeChange(completion: (groups: IEditorGroup[]) => void): Subscription;
}

@Injectable()
export abstract class AbstractEditorService implements IEditorService {

    private readonly groups: { [groupId: number]: IEditorGroup; } = Object.create(null);

    /** the current preview group of the editor */
    private previewGroup: IEditorGroup;

    /** invoked each time a (focus | open | close) event is raised */
    readonly onGroupChanged: Subject<any> = new Subject();

    constructor() {
    }

    focus(group: IEditorGroup): void {
        this.listGroups().forEach(item => {
            item.focus(false);
        });
        group.focus(true);
    }

    listGroups(): IEditorGroup[] {
        return Object.keys(this.groups).map(id => this.groups[id]);
    }

    findGroup(id: number): IEditorGroup {
        return this.groups[id];
    }

    findGroups(resource: IResource): IEditorGroup[] {
        return this.listGroups().filter(group => {
            return group.someResource(item => item.path === resource.path);
        });
    }

    subscribeChange(completion: (groups: IEditorGroup[]) => void): Subscription {
        return this.onGroupChanged.subscribe(completion);
    }

    async closeAll(): Promise<boolean> {
        let groups = this.listGroups();
        while (groups.length !== 0) {
            if (!await groups[0].closeAll()) {
                return false;
            }
            groups = this.listGroups();
        }
        return true;
    }

    async closePreview(): Promise<boolean> {
        if (!this.previewGroup) {
            return Promise.resolve(true);
        }
        return this.previewGroup.closeAll();
    }

    async updateGroup(group: IEditorGroup): Promise<boolean> {
        this.groups[group.id()] = group;
        if (this.previewGroup) {
            this.previewGroup.closeAll();
        }
        if (this.previewGroup = group.somePreview() ? group : undefined) {
            if (!compareGroup(this.previewGroup, group)) {
                if (!await this.previewGroup.closeAll()) {
                    return false;
                }
            }
        } else {
            if (openAsPreview(group.activeResource())) { // open the preview of the resource in a side group
                if (!await this.open(group.activeResource(), {
                    openToSide: true
                })) {
                    return false;
                }
            }
            this.focus(group);
        }
        this.onGroupChanged.next(this.listGroups());
        return true;
    }

    async removeGroup(group: IEditorGroup): Promise<boolean> {
        if (!this.findGroup(group.id())) {
            throw new Error(`The group '${group.id()}' is not found`);
        }

        if (group.focused()) {
            const newFocused = this.listGroups().find(g => !compareGroup(g, group));
            if (newFocused) {
                await this.updateGroup(newFocused);
            }
        }

        delete this.groups[group.id()];
        this.onGroupChanged.next(this.listGroups());
        return true;
    }

    abstract confirm(options: ConfirmOptions): Promise<boolean>;
    abstract open(resource: IResource, options: IOpenOptions): Promise<boolean>;
    abstract saveContent(resource: IResource): Promise<boolean>;
}

/** Concretes implementation of IEditorService interface */
@Injectable({
    providedIn: 'root'
})
export class EditorService extends AbstractEditorService {

    constructor(readonly resources: ResourceService, readonly notification: NotificationService) {
        super();
        resources.renamed.subscribe(_ => {
            this.listGroups().forEach(group => group.open(group.activeResource()));
        });
        resources.deleted.subscribe(item => {
            this.findGroups(item).forEach(group => {
                group.close(item, false);
            });
        });
    }

    async open(resource: IResource, options?: IOpenOptions): Promise<boolean> {
        if (!await this.resources.open(resource)) {
            return Promise.reject(new Error(`Unable to open '${resource.path}': resource content not found`));
        }
        let group: IEditorGroup;
        let groups = this.listGroups();
        options = options || {};
        if (options.openToSide) {
            group = new EditorGroup(this);
        } else if (resource.meta.previewData) {
            group = groups.find(g => g.somePreview()) || new EditorGroup(this);
        } else {
            groups = groups.filter(g => !g.somePreview()); // remove preview group
            // tslint:disable-next-line: max-line-length
            group =     groups.find(g => g.focused() && g.someResource(r => r.path === resource.path)) // find focused that contains the resource
                    ||  groups.find(g => g.focused()) // find focused
                    ||  groups.find(_ => true) || new EditorGroup(this); // find any or create new group
        }
        return group.open(resource, options).catch(error => {
            this.notification.logError(error);
            return false;
        });
    }

    confirm(options: ConfirmOptions): Promise<boolean> {
        return this.notification.confirmAsync(options);
    }

    saveContent(resource: IResource): Promise<boolean> {
        return this.resources.save(resource);
    }

}
