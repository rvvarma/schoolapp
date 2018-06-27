//import 'rxjs/add/operator/toPromise';
//import 'rxjs/Rx';
//import {Observable} from "rxjs/Rx";


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
  selector: 'app-edit-assign-teacher-class-list',
    templateUrl: './edit-assign-teacher-class-list.component.html',
    styleUrls: ['./edit-assign-teacher-class-list.component.css']






})
export class EditAssignTeacherClassListComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute) {
  }
  private headers =new Headers({'ContentType':'application/json'})
  fetch=[];
  cl:any;
  sec:any;
  sub:any
   teacher=[];
   class;
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
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)


         console.log(this.Teacher_Name)


       }
  )
   }
fetchclass=function()
{
  this.http.get("http://10.10.5.42:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)


    }
)
}
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

var sec=this.section=hash[pro]

    }
  )
}

fetchsubjects=function(pro)

{




  var hash={};
  var acc = document.getElementById("class").value;
console.log("saa  "+acc)
  this.http.get("http://10.10.5.42:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classname;
          hash[id]=data[i].classes.subjects
       }

this.subjects=hash[acc]

    }
 )
}


/*fetchtimein=function()
{
  var hash={};

  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timein)



    }
)
}
fetchtimeout=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.timein=res.json();
      console.log(this.timeout)



    }
)
}*/

/*fetchday=function()
{
  this.http.get("http://10.10.5.54:3004/fetch").subscribe (
    (res:Response) =>{
      this.day=res.json();
      console.log(this.day)



    }
)
}*/
bankName:any;

  ngOnInit() {

    this.fetchDate();
this.fetchclass();
this. bankName = this.route.snapshot.params['id'];

console.log("dsvsdvsd" +this.bankName)
 // this.fetchsection();
//this.fetchtimein();
 //this.fetchtimeout();
 //this.fetchday();
 const url="http://10.10.5.54:3004/c"+"/"+this.bankName;



this.http.get(url).subscribe (
  (res:Response) =>{
    this.day=res.json();
    console.log(this.day)

   var r=this.day

   this.cl=r[0].Class
   this.sec=r[0].Section
   this.sub=r[0].Subject
   console.log(this.cl)
   console.log(this.sec)
   console.log(this.sub)
   this.fetchsection(r[0].Class)
  // this.fetchsubjects(r[0].Class)

  var hash={};

   this.http.get("http://10.10.5.42:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();
       // var classes=this.class[0].classname;
       var data = this.class;

       for(var i in data)
       {
            var id = data[i].classes.classname;
          hash[id]=data[i].classes.subjects
       }

this.subjects=hash[r[0].Class]

    }
  )

  })
}

  onSubmit=function(Teacher_Name) {
    alert(JSON.stringify(Teacher_Name))
     var bankName = this.route.snapshot.params['id'];


    if(confirm("ARE U SURE FOR UPDATE?"))
    {
      alert(Teacher_Name.Teacher_Id)
      var tname=Teacher_Name.Teacher_Id;
      console.log(tname)
      const url="http://10.10.5.54:3004/u"+"/"+bankName;
      //const url="http://10.10.5.54:3004/post";

alert(url)

      return this.http.put(url,Teacher_Name).toPromise()
      .then(res => console.log(<any[]> res.json()))


      .then(data => { return data; });
     // alert("successfully updated....!")

    }
}


}
