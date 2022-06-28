import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { NotificationService } from 'src/app/core/notification.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { EditorGroup, IEditorGroup } from '../models/editor-groups.model';
import { compareGroup } from '../models/filters.model';
import { IResource } from '../models/resources.model';
import { IOpenOptions } from './opener.service';
import { ResourceService } from './resource.service';
import { IEditor } from '../models/editors.model';
import { Contracts } from 'src/app/shared/utils/contracts';

export interface IEditorService {

    /** Emitted when a resource is saved. */
    readonly onDidSave: Subject<IResource>;

    /** Emitted before the user leave the editor. */
    readonly onDidBeforeLeave: Subject<void>;

    /** Emitted when the active editor change */
    readonly onDidActiveEditorChange: Subject<IEditor>;

    /** Emitted when the active editor group change */
    readonly onDidActiveEditorGroupChange: Subject<IEditorGroup>;

    /** List of editor groups. */
    readonly editorGroups: BehaviorSubject<IEditorGroup[]>;

    /** Current active resource (last click|focused). */
    readonly activeResource: BehaviorSubject<IResource>;

    /** Current active resource (last click|focused). */
    readonly activeEditor: BehaviorSubject<IEditor>;

    /** Current active editor group */
    readonly activeEditorGroup: BehaviorSubject<IEditorGroup>;

    /**
     * Invokes `action` each time the method `fire` is called with `event`.
     * @param event the event name.
     * @param action the callback action.
     * @returns A Subscription object.
     */
    on(event: string, action: (data?: any) => void | Promise<void>): Subscription;

    /**
     * Emits new value from the observable identified by `event`.
     * @param event the observable.
     * @param data optional data.
     */
    fire(event: string, data?: any): void;

    /**
     * Disposes `subscription` when the editor is closed.
     * @param subscription the subscription object
     */
    subscribe(subscription: Subscription): void;

    /**
     * Disposes all subscriptions registered by calling the `subscribe` method.
     */
    unsubscribeAll(): void;

    /** Copy `data` into system clipboard */
    copyToClipboard(data: string): void;

    /**
     * Finds the group with the given id.
     * @param id the id of the group
     * @returns the group or undefined.
     */
    findGroupById(id: number): IEditorGroup;

    /**
     * Finds the groups containing the given `resource`.
     * @param resource the resource.
     * @returns an array of editor groups.
     */
    findGroupsContaining(resource: IResource): IEditorGroup[];

    /**
     * Finds all the groups whichs meets the predicate.
     * @param predicate the predicate to test
     * @returns an array of editor groups
     */
    findGroupsPredicate(predicate: (group: IEditorGroup) => boolean): IEditorGroup[];

    /**
     * Sets `group` as the new active the editor group.
     * @param group the group
     */
    focusGroup(group: IEditorGroup): Promise<void>;

    /**
     * Disposes the editor group and focus a random group.
     * @param group the group
     */
    disposeGroup(group: IEditorGroup): Promise<void>;

    /**
     * Closes all the groups
     */
    closeAllEditorGroups(): Promise<void>;

    /**
     * Closes the current preview group.
     */
    closeActivePreviewGroup(): Promise<void>;

    /**
     * Opens a confirm dialog.
     * @param options confirm options.
     * @returns A promise that resolves with a value indicating whether the confirm
     * button is clicked.
     */
    confirm(options: ConfirmOptions): Promise<boolean>;

    /**
     * Opens the resource with the right editor.
     * @param resource the resource to open.
     * @param options open options.
     */
    open(resource: IResource, options: IOpenOptions): Promise<void>;

    /**
     * Closes the resource.
     * @param resource the resource to close.
     */
    close(resource: IResource): Promise<void>;

    /**
     * Saves the content of the resource.
     * @param resource the resource
     */
    save(resource: IResource): Promise<void>;

}

export abstract class AbstractEditorService implements IEditorService {

    private readonly subjects: {[k: string]: Subject<any>} = {};
    private readonly subscriptions: Subscription[] = [];
    private readonly groups: { [groupId: number]: IEditorGroup; } = {};

    private activePreviewGroup: IEditorGroup;

    readonly onDidSave = new Subject<IResource>();
    readonly onDidBeforeLeave = new Subject<void>();
    readonly onDidActiveEditorChange = new Subject<IEditor>();
    readonly onDidActiveEditorGroupChange = new Subject<IEditorGroup>();

    readonly editorGroups = new BehaviorSubject<IEditorGroup[]>([]);
    readonly activeEditor: BehaviorSubject<IEditor> = new BehaviorSubject(null);
    readonly activeResource: BehaviorSubject<IResource> = new BehaviorSubject(null);
    readonly activeEditorGroup: BehaviorSubject<IEditorGroup> = new BehaviorSubject(null);

