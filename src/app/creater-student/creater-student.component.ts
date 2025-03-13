import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { CurrencyPipe, Location } from '@angular/common';
import { debounceTime, finalize, tap } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NzUploadFile, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { Subscription } from 'rxjs';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);

  });
@Component({
  selector: 'app-creater-student',
  templateUrl: './creater-student.component.html',
  styleUrls: ['./creater-student.component.scss'],
  providers: [CurrencyPipe],
})
export class CreaterStudentComponent implements OnInit {
  previewImage: string | undefined = '';
  previewVisible = false;
  uploaded: boolean = false;


    // Trả về một đối tượng Subscription (hoặc Observable) - có thể là null nếu không cần

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);

    }

    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;


  };


  fileList: NzUploadFile[] = []

  listStudent: any;
  isLoading = false;
  submitted = false;
  formData!: FormGroup;
  isSaleEventVisible: boolean = false;

  toggleSaleEventVisibility() {
    this.isSaleEventVisible = !this.isSaleEventVisible;
    console.log(this.isSaleEventVisible);
    const fieldsToUpdate = ['fromdate', 'enddate', 'per'];

  fieldsToUpdate.forEach(field => {
    const control = this.formData.get(field);
    if (control) {
      control.updateValueAndValidity(); // Cập nhật trạng thái hợp lệ của field
    }
  });
  }
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private location: Location,
    private currencyPipe: CurrencyPipe,
    private http: HttpClient

  ) { }
  backClicked() {
    // this.location.back();
    console.log(this.uploaded);
    console.log(this.previewImage);

  }
  isFromdateRequired(control: AbstractControl) {
    if (this.isSaleEventVisible) {
      // If 'isSaleEventVisible' is true, 'fromdate' is required
      return Validators.required(control);
    } else {
      // If 'isSaleEventVisible' is false, 'fromdate' is not required
      return null;
    }
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: [null, [Validators.required]],
      num: ['', [Validators.required]],
      preview:[''],

      fromdate: ['', [this.isFromdateRequired.bind(this)]],
      enddate: ['', [this.isFromdateRequired.bind(this)]],
      per: ['', [this.isFromdateRequired.bind(this)]],
    });


    this.formData.get('price')?.valueChanges
      .pipe(
        debounceTime(500),
        tap((value) => {
          console.log(value);
          this.formData.controls['price'].patchValue(
            this.currencyPipe.transform(this.parseNumber(value), 'VND', ''),
            { emitEvent: false }
          );
        })
      )
      .subscribe();

  }

  parseNumber(str: string): number | string {
    const regx = /[^0-9]/g;
    return str ? str.replace(regx, '') : '';
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formData.controls;
  }
  saveStudent() {
    // console.log(this.fileList);



    console.log(this.formData.value);
    console.log(this.isLoading);

    
    this.submitted = true;

    console.log(this.formData.invalid);
    if (this.formData.invalid) {
      return;
    }
    else {
      this.isLoading = true;
      this.studentService.saveStudent(this.formData.value).subscribe(
        {
          next: (res: any) => {
            console.log(this.formData.value.preview);

            this.isLoading = false;

            this.formData.reset();
            this.location.back();
          }
        }
      );
    }

  }

}
