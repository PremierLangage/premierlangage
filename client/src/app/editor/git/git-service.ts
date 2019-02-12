import { Injectable } from '@angular/core';
import { Repo, Change } from 'src/app/models/repo';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { basename, requireNonNull, assert, isHome } from '../editor.utils';
import { LoggingService } from 'src/app/shared/services/logging.service';
import { Resource } from 'src/app/models/resource';

@Injectable({
  providedIn: 'root'
})
export class GitService {

	/** git repositories */
	repos: Repo[] = [];
	runningTask: boolean;
	count: number;
	
	constructor(private http: HttpClient, private logging: LoggingService) { }

	async refresh() {
		let success = false;
		try {
			this.runningTask = true;
			const params = new HttpParams().set('name', 'git_changes');
			const response = await this.http.get('filebrowser/option', { params: params }).toPromise();
			this.repos = [];
			Object.keys(response).forEach(key => {
				const data = response[key]
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
			this.count = this.repos.reduce((p, c, _i, _a) => p + c.count, 0);
			success = true;
		} catch(error) {
			this.logging.error(error);
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
		} catch(error) {
			this.logging.error(error);
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
			this.logging.info(response);
			success = true;
		} catch(error) {
			this.logging.error(error);
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
			this.logging.info(response);
			this.refresh();
			success = true;
		} catch(error) {
			this.logging.error(error);
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
			this.logging.info(response);
			this.refresh();
			success = true;
		} catch(error) {
			this.logging.error(error);
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
			this.logging.info(response);
			this.refresh();
			success = true;
		} catch(error) {
			this.logging.error(error);
		}
		this.runningTask = false;
		return success;
	}

	async push(item: Repo | Change, username='', password='') {
		let success = false;
		this.runningTask = true;
		try {
			requireNonNull(item, 'item');
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			const data = {'name': 'git_push', 'path': item.path, username: username, password: password};
			const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
			this.logging.info(response);
			this.refresh();
			success = true;
		} catch(error) {
			this.logging.error(error);
		}
		this.runningTask = false;
		return success;
	}

	async pull(item: Repo | Change, username='', password='') {
		let success = false;
		this.runningTask = true;
		try {
			requireNonNull(item, 'item');
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			const data = {'name': 'git_pull', 'path': item.path, username: username, password: password};
			const response = await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
			this.logging.info(response);
			success = true;
		} catch(error) {
			this.logging.error(error);
		}
		this.runningTask = false;
		return success;
	}

	async clone(parent: Resource, url: string, username='', password='', destination='') {
		let success = false;
		this.runningTask = true;
		try {
			requireNonNull(parent, 'parent');
			requireNonNull(url, 'url');
			assert(isHome(parent), 'clone operation is applicable to home only');
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			const data = {'name': 'git_clone', 'path': parent.path, url: url, username: username, password: password, destination: destination};
			await this.http.post('/filebrowser/option', data, { headers: headers , responseType: 'text'}).toPromise();
			this.logging.info(url + ' cloned at ' + basename(url));
			success = true;
		} catch(error) {
			this.logging.error(error);
		}
		this.runningTask = false;
		return success;
	}

}