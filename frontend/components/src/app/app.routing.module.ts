import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdvancedUsageComponent } from './docs/advanced-usage/advanced-usage.component';
import { DocsComponent } from './docs/docs.component';
import { CssDocComponent } from './docs/css-doc/css-doc.component';
import { ApiDocComponent } from './docs/api-doc/api-doc.component';
import { IntroComponent } from './docs/intro/intro.component';
import { SimpleUsageComponent } from './docs/simple-usage/simple-usage.component';

const routes: Routes = [
    {
        path: 'components', component: DocsComponent,
        children: [
            { path: 'intro', component: IntroComponent },
            { path: 'simple-usage', component: SimpleUsageComponent },
            { path: 'advanced-usage', component: AdvancedUsageComponent },
            { path: 'css-doc', component: CssDocComponent },
            { path: '**', component: ApiDocComponent, pathMatch: 'full' },
        ],
    },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
