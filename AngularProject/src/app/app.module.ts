import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router'
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component'
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes =[
    { path : 'appareils', canActivate: [AuthGuard], component : AppareilViewComponent},
    { path : 'appareils/:id', canActivate: [AuthGuard], component : SingleAppareilComponent },
    { path : 'edit', canActivate: [AuthGuard], component : EditAppareilComponent},
    { path : 'auth', component : AuthComponent},
    { path : 'users', component : UserListComponent},
    { path : '', component : AuthComponent},
    { path : 'not-found', component : FourOhFourComponent},
    { path : '**', redirectTo : "/not-found"} // A mettre iméprativement à la fin car angular va tester toutes les routes dans l'ordre. 
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
