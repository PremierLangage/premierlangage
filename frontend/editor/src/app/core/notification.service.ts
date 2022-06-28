import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Subject } from 'rxjs';
import { MatDialogRef, MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { PromptComponent, PrompOptions } from '../shared/components/prompt/prompt.component';
import { ConfirmComponent, ConfirmOptions } from '../shared/components/confirm/confirm.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export abstract class AbstractNotificationService {
    readonly logAdded: Subject<LogItem> = new Subject();
    private _logs: LogItem[] = [];

    get logs(): LogItem[] {
        return this._logs;
    }

    size = 0;

    constructor() { }

    abstract logInfo(message: any): void;
    abstract logWarning(message: any): void;
    abstract logError(message: any): void;

    abstract success(message: string, title?: string): void;
    abstract warning(message: string, title?: string): void;
    abstract error(message: string, title?: string): void;

    abstract promptAsync(options: PrompOptions): Promise<PrompOptions>;
    abstract confirmAsync(options: ConfirmOptions): Promise<boolean>;

    clear() {
        this.size = 0;
        this._logs = [];
    }

  }
@Injectable({
  providedIn: 'root'
})
export class NotificationService extends AbstractNotificationService {

    constructor(
        private readonly zone: NgZone,
        private readonly dialog: MatDialog,
        private readonly toastr: ToastrService,
        private readonly snackbar: MatSnackBar,
    ) {
        super();
    }

    snack(message: string, config?: MatSnackBarConfig) {
        this.zone.run(() => {
            this.snackbar.open(message, '', config);
        });
    }

    success(message: string, title: string= '') {
        this.zone.run(() => {
            this.toastr.success(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }

    warning(message: string, title: string= '') {
        this.zone.run(() => {
            this.toastr.warning(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }

    error(message: string, title: string= '') {
        this.zone.run(() => {
            this.toastr.error(this.parseMessage(message, false), title, {
                enableHtml: true,
                onActivateTick: true,
            });
        });
    }

    promptAsync(options: PrompOptions) {
        const ref: MatDialogRef<PromptComponent, PrompOptions> = this.dialog.open(PromptComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
        });
        return new Promise<PrompOptions>(resolve => {
            this.zone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }

    confirmAsync(options: ConfirmOptions) {
        const ref: MatDialogRef<ConfirmComponent, any> = this.dialog.open(ConfirmComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise<any>((resolve) => {
            this.zone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }


    logInfo(message: any, stackTrace: boolean = false) {
        this.log(message, 'info', stackTrace);
    }

    logWarning(message: any, stackTrace: boolean = false) {
        this.log(message, 'warning', stackTrace);
    }

    logError(message: any, stackTrace: boolean = false) {
        this.log(message, 'error', stackTrace);
    }

    private log(message: any, type: 'info' | 'error' | 'warning', stackTrace: boolean = false) {
        const item = { message: this.parseMessage(message, stackTrace), type: type };
        this.logs.push(item);
        this.logAdded.next(item);
        this.size++;
    }

    private parseMessage(message: any, stackTrace: boolean): string {
        let output = message;
        if (message instanceof HttpErrorResponse) {
            const error = message as HttpErrorResponse;
            output = error.error || error.message;
        } else {
            if (typeof message !== 'string') {
                output = message.error; // JavaScript Error Object
                if (!output) {
                    if (message.stack) {
                        const trace = stackTrace ? message.stack.split('\n').join('<br/>') : '';
                        output = message.message + trace;
                    } else {
                        output = JSON.stringify(message);
                    }
                } else {
                    output = JSON.stringify(message);
                }
            }
        }

        return output;
    }

}


export interface LogItem {
    message: string;
    type: 'error' | 'info' | 'warning';
}
