import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Settings } from './pages/editor/shared/models/settings.model';
import { SettingsService } from './pages/editor/shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    @HostBinding('class')
    theme: string;

    constructor(
        private readonly settings: SettingsService,
        private readonly overlayContainer: OverlayContainer,
    ) {}

    ngOnInit(): void {
        this.setTheme('light-theme');
        this.subscriptions.push(this.settings.changed.subscribe(e => {
            this.setTheme(this.settings.get(Settings.EDITOR_KEY, 'theme').value);
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    setTheme(theme: string) {
        const container = this.overlayContainer.getContainerElement();
        container.classList.remove('dark-theme');
        container.classList.remove('light-theme');
        container.classList.add(theme);
        this.theme = theme;
    }

}
