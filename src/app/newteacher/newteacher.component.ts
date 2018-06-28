
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-newteacher',
  templateUrl: './newteacher.component.html',
  styleUrls: ['./newteacher.component.css']
})
export class NewteacherComponent implements OnInit {

  constructor(private http:Http) { }

//post or add new teacher to the school
  onSubmit=function(teacherdata)
  {
    var dat=JSON.stringify(teacherdata)
    //alert(dat)
    alert("created")
    console.log(dat)

var url="http://10.10.5.54:3002/add"
this.http.post(url,teacherdata).toPromise()
      .then(res => console.log(teacherdata,<any[]> res.json()))
      .then(data => { return data; });
  }


  ngOnInit() {
  }

}
