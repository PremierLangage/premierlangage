import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from './shared/modules/shared.module';
import { EditorModule } from './editor/editor.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MONACO_CONFIG } from './editor/shared/models/monaco.model';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    MonacoEditorModule.forRoot(MONACO_CONFIG),
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
