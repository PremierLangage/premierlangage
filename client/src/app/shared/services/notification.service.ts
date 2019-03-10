import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, Subject } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PromptComponent, PrompOptions } from '../components/prompt/prompt.component';
import { ConfirmComponent, ConfirmOptions } from '../components/confirm/confirm.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export abstract class AbstractNotificationService {
    readonly onLogAdded: Subject<LogItem> = new Subject();
    readonly onToggleDebuggingArea: Subject<any> = new Subject();

    size = 0;

    constructor() { }

    abstract logInfo(message: any);
    abstract logWarning(message: any);
    abstract logError(message: any);

    abstract success(message: string, title?: string): void;
    abstract warning(message: string, title?: string): void;
    abstract error(message: string, title?: string): void;

    abstract prompt(options: PrompOptions, completion: (value: boolean | PrompOptions) => void): void;
    abstract promptAsync(options: PrompOptions): Promise<PrompOptions>;
    abstract confirm(options: ConfirmOptions, confirm: () => void, cancel?: () => void): void;
    abstract confirmAsync(options: ConfirmOptions): Promise<boolean>;

    clear() {
        this.size = 0;
    }

  }
@Injectable({
  providedIn: 'root'
})
export class NotificationService extends AbstractNotificationService {

    constructor(private toastr: ToastrService, private dialog: MatDialog) {
        super();
    }

    success(message: string, title: string= '') {
        this.toastr.success(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    }

    warning(message: string, title: string= '') {
        this.toastr.warning(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    }

    error(message: string, title: string= '') {
        this.toastr.error(this.parseMessage(message, false), title, {
            enableHtml: true,
            onActivateTick: true,
        });
    }

    prompt(options: PrompOptions, completion: (value: boolean | PrompOptions) => void) {
        this.promptAsync(options).then((data) => {
            completion(data);
        });
    }

    promptAsync(options: PrompOptions) {
        const ref: MatDialogRef<PromptComponent, PrompOptions> = this.dialog.open(PromptComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
        });
        return new Promise<PrompOptions>(resolve => {
            let subscription: Subscription;
            subscription = ref.afterClosed().subscribe(value => {
                subscription.unsubscribe();
                resolve(value);
            });
        });
    }

    confirm(options: ConfirmOptions, confirm: () => void, cancel?: () => void) {
        this.confirmAsync(options).then((success) => {
            if (success && confirm) {
                confirm();
            } else if (!success && cancel) {
                cancel();
            }
        });
    }


    confirmAsync(options: ConfirmOptions) {
        const ref: MatDialogRef<ConfirmComponent, boolean> = this.dialog.open(ConfirmComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
            autoFocus: false,
            minWidth: '400px',
            minHeight: '100px'
        });
        return new Promise<boolean>((resolve) => {
            let subscription: Subscription;
            subscription = ref.afterClosed().subscribe(value => {
                subscription.unsubscribe();
                resolve(value);
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
        this.onLogAdded.next(item);
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
