import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PassengerService} from './services/passengerService';
import {ViewbookingService} from './services/viewbookingService';

import {HttpClientModule} from '@angular/common/http';
import { PassengersComponent } from './passengers/passengers.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';

import { DetailsConfirmationComponent } from './details-confirmation/details-confirmation.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { ShowpassengersComponent } from './showpassengers/showpassengers.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { PrintticketComponent } from './printticket/printticket.component';
import { PrintticketService } from './services/printticketService';
import { NavbarhomeComponent } from './navbarhome/navbarhome.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';


@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LoginComponent,
    DetailsConfirmationComponent,
    UserRegisterationComponent,
    ShowpassengersComponent,
    ViewbookingsComponent,
    PrintticketComponent,
    NavbarhomeComponent,
    NavbaruserComponent,
    NavbaradminComponent,
    CancelticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PassengerService, ViewbookingService, PrintticketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
