import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';


import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

user=[];
  constructor(private route: ActivatedRoute,private http: Http){}
//posting password
  onSubmit=function(pwd)
{

    if(pwd.New_Password==pwd.Confirm_Password){
    var dat=JSON.stringify(pwd)
    console.log(dat)
var a={"Id":this.user.Student_Id,"Password":pwd.Confirm_Password}
console.log(a)
var id =this.route.snapshot.params.id;
console.log(id)
  var url="http://10.10.5.54:4000/savepassword/"+id
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

  ngOnInit(){

    //get student details
  var id: string =this.route.snapshot.params.id;
console.log(id)

    this.http.get("http://10.10.5.54:4000/getdata/"+id).subscribe (
      (res:Response) =>{
        this.user=res.json();

      }  )
}

  }
