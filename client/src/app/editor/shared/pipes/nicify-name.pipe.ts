import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({name: 'nicifyName'})
export class NicifyNamePipe implements PipeTransform {

    transform(v: string, nicifyProperty?: boolean): string {
        if (!v) {
            return v;
        }
        if (!nicifyProperty) {
            v = v.split('.').pop();
        }
        const builder: string[] = [];
        let index = 0;
        let c: string;
        const length = v.length;
        while (index < length) {
            c = v[index];
            // tslint:disable-next-line: triple-equals
            const isLetter = c.toLowerCase() != c.toUpperCase();
            if (index === 0) {
                builder.push(c.toUpperCase());
            } else if (c === c.toUpperCase() && isLetter) {
                builder.push(' ');
                builder.push(c);
            } else if (c !== '_' && c !== '.') {
                if (v[index - 1] === '_') {
                    builder.push(' ');
                    builder.push(c.toUpperCase());
                } if (v[index - 1] === '.') {
                    builder.push(': ');
                    builder.push(c.toUpperCase());
                } else {
                    builder.push(c);
                }
            }
            index++;
        }
        return builder.join('');
    }
}
