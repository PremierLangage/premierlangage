import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent implements OnInit {
    private readonly openedSize = 60;
    size = 0;

    constructor(private notification: NotificationService) {
    }

    ngOnInit() {
        this.notification.onToggleDebuggingArea.subscribe(() => {
            if (this.size < this.openedSize) {
                this.open();
            } else {
                this.close();
            }
        });
        this.notification.onLogAdded.subscribe(() => {
            this.open();
        });
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
