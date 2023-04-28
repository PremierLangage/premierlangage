import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from '../../core/notification.service';
import { ResourceService } from './shared/services/resource.service';
import { SettingsService } from './shared/services/settings.service';
import { AuthService } from 'src/app/core/auth.service';
import { GitService } from './shared/services/git.service';

@Injectable()
export class EditorResolver implements Resolve<void> {

    constructor(
        private readonly auth: AuthService,
        private readonly git: GitService,
        private readonly settings: SettingsService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
    ) {}

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
        try {
            await this.auth.check();
            await this.resources.refresh();
            await this.git.refresh().catch();
            await this.settings.loadSettings();
        } catch (error) {
            this.notification.error(error.message);
        }

    }

}
