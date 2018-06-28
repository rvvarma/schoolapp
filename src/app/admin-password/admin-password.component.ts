import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css']
})
export class AdminPasswordComponent implements OnInit {
  u=[];
  constructor(private route: ActivatedRoute,private http: Http) { }

  //posting password
    onSubmit=function(pwd)
  {
console.log("hii")
      if(pwd.New_Password==pwd.Confirm_Password){
      var dat=JSON.stringify(pwd)
      console.log(dat)
  var a={"Id":this.u[0].Employee_Id,"Password":pwd.Confirm_Password}
  console.log(a)
  var id: string =this.route.snapshot.params.id;
  console.log(id)
    var url="http://10.10.5.54:3014/adminpassword/"+id
    console.log(url)
    this.http.post(url,a).toPromise()
        .then(res => console.log(pwd,<any[]> res.json()))
        .then(data => { return data; });
        alert("success")
    }
    else{
      alert("Passwords did not match")
    }
  }

  ngOnInit() {

    //get admin details
  var id: string =this.route.snapshot.params.id;
    console.log(id)

    this.http.get("http://10.10.5.54:3014/admin/"+id).subscribe (
      (res:Response) =>{
        this.u=res.json();
        console.log(this.u)

      }  )

  }

}
