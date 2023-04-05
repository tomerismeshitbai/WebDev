import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {
  selectedProduct?:string;

 onSelect(a:string){
  this.selectedProduct=a;
 }

 onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
}