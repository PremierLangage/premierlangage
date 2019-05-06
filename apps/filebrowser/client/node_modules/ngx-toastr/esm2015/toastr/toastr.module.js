/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Toast } from './toast.component';
import { DefaultNoComponentGlobalConfig, TOAST_CONFIG, } from './toastr-config';
/** @type {?} */
export const DefaultGlobalConfig = Object.assign({}, DefaultNoComponentGlobalConfig, { toastComponent: Toast });
export class ToastrModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [Toast],
                exports: [Toast],
                entryComponents: [Toast],
            },] }
];
export class ToastrComponentlessModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoComponentGlobalConfig,
                        config,
                    },
                },
            ],
        };
    }
}
ToastrComponentlessModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJ0b2FzdHIvdG9hc3RyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsOEJBQThCLEVBRTlCLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDOztBQUV6QixNQUFNLE9BQU8sbUJBQW1CLHFCQUMzQiw4QkFBOEIsSUFDakMsY0FBYyxFQUFFLEtBQUssR0FDdEI7QUFRRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFnQyxFQUFFO1FBQy9DLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFFBQVEsRUFBRTt3QkFDUixPQUFPLEVBQUUsbUJBQW1CO3dCQUM1QixNQUFNO3FCQUNQO2lCQUNGO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNoQixlQUFlLEVBQUUsQ0FBQyxLQUFLLENBQUM7YUFDekI7O0FBcUJELE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBZ0MsRUFBRTtRQUMvQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixRQUFRLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsTUFBTTtxQkFDUDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWpCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvYXN0IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgRGVmYXVsdE5vQ29tcG9uZW50R2xvYmFsQ29uZmlnLFxuICBHbG9iYWxDb25maWcsXG4gIFRPQVNUX0NPTkZJRyxcbn0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRHbG9iYWxDb25maWc6IEdsb2JhbENvbmZpZyA9IHtcbiAgLi4uRGVmYXVsdE5vQ29tcG9uZW50R2xvYmFsQ29uZmlnLFxuICB0b2FzdENvbXBvbmVudDogVG9hc3QsXG59O1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3RdLFxuICBleHBvcnRzOiBbVG9hc3RdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtUb2FzdF0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0ck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9BU1RfQ09ORklHLFxuICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBEZWZhdWx0R2xvYmFsQ29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0ckNvbXBvbmVudGxlc3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IFBhcnRpYWw8R2xvYmFsQ29uZmlnPiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdHJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRPQVNUX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogRGVmYXVsdE5vQ29tcG9uZW50R2xvYmFsQ29uZmlnLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==