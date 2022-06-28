import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contracts } from 'src/app/shared/utils/contracts';
import { Paths } from 'src/app/shared/utils/paths';
import { TaskService } from '../../../../core/task.service';
import * as filters from '../models/filters.model';
import { cloneResource, createResource, IResource, ResourceTypes } from '../models/resources.model';
import { HttpParamEncoder } from 'src/app/shared/utils/http-encoder.model';

@Injectable({ providedIn: 'root' })
export class ResourceService {

    private cache: IResource[] = [];

    private resources: IResource[] = [];

    /** event that emits after a resource is created */
    readonly created: Subject<IResource> = new Subject();

    /** event that emits after a resource is deleted */
    readonly deleted: Subject<IResource> = new Subject();

    /**
     * event that emits after a resource is renamed
     * with an object
     *
     * {
     * before: string,
     * after: string
     * }
     *
     * where `before` is the path before the renaming and `after` the path after the renaming
    */
    readonly renamed: Subject<{ before: string, after: string }> = new Subject();

    /** event that emits each time any resource is created|deleted|renamed  */
    readonly changed: Subject<IResource[]> = new Subject();

    get home() {
      return this.resources[0];
    }

    get lib() {
      return this.resources[1];
    }

    constructor(
        private readonly http: HttpClient,
        private readonly task: TaskService,
    ) {}

    getAll() {
        return this.resources.slice();
    }

    /**
     * Finds the resource with the given path.
     *
     * If the path begin with '/' the function will remove it from the path before
     * searching the resource.
     * @param path the path of the resource to search
     * @returns the resource or undefined
     */
    find(path: string): IResource {
        if (!path) {
            return null;
        }

        path = path.trim();
        if (path.startsWith('/')) {
            path = path.substring(1, path.length);
        }
        return this.findPredicate(item => item.path === path);
    }

    /**
     * Finds all the resources which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    findAll(predicate: (resource: IResource) => boolean): IResource[] {
        return this.cache.filter(item => predicate(item));
    }

    /**
     * Finds the resource which meets the given predicate.
     *
     * If the predicate makes a path comparison be sure to remove '/' from the starts
     * of the path.
     * @param predicate the predicate to test
     */
    findPredicate(predicate: (resource: IResource) => boolean): IResource {
        return this.cache.find(r => predicate(r));
    }

    removeDuplicates(src: IResource[]) {
        const nodes: IResource[] = [];
        src.forEach(n1 => {
            if (!src.some(n2 => n1.path !== n2.path && n1.path.startsWith(n2.path))) {
                nodes.push(n1);
            }
        });
        return nodes;
    }

