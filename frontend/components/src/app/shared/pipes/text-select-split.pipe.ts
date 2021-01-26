import { Pipe, PipeTransform } from '@angular/core';
import { TextSelectSplitOptions } from '../models/text-select.model';

@Pipe({
  name: 'textSelectSplit'
})
export class TextSelectSplitPipe implements PipeTransform {

    transform(value: string, options: TextSelectSplitOptions): string {
        const { mode, separator, attributes } = options;
        value = (value || '').trim();
        if (mode === 'word') {
            return value.split(separator).reduce((acc, curr, index) => {
                if (curr.trim().length === 0) {
                    return acc;
                }
                return `${acc} <span data-index="${index}" ${attributes ? attributes(index) : ''}>${curr}</span>`;
            }, '');
        } else {
            const html = [];
            let index = 0;
            for (const c of value) {
                html.push(`<span data-index="${index}" ${attributes ? attributes(index) : ''}>${c}</span>`);
                index++;
            }
            return html.join('');
        }
    }

}
