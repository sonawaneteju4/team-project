import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginCompComponent } from './login-comp/login-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'login', component: LoginCompComponent },
  { path: 'home', component: LandingpageComponent },
  { path: 'home', component: LandingpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
