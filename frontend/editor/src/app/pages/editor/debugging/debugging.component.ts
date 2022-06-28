import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/core/notification.service';
import { Subscription } from 'rxjs';
import { CompilerService } from '../shared/services/compiler.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'editor-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.scss']
})
export class DebuggingComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly openedSize = 60;

    size = 5;
    index = 0;

    get notifs(): number {
        return this.notification.size;
    }

    get problems(): number {
        return this.compiler.problemsCount;
    }

    constructor(
        private readonly compiler: CompilerService,
        private readonly notification: NotificationService,
    ) {
    }

    ngOnInit() {
        this.subscriptions.push(this.notification.logAdded.subscribe(this.onFocus.bind(this, 1)));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

    onClose(event: MouseEvent) {
        event.stopPropagation();
        this.size = 5;
    }

    onFocus(index: number) {
        this.index = index;
        this.open();
    }

    onClearNotifs() {
        this.notification.clear();
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
       this.size = 5;
    }

}
