import { Component, Inject, NgZone} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
  })
export class PromptComponent  {
    constructor(
        public readonly dialog: MatDialogRef<PromptComponent>,
        @Inject(MAT_DIALOG_DATA)
        public readonly data: PrompOptions,
        private readonly ngZone: NgZone,
    ) {
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }

    close(result: any) {
        this.ngZone.run(() => this.dialog.close(result));
    }
}

export interface PrompField {
    type: string;
    value: any;
    placeholder: string;
    required?: boolean;
}

export interface PrompOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
    fields: PrompField[];
}
