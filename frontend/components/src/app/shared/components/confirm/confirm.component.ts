import { Component, Inject, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
    constructor(
        public readonly dialog: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA)
        public readonly data: ConfirmOptions, changes: ChangeDetectorRef,
        private readonly ngZone: NgZone,
    ) {
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }

    close(result: any) {
        this.ngZone.run(() => this.dialog.close(result));
    }
}

export interface ConfirmOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
}
