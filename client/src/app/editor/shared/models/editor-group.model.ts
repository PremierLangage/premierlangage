import { IResource } from './resource.model';
import { IEditor, INSTANTIATORS, IEditorAction, EditorTypes } from './editor.model';
import { EditorService, IEditorService } from '../services/core/editor.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IOpenOptions } from '../services/core/opener.service';

export interface IEditorGroup {

    id(): number;
    empty(): boolean;
    focus(focused: boolean): void;
    focused(): boolean;
    hidden(): boolean;
    isActive(resource: IResource): boolean;
    isChanged(resource: IResource): boolean;
    someResource(predicate: (resource: IResource) => boolean): boolean;
    someEditor(predicate: (editor: IEditor) => boolean): boolean;
    someAction(): boolean;
    somePreview(): boolean;

    open(resource: IResource, options?: IOpenOptions):  Promise<boolean>;

    save(tab: IResource): Promise<boolean>;
    saveAll():  Promise<boolean>;

    close(resource: IResource, confirm?: boolean): Promise<boolean>;
    close(resource: IResource, confirm?: boolean): Promise<boolean>;
    closeAll(confirm?: boolean): Promise<boolean>;
    closeSaved(): Promise<boolean>;

    findDocument(predicate: (resource: IResource) => boolean): IResource;
    findDocumentAt(index: number): IResource;

    removeDocument(resource: IResource): Promise<boolean>;
    removeIndex(index: number): Promise<boolean>;

    dispose(): Promise<boolean>;

    actions(): IEditorAction[];
    activeResource(): IResource;
    activeEditor(): IEditor;
    editorService(): IEditorService;
    activeEditorIs(type: string): boolean;

}

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

    hidden(): boolean {
        if (!this.somePreview()) {
            return false;
        }
        const groups = this._editorService.listGroups();
        return !groups.find(g => g.id() !== this.id() && g.isActive(this._activeResource));
    }

    isActive(resource: IResource): boolean {
        return this._activeResource.path === resource.path;
    }

    isChanged(resource: IResource): boolean {
        return resource.changed;
    }

    someResource(predicate: (resource: IResource) => boolean): boolean {
        return this.resources.some(predicate);
    }

    someEditor(predicate: (editor: IEditor) => boolean): boolean {
        return this.editors.some(predicate);
    }

    someAction(): boolean {
        return !this.empty() && !this.somePreview();
    }

    somePreview(): boolean {
        return this.someEditor(e => e.type() === EditorTypes.Preview);
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

        if (resource.meta.previewData) {
            if (this.resources.length === 0) {
                this.resources.push(resource);
            } else {
                this.resources[0] = resource;
            }
        } else if (!this.someResource(e => e.path === resource.path)) {
            this.resources.push(resource);
        }
        return await this._editorService.updateGroup(this);
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
            return await this.removeDocument(resource);
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

    async removeDocument(resource: IResource): Promise<boolean> {
        let index = this.resources.findIndex(e => e.path === resource.path);
        if (index === -1) {
            throw new Error(`${resource.name} is not a part of the group '${this.id()}'`);
        }

        this._activeResource = null;
        this.resources.splice(index, 1);
        resource.opened = this._editorService.findGroups(resource).length > 0;

        index = Math.max(0, index - 1);
        if (index < this.resources.length) {
            this._activeResource = this.resources[index];
        }

        if (this._activeResource) {
            this.open(this._activeResource);
        }

        if (this.empty()) {
            return await this.dispose();
        }

        return true;
    }

    async removeIndex(index: number): Promise<boolean> {
        return await this.removeDocument(this.resources[index]);
    }

    findDocument(predicate: (resource: IResource) => boolean): IResource {
        return this.resources.find(e => predicate(e));
    }

    findDocumentAt(index: number): IResource {
        return this.resources[index];
    }

    actions(): IEditorAction[] {
        return this._actions || (this._actions = []);
    }

    dispose(): Promise<boolean> {
        return this._editorService.removeGroup(this);
    }

    activeResource(): IResource {
        return this._activeResource;
    }

    activeEditor(): IEditor {
        return this._activeEditor;
    }

    activeEditorIs(type: EditorTypes): boolean {
        return this.activeEditor().type() === type;
    }

    editorService(): IEditorService {
        return this._editorService;
    }

    //#region USED INSIDE THE WORKSPACE TEMPLATE
    private didTapOnResource(resource: IResource) {
        if (this.somePreview()) { // skip click from html template for preview editors
            return true;
        }
        if (this._activeResource.path === resource.path) {
            return true;
        }
        this.open(resource);
    }

    private drop(event: CdkDragDrop<IResource[]>) {
        const source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        const target = this;
        if (this.somePreview() || source.somePreview()) {
            return;
        }
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const movedTab = source.findDocumentAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    }

    private trackResource(index: number, resource: IResource) {
        return resource.path;
    }

    private trackEditor(index: number, editor: IEditor) {
        return editor.id();
    }
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE

    private createEditor(resource: IResource): IEditor {
        for (const item of INSTANTIATORS) {
            if (item.condition(resource)) {
                const editor = item.create(this, resource);
                this.editors.push(editor);
                return editor;
            }
        }
        return null;
    }

    private closeGuard(resource: IResource): boolean {
        if (this.somePreview()) {
            return false;
        }
        return resource.changed && this._editorService.findGroups(resource).length === 1;
    }

    private confirm(options: ConfirmOptions): Promise<boolean> {
        return this._editorService.confirm(options);
    }
}
