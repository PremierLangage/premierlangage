import { Resource } from './resource';
import { Editor } from './editor';
export class PreviewEditor extends Editor {
	readonly type = 'preview';
	canOpen(resource: Resource): boolean {
		return resource.state.preview !== undefined;
	}
	content() {
		return this.selection.state.preview;
	}
	title(resource: Resource) {
		return 'Preview ' + resource.name;
	}
	open(resource: Resource) {
		if (this.resources.length === 0)
			this.resources.push(resource);
		this.resources[0] = resource;
		this.selection = resource;
	}
}
