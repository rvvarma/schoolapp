import { Component, OnInit ,NgModule,
  Pipe
  } from '@angular/core';
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


import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teacher=[];
  section=[];
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
  fetchsection=function(pro)
  {
    var hash={};
    hash['one']='onellll';
    console.log(hash['one'])
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
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

    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
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

        }
    )
  }

  ngOnInit() {
    var pro;
    var p;
    this.http.get("http://10.10.5.42:5000/getclass").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)




       }
  )
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
  this.http.get("http://10.10.5.42:5000/getclass").subscribe (
    (res:Response) =>{
      this.teacher=res.json();
       // var classes=this.class[0].classname;
       var data = this.teacher;

       for(var i in data)
       {
            var id = data[i].classes.classname;
          hash[data[i].classes.classname]=data[i].classes.sections
       }

this.section=hash[pro]
      console.log(hash)
    }
  )

  }

}
