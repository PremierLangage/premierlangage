import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

   constructor(
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        const origin = window.location.origin;
        this.router.navigateByUrl(window.location.href.replace(origin, ''));
    }

}


