import { Component, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';


import { IResource, ResourceTypes } from '../shared/models/resources.model';
import { OpenerService } from '../shared/services/opener.service';
import { ResourceService } from '../shared/services/resource.service';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'quick-open',
  templateUrl: './quick-open.component.html',
  styleUrls: ['./quick-open.component.scss'],
})
export class QuickOpenComponent implements AfterViewInit {

    @Output()
    readonly closed: EventEmitter<any> = new EventEmitter();
    readonly form = new FormControl();
    readonly $entries: Observable<IResource[]>;
    readonly data: IResource[];

    @ViewChild('input', { static: true })
    input: ElementRef;

    constructor(
        private readonly opener: OpenerService,
        private readonly resources: ResourceService
    ) {
        this.data = this.resources.findAll(resource => {
            return resource.type === ResourceTypes.File;
        });
        this.$entries = this.form
            .valueChanges
            .debounceTime(200)
            .pipe(
                startWith(''),
                map(query => query ? this.filter(query) : this.data.slice())
            );
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.input.nativeElement.focus();
        }, 200);
    }

    onBlured() {
        this.closed.emit();
    }

    onSelected(e: MatAutocompleteSelectedEvent) {
        this.closed.emit();
        this.opener.open((e.option.value as IResource).path);
    }

    private filter(query: string): IResource[] {
        query = (query || '').toLowerCase();
        return this.data.filter(item => {
            return item.name.toLowerCase().indexOf(query) === 0;
        });
    }


}
