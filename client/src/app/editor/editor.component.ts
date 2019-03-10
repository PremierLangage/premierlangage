import { Component, ViewEncapsulation, HostListener, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { MONACO_LOADED } from './shared/models/monaco.model';
import { IResource, ResourceTypes } from './shared/models/resource.model';

import { TaskService } from './shared/services/core/task.service';
import { MonacoService } from './shared/services/monaco/monaco.service';
import { OpenerService } from './shared/services/core/opener.service';
import { ResourceService } from './shared/services/core/resource.service';
import { NotificationService } from '../shared/services/notification.service';

import { Observable, Subscription } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly quickOpenForm = new FormControl();
    readonly quickOpenEntries: Observable<IResource[]>;

    showQuickOpen: boolean;

    constructor(
        private readonly task: TaskService,
        private readonly opener: OpenerService,
        private readonly monaco: MonacoService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService,
        private readonly changesDetector: ChangeDetectorRef,
    ) {
        this.quickOpenEntries = this.quickOpenForm
            .valueChanges
            .debounceTime(400)
            .pipe(
                startWith(''),
                map(r => r ? this.filterQuickOpen(r) : this.quickOpenData().slice())
            );
    }

    ngOnInit(): void {
        this.subscriptions.push(MONACO_LOADED.subscribe(monaco => this.monaco.register(monaco)));
        this.resources.refresh().catch(error => {
            this.notification.logError(error);
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    items(): IResource[] {
        return this.resources.resources;
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
        const resource = e.option.value as IResource;
        this.opener.open(resource.path);
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

    private filterQuickOpen(value: string): IResource[] {
        const filterValue = value.toLowerCase();
        return this.quickOpenData().filter(r => r.name.toLowerCase().indexOf(filterValue) === 0);
    }

    private quickOpenData() {
        return this.resources.findAll(r => r.type === ResourceTypes.File);
    }

}
