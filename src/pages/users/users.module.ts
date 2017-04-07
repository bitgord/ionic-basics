import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { UserPage } from '../pages/users/user/user';

@NgModule({
  declarations: [
    UsersPage,
    UserPage
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
  exports: [
    UsersPage,
    UserPage
  ]
})
export class UsersPageModule {}
