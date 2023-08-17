import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  UserData: any;
  loggedIn:boolean=false
  constructor(private router: Router, private snackbar : MatSnackBar,) {}


  logout(){
    localStorage.removeItem("userData")
    this.router.navigate(['/login']);
    this.snackbar.open('logout Successfully,  Please log-in','Cancel',{
      duration:2000,
    });
  }

}
