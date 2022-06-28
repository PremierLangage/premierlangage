// tslint:disable: max-line-length

// needed for unitesting
/// <reference path="../../../../../../node_modules/ngx-monaco-editor/monaco.d.ts" />

import { IResource } from './resources.model';
import { Subject } from 'rxjs';
import { IEditorGroup } from './editor-groups.model';
import { canBePreviewed, isRepo, isSVG } from './filters.model';
import { IOpenOptions } from '../services/opener.service';
import { EditorActions } from './editor-actions.model';

export enum EditorTypes {
    Code = 'code',
    Preview = 'preview',
    Image = 'image'
}

export interface IEditorAction {
    id: string;
    icon: string;
    tooltip: string;
    condition: (item: IResource) => boolean;
    invoke: (item: IResource) => void;
}

export interface IEditor {
   readonly id: number;
   readonly type: EditorTypes;
   readonly group: IEditorGroup;
   readonly actions: IEditorAction[];
   readonly resource: IResource;
   readonly hasFocus: boolean;

    focus(focused: boolean): void;
    open(resource: IResource, options?: IOpenOptions): void;
    canOpen(resource: IResource): boolean;
}

export interface ICodeEditorOpenEvent {
    resource: IResource;
    options: IOpenOptions;
}

export abstract class AbstractEditor implements IEditor {
    private static NEXT_ID = 0;

    private readonly _id: number;
    private readonly _group: IEditorGroup;

    private _focused: boolean;
    private _resource: IResource;

    readonly onDidOpen: Subject<ICodeEditorOpenEvent> = new Subject();

    constructor(group: IEditorGroup, resource: IResource) {
        this._id = ++AbstractEditor.NEXT_ID;
        this._resource = resource;
        this._group = group;
    }

    abstract type: EditorTypes;
    abstract actions: IEditorAction[];
    abstract canOpen(resource: IResource): boolean;

    get id(): number {
        return this._id;
    }

    get group(): IEditorGroup {
        return this._group;
    }

    get hasFocus(): boolean {
        return this._focused;
    }

    get resource(): IResource {
        return this._resource;
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    open(resource: IResource, options?: IOpenOptions): void {
        this._resource = resource;
        this.onDidOpen.next({
            resource,
            options
        });
    }

}

export class CodeEditor extends AbstractEditor {
    readonly onDidPreview: Subject<IResource> = new Subject();
    private _options: IOpenOptions;

    codeEditor: monaco.editor.IStandaloneCodeEditor;
    diffEditor: monaco.editor.IStandaloneDiffEditor;

    get options() {
        return this._options || (this._options = {});
    }

    get type(): EditorTypes {
        return EditorTypes.Code;
    }

    get actions(): IEditorAction[] {
        return [
            this.preview(),
            this.splitEditor()
        ];
    }

    constructor(group: IEditorGroup, resource: IResource) {
        super(group, resource);
    }

    open(resource: IResource, options?: IOpenOptions): void {
        super.open(resource, this._options = options || {});
    }

    split() {
        this.group.openSide(this.resource);
    }

    canOpen(resource: IResource): boolean {
        return openAsCode(resource);
    }

    private preview(): IEditorAction {
        return {
            id: EditorActions.preview, icon: 'fas fa-play', tooltip: 'Preview ⌘Enter',
            condition: canBePreviewed,
            invoke: (item: IResource) => {
              this.onDidPreview.next(item);
            }
        };
    }

    private splitEditor(): IEditorAction  {
        return {
            id: EditorActions.splitEditor, icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: _ =>  true,
            invoke: this.split.bind(this)
        };
    }

}
export class ImageEditor extends AbstractEditor {

    zoom = 0.7;

    get type(): EditorTypes {
        return EditorTypes.Image;
    }

    get actions(): IEditorAction[] {
        return [
            {
                id: EditorActions.zoomInImage, icon: 'fas fa-plus', tooltip: 'Zoom In',
                condition: _ => true, invoke: _ => this.zoomIn()
            },
            {
                id: EditorActions.zoomOutImage, icon: 'fas fa-minus', tooltip: 'Zoom Out',
                condition: _ => true, invoke: _ => this.zoomOut()
            }
        ];
    }

    constructor(group: IEditorGroup, resource: IResource) {
        super(group, resource);
    }

    canOpen(resource: IResource): boolean {
        return openAsImage(resource);
    }

    zoomIn()  {
        this.zoom = Math.min(this.zoom + .05, 1);
    }

    zoomOut()  {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }

}
export class PreviewEditor extends AbstractEditor {

    get type(): EditorTypes {
        return EditorTypes.Preview;
    }

    get actions(): IEditorAction[] {
        return [];
    }

    constructor(group: IEditorGroup, document: IResource) {
        super(group, document);
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
    return !!resource.meta && !!resource.meta.previewData;
}

export const EDITORS: { canOpen: (r: IResource) => boolean, create: (group: IEditorGroup, r: IResource) => IEditor }[] = [
    { canOpen: openAsImage, create: (group: IEditorGroup, r: IResource) => new ImageEditor(group, r) },
    { canOpen: openAsPreview, create: (group: IEditorGroup, r: IResource) => new PreviewEditor(group, r) },
    { canOpen: openAsCode,  create: (group: IEditorGroup, r: IResource) => new CodeEditor(group, r) }
];
