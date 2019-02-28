import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { basename, requireNonNull, assert, isHome } from '../../models/filters.model';
import { Resource } from '../../models/resource.model';
import { IRepo, IChange, IBlame } from '../../models/git.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

export interface IGitService {
    refresh(): Promise<boolean>;
    show(item: Resource): Promise<string>;
    blame(item: IRepo | IChange | Resource): Promise<IBlame[]>;
    status(item: IRepo | IChange | Resource): Promise<boolean>;
    add(item: IRepo | IChange | Resource): Promise<boolean>;
    checkout(item: IRepo | IChange | Resource): Promise<boolean>;
    commit(item: IRepo | IChange | Resource, commit: string): Promise<boolean>;
    push(item: IRepo | IChange | Resource, username?: string, password?: string): Promise<boolean>;
    pull(item: IRepo | IChange | Resource, username?: string, password?: string): Promise<boolean>;
    clone(home: Resource, url: string, username?: string, password?: string, destination?: string);
}

@Injectable({
  providedIn: 'root'
})
export class GitService implements IGitService {

    /** git repositories */
    repos: IRepo[] = [];
    runningTask: boolean;
    size: number;

    constructor(private http: HttpClient, private notification: NotificationService) {
    }

    async refresh() {
        let success = false;
        try {
            this.runningTask = true;
            const params = new HttpParams().set('name', 'git_changes');
            const response = await this.http.get('filebrowser/option', { params: params }).toPromise();
            this.repos = [];
            Object.keys(response).forEach(key => {
                const data = response[key];
                this.repos.push({
                    name: basename(key),
                    url: key,
                    path: data.path,
                    branch: data.branch,
                    count: data.changes.length,
                    changes: data.changes
                });
                return false;
            });
            this.size = this.repos.reduce((p, c, _i, _a) => p + c.count, 0);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async show(item: Resource) {
        let response: string;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_show').set('path', item.path);
            response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return response;
    }

    async status(item: IRepo | IChange | Resource) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_status').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async add(item: IRepo | IChange | Resource) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_add').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async checkout(item: IRepo | IChange | Resource) {
        this.runningTask = true;
        let success = false;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_checkout').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async commit(item: IRepo | IChange | Resource, commit: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            requireNonNull(commit, 'commit');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_commit', 'path': item.path, commit: commit};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async push(item: IRepo | IChange | Resource, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_push', 'path': item.path, username: username, password: password};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async pull(item: IRepo | IChange | Resource, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_pull', 'path': item.path, username: username, password: password};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async clone(home: Resource, url: string, username?: string, password?: string, destination?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(home, 'parent');
            requireNonNull(url, 'url');
            assert(isHome(home), 'clone operation is applicable to home only');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {
                'name': 'git_clone',
                'path': home.path,
                url: url,
                username: username,
                password: password,
                destination: destination
            };
            await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.notification.logInfo(`${url} cloned into the directory ${basename(url)}`);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async blame(item: IRepo | IChange | Resource): Promise<IBlame[]> {
        let response: IBlame[];
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_blame').set('path', item.path);
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            response = await this.http.get('/filebrowser/option', { headers: headers, params: params }).toPromise() as IBlame[];
            this.runningTask = false;
        } catch (error) {
            this.runningTask = false;
            throw error;
        }
        return response;
    }

    private logResponse(item: IRepo | IChange | Resource, response: string) {
        this.notification.logInfo(`${item.path}:<br/> ${response}`);
    }

}
