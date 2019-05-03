import { Injector, InjectFlags } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayRef } from '../overlay/overlay-ref';
import { ToastPackage } from './toastr-config';
/**
 * Reference to a toast opened via the Toastr service.
 */
export declare class ToastRef<T> {
    private _overlayRef;
    /** The instance of component opened into the toast. */
    componentInstance: T;
    /** Subject for notifying the user that the toast has finished closing. */
    private _afterClosed;
    /** triggered when toast is activated */
    private _activate;
    /** notifies the toast that it should close before the timeout */
    private _manualClose;
    /** notifies the toast that it should reset the timeouts */
    private _resetTimeout;
    constructor(_overlayRef: OverlayRef);
    manualClose(): void;
    manualClosed(): Observable<any>;
    timeoutReset(): Observable<any>;
    /**
     * Close the toast.
     */
    close(): void;
    /** Gets an observable that is notified when the toast is finished closing. */
    afterClosed(): Observable<any>;
    isInactive(): boolean;
    activate(): void;
    /** Gets an observable that is notified when the toast has started opening. */
    afterActivate(): Observable<any>;
    /** Reset the toast timouts */
    resetTimeout(): void;
}
/** Custom injector type specifically for instantiating components with a toast. */
export declare class ToastInjector implements Injector {
    private _toastPackage;
    private _parentInjector;
    constructor(_toastPackage: ToastPackage, _parentInjector: Injector);
    get<T>(token: any, notFoundValue?: T, flags?: InjectFlags): T | ToastPackage;
}
