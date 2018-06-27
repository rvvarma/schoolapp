import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response,Headers} from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { RouterModule, router, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-percentageview',
  templateUrl: './percentageview.component.html',
  styleUrls: ['./percentageview.component.css'],

})

export class PercentageviewComponent implements OnInit {

  a:any;
    S=[];

    id:any;
      Class=[];
      stu=[];
       hash={};
       count=0;
       count1=0;
       att=[];

class:any;
section:any;


  constructor (private activatedRoute: ActivatedRoute,private http: Http,private private _cookieService:CookieService) { }

//on submit function
onSubmit=function(data,data1){
/*for(var i in data)
{
     var id = data[i];
   this.hash[data[i]]="Present";
}*/







var ttt={
"teacherid":this.id,
"section":this.section,
"schoolid": "sc20",
"data":this.att
}
console.log("vcb"+JSON.stringify(ttt));



this.http.post("http://10.10.5.69:5000/attendancepost",ttt).subscribe(
(res:Response)=>{
this.ttt=res.json();
console.log(res.json());

}
)
alert ("are you sure  save the attendancedetails in databse");
               document.write ("sucessfully saved");
}

    // ADD CHART OPTIONS.
    pieChartOptions = {
        responsive: true
    }

    pieChartLabels =  ['Present', 'Absent', 'Leaves'];

    // CHART COLOR.
    pieChartColor:any = [
        {
            backgroundColor: [

            'rgba(67,204,127, 0.8)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        {
            data: []

        }
    ];



          ngOnInit () {


            console.log("cookie 1"+this.getCookie("id"));
            this.id=this.getCookie("tid");
            var a1=JSON.parse(this.getCookie("attendance"));


            var m1=[];

            Object.keys(a1).forEach(function(key) {


            var val = a1[key];
            console.log("check value "+val);

            //write hhtp post


            var someData ={


              "stid":key,

              "status":val

            };


            m1.push(someData);


            console.log("somw"+JSON.stringify(someData))

            });


              this.att=m1;

            console.log(JSON.stringify(a1))


            console.log("vhg"+this.att)


           for(var i in a1)
         {
            if(a1[i]=="Present")
           {
               this.count++;
              console.log("c:"+this.count)
           }
         else
         {
           this.count1++;
           console.log("bsahb")

         }
       }

            console.log("j:"+this.id)

            this.class=this.getCookie("class");
            this.section=this.getCookie("section");
            console.log(this.class+"kjmo")
            console.log(this.section)
            var f=[{ "data": [this.count,this.count1,0] }]
            this.pieChartData = f as any []


          }

          add1(){
            this.router.navigate(['/fetchteacherclass/'+this.getCookie("tid")]);
          }


          getCookie(key:string){
              return this._cookieService.get(key);
            }






  }
