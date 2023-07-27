import { Component } from '@angular/core';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent {
rating:number =4.8;
finalTotal :number =250;
deliveryFee = '---';
setLocation : boolean =false;
setLocationAdress :string = '77 building, 23 street, Riyadh,  Saudi Arabia';
}
