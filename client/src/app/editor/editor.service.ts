import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Resource, resourceInit } from '../models/resource';
import { Subscription, Observable, Subject } from 'rxjs';
import * as utils from './editor.utils';
import { Repo } from '../models/repo';
import { GitService } from './git/git-service';

// Rename failed to execute.
/** Provides services for the editor*/
@Injectable({
  providedIn: 'root'
})
export class EditorService {

	private subscription: Subscription;
	private readonly onRefreshed: Subject<any> = new Subject();
	private readonly onSelected: Subject<Resource> = new Subject<Resource>();
	private readonly onDeleted: Subject<Resource> = new Subject<Resource>();
	private readonly onRunningTask: Subject<boolean> = new Subject<boolean>();
	private readonly previewFunctions = {};
	
	/** the resources array */
	resources: Resource[] = [];
	/** the selected resource inside the editor */
	selection: Resource;
	/** a value indicating whether a task is running  */
	runningTask: boolean
	/** the name of the running task */
	taskName: string;

	constructor(private http: HttpClient, private git: GitService) {
		this.previewFunctions = {
			'pl': this.previewPL,
		};
	}
	
	/**
	 * Adds new file resource into 'resource'
	 * @param resource the resource (must be a directory)
	 * @returns The added resource
	 */
    public addFile(resource: Resource) {
        return this.add(resource, 'file');
    }

	/**
	 * Adds new directory resource into 'resource'
	 * @param resource the resource (must be a directory)
	 * @returns The added resource
	 */
    public addFolder(resource: Resource) {
        return this.add(resource, 'folder');
	}
	
	/**
	 * Cancels the editition or the creation of the resource depending to it's state.
	 * - If the resource exists, the function will reset it's name to the name before the edition
	 * - Else the function will cancel the creation of the resource by removing it to the local cache.
	 * @param resource the resource (resource.editing must be == true)
	 */
	public cancelOrRemove(resource: Resource) {
		utils.assert(resource.editing, 'resource should be in editing state');
		utils.assert(utils.canWrite(resource), 'permission denied');
		utils.assert(!utils.isRoot(resource), 'permission denied');
		const path = resource.path;
		let success = false;
		if (resource.nameBeforeEdition) {
			resource.name = resource.nameBeforeEdition;
			success = true;
		} else {
			resource.path += '/' + resource.name;
			success = this.remove(resource.path);
			if (!success) {
				resource.path = path;
			}
		}	
		if (success) {
			delete resource.editing;                
			delete resource.parentRef;
			delete resource.nameBeforeEdition;
		}
		return success;
	}


	/**
	 * Creates or renames the resource if needed.
	 * @param resource the resource object to creates.
	 * @returns Promise<boolean> rejected with an error or resolved with true.
	 */
    public async createOrRename(resource: Resource) {
        return new Promise((resolve, reject) => {
			utils.assert(utils.canWrite(resource.parentRef), 'permission denied');
			utils.assert(!resource.parentRef.children.find(it => {
				return it.name === resource.name && !it.editing;
			}), 'resource name already exists !');
			utils.checkName(resource.name);

            let data = { 
                name:'create_resource', 
                path: resource.path + '/' + resource.name, 
                content: resource.content,
                type: resource.type
			};
			
            if (resource.nameBeforeEdition) {
				data.name = "rename_resource";
                data.path = resource.path;
                data['target'] = resource.name;
                delete data.content;
				delete data.type;
			}
			this.emitTaskEvent(true, 'create');
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			this.http.post('filebrowser/option', data, { headers: headers }).toPromise().then(response => {
				resource.path = response['path'];
                resource.icon = response['icon'];
                this.sort(resource.parentRef.children);
                delete resource.editing;
                delete resource.parentRef;
				delete resource.nameBeforeEdition;
				this.git.refresh();
				this.emitTaskEvent(false, 'create');
                resolve(true);   
			}).catch(error => {
				this.emitTaskEvent(false, 'create');
				reject(error);
			});
        });
    }
	
