import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { TaskService } from './shared/services/core/task.service';
import { ResourceService } from './shared/services/core/resource.service';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

    showQuickOpen: boolean;

    constructor(
        private readonly task: TaskService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
    ) {}

    ngOnInit(): void {
        this.resources.refresh().catch(error => {
            this.notification.logError(error);
        });
    }

    querying() {
        return this.task.running;
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
        if (!!this.resources.findPredicate(item => item.changed)) { // the if is required
            $event.returnValue = true;
        }
    }

    @HostListener('document:keydown', ['$event'])
    keypressed($event: KeyboardEvent) {
        if ($event.ctrlKey && $event.key === 'o') {
            $event.preventDefault();
            $event.stopPropagation();
            this.showQuickOpen = true;
        }
    }

}
