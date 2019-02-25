import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Injectable, HostListener } from '@angular/core';


import { Editor, CodeEditor, ImageEditor, PreviewEditor } from '../models/editor';
import { Resource } from '../models/resource.model';

import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { GitService } from '../services/git.service';
import { TaskService } from '../services/task.service';
import { LoggingService } from '../services/logging.service';
import { ResourceService } from '../services/resource.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
    editors: Editor[] = [];

    constructor(
        readonly resources: ResourceService, readonly changeDetector: ChangeDetectorRef,
        readonly notification: NotificationService, readonly logging: LoggingService,
        readonly git: GitService,
        readonly task: TaskService,
    ) { }

    ngOnInit() {
        this.task.subscribeRefreshEvent(() => {
            this.closeAllEditors();
        });
        this.task.subscribeSelectEvent((resource: Resource) => {
            this.open(resource);
        });
        this.task.subscribeDeleteEvent((resource: Resource) => {
            this.close(resource);
        });
    }

    detectChanges() {
        this.changeDetector.detectChanges();
    }

    didTapPreviewResource(resource: Resource) {
        /*this.editors = this.editors.filter(e => e.type !== 'preview');
        this.editorService.preview(resource).then(() => {
            const preview = new PreviewEditor(this, resource);
            this.editors.push(preview);
            preview.open(resource);
        }).catch(error => {
            this.logging.error(error);
        });
        */
    }

    diff(resource: Resource) {
        return this.git.show(resource);
    }

    confirm(options: ConfirmOptions) {
        return this.notification.confirmAsync(options);
    }

    open(resource: Resource) {
        this.resources.open(resource).then((opened) => {
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

    async findReference(resource: Resource, path: string) {
        try {
            return await this.resources.findReference(resource, path);
        } catch (error) {
            this.logging.error('cannot resolve reference ' + path);
            return undefined;
        }

    }

    close(resource: Resource) {
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

    closeAllEditors() {
        while (this.editors.length > 0) {
            this.editors[0].closeAll();
        }
    }

    async save(resource: Resource) {
        try {
            await this.resources.save(resource);
            this.notification.success('resource saved on the server !');
            this.detectChanges();
            return true;
        } catch (error) {
            this.notification.error(error);
            return false;
        }
    }

}
