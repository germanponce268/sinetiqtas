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

  create(item : ProductMeli){
    if(!this.cartList.includes(item)){
      item.body.amount = 1;
      this.cartList.push(item);
    }else{
      item.body.amount++;
      console.log("Ya existe el elemento" , item.body.amount);
    }
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
      result = result + item.body.price * item.body.amount;
    })
    return result;
  }
}
