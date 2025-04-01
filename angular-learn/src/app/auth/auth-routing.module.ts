import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { pageRoutes } from '../core/enum/pages-routes';

const routes: Routes = [
  {
    path: pageRoutes.login,
    component: LoginComponent,
  },
  //   {
  //     path: pageRoutes.registration,
  //     component: RegistrationComponent,
  //   },
  //   {
  //     path: pageRoutes.comingSoon,
  //     component: ComingsoonComponent,
  //   },
  //   {
  //     path: pageRoutes.forgotPassword,
  //     component: ForgotPasswordComponent,
  //   },
  //   {
  //     path: pageRoutes.resetPassword + '/:token',
  //     component: ResetPasswordComponent,
  //   },
  //   {
  //     path: pageRoutes.switchCompany,
  //     component: SwitchCompanyComponent,
  //   },
  {
    path: '',
    redirectTo: pageRoutes.login,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
