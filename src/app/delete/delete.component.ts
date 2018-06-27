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
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  day=[];
  bankName:any
    constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

      this. bankName = this.route.snapshot.params['id'];

  console.log("dsvsdvsd" +this.bankName)
  const url="http://10.10.5.42:5000/classesdelete"+"/"+this.bankName;



  this.http.delete(url,this.bankName).subscribe (
    (res:Response) =>{
      this.day=res.json();
      console.log(this.day)
    }
  )
    }
  }
