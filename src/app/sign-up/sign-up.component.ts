import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  title = 'Angular Form Validation Tutorial';
  angForm!: FormGroup;
  addForm:any;
  name: any;
  email: any;
  password: any;
  isRequired: boolean = false;
  address: any;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private route:Router,private http:HttpClient, private snackbar : MatSnackBar,private fb: FormBuilder){
    this.addForm={
      "name":"",
      "email":"",
      "password":"",
      "address":""

    }
    this.createForm();
  }
  onSubmit() {
  this.name = this.addForm.name;
  this.email=this.addForm.email;
  this.password= this.addForm.password;
  this.address= this.addForm.address;

  if(!this.email && !this.email && !this.password){
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
      
    }  else if(!this.address){
      this.snackbar.open('Please enter address','Cancel',{
        duration:3000,
        // panelClass: ['mycsssnackbartest ']
      });
    
    }else{
  this.http.post<any>("http://localhost:4323/api/users",{ name: this.name,email: this.email, password: this.password ,address:this.address}).subscribe((users:any)=>{
          console.log('data',users)
          if(users){
            this.snackbar.open('Successfully Sign-up,  Please log-in','Cancel',{
              duration:3000,
              // panelClass: ['mycsssnackbartest ']
            });
            this.route.navigate(["/login"])
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
