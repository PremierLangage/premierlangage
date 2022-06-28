// tslint:disable: max-line-length

import { Injectable, Inject } from '@angular/core';

import { Paths } from 'src/app/shared/utils/paths';
import { IResource } from '../models/resources.model';
import { LanguageDefinition, LANGUAGES, LANGUAGE_PROVIDERS } from '../languages/language';

import { OpenerService } from './opener.service';
import { ResourceService } from './resource.service';

import { Subject } from 'rxjs';
import { Settings } from '../models/settings.model';
import { MONACO_LOADED } from '../models/monaco.model';
import { EditorService } from './editor.service';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

import { ThemeDefinition, THEME_PROVIDERS } from '../../../../shared/themes/theme';
import { SettingsService } from './settings.service';

interface IEditorHolder {
    editor: IStandaloneCodeEditor;
    disposables: monaco.IDisposable[];
}

@Injectable({ providedIn: 'root' })
export class MonacoService {


    private readonly states = {};

    private editors: IEditorHolder[] = [];
    private cursor: monaco.IPosition;

    readonly cursorChanged: Subject<monaco.IPosition> = new Subject();

    constructor(
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly settings: SettingsService,
        private readonly resources: ResourceService,

        @Inject(THEME_PROVIDERS)
        private readonly themes: ThemeDefinition[],
        @Inject(LANGUAGE_PROVIDERS)
        private readonly languages: LanguageDefinition[],
    ) {
        MONACO_LOADED.subscribe(this.onMonacoLoaded.bind(this));
    }

    static parseURI(path: string) {
        return monaco.Uri.parse('file://' + path);
    }

    /**
     * Finds the language id linked to the given `resource`
     * @param resource the resource.
     * @returns the id of the language for the resource or empty string if not found.
     */
    findLanguage(resource: IResource): string {
        const ext = Paths.extname(resource.path) || resource.path;
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
        const disposables = [];
        const linkDetector: any = editor.getContribution('editor.linkDetector');

        linkDetector.openerService.open = (uri: monaco.Uri) => {
            const { authority, path } =  editor.getModel().uri;
            let base = '';
            if (!path.startsWith('/')) {
                base = `${authority}/${path}`;
            } else {
                base =  `${authority}${path}`;
            }
            this.opener.openReference(base, uri.path);
        };

        disposables.push(linkDetector);

        disposables.push(editor.onDidBlurEditorText(() => {
            this.cursorChanged.next(this.cursor);
        }));

        disposables.push(editor.onDidChangeCursorPosition(e => {
            this.onCursorChanged(e, editor);
        }));

        disposables.push(editor.onDidChangeModelContent(() => {
        }));

        this.editors.push({ editor, disposables });
        this.updateSettings();
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
    }

    private onMonacoLoaded() {
        this.themes.forEach(theme => {
            monaco.editor.defineTheme(theme.id, {
                base: theme.base,
                inherit: theme.inherit,
                rules: theme.rules,
                colors: theme.colors as any
            });
        });

        this.languages.forEach(language => {
            monaco.languages.register({
                id: language.id,
                extensions: language.extensions || [],
                aliases: language.aliases || []
            });

            monaco.languages.setMonarchTokensProvider(language.id, language.syntax());

            language.hoversProviders().forEach(provider => {
                monaco.languages.registerHoverProvider(language.id, provider);
            });

            language.foldingsProviders().forEach(provider => {
                monaco.languages.registerFoldingRangeProvider(language.id, provider);
            });

            language.linksProviders().forEach(provider => {
                monaco.languages.registerLinkProvider(language.id, provider);
            });

            language.completionsProviders().forEach(provider => {
                monaco.languages.registerCompletionItemProvider(language.id, provider);
            });

        });

        this.editor.subscribe(this.resources.deleted.subscribe(e => {
            this.disposeModel(e.path);
        }));

        this.editor.subscribe(this.resources.renamed.subscribe(e => {
            this.disposeModel(e.before);
        }));

        this.editor.subscribe(this.settings.changed.subscribe(_ => {
             this.updateSettings();
        }));

    }


    private disposeModel(path: string) {
        const model = monaco.editor.getModel(MonacoService.parseURI(path));
        if (model) {
            model.dispose();
        }
    }

    private onCursorChanged(e: monaco.editor.ICursorPositionChangedEvent, editor: IStandaloneCodeEditor) {
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
    }

    private updateSettings() {
        const settings = this.settings.extract(Settings.EDITOR_KEY);
        if (monaco) {
            this.editors.forEach(item => {
                item.editor.updateOptions(settings);
            });
            monaco.editor.setTheme(settings['theme']);
        }
    }

}
