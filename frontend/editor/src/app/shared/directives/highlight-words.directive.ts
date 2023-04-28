import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlightWords]'
})
export class HighlightWordsDirective implements OnChanges {

    @Input() text: string;
    @Input() regex: string | RegExp;
    @Input() words: string | string[];
    @Input() highlightClass: string;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(_: SimpleChanges): void {
        if (this.regex) {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.searchRegex());
        } else if (this.words) {
            let words: string[] = [];
            if (typeof(this.words) === 'string') {
                words = this.words ? [this.words] : [];
            } else {
                words = this.words;
            }

            if (!this.words || !this.words.length || !this.highlightClass) {
                this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
                return;
            }
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.searchWords(words));
        } else {
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
        }
    }

    private searchRegex() {
        let regex: RegExp;
        if (typeof(this.regex) === 'string') {
            try {
                regex = new RegExp(this.regex, 'gi');
            } catch (error) {
                console.log(error);
                return this.text;
            }
        } else {
            regex = this.regex;
        }

        const words = this.text.match(regex);
        if (words) {
            return this.searchWords(words);
        }

        return this.text;
    }

    private searchWords(words: string[]) {
        try {
            const re = new RegExp(`(${ words.join('|') })`, 'gi');
            return this.escape(this.text).replace(re, `<span class="${this.highlightClass}">$1</span>`);
        } catch {
            return this.text;
        }
    }

    private escape(str: string) {
        const tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };

        const replaceTag = (tag: string) => {
            return tagsToReplace[tag] || tag;
        };
        return str.replace(/[&<>]/g, replaceTag);
    }

}
