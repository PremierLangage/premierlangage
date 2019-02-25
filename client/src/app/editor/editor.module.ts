import { NgModule } from '@angular/core';

import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { SharedModule } from '../shared/modules/shared.module';
import { EditorRoutingModule } from './editor-routing.module';

import { EditorComponent } from './editor.component';

/* DEBUGGING COMPONENTS */
import { DebuggingComponent } from './debugging/debugging.component';
import { ConsoleComponent } from './debugging/console/console.component';


import { FooterComponent } from './footer/footer.component';

/* NAVIGATION COMPONENTS */
import { NavigationComponent } from './navigation/navigation.component';
import { ExplorerComponent } from './navigation/explorer/explorer.component';
import { SearchComponent } from './navigation/search/search.component';
import { GitComponent } from './navigation/git/git.component';
import { SettingsComponent } from './navigation/settings/settings.component';


/* WORKSPACE COMPONENTS */
import { WorkspaceComponent } from './workspace/workspace.component';
import { MONACO_CONFIG } from './shared/models/monaco.model';
import { CodeEditorComponent } from './workspace/code-editor/code-editor.component';
import { ImageEditorComponent } from './workspace/image-editor/image-editor.component';
import { PreviewEditorComponent } from './workspace/preview-editor/preview-editor.component';

@NgModule({
    declarations: [
        EditorComponent,
        NavigationComponent,
        ExplorerComponent,
        SearchComponent,
        GitComponent,
        SettingsComponent,
        FooterComponent,
        DebuggingComponent,
        ConsoleComponent,
        WorkspaceComponent,
        CodeEditorComponent,
        ImageEditorComponent,
        PreviewEditorComponent
    ],
    imports: [
        EditorRoutingModule,
        SharedModule,
        AngularSplitModule.forRoot(),
        MonacoEditorModule.forRoot(MONACO_CONFIG),
    ],
    exports: [
        EditorComponent,
    ],
    providers: [

    ]
})
export class EditorModule { }
// https://blog.expo.io/building-a-code-editor-with-monaco-f84b3a06deaf
// http://devarea.com/angular-and-django-websockets-communication/
