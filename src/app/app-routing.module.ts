import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EditusersComponent } from './editusers/editusers.component';
import { HomeComponent } from './home/home.component';
import { ListusersComponent } from './listusers/listusers.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'userlist',
    component:UserListComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"adduser",
    component:AdduserComponent
  },
  {
    path:"listusers",
    component:ListusersComponent
  },
  {
    path:"editusers",
    component:EditusersComponent
  },
  {
    path:"viewusers",
    component:ViewusersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