	/**
	 * Deletes the resource object from the server.
	 * @param resource the resource object to deletes.
	 * @returns Promise<boolean> resolved with true or false and rejected with an error
	 */
    public async delete(resource: Resource) {
		try {
			utils.requireNonNull(resource, 'resource');
			utils.assert(utils.canWrite(resource), 'permission denied');
			utils.assert(!utils.isRoot(resource), 'permission denied');
			this.emitTaskEvent(true, "delete");		
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			await this.http.post('filebrowser/option', { 
				name:'delete_resource', 
				path: resource.path
			}, { headers: headers }).toPromise();

			if (this.remove(resource.path)) {
				this.emitDeleteEvent(resource);
			}
			this.emitTaskEvent(false, 'delete');
			this.git.refresh();
			return false;
		} catch(error) {
			this.emitTaskEvent(false, 'delete');
			throw error;
		}
	}

	/**
	 * Emits editor refresh event.
	 */
	public emitRefreshEvent() {
		this.onRefreshed.next();
	}

	/**
	 * Emits resource selection event.
	 * @param resource the resource
	 */
	public emitSelectEvent(resource: Resource) {
		this.onSelected.next(resource);
	}
	
	/**
	 * Emits resource deletion event.
	 * @param resource the resource
	 */
	public emitDeleteEvent(resource: Resource) {
		this.onDeleted.next(resource);
	}

	/**
	 * Finds the resource with the given path.
	 * @param path the path of the resource to search
	 * @returns the resource or undefined
	 */
	public find(path: string): Resource {
        path = path.trim();
        return this.findPredicate(item => item.path === path);
    }

