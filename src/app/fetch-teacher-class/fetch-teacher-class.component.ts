import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-fetch-teacher-class',
  templateUrl: './fetch-teacher-class.component.html',
  styleUrls: ['./fetch-teacher-class.component.css']
})
export class FetchTeacherClassComponent implements OnInit
{
a:any;
  S=[];

  id:any;
    Class=[];
    stu=[];
     hash={};


  constructor(private activatedRoute: ActivatedRoute,private http: Http,private _cookieService:CookieService,private router: Router) {
  }
  /*onSubmit=function(data){

 var m=[];
var tt=this.hash;
this.classsss = document.getElementById("class").value;

console.log("class"+c)
this.cccc=classsss.charAt(0)
console.log(cccc)
 this.cccc1=classsss.charAt(1)
console.log(cccc1)

var ids=this.id
Object.keys(tt).forEach(function(key) {

  //create a json array



  var val = tt[key];

  //write hhtp post


  var someData ={


    "stid":key,
    "status":val
  };
console.log("key:"+key)
  m.push(someData)

});
var ttt={
  "teacherid":ids,
  "class":cccc,
  "section":cccc1,
  "schoolid": "sc20",
  "data":m
}
console.log("vcb"+JSON.stringify(ttt));



this.http.post("http://10.10.5.59:5000/attendancepost",ttt).subscribe(
  (res:Response)=>{
  this.ttt=res.json();
  console.log(res.json());

  }
)

}*/

getCookie(key:string){
    return this._cookieService.get(key);
  }
      fetchClass=function(cls,data,data1){

        this.hash={}
        console.log(cls)
        console.log(data)
          var res1 = cls.charAt(0);
          console.log(res1);
          var res2 = cls.charAt(1)
            console.log(res2);
            this.http.get("http://10.10.5.69:5000/filter/"+res1+"/"+res2).subscribe(
              (res:Response)=>{
              this.stu=res.json();
              for(var i in this.stu){
this.hash[this.stu[i].studentid]="Present"
       console.log(this.stu[i].studentid)
}
              console.log(res.json());


            } )
          }

  ngOnInit()
{

          this.id = this.getCookie("id");

      console.log(this.id);
      this.S=[];




      console.log("cookie "+this.getCookie("id"));

  this.http.get("http://10.10.5.54:3004/class/"+this.id).subscribe(
    (res:Response) =>{
    this.Class= res.json();
    //console.log(res.json());
//console.log(this.Class)
  //  console.log(res.json())
   var data=[];
   var m=this.Class;
     for (var i in m)
       {
          //console.log(m[i].Class);
          //console.log(m[i].Section);
          data.push(m[i].Class+""+m[i].Section)
       }
       this.Class=data;

   }
 )
}



percentage()
{
/*  var tt=this.hash;
var val;

  Object.keys(tt).forEach(function(key) {
    val = tt[key];
    console.log(val)
});*/


var ids=this.id
console.log("id"+ids)
console.log("per:dfdfdsgdsgdfga"+this.hash)
var k=document.getElementById("class").value;
this.cccc=k.charAt(0)
console.log(this.cccc)
this.cccc1=k.charAt(1)
console.log(this.hash)

console.log("kjvkhvkv "+this.count)
this._cookieService.put("tid",ids);
  this._cookieService.put("present",this.count);
  this._cookieService.put("absent",this.count1);
  this._cookieService.put("cls",k);
  this._cookieService.put("class",this.cccc);
  this._cookieService.put("section",this.cccc1);
   this._cookieService.put("attendance",JSON.stringify(this.hash));
console.log("att"+this.hash)

  console.log("cls"+k)
  console.log("clasa"+this.cccc);
  console.log("section"+this.cccc1)

  /*this._cookieService.put("section",this.cccc1);*/
  alert ("are you sure to dispaly the pie chart!");

  this.router.navigate(['/percentage']);



}



onSub(data,data1)
{
console.log(data1+"data1")
  if(data.target.checked){

this.hash[data1]="Present";
console.log(this.hash[data1])
this.count++;
console.log(this.count)
    }

     else{

    this.hash[data1]="Absent";
    this.count1++;



}

}

}
