import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { LogItem, NotificationService } from 'src/app/core/notification.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.scss']
})
export class LoggingComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    @ViewChild('container', { static: true })
    container: ElementRef;

    get empty(): boolean {
        return this.notification.size === 0;
    }

    get items(): LogItem[] {
        return this.notification.logs;
    }

    constructor(private notification: NotificationService) {
    }

    ngOnInit() {
        this.subscriptions.push(this.notification.logAdded.subscribe(_ => {
            this.scrollBottom();
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    clear(event: MouseEvent) {
        event.stopPropagation();
        this.notification.clear();
    }

    track(index: number, _item: LogItem) {
        return index;
    }

    private scrollBottom() {
        if (this.container) {
            this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
        }
    }
}
