import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    // children: [
    //   {
    //     path: pageRoutes.settings,
    //     loadChildren: () =>
    //       import('./setting/setting-routing.module').then(
    //         (m) => m.SettingsRoutingModule
    //       ),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
