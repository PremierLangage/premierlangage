import { TrustStylePipe } from './trust-style.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('TrustStylePipe', () => {
    beforeEach(() => {
    TestBed
        .configureTestingModule({
        imports: [
            BrowserModule
        ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TrustStylePipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
});
