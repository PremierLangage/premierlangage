import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EditorResolver } from './pages/editor/editor.resolver';

const routes: Routes = [
    {
        path: 'editor',
        loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule),
        resolve: { data: EditorResolver }
    },
    { path: '**', redirectTo: 'editor', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
    }
  )],
  providers: [EditorResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }
