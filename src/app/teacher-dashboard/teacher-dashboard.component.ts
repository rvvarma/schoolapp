import { Component, OnInit } from '@angular/core';
import { RouterModule,Router , ActivatedRoute, Params} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor(private _cookieService:CookieService,private router: Router) { }

  ngOnInit() {
    console.log("cookie "+this.getCookie("id"));

  }
  add(){
    this.router.navigate(['/fetchteacherclass/'+this.getCookie("id")]);
  }
  getCookie(key: string){
      return this._cookieService.get(key);
    }
}
