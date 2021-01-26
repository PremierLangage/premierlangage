import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompilerService } from '../../shared/services/compiler.service';
import { OpenerService } from '../../shared/services/opener.service';
import { NotificationService } from 'src/app/core/notification.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit, OnDestroy {

    private readonly subscriptions: Subscription[] = [];

    items: any[];
    empty: boolean;

    constructor(
        private readonly compiler: CompilerService,
        private readonly opener: OpenerService,
        private readonly notification: NotificationService,
    ) {
    }

    ngOnInit() {
        this.refresh();
        this.subscriptions.push(this.compiler.compiled.subscribe(this.refresh.bind(this)));
    }

    private refresh() {
        this.empty = true;
        this.items = this.compiler.problems.map(prop => {
            return {
                type: prop.isWarning ? 'warning' : 'error',
                message: `${prop.type} ${prop.message}`,
                path: prop.file,
                lineno: prop.lineno,
            };
        });
        this.empty = this.items.length === 0;
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }


    track(index: number, _item: any) {
        return index;
    }

    async openOnEditor(item: any) {
        try {
            await this.opener.open(item.path, {
                position: {
                    line: item.lineno,
                    column: 0
                }
            });
        } catch {
            this.notification.error(`Failed to open '${item.path}'`);
        }
    }
}
