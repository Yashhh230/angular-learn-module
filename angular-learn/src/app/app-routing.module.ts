import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageRoutes } from './core/enum/pages-routes';

const routes: Routes = [
  {
    path: pageRoutes.authentication,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: pageRoutes.pages,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: pageRoutes.pages,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
