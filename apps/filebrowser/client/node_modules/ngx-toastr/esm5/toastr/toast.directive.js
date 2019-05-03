/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, NgModule, } from '@angular/core';
var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = /**
     * @return {?}
     */
    function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] }
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return ToastContainerDirective;
}());
export { ToastContainerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastContainerDirective.prototype.el;
}
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ToastContainerDirective],
                    exports: [ToastContainerDirective],
                },] }
    ];
    return ToastContainerModule;
}());
export { ToastContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvYXN0ci8iLCJzb3VyY2VzIjpbInRvYXN0ci90b2FzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUtFLGlDQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7Ozs7SUFDdkMscURBQW1COzs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQy9CLENBQUM7O2dCQVJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFQQyxVQUFVOztJQWFaLDhCQUFDO0NBQUEsQUFURCxJQVNDO1NBTFksdUJBQXVCOzs7Ozs7SUFDdEIscUNBQXNCOztBQU1wQztJQUFBO0lBSW1DLENBQUM7O2dCQUpuQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQzs7SUFDa0MsMkJBQUM7Q0FBQSxBQUpwQyxJQUlvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvYXN0Q29udGFpbmVyXScsXG4gIGV4cG9ydEFzOiAndG9hc3RDb250YWluZXInLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJNb2R1bGUge31cbiJdfQ==