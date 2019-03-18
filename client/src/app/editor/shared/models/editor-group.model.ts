import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IResource } from './resource.model';
import { IEditor, INSTANTIATORS, IEditorAction, EditorTypes } from './editor.model';
import { IOpenOptions } from '../services/core/opener.service';
import { EditorService, IEditorService } from '../services/core/editor.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';

/** Representation of an editor group in the workspace */
export interface IEditorGroup {

    /** Gets the id of the group */
    id(): number;

    /** Gets a value indicating whether the group is empty */
    empty(): boolean;

    /** focus the group */
    focus(focused: boolean): void;

    /** Gets a value indicating whether the group is focused */
    focused(): boolean;

    /**
     * Checks if the given resource is the active one.
     * @param resource the resource to test
     */
    isActive(resource: IResource): boolean;

    /** Gets a value indicating whether the group is a preview group. */
    isPreviewGroup(): boolean;

    /** Gets a value indicating whether the group has an action. */
    hasAction(): boolean;

    /**
     * Checks whether there is any editor in the group that meets the predicate.
     * @param predicate the predicate to test.
     */
    someEditor(predicate: (editor: IEditor) => boolean): boolean;

    /**
     * Checks whether there is any resource in the group that meets the predicate.
     * @param predicate the predicate to test.
     */
    someResource(predicate: (resource: IResource) => boolean): boolean;

    /**
     * Checks whether the editor is in the group.
     * @param editor the editor
     */
    containsEditor(editor: IEditor): boolean;

    /**
     * Checks whether the resource is opened in the group.
     * @param resource the resource
     */
    containsResource(resource: IResource): boolean;

    /**
     * Opens the resource in the rights editor.
     * @param resource the resource to open.
     * @param options open options
     * @throws an error if there is no editor that can open the resource.
     * @returns A promise that resolves to true
     */
    open(resource: IResource, options?: IOpenOptions):  Promise<boolean>;

    /**
     * Saves the resource on the server.
     * @param resource the resource
     * @returns A promise that resolves to true
     */
    save(resource: IResource): Promise<boolean>;

    /** Saves all the resources of the group */
    saveAll():  Promise<boolean>;

    /**
     * Removes the resource from the group.
     * This method will resets the content of the resource if it has changed.
     * @param resource the resource
     * @param confirm shows a confirmation dialog box?
     * @returns A promise that resolves to true
     */
    close(resource: IResource, confirm?: boolean): Promise<boolean>;

    /**
     * Closes all the resources of the group.
     * @param confirm shows a confirmation dialog box?
     * @returns A promise that resolves to true
     */
    closeAll(confirm?: boolean): Promise<boolean>;

    /**
     * Closes the saved resources.
     * @returns A promise that resolves to true
     */
    closeSaved(): Promise<boolean>;

    /**
     * Finds the resource at the given index.
     * @param index the index to search
     */
    findResourceAt(index: number): IResource;

    /** Gets the actions to shown in the group */
    actions(): IEditorAction[];

    /** Gets the active resource in the group (can be undefined) */
    activeResource(): IResource;

    /** Gets the active resource in the group (can be undefined) */
    activeEditor(): IEditor;

    /** Gets the instance of EditorService class */
    editorService(): IEditorService;

    /**
     * Checks if the active editor is of the given type.
     * @param type the type to test
     */
    activeEditorIs(type: string): boolean;

}

/** Implementation of IEditorGroup interface */
export class EditorGroup implements IEditorGroup {

    private static COUNTER = 0;

    private readonly _id: number;
    private readonly editors: IEditor[] = [];
    private readonly _editorService: IEditorService;

    private resources: IResource[] = [];

    private _actions: IEditorAction[] = [];
    private _focused: boolean;
    private _activeEditor: IEditor;
    private _activeResource: IResource;

    constructor(editorService: IEditorService) {
        this._id = ++EditorGroup.COUNTER;
        this._editorService = editorService;
    }

    id() {
        return this._id;
    }

