import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public num = 12;
  public name = '';
  public user = '';
  public distrists=["chose district"];
  public cities = [
    {
      city:"chose city",
      district: ["chose district"]
    },
    {
      city: "an giang",
      district: [
        "Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"
      ]
    },
    {
      city: "Bà Rịa - Vũng Tàu",
      district: [
        "Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"
      ]
    }
  ]
  public traicay = [
    { ten: 'tao', gia: 12, hagia: true },
    { ten: 'vai', gia: 12, hagia: false },
    { ten: 'man', gia: -12, hagia: false },
    { ten: 'oi', gia: 12, hagia: true },
  ]

  public setname(): void {
    console.log(this.user);
    this.name = this.user;
  }
  public resetname(): void {
    console.log(this.user);
    this.name = '';
    this.user ='';
  }
  public changeCity(event: any){

    const city = event.target.value;
    this. distrists = this.cities.find(data => data.city ===city)?.district || [];
  }
}
