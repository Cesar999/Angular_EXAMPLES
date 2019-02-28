import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  students: any;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.onInit();
  }

  onInit() {
    this.appService.getStudents()
    .subscribe(
      (response) => {
        console.log(response);
        this.students = response;
      },
      (error) => console.log(error)
    );
  }

  onDelete(s) {
    console.log(s);
    this.appService.deleteStudent(s)
    .subscribe(
      (response) => {
        console.log(response);
        this.onInit();
      },
      (error) => console.log(error)
    );
  }

  onUpdate(s) {
    this.router.navigate(['/subject', s._id, s.name, s.subject, s.grade]);
  }

}
