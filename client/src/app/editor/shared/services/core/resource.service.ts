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
    private __resources__: Resource[] = [];

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
     * Gets a value indicating whether the given resource is the selected one inside the explorer
     * @param resource the resource
     * @returns true if the resource is the selected one false otherwise
     */
    isSelection(resource: Resource) {
        return this.selection && resource.path === this.selection.path;
    }

    getResources() {
        return this.__resources__;
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
     */
    findPredicate(predicate: (resource: Resource) => boolean): Resource {
        return this.__resources__.find(r => predicate(r));
    }

    /**
     * Finds the resources which meets the given predicate.
     * @param predicate the predicate to test
     */
    findAll(predicate: (resource: Resource) => boolean): Resource[] {
        return this.__resources__.filter(r => predicate(r));
    }

    /**
     * Creates new file at the given path
     * @param the path of the file
     * @returns the created resource
     */
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
        filters.findIcon(resource);
        this.__resources__.push(resource);
        return resource;
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
        try {
            let success = false;
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
                    filters.findIcon(resource);
                }
            }
            this.task.emitTaskEvent(false);
            return success;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
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
            const success = await this.endEdition(data, resource);
            this.task.emitTaskEvent(false);
            filters.findIcon(resource);
            return success;
        } catch (error) {
            this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            this.git.refresh();
            return false;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    async loadPLTP(resource: Resource) {
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
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            this.git.refresh();
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            this.git.refresh();
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            return this.find(response);
        } catch (error) {
            this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            throw error;
        }
        this.task.emitTaskEvent(false);
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
            this.task.emitTaskEvent(false);
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<Resource> resolved with the resource
     */
    async preview(resource:  Resource): Promise<Resource> {
        try {
            if (!filters.fromServer(resource)) {
                resource.meta.previewData = resource.content;
                return Promise.resolve(resource);
            }
            this.task.emitTaskEvent(true, 'preview');
            const response = await this.previewProviders[filters.extension(resource)](resource, this);
            resource.meta.previewData = response.preview;
            this.task.emitTaskEvent(false);
            return resource;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
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
                this.build();
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
            this.__resources__.push(resource);
        }
        this.sort(parent.children);
        resource.renaming = false;
        resource.creating = false;
        this.git.refresh();
        return true;
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
        this.__resources__.push(newRes);
        return newRes;
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

        const parent = this.find(src.parent);
        parent.children = parent.children.filter(item => item.path !== src.path);
        src.parent = dst.path;
        src.path = response['path'];
        dst.children.push(src);
        return src;
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

    private build() {
        const array = [];
        function recursive(item: Resource) {
           filters.findIcon(item);
            array.push(item);
            if (item.children) {
                for (const child of item.children) {
                    recursive(child);
                }
            }
        }
        for (const root of this.resources) {
            recursive(root);
        }
        this.__resources__ = array;
    }

    private remove(path: string) {
        path = path.trim();
        const r = this.find(path);
        if (!r) {
            return false;
        }
        const p = this.find(r.parent);
        if (!p) {
            return false;
        }
        const index = p.children.findIndex(e => e.path === path);
        if (index === -1) {
            return false;
        }
        p.children.splice(index, 1);
        this.__resources__ = this.__resources__.filter(e => e.path !== path);
        return true;
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
