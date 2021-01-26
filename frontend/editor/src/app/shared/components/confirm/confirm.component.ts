import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
    constructor(
        readonly dialog: MatDialogRef<ConfirmComponent>,
        @Inject(MAT_DIALOG_DATA)
        readonly data: ConfirmOptions,
        private readonly changes: ChangeDetectorRef
    ) {
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }

    ngOnInit(): void {
        this.changes.detectChanges();
    }
}

export interface ConfirmOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
    buttons?: {
        id: string;
        title: string,
        role: 'ok' | 'cancel' | 'custom'
    }[];
}
