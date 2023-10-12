import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface studentResponse {
  id: number,
  type: string,
  name: string,
  price: number,
  num:number,
  preview: string,

  fromdate: string,
  enddate: string,
  per: number,
}
export interface studentResponseType {
  status : number,
  students : studentResponse[]
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
getStudents(studentId:number){
  return this.httpClient.get(`https://6508220a56db83a34d9bcd6d.mockapi.io/student/${studentId}`)
}
  getStudent(){
    return this.httpClient.get<studentResponseType>(`https://6508220a56db83a34d9bcd6d.mockapi.io/student`)
  }
  saveStudent(inputData:any){

    return this.httpClient.post(`https://6508220a56db83a34d9bcd6d.mockapi.io/student`,inputData)
  }
  updateStudent(data:object,id:number){
    return this.httpClient.put(`https://6508220a56db83a34d9bcd6d.mockapi.io/student/${id}`,data)
  }
  deleteStudent(id:number){
    return this.httpClient.delete(`https://6508220a56db83a34d9bcd6d.mockapi.io/student/${id}`);
  }
}
