import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { RestApiService } from 'src/app/core/services/rest-api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];

  constructor(private studentApi: RestApiService) { }

  ngOnInit() {
    this.studentApi.get().subscribe((students: Student[]) => {
      this.students = students.slice(0,10);
    });
  }

  getDetails(std: Student)
  {

  }
}
