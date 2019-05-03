import { Component } from '@angular/core';

import { GitService } from '../shared/services/core/git.service';
import { ResourceService } from '../shared/services/core/resource.service';
import { NavigationService } from './navigation.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    size = 25;
    index = 0;

    constructor(
        private readonly git: GitService,
        private readonly resources: ResourceService,
        private readonly navigation: NavigationService,
        private readonly notification: NotificationService,
    ) {}

    didTapButton(index: number) {
        if (index === this.index) {
            this.size = this.size === 25 ? 0 : 25;
        }
        this.index = index;
    }

    didTapExplorer() {
        this.didTapButton(0);
    }

    didTapSearch() {
        this.didTapButton(1);
    }

    didTapGit() {
       this.didTapButton(2);
    }

    didTapConsole() {
        this.navigation.debugging.next();
    }

    didTapSettings() {
        this.navigation.settings.next();
    }

    gitBadge() {
        return this.git.size;
    }

    consoleBadge() {
        return this.notification.size;
    }

}
