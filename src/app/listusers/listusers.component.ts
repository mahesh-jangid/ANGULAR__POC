import { Component , OnInit  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  UserData: any;
  constructor(private route:Router,private http:HttpClient, public routes: Router,public snackbar:MatSnackBar ){
    // this.getData()
  }
  dataSource:any = new MatTableDataSource([])
  displayedColumns: any[] = ['name','email','gender','action'];
  getData()
  {
      this.http.get('http://localhost:4323/api/employee').subscribe((users:any)=>{
        this.dataSource = users
          console.log(users,'data')
          // this.getData();
      });
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
      this.getData();

      this.route.navigate(["/listusers"])
    }else{
      this.route.navigate(["login"])
    }
   }


  deleteData(id: any)
  {
    this.http.delete(`http://localhost:4323/api/employee/` + id).subscribe();
    ((res: { json: () => any; })=>
      {
        return res.json()
      })

      this.snackbar.open('Successfully Delete','Cancel',{
        duration:3000,
      });
     this.getData()

    }

    updateData(id:any){

      this.routes.navigate(['/editusers'],{
        queryParams:{
          id1:id
        }
      })

    }

    viewData(id:any){
      this.routes.navigate(['/viewusers'],{
        queryParams:{
          id1:id
        }
      })
    }



}

