import { Resource } from './resource.model';
import { IEditor, INSTANTIATORS, IEditorAction, PREVIEW_EDITOR } from './editor.model';
import { compareDocument } from './filters.model';
import { EditorService, IEditorService } from '../services/core/editor.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IEditorDocument } from '../services/core/opener.service';

export interface IEditorGroup {

    id(): number;
    empty(): boolean;
    focus(focused: boolean): void;
    focused(): boolean;
    hidden(): boolean;
    isActive(document: IEditorDocument): boolean;
    isChanged(document: IEditorDocument): boolean;
    someDocument(predicate: (document: IEditorDocument) => boolean): boolean;
    someEditor(predicate: (editor: IEditor) => boolean): boolean;
    someAction(): boolean;
    somePreview(): boolean;

    open(document: IEditorDocument, fromTemplate?: boolean):  Promise<boolean>;
    openSide(document: IEditorDocument):  Promise<boolean>;

    save(tab: IEditorDocument): Promise<boolean>;
    saveAll():  Promise<boolean>;

    close(document: IEditorDocument, confirm?: boolean): Promise<boolean>;
    close(document: IEditorDocument, confirm?: boolean): Promise<boolean>;
    closeAll(confirm?: boolean): Promise<boolean>;
    closeSaved(): Promise<boolean>;

    findTab(predicate: (document: IEditorDocument) => boolean): IEditorDocument;
    findTabAt(index: number): IEditorDocument;
    removeTab(document: IEditorDocument): Promise<boolean>;
    removeIndex(index: number): Promise<boolean>;

    dispose(): Promise<boolean>;

    actions(): IEditorAction[];
    activeDocument(): IEditorDocument;
    activeEditor(): IEditor;
    editorService(): IEditorService;
    activeEditorIs(type: string): boolean;

}

export class EditorGroup implements IEditorGroup {

    private static COUNTER = 0;

    private readonly _id: number;
    private readonly editors: IEditor[] = [];
    private readonly _editorService: IEditorService;

    private documents: IEditorDocument[] = [];

    private _actions: IEditorAction[] = [];
    private _focused: boolean;
    private _activeEditor: IEditor;
    private _activeDocument: IEditorDocument;

    constructor(editorService: IEditorService) {
        this._id = ++EditorGroup.COUNTER;
        this._editorService = editorService;
    }

    id() {
        return this._id;
    }

    empty(): boolean {
        return !this.documents.some(_ => true);
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
        return !groups.find(g => g.id() !== this.id() && g.isActive(this._activeDocument));
    }

    isActive(document: IEditorDocument): boolean {
        return this._activeDocument.resource.path === document.resource.path;
    }

    isChanged(document: IEditorDocument): boolean {
        return document.resource.changed;
    }

    someDocument(predicate: (document: IEditorDocument) => boolean): boolean {
        return this.documents.some(predicate);
    }

    someEditor(predicate: (editor: IEditor) => boolean): boolean {
        return this.editors.some(predicate);
    }

    someAction(): boolean {
        return !this.empty() && !this.somePreview();
    }

    somePreview(): boolean {
        return this.someEditor(e => e.type() === PREVIEW_EDITOR);
    }

    async open(document: IEditorDocument, fromTemplate?: boolean): Promise<boolean> {
        if (fromTemplate && this.somePreview()) { // skip click from template for preview editor
            return true;
        }
        if (!document.preview) {
            if (!await this._editorService.openContent(document.resource)) {
                if (this.empty()) {
                    this.dispose();
                }
                return false;
            }
        }
        const editor = this.editors.find(e => e.canOpen(document)) || this.createEditor(document);
        if (!editor) {
            throw new Error('The is no registered editor to open \'' + document.resource.path + '\'');
        }

        if (document.resource.opened) {
            document.position = undefined; // unset position to scroll to the position only once.
        }

        document.resource.opened = true;
        this._activeDocument = document;
        this._activeEditor = editor;
        this._activeEditor.open(document);
        this._actions = this._activeEditor.actions() || [];

        if (document.preview) {
            if (this.documents.length === 0) {
                this.documents.push(document);
            } else {
                this.documents[0] = document;
            }
        } else if (!this.someDocument(e => compareDocument(e, document))) {
            this.documents.push(document);
        }
        return await this._editorService.updateGroup(this);
    }

