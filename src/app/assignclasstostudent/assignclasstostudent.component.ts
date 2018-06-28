

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod} from '@angular/http';


@Component({
  selector: 'app-assignclasstostudent',
  templateUrl: './assignclasstostudent.component.html',
  styleUrls: ['./assignclasstostudent.component.css']
})
export class AssignclasstostudentComponent implements OnInit {


constructor(private activatedRoute: ActivatedRoute,private http: Http){ }



student = [];
stu = [];
section=[];
class=[];


  fetchData = function ()
   {

    this.http.get("http://10.10.5.47:5000/studentdetails").subscribe((res: Response)

    => {

        this.student = res.json();
console.log("sdfcdsa "+this.student)
}
    )
  }




addProduct = function(student) {

console.log("ioif"+ student)



var x = document.getElementById("class").value;

var y = document.getElementById("section").value;




console.log("vsvdsv"+ x)

console.log("yy" + y)

console.log("uu" + k)




var k={"stid":"EX148","name":"v","admissionnumber":"","lastname":"","mothername":"","fathername":"","phonenumber":"","mailid":"","class":"1A","bloogroup":"","address":"" }

   {

      const url = `${"http://10.10.5.47:5000/post"}`;

      this.http.post(url,k).subscribe((res:Response) => {

        this.isAdded = true;

this.student.push(k);




console.log(res);
console.log(this.student)

          })
        }}


  deleteProduct = function (stid) {
  console.log(stid)

   if (confirm("Are you sure?")) {
   console.log(stid)

      var  url = "http://10.10.5.47:5000/delete"+"/"+stid;

      return this.http.delete(url).toPromise()
        .then(() => {


       })
   }

 }






  fetchclass=function()
  {
    this.http.get("http://10.10.5.47:5000/getclass").subscribe (
      (res:Response) =>{
        this.class=res.json();


      }
    )
  }

    fetchsection=function(pro) {
      this.fetchData();

      var hash = {};
      hash['one'] = 'onel';
      console.log(hash['one'])
      this.http.get("http://10.10.5.47:5000/getClass").subscribe((res: Response)
          => {

          this.section = res.json();
          var data = this.section;

          for (var i in data) {
            var id = data[i].classes.classid;
            hash[data[i].classes.classname] = data[i].classes.sections


          }

          this.section = hash[pro]
          console.log(this.student)

        }
      )
    }




ngOnInit()





     {
this.fetchData();
this.fetchclass();
this.addProduct();

}








}














}



}
