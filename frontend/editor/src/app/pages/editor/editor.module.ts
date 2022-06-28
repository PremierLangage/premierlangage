import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DebuggingComponent } from './debugging/debugging.component';
import { LoggingComponent } from './debugging/logging/logging.component';
import { ProblemsComponent } from './debugging/problems/problems.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { ExplorerComponent } from './navigation/explorer/explorer.component';
import { GitComponent } from './navigation/git/git.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './navigation/search/search.component';
import { QuickOpenComponent } from './quick-open/quick-open.component';
import { FileIconDirective } from './shared/directives/file-icon.directive';
import { NicifyNamePipe } from './shared/pipes/nicify-name.pipe';
import { FileIconPipe } from './shared/pipes/file-icon.pipe';
import { PathPipe } from './shared/pipes/path.pipe';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CodeEditorComponent } from './workspace/code-editor/code-editor.component';
import { ImageEditorComponent } from './workspace/image-editor/image-editor.component';
import { PreviewEditorComponent } from './workspace/preview-editor/preview-editor.component';
import { SettingEditorComponent } from './workspace/setting-editor/setting-editor.component';
import { WelcomeComponent } from './workspace/welcome/welcome.component';
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
    declarations: [
        PathPipe,
        NicifyNamePipe,
        FileIconPipe,
        FileIconDirective,

        EditorComponent,
        StatusBarComponent,
        DebuggingComponent,
        NavigationComponent,
        ExplorerComponent,
        SearchComponent,
        GitComponent,
        ProblemsComponent,
        LoggingComponent,
        WorkspaceComponent,
        CodeEditorComponent,
        ImageEditorComponent,
        PreviewEditorComponent,
        SettingEditorComponent,
        WelcomeComponent,
        QuickOpenComponent
    ],
    imports: [
        SharedModule,
        EditorRoutingModule,
    ],

})
export class EditorModule {}
