// tslint:disable: max-line-length

import { Injectable, Inject } from '@angular/core';

import { IBlame } from '../../models/git.model';
import { extname } from 'src/app/shared/models/paths.model';
import { Language } from '../../models/language.model';
import { IResource } from '../../models/resource.model';
import { LANGUAGES } from '../../models/language.model';

import { GitService } from '../core/git.service';
import { OpenerService } from '../core/opener.service';
import { ResourceService } from '../core/resource.service';

import { Subject } from 'rxjs';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;
import { Settings } from '../../models/setting.model';
import { MONACO_LOADED } from '../../models/monaco.model';
import { ILanguageDefinition } from '../../models/language-definition.model';
import { LANGUAGE_PROVIDERS } from '../../tokens/monaco-providers.token';
import { EditorService } from '../core/editor.service';

@Injectable({ providedIn: 'root' })
export class MonacoService {

    private readonly blames = {};
    private readonly states = {};

    private settings: Settings.Setting[];

    private options: monaco.editor.IEditorOptions;
    private editors: IEditorHolder[] = [];
    private cursor: monaco.IPosition;

    readonly cursorChanged: Subject<monaco.IPosition> = new Subject();
    readonly blameChanged: Subject<{blame: IBlame, modelId: string}> = new Subject();

    constructor(
        private readonly git: GitService,
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
        @Inject(LANGUAGE_PROVIDERS) private readonly languages: ILanguageDefinition[]
    ) {
        this.didSettingsChanged(Settings.getAll());
        MONACO_LOADED.subscribe(monaco => this.onMonacoLoaded(monaco));
    }


    /**
     * Finds the language id linked to the given `resource`
     * @param resource the resource.
     * @returns the id of the language for the resource or empty string if not found.
     */
    findLanguage(resource: IResource): string {
        const ext = extname(resource.path) || resource.path;
        const language = LANGUAGES.find(item => item.extension === ext);
        return !!language ? language.id : '';
    }

    /**
     * Disposes the editor.
     * @param editor the disposed editor.
     */
    onEditorDisposed(editor: IStandaloneCodeEditor): void {
        const item = this.editors.find(e => e.editor.getId() === editor.getId());
        if (!item) {
            throw new Error('unregistered editor ' + editor.getId());
        }

        this.editors = this.editors.filter(e => e.editor.getId() !== editor.getId());
        item.disposables.forEach(e => e.dispose());
        item.editor.dispose();

        if (this.editors.length === 0) {
            this.cursorChanged.next(undefined);
        }
    }

    /**
     * Overrides the editor features.
     * @param editor the created editor.
     */
    onEditorCreated(editor: IStandaloneCodeEditor) {
        const that = this;
        const disposables = [];
        const monaco = (<any>window).monaco;
        const linkDetector: any = editor.getContribution('editor.linkDetector');

        linkDetector.openerService.open = (uri: monaco.Uri) => {
            this.opener.openReference(editor.getModel().uri.path, uri.path);
        };

        disposables.push(linkDetector);

        disposables.push(editor.onDidBlurEditor(() => {
            this.cursorChanged.next(this.cursor);
        }));

        disposables.push(editor.onDidChangeCursorPosition(e => {
            this.didCursorChanged(e, editor);
        }));

        disposables.push(editor.onDidChangeModelContent(() => {
        }));

        this.editors.push({editor: editor, disposables: disposables});

        this.didSettingsChanged(this.settings);
    }

    /**
     * Saves the state of the editor and handles the new active resource.
     * @param context the last opened resource and its viewState
     * @param active the active resource
     * @param model the model of the active resource
     * @param editor the editor that opened the resource
     */
    onOpened(context: {resource: IResource, viewState: any}, active: IResource, model: monaco.editor.ITextModel, editor: IStandaloneCodeEditor) {
        if (context.resource) {
            this.states[context.resource.path] = context.viewState;
        }
        const viewState = this.states[active.path];
        if (viewState) {
            editor.restoreViewState(viewState); // fix #228
        }
        this.cursor = editor.getPosition();
        this.cursorChanged.next(this.cursor);
        this.refreshBlames(active, model);
    }

    /** Gets a value indicating whether blame option is enablad in the settings */
    enabledBlames() {
        return Settings.get(this.settings, 'git', 'blames').value === true;
    }

    /**
     * Refreshs the blames of the editor
     * @param resource the focused resource
     * @param model the model of the resource
     * @returns A promise that resolves with true
     */
    refreshBlames(resource: IResource, model: monaco.editor.ITextModel) {
        if (this.enabledBlames()) {
            return this.git.blame(resource).then(response => {
                const lines = resource.content.split('\n');
                const linesLength = lines.length;
                for (const item of response) {
                    item.text = lines[item.line - 1];
                    if (item.email === 'not.committed.yet') {
                        item.email = 'Uncommitted changes';
                    }
                }
                this.blames[resource.path] = response;
                this.refreshBlame(model);
                return true;
            }).catch(_ => false);
        }
        return true;
    }


    private onMonacoLoaded(monaco) {
        this.languages.forEach(item => item.register(this));
        this.editor.addSubscription(this.resources.deleted.subscribe(e => {
            this.disposeModel(e.path);
        }));
        this.editor.addSubscription(this.resources.renamed.subscribe(e => {
            this.disposeModel(e.before);
        }));
         this.editor.addSubscription(Settings.changed.subscribe(e => {
             this.didSettingsChanged(e);
         }));
    }

    private disposeModel(path: string) {
        const monaco = (<any>window).monaco;
        const model = monaco.editor.getModel(monaco.Uri.parse(path));
        if (model) {
            model.dispose();
        }
    }

    private didCursorChanged(e: monaco.editor.ICursorPositionChangedEvent, editor: IStandaloneCodeEditor) {
        this.cursor = e.position;
        this.cursorChanged.next(e.position);
        for (const item of this.editors) {
            if (item.editor.getId() !== editor.getId()) {
                const model = item.editor.getModel();
                if (model && model.id === editor.getModel().id) {
                    item.editor.setPosition(e.position);
                }
            }
        }
        this.refreshBlame(editor.getModel());
    }

    private didSettingsChanged(settings: Settings.Setting[]) {
        this.settings = settings;
        this.options = Settings.groups(settings, Settings.EDITOR_KEY);
        const monaco = (<any>window).monaco;
        if (monaco) {
            this.editors.forEach(item => {
                item.editor.updateOptions(this.options);
            });
        }
    }

    private disposeUnusedModels() {
        const monaco = (<any>window).monaco;
        const models = monaco.editor.getModels();
        for (const model of models) {
            if (model._attachedEditorCount === 0) {
                model.dispose();
            }
        }
    }

    private refreshBlame(model: monaco.editor.ITextModel) {
        if (this.enabledBlames() && model) {
            let blame;
            const blames: IBlame[] = this.blames[model.uri.path];
            if (blames) {
                const lineNumber = this.cursor ? this.cursor.lineNumber : 0;
                const content = model.getLineContent(lineNumber);
                blame = blames.find(item => item.text.trim() === content.trim());
            }
            this.blameChanged.next({blame: blame, modelId: model.id});
        }
    }

}

interface IEditorHolder {
    editor: IStandaloneCodeEditor;
    disposables: monaco.IDisposable[];
}
