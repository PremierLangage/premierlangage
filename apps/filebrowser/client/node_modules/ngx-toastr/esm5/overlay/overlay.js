/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, } from '@angular/core';
import { DomPortalHost } from '../portal/dom-portal-host';
import { OverlayContainer } from './overlay-container';
import { OverlayRef } from './overlay-ref';
import * as i0 from "@angular/core";
import * as i1 from "./overlay-container";
import * as i2 from "@angular/common";
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document;
        // Namespace panes by overlay container
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    Overlay.prototype.getPaneElement = /**
     * @param {?=} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @private
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    function (positionClass, overlayContainer) {
        /** @type {?} */
        var pane = this._document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @private
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @private
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @private
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: OverlayContainer },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Overlay.ngInjectableDef = i0.defineInjectable({ factory: function Overlay_Factory() { return new Overlay(i0.inject(i1.OverlayContainer), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i2.DOCUMENT)); }, token: Overlay, providedIn: "root" });
    return Overlay;
}());
export { Overlay };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._paneElements;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._overlayContainer;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._appRef;
    /**
     * @type {?}
     * @private
     */
    Overlay.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJvdmVybGF5L292ZXJsYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixNQUFNLEVBQ04sVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUFVM0M7SUFRRSxpQkFDVSxpQkFBbUMsRUFDbkMseUJBQW1ELEVBQ25ELE9BQXVCLEVBQ0wsU0FBYztRQUhoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDTCxjQUFTLEdBQVQsU0FBUyxDQUFLOztRQVRsQyxrQkFBYSxHQUdqQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBT1gsQ0FBQztJQUNKOzs7T0FHRzs7Ozs7OztJQUNILHdCQUFNOzs7Ozs7SUFBTixVQUNFLGFBQXNCLEVBQ3RCLGdCQUEwQztRQUUxQyxnQ0FBZ0M7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxnQ0FBYzs7Ozs7SUFBZCxVQUNFLGFBQTBCLEVBQzFCLGdCQUEwQztRQUQxQyw4QkFBQSxFQUFBLGtCQUEwQjtRQUcxQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3BIO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7O0lBQ0ssb0NBQWtCOzs7Ozs7O0lBQTFCLFVBQ0UsYUFBcUIsRUFDckIsZ0JBQTBDOztZQUVwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRWhELElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSyxtQ0FBaUI7Ozs7OztJQUF6QixVQUEwQixJQUFpQjtRQUN6QyxPQUFPLElBQUksYUFBYSxDQUN0QixJQUFJLEVBQ0osSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0ssbUNBQWlCOzs7Ozs7SUFBekIsVUFBMEIsSUFBaUI7UUFDekMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkF0RkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFYekIsZ0JBQWdCO2dCQVB2Qix3QkFBd0I7Z0JBRHhCLGNBQWM7Z0RBK0JYLE1BQU0sU0FBQyxRQUFROzs7a0JBakNwQjtDQTRHQyxBQXZGRCxJQXVGQztTQXRGWSxPQUFPOzs7Ozs7SUFFbEIsZ0NBR2M7Ozs7O0lBR1osb0NBQTJDOzs7OztJQUMzQyw0Q0FBMkQ7Ozs7O0lBQzNELDBCQUErQjs7Ozs7SUFDL0IsNEJBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpb25SZWYsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tUG9ydGFsSG9zdCB9IGZyb20gJy4uL3BvcnRhbC9kb20tcG9ydGFsLWhvc3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuLi90b2FzdHIvdG9hc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcbiAqIHVzZWQgYXMgYSBsb3ctbGV2ZWwgYnVpbGRpbmcgYnVpbGRpbmcgYmxvY2sgZm9yIG90aGVyIGNvbXBvbmVudHMuIERpYWxvZ3MsIHRvb2x0aXBzLCBtZW51cyxcbiAqIHNlbGVjdHMsIGV0Yy4gY2FuIGFsbCBiZSBidWlsdCB1c2luZyBvdmVybGF5cy4gVGhlIHNlcnZpY2Ugc2hvdWxkIHByaW1hcmlseSBiZSB1c2VkIGJ5IGF1dGhvcnNcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxuICpcbiAqIEFuIG92ZXJsYXkgKmlzKiBhIFBvcnRhbEhvc3QsIHNvIGFueSBraW5kIG9mIFBvcnRhbCBjYW4gYmUgbG9hZGVkIGludG8gb25lLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xuICAvLyBOYW1lc3BhY2UgcGFuZXMgYnkgb3ZlcmxheSBjb250YWluZXJcbiAgcHJpdmF0ZSBfcGFuZUVsZW1lbnRzOiBNYXA8XG4gICAgVG9hc3RDb250YWluZXJEaXJlY3RpdmUsXG4gICAgeyBzdHJpbmc/OiBIVE1MRWxlbWVudCB9XG4gID4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcbiAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXG4gICkge31cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb3ZlcmxheS5cbiAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cbiAgICovXG4gIGNyZWF0ZShcbiAgICBwb3NpdGlvbkNsYXNzPzogc3RyaW5nLFxuICAgIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgKTogT3ZlcmxheVJlZiB7XG4gICAgLy8gZ2V0IGV4aXN0aW5nIHBhbmUgaWYgcG9zc2libGVcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlT3ZlcmxheVJlZihcbiAgICAgIHRoaXMuZ2V0UGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lciksXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhbmVFbGVtZW50KFxuICAgIHBvc2l0aW9uQ2xhc3M6IHN0cmluZyA9ICcnLFxuICAgIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKSkge1xuICAgICAgdGhpcy5fcGFuZUVsZW1lbnRzLnNldChvdmVybGF5Q29udGFpbmVyLCB7fSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdKSB7XG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdID0gdGhpcy5fY3JlYXRlUGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lcilbcG9zaXRpb25DbGFzc107XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAqIEByZXR1cm5zIE5ld2x5LWNyZWF0ZWQgcGFuZSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudChcbiAgICBwb3NpdGlvbkNsYXNzOiBzdHJpbmcsXG4gICAgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlLFxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcGFuZSA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcGFuZS5pZCA9ICd0b2FzdC1jb250YWluZXInO1xuICAgIHBhbmUuY2xhc3NMaXN0LmFkZChwb3NpdGlvbkNsYXNzKTtcbiAgICBwYW5lLmNsYXNzTGlzdC5hZGQoJ3RvYXN0LWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKCFvdmVybGF5Q29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGFpbmVyLmdldENvbnRhaW5lckVsZW1lbnQoKS5hcHBlbmRDaGlsZChwYW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQocGFuZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRG9tUG9ydGFsSG9zdCBpbnRvIHdoaWNoIHRoZSBvdmVybGF5IGNvbnRlbnQgY2FuIGJlIGxvYWRlZC5cbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBob3N0LlxuICAgKiBAcmV0dXJucyBBIHBvcnRhbCBob3N0IGZvciB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxIb3N0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsSG9zdCB7XG4gICAgcmV0dXJuIG5ldyBEb21Qb3J0YWxIb3N0KFxuICAgICAgcGFuZSxcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHRoaXMuX2FwcFJlZixcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT3ZlcmxheVJlZiBmb3IgYW4gb3ZlcmxheSBpbiB0aGUgZ2l2ZW4gRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBwYW5lIERPTSBlbGVtZW50IGZvciB0aGUgb3ZlcmxheVxuICAgKi9cbiAgcHJpdmF0ZSBfY3JlYXRlT3ZlcmxheVJlZihwYW5lOiBIVE1MRWxlbWVudCk6IE92ZXJsYXlSZWYge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheVJlZih0aGlzLl9jcmVhdGVQb3J0YWxIb3N0KHBhbmUpKTtcbiAgfVxufVxuIl19