import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirect } from 'react-router-dom';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {path: '' , redirectTo:'home', pathMatch:'full'},
  {path:'home' , component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
