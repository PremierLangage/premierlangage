import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoggingService, LogItem } from '../../services/logging.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
    private readonly openedSize = 60;
    @ViewChild('container')
    container: ElementRef;

    size = 0;
    items: LogItem[] = [];
    empty: boolean;

    constructor(private logging: LoggingService) {
    }

    ngOnInit() {
        this.empty = true;
        this.logging.addEvent.subscribe(message => {
            this.empty = false;
            this.items.push(message);
            this.open();
            this.scrollBottom();
        });
        this.logging.openEvent.subscribe(() => {
            if (this.size < this.openedSize) {
                this.open();
            } else {
                this.close();
            }
        });
    }

    didTapClear(event: MouseEvent) {
        event.stopPropagation();
        this.items = [];
        this.empty = true;
        this.logging.clear();
    }

    didTapOpen(event: MouseEvent) {
        event.stopPropagation();
        this.open();
    }

    didTapClose(event: MouseEvent) {
        event.stopPropagation();
        this.size = 5;
    }

    track(index: number, _item: LogItem) {
        return index;
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

    private scrollBottom() {
        if (this.container) {
            this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
        }
    }
}
