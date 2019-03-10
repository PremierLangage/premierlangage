import { ViewEncapsulation, Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CodeEditor } from '../../shared/models/editor.model';
import { IResource } from '../../shared/models/resource.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { PL, MonacoService } from '../../shared/services/monaco/monaco.service';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;
import { Subscription } from 'rxjs';
import { GitService } from '../../shared/services/core/git.service';
import { isSVG, canBePreviewed } from '../../shared/models/filters.model';
import { EditorService } from '../../shared/services/core/editor.service';
import { IBlame } from '../../shared/models/git.model';
import { PreviewService } from '../../shared/services/core/preview.service';
import { IOpenOptions } from '../../shared/services/core/opener.service';

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
    private decorations: string[] = [];
    private previewCondtion: monaco.editor.IContextKey<boolean>;

    @Input()
    editor: CodeEditor;
    blame: IBlame;

    constructor(
        private readonly git: GitService,
        private readonly preview: PreviewService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
        private readonly editorService: EditorService,
        private readonly monacoService: MonacoService,
    ) {}

    ngOnInit() {
        this.subscriptions.push(this.editor.onOpened.subscribe(uri => {
            this.open(uri);
        }));
        this.subscriptions.push(this.editor.onPreviewCommand.subscribe((item: IResource) => {
            this.didPreview(item);
        }));
        this.subscriptions.push(this.editor.onDiffCommand.subscribe(() => {
            this.open(this.editor.resource());
        }));
        this.subscriptions.push(this.monacoService.blameChanged.subscribe(e => {
            if (e.blame && e.modelId === this.editor.codeEditor.getModel().id) {
                this.blame = e.blame;
            }
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
        this.editorChanges.dispose();
        this.monacoService.disposeEditor(this.editor.codeEditor);
    }

    codeEditorLoaded(codeEditor: IStandaloneCodeEditor) {
        this.monacoService.registerEditor(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.resource());
    }

    diffEditorLoaded(diffEditor: IStandaloneDiffEditor) {
        this.monacoService.registerEditor(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.resource());
    }

    private addCommands(editor: IStandaloneCodeEditor) {
        this.editorChanges = editor.onDidChangeModelContent(() => {
            this.didContentChanged(editor);
        });
        const empty = '';
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            this.didSave();
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
            this.editor.group().saveAll().catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, () => {
            this.editor.group().close(this.editor.resource(), true).catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, () => {
            this.editor.group().closeAll(true).catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, () => {
            this.editor.group().closeSaved().catch(error => {
                this.notification.logError(error);
            });
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            if (canBePreviewed(this.active)) {
                this.didPreview(this.active);
            }
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.Enter, () => {
            this.editorService.closePreview();
        }, empty);

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.RightArrow, () => {
            this.editor.split();
        }, empty);
        // tslint:enable: no-bitwise
    }

    private didSave() {
        this.editor.group().save(this.editor.resource()).then(success => {
            if (success) {
                this.monacoService.provideBlames(this.active, this.editor.codeEditor.getModel());
            }
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private didContentChanged(editor: IStandaloneCodeEditor) {
        if (!this.readonly) {
            const model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.savedContent !== this.active.content;
        }
    }

    private didPreview(item: IResource) {
        this.preview.preview(item).then(() => {
            this.editorService.open(item);
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private async open(resource: IResource, options?: IOpenOptions) {
        this.blame = null;
        this.active = resource;

        const monaco = (<any>window).monaco;
        const uri = monaco.Uri.parse(resource.path);
        const meta = this.active.meta;

        const language = this.monacoService.findLanguage(this.active);
        const model = monaco.editor.getModel(uri) || monaco.editor.createModel(this.active.content, language, uri);

        if (model.getValue() !== this.active.content) {
            model.setValue(this.active.content);
            this.active.changed = false;
            this.active.savedContent = this.active.content;
        }

        this.readonly = this.editor.diffEditing || !this.active.write;

        this.editor.codeEditor.setModel(model);
        this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
        this.editor.codeEditor.focus();

        await this.checkOptions(monaco, resource, options);
        await this.checkDiffOptions(monaco, language);

        this.monacoService.provideBlames(this.active, model);
    }

    private async checkDiffOptions(monaco: any, language: string) {
        if (this.editor.diffEditing) {
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

    private async checkOptions(monaco: any, resource: IResource, options?: IOpenOptions) {
        if (options) {
            if (options.position) {
                this.editor.codeEditor.setPosition({
                    lineNumber: options.position.line, column: options.position.line
                });
                this.editor.codeEditor.revealLineInCenter(options.position.line, monaco.editor.ScrollType.Smooth);
            }
        }
    }
}
