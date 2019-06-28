import { TrustHtmlPipe } from './trust-html.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('TrustHtmlPipe', () => {
    beforeEach(() => {
    TestBed
        .configureTestingModule({
        imports: [
            BrowserModule
        ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TrustHtmlPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
});
