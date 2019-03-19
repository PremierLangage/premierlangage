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


/* WORKSPACE COMPONENTS */
import { WorkspaceComponent } from './workspace/workspace.component';
import { CodeEditorComponent } from './workspace/code-editor/code-editor.component';
import { ImageEditorComponent } from './workspace/image-editor/image-editor.component';
import { PreviewEditorComponent } from './workspace/preview-editor/preview-editor.component';
import { WelcomeComponent } from './workspace/welcome/welcome.component';
import { SettingEditorComponent } from './workspace/setting-editor/setting-editor.component';
import { QuickOpenComponent } from './quick-open/quick-open.component';

/* PIPES */
import { PathPipe } from './shared/pipes/path.pipe';
import { NicifyNamePipe } from './shared/pipes/nicify-name.pipe';

@NgModule({
    declarations: [
        PathPipe,
        TimeAgoPipe,
        NicifyNamePipe,
        EditorComponent,
        NavigationComponent,
        ExplorerComponent,
        SearchComponent,
        GitComponent,
        FooterComponent,
        DebuggingComponent,
        ConsoleComponent,
        WorkspaceComponent,
        CodeEditorComponent,
        ImageEditorComponent,
        PreviewEditorComponent,
        SettingEditorComponent,
        WelcomeComponent,
        QuickOpenComponent,
    ],
    imports: [
        EditorRoutingModule,
        SharedModule,
        AngularSplitModule.forRoot(),
        MonacoEditorModule,
        MarkdownModule.forRoot()
    ],
    exports: [
        EditorComponent,
    ],
    providers: [

    ]
})
export class EditorModule { }
