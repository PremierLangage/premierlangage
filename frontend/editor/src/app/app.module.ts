import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSplitModule } from 'angular-split'; // https://www.npmjs.com/package/angular-split
import { MonacoEditorModule } from 'ngx-monaco-editor'; // https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0
import { ToastrModule } from 'ngx-toastr'; // https://www.npmjs.com/package/ngx-toastr
import { MarkdownModule } from 'ngx-markdown'; // https://www.npmjs.com/package/ngx-markdown
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MONACO_CONFIG } from './pages/editor/shared/models/monaco.model';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFToken',
        }),

        MarkdownModule.forRoot(),
        AngularSplitModule.forRoot(),
        MonacoEditorModule.forRoot(MONACO_CONFIG),
        ToastrModule.forRoot({ preventDuplicates: true }),

        SharedModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: []
})
export class AppModule {}
