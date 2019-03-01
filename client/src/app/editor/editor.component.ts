import { Component, ViewEncapsulation, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { asURI } from 'src/app//shared/models/paths.model';
import { TaskService } from './shared/services/core/task.service';
import { MonacoService } from './shared/services/monaco/monaco.service';
import { MONACO_LOADED } from './shared/models/monaco.model';
import { OpenerService } from './shared/services/core/opener.service';
import { ResourceService } from './shared/services/core/resource.service';
import { Resource, ResourceTypes } from './shared/models/resource.model';

import { Observable } from 'rxjs';
import { map, startWith, debounceTime} from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

    quickOpenForm = new FormControl();
    showQuickOpen: boolean;
    quickOpenEntries: Observable<Resource[]>;

    constructor(
        private readonly task: TaskService,
        private readonly opener: OpenerService,
        private readonly monaco: MonacoService,
        private readonly resources: ResourceService
    ) {
        this.quickOpenEntries = this.quickOpenForm.valueChanges
        .debounceTime(400)
        .pipe(
            startWith(''),
            map(r => r ? this.filterQuickOpen(r) : this.quickOpenData().slice())
        );
    }

    ngOnInit(): void {
        MONACO_LOADED.subscribe(monaco => this.monaco.register(monaco));
    }

    runningTask() {
        return this.task.running;
    }

    closeQuickOpen() {
        const that = this;
        setTimeout(function() {
            that.showQuickOpen = false;
        }, 200);
    }

    quickOpenItemSelected(e: MatAutocompleteSelectedEvent) {
        this.showQuickOpen = false;
        this.opener.openURI(asURI(e.option.value));
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeunload($event: any) {
        if (this.resources.changed()) { // the if is required
            $event.returnValue = true;
        }
    }

    @HostListener('document:keydown', ['$event'])
    keypressed($event: KeyboardEvent) {
        if ($event.key === 'F2') {
            $event.preventDefault();
            $event.stopPropagation();
            this.quickOpenForm.setValue('');
            this.showQuickOpen = true;
        }
    }

    private filterQuickOpen(value: string): Resource[] {
        const filterValue = value.toLowerCase();
        return this.quickOpenData().filter(r => r.name.toLowerCase().indexOf(filterValue) === 0);
    }

    private quickOpenData() {
        return this.resources.findAll(r => r.type === ResourceTypes.FILE);
    }

}
