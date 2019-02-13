import { Resource } from './resource';
import { canBePreviewed, language as languageOf, isRepo, isPl } from '../editor/editor.utils';
import { Editor } from './editor';
import { EditorComponent } from '../editor/editor.component';
import { PREMIER_LANGAGE } from '../editor/editor.config';
import { fadeInItems } from '@angular/material';

export class CodeEditor extends Editor {
	
	private compiled = [];
	readonly type = 'code';
	private editor: monaco.editor.IStandaloneCodeEditor;
	private diffEditor: monaco.editor.IStandaloneDiffEditor;
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
	}
	
	configEditor(editor: monaco.editor.IStandaloneCodeEditor | monaco.editor.IStandaloneDiffEditor) {
		const self = this;
		const REFERENCE_PATTERN = /(@|(template|grader|builder|extends|builder|grader)\s*=)\s*(\w+:\/)?([~a-zA-Z0-9_\.\/]+)/;
		const OPEN_PATTERN = /^[a-zA-Z_](\.?\w+)*(==)|(%=)/;
		const CLOSE_PATTERN = /^==\s*$/;
		const BUILT_IN_WORDS = {
		  title: "Titre de l'exercice/feuille d'exercice",
		  author: "Auteur de l'exercice",
		  introduction: "Présentation de la feuille d'exercice, le contenu de cette clé est interprété comme du markdown.",
		  teacher: "Sur un PLTP, affiche un note visible par les enseignant seulement",
		  text: "Énoncé de l'exercice, le contenu de cette clé est interprété comme du markdown.",
		  build: "Clé contenant une fonction build (ancienne syntaxe: utiliser de préférence before), à utiliser avec le builder /builder/build.py",
		  before: "Code python permettant de modifier l'exercice avant sont exécution sur le navigateur",
		  form: "Formulaire HTML permettant à l'élève de répondre",
		  template: "Définie template comme étant la base de ce fichier",
		};

		/*monaco.languages.registerLinkProvider(PREMIER_LANGAGE, {
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
				let links = [];
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
							if (lines[i][index] == "#") {
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
				} else if(lines[i].match(CLOSE_PATTERN)) {
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
						if (i > 0 && lineContent[i] == '{' && i - 1 >= 0 && lineContent[i-1] == '{') {
							return {
								range: new monaco.Range(1, 1, 3, 10),
								contents: [
									{ value: k },
									{ value: self.getValue(k) }
								]
							}
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
						}
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
		editor.createContextKey('', {})
	}


	private compile(resource: Resource) {
		if (isPl(resource)) {
			this.component.editorService.compilePL(resource).then((response => {
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
