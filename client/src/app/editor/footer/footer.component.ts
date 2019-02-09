import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EditorService } from '../editor.service';
import * as utils from '../editor.utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	constructor(private editor: EditorService) { }

	ngOnInit() {
	}

	runningTask() { 
		return this.editor.runningTask;
	}

	taskName() {
		return this.editor.taskName;
	}
	
	inRepo() {
		return utils.isRepo(this.editor.selection);
	}

	repoHost() {
		return this.editor.selection.repo.host;
	}

	repoUrl() {
		return this.editor.selection.repo.url;
	}

	repoBranch() {
		return this.editor.selection.repo.branch;
	}
}
