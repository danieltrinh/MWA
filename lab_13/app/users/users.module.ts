import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: '', component: UsersComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
