import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AssignTeacherClassListComponent } from './assign-teacher-class-list/assign-teacher-class-list.component';
import { EditAssignTeacherClassListComponent } from './edit-assign-teacher-class-list/edit-assign-teacher-class-list.component';

import { CookieService } from 'angular2-cookie/core';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AssignTeacherClassListComponent,
    EditAssignTeacherClassListComponent,
    TeacherdashboardComponent,
    TeacherStudentListComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path: 'login'
        ,component: LoginComponent
      },
      {
         path: 'admindashboard'
        ,component: AdminDashboardComponent
      }
      ,{
        path:'admin/teacherlist'
        ,component: AssignTeacherClassListComponent
      },
      {
        path:'admin/teacherlist/edit/:id'
        ,component: EditAssignTeacherClassListComponent
      }
      ,
      {
        path:'teacherdashboard'
        ,component: TeacherdashboardComponent
      }
      ,
      {
        path:'teacherdashboard/studentlist'
        ,component: TeacherStudentListComponent
      }
    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
