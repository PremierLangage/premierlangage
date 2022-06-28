import { Component, OnInit, Input } from '@angular/core';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    @Input()
    loading: boolean;

    constructor(
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event);
        });
    }

    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            document.body.classList.remove('loaded');
            this.loading = true;
        }
        if (event instanceof NavigationEnd) {
            this.endLoading();
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.endLoading();
        }
        if (event instanceof NavigationError) {
            this.endLoading();
        }
    }

    private endLoading() {
        document.body.classList.add('loaded');
        setTimeout(() => {
            this.loading = false;
            document.body.classList.remove('loaded');
        }, 3000);
    }
}
