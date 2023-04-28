import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { IEditorGroup } from '../shared/models/editor-groups.model';
import { EditorService } from '../shared/services/editor.service';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation/navigation.service';
import { ResourceService } from '../shared/services/resource.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'editor-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    groups: IEditorGroup[] = [];
    hasGroup: boolean;
    showSettings: boolean;

    hovered: boolean;

    constructor(
        private readonly editor: EditorService,
        private readonly changes: ChangeDetectorRef,
        private readonly resources: ResourceService,
        private readonly navigation: NavigationService,
    ) {}

    ngOnInit() {
        this.hasGroup = false;

        this.subscriptions.push(this.editor.editorGroups.subscribe(groups => {
            this.groups = groups;
            this.hasGroup = groups.length > 0;
            this.changes.detectChanges();
        }));

        this.subscriptions.push(this.resources.renamed.subscribe(data => {
            const resource = this.resources.find(data.after);
            if (resource) {
                this.editor
                    .findGroupsContaining(resource)
                    .forEach(group => group.open(resource));
            }
        }));

        this.subscriptions.push(this.resources.deleted.subscribe(resource => {
            this.editor
                .findGroupsContaining(resource)
                .forEach(group => group.close(resource));
        }));

        this.subscriptions.push(this.navigation.settings.subscribe(() => {
            this.showSettings = !this.showSettings;
        }));

    }

    ngOnDestroy() {
        this.subscriptions.forEach(item => item.unsubscribe());
    }

}
