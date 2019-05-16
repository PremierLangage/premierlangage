// tslint:disable: max-line-length
// next line required for unit-tests
/// <reference path="../../../../../node_modules/ngx-monaco-editor/monaco.d.ts" />

import { IResource } from './resource.model';
import { Subject } from 'rxjs';
import { IEditorGroup } from './editor-group.model';
import { canBePreviewed, isRepo, isSVG, isFromServer } from './filters.model';
import { IOpenOptions } from '../services/core/opener.service';

export enum EditorTypes {
    Code = 'code',
    Preview = 'preview',
    Image = 'image'
}
export interface IEditorAction {
    icon: string;
    tooltip: string;
    condition: (item: IResource) => boolean;
    invoke: (item: IResource) => void;
}

export interface IEditor {
    id(): number;
    type(): EditorTypes;
    group(): IEditorGroup;
    actions(): IEditorAction[];
    resource(): IResource;
    focus(focused: boolean): void;
    hasFocus(): boolean;
    open(resource: IResource, options?: IOpenOptions): void;
    canOpen(resource: IResource): boolean;
}

export abstract class AbstractEditor implements IEditor {
    private static ID_COUNTER = 0;

    private readonly _id: number;
    private readonly _group: IEditorGroup;

    private _focused: boolean;
    private _resource: IResource;

    readonly opened: Subject<IResource> = new Subject();

    constructor(group: IEditorGroup, resource: IResource) {
        this._id = ++AbstractEditor.ID_COUNTER;
        this._resource = resource;
        this._group = group;
    }

    abstract type(): EditorTypes;
    abstract canOpen(resource: IResource): boolean;
    abstract actions(): IEditorAction[];

    id(): number {
        return this._id;
    }

    group(): IEditorGroup {
        return this._group;
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    open(resource: IResource, options?: IOpenOptions): void {
        this._resource = resource;
        this.opened.next(resource);
    }

    hasFocus(): boolean {
        return this._focused;
    }

    resource(): IResource {
        return this._resource;
    }
}

export class CodeEditor extends AbstractEditor {

    readonly onDiffCommand: Subject<boolean> = new Subject();
    readonly onPreviewCommand: Subject<IResource> = new Subject();

    diffEditing: boolean;
    codeEditor: monaco.editor.IStandaloneCodeEditor;
    diffEditor: monaco.editor.IStandaloneDiffEditor;

    constructor(group: IEditorGroup, resource: IResource) {
        super(group, resource);
    }

    type(): EditorTypes {
        return EditorTypes.Code;
    }

    actions(): IEditorAction[] {
        return [
            this.preview(),
            this.diffMode(),
            this.codeMode(),
            this.splitRight()
        ];
    }

    open(resource: IResource, options?: IOpenOptions): void {
        this.diffEditing = options && options.diffMode;
        super.open(resource, options);
    }

    split() {
        this.group().editorService().open(this.resource(), {
            openToSide: true
        });
    }

    canOpen(resource: IResource): boolean {
        return openAsCode(resource);
    }

    private preview() {
        return {
            icon: 'fas fa-play', tooltip: 'Preview ⌘Enter', condition: canBePreviewed, invoke: item => this.onPreviewCommand.next(item)
        };
    }

    private diffMode() {
        const that = this;
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: (item: IResource) => isRepo(item) && !that.diffEditing, invoke: _ => {
                that.diffEditing = true;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    }

    private codeMode() {
        const that = this;
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: (item: IResource) => that.diffEditing, invoke: _ => {
                that.diffEditing = false;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    }

    private splitRight() {
        const that = this;
        return {
            icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: () => true, invoke: _ => {
                that.split();
            }
        };
    }

}
export class ImageEditor extends AbstractEditor {

    zoom = 0.7;

    constructor(group: IEditorGroup, resource: IResource) {
        super(group, resource);
    }

    type(): EditorTypes {
        return EditorTypes.Image;
    }

    actions(): IEditorAction[] {
        return [
            {
                icon: 'fas fa-plus', tooltip: 'Zoom In', condition: (item: IResource) => true, invoke: (item: IResource) => {
                    this.zoomIn();
                }
            },
            {
                icon: 'fas fa-minus', tooltip: 'Zoom Out', condition: (item: IResource) => true, invoke: (item: IResource) => {
                    this.zoomOut();
                }
            }
        ];
    }

    canOpen(resource: IResource): boolean {
        return openAsImage(resource);
    }

    zoomIn() {
        this.zoom = Math.min(this.zoom + .05, 1);
    }

    zoomOut() {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }

}
export class PreviewEditor extends AbstractEditor {

    constructor(group: IEditorGroup, document: IResource) {
        super(group, document);
    }

    type(): EditorTypes {
        return EditorTypes.Preview;
    }

    actions(): IEditorAction[] {
        return [
            {
                icon: 'fas fa-refresh', tooltip: 'Refresh', condition: (item: IResource) => true, invoke: (item: IResource) => {
                }
            }
        ];
    }

    canOpen(resource: IResource): boolean {
        return openAsPreview(resource);
    }

}

export function openAsCode(resource: IResource) {
    return !openAsImage(resource);
}

export function openAsImage(resource: IResource) {
    return !openAsPreview(resource) && resource.meta && resource.meta.image && !isSVG(resource);
}

export function openAsPreview(resource: IResource) {
    return isFromServer(resource) && !!resource.meta && !!resource.meta.previewData;
}

export const INSTANTIATORS: {condition: (r: IResource) => boolean, create: (group: IEditorGroup, r: IResource) => IEditor }[] = [
    { condition: openAsImage, create: (group: IEditorGroup, r: IResource) => new ImageEditor(group, r) },
    { condition: openAsPreview, create: (group: IEditorGroup, r: IResource) => new PreviewEditor(group, r) },
    { condition: openAsCode,  create: (group: IEditorGroup, r: IResource) => new CodeEditor(group, r) }
];
