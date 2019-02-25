import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { ResourceService } from './shared/services/core/resource.service';
import { MonacoService } from './shared/services/monaco/monaco.service';
import { MONACO_LOADED } from './shared/models/monaco.model';
import { TaskService } from './shared/services/core/task.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

    constructor(
        private readonly taskService: TaskService,
        private readonly monacoService: MonacoService,
        private readonly resourceService: ResourceService
    ) {}

    ngOnInit(): void {
        MONACO_LOADED.subscribe(monaco => this.monacoService.register(monaco));
    }

        /**
     * Gets a value indicating whether a task is running in the editor.
     */
    runningTask() {
        return this.taskService.running;
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
        if (this.resourceService.findPredicate(e => e.changed)) {
            $event.returnValue = true;
        }
    }
}
