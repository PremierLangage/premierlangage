import { Injectable } from '@angular/core';
import { IResource, ResourceTypes } from '../../models/resource.model';
import { EditorService } from './editor.service';
import { ResourceService } from './resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

/** Open options */
export interface IOpenOptions {
    /** jumping at the given position after the resource is opened */
    position?: { line: number; column: number; };
    /** open the resource with diff editor */
    diffMode?: boolean;
    /** open the resource in a new group */
    openToSide?: boolean;
}
export interface IOpenerService {

    /**
     * Opens the resource at the given path
     * - Open a browser tab if the path is an url 'http|https|mailto'
     * - Open an editor if the path point to a resource.
     * @param path the path to open
     * @param options open options
     */
    open(path: string, options?: IOpenOptions): Promise<boolean>;

    /**
     * Opens the given url
     * @param url the url to open
     * @param openInNewTab open the url in a new tab if sets to true
     */
    openURL(url: string, openInNewTab: boolean);

    /**
     * Resolves and open the path 'target' relative to 'base'.
     * @param base the path where to resolve 'target'
     * @param target the path to resolve and open
     */
    openReference(base: string, target: string): Promise<boolean>;
}

/** Implementation of IOpenService interface */
@Injectable({
    providedIn: 'root',
})
export class OpenerService implements IOpenerService {

    constructor(
        private readonly editor: EditorService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService
    ) {
    }

    async open(path: string, options?: IOpenOptions): Promise<boolean> {
        if (!path) {
            return Promise.reject(new Error('parameter "path" is required'));
        }
        path = path.trim();
        if (path.startsWith('http') || path.startsWith('mailto')) {
            // open http or default mail application
            this.openURL(path);
            return Promise.resolve(true);
        }
        const resource = this.resources.find(path);
        if (!resource) {
            return Promise.reject(new Error(`Unable to open '${path}': resource not found`));
        }
        if (resource.type !== ResourceTypes.Folder) {
            return this.editor.open(resource, options);
        }
        this.resources.focus(resource);
        return true;
    }

    async openReference(base: string, target: string): Promise<boolean> {
        try {
            const resource = this.resources.find(base);
            if (!resource) {
                return Promise.reject(new Error(`Unable to open '${target}': '${base}' not found`));
            }
            const reference = await this.resources.findRelativeTo(resource, target);
            if (!reference) {
                return Promise.reject(new Error(`Unable to open '${base}': resource not found relative to '${base}'`));
            }
            return await this.editor.open(reference);
        } catch (error) {
            this.notification.logError(error);
            return false;
        }
    }

    openURL(url: string, openInNewTab: boolean = true) {
        if (openInNewTab) {
            window.open(url, '_blank');
        } else {
            window.open(url);
        }
    }
}

