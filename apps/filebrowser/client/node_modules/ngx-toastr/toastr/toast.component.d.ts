import { NgZone, OnDestroy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IndividualConfig, ToastPackage } from './toastr-config';
import { ToastrService } from './toastr.service';
export declare class Toast implements OnDestroy {
    protected toastrService: ToastrService;
    toastPackage: ToastPackage;
    protected ngZone?: NgZone;
    message?: string | SafeHtml | null;
    title?: string;
    options: IndividualConfig;
    originalTimeout: number;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    state: {
        value: string;
        params: {
            easeTime: string | number;
            easing: string;
        };
    };
    private timeout;
    private intervalId;
    private hideTime;
    private sub;
    private sub1;
    private sub2;
    constructor(toastrService: ToastrService, toastPackage: ToastPackage, ngZone?: NgZone);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    resetTimeout(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
    outsideTimeout(func: Function, timeout: number): void;
    outsideInterval(func: Function, timeout: number): void;
    private runInsideAngular;
}
