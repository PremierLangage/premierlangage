import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { LogItem, NotificationService } from 'src/app/shared/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    @ViewChild('container')
    container: ElementRef;
    items: LogItem[] = [];
    empty: boolean;

    constructor(private notification: NotificationService) {
    }

    ngOnInit() {
        this.empty = true;
        this.subscriptions.push(this.notification.logAdded.subscribe(message => {
            this.empty = false;
            this.items.push(message);
            this.scrollBottom();
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    didTapClear(event: MouseEvent) {
        event.stopPropagation();
        this.items = [];
        this.empty = true;
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
