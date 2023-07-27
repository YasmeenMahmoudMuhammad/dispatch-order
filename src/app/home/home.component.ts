import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
rating:number =4.8;
finalTotal :number =250;
deliveryFee = '---';
setLocation : boolean =false;
setLocationAdress :string = '77 building, 23 street, Riyadh,  Saudi Arabia';
}
