import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Injectable, HostListener } from '@angular/core';


import { Resource } from '../shared/models/resource.model';

import { ConfirmOptions } from 'src/app/shared/components/confirm/confirm.component';
import { GitService } from '../shared/services/core/git.service';
import { TaskService } from '../shared/services/core/task.service';
import { ResourceService } from '../shared/services/core/resource.service';
import { NotificationService } from '../../shared/services/notification.service';
import { OpenerService } from '../shared/services/core/opener.service';
import { IEditorGroup } from '../shared/models/editor-group.model';
import { EditorService } from '../shared/services/core/editor.service';
import { asURI } from 'src/app/shared/models/paths.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
    groups: IEditorGroup[] = [];
    hasGroup: boolean;

    readonly displayedColumns: string[] = ['command', 'action'];

    readonly shorcuts = [
        {command: 'F2', action: 'Quick open a file'},
        {command: 'F1', action: 'Show all commands'},
        {command: 'Ctrl|⌘ + Space', action: 'Trigger suggestion'},
        {command: 'Ctrl|⌘ Right Arrow', action: 'Split editor'},
        {command: 'Ctrl|⌘ + Enter', action: 'Open preview'},
        {command: 'Ctrl|⌘ + Alt + Enter', action: 'Hide preview'},
        {command: 'Ctrl|⌘ + S', action: 'Save focused file'},
        {command: 'Ctrl|⌘ + Alt + S', action: 'Save all files'},
        {command: 'Ctrl|⌘ + K', action: 'Close focused file'},
        {command: 'Ctrl|⌘ + Alt + K', action: 'Close all files'},
    ];

    constructor(
        readonly editor: EditorService,
        readonly opener: OpenerService,
        readonly changes: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.hasGroup = false;
        this.groups = this.editor.listGroups();
        this.editor.onGroupChanged.subscribe((groups) => {
            this.groups = groups;
            this.hasGroup = groups.length > 0;
            this.changes.detectChanges();
        });
    }

    monacoLoaded() {
    }
}
