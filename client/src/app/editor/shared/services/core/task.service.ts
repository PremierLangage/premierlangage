import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IResource } from '../../models/resource.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private _running: boolean;
    private _taskName: string;

    private readonly onRunningTask: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    get running(): boolean {
        return this._running;
    }

    get taskName(): string {
        return this._taskName;
    }

    emitTaskEvent(running: boolean, taskName: string = null) {
        this._running = running;
        this._taskName = taskName;
        this.onRunningTask.next(running);
    }

}
