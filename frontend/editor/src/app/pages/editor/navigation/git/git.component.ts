import { Component, OnInit, OnDestroy } from '@angular/core';

import { PrompField, PrompOptions } from 'src/app/shared/components/prompt/prompt.component';

import { IChange, IRepo } from '../../shared/models/git.model';

import { GitService } from '../../shared/services/git.service';
import { ResourceService } from '../../shared/services/resource.service';
import { NotificationService } from 'src/app/core/notification.service';
import { OpenerService } from '../../shared/services/opener.service';
import { EditorService } from '../../shared/services/editor.service';
import { isFile } from '../../shared/models/filters.model';

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
    selection: IRepo;

    constructor(
        private readonly git: GitService,
        private readonly opener: OpenerService,
        private readonly editor: EditorService,
        private readonly resources: ResourceService,
        private readonly notification: NotificationService
    ) { }

    ngOnInit() {
        this.options.push({label: 'Open File', enabled: (item: IChange) => this.canOpen(item), action: (item: IChange) => {
            this.open(item);
        }});
        this.options.push({label: 'Git Add', enabled: (item: IChange) => this.canAdd(item), action: (item: IChange) => {
            this.add(item);
        }});
        this.options.push({label: 'Git Checkout', enabled: (item: IChange) => this.canCheckout(item), action: (item: IChange) => {
            this.checkout(item);
        }});
    }

    ngOnDestroy() {
    }


    /** used inside the html template to checks if a repo is selected */
    isSelection(item: IRepo) {
        return this.selection && this.selection.url === item.url;
    }

    /**
     * changes the selected repository.
     * @param item the new seleted repository.
     */
    changeSelection(item: IRepo) {
        this.selection = item;
    }

    /** used inside html template with *ngFor to keep track of the repository item */
    trackRepo(_index: number, item: IRepo) {
        return item.url;
    }

    /** used inside html template with *ngFor to keep track of the repository item */
    trackChange(_index: number, item: IChange) {
        return item.path;
    }

    /**
     * gets a value indicating whether git add command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canAdd(item: IChange) {
        return item.type.includes('M') || !item.type.includes('D');
    }

    /**
     * gets a value indicating whether git checkout command can be applied to
     * the resource linked to the repository item.
     * @param item the repository item.
    */
    canCheckout(item: IChange) {
        return item.type !== '??' && !item.type.includes('D');
    }

    /**
     * gets a value indicating whether the resource linked to the repository item
     * can be opened by any editor.
     * @param item the repository item.
    */
    canOpen(item: IChange) {
        return !item.isdir && !item.type.includes('D');
    }

    /**
     * open the resource linked to the repository object in the editor.
     * @param item the repository item.
    */
    open(item: IChange) {
        if (this.canOpen(item)) {
            this.opener.open(item.path, {
                diffMode: true
            });
        }
    }

    /**
     * executes git add command on the given repository item.
     *	@param item the repository item.
     */
    async add(item: IRepo | IChange) {
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
    async push(item: IRepo | IChange) {
        const fields: PrompField[] = [
            { type: 'text', placeholder: 'Login', required: false, value: '' },
            { type: 'password', placeholder: 'Passsword', required: false, value: '' },
        ];
        const options: PrompOptions = {
            title: 'Push',
            fields: fields
        };
        const response = await this.notification.promptAsync(options);
        if (response) {
            const login = response.fields[0].value;
            const password = response.fields[1].value;
            return this.git.push(item, login, password);
        }
        return false;
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     * - if the command succeed, the resources of the editor will be refreshed.
     *	@param item the repository item.
     */
    async pull(item: IRepo | IChange) {
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
                    await this.editor.closeAllEditorGroups();
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
        } catch (error) {
            this.notification.logError(error);
            return false;
        }
    }

    /**
     * executes git status command on the given repository.
     *	@param item the repository item.
     */
    async status(item: IRepo | IChange) {
        return this.git.status(item);
    }

    /**
     * executes git pull command on the given repository item after asking a confirmation.
     *	@param item the repository item.
     */
    async checkout(item: IRepo | IChange) {
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
                    await this.editor.closeAllEditorGroups();
                    const refreshed = await this.resources.refresh();
                    if (refreshed) {
                        const resource = this.resources.find(item.path);
                        if (resource && isFile(resource)) {
                            this.opener.open(resource.path, {
                                diffMode: true
                            });
                        }
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
                if (!!this.resources.findPredicate(item => item.changed)) {
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
                const success = await this.git.clone(this.resources.home, url,  username, password);
                if (success) {
                    await this.editor.closeAllEditorGroups();
                    await this.resources.refresh();
                    this.refresh();
                    return true;
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
                        this.selection.changes = this.selection.changes.filter(e => !e.type.includes('M'));
                    }
                });
            } else {
                this.notification.logError('commit message is required');
            }
        }
    }

    /**
     * gets the repositories
     * */
    repositories() {
        return this.git.repos;
    }

    /**
     * gets a value indicating whether a git command is running
     * */
    runningTask() {
        return this.git.runningTask;
    }

    hasOption(item: IChange) {
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
    enabled: (item: IChange) => boolean;
    action: (item: IChange) => void;
}
