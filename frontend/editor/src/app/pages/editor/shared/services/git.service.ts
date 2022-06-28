import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { isHome } from '../models/filters.model';
import { IResource } from '../models/resources.model';
import { IRepo, IChange, IBlame } from '../models/git.model';
import { NotificationService } from 'src/app/core/notification.service';
import { Contracts } from 'src/app/shared/utils/contracts';
import { SettingsService } from './settings.service';
import { Paths } from 'src/app/shared/utils/paths';
import { AuthService } from 'src/app/core/auth.service';
import { EditorService } from './editor.service';
import { ResourceService } from './resource.service';
import { HttpParamEncoder } from 'src/app/shared/utils/http-encoder.model';

export interface IGitService {
    refresh(): Promise<boolean>;
    show(item: IResource): Promise<string>;
    blame(item: IRepo | IChange | IResource): Promise<IBlame[]>;
    status(item: IRepo | IChange | IResource): Promise<boolean>;
    add(item: IRepo | IChange | IResource): Promise<boolean>;
    checkout(item: IRepo | IChange | IResource): Promise<boolean>;
    commit(item: IRepo | IChange | IResource, commit: string): Promise<boolean>;
    push(item: IRepo | IChange | IResource, username?: string, password?: string): Promise<boolean>;
    pull(item: IRepo | IChange | IResource, username?: string, password?: string): Promise<boolean>;
    clone(home: IResource, url: string, username?: string, password?: string, destination?: string);
}

@Injectable({
  providedIn: 'root'
})
export class GitService implements IGitService {

    private readonly blames = {};

    repos: IRepo[] = [];
    runningTask: boolean;
    size: number;

    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService,
        private readonly editor: EditorService,
        private readonly settings: SettingsService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService) {
            this.editor.onDidSave.subscribe(() => {
                this.refresh().catch();
            });
            this.resources.changed.subscribe(() => {
                this.refresh().catch();
            });
    }

    async refresh() {
        if (!this.auth.admin) {
            return;
        }
        let success = false;
        try {
            this.runningTask = true;
            const response = await this.http.get('/api/git/changes/').toPromise();
            this.repos = [];
            Object.keys(response).forEach(key => {
                const data = response[key];
                const name = Paths.basename(key.endsWith('/') ? key.slice(0, key.length - 1) : key);
                this.repos.push({
                    name: name,
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
            console.error(error);
        }
        this.runningTask = false;
        return success;
    }

    async show(item: IResource) {
        let response: string;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('path', item.path);
            response = await this.http.get('/api/git/show/', { params: params , responseType: 'text'}).toPromise();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return response;
    }

    async status(item: IRepo | IChange | IResource) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('path', item.path);
            const response = await this.http.get('api/git/status/', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async add(item: IRepo | IChange | IResource) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('path', item.path);
            const response = await this.http.get('/api/git/add/', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async checkout(item: IRepo | IChange | IResource) {
        this.runningTask = true;
        let success = false;
        try {
            Contracts.requireNonNull(item, 'item');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('path', item.path);
            const response = await this.http.get('/api/git/checkout/', { params: params , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = await this.refresh();
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async commit(item: IRepo | IChange | IResource, commit: string) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            Contracts.requireNonNull(commit, 'commit');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {path: item.path, commit };
            const response = await this.http.post('/api/git/commit/', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async push(item: IRepo | IChange | IResource, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {path: item.path, username, password};
            const response = await this.http.post('/api/git/push/', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            this.refresh();
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async pull(item: IRepo | IChange | IResource, username?: string, password?: string) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {path: item.path, username, password };
            const response = await this.http.post('/api/git/pull/', data, { headers: headers , responseType: 'text'}).toPromise();
            this.logResponse(item, response);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async clone(home: IResource, url: string, username?: string, password?: string, destination?: string) {
        let success = false;
        this.runningTask = true;
        try {
            Contracts.requireNonNull(home, 'parent');
            Contracts.requireNonNull(url, 'url');
            Contracts.assert(isHome(home), 'clone operation is applicable to home only');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const data = {
                'path': home.path,
                url: url,
                username: username,
                password: password,
                destination: destination
            };
            await this.http.post('/api/git/clone/', data, { headers: headers , responseType: 'text'}).toPromise();
            const name = Paths.basename(url.endsWith('/') ? url.slice(0, url.length - 1) : url);
            this.notification.logInfo(`${url} cloned into the directory ${name}`);
            success = true;
        } catch (error) {
            this.notification.logError(error);
        }
        this.runningTask = false;
        return success;
    }

    async blame(item: IRepo | IChange | IResource): Promise<IBlame[]> {
        let response: IBlame[];
        this.runningTask = true;
        try {
            Contracts.requireNonNull(item, 'item');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('path', item.path);
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            response = await this.http.get('/api/git/blame/', { headers: headers, params: params }).toPromise() as IBlame[];
            this.runningTask = false;
        } catch (error) {
            this.runningTask = false;
            throw error;
        }
        return response;
    }


    /** Gets a value indicating whether blame option is enablad in the settings */
    enabledBlames() {
        return this.settings.get('git', 'blames').value === true;
    }

    /**
     * Refresh blames of `resource`.
     * @param resource the resource
     * @returns A promise that resolves with true
     */
    refreshBlames(resource: IResource) {
        if (this.enabledBlames()) {
            return this.blame(resource).then(response => {
                const lines = resource.content.split('\n');
                for (const item of response) {
                    item.text = lines[item.line - 1];
                    if (item.email === 'not.committed.yet') {
                        item.email = 'Uncommitted changes';
                    }
                }
                this.blames[resource.path] = response;
                return true;
            }).catch(_ => false);
        }
        return true;
    }


    private logResponse(item: IRepo | IChange | IResource, response: string) {
        this.notification.logInfo(`${item.path}:<br/> ${response}`);
    }

}
