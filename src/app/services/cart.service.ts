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

  create(product : ProductMeli){
    this.cartList.push(product);
  }

  delete(itemId:string):ProductMeli[]{
    return this.cartList = this.cartList.filter(item=>item.body.id !== itemId);
  }

  getCartList(): ProductMeli[]{
    return this.cartList;
  }

  total(): number{
    let result=0;
    this.getCartList().forEach(item=>{
      result = result + item.body.price
    })
    return result;
  }
}
