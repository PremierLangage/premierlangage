import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlEditorComponent } from './pleditor/pleditor.component';
import { AppComponent } from './app.component';
const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'pleditor', component: PlEditorComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }