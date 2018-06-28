import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';



@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute,private http: Http,private _cookieService:CookieService) {
    }
    onClickSubmit(data) {
      }

//post registration details
      onSubmit=function(account)
      {
        var dat=JSON.stringify(account)
        //alert(dat)
        alert("created")
        console.log(dat)

      var url="http://10.10.5.54:4000/createaccount"
      this.http.post(url,account).toPromise()
          .then(res => console.log(account,<any[]> res.json()))
          .then(data => { return data; });
      }

  ngOnInit(){
  }

}
