import { Component, OnInit } from '@angular/core';

import { TaskService } from '../shared/services/core/task.service';
import { ResourceService } from '../shared/services/core/resource.service';

import * as filters from '../shared/models/filters.model';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

    constructor(
        private readonly task: TaskService,
        private readonly resources: ResourceService
    ) { }

    ngOnInit() {
    }

    runningTask() {
        return this.task.running;
    }

    taskName() {
        return this.task.taskName;
    }

    inRepo() {
        return filters.isRepo(this.resources.selection);
    }

    repoHost() {
        return this.resources.selection.repo.host;
    }

    repoUrl() {
        return this.resources.selection.repo.url;
    }

    repoBranch() {
        return this.resources.selection.repo.branch;
    }
}
