import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { Subscription, fromEvent } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { take, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MenuService {

    private subscription: Subscription;
    private overlayRef: OverlayRef;

    constructor(
        private readonly overlay: Overlay,
    ) {}

    open(options: MenuOptions) {
        const { event, templateRef: template, containerRef: container, data } = options;

        event.preventDefault();
        event.stopPropagation();

        this.close();

        const { x, y } = event;
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo({ x, y })
            .withPositions([
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top',
                }
            ]);

        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });

        this.overlayRef.attach(new TemplatePortal(template, container, {
            $implicit: data || {}
        }));

        setTimeout(() => {
            this.subscription = fromEvent<MouseEvent>(document, 'click')
            .pipe(
                filter(e => {
                    const clickTarget = e.target as HTMLElement;
                    return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
                }),
                take(1)
            ).subscribe(this.close.bind(this));
        }, 500);
    }

    private close() {
        // tslint:disable-next-line: no-unused-expression
        this.subscription && this.subscription.unsubscribe();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }

}

export interface MenuOptions {
    data?: any;
    event: MouseEvent;
    templateRef: TemplateRef<any>;
    containerRef: ViewContainerRef;
}
