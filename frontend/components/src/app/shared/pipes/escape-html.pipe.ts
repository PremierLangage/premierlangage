import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'escapeHtml'
})
export class EscapeHtmlPipe implements PipeTransform {

    constructor() {}

    transform(value: string): SafeHtml {
        if (!value) {
            return '';
        }
        const obj = {'<': '&lt;', '>': '&gt;', '\'': '&apos;', '"': '&qout;', '&': '&amp;'};
        return value.split('').map(x => obj.hasOwnProperty(x) ? obj[x] : x ).join('');
    }
}
