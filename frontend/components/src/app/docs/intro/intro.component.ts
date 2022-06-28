import { Component, OnInit } from '@angular/core';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';
import { DefinitionService } from 'src/app/shared/services/definition.service';
import { RadioItem } from 'src/app/shared/models/radio-item.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
    api: ComponentDefinition[];

    radio: RadioItem[] = [
        { 'id': '1', 'content': 'A' },
        { 'id': '2', 'content': 'B' },
        { 'id': '3', 'content': 'C' }
    ];

    debug = false;

    constructor(private readonly definitions: DefinitionService) {}

    ngOnInit(): void {
        this.api = this.definitions.findAll();
    }
}
