import { Component, ViewEncapsulation, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { CodeDocument } from 'src/app/shared/models/code-editor.model';
import { MatSelectChange } from '@angular/material';


@Component({
 // tslint:disable-next-line: component-selector
  selector: 'code-editor-component',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeEditorComponent extends AbstractComponent implements OnDestroy {
    private readonly disposables: monaco.IDisposable[] = [];
    private readonly states: { [k: string]: monaco.editor.ICodeEditorViewState } = {};
    private editor: monaco.editor.IStandaloneCodeEditor;
    private editorContent = '';

    readonly properties: Property[] = [
        { name: 'code', default: '' },
        { name: 'codes', default: [] },
        { name: 'theme', default: 'dark' },
        { name: 'height', default: 200 },
        { name: 'tabSize', default: 4 },
        { name: 'language', default: 'python' },
        { name: 'lineNumbers', default: 'on' },
        { name: 'autoIndent', default: true },
        { name: 'renderWhitespace', default: 'all' },
        { name: 'renderIndentGuides', default: true },
    ];

    @Input()
    codes: CodeDocument[] = [];

    @Input()
    theme: 'light' | 'dark' = 'dark';

    @Input()
    height = '200px';

    @Input()
    tabSize = 4;

    @Input()
    language = 'python';

    @Input()
    lineNumbers: 'on' | 'off' = 'on';

    @Input()
    autoIndent = false;

    @Input()
    renderWhitespace: 'all' | 'none' | 'boundary' = 'all';


    get code(): string {
        return this.editorContent;
    }

    @Input()
    set code(value: string) {
        this.editorContent = value;
        if (this.editor) {
            this.editor.getModel().setValue(value);
        }
    }

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnDestroy(): void {
        this.disposables.forEach(e => e.dispose());

    }

    onDidResetEditorCode(): void {
        const document = this.findDocument(this.language);
        this.code = document.code = document.defaultCode;
    }

    onDidSelectLanguage(e: MatSelectChange): void {
        if (this.language !== e.value) {
            this.selectLanguage(e.value);
        }
    }

    onDidLoadEditor(editor: monaco.editor.IStandaloneCodeEditor): void {
        this.editor = editor;
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {}, '');

        this.disposables.push(editor.onDidChangeModelContent(this.onDidChangeContent.bind(this)));

        this.onRender();
    }

    onRender(): void {
        this.codes = this.codes || [];
        if (!this.codes.length) {
            this.codes.push({
                code: this.code,
                language: this.language,
                defaultCode: this.code,
            });
        }

        this.codes.forEach(code => {
            code.defaultCode = code.defaultCode || code.code;
            if (code.language === this.language) {
                this.editorContent = code.code;
            }
        });

        if (this.editor) {
            this.editor.updateOptions({
                autoIndent: this.autoIndent,
                lineNumbers: this.lineNumbers,
                renderWhitespace: this.renderWhitespace,
                quickSuggestions: false,
                scrollbar: {
                    horizontalScrollbarSize: 4,
                    verticalScrollbarSize: 4
                },
            });

            this.editor.getModel().updateOptions({
                tabSize: this.tabSize,
                insertSpaces: true,
                trimAutoWhitespace: true,
            });

            monaco.editor.setTheme(this.theme === 'light' ? 'vs' : 'vs-dark');

            this.selectLanguage(this.language);
        }
    }

    private onDidChangeContent() {
        const doc = this.findDocument(this.language);
        this.editorContent = doc.code = this.editor.getValue();
    }

    private selectLanguage(newLanguage: string): void {
        const document = this.findDocument(newLanguage);
        const lastState = this.states[newLanguage];
        const currState = this.editor.saveViewState();
        const uri = monaco.Uri.parse('file://' + newLanguage);

        this.states[this.language] = currState;
        this.language = newLanguage;
        this.editorContent = document.code;
        const model = monaco.editor.getModel(uri) || monaco.editor.createModel(
            document.code,
            newLanguage,
            uri
        );

        this.editor.setModel(model);

        if (lastState) {
            this.editor.restoreViewState(lastState);
        }
    }

    private findDocument(language: string): CodeDocument {
        return this.codes.find(e => e.language.trim() === language.trim());
    }

}

export class CodeEditorComponentDefinition implements ComponentDefinition {
    component = CodeEditorComponent;
    name = 'Code Editor';
    icon = 'code-editor.svg';
    description = `A powerful code editor`;
    selector = 'c-code-editor';
    link = '/components/code-editor';
    usages = [
        { label: 'Single Language', path: 'playground/code-editor.pl' },
        { label: 'Multi Language', path: 'playground/code-editor-multi-language.pl' }
    ];
    properties = [
        { name: 'code', default: '', type: 'string', description: 'Code to display in the editor' },
        { name: 'codes', default: [], type: 'CodeDocument[]', description: 'List of codes in a multi language mode' },
        { name: 'theme', default: 'dark', type: '"light" | "dark"', description: 'editor theme' },
        { name: 'height', default: '200px', type: 'string', description: 'editor height in px'},
        { name: 'tabSize', default: 4, type: 'number', description: 'editor tabulation size' },
        { name: 'language', default: 'python', type: 'string', description: 'the language of the editor' },
        { name: 'lineNumbers', default: 'on', type: '"on" | "off" ', description: 'Control the rendering of line numbers.' },
        { name: 'autoIndent', default: true, type: 'boolean', description: 'Enable auto indentation adjustment.' },
        { name: 'renderWhitespace', default: 'all', type: '"all" | "none" | "boundary"', description: 'Enable rendering of whitespace.' },
        { name: 'renderIndentGuides', default: true, type: 'boolean', description: 'Enable rendering of indent guides' },
    ];
}
