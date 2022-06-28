import { Component, Input } from '@angular/core';

import { GitService } from '../shared/services/git.service';
import { NavigationService } from './navigation.service';
import { SettingsService } from '../shared/services/settings.service';
import { Settings } from '../shared/models/settings.model';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'editor-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    size = 320;
    index = 0;

    @Input()
    side: 'left' | 'right' = 'left';

    get isAdmin() {
        return this.auth.admin;
    }

    get gitBadge() {
        return this.git.size;
    }

    constructor(
        private readonly git: GitService,
        private readonly auth: AuthService,
        private readonly settings: SettingsService,
        private readonly navigation: NavigationService,
    ) {}


    didTapButton(index: number) {
        if (index === this.index) {
            this.size = this.size === 320 ? 36 : 320;
        }
        this.index = index;
    }

    toggleExplorer() {
        this.didTapButton(0);
    }

    toggleStructure() {
        this.didTapButton(0);
    }

    toggleSearch() {
        this.didTapButton(1);
    }

    toggleGit() {
       this.didTapButton(2);
    }

    openComponents() {
        const url =  window.location.origin + '/components';
        window.open(url, '_blank');
    }

    switchTheme() {
        const theme = this.settings.get(Settings.EDITOR_KEY, 'theme');
        const newTheme = theme.value === 'light-theme' ? 'dark-theme' : 'light-theme';
        this.settings.set(Settings.EDITOR_KEY, 'theme', newTheme);
    }

    openSettings() {
        this.navigation.settings.next();
    }

}
