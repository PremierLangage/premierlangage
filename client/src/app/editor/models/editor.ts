import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Resource, resourceInit } from './resource.model';
import { EditorComponent } from '../../editor/editor.component';
import { isRepo, canBePreviewed, isPl, language as languageOf } from '../../editor/editor.utils';
import { PREMIER_LANGAGE } from '../models/editor.config';
import { WorkspaceComponent } from '../../editor/workspace/workspace.component';

export abstract class Editor {
    readonly changes = {};
    readonly type: string;
    readonly resources: Resource[] = [];
    readonly options = [];
    readonly component: WorkspaceComponent;
    selection: Resource;

    constructor(component: WorkspaceComponent, resource: Resource) {
        this.selection = resource;
        this.component = component;
    }

    abstract canOpen(resource: Resource): boolean;

    close(resource: Resource) {
        let index = this.resources.findIndex(e => e.path === resource.path);
        if (index === -1) {
            throw new Error('undefined resource in the editor');
        }
        this.selection = undefined;
        this.resources.splice(index, 1);
        index = Math.max(0, index - 1);
        if (index < this.resources.length) {
            this.selection = this.resources[index];
        }
        if (this.selection) {
            this.open(this.selection);
        }
        if (this.component.editors.findIndex(e => e.contains(resource)) === -1) {
            resourceInit(resource);
        }
        if (this.isEmpty()) {
            this.component.editors.splice(this.component.editors.findIndex(e => e === this), 1);
        }
        this.component.detectChanges();
        this.onClosed(resource);
    }

    closeConfirm(resource: Resource) {
        if (this.shouldAskConfirm() && resource.changed) {
            const options = {
                title: 'Do you want to close \'' + resource.name + '\'?',
                message: 'Your changes will be lost if you don\'t save them.',
            };
            this.component.confirm(options).then((confirmed) => {
                if (confirmed) {
                    this.close(this.selection);
                }
            });
        } else {
            this.close(this.selection);
        }
    }

    closeAll() {
        while (this.resources.length > 0) {
            this.close(this.resources[0]);
        }
    }

    closeAllConfirm() {
        if (this.shouldAskConfirm() &&  this.resources.some(e => e.changed)) {
            const options = {
                title: 'Do you want to close the files ?',
                message: 'Your changes will be lost if you don\'t save them.',
            };
            this.component.confirm(options).then(confirmed => {
                if (confirmed) {
                    this.closeAll();
                }
            });
        } else {
            this.closeAll();
        }
    }

    closeSaved() {
        while (this.resources.some(e => !e.changed)) {
            for (let i = 0; i < this.resources.length; i++) {
                if (!this.resources[i].changed) {
                    this.close(this.resources[i]);
                }
            }
        }
    }

    save(resource: Resource) {
        if (resource.changed) {
            resource.changed = false;
            this.component.save(resource).then((success => {
                this.changes[resource.path] = resource.content;
                if (success) {
                    this.onSaved(resource);
                }
            }));
        }
    }

    saveAll() {
        for (const resource of this.resources) {
            this.save(resource);
        }
    }

    contains(resource: Resource) {
        return this.resources.findIndex(item => item.path === resource.path) !== -1;
    }

