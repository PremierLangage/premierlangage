import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';


import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { OpenerService } from '../shared/services/core/opener.service';
import { IEditorGroup } from '../shared/models/editor-group.model';
import { EditorService } from '../shared/services/core/editor.service';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    groups: IEditorGroup[] = [];
    hasGroup: boolean;
    showSettings: boolean;

    constructor(
        private readonly editor: EditorService,
        private readonly opener: OpenerService,
        private readonly changes: ChangeDetectorRef,
        private readonly navigation: NavigationService,
    ) {}

    ngOnInit() {
        this.hasGroup = false;
        this.groups = this.editor.listGroups();

        this.subscriptions.push(this.editor.changed.subscribe((groups) => {
            this.groups = groups;
            this.hasGroup = groups.length > 0;
            this.changes.detectChanges();
        }));

        this.subscriptions.push(this.navigation.settings.subscribe(() => {
            this.showSettings = !this.showSettings;
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
