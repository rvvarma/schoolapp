import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  constructor(private http:Http) { }

  //post or add new teacher to the school
    onSubmit=function(admindata)
    {
      var dat=JSON.stringify(admindata)
      //alert(dat)
      alert("created")
      console.log(dat)

  var url="http://10.10.5.54:3014/newadmin"
  this.http.post(url,admindata).toPromise()
        .then(res => console.log(admindata,<any[]> res.json()))
        .then(data => { return data; });
    }

  ngOnInit() {
  }

}
