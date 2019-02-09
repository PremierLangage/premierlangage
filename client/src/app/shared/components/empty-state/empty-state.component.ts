import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
	@Input() public title: string;
	@Input() public subtitle: string;
  @Input() public icon: string;
}
