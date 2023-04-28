import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'trustUrl'
})
export class TrustUrlPipe implements PipeTransform {

    constructor(private readonly domSanitizer: DomSanitizer) {}

    transform(value: string): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustUrl(value);
    }

}
