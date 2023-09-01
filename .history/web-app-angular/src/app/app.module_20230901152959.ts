import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { firebase } from '../environments/environment/firebase'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginCompComponent,
    DashboardComponent,
    RegisterComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
