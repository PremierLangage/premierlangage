import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LogItem, NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
    @ViewChild('container')
    container: ElementRef;
    items: LogItem[] = [];
    empty: boolean;

    constructor(private notification: NotificationService) {
    }

    ngOnInit() {
        this.empty = true;
        this.notification.onLogAdded.subscribe(message => {
            this.empty = false;
            this.items.push(message);
            this.scrollBottom();
        });
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
