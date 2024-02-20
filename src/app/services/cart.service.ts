import { Injectable } from '@angular/core';
import { MeliService } from './meli.service';
import { ProductMeli } from '../model/producto-meli';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList : ProductMeli[] = [];  

  constructor(private meliService:MeliService) { }

  addToCart(product : ProductMeli){
    this.cartList.push(product);
  }

  getCartList(): ProductMeli[]{
    return this.cartList;
  }
}
