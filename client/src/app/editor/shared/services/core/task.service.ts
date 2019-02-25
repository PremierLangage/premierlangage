import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Resource } from '../../models/resource.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private _running: boolean;
    private _taskName: string;
    private readonly onRefreshed: Subject<any> = new Subject();
    private readonly onSelected: Subject<Resource> = new Subject<Resource>();
    private readonly onDeleted: Subject<Resource> = new Subject<Resource>();
    private readonly onRunningTask: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    get running(): boolean {
        return this._running;
    }

    get taskName(): string {
        return this._taskName;
    }

    /**
     * Emits editor refresh event.
     */
    emitRefreshEvent() {
        this.onRefreshed.next();
    }

    /**
     * Emits resource selection event.
     * @param resource the resource
     */
    emitSelectEvent(resource: Resource) {
        this.onSelected.next(resource);
    }

    /**
     * Emits resource deletion event.
     * @param resource the resource
     */
    emitDeleteEvent(resource: Resource) {
        this.onDeleted.next(resource);
    }

    emitTaskEvent(running: boolean, taskName: string = null) {
        this._running = running;
        this._taskName = taskName;
        this.onRunningTask.next(running);
    }

    subscribeRefreshEvent(completion: () => void) {
        this.onRefreshed.subscribe(completion);
    }

    subscribeSelectEvent(completion: (resource: Resource) => void) {
        this.onSelected.subscribe(completion);
    }

    subscribeDeleteEvent(completion: (resource: Resource) => void) {
        this.onDeleted.subscribe(completion);
    }

    subscribeTaskEvent(completion: (running: boolean) => void) {
        this.onRunningTask.subscribe(completion);
    }

}
