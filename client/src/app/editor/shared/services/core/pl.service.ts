import { Injectable } from '@angular/core';
import { IResource } from '../../models/resource.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TaskService } from './task.service';

@Injectable({ providedIn: 'root'})
export class PLService {
    constructor(
        private readonly http: HttpClient,
        private readonly task: TaskService,
    ) {}

    async load(resource: IResource) {
        let response: string;
        try {
            this.task.emitTaskEvent(true, 'load pltp');
            const params = new HttpParams().set('name', 'load_pltp').set('path', resource.path);
            response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
        return response;
    }

    async reload(resource: IResource, activityId: number) {
        let response: Object;
        try {
            this.task.emitTaskEvent(true, 'reload pltp');
            const data = {
                name: 'reload_pltp',
                path: resource.path,
                activity_id: activityId,
            };
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            response = await this.http.post('filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise();
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
        return response;
    }

    async compile(resource: IResource) {
        // TODO
        // let response: Object;
        /* try {
            this.task.emitTaskEvent(true, 'compilation');
            requireNonNull(resource, 'resource');
            assert(filters.isPl(resource), 'pl resource is expected');
            const data = {
                'name': 'compile_pl',
                'path': resource.path,
            };
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            response = await this.http.post('filebrowser/option', data, { headers: headers }).toPromise();
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
        this.task.emitTaskEvent(false); */
        // return response;
    }

}
