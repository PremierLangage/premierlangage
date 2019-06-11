import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Directives that allows to reload scripts tags of a dom element.
 */
// tslint:disable-next-line: directive-selector
@Directive({ selector: '[runScripts]', exportAs: 'runScripts' })
export class RunScriptsDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        setTimeout(() => { // wait for DOM rendering
            this.runScripts();
        });
    }
    /**
     * Reloads the scripts elements of the dom element.
     */
    runScripts(): void {
        const scripts = <HTMLScriptElement[]>this.elementRef.nativeElement.getElementsByTagName('script');
        const scriptsInitialLength = scripts.length;
        for (let i = 0; i < scriptsInitialLength; i++) {
            const script = scripts[i];
            const scriptCopy = <HTMLScriptElement>document.createElement('script');
            scriptCopy.type = script.type ? script.type : 'text/javascript';
            if (script.innerHTML) {
                scriptCopy.innerHTML = `${script.innerHTML}`;
            } else if (script.src) {
                scriptCopy.src = script.src;
            }
            scriptCopy.async = false;
            script.parentNode.replaceChild(scriptCopy, script);
        }
    }

}
