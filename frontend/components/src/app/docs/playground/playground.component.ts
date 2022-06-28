// tslint:disable: no-inferrable-types

import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    private _tabs: PlaygroundTab[];

    focus: PlaygroundTab;

    get tabs(): PlaygroundTab[] {
        return this._tabs;
    }

    @Input()
    set tabs(val: PlaygroundTab[]) {
        this._tabs = val;
        this.tabs.forEach(async (tab) => {
            tab.code = await this.http.asset(tab.path);
        });
        this.empty = this.tabs.length === 0;
        if (!this.empty) {
            this.focus = this.tabs[0];
        }
        this.expanded = true;
    }

    loading: boolean;
    expanded: boolean;
    empty: boolean;

    options: monaco.editor.IEditorConstructionOptions = {
        theme: 'vs-dark',
        language: 'premierlangage',
        automaticLayout: true,
    };

    constructor(private readonly http: HttpService) {}

    async ngOnInit(): Promise<void> {
    }

    async tryIt(): Promise<void> {
        this.loading = true;
        this.expanded = false;
        this.focus.preview = '';
        try {
            this.focus.preview = await this.http.preview(this.focus.code);
            this.loading = false;
        } catch (error) {
            this.focus.preview = '<div style="font-size: 18px;">' + error.message + '</div>';
            this.loading = false;
        }
    }

    onInit(editor: monaco.editor.IStandaloneCodeEditor) {
        editor.updateOptions({
            renderWhitespace: 'all',
            autoIndent: true,
            autoClosingBrackets: true,
            scrollbar: {
                verticalScrollbarSize: 4,
                horizontalScrollbarSize: 4,
            },
            quickSuggestions: false
        });
        // tslint:disable: no-bitwise
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, () => {}, '');
    }

    onDidLoaded() {
        this.loading = false;
    }

    onDidTabChanged(e: MatTabChangeEvent) {
        this.focus = this.tabs[e.index];
    }

}

export interface PlaygroundTab {
    label: string;
    path: string;
    code?: string;
    preview?: string;
}
