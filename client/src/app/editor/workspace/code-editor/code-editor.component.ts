import { ViewEncapsulation, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CodeEditor } from '../../shared/models/editor.model';
import { Resource } from '../../shared/models/resource.model';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CompilerService } from '../../shared/services/core/compiler.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { PL, MonacoService } from '../../shared/services/monaco/monaco.service';
import { IEditorTab } from '../../shared/services/core/opener.service';

import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;
import IStandaloneDiffEditor = monaco.editor.IStandaloneDiffEditor;
import { Subscription } from 'rxjs';
import { GitService } from '../../shared/services/core/git.service';
import { isSVG } from '../../shared/models/filters.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.scss'],
  })
export class CodeEditorComponent implements OnInit, OnDestroy {
    @Input()
    editor: CodeEditor;
    private active: Resource;
    private readonly: boolean;
    private openSubscription: Subscription;
    private diffSubscription: Subscription;
    private diffContent: string;

    constructor(
        private readonly compiler: CompilerService,
        private readonly resources: ResourceService,
        private readonly git: GitService,
        private readonly notification: NotificationService,
        private readonly monacoService: MonacoService,
    ) {}

    ngOnInit() {
        this.openSubscription = this.editor.onOpened.subscribe(uri => {
            this.open(uri);
        });

        this.diffSubscription = this.editor.onDiffEditing.subscribe(mode => {
            if (mode) {
                this.git.show(this.active).then(response => {
                    this.diffContent = response;
                    if (this.editor.diffEditor) {
                        this.open(this.editor.data());
                    }
                }).catch(error => this.notification.logError(error));
            } else {
                this.open(this.editor.data());
                this.editor.diffEditor.getModel().original.dispose();
            }
        });
    }

    ngOnDestroy() {
        this.openSubscription.unsubscribe();
        this.diffSubscription.unsubscribe();
        this.monacoService.disposeEditor(this.editor.codeEditor);
    }

    codeEditorLoaded(codeEditor: IStandaloneCodeEditor) {
        this.monacoService.registerEditor(codeEditor);
        this.editor.codeEditor = codeEditor;
        this.addCommands(codeEditor);
        this.open(this.editor.data());
    }

    diffEditorLoaded(diffEditor: IStandaloneDiffEditor) {
        this.monacoService.registerEditor(diffEditor.getModifiedEditor());
        this.editor.diffEditor = diffEditor;
        this.addCommands(this.editor.diffEditor.getModifiedEditor());
        this.open(this.editor.data());
    }

    private open(data: IEditorTab) {
        const monaco = (<any>window).monaco;
        this.active = data.resource;
        const model = monaco.editor.getModel(data.uri)
        || monaco.editor.createModel(
                this.active.content,
                this.monacoService.findLanguage(this.active),
                data.uri
        );
        if (model.getValue() !== this.active.content) {
            model.setValue(this.active.content);
        }
        this.editor.codeEditor.setModel(model);
        const meta = this.active.meta;
        // tslint:disable-next-line: max-line-length
        this.readonly = (!this.active.write || meta.application || meta.archive || meta.image);
        this.editor.codeEditor.updateOptions({ readOnly: this.readonly });
        this.editor.codeEditor.focus();

        if (this.editor.diffEditing) {
            this.editor.diffEditor.setModel({
                original: monaco.editor.createModel(this.diffContent || '', this.monacoService.findLanguage(this.active)),
                modified: this.editor.codeEditor.getModel()
            });
            this.editor.diffEditor.getModifiedEditor().updateOptions({ readOnly: !this.readonly });
            this.editor.diffEditor.getModifiedEditor().focus();
        }

        if (this.readonly) {
            this.notification.warning('readonly editor');
        }
    }


    private addCommands(editor: IStandaloneCodeEditor) {
        editor.onDidChangeModelContent(() => {
            this.didContentChanged(editor);
        });

        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {
            this.editor.group().save(this.editor.data()).catch(error => {
                this.notification.logError(error);
            });
        }, '');

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
            this.editor.group().saveAll().catch(error => {
                this.notification.logError(error);
            });
        }, '');

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_K, () => {
            this.editor.group().close(this.editor.data(), true).catch(error => {
                this.notification.logError(error);
            });
        }, '');

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_K, () => {
            this.editor.group().closeAll(true).catch(error => {
                this.notification.logError(error);
            });
        }, '');

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Alt | monaco.KeyCode.KEY_U, () => {
            this.editor.group().closeSaved().catch(error => {
                this.notification.logError(error);
            });
        }, '');
        // tslint:enable: no-bitwise
    }

    private didContentChanged(editor: IStandaloneCodeEditor) {
        if (!this.readonly) {
            const model = editor.getModel();
            this.active.content = model.getValue();
            this.active.changed = this.active.lastContent !== this.active.content;
        }
    }

    /*
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
  */
}
