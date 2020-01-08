import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private URL_SERVER = "http://localhost:3000/students";
  constructor(private http: HttpClient) {
  }

  get(){
    return this.http.get(this.URL_SERVER);
  }
}
