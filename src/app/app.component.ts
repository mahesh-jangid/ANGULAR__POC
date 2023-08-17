import { Component } from '@angular/core';
import { Dummy } from './dummy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserData: any;

   constructor(private route: Router,){
 
this.isLoggedIn
   }
ngOnInit(){
  const userDataString: string | null = localStorage.getItem("userData");
  if (userDataString !== null) {
    this.UserData = JSON.parse(userDataString);
  }
  this.isLoggedIn()
 }



 isLoggedIn(){
  if(this.UserData){
    this.route.navigate(["/"])
  }else{
    this.route.navigate(["login"])
  }
 }
 
  // title = 'blog';
  // blog = ' 15'
  // getdata(val:string) {

  //   console.warn(val)
  // }
  // displayval='';
  // getvalue(val:string){
  //   this.displayval=val
  // }
  // count=0
  // counter(type:string)
  // {
  //   type==='plus' ?this.count++:this.count--;
  // }

  // getname(name:any)
  // {
  //   alert(name)
  // }

  // getinput(inputval:any)
  // {
  //   console.warn(inputval)
  // }

  // title1='if-condition';
  // show=true

}
