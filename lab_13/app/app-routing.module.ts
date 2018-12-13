import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserdetailsComponent} from './users/userdetails.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
