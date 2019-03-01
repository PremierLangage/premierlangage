// tslint:disable: max-line-length

import { Resource } from './resource.model';
import { Subject } from 'rxjs';
import { IEditorDocument } from '../services/core/opener.service';
import { IEditorGroup } from './editor-group.model';
import { canBePreviewed, isRepo, isSVG, isFromServer } from './filters.model';
import { asURI, asDocument } from 'src/app//shared/models/paths.model';

export const CODE_EDITOR = 'code';
export const PREVIEW_EDITOR = 'preview';
export const IMAGE_EDITOR = 'image';
export const WEB_EDITOR = 'web';
export const DIFF_FRAGMENT = 'diff';

export interface IEditorAction {
    icon: string;
    tooltip: string;
    condition: (item: Resource) => boolean;
    invoke: (item: Resource) => void;
}

export interface IEditor {
    id(): number;
    type(): string;
    document(): IEditorDocument;
    actions(): IEditorAction[];
    group(): IEditorGroup;
    focus(focused: boolean): void;
    hasFocus(): boolean;
    open(document: IEditorDocument): void;
    canOpen(document: IEditorDocument): boolean;
}

export abstract class AbstractEditor implements IEditor {
    private static ID_COUNTER = 0;
    private readonly _id: number;
    private readonly _group: IEditorGroup;
    private _focused: boolean;
    private _document: IEditorDocument;

    readonly onOpened: Subject<IEditorDocument> = new Subject();

    constructor(group: IEditorGroup, document: IEditorDocument) {
        this._id = ++AbstractEditor.ID_COUNTER;
        this._document = document;
        this._group = group;
    }

    abstract type(): string;
    abstract canOpen(document: IEditorDocument): boolean;
    abstract actions(): IEditorAction[];

    id(): number {
        return this._id;
    }

    document(): IEditorDocument {
        return this._document;
    }

    group(): IEditorGroup {
        return this._group;
    }

    open(document: IEditorDocument): void {
        this._document = document;
        this.onOpened.next(document);
    }

    focus(focused: boolean): void {
        this._focused = focused;
    }

    hasFocus(): boolean {
        return this._focused;
    }
}

export class CodeEditor extends AbstractEditor {

    readonly onDiffCommand: Subject<boolean> = new Subject();
    readonly onPreviewCommand: Subject<Resource> = new Subject();

    diffEditing: boolean;
    codeEditor: monaco.editor.IStandaloneCodeEditor;
    diffEditor: monaco.editor.IStandaloneDiffEditor;

    constructor(group: IEditorGroup, document: IEditorDocument) {
        super(group, document);
    }

    type(): string {
        return CODE_EDITOR;
    }

    actions(): IEditorAction[] {
        return [
            this.preview(),
            this.diffMode(),
            this.codeMode(),
            this.splitRight()
        ];
    }

    canOpen(document: IEditorDocument): boolean {
        return openAsCode(document);
    }

    open(document: IEditorDocument): void {
        if (document.uri.fragment === DIFF_FRAGMENT) {
            this.diffEditing = true;
        }
        document.uri = document.uri.with({ fragment: ''});
        super.open(document);
    }

    split() {
        this.group().openSide(this.document());
    }

    private preview() {
        return {
            icon: 'fas fa-play', tooltip: 'Preview ⌘Enter', condition: canBePreviewed, invoke: item => this.onPreviewCommand.next(item)
        };
    }

    private diffMode() {
        const that = this;
        return {
            icon: 'fas fa-eye', tooltip: 'Open Changes', condition: (item: Resource) => isRepo(item) && !that.diffEditing, invoke: _ => {
                that.diffEditing = true;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    }

    private codeMode() {
        const that = this;
        return {
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', condition: (item: Resource) => that.diffEditing, invoke: _ => {
                that.diffEditing = false;
                that.onDiffCommand.next(that.diffEditing);
            }
        };
    }

    private splitRight() {
        const that = this;
        return {
            icon: 'fas fa-columns', tooltip: 'Split ⌘Right', condition: () => true, invoke: (item: Resource) => {
                that.group().openSide(asDocument(item));
            }
        };
    }

}
export class ImageEditor extends AbstractEditor {

    zoom = 0.7;

    constructor(group: IEditorGroup, document: IEditorDocument) {
        super(group, document);
    }

    type(): string {
        return IMAGE_EDITOR;
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

    canOpen(document: IEditorDocument): boolean {
        return openAsImage(document);
    }

    zoomIn() {
        this.zoom = Math.min(this.zoom + .05, 1);
    }

    zoomOut() {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }

}
export class PreviewEditor extends AbstractEditor {

    constructor(group: IEditorGroup, document: IEditorDocument) {
        super(group, document);
    }

    type(): string {
        return PREVIEW_EDITOR;
    }

    actions(): IEditorAction[] {
        return [
            {
                icon: 'fas fa-refresh', tooltip: 'Refresh', condition: (item: Resource) => true, invoke: (item: Resource) => {
                }
            }
        ];
    }

    canOpen(document: IEditorDocument): boolean {
        return openAsPreview(document);
    }

}
export class WebEditor extends AbstractEditor {

    constructor(group: IEditorGroup, document: IEditorDocument) {
        super(group, document);
    }

    type(): string {
        return WEB_EDITOR;
    }

    actions(): IEditorAction[] {
        return [];
    }

    canOpen(document: IEditorDocument): boolean {
        return openAsWeb(document);
    }

}

export function openAsCode(doc: IEditorDocument) {
    return !openAsImage(doc);
}

export function openAsImage(doc: IEditorDocument) {
    return !openAsPreview(doc) && doc.resource.meta && doc.resource.meta.image && !isSVG(doc.resource);
}

export function openAsPreview(doc: IEditorDocument) {
    return isFromServer(doc.resource) && doc.resource.meta && doc.resource.meta.previewData !== undefined;
}

export function openAsWeb(doc: IEditorDocument) {
    return  !isFromServer(doc.resource);
}

export const INSTANTIATORS: {condition: (doc: IEditorDocument) => boolean, create: (group: IEditorGroup, doc: IEditorDocument) => IEditor }[] = [
    { condition: openAsImage, create: (group: IEditorGroup, doc: IEditorDocument) => new ImageEditor(group, doc) },
    { condition: openAsWeb, create: (group: IEditorGroup, doc: IEditorDocument) => new WebEditor(group, doc) },
    { condition: openAsPreview, create: (group: IEditorGroup, doc: IEditorDocument) => new PreviewEditor(group, doc) },
    { condition: openAsCode,  create: (group: IEditorGroup, doc: IEditorDocument) => new CodeEditor(group, doc) }
];
