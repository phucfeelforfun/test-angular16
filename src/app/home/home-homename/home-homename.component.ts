import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-homename',
  templateUrl: './home-homename.component.html',
  styleUrls: ['./home-homename.component.scss']
})
export class HomeHomenameComponent {
@Input() name=''
@Input() user='';
@Output() users = new EventEmitter<string>();// important

  // truyền user từ con lên cha( Output)
  // +
  save(){
    this.users.emit(this.user);
  }
}
