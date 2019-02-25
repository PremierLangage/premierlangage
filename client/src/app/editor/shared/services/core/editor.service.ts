import { Subject, Subscription } from 'rxjs';
import { IEditor, CodeEditor } from '../../models/editor.model';
import { IEditorGroup, EditorGroup } from '../../models/editor-group.model';
import { Resource } from '../../models/resource.model';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { IEditorTab } from './opener.service';
import { asTab, compareTab, openAsPreview } from '../../models/filters.model';

export interface IEditorService {
    listGroups(): IEditorGroup[];
    findGroup(id: number): IEditorGroup;
    addGroup(group: IEditorGroup): Promise<boolean>;
    removeGroup(group: IEditorGroup): Promise<boolean>;
    confirm(options: ConfirmOptions): Promise<boolean>;
    openContent(resource: Resource): Promise<boolean>;
    saveContent(resource: Resource): Promise<boolean>;
    focus(group: IEditorGroup): void;
    open(tab: IEditorTab, sideBySide?: boolean): Promise<boolean>;
    previewResource(resource: Resource): Promise<Resource>;
    subscribeChange(completion: (groups: IEditorGroup[]) => void): Subscription;
}

@Injectable()
export abstract class AbstractEditorService implements IEditorService {

    private readonly groups: { [groupId: number]: IEditorGroup; } = Object.create(null);
    private previewGroup: IEditorGroup;

    readonly onGroupChanged: Subject<any> = new Subject();

    constructor() {
    }

    async addGroup(group: IEditorGroup): Promise<boolean> {
        this.groups[group.id()] = group;
        if (this.previewGroup) {
            this.previewGroup.closeAll();
        }
        this.previewGroup = group.onlyPreview() ? group : undefined;
        if (this.previewGroup) {
            if (this.previewGroup.id() !== group.id()) {
                this.previewGroup.closeAll();
            }
        } else {
            if (openAsPreview(group.activeTab())) {
                await this.open(asTab(group.activeTab().resource, true), true);
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

        if (group.hasFocus()) {
            const newFocused = this.listGroups().find(g => g.id() !== group.id());
            if (newFocused) {
                await this.addGroup(newFocused);
            }
        }

        delete this.groups[group.id()];
        this.onGroupChanged.next(this.listGroups());
        return true;
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

    subscribeChange(completion: (groups: IEditorGroup[]) => void): Subscription {
       return this.onGroupChanged.subscribe(completion);
    }

    abstract confirm(options: ConfirmOptions): Promise<boolean>;
    abstract open(tab: IEditorTab, sideBySide?: boolean): Promise<boolean>;
    abstract openContent(resource: Resource): Promise<boolean>;
    abstract saveContent(resource: Resource): Promise<boolean>;
    abstract previewResource(resource: Resource): Promise<Resource>;
}

@Injectable({
    providedIn: 'root'
})
export class EditorService extends AbstractEditorService {

    constructor(readonly resourceService: ResourceService, readonly notification: NotificationService) {
        super();
    }

    open(tab: IEditorTab, sideBySide?: boolean): Promise<boolean> {
        let group: IEditorGroup;
        const groups = this.listGroups();
        if (sideBySide || tab.preview) {
            // tslint:disable-next-line: max-line-length
            group = tab.preview ? (groups.find(g => g.onlyPreview()) || new EditorGroup(this)) : new EditorGroup(this);
        } else {
            group =     groups.find(g => g.someTab(t => t.resource.path === tab.resource.path))
                    ||  groups.find(g => g.hasFocus() && !g.onlyPreview())
                    ||  groups.find(g => !g.onlyPreview()) || new EditorGroup(this);
        }
        return group.open(tab).catch(error => {
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
            this.open(asTab(resource));
            return preview;
        }).catch(error => {
            this.notification.logError(error);
            return null;
        });
    }

}
