import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { RestApiService } from '../core/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentApi: RestApiService) { }
  student: Student;
  ngOnInit() {
    this.studentApi.get().subscribe((result:Student[]) => {
      this.student = result.slice(0, 1).pop();
    });
  }

}
