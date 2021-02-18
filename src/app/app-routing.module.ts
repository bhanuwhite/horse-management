import { ApplicationsComponent } from './applications/applications.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SocialLoginComponent } from './social-login/social-login.component';


const routes: Routes = [
  { path: 'applications', component: ApplicationsComponent },
  { path: 'socialLogin', component: SocialLoginComponent },
  { path: '', redirectTo: '/applications', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
