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
		readonly editorService: EditorService, readonly changeDetector: ChangeDetectorRef, 
		readonly notification: NotificationService, readonly logging: LoggingService,
		readonly git: GitService
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

	detectChanges() {
		this.changeDetector.detectChanges();
	}
	
	didTapOpenResource(resource: Resource, editor: Editor) {
		editor.open(resource);
	}

	didTapCloseResource(resource: Resource, editor: Editor, event: MouseEvent) {
		event.stopPropagation(); 
		editor.closeConfirm(resource);
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
	
	diff(resource: Resource) {
		return this.git.show(resource);
	}

	confirm(options: ConfirmOptions) {
		return this.notification.confirmAsync(options);
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

	closeResource(resource: Resource) {
		let i = 0;
		let contains = false;
		while (true) {
			i = 0;
			contains = false;
			while (i < this.editors.length) {
				if (this.editors[i].contains(resource)) {
					contains = true;
					this.editors[i].close(resource);
				}
				i++;
			}
			if (!contains) {
				break;
			}
		}
	}
	
	async save(resource: Resource) {
		try {
			await this.editorService.save(resource);
			this.notification.success('resource saved on the server !');
			this.detectChanges();
			return true;
		} catch(error) {
			this.notification.error(error);
			return false;
		}
	}

	resources() {
		return this.editorService.resources;
	}

	runningTask() {
		return this.editorService.runningTask;
	}


	@HostListener('window:beforeunload', ['$event'])
	beforeunload($event: any) {
			if (this.editorService.findPredicate(e => e.changed)) {
				$event.returnValue =true;
			}
	}
}
