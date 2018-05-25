import { Component, OnInit } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';

import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-assign-teacher-class-list',
  templateUrl: './assign-teacher-class-list.component.html',
  styleUrls: ['./assign-teacher-class-list.component.css']
})
export class AssignTeacherClassListComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute) { }
  teacher=[];
  class=[];
  section=[];
  subjects=[];
  timein=[];
  timeout=[];
  day=[];

  fetchDate=function()
{

  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.teacher=res.json();


    }
)
}

fetchclass=function()
{

  this.http.get("http://10.10.5.59:5000/getclass").subscribe (

    (res:Response) =>{
      this.class=res.json();


    }
)
}

fetchsection=function(pro)
{
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])

  this.http.get("http://10.10.5.59:5000/getclass").subscribe (

    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.classname]=data[i].classes.sections
       }

this.section=hash[pro]



    }
  )
}


fetchsubjects=function(pro)
{
  var hash={};



  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classid;
          hash[data[i].classes.sections[i]]=data[i].classes.subjects
       }


this.subjects=hash[pro]



this.subjects=hash[pro]

    }
  )
}
  ngOnInit() {
    this.fetchDate();
this.fetchclass();
  }

}
