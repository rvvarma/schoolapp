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
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  constructor( private http: Http, private router: Router, private route: ActivatedRoute) { }
  class=[];
  section=[];
  subjects=[];
  teacherid=[];
  teacher=[];

  fetchclass=function()
  {
    this.http.get("http://10.10.5.47:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();

         // var classes=this.class[0].classname;

       // console.log("vsjfbvckjs "+this.teacherslist)


      }
  )
  }
  fetchstudentid=function()
  {
    this.http.get("http://10.10.5.47:3002/fetch").subscribe (
      (res:Response) =>{
        this.teacherid=res.json();

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
    this.http.get("http://10.10.5.47:5000/getclass").subscribe (
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

  this.http.get("http://10.10.5.47:5000/getclass").subscribe (
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


  ngOnInit() {  //  this.fetchDate();
    this.fetchclass();
  this.fetchstudentid();
  this.fetchDate();
this.fetchclasses();


}onSubmit=function(Teacher_Info) {
    alert(JSON.stringify(Teacher_Info))


    if(confirm("ARE U SURE FOR ADD?"))
    {var Teacher=JSON.stringify(Teacher_Info)
      alert("SUDHER"+Teacher)
      var tname=Teacher_Info.Teacher_Id;
      console.log(Teacher)
      //const url="http://10.10.5.54:3004/update"+"/"+tname;
      const url="http://10.10.5.47:3004/add";

alert(url)

      this.http.post(url,Teacher_Info).toPromise()
      .then(res => console.log(Teacher_Info,<any[]> res.json()))


      .then(data => { return data; });
//alert("successfully ADDED....!")

    }
}//==============================================================================================================
private headers =new Headers({'ContentType':'application/json'})

   fetchDate=function()
   {

     this.http.get("http://10.10.5.47:3004/fetch").subscribe (
       (res:Response) =>{
         this.teacher=res.json();
           // var teacherslist=this.teacher[0].First_Name;
         console.log(this.teacher)


         console.log(this.Teacher_Name)


       }
  )
   }
fetchclasses=function()
{
  this.http.get("http://10.10.5.47:5000/getclass").subscribe (
    (res:Response) =>{
      this.class=res.json();

       // var classes=this.class[0].classname;

     // console.log("vsjfbvckjs "+this.teacherslist)


    }
)
}
/*fetchsectionss=function(pro)
{
  var hash={};
  hash['one']='onellll';
  console.log(hash['one'])
  this.http.get("http://10.10.5.4:5000/getclass").subscribe (
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

fetchsubjectss=function(pro)
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

this.subjectss=hash[pro]

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


  /*onSubmit=function(Teacher_Name) {
    alert(JSON.stringify(Teacher_Name))


    if(confirm("ARE U SURE FOR UPDATE?"))
    {
      alert(Teacher_Name.Teacher_Name)
      var tname=Teacher_Name._id;
      console.log(Teacher_Name)
      //const url="http://10.10.5.54:3004/update"+"/"+tname;
      const url="http://10.10.5.54:3004/post";

alert(url)

      return this.http.post(url,Teacher_Name).toPromise()
      .then(res => console.log(<any[]> res.json()))


      .then(data => { return data; });
     // alert("successfully updated....!")

    }
}
}*/



}
