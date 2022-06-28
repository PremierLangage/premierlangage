import { Pipe, PipeTransform } from '@angular/core';
import { icon } from '../models/icons.model';
import { ResourceService } from '../services/resource.service';

@Pipe({name: 'fileIcon'})
export class FileIconPipe implements PipeTransform {
    constructor(private readonly resources: ResourceService) {
    }

    transform(path: string): string {
        return icon(this.resources.find(path), false);
    }
}
