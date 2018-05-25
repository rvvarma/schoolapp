import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cookieService:CookieService,private router: Router) { }
  onClickSubmit(data) {

    this._cookieService.put('id', data.UNAME);
        console.log("Set Test Cookie as Test "+ JSON.stringify(data));
  console.log("cookie "+ this.getCookie("id"));
  this.router.navigate(['/teacherdashboard']);
      }
  ngOnInit() {
  }
  getCookie(key: string){
      return this._cookieService.get(key);
    }
}
