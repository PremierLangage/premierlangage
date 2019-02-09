import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';

import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';

import { ToastrModule } from 'ngx-toastr';

import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { MONACO_CONFIG } from './editor/editor.config';
import { ExplorerComponent } from './editor/explorer/explorer.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';
import { SanitizeHtmlPipe } from './shared/pipes/sanitize-html.pipe';
import { RunScriptsDirective } from './shared/directives/run-scripts.directive';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { DroppableDirective } from './shared/directives/droppable.directive';
import { PromptComponent } from './shared/components/prompt/prompt.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { ConsoleComponent } from './editor/console/console.component';
import { FooterComponent } from './editor/footer/footer.component';
import { SidebarComponent } from './editor/sidebar/sidebar.component';
import { EmptyStateComponent } from './shared/components/empty-state/empty-state.component';
import { SearchComponent } from './editor/search/search.component';
import { GitComponent } from './editor/git/git.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ExplorerComponent,
    DraggableDirective,
    DroppableDirective,
    AutofocusDirective,
    SanitizeHtmlPipe,
    RunScriptsDirective,
    PromptComponent,
    ConfirmComponent,
    ConsoleComponent,
    EmptyStateComponent,
    FooterComponent,
    SidebarComponent,
    SearchComponent,
    GitComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    
    ToastrModule.forRoot({
      //preventDuplicates: true,
    }),
    AngularSplitModule.forRoot(),
    MonacoEditorModule.forRoot(MONACO_CONFIG),
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    DragDropModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule,
    MatBadgeModule,
    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PromptComponent,
    ConfirmComponent,
  ],
})
export class AppModule { }
