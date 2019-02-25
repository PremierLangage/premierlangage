// tslint:disable: max-line-length

import { Resource } from './resource.model';
import { Subject } from 'rxjs';
import { IEditorTab } from '../services/core/opener.service';
import { IEditorGroup } from './editor-group.model';
import { asURI, openAsImage, openAsCode, canBePreviewed, isRepo, openAsPreview, asTab } from './filters.model';


export interface IEditorAction {
    icon: string;
    tooltip: string;
    condition: (item: Resource) => boolean;
    invoke: (item: Resource) => void;
}

export interface IEditor {
    id(): number;
    type(): string;
    data(): IEditorTab;
    actions(): IEditorAction[];
    group(): IEditorGroup;
    focus(focused: boolean): void;
    hasFocus(): boolean;
    open(data: IEditorTab): void;
    canOpen(data: IEditorTab): boolean;
}

export abstract class AbstractEditor implements IEditor {
    private static ID_COUNTER = 0;
    private readonly _id: number;
    private readonly _group: IEditorGroup;
    private _focused: boolean;
    private _data: IEditorTab;

    readonly onOpened: Subject<IEditorTab> = new Subject();

    constructor(group: IEditorGroup, data: IEditorTab) {
        this._id = ++AbstractEditor.ID_COUNTER;
        this._data = data;
        this._group = group;
    }

    abstract type(): string;
    abstract canOpen(data: IEditorTab): boolean;
    abstract actions(): IEditorAction[];

    id(): number {
        return this._id;
    }

    data(): IEditorTab {
        return this._data;
    }

    group(): IEditorGroup {
        return this._group;
    }

    open(data: IEditorTab): void {
        this._data = data;
        this.onOpened.next(data);
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    hasFocus(): boolean {
        return this._focused;
    }
}

export class CodeEditor extends AbstractEditor {
    readonly onDiffEditing: Subject<boolean> = new Subject();

    diffEditing: boolean;
    codeEditor: monaco.editor.IStandaloneCodeEditor;
    diffEditor: monaco.editor.IStandaloneDiffEditor;

    constructor(group: IEditorGroup, data: IEditorTab) {
        super(group, data);
    }

    type(): string {
        return 'code';
    }

    actions(): IEditorAction[] {
        return [
            this.preview(),
            // this.diffMode(),
            // this.codeMode(),
            this.splitRight()
        ];
    }

    canOpen(data: IEditorTab): boolean {
        return openAsCode(data);
    }

    private preview() {
        return {
            icon: 'fas fa-play', tooltip: 'Preview', condition: (item: Resource) => canBePreviewed(item), invoke: (item: Resource) => {
                this.group().editorService().previewResource(item);
            }
        };
    }

    private diffMode() {
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: (item: Resource) => isRepo(item) && !this.diffEditing, invoke: _ => {
                this.diffEditing = true;
                this.onDiffEditing.next(this.diffEditing);
            }
        };
    }

    private codeMode() {
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: (item: Resource) => this.diffEditing, invoke: _ => {
                this.diffEditing = false;
                this.onDiffEditing.next(this.diffEditing);
            }
        };
    }

    private splitRight() {
        return {
            icon: 'fas fa-columns', tooltip: 'Split Editor Right', condition: () => true, invoke: (item: Resource) => {
                this.group().openSide(asTab(item));
            }
        };
    }
}

export class ImageEditor extends AbstractEditor {

    private zoom = 0.7;

    constructor(group: IEditorGroup, data: IEditorTab) {
        super(group, data);
    }

    type(): string {
        return 'image';
    }

    actions(): IEditorAction[] {
        return [
            {
                icon: 'fas fa-plus', tooltip: 'Zoom In', condition: (item: Resource) => true, invoke: (item: Resource) => {
                    this.zoomIn();
                }
            },
            {
                icon: 'fas fa-minus', tooltip: 'Zoom Out', condition: (item: Resource) => true, invoke: (item: Resource) => {
                    this.zoomOut();
                }
            }
        ];
    }

    canOpen(data: IEditorTab): boolean {
        return openAsImage(data);
    }

    zoomIn() {
        this.zoom = Math.min(this.zoom + .05, 1);
    }

    zoomOut() {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }

}

export class PreviewEditor extends AbstractEditor {

    constructor(group: IEditorGroup, data: IEditorTab) {
        super(group, data);
    }

    type(): string {
        return 'preview';
    }

    actions(): IEditorAction[] {
        return [
            {
                icon: 'fas fa-refresh', tooltip: 'Refresh', condition: (item: Resource) => true, invoke: (item: Resource) => {
                }
            }
        ];
    }

    canOpen(data: IEditorTab): boolean {
        return openAsPreview(data);
    }
}

export const INSTANTIATORS: {condition: (data: IEditorTab) => boolean, create: (group: IEditorGroup, data: IEditorTab) => IEditor }[] = [
    { condition: openAsImage, create: (group: IEditorGroup, data: IEditorTab) => new ImageEditor(group, data) },
    { condition: openAsPreview, create: (group: IEditorGroup, data: IEditorTab) => new PreviewEditor(group, data) },
    { condition: openAsCode,  create: (group: IEditorGroup, data: IEditorTab) => new CodeEditor(group, data) }
];
