import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Resource, FILE_RESOURCE, FOLDER_RESOURCE, newResource } from '../../models/resource.model';
import { Subscription, Subject } from 'rxjs';
import { GitService } from './git.service';
import { TaskService } from './task.service';
import * as filters from '../../models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

    private subscription: Subscription;
    private readonly previewProviders = {};
    resources: Resource[] = [];
    selection: Resource;

    constructor(
        private readonly http: HttpClient,
        private readonly task: TaskService,
        private readonly git: GitService,
    ) {
        this.previewProviders = {
            'pl': this.previewPL,
            'svg': this.previewSVG,
            'md': this.previewMD,
        };
    }

    /**
     * Renames the resource on the server.
     * @param resource the resource object to rename.
     * @param name the new name of the resource.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    async rename(resource: Resource, name: string) {
        filters.checkName(name);
        filters.assert(filters.canWrite(resource), 'permission denied');
        filters.assert(filters.canWrite(this.find(resource.parent)), 'permission denied on parent directory');
        let success = false;
        try {
            this.task.emitTaskEvent(true, 'rename');
            if (name === resource.name) {
                success = true;
            } else {
                const data = {
                    name: 'rename_resource',
                    path: resource.path,
                    target: name,
                };
                success = await this.endEdition(data, resource);
                if (success) {
                    resource.name = name;
                }
            }
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
        this.task.emitTaskEvent(false);
        return success;
    }

    /**
     * creates the resource on the server.
     * @param resource the resource object to create.
     * @returns Promise<boolean> rejected with an error or resolved with true.
     */
    async create(resource: Resource) {
        filters.checkName(resource.name);
        filters.assert(filters.canWrite(resource), 'permission denied');
        filters.assert(filters.canWrite(this.find(resource.parent)), 'permission denied on parent directory');
        this.task.emitTaskEvent(true, 'create resource');
        try {
            filters.checkName(resource.name);
            filters.assert(filters.canWrite(this.find(resource.parent)), 'permission denied');
            const data = {
                name: 'create_resource',
                path: resource.parent + '/' + resource.name,
                content: resource.content,
                type: resource.type
            };
            await this.endEdition(data, resource);
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false, 'create resource');
            throw error;
        }
    }

    /**
     * Deletes the resource object from the server.
     * @param resource the resource object to deletes.
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    async delete(resource: Resource) {
        try {
            filters.requireNonNull(resource, 'resource');
            filters.assert(filters.canWrite(resource), 'permission denied');
            filters.assert(!filters.isRoot(resource), 'permission denied');
            this.task.emitTaskEvent(true, 'delete');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            await this.http.post('filebrowser/option', {
                name: 'delete_resource',
                path: resource.path
            }, { headers: headers }).toPromise();

            if (this.remove(resource.path)) {
                this.task.emitDeleteEvent(resource);
            }
            this.task.emitTaskEvent(false, 'delete');
            this.git.refresh();
            return false;
        } catch (error) {
            this.task.emitTaskEvent(false, 'delete');
            throw error;
        }
    }

    /** Gets a value indicating whether any resource is changec */
    changed() {
        return this.findPredicate(item => item.changed) !== undefined;
    }

    /**
     * Finds the resource with the given path.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    find(path: string): Resource {
        path = path.trim();
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return this.findPredicate(item => '/' + item.path === path);
    }

    /**
     * Finds the resource which meets the given predicate.
     * @param predicate the predicate to test
     * @returns the resource or undefined
     */
    findPredicate(predicate: (resource: Resource) => boolean): Resource {
        function recursive(resource: Resource) {
            if (!resource) {
                return undefined;
            }
            if (predicate(resource)) {
                return resource;
            }
            if (resource.children) {
                for (const root of resource.children) {
                    const result = recursive(root);
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
     * @returns A Promise resolved with the search result
     */
    findAll(predicate: (resource: Resource) => boolean): Promise<Resource[]> {
        return new Promise((resolve) => {
            const result = [];
            this.task.emitTaskEvent(true, 'search');
            function recursive(resource: Resource) {
                if (!resource) {
                    return undefined;
                }
                if (predicate(resource)) {
                    result.push(resource);
                }
                if (resource.children) {
                    for (const root of resource.children) {
                        const item = recursive(root);
                        if (item) {
                            return item;
                        }
                    }
                }
                return undefined;
            }

            for (const root of this.resources) {
               recursive(root);
            }
            this.task.emitTaskEvent(false, 'search');
            resolve(result);
        });
    }

    async loadPLTP(resource: Resource) {
        let response: string;
        try {
            this.task.emitTaskEvent(true, 'load pltp');
            const params = new HttpParams().set('name', 'load_pltp').set('path', resource.path);
            response = await this.http.get('/filebrowser/option', { params: params , responseType: 'text'}).toPromise();
            this.task.emitTaskEvent(false, 'load pltp');
        } catch (error) {
            this.task.emitTaskEvent(false, 'load pltp');
            throw error;
        }
        return response;
    }

    async reloadPLTP(resource: Resource, activityId: number) {
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
            this.task.emitTaskEvent(false, 'reload pltp');
        } catch (error) {
            this.task.emitTaskEvent(false, 'reload pltp');
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
    async move(src: Resource | File, dst: Resource) {
        try {
            this.task.emitTaskEvent(true, 'move');
            filters.requireNonNull(src, 'src');
            filters.requireNonNull(dst, 'dst');
            filters.assert(filters.canWrite(dst), 'permission denied');
            filters.assert(filters.isFolder(dst), 'destination must be a directory');

            let resource: Resource;
            if ('size' in src) { // File type contains size property
                resource = await this.moveFile(src as unknown as File, dst);
            } else {
                resource = await this.moveResource(src as unknown as Resource, dst);
            }
            this.sort(dst.children);
            dst.expanded = true;
            this.selection = resource;
            this.task.emitTaskEvent(false, 'move');
            this.git.refresh();
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false, 'move');
            throw error;
        }
    }

    /**
     * Saves the content of the resource on the server
     * @param resource the resource
     * @returns Promise<boolean> resolved with true and rejected with an error
     */
    async save(resource: Resource) {
        if (!filters.fromServer(resource)) {
            return true;
        }
        if (!resource.changed) {
            return true;
        }
        try {
            this.task.emitTaskEvent(true, 'save');
            filters.requireNonNull(resource, 'resource');
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            await this.http.post('filebrowser/option',   {
                name: 'update_resource', path: resource.path, content: resource.content
            }, {headers: headers}).toPromise();
            resource.changed = false;
            resource.lastContent = resource.content;
            this.task.emitTaskEvent(false, 'save');
            this.git.refresh();
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false, 'save');
            throw error;
        }
    }

    async findReference(resource: Resource, path: string) {
        try {
            this.task.emitTaskEvent(true, 'resolve path');
            const params = new HttpParams()
                            .set('name', 'resolve_path')
                            .set('path', resource.path)
                            .set('target', path);
            const response = await this.http.get('filebrowser/option', { params: params, responseType: 'text' }).toPromise();
            this.task.emitTaskEvent(false, 'resolve path');
            return this.find(response);
        } catch (error) {
            this.task.emitTaskEvent(false, 'resolve path');
            throw error;
        }
    }

    async compilePL(resource: Resource) {
        let response: Object;
        try {
            this.task.emitTaskEvent(true, 'compilation');
            filters.requireNonNull(resource, 'resource');
            filters.assert(filters.isPl(resource), 'pl resource is expected');
            const data = {
                'name': 'compile_pl',
                'path': resource.path,
            };
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            response = await this.http.post('filebrowser/option', data, { headers: headers }).toPromise();
        } catch (error) {
            this.task.emitTaskEvent(false, 'compilation');
            throw error;
        }
        this.task.emitTaskEvent(false, 'compilation');
        return response;
    }

    /**
     * Opens the content of the resource on the server (if not already opened)
     * @param resource the resource
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    async open(resource: Resource) {
        if (!filters.fromServer(resource)) {
            return true;
        }

        this.selection = resource;
        if (resource.type === 'folder') {
            resource.expanded = !resource.expanded;
            return false;
        }

        if (resource.content && !resource.dirty) {
            return true;
        }

        try {
            this.task.emitTaskEvent(true, 'open');
            const params = new HttpParams().set('name', 'get_resource').set('path', resource.path);
            const response = await this.http.get('filebrowser/option', { params: params }).toPromise();
            resource.content = resource.lastContent = response['content'];
            resource.meta = response['meta'];
            resource.changed = false;
            resource.dirty = false;
            this.task.emitTaskEvent(false, 'open');
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false, 'open');
            throw error;
        }
    }

    /**
     * Gets a value indicating whether the given resource is the selected one inside the explorer
     * @param resource the resource
     * @returns true if the resource is the selected one false otherwise
     */
    isSelection(resource: Resource) {
        return this.selection && resource.path === this.selection.path;
    }

    /**
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<Resource> resolved with the resource
     */
    preview(resource:  Resource): Promise<Resource> {
        return new Promise((resolve, reject) => {
            this.task.emitTaskEvent(true, 'preview');
            const ext = filters.extension(resource);
            const action = this.previewProviders[ext];
            action(resource, this).then(response => {
                this.task.emitTaskEvent(false, 'preview');
                resource.meta.previewData = response.preview;
                resolve(resource);
            }).catch((error: any) => {
                this.task.emitTaskEvent(false, 'preview');
                reject(error);
            });
        });
    }

    restore(path: string): Resource {
        const name = filters.basename(path);
        const parentPath = path.substring(0, path.length - (name.length + 1));
        const parent = this.find(parentPath);
        const resource = newResource(parent, FILE_RESOURCE);
        resource.creating = resource.renaming = false;
        resource.name = name;
        resource.path = parentPath + '/' + name;
        parent.children = parent.children || [];
        parent.children.push(resource);
        return resource;
    }

    /**
     * Reloads the resources from the server.
     * @returns Promise<boolean> resolved with true or rejected with an error.
     */
    async refresh() {
        return new Promise<Boolean>((resolve, reject) => {
            this.task.emitTaskEvent(true, 'refresh');
            this.task.emitRefreshEvent();
            if (this.subscription) {
            this.subscription.unsubscribe();
            }
            const params = new HttpParams().set('name', 'get_resources');
            this.subscription = this.http.get<Resource[]>('/filebrowser/option', { params: params })
            .subscribe(response => {
                this.resources = response;
                if (this.resources.length > 0) {
                    this.resources[0].expanded = true;
                    this.sort(this.resources);
                }
                this.git.refresh();
                this.task.emitTaskEvent(false, 'refresh');
                resolve(true);
            },
            error => {
                this.task.emitTaskEvent(false, 'refresh');
                reject(error);
            });
        });
    }

    private async endEdition(postData: any, resource: Resource) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        const response = await this.http.post('filebrowser/option', postData, { headers: headers }).toPromise();
        resource.path = response['path'];
        resource.icon = response['icon'];
        const parent = this.find(resource.parent);
        parent.children = parent.children || [];
        if (resource.creating) {
            parent.children.push(resource);
        }
        this.sort(parent.children);
        resource.renaming = false;
        resource.creating = false;
        this.git.refresh();
        this.task.emitTaskEvent(false, 'create resource');
        return true;
    }

    private async moveResource(src: Resource, dst: Resource) {
        filters.requireNonNull(src.path, 'src.path');
        filters.requireNonNull(dst.path, 'dst.path');
        filters.assert(src.path !== dst.path, 'cannot move the resource to the same path');
        filters.assert(!filters.isRoot(src), 'cannot move a root resource');

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
        filters.requireNonNull(src.name, 'src.name');
        filters.requireNonNull(dst.path, 'dst.path');
        filters.checkName(src.name);
        const formData = new FormData();
        formData.append('file', src, src.name);
        formData.append('path', dst.path);
        const headers  = new HttpHeaders();
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        await this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise();
        const newRes = newResource(dst, FILE_RESOURCE);
        newRes.path = dst.path + '/' + src.name;
        newRes.name = src.name;
        newRes.renaming = newRes.creating = false;
        dst.children = dst.children || [];
        dst.children.push(newRes);
        return newRes;
    }

    private sort(resources: Resource[]) {
        if (resources) {
            resources.sort((a: Resource, b: Resource) => {
                if (a.type === b.type) {
                  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                }
                return a.type === 'folder' ? -1 : 1;
            });
            for (const item of resources) {
                this.sort(item.children);
            }
        }
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

    private previewPL(resource: Resource, service: ResourceService) {
        const data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    }

    private previewMD(resource: Resource, service: ResourceService) {
        return Promise.resolve({ preview: resource.content });
    }

    private previewSVG(resource: Resource) {
        return Promise.resolve({ preview: resource.content });
    }

}
