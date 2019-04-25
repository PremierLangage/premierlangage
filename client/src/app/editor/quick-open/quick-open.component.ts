import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';


import { IResource, ResourceTypes } from '../shared/models/resource.model';
import { OpenerService } from '../shared/services/core/opener.service';
import { ResourceService } from '../shared/services/core/resource.service';

import { Observable, Subscription } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'quick-open',
  templateUrl: './quick-open.component.html',
  styleUrls: ['./quick-open.component.scss'],
})
export class QuickOpenComponent {

    @Output()
    readonly closed: EventEmitter<any> = new EventEmitter();
    readonly form = new FormControl();
    readonly $entries: Observable<IResource[]>;

    constructor(private readonly opener: OpenerService, private readonly resources: ResourceService) {
        this.$entries = this.form
            .valueChanges
            .debounceTime(400)
            .pipe(
                startWith(''),
                map(query => query ? this.filter(query) : this.data().slice())
            );
    }

    didClose() {
        const that = this;
        setTimeout(function() {
            that.closed.emit();
        }, 200);
    }

    didItemSelected(e: MatAutocompleteSelectedEvent) {
        this.closed.emit();
        this.opener.open((e.option.value as IResource).path);
    }

    private filter(query: string): IResource[] {
        query = (query || '').toLowerCase();
        return this.data().filter(item => item.name.toLowerCase().indexOf(query) === 0);
    }

    private data() {
        return this.resources.findAll(resource => {
            return resource.type === ResourceTypes.File;
        });
    }

}
