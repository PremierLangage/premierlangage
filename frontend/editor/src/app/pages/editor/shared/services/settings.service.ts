// tslint:disable: max-line-length

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Settings } from '../models/settings.model';


@Injectable({ providedIn: 'root' })
export class SettingsService {

    private settings: { [k: string]: Settings.Setting[] } = {};

    readonly changed: Subject<{ [k: string]: Settings.Setting[] }> = new Subject();

    constructor() {}

    get(groupName: string, settingName: string) {
        return (this.settings[groupName] || []).find(item => {
            return item.group === groupName && item.name === settingName;
        });
    }

    set(groupName: string, settingName: string, value: any) {
        let item: Settings.Setting;
        const g = (this.settings[groupName] || []);
        for (let i = 0; i < g.length; i++) {
            item = g[i];
            if (item.name === settingName) {
                g[i].value = value;
                this.save();
                break;
            }
        }
    }

    save() {
        localStorage.setItem(Settings.STORAGE_KEY, JSON.stringify(this.settings));
        this.changed.next(this.settings);
    }

    update(groups: Settings.Group[]) {
        groups.forEach(group => {
            const settings = this.settings[group.name] || [];
            group.settings.forEach(setting => {
                for (let i = 0; i  < settings.length; i++) {
                    if (settings[i].name === setting.name) {
                        settings[i] = setting;
                        return;
                    }
                }
                settings.push(setting);
            });
            this.settings[group.name] = settings;
        });
        this.save();
    }

    getAll(): { [k: string]: Settings.Setting[] } {
        return { ...this.settings };
    }

    ofGroup(groupName: string): Settings.Setting[] {
        return this.settings[groupName] || [];
    }

    extract(groupName: string) {
        let obj = {};
        Object.keys(this.settings).filter(k => {
            return k.startsWith(groupName);
        }).forEach(k => {
            obj = this.settings[k].reduce((_, curr) => {
                this.assign(obj, curr.name, curr.value);
                return obj;
            }, obj);
        });
        return obj;
    }

    loadSettings() {
        // TODO sync storage with defaults (comments, defaults values..)
        return new Promise((resolve) => {
            const store = localStorage.getItem(Settings.STORAGE_KEY);
            this.settings = JSON.parse(store);
            if (!this.settings) {
                this.settings = {};
            }
            const defaults = Settings.defaults;
            defaults.forEach(item => {
                this.settings[item.group] = this.settings[item.group] || [];
                let some = this.settings[item.group].find(setting => {
                    return setting.name === item.name;
                });
                if (!some) {
                    some = item;
                    this.settings[item.group].push(item);
                }
                some.hidden = item.hidden;
            });
            Object.keys(this.settings).forEach(k => {
                if (this.settings[k].length === 0) {
                    delete this.settings[k];
                }
            });
            this.changed.next(this.settings);
            resolve();
        });
    }

    private assign(obj: any, path: string, value: any) {
        const a = path.split('.');
        let o = obj;
        for (let i = 0; i < a.length - 1; i++) {
            const n = a[i];
            if (n in o) {
                o = o[n];
            } else {
                o[n] = {};
                o = o[n];
            }
        }
        o[a[a.length - 1]] = value;
    }

}
