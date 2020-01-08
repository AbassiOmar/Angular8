import { NgModule } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';


const routes: Routes = [
  { path: "student", component: StudentComponent }
];
@NgModule({
  declarations: [StudentComponent],
  imports: [
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
