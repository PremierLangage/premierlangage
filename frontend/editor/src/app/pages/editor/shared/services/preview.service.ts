import { Injectable } from '@angular/core';
import { IResource } from '../models/resources.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskService } from '../../../../core/task.service';
import { Paths } from 'src/app/shared/utils/paths';


@Injectable({ providedIn: 'root' })
export class PreviewService {

    private readonly previewProviders = {};

    constructor(
        private readonly task: TaskService,
        private readonly http: HttpClient
    ) {
        this.previewProviders = {
            'pl': this.previewPL,
            'svg': this.previewSVG,
            'md': this.previewMD,
        };
    }


    /**
     * Loads the preview content of the resource.
     * @param resource the resource to preview.
     * @returns Promise<Resource> resolved with the resource
     */
    async preview(resource:  IResource): Promise<IResource> {
        try {
            this.task.emitTaskEvent(true, 'preview');
            const response = await this.previewProviders[Paths.extname(resource.path)](resource, this);
            resource.meta.previewData = response.preview;
            this.task.emitTaskEvent(false);
            return resource;
        } catch (error) {
            this.task.emitTaskEvent(false);
            throw error;
        }
    }

    private previewPL(resource: IResource, service: PreviewService) {
        const data = {
            'name': 'preview_pl',
            'path': resource.path,
            'content': resource.content
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        return service.http.post('filebrowser/option', data, { headers: headers }).toPromise();
    }

    private previewMD(resource: IResource, service: PreviewService) {
        return Promise.resolve({ preview: resource.content });
    }

    private previewSVG(resource: IResource) {
        return Promise.resolve({ preview: resource.content });
    }
}
