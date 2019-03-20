import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent implements OnInit, OnDestroy {
    private readonly openedSize = 60;
    private readonly subscriptions: Subscription[] = [];

    size = 0;

    constructor(private notification: NotificationService, private navigation: NavigationService) {
    }

    ngOnInit() {
        this.subscriptions.push(this.navigation.debugging.subscribe(() => {
            if (this.size < this.openedSize) {
                this.open();
            } else {
                this.close();
            }
        }));

        this.subscriptions.push(this.notification.logAdded.subscribe(() => this.open()));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    didTapOpen(event: MouseEvent) {
        event.stopPropagation();
        this.open();
    }

    didTapClose(event: MouseEvent) {
        event.stopPropagation();
        this.size = 5;
    }

    dragEnd(data: {gutterNum: number, sizes: Array<number>}) {
        this.size = data.sizes[1];
        if (this.size < 5) {
            this.size = 5;
        }
    }

    private open() {
        if (this.size < this.openedSize) {
            this.size = this.openedSize;
        }
    }

    private close() {
        this.size = 0;
    }

}
