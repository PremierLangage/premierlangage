import { ViewEncapsulation, Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CodeEditor } from '../../shared/models/editor.model';
import { Resource } from '../../shared/models/resource.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { IEditorDocument } from '../../shared/services/core/opener.service';
import { PL, MonacoService } from '../../shared/services/monaco/monaco.service';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;
import { Subscription } from 'rxjs';
import { GitService } from '../../shared/services/core/git.service';
import { isSVG, canBePreviewed } from '../../shared/models/filters.model';
import { EditorService } from '../../shared/services/core/editor.service';
import { IBlame } from '../../shared/models/git.model';
import { asDocument } from 'src/app/shared/models/paths.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss'],
  })
export class CodeEditorComponent implements OnInit, OnDestroy {

    private active: Resource;
    private readonly: boolean;
    private subscriptions: Subscription[] = [];
    private editorChanges: monaco.IDisposable;
    private decorations: string[] = [];
    private previewCondtion: monaco.editor.IContextKey<boolean>;

    @Input()
    editor: CodeEditor;
    blame: IBlame;


    constructor(
        private readonly resources: ResourceService,
        private readonly gitService: GitService,
        private readonly editorService: EditorService,
        private readonly notification: NotificationService,
        private readonly monacoService: MonacoService,
    ) {}

    ngOnInit() {
        this.subscriptions.push(this.editor.onOpened.subscribe(uri => {
            this.open(uri);
        }));
        this.subscriptions.push(this.editor.onPreviewCommand.subscribe((item: Resource) => {
            this.didPreview(item);
        }));
        this.subscriptions.push(this.editor.onDiffCommand.subscribe(() => {
            this.open(this.editor.document());
        }));
        this.subscriptions.push(this.monacoService.blameChanged.subscribe(e => {
            if (e.blame && e.modelId === this.editor.codeEditor.getModel().id) {
                this.blame = e.blame;
            }
        }));
    }

    ngOnDestroy() {
        for (const item of this.subscriptions) {
            item.unsubscribe();
        }
        this.editorChanges.dispose();
        this.monacoService.disposeEditor(this.editor.codeEditor);
    }

    codeEditorLoaded(codeEditor: IStandaloneCodeEditor) {
        this.monacoService.registerEditor(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.document());
    }

    diffEditorLoaded(diffEditor: IStandaloneDiffEditor) {
        this.monacoService.registerEditor(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.document());
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
            this.editor.group().close(this.editor.document(), true).catch(error => {
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
        this.editor.group().save(this.editor.document()).then(success => {
            if (success) {
                this.monacoService.provideBlames(this.active);
            }
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private didContentChanged(editor: IStandaloneCodeEditor) {
        if (!this.readonly) {
            const model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.lastContent !== this.active.content;
        }
    }

    private didPreview(item: Resource) {
        this.resources.preview(item).then(() => {
            this.editorService.open(asDocument(item));
        }).catch(error => {
            this.notification.logError(error);
        });
    }

    private async open(document: IEditorDocument) {
        this.blame = null;
        this.active = document.resource;
        this.monacoService.provideBlames(this.active);

        const monaco = (<any>window).monaco;
        const meta = this.active.meta;
        const language = this.monacoService.findLanguage(this.active);
        const model = monaco.editor.getModel(document.uri) || monaco.editor.createModel(this.active.content, language, document.uri);

        if (model.getValue() !== this.active.content) {
            model.setValue(this.active.content);
            this.active.changed = false;
            this.active.lastContent = this.active.content;
        }

        this.readonly = this.editor.diffEditing || !this.active.write;
        this.editor.codeEditor.setModel(model);
        this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
        this.editor.codeEditor.focus();

        await this.checkOptionOptions(document, monaco);
        await this.checkDiffOptions(monaco, language);
    }

    private async checkDiffOptions(monaco: any, language: string) {
        if (this.editor.diffEditing) {
            let diff = '';
            try {
                diff = await this.gitService.show(this.active) || '';
            } catch (_) {}
            this.editor.diffEditor.setModel({
                original: monaco.editor.createModel(diff, language),
                modified: monaco.editor.createModel(this.active.content, language),
            });
            this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: this.readonly });
            this.editor.diffEditor.getModifiedEditor().focus();
        }
    }

    private async checkOptionOptions(document: IEditorDocument, monaco: any) {
        if (document.position) {
            this.editor.codeEditor.setPosition({
                lineNumber: document.position.line, column: document.position.line
            });
            this.editor.codeEditor.revealLineInCenter(document.position.line, monaco.editor.ScrollType.Smooth);
        }
    }
}
