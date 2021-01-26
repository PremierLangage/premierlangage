import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({name: 'assetPath'})
export class AssetPathPipe implements PipeTransform {

    transform(path: string): string {
        return environment.assets + '/' + path;
    }
}
