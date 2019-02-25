import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { TaskService } from '../services/task.service';
import * as utils from '../editor.utils';

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
        return utils.isRepo(this.resources.selection);
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
