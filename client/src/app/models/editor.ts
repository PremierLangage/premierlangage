import { Resource, resourceInit as resourceDefaultState } from './resource';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EditorComponent } from '../editor/editor.component';
export abstract class Editor {
	readonly changes = {};
	readonly type: string;
	readonly resources: Resource[] = [];
	readonly options = [];
	readonly component: EditorComponent;
	selection: Resource;
	
	constructor(component: EditorComponent, resource: Resource) {
		this.selection = resource;
		this.component = component;
	}
	
	abstract canOpen(resource: Resource): boolean;
	
	close(resource: Resource) {
		let index = this.resources.findIndex(e => e.path === resource.path);
		if (index == -1) {
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
		if (this.component.editors.findIndex(e => e.contains(resource)) == -1) {
			resourceDefaultState(resource);
		}
		if (this.isEmpty()) {
			this.component.editors.splice(this.component.editors.findIndex(e => e === this), 1);
		}
		this.component.detectChanges();
		this.onClosed(resource);
	}

	closeConfirm(resource: Resource) {
		if (resource.changed) {
			const options = {
				title: "Do you want to close'" + resource.name + "'?",
				message: "Your changes will be lost if you don't save them.",
			}
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
		return this.resources.findIndex(item => item.path === resource.path) != -1;
	}

	drop(event: CdkDragDrop<Resource[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		}
		else {
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

	onSaved(resource: Resource) {}
	onClosed(resource: Resource) {}
}