    on(event: string, action: (data?: any) => void | Promise<void>): Subscription {
        const subject =  this.subjects[event] || (this.subjects[event] = new Subject());
        return subject.subscribe(e => {
            action(e);
        });
    }

    fire(event: string, data?: any): void {
        const subject = this.subjects[event];
        if (subject) {
            subject.next(data);
        } else {
            console.log(`event ${event} is not registered`);
        }
    }

    subscribe(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    unsubscribeAll(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    copyToClipboard(data: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = data;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    findGroupById(id: number): IEditorGroup {
        return this.groups[id];
    }

    findGroupsContaining(resource: IResource): IEditorGroup[] {
        return this.findGroupsPredicate(group => {
            return group.someResource(item => item.path === resource.path);
        });
    }

    findGroupsPredicate(predicate: (group: IEditorGroup) => boolean): IEditorGroup[] {
        return this.listGroups().filter(predicate);
    }

    async closeAllEditorGroups(): Promise<void> {
        let groups = this.listGroups();
        while (groups.length !== 0) {
            await groups[0].closeAll();
            groups = this.listGroups();
        }
        this.editorGroups.next([]);
    }

    async closeActivePreviewGroup(): Promise<void> {
        if (this.activePreviewGroup) {
            await this.activePreviewGroup.closeAll();
            this.activePreviewGroup = null;
        }
    }

    async focusGroup(group: IEditorGroup): Promise<void> {
        await this.closeActivePreviewGroup();

        const active = group.activeResource;
        if (active) {
            this.activeResource.next(active);
            if (group.isPreviewGroup()) {
                this.activePreviewGroup = group;
            } else if (active.meta && active.meta.previewData) {
                await this.open(active, {
                    openToSide: true
                });
            }
        }
        this.groups[group.id] = group;
        if (!group.isPreviewGroup()) {
            this.listGroups().forEach(item => {
                item.focus(false);
            });
            group.focus(true);
        }
        this.editorGroups.next(this.listGroups());
    }

    async disposeGroup(group: IEditorGroup): Promise<void> {
        Contracts.assert(!!this.findGroupById(group.id), `EditorGroup '${group.id}' is not found`);

        this.activeEditor.next(null);
        this.activeResource.next(null);
        this.activeEditorGroup.next(null);

        if (group.focused()) {
            const next = this.listGroups().find(g => !compareGroup(g, group));
            if (next) {
                await this.focusGroup(next);
            }
        }

        delete this.groups[group.id];

        this.editorGroups.next(this.listGroups());
    }

    private listGroups(): IEditorGroup[] {
        return Object.keys(this.groups).map(id => this.groups[id]);
    }

    abstract open(resource: IResource, options: IOpenOptions): Promise<void>;
    abstract close(resource: IResource): Promise<void>;
    abstract confirm(options: ConfirmOptions): Promise<boolean>;
    abstract save(resource: IResource): Promise<void>;
}

/**
 * Concretes implementation of IEditorService interface
 */
@Injectable({ providedIn: 'root' })
export class EditorService extends AbstractEditorService {

    constructor(
        readonly resources: ResourceService,
        readonly notification: NotificationService
    ) {
        super();
    }

    async open(resource: IResource, options?: IOpenOptions): Promise<void> {
        try {
            if (!await this.resources.open(resource)) {
                return Promise.reject(new Error(`Unable to open '${resource.path}': resource content not found`));
            }
            let group: IEditorGroup;
            let groups = this.editorGroups.value;
            options = options || {};
            if (options.openToSide) {
                group = new EditorGroup(this);
            } else {
                groups = groups.filter(g => !g.isPreviewGroup()); // remove preview group
                // tslint:disable-next-line: max-line-length
                group =     groups.find(g => g.focused() && g.someResource(r => r.path === resource.path)) // find focused that contains the resource
                        ||  groups.find(g => g.focused()) // find focused
                        ||  groups.find(_ => true) || new EditorGroup(this); // find any or create new group
            }
            await group.open(resource, options);
            resource.opened = true;
        } catch (error) {
            this.notification.logError(error);
        }
    }

    async close(resource: IResource): Promise<void> {
        const groups = this.findGroupsContaining(resource);
        if (groups.length) {
            for (const group of groups) {
                await group.close(resource, false);
            }
        } else {
            await this.closeActivePreviewGroup();
            resource.opened = this.findGroupsContaining(resource).length > 0;
            resource.changed = false;
            resource.content = null;
            resource.meta = null;
        }
    }

    async confirm(options: ConfirmOptions): Promise<boolean> {
        return this.notification.confirmAsync(options);
    }

    async save(resource: IResource): Promise<void> {
        await this.resources.save(resource);
        this.onDidSave.next(resource);
    }

}
