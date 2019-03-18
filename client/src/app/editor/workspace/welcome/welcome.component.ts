import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'welcome',
    styleUrls: ['./welcome.component.scss'],
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    readonly displayedColumns: string[] = ['command', 'action'];
    readonly shorcuts = [
        {command: 'F2', action: 'Quick open a file'},
        {command: 'F1', action: 'Show all commands'},
        {command: 'Ctrl|⌘ + Space', action: 'Trigger suggestion'},
        {command: 'Ctrl|⌘ Right Arrow', action: 'Split editor'},
        {command: 'Ctrl|⌘ + Enter', action: 'Open preview'},
        {command: 'Ctrl|⌘ + Alt + Enter', action: 'Hide preview'},
        {command: 'Ctrl|⌘ + S', action: 'Save focused file'},
        {command: 'Ctrl|⌘ + Alt + S', action: 'Save all files'},
        {command: 'Ctrl|⌘ + K', action: 'Close focused file'},
        {command: 'Ctrl|⌘ + Alt + K', action: 'Close all files'},
    ];

}
