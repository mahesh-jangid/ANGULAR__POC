import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { environment } from '../environments/environment';


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
  dataSource: any;

  constructor(private http:HttpClient, public activateroutes:ActivatedRoute, public routes : Router){
    this.activateroutes.queryParams.subscribe((params:any)=>{
      this.idd = params.id1
    })
    this.getData(this.idd)
  }
  ngOnInit(){
    this.getEmployeeData()
  }

  getData(id:any)
  {
      this.http.get(`${environment.apiUrl}/api/employee/`+ id).subscribe((users:any)=>{
        this.data = {...users}
          console.log(users,'data')
      });
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${environment.apiUrl}/api/employee/${id}`, user);
  }
  getEmployeeData()
  {
      this.http.get(`${environment.apiUrl}/api/employee`).subscribe((users:any)=>{
        this.dataSource = users
          console.log(users,'data')
          // this.getData();
      });
  }
onUpdate() {
  this.updateUser(this.idd, this.data).subscribe((res:any)=>{
    console.log("res5050",res);
if(res){
  this.routes.navigate(["/listusers"])
  this.getEmployeeData()
}
  });
}


}
