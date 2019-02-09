import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/models/resource';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@Input()
	resources: Resource[] = [];
	result: Resource[] = [];
	mode: 'F' | 'T';
	searchValue: string = '';

	constructor(private editor: EditorService) { }

	ngOnInit() {
	}

	changeMode(mode: 'F' | 'T') {
		this.mode = mode;
	}

	search(event: KeyboardEvent) {
		if (event.keyCode === 13) {
			this.searchValue = this.searchValue.trim().toLocaleLowerCase();
			if (this.searchValue) {
				this.result = this.editor.findAll((e => {
					return e.path.toLocaleLowerCase().includes(this.searchValue);
				}));
			}
		}
	}
}
