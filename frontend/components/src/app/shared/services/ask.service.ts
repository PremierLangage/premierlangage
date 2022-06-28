import { Injectable, NgZone } from '@angular/core';

import { Subscription } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PromptComponent, PrompOptions } from '../components/prompt/prompt.component';
import { ConfirmComponent, ConfirmOptions } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class AskService {

    constructor(private dialog: MatDialog, private ngZone: NgZone) {
    }

    promptAsync(options: PrompOptions) {
        const ref: MatDialogRef<PromptComponent, PrompOptions> = this.dialog.open(PromptComponent, {
            hasBackdrop: true,
            disableClose : true,
            data: options,
        });
        return new Promise<PrompOptions>(resolve => {
            this.ngZone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
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
            this.ngZone.run(() => {
                let subscription: Subscription;
                subscription = ref.afterClosed().subscribe(value => {
                    subscription.unsubscribe();
                    resolve(value);
                });
            });
        });
    }

}
