import { Component, OnInit, OnDestroy } from '@angular/core';

import { PrompField, PrompOptions } from 'src/app/shared/components/prompt/prompt.component';

import { Change, Repo } from '../../shared/models/resource.model';

import { GitService } from '../../shared/services/core/git.service';
import { ResourceService } from '../../shared/services/core/resource.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { OpenerService } from '../../shared/services/core/opener.service';
import { asURI, asURIFragment } from '../../shared/models/filters.model';
import { EditorService } from '../../shared/services/core/editor.service';
import { DIFF_FRAGMENT } from '../../shared/models/editor.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit, OnDestroy {

    /** changes options */
    readonly options: ChangeOption[] = [];
    /** value of commit input form */
    commitMessage = '';
    /** selected repository */
    selection: Repo;

    constructor(
        private readonly git: GitService,
        private readonly opener: OpenerService,
        private readonly editor: EditorService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService
    ) { }

    ngOnInit() {
        this.options.push({label: 'Open File', enabled: (item: Change) => this.canOpen(item), action: (item: Change) => {
            this.open(item);
        }});
        this.options.push({label: 'Git Add', enabled: (item: Change) => this.canAdd(item), action: (item: Change) => {
            this.add(item);
        }});
        this.options.push({label: 'Git Checkout', enabled: (item: Change) => this.canCheckout(item), action: (item: Change) => {
            this.checkout(item);
        }});
    }

    ngOnDestroy() {
    }


    /** used inside the html template to checks if a repo is selected */
    isSelection(item: Repo) {
        return this.selection && this.selection.url === item.url;
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
        return item.type.includes('M') || !item.type.includes('D');
    }

    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canCheckout(item: Change) {
        return item.type !== '??' && item.type !== 'D';
    }

    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    canOpen(item: Change) {
        return !item.isdir && !item.type.includes('D');
    }

    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    open(item: Change) {
        if (this.canOpen(item)) {
            this.opener.openURI(asURIFragment(this.resources.find(item.path), DIFF_FRAGMENT));
        }
    }

    /**
     * executes git add command on the given repository item.
     *	@param item the repository item.
     */
    async add(item: Repo | Change) {
        if (await this.git.add(item)) {
            this.refresh();
            return true;
        }
        return false;
    }

    /**
     * executes git push command on the given repository item
     *	@param item the repository item.
     */
    async push(item: Repo | Change) {
        return this.git.push(item);
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    async pull(item: Repo | Change) {
        const confirmed = await this.notification.confirmAsync({
            title: 'Please confirm your action',
            message: 'This action will pull the latest changes from the remote server and close the opened editors!',
            okTitle: 'Pull',
            noTitle: 'Cancel'
        });

        try {
            if (confirmed) {
                const success = await this.git.pull(item);
                if (success) {
                    if (await this.editor.closeAll()) {
                        const refreshed = await this.resources.refresh();
                        if (refreshed) {
                            this.refresh();
                            return true;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
            return false;
        } catch (error) {
            this.notification.logError(error);
            return false;
        }
    }

    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    async status(item: Repo | Change) {
        return this.git.status(item);
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    async checkout(item: Repo | Change) {
        const confirmed = await this.notification.confirmAsync({
            title: 'Please confirm your action',
            message: 'This action will reset all your local changes up to your last commit and close the opened editors!',
            okTitle: 'Checkout',
            noTitle: 'Cancel'
        });
        try {
            if (confirmed) {
                const success = await this.git.checkout(item);
                if (success) {
                    if (await this.editor.closeAll()) {
                        const refreshed = await this.resources.refresh();
                        if (refreshed) {
                            const resource = await this.resources.find(item.path);
                            if (resource) {
                                this.opener.openURI(asURI(resource));
                            }
                            this.refresh();
                            return true;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
        } catch (error) {
            this.notification.logError(error);
            return false;
        }
    }

    /**
     * executes git clone command.
     * - if the command succeed, the resources of the editor will be refreshed.
     */
    async clone() {
        const fields: PrompField[] = [
            { type: 'url', placeholder: 'Url', required: true, value: '' },
            { type: 'text', placeholder: 'Username', required: false, value: '' },
            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
        ];
        const options: PrompOptions = {
            title: 'Clone repository',
            fields: fields
        };
        const response = await this.notification.promptAsync(options);
        try {
            if (response) {
                if (this.resources.changed()) {
                    const confirmOptions = {
                        title: 'Please confirm your action',
                        message: 'This action will create new directory and close the opened editors!',
                        okTitle: 'Clone',
                        noTitle: 'Cancel'
                    };
                    if (!await this.notification.confirmAsync(confirmOptions)) {
                        return false;
                    }
                }
                const url = response.fields[0].value;
                const username = response.fields[1].value;
                const password = response.fields[2].value;
                const success = await this.git.clone(this.resources.resources[0], url,  username, password);
                if (success) {
                    if (await this.editor.closeAll() && await this.resources.refresh()) {
                        this.refresh();
                        return true;
                    }
                    return false;
                }
                return false;
            }
        } catch (error) {
            this.notification.logError(error);
            return false;
        }
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

    /** gets the repositories */
    repositories() {
        return this.git.repos;
    }

    /** gets a value indicating whether a git command is running */
    runningTask() {
        return this.git.runningTask;
    }

    hasOption(item: Change) {
        return this.options.some(option => option.enabled(item));
    }

    private refresh() {
        if (this.selection) {
            this.selection = this.repositories().find(item => {
                return item.url === this.selection.url;
            }) || this.repositories().find(_ => true);
        }
    }

}

interface ChangeOption {
    label: string;
    enabled: (item: Change) => boolean;
    action: (item: Change) => void;
}
