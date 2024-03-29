import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './dashboard/signup/signup.component';
import { LoginComponent } from './dashboard/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NotFoundComponent } from './not-found/not-found.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ContactusComponent } from './dashboard/contactus/contactus.component';
>>>>>>> 005174a784c4d8563d8495af48ed2e4864d3a870

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
<<<<<<< HEAD
    NotFoundComponent
    
=======
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactusComponent  
>>>>>>> 005174a784c4d8563d8495af48ed2e4864d3a870
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
