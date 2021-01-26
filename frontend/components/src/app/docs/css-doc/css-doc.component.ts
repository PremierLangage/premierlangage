import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClipboardService } from 'src/app/shared/services/clipboard.service';
import { PlaygroundTab } from '../playground/playground.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'css-doc',
    templateUrl: './css-doc.component.html',
    styleUrls: ['./css-doc.component.scss']
})
export class CssDocComponent implements OnInit {

    usages: PlaygroundTab[] = [
        { label: 'Css API', path: 'playground/css-api.pl' },
    ];

    readonly appearances = [
        'success-state', 'warning-state', 'error-state',
        'success-border', 'warning-border', 'error-border',
    ];

    readonly animations = [
        'bounce', 'flash', 'pulse', 'rubberBand', 'shake',
        'headShake', 'swing', 'tada', 'wobble', 'jello',
        'jackInTheBox', 'heartBeat', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight',
        'bounceInUp', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
        'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight',
        'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig',
        'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
        'flipInX', 'flipInY', 'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut', 'rotateIn',
        'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft',
        'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'rollIn', 'rollOut',
        'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut',
        'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideInDown', 'slideInLeft',
        'slideInRight', 'slideInUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp',
    ];


    activeAnimation = 'pulse';

    constructor(
        private readonly alert: AlertService,
        private readonly clipboard: ClipboardService
    ) {}

    ngOnInit(): void {
    }

    animate(animation: string) {
        this.activeAnimation = animation;
    }

    copyCss(appearance: string) {
        this.clipboard.copy(`${appearance} animated ${this.activeAnimation} infinite`);
        this.alert.snack('Copied');
    }

    trackBy(index: number, _: any) {
        return index;
    }
}
