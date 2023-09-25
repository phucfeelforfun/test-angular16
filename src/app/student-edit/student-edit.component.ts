import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';
import { finalize } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  studentId: any;
  student: any;
  isLoading = false;
  submitted = false;
  formData!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private location: Location,
    private route: ActivatedRoute

  ) { }
  backClicked() {
    this.location.back();
  }

  ngOnInit(): void {

    this.isLoading = true;

    this.studentId = this.route.snapshot.paramMap.get('id');

    this.studentService.getStudents(this.studentId).subscribe((res: any) => {
      this.student = res;
      this.isLoading = false
      this.formData = this.fb.group({
        name: [this.student.name, [Validators.required]],
        email: [this.student.email, [Validators.required, Validators.email]],
      });
    })

  }


  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }
  saveStudent() {


    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }
    else {

      var inputData = {
        name: this.formData.value.name,
        email: this.formData.value.email,
      }
      console.log(inputData);


      this.isLoading = true;
      this.studentService.updateStudent(inputData, this.studentId).subscribe(
        {
          next: (res: any) => {
            this.isLoading = false;
            this.location.back();
          }
        }
      );
    }

  }
}
