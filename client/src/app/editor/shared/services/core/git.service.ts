import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { basename, requireNonNull, assert, isHome } from '../../models/filters.model';
import { Resource, Repo, Change } from '../../models/resource.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

export interface IGitService {
    refresh(): Promise<boolean>;
    show(item: Resource): Promise<string>;
    status(item: Repo | Change): Promise<boolean>;
    add(item: Repo | Change): Promise<boolean>;
    checkout(item: Repo | Change): Promise<boolean>;
    commit(item: Repo | Change, commit: string): Promise<boolean>;
    push(item: Repo | Change, username?: string, password?: string): Promise<boolean>;
    pull(item: Repo | Change, username?: string, password?: string): Promise<boolean>;
    clone(parent: Resource, url: string, username?: string, password?: string, destination?: string);
}

@Injectable({
  providedIn: 'root'
})
export class GitService implements IGitService {

    /** git repositories */
    repos: Repo[] = [];
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

    async status(item: Repo | Change) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_status').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async add(item: Repo | Change) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_add').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async checkout(item: Repo | Change) {
        this.runningTask = true;
        let success = false;
        try {
            requireNonNull(item, 'item');
            const params = new HttpParams().set('name', 'git_checkout').set('path', item.path);
            const response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async commit(item: Repo | Change, commit: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            requireNonNull(commit, 'commit');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_commit', 'path': item.path, commit: commit};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async push(item: Repo | Change, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_push', 'path': item.path, username: username, password: password};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async pull(item: Repo | Change, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {'name': 'git_pull', 'path': item.path, username: username, password: password};
            const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.notification.logInfo(response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async clone(parent: Resource, url: string, username?: string, password?: string, destination?: string) {
        let success = false;
        this.runningTask = true;
        try {
            requireNonNull(parent, 'parent');
            requireNonNull(url, 'url');
            assert(isHome(parent), 'clone operation is applicable to home only');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {
                'name': 'git_clone',
                'path': parent.path,
                url: url,
                username: username,
                password: password,
                destination: destination
            };
            await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
            this.notification.logInfo(url + ' cloned at ' + basename(url));
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

}
