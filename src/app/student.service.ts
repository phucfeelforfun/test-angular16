import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  saveStudent(inputData: object){

    return this.httpClient.post(`https://6508220a56db83a34d9bcd6d.mockapi.io/student`,inputData)
  }
}
