import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Angular Form Validation Tutorial';
  angForm!: FormGroup;
  addForm:any;
  name: any;
  email: any;
  password: any;
  isRequired: boolean = false;
  UserData: any;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private route:Router,private http:HttpClient, private snackbar : MatSnackBar,private fb: FormBuilder){
    this.addForm={
      "name":"",
      "email":"",
      "password":""

    }
    this.createForm();
    
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
      this.route.navigate(["/"])
    }else{
      this.route.navigate(["login"])
    }
   }
  onSubmit() {
  // this.name = this.addForm.name;
  this.email=this.addForm.email;
  this.password= this.addForm.password;

if(!this.email && !this.password){
  this.snackbar.open('Field can not be empty ','Cancel',{
    duration:3000,
    // panelClass: ['mycsssnackbartest ']
  });

  }  else if(!this.email){
    this.snackbar.open('Please enter email id','Cancel',{
      duration:3000,
      // panelClass: ['mycsssnackbartest ']
    });
  }
  else if(!this.password){
    this.snackbar.open('Please enter password ','Cancel',{
      duration:3000,
      // panelClass: ['mycsssnackbartest ']
    });
  }
else{
  this.http.post<any>("http://localhost:4323/api/users/login",{email: this.email, password: this.password },{}).subscribe((users:any)=>{
          console.log('data',users)
          if(users?.message){
            this.snackbar.open('Successfully Login','Cancel',{
              duration:3000,
              // panelClass: ['mycsssnackbartest ']
            });
            localStorage.setItem("userData",JSON.stringify(users))

            this.route.navigate(["/"])
          }else{
            this.snackbar.open('Login failed','Cancel',{
              duration:3000,
              // panelClass: ['mycsssnackbartest ']
            });
          }
         

      });

}

   

}
createForm() {
  this.angForm = this.fb.group({
     name: ['', Validators.required ],
     address: ['', Validators.required ]
  });
}
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();


}

