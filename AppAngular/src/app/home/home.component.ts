import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Pagination } from '../models/pagination.model';
import { PaginationService } from '../services/pagination.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Student[];
  studentsHead: string[] = [];
  pager: Pagination = new Pagination();
  size: number;
  pagedItems: Student[];
  constructor(private studentApi: RestApiService,
    private paginationService: PaginationService, ) { }

  ngOnInit() {
    this.studentsHead = ["Name", "phone", "address", "avatar"];
    this.studentApi.get().subscribe((students: Student[]) => {
      this.students = students;
      this.size =10;
      this.setPage(1);
    });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // récupérer les pages
    this.pager = this.paginationService.getPagination(this.students.length, page, this.size);
    this.pagedItems = this.students.slice(this.pager.startIndex,this.pager.endIndex + 1,);
  }
}
