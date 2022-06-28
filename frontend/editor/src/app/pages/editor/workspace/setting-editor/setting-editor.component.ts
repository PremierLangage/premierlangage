// tslint:disable: max-line-length
import { Component, OnInit} from '@angular/core';
import { Settings } from '../../shared/models/settings.model';
import { NavigationService } from '../../navigation/navigation.service';
import { SettingsService } from '../../shared/services/settings.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'setting-editor',
    templateUrl: './setting-editor.component.html',
    styleUrls: ['./setting-editor.component.scss'],
  })
export class SettingEditorComponent implements OnInit {

    /** setting groups */
    groups: Settings.Group[] = [];

    /** selected group */
    selection: Settings.Group;

    constructor(
        private readonly settings: SettingsService,
        private readonly navigation: NavigationService,
        ) {
    }

    ngOnInit() {
        const settings = this.settings.getAll();

        const groups = Object.keys(settings).sort((a, b) => {
             return a.split('.').pop().toLowerCase() < b.split('.').pop().toLowerCase() ? -1 : 1;
        });

        this.groups = groups.reduce((acc: Settings.Group[], groupName) => {
            if (!acc.some(item => item.name === groupName)) {
                acc.push({
                    name: groupName,
                    settings: this.settings.ofGroup(groupName).filter(setting => {
                        return !setting.hidden;
                    })
                });
            }
            return acc;
        }, []);

        if (this.groups.length > 0) {
            this.selection = this.groups[0];
        }
    }

    /** Handles close button click event */
    didClose() {
        this.navigation.settings.next();
    }

    /** Handles settings change event */
    didChange() {
        this.settings.update(this.groups);
    }

    /**
     * Handles click event on setting group inside the template.
     * @param group the selected group.
     */
    didSelect(group: Settings.Group) {
        this.selection = group;
    }

}
