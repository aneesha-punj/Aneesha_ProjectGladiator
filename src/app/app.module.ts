import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PassengerService} from './services/passengerService';

import {HttpClientModule} from '@angular/common/http';
import { PassengersComponent } from './passengers/passengers.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';

import { DetailsConfirmationComponent } from './details-confirmation/details-confirmation.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { ShowpassengersComponent } from './showpassengers/showpassengers.component';


@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LoginComponent,
    DetailsConfirmationComponent,
    UserRegisterationComponent,
    ShowpassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PassengerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
