import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { PrompField, PrompOptions } from 'src/app/shared/components/prompt/prompt.component';
import { Change, Repo } from '../../models/repo.model';
import { ResourceService } from '../../services/resource.service';
import { GitService } from '../../services/git.service';
import { TaskService } from '../../services/task.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit, OnDestroy {

    /** changes options */
    readonly options = [];
    /** value of commit input form */
    commitMessage = '';
    /** selected repository */
    selection: Repo;

    constructor(
        private readonly git: GitService,
        private readonly task: TaskService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService
    ) { }

    ngOnInit() {
        this.options.push({label: 'Open file', enabled: (item: Change) => this.canOpen(item), action: (item: Change) => {
            this.open(item);
        }});
        this.options.push({label: 'Git add', enabled: (item: Change) => this.canAdd(item), action: (item: Change) => {
            this.add(item);
        }});
        this.options.push({label: 'Git checkout', enabled: (item: Change) => this.canCheckout(item), action: (item: Change) => {
            this.checkout(item);
        }});
    }

    ngOnDestroy() {
    }

    private refreshSelection() {
        if (this.selection) {
            this.selection = this.repositories().find(e => e.url === this.selection.url);
        }
    }
    /**
     * changes the selected repository.
     * @param item the new seleted repository.
     */
    changeSelection(item: Repo) {
        this.selection = item;
    }

    /** used inside html template with *ngFor to keep track of the repository item */
    trackRepo(_index: number, item: Repo) {
        return item.url;
    }

    /** used inside html template with *ngFor to keep track of the repository item */
    trackChange(_index: number, item: Change) {
        return item.path;
    }

    /**
     * gets a value indicating whether git add command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canAdd(item: Change) {
        return item.type !== 'A';
    }

    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canCheckout(item: Change) {
        return item.type !== '??';
    }

    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    canOpen(item: Change) {
        return !item.isdir;
    }

    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    open(item: Change) {
        this.task.emitSelectEvent(this.resources.find(item.path));
    }

    /**
     * executes git add command on the given repository item.
     *	@param item the repository item.
     */
    add(item: Repo | Change) {
        this.git.add(item);
    }

    /**
     * executes git push command on the given repository item
     *	@param item the repository item.
     */
    push(item: Repo | Change) {
        this.git.push(item);
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    pull(item: Repo | Change) {
        this.notification.confirmAsync({
            title: 'Please confirm your action',
            message: 'You will lose the unsaved changes after this action !'
        }).then(confirmed => {
            if (confirmed) {
                this.git.pull(item).then(success => {
                    if (success) {
                        this.resources.refresh().then((succees) => {
                            if (success) {
                                this.refreshSelection();
                            }
                        });
                    }
                });
            }
        });
    }

    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    status(repo: Repo | Change) {
        this.git.status(repo);
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    checkout(repo: Repo | Change) {
        const msg = 'This action will reset all your local changes up to your last commit !';
        this.notification.confirmAsync({title: msg}).then(confirmed => {
            if (confirmed) {
                this.git.checkout(repo).then((success) => {
                    if (success) {
                        const resource = this.resources.find(repo.path);
                        if (resource) {
                            resource.dirty = true;
                            this.resources.open(resource).then((opened) => {
                                if (opened) {
                                    this.task.emitSelectEvent(resource);
                                }
                            });
                        }
                        this.selection.changes = this.selection.changes.filter(e => e.path !== resource.path);
                    }
                    this.refreshSelection();
                });
            }
        });
    }

    /**
     * executes git commit command on the selected repository with the
     * value of commit message input form if enter key is pressed.
     *	@param event the keyboard event of the input.
     */
    commit(event: KeyboardEvent) {
        // tslint:disable-next-line: deprecation
        if (event.keyCode === 13) {
            if (this.commitMessage) {
                this.git.commit(this.selection, this.commitMessage).then((success) => {
                    if (success) {
                        this.commitMessage = '';
                        this.selection.changes = this.selection.changes.filter(e => e.type !== 'M');
                    }
                });
            } else {
                this.notification.error('commit message is required');
            }
        }
    }

    /**
     * executes git clone command.
     * - if the command succeed, the resources of the editor will be refreshed.
     */
    clone() {
        const fields: PrompField[] = [
            { type: 'url', placeholder: 'Url', required: true, value: '' },
            { type: 'text', placeholder: 'Username', required: false, value: '' },
            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
        ];
        const options: PrompOptions = {
            title: 'Clone repository',
            fields: fields
        };
        this.notification.warning('Please close the opened editors before submitting the form');
        this.notification.promptAsync(options).then((response => {
            if (response) {
                this.git.clone(this.resources.resources[0], response.fields[0].value,  response.fields[1].value,  response.fields[2].value)
                .then((success => {
                    if (success) {
                        this.resources.refresh();
                        this.refreshSelection();
                    }
                })
            ); }
        }));
    }

    /** gets the repositories */
    repositories() {
        return this.git.repos;
    }

    /** gets a value indicating whether a git command is running */
    runningTask() {
        return this.git.runningTask;
    }

}