    /**
     * Finds the resource at `path` relative to the path of the given `resource`.
     * @param resource the resource
     * @param path the path to find.
     * @returns A promise that resolves with the resource.
     */
    async findRelativeTo(resource: IResource, path: string) {
        try {
            this.task.emitTaskEvent(true, 'resolve path');
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            })
                .set('name', 'resolve_path')
                .set('path', resource.path)
                .set('target', path);
            const response = await this.http.get('filebrowser/option', {
                params: params, responseType: 'text'
            }).toPromise();
            this.task.emitTaskEvent(false);
            return this.find(response);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * creates the resource on the server.
     * @param resource the resource object to create.
     * @returns A promise that resolves once the resource is created on the server.
     */
    async create(resource: IResource): Promise<void> {
        Contracts.checkName(resource.name);
        Contracts.assert(filters.canWrite(resource), 'permission denied: write access not granted for ' + resource.path);
        // tslint:disable-next-line: max-line-length
        Contracts.assert(filters.canWrite(this.find(resource.parent)), 'permission denied: write access not granted for ' + resource.parent);

        this.task.emitTaskEvent(true);

        try {
            const body = {
                name: 'create_resource',
                path: resource.parent + '/' + resource.name,
                content: resource.content,
                type: resource.type
            };

            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const response = await this.http.post<any>('filebrowser/option', body, {
                headers: headers
            }).toPromise();

            resource.path = response.path;
            this.cache.push(resource);

            const parent = this.find(resource.parent);
            parent.children = parent.children || [];
            parent.children.push(resource);
            this.sort(parent.children);

            this.changed.next(this.getAll());
            this.created.next(resource);

            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Renames the resource on the server.
     * @param resource the resource object to rename.
     * @param name the new name of the resource.
     * @returns A promise that resolves once the resource is renamed on the server.
     */
    async rename(resource: IResource, name: string): Promise<void> {
        Contracts.checkName(name);
        Contracts.assert(filters.canWrite(resource), 'permission denied');
        Contracts.assert(!filters.isRoot(resource), 'cannot rename root directory');

        if (name === resource.name) {
            return Promise.resolve();
        }

        try {
            this.task.emitTaskEvent(true);
            const body = {
                name: 'rename_resource',
                path: resource.path,
                target: name,
            };
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            const response = await this.http.post<any>('filebrowser/option', body, {
                headers: headers
            }).toPromise();

            const after = response.path;
            const before = resource.path;
            const parent = this.find(resource.parent);
            parent.children = parent.children || [];

            resource.name = Paths.basename(after);
            this.replace(before, after);

            this.sort(parent.children);
            this.changed.next(this.getAll());

            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Deletes the resource object from the server.
     * @param resource the resource object to deletes.
     * @returns A promise that resolves once the resource is deleted on the server.
     */
    async delete(resource: IResource) {
        Contracts.requireNonNull(resource, 'resource');
        Contracts.assert(filters.canWrite(resource), 'permission denied');
        Contracts.assert(!filters.isRoot(resource), 'permission denied');
        try {
            this.task.emitTaskEvent(true);
            const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
            await this.http.post('filebrowser/option', {
                name: 'delete_resource',
                path: resource.path
            }, { headers: headers }).toPromise();
            this.remove(resource.path);

            this.changed.next(this.getAll());
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    deleteAll(resources: IResource[]) {
        Contracts.requireNonNullArray(resources, 'resources');
        resources.forEach(r => {
            Contracts.assert(filters.canWrite(r), 'permission denied');
            Contracts.assert(!filters.isRoot(r), 'permission denied');
        });
        return Promise.all(resources.map(this.delete.bind(this)));
    }

    /**
     * Moves the file|resource 'src' to the resource 'dst'.
     * @param src the source file or resource
     * @param dst the destination resource
     * @returns A promise that resolves once src is moved to dst on the server.
     */
    async move(src: IResource | File, dst: IResource) {
        Contracts.requireNonNull(src, 'src');
        Contracts.requireNonNull(dst, 'dst');
        Contracts.assert(filters.canWrite(dst), 'permission denied');
        Contracts.assert(filters.isFolder(dst), 'destination must be a directory');

        try {
            this.task.emitTaskEvent(true);
            if (src instanceof File) {
                await this.upload(src, dst);
            } else {
                await this.drag(src, dst);
            }

            this.sort(dst.children);
            this.changed.next(this.getAll());
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Clone the resource 'src' to the resource 'dst'.
     * @param src the source resource
     * @param dst the destination resource
     * @returns A promise that resolves once src is cloned to dst on the server.
     */
    async clone(src: IResource[], dst: IResource) {
        Contracts.requireNonNull(src, 'src');
        Contracts.requireNonNull(dst, 'dst');
        Contracts.assert(filters.canWrite(dst), 'permission denied');
        Contracts.assert(filters.isFolder(dst), 'destination must be a directory');

        const nodes: IResource[] = this.removeDuplicates(src);

        if (nodes.length) {
            try {
                this.task.emitTaskEvent(true);
                for (const node of nodes) {
                    await this.drag(node, dst, true);
                }
                this.sort(dst.children);
                this.changed.next(this.getAll());
                this.task.emitTaskEvent(false);
            } catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        }
    }

    /**
     * Saves the content of the resource on the server
     * @param resource the resource
     * @returns Promise<boolean> resolved with true and rejected with an error
     */
    async save(resource: IResource) {
        if (resource.changed) {
            try {
                this.task.emitTaskEvent(true, 'save');
                Contracts.requireNonNull(resource, 'resource');
                const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
                await this.http.post('filebrowser/option', {
                    name: 'update_resource', path: resource.path, content: resource.content
                }, { headers: headers }).toPromise();
                resource.changed = false;
                resource.savedContent = resource.content;
                this.task.emitTaskEvent(false);
            } catch (error) {
                this.task.emitTaskEvent(false);
                throw error;
            }
        }
    }

    /**
     * Downloads the folder as a zip archive
     * @param resource the resource
     * @throws {ReferenceError} if resource is null or undefined.
     * @throws {TypeError} if resource is not a folder.
     * @returns Promise<void> resolved with true and rejected with an error
     */
    async download(resource: IResource) {
        Contracts.requireNonNull(resource, 'resource');
        Contracts.assert(resource.type === ResourceTypes.Folder);
        try {
            this.task.emitTaskEvent(true);
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('name', 'download_resource').set('path', resource.path);
            await this.http.get('filebrowser/option', { params: params }).toPromise();
            this.task.emitTaskEvent(false);
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Opens the content of the resource on the server (if not already opened)
     * @param resource the resource
     * @returns Promise<boolean> resolved with true or false and rejected with an error
     */
    async open(resource: IResource) {
        if (resource.type === ResourceTypes.Folder) {
            return true;
        }

        if (filters.isLoaded(resource) && !resource.dirty) {
            return true;
        }

        try {
            this.task.emitTaskEvent(true);

            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('name', 'get_resource').set('path', resource.path);
            const response = await this.http.get('filebrowser/option', { params: params }).toPromise();
            resource.meta = response['meta'];
            resource.content = resource.savedContent = response['content'];
            resource.changed = resource.dirty = false;

            this.task.emitTaskEvent(false);
            return true;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    async search(directory: IResource, query: string) {
        Contracts.requireNonNull(directory, 'directory');
        Contracts.requireNonNullString(query, 'query');
        Contracts.assert(directory.type === ResourceTypes.Folder, 'search path must be a directory');

        function splitWithTail(str: string, delim: string, count: number) {
            const parts = str.split(delim);
            const tail = parts.slice(count).join(delim);
            const result = parts.slice(0, count);
            result.push(tail);
            return result;
        }

        try {
            this.task.emitTaskEvent(true);

            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            })
            .set('name', 'search_in_files')
            .set('path', directory.path)
            .set('query', query);

            const matches: { [k: string]: any[] } = {};
            const response = await this.http.get('filebrowser/option', {
                params: params,
                responseType: 'text'
            }).toPromise();

            const lines = response.split('\n');
            let path = directory.path;
            if (!path.endsWith('/')) {
                path += '/';
            }

            lines.forEach(line => {
                if (line) {
                    const tokens = splitWithTail(line, ':', 2);
                    const file = tokens[0].replace('./', path);
                    const lineno = Number.parseInt(tokens[1], 10);
                    const match = tokens[2];

                    matches[file] = matches[file] || [];
                    matches[file].push({
                        match,
                        lineno,
                    });
                }
            });

            this.task.emitTaskEvent(false);
            return Object.keys(matches).map(k => {
                return {
                    resource: this.find(k),
                    matches: matches[k]
                };
            }).filter(e => !!e.resource) || [];
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    /**
     * Reloads the resources from the server.
     * @returns A promise that resolves with true
     */
    async refresh() {
        try {
            this.task.emitTaskEvent(true);
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('name', 'get_resources');
            const resources = await this.http.get<IResource[]>('/filebrowser/option', { params: params }).toPromise();
            if (resources.length > 0) {
                this.sort(resources);
            }
            await this.build(resources);
            this.changed.next(this.getAll());
            this.task.emitTaskEvent(false);
            return true;
        } catch (error) {
            this.resources = [];
            this.changed.next(this.getAll());
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    async load(resource: IResource) {
        let response: string;
        try {
            this.task.emitTaskEvent(true);
            const params = new HttpParams({
                encoder: new HttpParamEncoder()
            }).set('name', 'load_pltp').set('path', resource.path);
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
            this.task.emitTaskEvent(true);
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

    getTestUrl(resource: IResource) {
        return window.location.origin + '/filebrowser/option?name=test_pl&path=' + resource.path;
    }

    getDownloadURL(resource: IResource) {
        return  window.location.origin + '/filebrowser/option?name=download_resource&path=' + resource.path;
    }

    private async build(resources: IResource[]) {
        const cache = [];
        async function recursive(item: IResource) {
            cache.push(item);
            if (item.children) {
                for (const child of item.children) {
                    await recursive(child);
                }
            }
        }
        for (const root of resources) {
            await recursive(root);
        }
        this.cache = cache;
        this.resources = resources;
    }

    private async upload(src: File, dst: IResource) {
        Contracts.requireNonNull(src, 'src');
        Contracts.requireNonNull(dst, 'dst');
        Contracts.requireNonNullString(dst.path, 'dst.path');
        Contracts.checkName(src.name);
        const formData = new FormData();
        formData.append('file', src, src.name);
        formData.append('path', dst.path);
        const headers = new HttpHeaders();
        headers.set('Content-Type', null);
        headers.set('Accept', 'multipart/form-data');
        await this.http.post('/filebrowser/upload_resource', formData, { headers: headers }).toPromise();
        const newRes = createResource(dst, ResourceTypes.File);
        newRes.path = dst.path + '/' + src.name;
        newRes.name = src.name;
        dst.children = dst.children || [];
        dst.children.push(newRes);
        this.cache.push(newRes);
        return newRes;
    }

    private async drag(src: IResource, dst: IResource, copy?: boolean) {
        Contracts.requireNonNull(src, 'src');
        Contracts.requireNonNull(dst, 'dst');
        Contracts.requireNonNullString(src.path, 'src.path');
        Contracts.requireNonNullString(dst.path, 'dst.path');
        Contracts.assert(!filters.isRoot(src), 'cannot move a root resource');
        Contracts.assert(src.path !== dst.path, 'cannot move the resource to the same directory');

        const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        const response = await this.http.post<any>('filebrowser/option', {
            name: 'move_resource',
            path: src.path,
            dst: dst.path,
            copy: !!copy
        }, { headers: headers }).toPromise();

        const oldPath = response.path;
        const newPath = src.path;
        const parent = this.find(src.parent);
        parent.children = parent.children || [];

        if (copy) {
            const clone = cloneResource(src);
            clone.path = oldPath;
            clone.parent = dst.path;
            dst.children.push(clone);
            this.replace(newPath, oldPath, clone);
            this.cache.push(clone);
        } else {
            parent.children = parent.children.filter(item => {
                return item.path !== src.path;
            });
            src.path = oldPath;
            src.parent = dst.path;
            dst.children.push(src);
            this.replace(newPath, oldPath);
        }
        this.changed.next(this.getAll());
        return src;
    }

    private replace(oldPath: string, newPath: string, target?: IResource) {
        const that = this;
        function doAction(item: IResource) {
            if (item.path.startsWith(oldPath)) {
                const before = item.path;
                item.path = before.replace(oldPath, newPath);
                that.renamed.next({ before: before, after: item.path });
            }
            if (item.parent.startsWith(oldPath)) {
                item.parent = item.parent.replace(oldPath, newPath);
            }
        }

        if (target) {
            doAction(target);
        } else {
            for (const item of this.cache) {
                doAction(item);
            }
        }
    }

    private remove(path: string) {
        path = path.trim();
        const toRemove = this.find(path);
        if (!toRemove) {
            return false;
        }
        const p = this.find(toRemove.parent);
        if (!p) {
            return false;
        }
        const index = p.children.findIndex(e => e.path === path);
        if (index === -1) {
            return false;
        }
        p.children.splice(index, 1);
        this.cache = this.cache.filter(e => e.path !== path);


        function propagate(item: IResource, subject: Subject<IResource>) {
            subject.next(item);
            if (item.children) {
                item.children.forEach(child => propagate(child, subject));
            }
        }
        propagate(toRemove, this.deleted);
    }

    private sort(resources: IResource[]) {
        if (resources) {
            resources.sort((a: IResource, b: IResource) => {
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

}
