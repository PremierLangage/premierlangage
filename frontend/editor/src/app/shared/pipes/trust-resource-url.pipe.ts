import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'trustResourceUrl'
})
export class TrustResourceUrlPipe implements PipeTransform {

    constructor(private readonly domSanitizer: DomSanitizer) {}

    transform(value: string): SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
}
