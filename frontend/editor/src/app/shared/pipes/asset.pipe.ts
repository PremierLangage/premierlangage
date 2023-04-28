import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 *  Preprends environment.assets directory path to an URL.
 */
@Pipe({name: 'asset'})
export class AssetPipe implements PipeTransform {
    transform(value: string): any {
        const base = environment.assets;
        if (value.startsWith('/')) {
            return base + value;
        }
        return  base + '/' + value;
    }
}
