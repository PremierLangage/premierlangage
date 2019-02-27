import { Injectable } from '@angular/core';
import { Resource } from '../../models/resource.model';
import { EditorService } from './editor.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Schemas } from '../../models/schemas.model';
import { ResourceService } from './resource.service';
import { asURI } from '../../models/filters.model';

export interface IEditorDocument {
    uri: monaco.Uri;
    resource: Resource;
    title: string;
    icon: string;
    position?: { line: number, column: number };
    preview?: boolean;
}

export interface IOpenerService {
    openURI(uri: monaco.Uri, openToSide?: boolean): Promise<boolean>;
    openURL(url: string, openInNewTab: boolean): void;
    openReference(base: monaco.Uri, target: monaco.Uri): void;
}

@Injectable()
export abstract class AbstractOpenerService implements IOpenerService {
    abstract openURI(uri: monaco.Uri, openToSide?: boolean): Promise<boolean>;
    abstract openURL(url: string, openInNewTab?: boolean): void;
    abstract openReference(base: monaco.Uri, target: monaco.Uri): void;
}

@Injectable({
    providedIn: 'root',
})
export class OpenerService extends AbstractOpenerService {

    constructor(
        private readonly editorService: EditorService,
        private readonly resourceService: ResourceService,
        private readonly notificationService: NotificationService
    ) {
        super();
    }

    async openURI(uri: monaco.Uri, openToSide: boolean = false): Promise<boolean> {
        const { scheme, path, query, fragment } = uri;
        if (!scheme) {
            return Promise.resolve(false);
        }

        if (scheme === Schemas.http || scheme === Schemas.https || scheme === Schemas.mailto) {
            // open http or default mail application
            console.log(scheme, path);
            this.openURL(uri.toString(true));
            return Promise.resolve(true);
        }

        let position: { line: number; column: number; } | undefined;
        const match = /^L?(\d+)(?:,(\d+))?/.exec(fragment);
        if (match) {
            // support file:///some/file.js#73,84
            // support file:///some/file.js#L73
            position = {
                // tslint:disable-next-line: radix
                line: parseInt(match[1]),
                // tslint:disable-next-line: radix
                column: match[2] ? parseInt(match[2]) : 1
            };
            // remove fragment
            uri = uri.with({ fragment: '' });
        }

        const resource = this.resourceService.find(uri.path);
        if (!resource) {
            return Promise.reject(new Error('Unable to open \'' + uri.path + '\': File not found'));
        }
        return this.editorService.open({
            uri: uri,
            resource: resource,
            position: position,
            title: resource.name,
            icon: resource.icon,
        }, openToSide);
    }

    openURL(url: string, openInNewTab: boolean = true) {
        if (openInNewTab) {
            window.open(url, '_blank');
        } else {
            window.open(url);
        }
    }

    openReference(base: monaco.Uri, target: monaco.Uri) {
        if (target.scheme === Schemas.http || target.scheme === Schemas.https || target.scheme === Schemas.mailto) {
           this.openURL(target.toString(true));
        } else {
            const resource = this.resourceService.find(base.path);
            this.resourceService.findReference(resource, target.path).then(reference => {
                this.openURI(asURI(reference));
            }).catch(error => {
                this.notificationService.logError(error);
            });
        }
    }
}

