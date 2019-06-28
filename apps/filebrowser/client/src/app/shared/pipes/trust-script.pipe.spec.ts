import { TrustScriptPipe } from './trust-script.pipe';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

describe('TrustScriptPipe', () => {
    beforeEach(() => {
    TestBed
        .configureTestingModule({
        imports: [
            BrowserModule
        ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new TrustScriptPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
});
