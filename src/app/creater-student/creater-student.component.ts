import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';
import { finalize } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-creater-student',
  templateUrl: './creater-student.component.html',
  styleUrls: ['./creater-student.component.scss']
})
export class CreaterStudentComponent implements OnInit {
  listStudent: any;
  isLoading = false;
  submitted = false;
  formData!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private location: Location

  ) { }
  backClicked() {
    this.location.back();
  }
  ngOnInit(): void {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }
  saveStudent() {

    console.log(this.isLoading);
    this.submitted = true;
    if (this.formData.invalid) {
      return;
    }
    else {
      this.isLoading = true;
      this.studentService.saveStudent(this.formData.value).subscribe(
        {
        next: (res: any) => {
          this.isLoading = false;
          console.log(this.isLoading);
          this.formData.reset();
          this.location.back();


        }
      }
      );
    }

  }
}