    async openSide(document: IEditorDocument) {
        return this._editorService.open(document, true);
    }

    async save(tab: IEditorDocument): Promise<boolean> {
        return this._editorService.saveContent(tab.resource);
    }

    async saveAll(): Promise<boolean> {
        for (const tab of this.documents) {
            if (!await this.save(tab)) {
                return false;
            }
        }
        return true;
    }

    async close(document: IEditorDocument, confirm?: boolean): Promise<boolean> {
        const changed = this.confirmBeforeClose(document);
        const options: ConfirmOptions = {
            title: 'Do you want to close \'' + document.resource.name + '\'?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
            if (changed) {
                document.resource.content = document.resource.lastContent;
                document.resource.changed = false;
            }
            if (confirm) {
                document.resource.meta.previewData = undefined;
            }
            return await this.removeTab(document);
        }
        return false;
    }

    async closeAll(confirm?: boolean): Promise<boolean> {
        const changed = this.someDocument(tab => this.confirmBeforeClose(tab));
        const options = {
            title: 'Do you want to close the files ?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
            while (this.documents.length > 0) {
                if (!await this.close(this.documents[0], false)) {
                    return false;
                }
            }
        }
        return true;
    }

    async closeSaved(): Promise<boolean> {
        while (this.someDocument(e => !e.resource.changed)) {
            for (let i = 0; i < this.documents.length; i++) {
                if (!this.documents[i].resource.changed) {
                    if (!await this.close(this.documents[i])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    async removeTab(document: IEditorDocument): Promise<boolean> {
        let index = this.documents.findIndex(e => compareDocument(e, document));
        if (index === -1) {
            throw new Error(`${document.title} is not a part of the group '${this.id()}'`);
        }

        this._activeDocument = null;
        this.documents.splice(index, 1);
        document.resource.opened = this._editorService.findGroups(document).length > 0;

        index = Math.max(0, index - 1);
        if (index < this.documents.length) {
            this._activeDocument = this.documents[index];
        }

        if (this._activeDocument) {
            this.open(this._activeDocument);
        }

        if (this.empty()) {
            return await this.dispose();
        }

        return true;
    }

    async removeIndex(index: number): Promise<boolean> {
        return await this.removeTab(this.documents[index]);
    }

    findTab(predicate: (document: IEditorDocument) => boolean): IEditorDocument {
        return this.documents.find(e => predicate(e));
    }

    findTabAt(index: number): IEditorDocument {
        return this.documents[index];
    }

    actions(): IEditorAction[] {
        return this._actions || (this._actions = []);
    }

    dispose(): Promise<boolean> {
        return this._editorService.removeGroup(this);
    }


    activeDocument(): IEditorDocument {
        return this._activeDocument;
    }

    activeEditor(): IEditor {
        return this._activeEditor;
    }

    activeEditorIs(type: string): boolean {
        return this.activeEditor().type() === type;
    }

    editorService(): IEditorService {
        return this._editorService;
    }

    //#region USED INSIDE THE WORKSPACE TEMPLATE
    private drop(event: CdkDragDrop<IEditorDocument[]>) {
        const source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        const target = this;
        if (this.somePreview() || source.somePreview()) {
            return;
        }
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            const movedTab = source.findTabAt(event.previousIndex);
            target.open(movedTab);
            source.close(movedTab, false);
        }
    }

    private trackDocument(index: number, tab: IEditorDocument) {
        return tab.resource.path;
    }

    private trackEditor(index: number, editor: IEditor) {
        return editor.id();
    }
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE

    private createEditor(document: IEditorDocument): IEditor {
        for (const item of INSTANTIATORS) {
            if (item.condition(document)) {
                const editor = item.create(this, document);
                this.editors.push(editor);
                return editor;
            }
        }
        return null;
    }

    private confirmBeforeClose(document: IEditorDocument): boolean {
        if (this.somePreview()) {
            return false;
        }
        return document.resource.changed && this._editorService.findGroups(document).length === 1;
    }

    private confirm(options: ConfirmOptions): Promise<boolean> {
        return this._editorService.confirm(options);
    }
}
