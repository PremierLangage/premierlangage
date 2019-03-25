// tslint:disable: max-line-length
import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Setting, SettingTypes, loadSettings, saveSettings, settingGroup, EDITOR_GROUP } from '../../shared/models/setting.model';
import { NavigationService } from '../../navigation/navigation.service';
import { MonacoService } from '../../shared/services/monaco/monaco.service';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'setting-editor',
    templateUrl: './setting-editor.component.html',
    styleUrls: ['./setting-editor.component.scss'],
  })
export class SettingEditorComponent implements OnInit {

    readonly settings: Setting[];

    groups: IModel[] = [];
    selection: IModel;

    constructor(private readonly navigation: NavigationService, private readonly monaco: MonacoService) {
        this.settings = loadSettings().filter(setting => !setting.hidden);
    }

    ngOnInit() {
        this.groups = this.settings.map(e => {
            return e.group;
        }).sort((a, b) => {
             return a.split('.').pop().toLowerCase() < b.split('.').pop().toLowerCase() ? -1 : 1;
        }).reduce((acc: IModel[], current, index, array) => {
            if (!acc.some(group => group.title === current)) {
                acc.push({
                    title: current,
                    settings: this.settings.filter(setting => setting.group === current)
                });
            }
            return acc;
        }, []);
        this.selection = this.groups[0];
    }

    didClose() {
        this.navigation.settings.next();
    }

    didChange() {
        this.monaco.updateOptions(settingGroup(this.settings, EDITOR_GROUP));
        saveSettings(this.settings);
    }

    didSelect(model: IModel) {
        this.selection = model;
    }

}

export interface IModel {
    title: string;
    settings?: Setting[];
}