    empty(): boolean {
        return !this.resources.some(_ => true);
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    focused(): boolean {
        return this._focused;
    }

    isActive(resource: IResource): boolean {
        return this._activeResource && this._activeResource.path === resource.path;
    }

    hasAction(): boolean {
        return !this.empty() && !this.isPreviewGroup();
    }

    isPreviewGroup(): boolean {
        return this.someEditor(e => e.type() === EditorTypes.Preview);
    }

    someEditor(predicate: (editor: IEditor) => boolean): boolean {
        return this.editors.some(predicate);
    }

    someResource(predicate: (resource: IResource) => boolean): boolean {
        return this.resources.some(predicate);
    }

    containsEditor(editor: IEditor): boolean {
        return this.someEditor(e => e.id() === editor.id());
    }

    containsResource(resource: IResource): boolean {
        return this.someResource(r => r.path === resource.path);
    }


    async open(resource: IResource, options?: IOpenOptions): Promise<boolean> {
        const editor = this.editors.find(e => e.canOpen(resource)) || this.createEditor(resource);
        if (!editor) {
            throw new Error('The is no registered editor to open \'' + resource.path + '\'');
        }

        resource.opened = true;

        this._actions = editor.actions() || [];
        this._activeEditor = editor;
        this._activeResource = resource;
        this._activeEditor.open(resource, options);

        if (this.isPreviewGroup()) {
            if (this.resources.length === 0) {
                this.resources.push(resource);
            } else {
                this.resources[0] = resource;
            }
        } else if (!this.someResource(e => e.path === resource.path)) {
            this.resources.push(resource);
        }
        return await this._editorService.focusGroup(this);
    }

    async openSide(resource: IResource) {
        return this._editorService.open(resource, {
            openToSide: true
        });
    }

    async save(resource: IResource): Promise<boolean> {
        return this._editorService.saveContent(resource);
    }

    async saveAll(): Promise<boolean> {
        for (const resource of this.resources) {
            if (!await this.save(resource)) {
                return false;
            }
        }
        return true;
    }

    async close(resource: IResource, confirm?: boolean): Promise<boolean> {
        const changed = this.closeGuard(resource);
        const options: ConfirmOptions = {
            title: 'Do you want to close \'' + resource.name + '\'?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
            if (changed) {
                resource.content = resource.savedContent;
                resource.changed = false;
            }
            if (confirm) {
                resource.meta.previewData = undefined;
            }
            return await this.removeResource(resource);
        }
        return false;
    }

    async closeAll(confirm?: boolean): Promise<boolean> {
        const changed = this.someResource(tab => this.closeGuard(tab));
        const options = {
            title: 'Do you want to close the files ?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
            while (this.resources.length > 0) {
                if (!await this.close(this.resources[0], false)) {
                    return false;
                }
            }
        }
        return true;
    }

    async closeSaved(): Promise<boolean> {
        while (this.someResource(e => !e.changed)) {
            for (let i = 0; i < this.resources.length; i++) {
                if (!this.resources[i].changed) {
                    if (!await this.close(this.resources[i])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    findResource(predicate: (resource: IResource) => boolean): IResource {
        return this.resources.find(e => predicate(e));
    }

    findResourceAt(index: number): IResource {
        return this.resources[index];
    }

    actions(): IEditorAction[] {
        return this._actions || (this._actions = []);
    }

    activeResource(): IResource {
        return this._activeResource;
    }

    activeEditor(): IEditor {
        return this._activeEditor;
    }

    activeEditorIs(type: EditorTypes): boolean {
        return !!this._activeEditor && this._activeEditor.type() === type;
    }

    editorService(): IEditorService {
        return this._editorService;
    }

    //#region USED INSIDE THE WORKSPACE TEMPLATE

    private drop(event: CdkDragDrop<IResource[]>) {
        const source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        const target = this;
        if (this.isPreviewGroup() || source.isPreviewGroup()) {
            return;
        }
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const movedTab = source.findResourceAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    }

    private reopen(resource: IResource) {
        if (!this.isPreviewGroup()) {
            this.open(resource);
        }
    }

    private trackEditor(index: number, editor: IEditor) {
        return editor.id();
    }

    private trackResource(index: number, resource: IResource) {
        return resource.path;
    }
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE

    private confirm(options: ConfirmOptions): Promise<boolean> {
        return this._editorService.confirm(options);
    }

    private closeGuard(resource: IResource): boolean {
        if (this.isPreviewGroup()) {
            return false;
        }
        return resource.changed && this._editorService.findGroupsPredicate(group => {
            return !group.isPreviewGroup() && group.containsResource(resource);
        }).length === 1;
    }

    private createEditor(resource: IResource): IEditor {
        for (const item of INSTANTIATORS) {
            if (item.condition(resource)) {
                const editor = item.create(this, resource);
                this.editors.push(editor);
                return editor;
            }
        }
        return undefined;
    }

    private async removeResource(resource: IResource): Promise<boolean> {
        const indexToRemove = this.resources.findIndex(e => e.path === resource.path);
        if (indexToRemove !== -1) {
            if (this.isActive(resource)) {
                this._activeEditor = undefined;
                this._activeResource = undefined;
            }
            this._actions = [];
            this.resources.splice(indexToRemove, 1);
            const newIndex = Math.max(0, indexToRemove - 1);
            if (!this._activeResource && newIndex < this.resources.length) {
                await this.open(this.resources[newIndex]);
            }
            resource.opened = this._editorService.findGroups(resource).length > 0;
            return this.empty() && await this._editorService.disposeGroup(this) || true;
        }
        return false;
    }
}
