import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml'
})
export class TrustHtmlPipe implements PipeTransform {

    constructor(private readonly domSanitizer: DomSanitizer) {}

    transform(value: string): SafeHtml {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
}
