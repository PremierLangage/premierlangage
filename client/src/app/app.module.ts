import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AngularSplitModule } from 'angular-split';

import { 
         MatSidenavModule, 
         MatToolbarModule,
         MatButtonModule,
         MatIconModule,
         MatListModule,
      } from "@angular/material"

import { AppComponent } from './app.component';
import { PlEditorComponent } from './pleditor/pleditor.component';
import { AppRoutingModule } from './app.routing.module';
import { ExplorerComponent } from './pleditor/explorer/explorer.component';


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: './static/client/assets/',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => { 
    const monaco = (<any>window).monaco;
    console.log(monaco);
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PlEditorComponent,
    ExplorerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

    MonacoEditorModule.forRoot(monacoConfig),
    AngularSplitModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
