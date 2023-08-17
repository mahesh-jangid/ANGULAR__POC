import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent {
  data: any = {
    "_id": "",
    "name": "",
    "email": "",
    "gender": "",
    "city":"",
    "dob":""
};
  idd:any

  constructor(private http:HttpClient, public activateroutes:ActivatedRoute, public routes : Router){
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

  updateUser(id: number, user: any) {
    return this.http.put(`http://localhost:4323/api/employee/${id}`, user);
  }

onUpdate() {
  this.updateUser(this.idd, this.data).subscribe((res:any)=>{
    console.log("res5050",res);

  });
}


}
