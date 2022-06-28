import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class AlertService {

    constructor(
        private readonly zone: NgZone,
        private readonly snackbar: MatSnackBar,
    ) { }

    snack(message: string, config?: MatSnackBarConfig) {
        this.zone.run(() => {
            this.snackbar.open(message, '', config || {
                duration: 3000
            });
        });
    }
}