	/**
	 * Finds the resource which meets the given predicate.
	 * @param predicate the predicate to test
	 * @returns the resource or undefined
	 */
    public findPredicate(predicate: (resource: Resource) => boolean) {
        function recursive(resource: Resource) {
			if (!resource)
				return undefined;
            if (predicate(resource)) {
                return resource;
            }
            if (resource.children) {
                for (const root of resource.children) {
                    let result = recursive(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }

        for (const root of this.resources) {
            const resource = recursive(root);
            if (resource) {
                return resource;
            }
        }
        return undefined;
	}
	
	/**
	 * Finds the resources which meets the given predicate.
	 * @param predicate the predicate to test
	 * @returns the resources array or undefined
	 */
    public findAll(predicate: (resource: Resource) => boolean): Resource[] {
        const result = [];
        this.emitTaskEvent(true, 'search');
        function recursive(resource: Resource) {
			if (!resource)
				return undefined;
            if (predicate(resource)) {
                result.push(resource);
            }
            if (resource.children) {
                for (const root of resource.children) {
                    let result = recursive(root);
                    if (result) {
                        return result;
                    }
                }
            }
            return undefined;
        }

        for (const root of this.resources) {
           recursive(root);
        }
        this.emitTaskEvent(false, 'search');
        return result;
    }
	
	public async loadPLTP(resource: Resource) {
		let response: string;
		try {
			this.emitTaskEvent(true, 'load pltp');
			const params = new HttpParams().set('name', 'load_pltp').set('path', resource.path);
			response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
			this.emitTaskEvent(false, 'load pltp');
		} catch(error) {
			this.emitTaskEvent(false, 'load pltp');
			throw error;
		}
		return response;
	}

	public async reloadPLTP(resource: Resource, activityId: number) { 
		let response: Object;
		try {
			this.emitTaskEvent(true, 'reload pltp');	
			const data = {
				name: "reload_pltp",
				path: resource.path,
				activity_id: activityId,
			};
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			response = await this.http.post('filebrowser/option', data, { headers: headers, responseType: 'text' }).toPromise();
			this.emitTaskEvent(false, 'reload pltp');
		} catch(error) {
			this.emitTaskEvent(false, 'reload pltp');
			throw error;
		}
		return response;
	}

	/**
	 * Moves the file|resource 'src' to the resource 'dst'.
	 * @param src the source file or resource
	 * @param dst the destination resource
	 * @returns Promise<boolean> rejected with a string error message or resolved with true
	 */
    public async move(src: Resource | File, dst: Resource) {
		try {
			this.emitTaskEvent(true, 'move');
			utils.requireNonNull(src, 'src');
			utils.requireNonNull(dst, 'dst');	
			utils.assert(utils.canWrite(dst), 'permission denied');
			utils.assert(utils.isFolder(dst), 'destination must be a directory');

			let resource: Resource;
			if ('size' in src) { // File type contains size property
				resource = await this.moveFile(src as unknown as File, dst);
			} else {
				resource = await this.moveResource(src as unknown as Resource, dst);
			}
			this.sort(dst.children);
			dst.expanded = true;
			this.selection = resource;
			this.emitTaskEvent(false, 'move');
			this.git.refresh();
			return true;	
		} catch(error) {
			this.emitTaskEvent(false, 'move');
			throw error;
		}
    }

	/**
	 * Saves the content of the resource on the server
	 * @param resource the resource
	 * @returns Promise<boolean> resolved with true and rejected with an error
	 */
    public async save(resource: Resource) {
		try {
			this.emitTaskEvent(true, 'save');
			utils.requireNonNull(resource, 'resource');
			const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
			await this.http.post('filebrowser/option',   { 
				name: 'update_resource', path: resource.path, content: resource.content 
			}, {headers: headers}).toPromise();
			this.emitTaskEvent(false, 'save');
			this.git.refresh();
			return true;
		} catch(error) {
			this.emitTaskEvent(false, 'save');
			throw error;
		}
	}
	
	/**
	 * Opens the content of the resource on the server (if not already opened)
	 * @param resource the resource
	 * @returns Promise<boolean> resolved with true or false and rejected with an error
	 */
	public async open(resource: Resource) {
		return new Promise<boolean>((resolve, reject) => {
			this.selection = resource;
			if (resource.type === 'folder') {
				resource.expanded = !resource.expanded;
				resolve(false);
			} else {
				this.emitTaskEvent(true, 'open');
				if ((resource.content || resource.image) && !resource.dirty) {
					this.emitTaskEvent(false, 'open');
					resolve(true);
				} else {
					const params = new HttpParams().set('name', 'get_resource').set('path', resource.path);
					this.http.get('filebrowser/option', { params: params }).toPromise().then(response => {
						this.emitTaskEvent(false, 'open');
						resource.content = response['content'];
						resource.image = response['image'];
						resource.changed = false;
						resource.dirty = false;
						resourceInit(resource);
						resolve(true);
					}).catch((error: HttpErrorResponse) => {
						this.emitTaskEvent(false, 'open');
						if (error.error && error.error.includes("codec can't decode")) {
							reject(resource.name + ' is not displayed in the editor because it is either binary or uses an unsupported text encoding.');
						} else {
							reject(error);
						}
					});
				}
			}
		});
	}

	/**
	 * Gets a value indicating whether the given resource is the selected one inside the explorer
	 * @param resource the resource
	 * @returns true if the resource is the selected one false otherwise
	 */
	public isSelection(resource: Resource) {
		return this.selection && resource.path === this.selection.path;
	}
	
	/**
	 * Loads the preview content of the resource.
	 * @param resource the resource to preview.
	 * @returns Promise<boolean> resolved with true or false and rejected with an error
	 */
	public preview(resource:  Resource) {
		return new Promise((resolve, reject) => {
			this.emitTaskEvent(true, 'preview');
			const ext = utils.extensionOf(resource);
			const action = this.previewFunctions[ext];
			action(resource, this).then(response => {
				this.emitTaskEvent(false, 'preview');
				resource.state.preview = response.preview;
				resolve(true);
			}).catch((error: any) => {
				this.emitTaskEvent(false, 'preview');
				reject(error);
			});
		});
	}

	public subscribeRefreshEvent(completion: () => void) {
		this.onRefreshed.subscribe(completion);
	}

	public subscribeSelectEvent(completion: (resource: Resource) => void) {
		this.onSelected.subscribe(completion);
	}

	public subscribeDeleteEvent(completion: (resource: Resource) => void) {
		this.onDeleted.subscribe(completion);
	}
	
	public subscribeTaskEvent(completion: (running: boolean) => void) {
		this.onRunningTask.subscribe(completion);
	}

	/**
	 * Reloads the resources from the server.
	 * @returns Promise<boolean> resolved with true or rejected with an error.
	 */
	public async refresh() {
		return new Promise<Boolean>((resolve, reject) => {
			this.emitTaskEvent(true, 'refresh');
			this.emitRefreshEvent();
			if (this.subscription)
			this.subscription.unsubscribe();
			const params = new HttpParams().set('name', 'get_resources');
			this.subscription = this.http.get<Resource[]>('/filebrowser/option', { params: params })
			.subscribe(response => {
				this.resources = response;
				if (this.resources.length > 0) {
					this.resources[0].expanded = true;
					this.sort(this.resources);
				}
				this.git.refresh();
				this.emitTaskEvent(false, 'refresh');
				resolve(true);
			}, 
			error => {
				this.emitTaskEvent(false, 'refresh');
				reject(error);
			});
		});
	}

	private add(resource: Resource, type: string) {
		utils.assert(resource.type === 'folder', 'resource.type must be folder');
        resource.children = resource.children || [];
		utils.assert(resource.children.every(e => !e.editing), 'cannot edit multiple resources');
        resource.expanded = true;
        const newResource: Resource = {
            ...resource,
            editing: true,
            name: '',
            type: type,
            icon: 'fas fa-' + type,
            children: [],            
            parent: resource.path,
            parentRef: resource,
        };
        resource.children.push(newResource);
        return newResource;
    }

	private emitTaskEvent(running: boolean, taskName: string) {
		this.runningTask = running;
		this.taskName = taskName;
		this.onRunningTask.next(running);
	}

	private async moveResource(src: Resource, dst: Resource) {
		utils.requireNonNull(src.path, 'src.path');
		utils.requireNonNull(dst.path, 'dst.path');
		utils.assert(src.path != dst.path, 'cannot move the resource to the same path')
		utils.assert(!utils.isRoot(src), 'cannot move a root resource')

		const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8'); 
		const response = await this.http.post('filebrowser/option',  {
			name: 'move_resource',
			path: src.path,
			dst: dst.path
		}, { headers: headers }).toPromise();
		
		const srcLastParent = this.find(src.parent);
		srcLastParent.children = srcLastParent.children.filter(item => item.path !== src.path);
		src.parent = dst.path;
		src.path = response['path'];
		dst.children.push(src);
		return src;
	}

	private async moveFile(src: File, dst: Resource) {
		utils.requireNonNull(src.name, 'src.name');
		utils.requireNonNull(dst.path, 'dst.path');
		utils.checkName(src.name);
		const formData = new FormData();
		formData.append('file', src, src.name);
		formData.append('path', dst.path);
		const headers  = new HttpHeaders();
		headers.set('Content-Type', null);
		headers.set('Accept', "multipart/form-data");
		await this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise();
		const newRes = this.addFile(dst);
		newRes.path += '/' + src.name;
		newRes.name = src.name;
		delete newRes.editing;
		return newRes;
	}

	private previewPL(resource: Resource, service: EditorService) {
		const data = {
			'name': 'preview_pl',
			'path': resource.path,
			'content': resource.content,
			'requested_action': 'preview'
		};
		const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
		return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
	}

	private remove(path: string) {
		function remove_recursive(items: Resource[]): boolean {
			if (items) {
				for (let i = 0; i < items.length; i++) {
					if (items[i].path === path) {
						items.splice(i, 1);
						return true;
					} else {
						if (remove_recursive(items[i].children)) {
							return true;
						}
					}
				}
			}
			return false;
		}
		return remove_recursive(this.resources);
	}

	private sort(resources: Resource[]) {
		if (resources) {
			resources.sort((a: Resource, b: Resource) => {
				if (a.type === b.type) { 
				  return a.name < b.name ? -1 : 1;
				}
				return a.type === 'folder' ? -1 : 1;
			});
			for (const item of resources) {
				this.sort(item.children);
			}
		}
	}
}
