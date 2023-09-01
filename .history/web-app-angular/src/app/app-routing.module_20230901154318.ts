import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirect } from 'react-router-dom';

const routes: Routes = [
  {path: '' red:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
