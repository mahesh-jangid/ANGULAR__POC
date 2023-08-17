import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';



@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent  {
  addForm:any;
  name: any;
  email: any;
  mobile: any;
  UserData: any;
  gender: any;
  city: any;
  dob: any;
  dataSource: any;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private route:Router,private http:HttpClient, private snackbar : MatSnackBar){
    this.addForm={
      "name":"",
      "email":"",
      "mobile":"",
      "gender":"",
      "city":"",
      "dob":""

    }
  }
  ngOnInit(){
    const userDataString: string | null = localStorage.getItem("userData");
    if (userDataString !== null) {
      this.UserData = JSON.parse(userDataString);
    }

    this.isLoggedIn()
   }
  
  
  
   isLoggedIn(){
    console.log("came here...")
    if(this.UserData){
      this.route.navigate(["/adduser"])
    }else{
      this.route.navigate(["login"])
    }
   }
  onSubmit() {
  this.name = this.addForm.name;
  this.email=this.addForm.email;
  this.gender= this.addForm.gender;
  this.city= this.addForm.city;
  this.dob= this.addForm.dob;


  this.http.post<any>(`${environment.apiUrl}/api/employee`,{ name: this.name,email: this.email, mobile: this.mobile,gender:this.gender,city:this.city,dob:this.dob }).subscribe((users:any)=>{
          console.log(users,'data')
      });


      this.snackbar.open('Successfully Save','Cancel',{
        duration:3000,
        // panelClass: ['mycsssnackbartest ']
      });
      this.getData()

}

getData()
{
    this.http.get(`${environment.apiUrl}/api/employee`).subscribe((users:any)=>{
      this.dataSource = users
        console.log(users,'data')
        // this.getData();
    });
}
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();


}

