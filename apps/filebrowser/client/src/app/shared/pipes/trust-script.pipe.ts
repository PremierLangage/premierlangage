import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeScript } from '@angular/platform-browser';

@Pipe({
  name: 'trustScript'
})
export class TrustScriptPipe implements PipeTransform {

    constructor(private readonly domSanitizer: DomSanitizer) {}

    transform(value: string): SafeScript {
        return this.domSanitizer.bypassSecurityTrustScript(value);
    }

}
