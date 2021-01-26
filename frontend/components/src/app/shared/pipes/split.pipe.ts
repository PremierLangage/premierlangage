import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

    constructor() {}

    transform(value: string, separator = ' '): string[] {
        value = (value || '').trim();
        return value.split(separator).map(e => e.trim());
    }

}
