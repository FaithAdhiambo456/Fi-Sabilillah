import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './dashboard/signup/signup.component';
import { LoginComponent } from './dashboard/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { ContactusComponent } from './dashboard/contactus/contactus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},                        //is the route for our rootpath
    // {path: '', redirectTo: 'Home', pathMatch: 'full'}              //redirecta the user to homecomponent
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent },
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contactus', component: ContactusComponent}
];      //is an array of route objects, where we define our routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
