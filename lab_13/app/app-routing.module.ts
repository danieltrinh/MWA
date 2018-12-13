import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserdetailsComponent} from './users/userdetails.component';
import {UserCanActivateGuard} from './users/user-can-activate.guard';
import {ErrorComponent} from './error.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserdetailsComponent, canActivate: [UserCanActivateGuard]},
  {path:'error', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
