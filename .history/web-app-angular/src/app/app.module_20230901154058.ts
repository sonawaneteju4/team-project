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
    AngularFireModule.initializeApp({ {
      apiKey: "AIzaSyBYUYRvw7FHo7mQg1wzvLoOVH6Kh4CfzQc",
      authDomain: "bloodbankums.firebaseapp.com",
      databaseURL: "https://bloodbankums-default-rtdb.firebaseio.com",
      projectId: "bloodbankums",
      storageBucket: "bloodbankums.appspot.com",
      messagingSenderId: "128330346430",
      appId: "1:128330346430:web:d62ff9f4643bc81fd9d3ef",
      measurementId: "G-GFLG6JLME7"
    }}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
