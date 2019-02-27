import { Resource } from './resource.model';
import { IEditor, INSTANTIATORS, IEditorAction, PREVIEW_EDITOR } from './editor.model';
import { asURI, resourceIsURI, asTab, openAsPreview, compareTab, compareGroup } from './filters.model';
import { EditorService, IEditorService } from '../services/core/editor.service';
import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IEditorTab } from '../services/core/opener.service';

export interface IEditorGroup {

    id(): number;
    empty(): boolean;
    focus(focused: boolean): void;
    focused(): boolean;
    hidden(): boolean;
    isActive(tab: IEditorTab): boolean;
    isChanged(tab: IEditorTab): boolean;
    someTab(predicate: (tab: IEditorTab) => boolean): boolean;
    someEditor(predicate: (editor: IEditor) => boolean): boolean;
    someAction(): boolean;
    somePreview(): boolean;

    open(tab: IEditorTab):  Promise<boolean>;
    openSide(tab: IEditorTab):  Promise<boolean>;

    save(tab: IEditorTab): Promise<boolean>;
    saveAll():  Promise<boolean>;

    close(tab: IEditorTab, confirm?: boolean): Promise<boolean>;
    close(tab: IEditorTab, confirm?: boolean): Promise<boolean>;
    closeAll(confirm?: boolean): Promise<boolean>;
    closeSaved(): Promise<boolean>;

    findTab(predicate: (tab: IEditorTab) => boolean): IEditorTab;
    findTabAt(index: number): IEditorTab;
    removeTab(tab: IEditorTab): Promise<boolean>;
    removeIndex(index: number): Promise<boolean>;

    dispose(): Promise<boolean>;

    actions(): IEditorAction[];
    activeTab(): IEditorTab;
    activeEditor(): IEditor;
    editorService(): IEditorService;
    activeEditorIs(type: string): boolean;

}

export class EditorGroup implements IEditorGroup {

    private static COUNTER = 0;

    private readonly _id: number;
    private readonly editors: IEditor[] = [];
    private readonly _editorService: IEditorService;

    private tabs: IEditorTab[] = [];

    private _actions: IEditorAction[] = [];
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

    empty(): boolean {
        return !this.tabs.some(_ => true);
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
        return !groups.find(g => g.id() !== this.id() && g.isActive(this._activeTab));
    }

    isActive(tab: IEditorTab): boolean {
        return this._activeTab.resource.path === tab.resource.path;
    }

    isChanged(tab: IEditorTab): boolean {
        return tab.resource.changed;
    }

    someTab(predicate: (tab: IEditorTab) => boolean): boolean {
        return this.tabs.some(predicate);
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

    async open(tab: IEditorTab): Promise<boolean> {
        if (!tab.preview) {
            if (!await this._editorService.openContent(tab.resource)) {
                if (this.empty()) {
                    this.dispose();
                }
                return false;
            }
        }
        const editor = this.editors.find(e => e.canOpen(tab)) || this.createEditor(tab);
        if (!editor) {
            throw new Error('The is no registered editor that can open \'' + tab.resource.path + '\'');
        }
        tab.resource.opened = true;
        this._activeTab = tab;
        this._activeEditor = editor;
        this._activeEditor.open(tab);
        this._actions = this._activeEditor.actions() || [];

        if (tab.preview) {
            if (this.tabs.length === 0) {
                this.tabs.push(tab);
            } else {
                this.tabs[0] = tab;
            }
        } else if (!this.someTab(e => compareTab(e, tab))) {
            this.tabs.push(tab);
        }
        return await this._editorService.updateGroup(this);
    }

    async openSide(tab: IEditorTab) {
        return this._editorService.open(tab, true);
    }

    async save(tab: IEditorTab): Promise<boolean> {
        return this._editorService.saveContent(tab.resource);
    }

    async saveAll(): Promise<boolean> {
        for (const tab of this.tabs) {
            if (!await this.save(tab)) {
                return false;
            }
        }
        return true;
    }

    async close(tab: IEditorTab, confirm?: boolean): Promise<boolean> {
        const changed = this.confirmBeforeClose(tab);
        const options: ConfirmOptions = {
            title: 'Do you want to close \'' + tab.resource.name + '\'?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
            if (changed) {
                tab.resource.content = tab.resource.lastContent;
                tab.resource.changed = false;
            }
            if (confirm) {
                tab.resource.meta.previewData = undefined;
            }
            return await this.removeTab(tab);
        }
        return false;
    }

    async closeAll(confirm?: boolean): Promise<boolean> {
        const changed = this.someTab(tab => this.confirmBeforeClose(tab));
        const options = {
            title: 'Do you want to close the files ?',
            message: 'Your changes will be lost if you don\'t save them.',
            okTitle: 'Don\'t Save',
            noTitle: 'Cancel'
        };
        if (!(confirm && changed) || await this.confirm(options)) {
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
        let index = this.tabs.findIndex(e => compareTab(e, tab));
        if (index === -1) {
            throw new Error(`${tab.title} is not a part of the group '${this.id()}'`);
        }

        this._activeTab = null;
        this.tabs.splice(index, 1);
        tab.resource.opened = this._editorService.findGroups(tab).length > 0;

        index = Math.max(0, index - 1);
        if (index < this.tabs.length) {
            this._activeTab = this.tabs[index];
        }

        if (this._activeTab) {
            this._activeTab.position = undefined;
            this.open(this._activeTab);
        }

        if (this.empty()) {
            return await this.dispose();
        }

        return true;
    }

    async removeIndex(index: number): Promise<boolean> {
        return await this.removeTab(this.tabs[index]);
    }

    findTab(predicate: (tab: IEditorTab) => boolean): IEditorTab {
        return this.tabs.find(e => predicate(e));
    }

    findTabAt(index: number): IEditorTab {
        return this.tabs[index];
    }

    actions(): IEditorAction[] {
        return this._actions || (this._actions = []);
    }

    dispose(): Promise<boolean> {
        return this._editorService.removeGroup(this);
    }


    activeTab(): IEditorTab {
        return this._activeTab;
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
    private drop(event: CdkDragDrop<IEditorTab[]>) {
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

    private trackTab(index: number, tab: IEditorTab) {
        return tab.resource.path;
    }

    private trackEditor(index: number, editor: IEditor) {
        return editor.id();
    }
    //#endregion USED INSIDE THE WORKSPACE TEMPLATE

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

    private confirmBeforeClose(tab: IEditorTab): boolean {
        if (this.somePreview()) {
            return false;
        }
        return tab.resource.changed && this._editorService.findGroups(tab).length === 1;
    }


    private confirm(options: ConfirmOptions): Promise<boolean> {
        return this._editorService.confirm(options);
    }
}
