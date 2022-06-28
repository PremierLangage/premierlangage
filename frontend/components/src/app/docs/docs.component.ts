import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ComponentDefinition } from '../shared/models/definition.model';
import { DefinitionService } from '../shared/services/definition.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DocsComponent implements OnInit, OnDestroy {
    sidebarOpened = true;

    guides = [
        { name: 'Introduction', link: '/components/intro' },
        { name: 'Simple Usage', link: '/components/simple-usage' },
        { name: 'Advanced Usage', link: '/components/advanced-usage' },
        { name: 'CSS API', link: '/components/css-doc' },
    ];

    api: ComponentDefinition[];

    constructor(
        private readonly router: Router,
        private readonly definitions: DefinitionService
    ) {}

    ngOnInit(): void {
        this.api = this.definitions.findAll();
    }

    ngOnDestroy(): void {
    }
}
