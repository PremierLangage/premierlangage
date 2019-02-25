import { NgModule } from '@angular/core';

import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { SharedModule } from '../shared/modules/shared.module';
import { EditorRoutingModule } from './editor-routing.module';

import { EditorComponent } from './editor.component';

/* DEBUGGING COMPONENTS */
import { ConsoleComponent } from './debugging/console/console.component';

/* WORKSPACE COMPONENTS */
import { WorkspaceComponent } from './workspace/workspace.component';

import { FooterComponent } from './footer/footer.component';

/* NAVIGATION COMPONENTS */
import { NavigationComponent } from './navigation/navigation.component';
import { ExplorerComponent } from './navigation/explorer/explorer.component';
import { SearchComponent } from './navigation/search/search.component';
import { GitComponent } from './navigation/git/git.component';
import { SettingsComponent } from './navigation/settings/settings.component';
import { MONACO_CONFIG } from './models/editor.config';
import { CodeEditorComponent } from './workspace/code-editor/code-editor.component';
import { LoggingService } from './services/logging.service';

@NgModule({
    declarations: [
        EditorComponent,
        ExplorerComponent,
        ConsoleComponent,
        FooterComponent,
        NavigationComponent,
        SearchComponent,
        GitComponent,
        SettingsComponent,
        WorkspaceComponent,
        CodeEditorComponent,
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
})
export class EditorModule { }
