import { TrustResourceUrlPipe } from './trust-resource-url.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('TrustResourceUrlPipe', () => {
    beforeEach(() => {
    TestBed
        .configureTestingModule({
        imports: [
            BrowserModule
        ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TrustResourceUrlPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
});
