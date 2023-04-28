import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { AbstractComponent, Property } from '../../shared/models/abstract-component.model';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'countdown-component',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountDownComponent extends AbstractComponent implements OnInit, OnDestroy {
    private interval: any;
    readonly properties: Property[] = [
        { name: 'time', default: 0 },
        { name: 'disabled', default: false },
        { name: 'hidden', default: false },
        { name: 'actions', default: [] },
    ];

    private _time = 0;

    get time() {
        return this._time;
    }

    @Input()
    set time(val: number) {
        this._time = val;
    }

    @Input()
    disabled = false;

    @Input()
    hidden = false;

    @Input()
    actions = [];

    constructor(changes: ChangeDetectorRef) {
        super(changes);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    onRender() {
        if (!this.interval) {
            this.interval = setInterval(() => {
                if (!this.disabled && this.time > 0) {
                    this.time--;
                    if (this.actions) {
                        this.actions.forEach(action => {
                            if (this.time <= action.time && !action.consumed) {
                                action.consumed = true;
                                new Function(action.action)();
                                this.refresh();
                            }
                        });
                    }
                    this.detectChanges();
                }
            }, 1000);
        }
    }

}

export class CountDownComponentDefinition implements ComponentDefinition {
    component = CountDownComponent;
    name = 'Countdown';
    icon = 'countdown.svg';
    selector = 'c-countdown';
    description = `Countdown provides a way to trigger an action after a specified delay`;
    link = '/components/countdown';
    usages = [{ label: 'Example', path: 'playground/countdown.pl' }];
    properties = [
        { name: 'time', default: '', type: 'string', description: 'The remaining time'  },
        { name: 'hidden', default: '', type: 'string', description: 'A value indicating whether the component is hidden'  },
        { name: 'disabled', default: false , type: 'boolean', description: 'A value indicating whether the component is disabled' },
        // tslint:disable-next-line: max-line-length
        { name: 'actions', default: [], type: 'CountDownAction[]', description: 'A value indicating whether the component is a drop zone'  },
    ];
}
