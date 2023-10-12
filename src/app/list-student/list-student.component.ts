import { Component } from '@angular/core';
import { StudentService, studentResponse } from '../student.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent {
  isLoading=false;
  constructor(
    private studentService: StudentService,
    private modal: NzModalService
  ){}

  students! : studentResponse[];
  ngOnInit(){
    this.getStudent()
  }
  getStudent(){
    this.isLoading=true;
    this.studentService.getStudent().subscribe((res:any)=>{

      this.students=res;
      console.log(this.students);

      this.isLoading=false


    });
  };
  nameDel! :string;
  deleteStudent(event:any,id:number){

    this.studentService.getStudents(id).subscribe((res:any)=>{

      this.nameDel = res.name;
      this.modal.confirm({
        nzTitle: `<i>bạn có muốn xóa thông tin học sinh ${this.nameDel}</i>`,
        nzContent: '<b>chọn:</b>',
        nzOkText: 'Đồng ý',
        nzOkType: 'primary',
        nzOkDanger: true,

        nzOnOk: () => this.studentService.deleteStudent(id).subscribe((res:any)=>{
          this.getStudent();
        }),
        nzCancelText: 'Hủy',

      });
    });







    // this.modal.confirm({
    //   nzTitle: 'Are you sure delete this task?',
    //   nzContent: '<b style="color: red;">Some descriptions</b>',
    //   nzOkText: 'Yes',
    //   nzOkType: 'primary',
    //   nzOkDanger: true,
    //   nzOnOk: () =>      this.studentService.deleteStudent(id).subscribe((res:any)=>{
    //     this.getStudent();
    //   }),
    //   nzCancelText: 'No',
    //   nzOnCancel: () => console.log('Cancel')
    // });
    // if(confirm('are you want delete this data?')){
    //   event.target.innerText = "Deleting....";
    //   this.studentService.deleteStudent(id).subscribe((res:any)=>{
    //     this.getStudent();
    //     alert('Delete succession')
    //   })
    // }
  }
}
