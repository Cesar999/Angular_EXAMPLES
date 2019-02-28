import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:  HttpClient) { }

  storeStudent(student: any) {
     return this.http.post('http://localhost:3000/post', student);
  }

  getStudents() {
    return this.http.get('http://localhost:3000/get');
 }

 deleteStudent(student: any) {
  return this.http.delete('http://localhost:3000/delete' + '/' + student._id);
}

updateStudent(student: any) {
  return this.http.put('http://localhost:3000/update', student);
}

}
