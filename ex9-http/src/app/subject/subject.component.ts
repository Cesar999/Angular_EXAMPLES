import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  grades = ['A', 'B', 'C', 'D', 'E', 'F'];
  subjects = ['Mathematics', 'Science', 'English', 'Social Sciences'];

  projectForm: FormGroup;
  flag: boolean;

  editMode: boolean;
  editText: string;

  ngOnInit() {
    if (this.route.snapshot.params.name) {
        this.editMode = true;
        this.editText = 'Edit';

        this.projectForm = new FormGroup({
          'name': new FormControl(this.route.snapshot.params.name, [Validators.required]),
          'subject': new FormControl(this.route.snapshot.params.subject, [Validators.required]),
          'grade': new FormControl(this.route.snapshot.params.grade, [Validators.required])
        });

        console.log(this.route.snapshot.params);

    } else {

      this.projectForm = new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'subject': new FormControl(null, [Validators.required]),
        'grade': new FormControl(null, [Validators.required])
      });

        this.editMode = false;
        this.editText = 'Submit';
    }

  }

  onSubmit() {
    console.log(this.projectForm);
    console.log(this.projectForm.value);

    if (this.editMode) {
      this.appService.updateStudent({...this.projectForm.value, _id: this.route.snapshot.params.id})
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => console.log(error)
      );
    } else {
      this.appService.storeStudent(this.projectForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => console.log(error)
      );
    }


  }

}



