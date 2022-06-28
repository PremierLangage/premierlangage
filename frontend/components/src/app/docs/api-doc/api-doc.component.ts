import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DefinitionService } from 'src/app/shared/services/definition.service';
import { ComponentDefinition } from 'src/app/shared/models/definition.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'api-doc',
    templateUrl: './api-doc.component.html',
    styleUrls: ['./api-doc.component.scss']
})
export class ApiDocComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    component: ComponentDefinition;

    constructor(
        private readonly router: Router,
        private readonly definitions: DefinitionService,
    ) {
    }

    ngOnInit(): void {
        const origin = window.location.origin;
        const href = window.location.href.replace(origin, '');
        this.refresh(href);
        this.subscription = this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.refresh(e.url);
            }
        });
    }

    ngOnDestroy(): void {
        // tslint:disable-next-line: no-unused-expression
        this.subscription && this.subscription.unsubscribe();
    }

    docPage(definition: ComponentDefinition) {
        return 'docs/' + definition.link.split('/').pop() + '.html';
    }

    private refresh(url: string) {
        this.component = this.definitions.findOne(c => c.link === url);
        if (!this.component) {
            this.router.navigateByUrl('/components/intro');
        }
    }
}
