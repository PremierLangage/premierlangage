import { Resource } from './resource';
import { canBePreviewed, language as languageOf, isRepo } from '../editor/editor.utils';
import { Editor } from './editor';
import { EditorComponent } from '../editor/editor.component';

export class CodeEditor extends Editor {
	
	readonly type = 'code';
	private editor: any;
	private diffEditor: any;
	diffMode: boolean;
	
	constructor(component: EditorComponent, resource: Resource) {
		super(component, resource);
		this.loadOptions();
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

	open(resource: Resource) {
		const monaco = (<any>window).monaco;
		this.selection.state.state = this.editor.saveViewState();
		if (resource.state.model) {
			this.editor.restoreViewState(resource.state.state);
		}
		else {
			resource.state.model = monaco.editor.createModel(resource.content, languageOf(resource), resource.path);
		}
		this.editor.setModel(resource.state.model);
		this.editor.updateOptions({ readOnly: !resource.write });
		if(this.diffMode) {
			this.component.lastRevision(resource).then(value => {
				if (value) {
					var originalModel = monaco.editor.createModel(value, languageOf(resource));
					this.diffEditor.setModel({
						original: originalModel,
						modified: this.editor.model
					});
					this.diffEditor.modifiedEditor.updateOptions({ readOnly: !resource.write });
					this.diffEditor.modifiedEditor.focus();
				}
			});
		} else {
			this.editor.focus();
		}
		super.open(resource);
	}

	addCommands(editor: any) {
		const self = this;
		editor.onDidChangeModelContent(() => {
			self.didChange();
		});
		editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_S, () => {
			self.didSave();
		});
		editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_S, () => {
			self.didSaveAll();
		});
		editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyCode.KEY_W, () => {
			self.didClose();
		});
		editor.addCommand(monaco.KeyMod.WinCtrl | monaco.KeyMod.Alt | monaco.KeyCode.KEY_W, () => {
			self.didCloseAll();
		});
	}

	onInit(editor: any) {
		this.editor = editor;
		this.addCommands(this.editor);
		this.open(this.selection);
	}
	
	onInitDiff(editor: any) {
		this.diffEditor = editor;
		this.addCommands(this.diffEditor.modifiedEditor);
	}

	didChange() {
		if (this.diffMode) {
			this.selection.content = this.diffEditor.modifiedEditor.getValue();
		} else {
			this.selection.content = this.editor.getValue();
		}
		this.selection.changed = true;
	}
	
	/** save the focued resource */
	didSave() {
		this.selection.changed = false;
		this.component.save(this.selection);
	}
	
	/** saves the resources */
	didSaveAll() {
		for (const e of this.resources) {
			this.component.save(e);
		}
	}

	/** close the focused resource after asking a confirmation */
	didClose() {
		this.component.confirmThenClose(this.selection, this);
	}

	/** closes all resources and ask confirmation if any of them is changed */
	didCloseAll() {
		if (this.resources.some(e => e.changed)) {
			const options = {
				title: "Do you want to close the files ?",
				message: "Your changes will be lost if you don't save them.",
			}
			this.component.confirm(options).then(confirmed => {
				if (confirmed) {
					this.closeAll();
				}
			});
		} else {
			this.closeAll();
		}
	}

	/** closes saved resources without asking confirmation */
	didCloseSaved() {
		while (this.resources.some(e => !e.changed)) {
			for (let i = 0; i < this.resources.length; i++) {
				if (!this.resources[i].changed) {
					this.close(this.resources[i], this.component.editors);
				}
			}
		}
	}

	canOpen(resource: Resource) {
		return !resource.image;
	}


	canDiff(resource: Resource) {
		return isRepo(resource) && !this.diffMode;
	}
}
