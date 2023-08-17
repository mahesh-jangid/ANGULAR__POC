import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { FrontDeskFormComponent } from './front-desk-form/front-desk-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListusersComponent } from './listusers/listusers.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  ;
import {HttpClientModule} from '@angular/common/http';
import { EditusersComponent } from './editusers/editusers.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    StudentListComponent,
    CountryListComponent,
    FrontDeskFormComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AdduserComponent,
    ListusersComponent,
    EditusersComponent,
    ViewusersComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
