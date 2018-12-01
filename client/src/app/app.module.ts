import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AppRoutingModule } from './app.routing.module';
import { AskComponent } from './ask/ask.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    AskComponent,
    DocumentationComponent,
  ],
  imports: [
    SharedModule,
    CoursesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
