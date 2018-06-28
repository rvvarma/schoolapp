import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, ActivatedRoute, Params} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AssignTeacherClassListComponent } from './assign-teacher-class-list/assign-teacher-class-list.component';
import { EditAssignTeacherClassListComponent } from './edit-assign-teacher-class-list/edit-assign-teacher-class-list.component';

import { CookieService } from 'angular2-cookie/core';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { TeacherStudentListComponent } from './teacher-student-list/teacher-student-list.component';


import { AssignclasstostudentComponent } from './assignclasstostudent/assignclasstostudent.component';
import { FetchTeacherClassComponent } from './fetch-teacher-class/fetch-teacher-class.component';
import { PercentageviewComponent } from './percentageview/percentageview.component';

import { FullCalendarModule } from 'ng-fullcalendar';
import { CalenderComponent } from './calender/calender.component';
import { AttendanceviewforadminComponent } from './attendanceviewforadmin/attendanceviewforadmin.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { FooComponent } from './foo/foo.component';
import { Foo1Component } from './foo1/foo1.component';
import { GetStartComponent } from './get-start/get-start.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { RegisterComponent } from './register/register.component';
import { ClassComponent } from './class/class.component';
import { SchoolComponent } from './school/school.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { ParentdashboardComponent } from './parentdashboard/parentdashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AssignmentviewComponent } from './assignmentview/assignmentview.component';
import { PresentviewComponent } from './presentview/presentview.component';
import { NewteacherComponent } from './newteacher/newteacher.component';
import { TeacherpasswordComponent } from './teacherpassword/teacherpassword.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminPasswordComponent } from './admin-password/admin-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AssignTeacherClassListComponent,
    EditAssignTeacherClassListComponent,
    TeacherdashboardComponent,
    TeacherStudentListComponent,
    AssignclasstostudentComponent,
    FetchTeacherClassComponent,
    PercentageviewComponent,
    CalenderComponent,
    AttendanceviewforadminComponent,
    AddteacherComponent,
    FooComponent,
    Foo1Component,
    GetStartComponent,
    OwnerDetailsComponent,
    RegisterComponent,
    ClassComponent,
    SchoolComponent,
    EditComponent,
    DeleteComponent,
    RootComponent,
    HomeComponent,
    ParentdashboardComponent,
    CreateAccountComponent,
    ChangePasswordComponent,
    AssignmentviewComponent,
    PresentviewComponent,
    NewteacherComponent,
    TeacherpasswordComponent,
    TeacherDashboardComponent,
    AdminDetailsComponent,
    AdminPasswordComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    HttpModule,
    FullCalendarModule,
    ChartsModule,
    HttpClientModule,

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
           path: 'admin',component:  AssignclasstostudentComponent

                 },
      {
        path:'teacherdashboard/studentlist' ,component: TeacherStudentListComponent
      },

      {
          path:'calender',component: CalenderComponent
      },


 {  path:'attendanceforadmin',component:AttendanceviewforadminComponent
},
{  path:'getstart',component:GetStartComponent
},

{  path:'class',component:    ClassComponent

},

{  path:'ownerdetails',component:    OwnerDetailsComponent

},
{  path:'signup',component:    RegisterComponent

},
{  path:'addteacher',component:AddteacherComponent
},
{
      path:'first',component:HomeComponent
        },
    {
  path:'school',component:SchoolComponent
    },

        {
          path:'edit/:id',component:EditComponent
            },
            {
              path:'delete/:id',component:DeleteComponent
            },
            {
              path:'root',component:RootComponent
            },
            {
              path:'parentdashboard',component:ParentdashboardComponent
                },
                {
                        path:'createaccount', component:CreateAccountComponent
                      },
                      {
                        path:'changepassword/:id', component:ChangePasswordComponent
                      },
                      {
                   path: 'teacherdashboard',component: TeacherDashboardComponent
                    },

                      {

                          path: 'fetchteacherclass',component: FetchTeacherClassComponent
                       },

                      {
                        path:'percentage', component:PercentageviewComponent
                      },
                      {
                        path:'assignment', component:AssignmentviewComponent
                      },
                      {
                        path:'present', component:PresentviewComponent
                      },
                      {
          path:'teacherpassword/:id', component:TeacherpasswordComponent
        },

{
          path:'newteacher', component:NewteacherComponent
        },

      {
          path:'admindetails', component:AdminDetailsComponent
        },
        {
          path:'adminpassword/:id', component:AdminPasswordComponent
        }


    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
