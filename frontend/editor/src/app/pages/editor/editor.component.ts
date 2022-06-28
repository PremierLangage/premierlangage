import { Component, HostListener, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ResourceService } from './shared/services/resource.service';
import { TaskService } from 'src/app/core/task.service';
import { EditorService } from './shared/services/editor.service';
import { OpenerService } from './shared/services/opener.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
      class: 'app-editor mat-app-background'
  }
})
export class EditorComponent implements OnInit, OnDestroy {

    showQuickOpen: boolean;

    get taskInProgress() {
        return this.task.running;
    }

    constructor(
        private readonly task: TaskService,
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly resources: ResourceService,
    ) {}

    async ngOnInit() {
        const openedResources = JSON.parse(localStorage.getItem('editor.workspace.openedResources')) || [];
        for (const path of openedResources) {
            await this.opener.open(path).catch();
        }
        const activeResource = localStorage.getItem('editor.workspace.activeResource');
        if (activeResource) {
            await this.opener.open(activeResource).catch();
        }
    }

    ngOnDestroy() {
        this.editor.unsubscribeAll();
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
        if (!!this.resources.findPredicate(item => item.changed)) { // the if is required
            $event.returnValue = true;
        } else {
            const openedResources = this.resources.findAll(r => {
                return r.opened;
            }).map(o => o.path);
            localStorage.setItem('editor.workspace.openedResources', JSON.stringify(openedResources));
            const activeResource = this.editor.activeResource.value
                ? this.editor.activeResource.value.path
                : '';
            localStorage.setItem('editor.workspace.activeResource', activeResource);
            this.editor.onDidBeforeLeave.next();

        }
    }

    @HostListener('document:keydown', ['$event'])
    keypressed($event: KeyboardEvent) {
        if (($event.ctrlKey || $event.metaKey) && ($event.key === 'o' || $event.key === 'O')) {
            $event.preventDefault();
            $event.stopPropagation();
            this.showQuickOpen = true;
        }
    }

}
