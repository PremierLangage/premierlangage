// tslint:disable: max-line-length
import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Settings } from '../../shared/models/setting.model';
import { MonacoService } from '../../shared/services/monaco/monaco.service';
import { NavigationService } from '../../navigation/navigation.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'setting-editor',
    templateUrl: './setting-editor.component.html',
    styleUrls: ['./setting-editor.component.scss'],
  })
export class SettingEditorComponent implements OnInit {

    /** the settings */
    readonly settings: Settings.Setting[];

    /** setting groups */
    groups: Settings.Group[] = [];

    /** selected group */
    selection: Settings.Group;

    constructor(private readonly navigation: NavigationService, private readonly monaco: MonacoService) {
        this.settings = Settings.getAll().filter(setting => !setting.hidden);
    }

    ngOnInit() {
        this.groups = this.settings.map(e => {
            return e.group;
        }).sort((a, b) => {
             return a.split('.').pop().toLowerCase() < b.split('.').pop().toLowerCase() ? -1 : 1;
        }).reduce((acc: Settings.Group[], current, index, array) => {
            if (!acc.some(item => item.title === current)) {
                acc.push({
                    title: current,
                    settings: this.settings.filter(setting => setting.group === current)
                });
            }
            return acc;
        }, []);
        this.selection = this.groups[0];
    }

    /** Handles close button click event */
    didClose() {
        this.navigation.settings.next();
    }

    /** Handles settings change event */
    didChange() {
        Settings.save(this.settings);
    }

    /**
     * Handles click event on setting group inside the template.
     * @param group the selected group.
     */
    didSelect(group: Settings.Group) {
        this.selection = group;
    }

}
