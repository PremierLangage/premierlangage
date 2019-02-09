import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Injectable, HostListener } from '@angular/core';
import { Resource } from '../models/resource';
import { EditorService } from './editor.service';

import { NotificationService } from '../shared/services/notification.service';
import { Editor } from '../models/editor';
import { CodeEditor } from '../models/code-editor';
import { ImageEditor } from '../models/image-editor';
import { PreviewEditor } from '../models/preview-editor';
import { LoggingService } from '../shared/services/logging.service';
import { ConfirmOptions } from '../shared/components/confirm/confirm.component';
import { GitService } from './git/git-service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {
	editors: Editor[] = [];

	constructor(
		private editorService: EditorService, private changeDetector: ChangeDetectorRef, 
		private notification: NotificationService, private logging: LoggingService,
		private git: GitService
	) { }

	ngOnInit() {
		this.editorService.refresh();
		this.editorService.subscribeRefreshEvent(() => {
			while (this.editors.length > 0) {
				this.editors[0].closeAll();
			}
		});
		this.editorService.subscribeSelectEvent((resource: Resource) => {
			this.openResource(resource);
		});
		this.editorService.subscribeDeleteEvent((resource: Resource) => {
			this.closeResource(resource);
		});
	}

	didTapOpenResource(resource: Resource, editor: Editor) {
		editor.open(resource);
	}

	didTapCloseResource(resource: Resource, editor: Editor, event: any) {
		event.stopPropagation(); 
		this.confirmThenClose(resource, editor);
	}

	didTapPreviewResource(resource: Resource) {
		this.editors = this.editors.filter(e => e.type !== 'preview');
		this.editorService.preview(resource).then(() => {
			const preview = new PreviewEditor(this, resource);
			this.editors.push(preview);
			preview.open(resource);
		}).catch(error => {
			this.logging.error(error);
		});
	}
	
	openResource(resource: Resource) {
		this.editorService.open(resource).then((opened) => {
			if (opened) {
				const editor = this.editors.find(e => e.canOpen(resource));
				if (editor) {
					editor.open(resource);
				} else {
					if (resource.image) {
						this.editors.push(new ImageEditor(this, resource));
					} else {
						this.editors.push(new CodeEditor(this, resource));
					}
				}
			}
		}).catch(error => {
			this.logging.error(error);
		});
	}
	
	async confirmThenClose(resource: Resource, editor: Editor) {
		const options = {
			title: "Do you want to close the'" + resource.name + "'?",
			message: "Your changes will be lost if you don't save them.",
		}
		if (!resource.changed || await this.notification.confirmAsync(options)) {
			editor.close(resource, this.editors);
		}
	}

	confirm(options: ConfirmOptions) {
		return this.notification.confirmAsync(options);
	}

	closeResource(resource: Resource) {
		let i = 0;
		let contains = false;
		while (true) {
			i = 0;
			contains = false;
			while (i < this.editors.length) {
				if (this.editors[i].contains(resource)) {
					contains = true;
					this.editors[i].close(resource, this.editors);
				}
				i++;
			}
			if (!contains) {
				break;
			}
		}
	}
	
	detectChanges() {
		this.changeDetector.detectChanges();
	}

	resources() {
		return this.editorService.resources;
	}

	runningTask() {
		return this.editorService.runningTask;
	}

	lastRevision(resource: Resource) {
		return this.git.show(resource);
	}

	async save(resource: Resource) {
		this.editorService.save(resource).then(() => {
			this.notification.success('resource saved on the server !');
			this.detectChanges();
		}).catch(error => {
			console.log(error);
		})
	}

	@HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
		if (this.editorService.findPredicate(e => e.changed)) {
			$event.returnValue =true;
		}
    }
}
