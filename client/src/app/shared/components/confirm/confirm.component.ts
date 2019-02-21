import { Component, Inject, ChangeDetectorRef } from '@angular/core';
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
        public readonly data: ConfirmOptions, changes: ChangeDetectorRef
    ) {
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
        setTimeout(function() {
            changes.detectChanges();
        }, 1);
    }
}

export interface ConfirmOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
}
