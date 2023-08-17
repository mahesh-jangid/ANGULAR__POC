import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent {

  data: any = {
    "_id": "",
    "name": "",
    "email": "",
    "gender": "",
    "city":"",
    "dob":""
};
  idd:any
  form: any;
  ngControl: any;

  constructor(private http:HttpClient, public activateroutes:ActivatedRoute, public routes : Router,){
    this.activateroutes.queryParams.subscribe((params:any)=>{
      this.idd = params.id1
    })
    this.getData(this.idd)
  }

  getData(id:any)
  {
      this.http.get('http://localhost:4323/api/employee/'+ id).subscribe((users:any)=>{
        this.data = {...users}
          console.log(users,'data')
      });
  }

  isDisabled = true;

}