    drop(event: CdkDragDrop<Resource[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    isEmpty() {
        return this.resources.length === 0;
    }

    isSelected(resource: Resource) {
        return resource.path === this.selection.path;
    }

    open(resource: Resource) {
        if (!this.contains(resource)) {
            this.resources.push(resource);
        }
        this.selection = resource;
        this.component.detectChanges();
    }

    title(resource: Resource) {
        return resource.name;
    }

    length() {
        return this.resources.length;
    }

    track(_index: number, item: Resource) {
        return item.path;
    }

    shouldAskConfirm() {
        return false;
    }

    isChanged(resource: Resource) {
        return this.shouldAskConfirm() && resource.changed;
    }

    onSaved(resource: Resource) {}
    onClosed(resource: Resource) {}
}

export class CodeEditor extends Editor {

    readonly type = 'code';
    diffMode: boolean;

    private compiled = [];
    private editor: monaco.editor.IStandaloneCodeEditor;
    private diffEditor: monaco.editor.IStandaloneDiffEditor;

    constructor(component: WorkspaceComponent, resource: Resource) {
        super(component, resource);
        this.loadOptions();
    }

    open(resource: Resource) {
        const monaco = (<any>window).monaco;
        this.selection.state.state = this.editor.saveViewState();
        if (resource.state.model) {
            this.editor.restoreViewState(resource.state.state);
        } else {
            resource.state.model = monaco.editor.createModel(resource.content, languageOf(resource), resource.path);
        }
        this.editor.setModel(resource.state.model);
        this.editor.updateOptions({ readOnly: !resource.write });
        if (this.diffMode) {
            this.component.diff(resource).then(value => {
                const originalModel = monaco.editor.createModel(value || '', languageOf(resource));
                this.diffEditor.setModel({
                    original: originalModel,
                    modified: this.editor.getModel()
                });

                this.diffEditor.getModifiedEditor().updateOptions({ readOnly: !resource.write });
                this.diffEditor.getModifiedEditor().focus();
            });
        } else {
            this.editor.focus();
        }
        if (!resource.changed) {
            this.changes[resource.path] = resource.content;
        }
        this.compile(resource);
        super.open(resource);
    }

    onInit(editor: monaco.editor.IStandaloneCodeEditor) {
        this.editor = editor;
        this.addCommands(this.editor);
        this.open(this.selection);
        this.configEditor(editor);
    }

    onInitDiff(editor: monaco.editor.IStandaloneDiffEditor) {
        this.diffEditor = editor;
        this.addCommands(this.diffEditor.getModifiedEditor());
    }

    didChange() {
        if (this.diffMode) {
            this.selection.content = this.diffEditor.getModifiedEditor().getValue();
        } else {
            this.selection.content = this.editor.getValue();
        }
        this.selection.changed = this.changes[this.selection.path] !== this.selection.content;
    }

    canOpen(resource: Resource) {
        return !resource.image;
    }

    canDiff(resource: Resource) {
        return isRepo(resource) && !this.diffMode;
    }

    shouldAskConfirm() {
        return true;
    }

    onSaved(resource: Resource) {
        this.compile(resource);
    }

    onClosed(resource: Resource) {
        resource.changed = false;
        resource.content = this.changes[resource.path];
        delete this.changes[resource.path];
        delete this.compiled[resource.path];
    }

    addCommands(editor: monaco.editor.IStandaloneCodeEditor) {
        const self = this;
        editor.onDidChangeModelContent(() => {
            self.didChange();
        });
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_S, () => {
            self.save(this.selection);
        }, '');

        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
            self.saveAll();
        }, '');

        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_W, () => {
            self.closeConfirm(this.selection);
        }, '');
        editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_W, () => {
            self.closeAllConfirm();
        }, '');
        // tslint:enable: no-bitwise
    }

    configEditor(editor: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor) {
        const self = this;
        const REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:\/)?([~a-zA-Z0-9_\.\/]+)/;
        const OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)/;
        const CLOSE_PATTERN = /^==\s*$/;
        const BUILT_IN_WORDS = {
            title: 'Titre de l\'exercice/feuille d\'exercice',
            author: 'Auteur de l\'exercice',
            introduction: 'Présentation de la feuille d\'exercice, le contenu de cette clé est interprété comme du markdown.',
            teacher: 'Sur un PLTP, affiche un note visible par les enseignant seulement',
            text: 'Énoncé de l\'exercice, le contenu de cette clé est interprété comme du markdown.',
            build: 'Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), '
                 + 'à utiliser avec le builder /builder/build.py',
            before: 'Code python permettant de modifier l\'exercice avant sont exécution sur le navigateur',
            form: 'Formulaire HTML permettant à l\'élève de répondre',
            template: 'Définie template comme étant la base de ce fichier',
          };

        /*
        monaco.languages.registerLinkProvider(PREMIER_LANGAGE, {
            provideLinks: function(model, _token) {
                let links = [];
                const lines = model.getValue().split('\n');
                let match;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].trim().endsWith('==')) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].trim().endsWith('==')) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        const url = match[match.length - 1];
                        const index =  match.index + match.input.length - url.length;
                        const range = new monaco.Range(i + 1, index, i + 1, index + url.length + 1);

                        links.push({
                            range: range,
                            url: url,
                        });
                    }
                }
                return links;
            },
            resolveLink: function(link, _token) {
                console.log(link)
                return link;
            }
        });
        */

        monaco.languages.registerCodeLensProvider(PREMIER_LANGAGE, {
            provideCodeLenses: function(model, _token) {
                const links = [];
                const lines: string[] = model.getValue().split('\n');
                let match: RegExpExecArray;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].match(OPEN_PATTERN)) {
                        i++;
                        while (i < lines.length) {
                            if (lines[i].match(CLOSE_PATTERN)) {
                                break;
                            }
                            i++;
                        }
                    }
                    match = REFERENCE_PATTERN.exec(lines[i]);
                    if (match) {
                        const url = match[match.length - 1];
                        let index =  match.index + match.input.length - url.length;
                        const range = new monaco.Range(i + 1, index, i + 1, index + url.length + 1);
                        let comment = false;
                        while (index >= 0) {
                            if (lines[i][index] === '#') {
                                comment = true;
                                break;
                            }
                            index--;
                        }
                        if (!comment) {
                            links.push({
                                range: range,
                                id: 'Open',
                                command: {
                                    id: editor.addCommand(0, function() {
                                        self.component.findReference(self.selection, url).then((reference => {
                                            if (reference) {
                                                self.component.open(reference);
                                            }
                                        }));
                                    }, ''),
                                    title: 'Open',
                                }
                            });
                        }
                    }
                }
                return links;
            }
        });

        monaco.languages.registerFoldingRangeProvider(PREMIER_LANGAGE, {
            provideFoldingRanges: function(model) {
            const ranges = [];
            const lines: string[] = model.getValue().split('\n');
            const length = lines.length;
            let i = 0, start = -1;
            while (i < length) {
                if (lines[i].match(OPEN_PATTERN)) {
                    start = i;
                } else if (lines[i].match(CLOSE_PATTERN)) {
                        ranges.push({
                            start: start + 1,
                            end: i + 1,
                            kind: monaco.languages.FoldingRangeKind.Region
                        });
                    start = -1;
                }
                i++;
            }
            return ranges;
            }
        });

        monaco.languages.registerHoverProvider(PREMIER_LANGAGE, {
            provideHover: function(model, position) {
                const lineContent = model.getLineContent(position.lineNumber);
                const token = model.getWordAtPosition(position);
                if (token) {
                    const keys = self.getKeys();
                    const k = keys.find(e => e === token.word);
                    if (k) {
                        const i = token.startColumn - 2;
                        if (i > 0 && lineContent[i] === '{' && i - 1 >= 0 && lineContent[i - 1] === '{') {
                            return {
                                range: new monaco.Range(1, 1, 3, 10),
                                contents: [
                                    { value: k },
                                    { value: self.getValue(k) }
                                ]
                            };
                        }
                    }

                    if (token.word in BUILT_IN_WORDS) {
                        const lineCount = model.getLineCount();
                        return {
                            range: new monaco.Range(1, 1, 3, model.getLineMaxColumn(lineCount)),
                            contents: [
                                { value: '**PL BUILT-IN**' },
                                { value: BUILT_IN_WORDS[token.word] }
                            ]
                        };
                    }
                }
            }
        });

        monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
            provideCompletionItems: (model, position) => {
                const line = model.getLineContent(position.lineNumber);
                if (line.includes('{{')) {
                    return [];
                }
                return Object.keys(BUILT_IN_WORDS).map(name => ({
                    label: name,
                    detail: BUILT_IN_WORDS[name],
                    insertText: name + '== #|python| \n\n==',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                }));
            },
        });

        monaco.languages.registerCompletionItemProvider(PREMIER_LANGAGE, {
            triggerCharacters: ['{{'],
            provideCompletionItems: function(model, position) {
                const line = model.getLineContent(position.lineNumber);
                if (!line.includes('{{')) {
                    return [];
                }
                const items: monaco.languages.CompletionItem[] = [];
                const keys = self.getKeys();
                if (keys.length > 0) {
                    keys.forEach(k => {
                        items.push({
                            label: k,
                            detail: '{{' + k + '}}',
                            insertText: k + '}}',
                            kind: monaco.languages.CompletionItemKind.Reference
                        });
                    });
                }
                return items;
            }
        });
        editor.createContextKey('', {});
    }


    private loadOptions() {
        this.options.push({
            icon: 'fas fa-play', tooltip: 'Preview', enabled: canBePreviewed, action: (item: Resource) => {
                this.component.didTapPreviewResource(item);
            }
        });
        this.options.push({
            icon: 'fas fa-eye', tooltip: 'Open Changes', enabled: (item: Resource) => this.canDiff(item), action: (item: Resource) => {
                this.openDiffEditor();
            }
        });
        this.options.push({
            icon: 'fas fa-eye-slash', tooltip: 'Close Changes', enabled: (item: Resource) => this.diffMode, action: (item: Resource) => {
                this.closeDiffEditor();
            }
        });
        this.options.push({
            icon: 'fas fa-columns', tooltip: 'Split Editor Right', enabled: () => true, action: () => {
                this.component.editors.push(new CodeEditor(this.component, this.selection));
            }
        });
    }

    private closeDiffEditor() {
        this.diffMode = false;
        this.editor.setValue(this.selection.content);
    }

    private openDiffEditor() {
        this.diffMode = true;
        this.open(this.selection);
    }

    private compile(resource: Resource) {
        if (isPl(resource)) {
            this.component.resources.compilePL(resource).then((response => {
                if (response['compiled']) {
                    this.compiled[resource.path] = response['json'];
                }
            }));
        }
    }

    private getValue(k: string) {
        const object = this.compiled[this.selection.path];
        if (object) {
            return object[k];
        }
        return '';
    }

    private getKeys() {
        const object = this.compiled[this.selection.path];
        if (object) {
            return Object.keys(object).filter(k => !k.startsWith('__'));
        }
        return [];
    }
}

export class ImageEditor extends Editor {
    readonly type = 'image';
    zoom = 0.5;
    constructor(component: WorkspaceComponent, resource: Resource) {
        super(component, resource);
        this.open(resource);
    }
    zoomIn() {
        this.zoom = Math.min(this.zoom + .05, 1);
    }
    zoomOut() {
        this.zoom = Math.max(this.zoom - .05, 0.3);
    }
    canOpen(resource: Resource) {
        return resource.image !== undefined;
    }
}

export class PreviewEditor extends Editor {
    readonly type = 'preview';
    canOpen(resource: Resource): boolean {
        return resource.state.preview !== undefined;
    }
    content() {
        return this.selection.state.preview;
    }
    title(resource: Resource) {
        return 'Preview ' + resource.name;
    }
    open(resource: Resource) {
        if (this.resources.length === 0) {
            this.resources.push(resource);
        }
        this.resources[0] = resource;
        this.selection = resource;
    }
}
