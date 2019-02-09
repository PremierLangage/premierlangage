import { Resource } from './resource';
import { Editor } from './editor';
import { EditorComponent } from '../editor/editor.component';
export class ImageEditor extends Editor {
	readonly type = 'image';
	zoom = 0.5;
	constructor(component: EditorComponent, resource: Resource) {
		super(component, resource);
		this.open(resource);
	}
	zoomIn() {
		this.zoom = Math.min(this.zoom + .05, 1);
	}
	zoomOut() {
		this.zoom = Math.max(this.zoom - .05, 0.3);
	}
	canOpen(resource: Resource) {
		return resource.image !== undefined;
	}
}
