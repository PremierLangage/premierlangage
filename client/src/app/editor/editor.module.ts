import { NgModule } from '@angular/core';

// https://www.npmjs.com/package/time-ago-pipe
import { TimeAgoPipe } from 'time-ago-pipe';

// https://www.npmjs.com/package/angular-split
import { AngularSplitModule } from 'angular-split';

// https://www.npmjs.com/package/ngx-monaco-editor/v/7.0.0
import { MonacoEditorModule } from 'ngx-monaco-editor';

// https://www.npmjs.com/package/angular2-markdown
import { MarkdownModule } from 'angular2-markdown';
import 'rxjs-compat/Observable';

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
import { WebEditorComponent } from './workspace/web-editor/web-editor.component';

@NgModule({
    declarations: [
        TimeAgoPipe,
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
        PreviewEditorComponent,
        WebEditorComponent,
    ],
    imports: [
        EditorRoutingModule,
        SharedModule,
        AngularSplitModule.forRoot(),
        MonacoEditorModule.forRoot(MONACO_CONFIG),
        MarkdownModule.forRoot()
    ],
    exports: [
        EditorComponent,
    ],
    providers: [

    ]
})
export class EditorModule { }
