import { TrustUrlPipe } from './trust-url.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('TrustUrlPipe', () => {
    beforeEach(() => {
    TestBed
        .configureTestingModule({
        imports: [
            BrowserModule
        ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TrustUrlPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
});
