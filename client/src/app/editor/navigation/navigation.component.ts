import { Component, OnInit } from '@angular/core';

import { Resource } from '../shared/models/resource.model';

import { GitService } from '../shared/services/core/git.service';
import { ResourceService } from '../shared/services/core/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    size = 25;
    index = 0;

    constructor(
        private readonly git: GitService,
        private readonly resource: ResourceService,
        private readonly notification: NotificationService,
    ) {}

    ngOnInit(): void {
        this.resource.refresh().catch(error => this.notification.logError(error));
    }

    didTapButton(index: number) {
        switch (index) {
            case 3:
            this.notification.onToggleDebuggingArea.next();
            break;
            default:
            if (index === this.index) {
                this.size = this.size === 25 ? 0 : 25;
            }
            this.index = index;
            break;
        }
    }

    gitBadge() {
        return this.git.size;
    }

    consoleBadge() {
        return this.notification.size;
    }

    resources(): Resource[] {
        return this.resource.resources;
    }
}
