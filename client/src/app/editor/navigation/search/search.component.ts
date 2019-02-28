import { Component, OnInit, Input } from '@angular/core';
import { Resource, FILE_RESOURCE } from '../../shared/models/resource.model';
import { ResourceService } from '../../shared/services/core/resource.service';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input()
    resources: Resource[] = [];
    result: Resource[] = [];
    mode: 'F' | 'T';
    searchValue = '';
    private _runningTask: boolean;

    constructor(private editor: ResourceService) { }

    ngOnInit() {
    }

    changeMode(mode: 'F' | 'T') {
        this.mode = mode;
    }

    search(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this._runningTask = true;
            this.searchValue = this.searchValue.trim().toLocaleLowerCase();
            if (this.searchValue) {
                this.result = this.editor.findAll((e => {
                    return e.type === FILE_RESOURCE && e.path.toLocaleLowerCase().includes(this.searchValue);
                }));
            }
            this._runningTask = false;
        }
    }

    get runningTask() { return this._runningTask; }
}
