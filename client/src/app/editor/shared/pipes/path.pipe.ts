import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'path'})
export class PathPipe implements PipeTransform {

    transform(v: string): string {
        if (!v) {
            return v;
        }
        const components = v.split('/');
        if (components[0] === 'lib') {
            return v;
        }
        components[0] = 'home';
        return components.join('/');
    }
}
