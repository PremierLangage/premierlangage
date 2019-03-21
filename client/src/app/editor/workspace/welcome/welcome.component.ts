import { Component } from '@angular/core';
import { Language, LANGUAGES } from '../../shared/models/language.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'welcome',
    styleUrls: ['./welcome.component.scss'],
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    readonly displayedColumns: string[] = ['command', 'action'];
    readonly shorcuts = [
        {command: 'F1', action: 'Show all commands (inside a code editor)'},
        {command: 'Ctrl + O', action: 'Quick open a file'},
        {command: 'Ctrl|⌘ + Space', action: 'Trigger suggestion (inside a code editor)'},
        {command: 'Ctrl|⌘ Right Arrow', action: 'Split editor (inside a code editor)'},
        {command: 'Ctrl|⌘ + Enter', action: 'Open preview (inside a code editor)'},
        {command: 'Ctrl|⌘ + Alt + Enter', action: 'Hide preview (inside a code editor)'},
        {command: 'Ctrl|⌘ + S', action: 'Save focused file (inside a code editor)'},
        {command: 'Ctrl|⌘ + Alt + S', action: 'Save all files (inside a code editor)'},
        {command: 'Ctrl|⌘ + K', action: 'Close focused file (inside a code editor)'},
        {command: 'Ctrl|⌘ + Alt + K', action: 'Close all files (inside a code editor)'},
    ];
    readonly languages: string[] = LANGUAGES.reduce((p, c, i, a) => {
        if (!p.includes(c.id)) {
            p.push(c.id);
        }
        return p;
    }, []);

}
