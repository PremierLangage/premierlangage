import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AskComponent } from './ask/ask.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
    { path: 'editor', component: EditorComponent },
    { path: 'ask', component: AskComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'editor', component: EditorComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }