import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyPrint'
})
export class PrettyPrintPipe implements PipeTransform {

    transform(val: string) {
        return JSON.stringify(val, undefined, 4)
        .replace(' ', '&nbsp;')
        .replace('\n', '<br/>');
    }

}
