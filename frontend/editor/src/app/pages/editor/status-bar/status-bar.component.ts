import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { isRepo } from '../shared/models/filters.model';
import { IResource } from '../shared/models/resources.model';
import { MonacoService } from '../shared/services/monaco.service';
import { TaskService } from '../../../core/task.service';
import { EditorService } from '../shared/services/editor.service';



@Component({
    // tslint:disable-next-line: component-selector
  selector: 'editor-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
})
export class StatusBarComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    focused: IResource;
    cursor: monaco.IPosition;

    constructor(
        private readonly task: TaskService,
        private readonly monaco: MonacoService,
        private readonly editor: EditorService
    ) { }

    ngOnInit() {
        this.subscriptions.push(this.monaco.cursorChanged.subscribe(cursor => {
            this.cursor = cursor;
        }));

        this.subscriptions.push(this.editor.activeResource.subscribe(resource => {
            this.focused = resource;
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    querying() {
        return this.task.running;
    }

    taskName() {
        return this.task.taskName;
    }

    inRepo() {
        return !!this.focused && isRepo(this.focused);
    }

    repoHost() {
        return !!this.focused && this.focused.repo.host;
    }

    repoUrl() {
        return !!this.focused && this.focused.repo.url;
    }

    repoBranch() {
        return !!this.focused && this.focused.repo.branch;
    }
}
