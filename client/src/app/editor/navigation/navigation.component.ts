import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/resource.model';
import { GitService } from '../services/git.service';
import { LoggingService } from '../services/logging.service';
import { ResourceService } from '../services/resource.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    size = 25;
    index = 0;

    constructor(
        private readonly git: GitService,
        private readonly logging: LoggingService,
        private readonly resource: ResourceService,
    ) {}

    ngOnInit(): void {
        this.resource.refresh().catch(error => this.logging.error(error));
    }

    didTapButton(index: number) {
        switch (index) {
            case 3:
            this.logging.openEvent.next();
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
        return this.logging.size;
    }

    resources(): Resource[] {
        return this.resource.resources;
    }
}
