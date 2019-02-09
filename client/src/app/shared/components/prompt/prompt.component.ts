import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
  })
export class PromptComponent {
    constructor(public dialog: MatDialogRef<PromptComponent>, @Inject(MAT_DIALOG_DATA) public data: PrompOptions) {     
        data.okTitle = data.okTitle || 'OK';
        data.noTitle = data.noTitle || 'CANCEL';
    }
}
export interface PrompField {
    type: string;
    placeholder: string;
    required: boolean;
    value: any;
}

export interface PrompOptions {
    title?: string;
    message?: string;
    okTitle?: string;
    noTitle?: string;
    fields: PrompField[]
}