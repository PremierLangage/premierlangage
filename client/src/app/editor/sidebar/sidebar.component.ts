import { Component } from '@angular/core';
import { GitService } from '../git/git-service';
import { LoggingService } from 'src/app/shared/services/logging.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
	size: number = 25;
  	index: number = 0;
  
	constructor(private git: GitService, private logging: LoggingService) {}

	didTapButton(index: number) {
		switch(index) {
			case 3:
			this.logging.openEvent.next();
			break;
			default:
			if (index === this.index) {
				this.size = this.size == 25 ? 0 : 25;
			}
			this.index = index;
			break;
		}
	}

	gitBadge() {
		return this.git.count;
	}

	consoleBadge() {
		return this.logging.size;;
	}
}
