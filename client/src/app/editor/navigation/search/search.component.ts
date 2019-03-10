import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../shared/services/core/resource.service';
import { IResource, ResourceTypes } from '../../shared/models/resource.model';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input()
    items: IResource[] = [];
    entries: IResource[] = [];
    runningTask: boolean;
    searchValue = '';
    size = 0;
    empty = false;

    constructor(private editor: ResourceService) { }

    ngOnInit() {
    }


    search(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            this.runningTask = true;
            this.searchValue = this.searchValue.trim().toLocaleLowerCase();
            if (this.searchValue) {
                this.entries = this.editor.findAll((e => {
                    return e.type === ResourceTypes.File && e.path.toLocaleLowerCase().includes(this.searchValue);
                }));
                this.size = this.entries.length;
                this.empty = this.size === 0;
            }
            this.runningTask = false;
        }
    }
}
