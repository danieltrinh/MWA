import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent} from './users/users.component';
import { UserdetailsComponent } from './users/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import {UserCanActivateGuard} from './users/user-can-activate.guard';
import {DataService} from './data.service';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserCanActivateGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

