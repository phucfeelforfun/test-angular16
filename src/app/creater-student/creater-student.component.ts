import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import {  Validators,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creater-student',
  templateUrl: './creater-student.component.html',
  styleUrls: ['./creater-student.component.scss']
})
export class CreaterStudentComponent {

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ){}


  name!: string
  course!: string
  email!: string
  phone!: string
  errors: any = [];
  saveStudent(){
    var inputDat ={
      name: this.name,
      course: this.course,
      email: this.email,
      phone: this.phone
    }
    this.studentService.saveStudent(inputDat).subscribe({
      next: (res: any)=>{
        console.log(res,'response');
        
        this.name='';
        this.course='';
        this.email='';
        this.phone='';
    },
      error: (err: any) =>{
        this.errors = err.error.errors;
        console.log(err.error.errors,'error');
        
      }
    });
  }
}
