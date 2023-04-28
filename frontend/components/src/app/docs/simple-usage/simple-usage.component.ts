import { Component } from '@angular/core';
import { PlaygroundTab } from '../playground/playground.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'simple-usage',
    templateUrl: './simple-usage.component.html'
})
export class SimpleUsageComponent {
    usages: PlaygroundTab[] = [
        { label: 'Manual Evaluation', path: 'playground/sort-list.pl' },
        { label: 'Automatic Evaluation', path: 'playground/sort-list-auto-grade.pl' }
    ];

}
