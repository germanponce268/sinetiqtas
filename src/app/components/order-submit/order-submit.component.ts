import { Component } from '@angular/core';
import { ProductMeli } from 'src/app/model/producto-meli';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-submit',
  templateUrl: './order-submit.component.html',
  styleUrls: ['./order-submit.component.css']
})
export class OrderSubmitComponent {
  public items!: ProductMeli[];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.items = this.cartService.getCartList();
  }

  ordered(){
    return this.items.length;
  }

  total(){
   return this.cartService.total();
  }
}
