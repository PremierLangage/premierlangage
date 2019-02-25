import { Resource } from './resource.model';
import { IEditor, INSTANTIATORS, IEditorAction } from './editor.model';
import { asURI, resourceIsURI, asTab, openAsPreview } from './filters.model';
import { EditorService, IEditorService } from '../services/core/editor.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IEditorTab } from '../services/core/opener.service';
import { group } from '@angular/animations';

export interface IEditorGroup {
    id(): number;
    focus(focused: boolean): void;
    hasFocus(): boolean;
    isEmpty(): boolean;
    isActive(tab: IEditorTab): boolean;
    isChanged(tab: IEditorTab): boolean;
    hidden(): boolean;
    someTab(predicate: (tab: IEditorTab) => boolean): boolean;
    someEditor(predicate: (editor: IEditor) => boolean): boolean;
    onlyPreview(): boolean;

    activeTab(): IEditorTab;
    activeEditor(): IEditor;

    open(tab: IEditorTab):  Promise<boolean>;
    openSide(tab: IEditorTab):  Promise<boolean>;

    close(tab: IEditorTab, confirm?: boolean): Promise<boolean>;
    close(tab: IEditorTab, confirm?: boolean): Promise<boolean>;
    closeAll(confirm?: boolean): Promise<boolean>;
    closeSaved(): Promise<boolean>;

    removeTab(tab: IEditorTab): Promise<boolean>;
    removeIndex(index: number);

    save(tab: IEditorTab): Promise<boolean>;
    saveAll():  Promise<boolean>;

    drop(event: CdkDragDrop<IEditorTab[]>);
    editorService(): IEditorService;
    activeEditorIs(type: string): boolean;
    dispose(): Promise<boolean>;
}

export class EditorGroup implements IEditorGroup {
    private static COUNTER = 0;
    private readonly _id: number;
    private readonly editors: IEditor[] = [];
    private readonly _editorService: IEditorService;
    private actions: IEditorAction[] = [];
    private tabs: IEditorTab[] = [];

    private _focused: boolean;
    private _activeTab: IEditorTab;
    private _activeEditor: IEditor;

    constructor(editorService: IEditorService) {
        this._id = ++EditorGroup.COUNTER;
        this._editorService = editorService;
    }

    id() {
        return this._id;
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    hasFocus(): boolean {
        return this._focused;
    }

    isEmpty(): boolean {
        return !this.tabs.some(_ => true);
    }

    hidden(): boolean {
        if (!this.onlyPreview()) {
            return false;
        }
        const groups = this._editorService.listGroups();
        return !groups.find(g => g.id() !== this.id() && g.isActive(this._activeTab));
    }

    someTab(predicate: (tab: IEditorTab) => boolean): boolean {
        return this.tabs.some(predicate);
    }

    someEditor(predicate: (editor: IEditor) => boolean): boolean {
        return this.editors.some(predicate);
    }

    onlyPreview(): boolean {
        return this.someEditor(e => e.type() === 'preview');
    }

    async open(tab: IEditorTab): Promise<boolean> {
        if (!tab.preview) {
            const opened = await this._editorService.openContent(tab.resource);
            if (!opened) {
                if (this.isEmpty()) {
                    this.dispose();
                }
                return false;
            }
        }
        const editor = this.editors.find(e => e.canOpen(tab)) || this.createEditor(tab);
        if (!editor) {
            throw new Error('The is no registered editor that can open \'' + tab.resource.path + '\'');
        }
        this._activeTab = tab;
        this._activeEditor = editor;
        this._activeEditor.open(tab);
        this.actions = this._activeEditor.actions();
        if (tab.preview) {
            if (this.tabs.length === 0) {
                this.tabs.push(tab);
            } else {
                this.tabs[0] = tab;
            }
        } else {
            if (!this.someTab(e => e.resource.path === tab.resource.path)) {
                this.tabs.push(tab);
            }
        }
        await this._editorService.addGroup(this);
        return true;
    }

    async openSide(tab: IEditorTab) {
        return this._editorService.open(tab, true);
    }

    async save(tab: IEditorTab): Promise<boolean> {
        return this._editorService.saveContent(tab.resource);
    }

    async saveAll(): Promise<boolean> {
        for (const resource of this.tabs) {
            if (!await this.save(resource)) {
                return false;
            }
        }
        return true;
    }

    async close(tab: IEditorTab, confirm?: boolean): Promise<boolean> {
        confirm = !this.onlyPreview() && confirm;
        const options: ConfirmOptions = {
            title: 'Do you want to close \'' + tab.resource.name + '\'?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };

        if (!confirm  || !tab.resource.changed || await this._editorService.confirm(options)) {
            if (!this.onlyPreview()) {
                tab.resource.content = tab.resource.lastContent;
                tab.resource.changed = false;
            }
            this.removeTab(tab);
        }

        return true;
    }

    async closeAll(confirm?: boolean): Promise<boolean> {
        confirm = !this.onlyPreview() && confirm;
        const options = {
            title: 'Do you want to close the files ?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!confirm || !this.someTab(e => e.resource.changed) || await this._editorService.confirm(options)) {
            while (this.tabs.length > 0) {
                if (!await this.close(this.tabs[0], false)) {
                    return false;
                }
            }
        }
        return true;
    }

    async closeSaved(): Promise<boolean> {
        while (this.someTab(e => !e.resource.changed)) {
            for (let i = 0; i < this.tabs.length; i++) {
                if (!this.tabs[i].resource.changed) {
                    if (!await this.close(this.tabs[i])) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    async removeTab(tab: IEditorTab): Promise<boolean> {
        let index = this.tabs.findIndex(e => e.resource.path === tab.resource.path);
        if (index === -1) {
            throw new Error(`${tab.title} is not a part of the group '${this.id()}'`);
        }
        const toRemove = this.tabs[index];

        if (!this.onlyPreview() && openAsPreview(tab)) {
            toRemove.resource.meta.html = undefined;
        }

        this._activeTab = null;
        this.tabs.splice(index, 1);

        index = Math.max(0, index - 1);
        if (index < this.tabs.length) {
            this._activeTab = this.tabs[index];
        }

        if (this._activeTab) {
            this._activeTab.position = undefined;
            this.open(this._activeTab);
        }

        if (this.isEmpty()) {
            return await this.dispose();
        }
        return true;
    }

    removeIndex(index: number) {
        this.removeTab(this.tabs[index]);
    }

    activeTab(): IEditorTab {
        return this._activeTab;
    }

    activeEditor(): IEditor {
        return this._activeEditor;
    }

    isActive(tab: IEditorTab): boolean {
        return this._activeTab.resource.path === tab.resource.path;
    }

    isChanged(tab: IEditorTab): boolean {
        return tab.resource.changed;
    }

    activeEditorIs(type: string): boolean {
        return this.activeEditor().type() === type;
    }

    trackTab(index: number, tab: IEditorTab) {
        return tab.resource.path;
    }

    trackEditor(index: number, editor: IEditor) {
        return editor.id();
    }

    drop(event: CdkDragDrop<IEditorTab[]>) {
        const source = this._editorService.findGroup(parseInt(event.previousContainer.id, 10));
        source.removeIndex(event.previousIndex);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    editorService(): IEditorService {
        return this._editorService;
    }

    dispose(): Promise<boolean> {
        return this._editorService.removeGroup(this);
    }

    private createEditor(data: IEditorTab): IEditor {
        for (const item of INSTANTIATORS) {
            if (item.condition(data)) {
                const editor = item.create(this, data);
                this.editors.push(editor);
                return editor;
            }
        }
        return null;
    }
}
