import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent   {
public login = '';

// constructor(
//   private http: HttpClient
// ){}
// ngOnInit(){
//   console.log('ok ')
// this.getTest().subscribe((data:any)=>{console.log(data)})


// }
// getTest(){
//   return this.http.get('https://6508220a56db83a34d9bcd6d.mockapi.io/test')
// }
}
