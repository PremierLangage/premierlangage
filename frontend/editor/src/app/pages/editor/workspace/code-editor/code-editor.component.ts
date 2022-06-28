import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CodeEditor, ICodeEditorOpenEvent } from '../../shared/models/editors.model';
import { IResource } from '../../shared/models/resources.model';
import { NotificationService } from 'src/app/core/notification.service';
import { MonacoService } from '../../shared/services/monaco.service';

import { Subscription } from 'rxjs';
import { GitService } from '../../shared/services/git.service';
import { canBePreviewed } from '../../shared/models/filters.model';
import { EditorService } from '../../shared/services/editor.service';

import { PreviewService } from '../../shared/services/preview.service';
import { IOpenOptions } from '../../shared/services/opener.service';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;

import { CompilerService } from '../../shared/services/compiler.service';
import { SettingsService } from '../../shared/services/settings.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, OnDestroy {

    private active: IResource;
    private readonly: boolean;
    private subscriptions: Subscription[] = [];
    private editorChanges: monaco.IDisposable;

    private decorations: any[];

    @Input()
    editor: CodeEditor;

    constructor(
        private readonly git: GitService,
        private readonly preview: PreviewService,
        private readonly compiler: CompilerService,
        private readonly settings: SettingsService,
        private readonly notification: NotificationService,
        private readonly editorService: EditorService,
        private readonly monacoService: MonacoService,
    ) {}

    ngOnInit() {
        this.subscriptions.push(this.editor.onDidOpen.subscribe(e => {
            this.onDidOpen(e);
        }));

        this.subscriptions.push(this.editor.onDidPreview.subscribe((item: IResource) => {
            this.onDidPreview(item);
        }));

        this.subscriptions.push(this.settings.changed.subscribe(_ => {
            this.compile().catch();
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
        this.editorChanges.dispose();
        this.monacoService.onEditorDisposed(this.editor.codeEditor);
        this.monacoService.onEditorDisposed(this.editor.diffEditor.getModifiedEditor());
    }

    codeEditorLoaded(codeEditor: IStandaloneCodeEditor) {
        this.monacoService.onEditorCreated(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
    }

    diffEditorLoaded(diffEditor: IStandaloneDiffEditor) {
        this.monacoService.onEditorCreated(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());

        this.onDidOpen({
            resource: this.editor.resource,
            options: this.editor.options
        });
    }

    private addCommands(editor: IStandaloneCodeEditor) {
        this.editorChanges = editor.onDidChangeModelContent(() => {
            this.onDidContentChanged(editor);
        });
        const empty = '';
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            this.onDidSave();
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
            this.editor.group.saveAll().catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, () => {
            this.editor.group.close(this.editor.resource, true).catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, () => {
            this.editor.group.closeAll().catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, () => {
            this.editor.group.closeSaved().catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            if (canBePreviewed(this.active)) {
                this.onDidPreview(this.active);
            }
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Enter, () => {
            this.editorService.closeActivePreviewGroup();
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.RightArrow, () => {
            this.editor.split();
        }, empty);
        // tslint:enable: no-bitwise
    }

    private async onDidSave() {
        try {
            const resource = this.editor.resource;
            await this.editor.group.save(resource);
            await this.compile();
        } catch (error) {
            this.notification.logError(error);
        }
    }

    private onDidContentChanged(editor: IStandaloneCodeEditor) {
        if (!this.readonly) {
            const model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.savedContent !== this.active.content;
        }
    }

    private onDidPreview(item: IResource) {
        this.preview.preview(item).then(() => {
            this.editorService.open(item);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private async onDidOpen(e: ICodeEditorOpenEvent) {
        const { resource, options } = e;
        const { codeEditor } = this.editor;
        const monaco = (<any>window).monaco;
        if (!monaco) {
            return;
        }
        const uri = MonacoService.parseURI(resource.path);
        const language = this.monacoService.findLanguage(resource);
        const model = monaco.editor.getModel(uri)
        || monaco.editor.createModel(resource.content, language, uri);
        const context = {
            resource: this.active,
            viewState: codeEditor.saveViewState(),
        };

        this.active = resource;

        if (model.getValue() !== this.active.content) {
            model.setValue(this.active.content);
            this.active.changed = false;
            this.active.savedContent = this.active.content;
        }

        this.readonly = options && options.diffMode || !this.active.write;

        codeEditor.setModel(model);
        codeEditor.updateOptions({ readOnly: this.readonly });
        codeEditor.focus();

        await this.checkDiffOptions(monaco, language);
        await this.checkCodeOptions(monaco, options);

        this.monacoService.onOpened(context, this.active, model, codeEditor);

        this.compile().catch();
    }

    private async checkCodeOptions(monaco: any, options: IOpenOptions) {
        const { codeEditor } = this.editor;
        const { position } = options;
        if (position) {
            setTimeout(() => {
                codeEditor.setPosition({
                    lineNumber: position.line,
                    column: position.column
                });
                codeEditor.revealLineInCenter(position.line, monaco.editor.ScrollType.Smooth);
            }, 100);
        }
    }

    private async checkDiffOptions(monaco: any, language: string) {
        const options = this.editor.options || {};
        if (options.diffMode) {
            let diff = '';

            try {
                diff = await this.git.show(this.active) || '';
            } catch (_) {}

            this.editor.diffEditor.setModel({
                original: monaco.editor.createModel(diff, language),
                modified: monaco.editor.createModel(this.active.content, language),
            });

            this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: this.readonly });
            this.editor.diffEditor.getModifiedEditor().focus();
        }
    }

    private async compile() {
        const resource = this.editor.resource;
        try {
            await this.compiler.compile(resource);

            this.decorations = this.decorations || [];
            const editor = this.editor.codeEditor;
            const errors = this.compiler.errors(resource);
            if (this.compiler.enabled) {
                this.decorations =  editor.deltaDecorations(this.decorations, errors.map(error => {
                    const message = `**${error.type}**: ${error.message}`;
                    return {
                        range: new monaco.Range(error.lineno, 1, error.lineno, 1),
                        options: {
                            isWholeLine: true,
                            className: 'error-line-content',
                            glyphMarginClassName: 'error-glyph-margin',
                            glyphMarginHoverMessage: { value: message, isTrusted: true } ,
                        }
                    } as monaco.editor.IModelDeltaDecoration;
                }));
            } else {
                this.decorations = editor.deltaDecorations(this.decorations, []);
            }
        } catch {}
    }

}
