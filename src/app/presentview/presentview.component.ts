import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { CommonModule} from '@angular/common';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';
import Base64 from 'js-base64';



@Component({
  selector: 'app-presentview',
  templateUrl: './presentview.component.html',
  styleUrls: ['./presentview.component.css']
})
export class PresentviewComponent implements OnInit {
  assignment=[];
  sub=[];
  ass=[];

  constructor(private http: Http) { }


downloadFile(f1)
{
console.log(f1);
  this.http.get("http://10.10.5.69:3000/download/"+f1).subscribe(
    (res:Response)=>{
//window.open(base64content);
var a=res.json();

console.log(a)
var base64content=a.assignment[0].file;

var filetype=a.assignment[0].filetype;
var win=window.open("http://10.10.5.69:3000/uploads/"+base64content)

//window.document.write('<iframe src="' + base64content + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');


});
}


// e.g This will open an image in a new window

  ngOnInit()
  {

            this.http.get("http://10.10.5.69:3000/").subscribe((res: Response)
    =>{

      this.assignment= res.json();
      var data=this.assignment;
      console.log(data)

      for(var i in data)
      {

        for(var j=0;j<data[i].assignment.length;j++)
        {
          var msg={
            teacherid:data[i].teacherid,
            schoolid:data[i].schoolid,
            class:data[i].class,
            section:data[i].section,
            subject:data[i].assignment[j].subject,
             description:data[i].assignment[j].description,
             title:data[i].assignment[j].title,
             file:data[i].assignment[j].file,
             filetype:data[i].assignment[j].filetype,
             date:data[i].date,
             id:data[i]._id


          }
      this.sub.push(msg)

  //    console.log(this.sub)

      }

    }

      //console.log(JSON.stringify(res.json()))


  )}
}
