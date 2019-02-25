import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PromptComponent, PrompOptions } from '../components/prompt/prompt.component';
import { ConfirmComponent, ConfirmOptions } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(private toastr: ToastrService, private dialog: MatDialog) { }

    success(message: string, title: string= '') {
        this.toastr.success(message, title, {
            enableHtml: true,
            onActivateTick: true,
        });
    }

    warning(message: string, title: string= '') {
        this.toastr.warning(message, title, {
            enableHtml: true,
            onActivateTick: true,
        });
    }

    error(message: string, title: string= '') {
        this.toastr.error(message, title, {
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
}
