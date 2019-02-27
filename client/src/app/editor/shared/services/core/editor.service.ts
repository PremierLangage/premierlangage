import { Subject, Subscription } from 'rxjs';
import { IEditor, CodeEditor, openAsPreview } from '../../models/editor.model';
import { IEditorGroup, EditorGroup } from '../../models/editor-group.model';
import { Resource } from '../../models/resource.model';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { IEditorDocument } from './opener.service';
import { asDocument, compareDocument, compareGroup } from '../../models/filters.model';

export interface IEditorService {
    /**
     * Opens the document with the right editor.
     * @param document The document
     * @pram sideBySide Open the document in a new group
     * @returns true if the document is opened false otherwise
     */
    open(document: IEditorDocument, sideBySide?: boolean): Promise<boolean>;

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
     * Finds all the groups whichs contains the document.
     * @param document the document
     * @returns an array of editor groups
     */
    findGroups(document: IEditorDocument): IEditorGroup[];

    /**
     * Refreshs the editor group.
     * - focus 'group' if it's not a preview group.
     * - open the preview group with the active document of 'group' should be previewed.
     * - close the preview group if the active document of 'group' is not a previewed document.
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
     * Loads the content of the resource.
     * @param resource the resource
     */
    openContent(resource: Resource): Promise<boolean>;

    /**
     * Saves the content of the resource.
     * @param resource the resource
     */
    saveContent(resource: Resource): Promise<boolean>;

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
     * Focus the editor group and unfocus all the others.
     * @param group the editor group
     */
    focus(group: IEditorGroup): void;

    /**
     * Loads the preview of the resource in the preview group.
     * @param resource the resource to preview.
     */
    previewResource(resource: Resource): Promise<Resource>;

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

    findGroups(document: IEditorDocument): IEditorGroup[] {
        return this.listGroups().filter(group => {
            return group.someDocument(item => compareDocument(document, item));
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
            if (openAsPreview(group.activeDocument())) { // open the preview of the document in a side group
                if (!await this.open(asDocument(group.activeDocument().resource, true))) {
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
    abstract open(document: IEditorDocument, sideBySide?: boolean): Promise<boolean>;
    abstract openContent(resource: Resource): Promise<boolean>;
    abstract saveContent(resource: Resource): Promise<boolean>;
    abstract previewResource(resource: Resource): Promise<Resource>;
}

/** Concretes implementation of IEditorService interface */
@Injectable({
    providedIn: 'root'
})
export class EditorService extends AbstractEditorService {

    constructor(readonly resourceService: ResourceService, readonly notification: NotificationService) {
        super();
    }

    open(document: IEditorDocument, sideBySide?: boolean): Promise<boolean> {
        let group: IEditorGroup;
        let groups = this.listGroups();
        if (sideBySide || document.preview) {
            group = document.preview ? (groups.find(g => g.somePreview()) || new EditorGroup(this)) : new EditorGroup(this);
        } else {
            groups = groups.filter(g => !g.somePreview()); // remove preview group
            // tslint:disable-next-line: max-line-length
            group =     groups.find(g => g.focused() && g.someDocument(t => compareDocument(t, document))) // find focused that contains the tab
                    ||  groups.find(g => g.focused()) // find focused
                    ||  groups.find(_ => true) || new EditorGroup(this); // find any or create new group
        }
        return group.open(document).catch(error => {
            this.notification.logError(error);
            return false;
        });
    }

    confirm(options: ConfirmOptions): Promise<boolean> {
        return this.notification.confirmAsync(options);
    }

    openContent(resource: Resource): Promise<boolean> {
        return this.resourceService.open(resource);
    }

    saveContent(resource: Resource): Promise<boolean> {
        return this.resourceService.save(resource);
    }

    previewResource(resource: Resource): Promise<Resource> {
        const preview = { ...resource };
        return this.resourceService.preview(preview).then(() => {
            this.open(asDocument(resource));
            return preview;
        }).catch(error => {
            this.notification.logError(error);
            return null;
        });
    }

}
