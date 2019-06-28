import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Pipe({
  name: 'trustStyle'
})
export class TrustStylePipe implements PipeTransform {

    constructor(private readonly domSanitizer: DomSanitizer) {}

    transform(value: string): SafeStyle {
        return this.domSanitizer.bypassSecurityTrustStyle(value);
    }
}
