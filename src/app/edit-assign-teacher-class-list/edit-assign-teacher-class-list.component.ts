import { Component, OnInit } from '@angular/core';
import { RequestOptions,Request,RequestMethod,Http,Response,Headers, } from '@angular/http';
import { ActivatedRoute, Router, } from '@angular/router';
@Component({
  selector: 'app-edit-assign-teacher-class-list',
  templateUrl: './edit-assign-teacher-class-list.component.html',
  styleUrls: ['./edit-assign-teacher-class-list.component.css']
})
export class EditAssignTeacherClassListComponent implements OnInit {

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
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
  this.http.get("http://10.10.5.59:5000/getclass").subscribe (
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

var sec=this.section=hash[pro]

    }
  )
}

fetchsubjects=function(pro)

{




  var hash={};
  var acc = document.getElementById("class").value;
console.log("saa  "+acc)
  this.http.get("http://10.10.5.59:5000/getclass").subscribe (
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
 const url="http://10.10.5.54:3004/class"+"/"+this.bankName;



this.http.get(url).subscribe (
  (res:Response) =>{
    this.day=res.json();
    console.log(this.day)

   var r=this.day

   this.cl=r[0].Class
   this.sec=r[0].Section
   this.sub=r[0].Subject
   console.log(this.cl)
   this.fetchsection(r[0].Class)
  // this.fetchsubjects(r[0].Class)

  var hash={};

   this.http.get("http://10.10.5.59:5000/getclass").subscribe (
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
    const url="http://10.10.5.54:3004/update"+"/"+bankName;
    //const url="http://10.10.5.54:3004/post";

alert(url)

    return this.http.put(url,Teacher_Name).toPromise()
    .then(res => console.log(<any[]> res.json()))


    .then(data => { return data; });
   // alert("successfully updated....!")

  }
}

}
