import { Component } from '@angular/core';
import { PlaygroundTab } from '../playground/playground.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'advanced-usage',
    templateUrl: './advanced-usage.component.html'
})
export class AdvancedUsageComponent {
    styles: PlaygroundTab[] = [
        { label: 'Styling a component', path: 'playground/styles.pl' },
    ];
    decorator: PlaygroundTab[] = [
        { label: 'Decorate a component', path: 'playground/decorator.pl' },
    ];
}
