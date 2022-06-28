import { Pipe, PipeTransform } from '@angular/core';
import { Typography } from '../models/text-select.model';

@Pipe({
  name: 'typography'
})
export class TypographyPipe implements PipeTransform {

    constructor() {}

    transform(value: Typography): string {
        switch (value) {
            case Typography.display4: return 'mat-display-4';
            case Typography.display3: return 'mat-display-3';
            case Typography.display2: return 'mat-display-2';
            case Typography.display1: return 'mat-display-1';
            case Typography.headline: return 'mat-h1';
            case Typography.title: return 'mat-h2';
            case Typography.subheading2: return 'mat-h3';
            case Typography.subheading1: return 'mat-h4';
            case Typography.body1: return 'mat-body-1';
            case Typography.body2: return 'mat-body-2';
            case Typography.caption: return 'mat-caption';
            default: return 'mat-body-1';
        }
    }

}
