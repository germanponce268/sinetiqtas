import { Injectable } from '@angular/core';
import { Picture, ProductMeli } from '../model/producto-meli';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private imageSource! : string;
  private images!: Picture[];
  private title! :string;
  private item! : ProductMeli;
  private item2!: ProductMeli |undefined;

  constructor() { }


  setItem2(item: ProductMeli|undefined): void{
    this.item2 = item;
  }

  getItem2(): ProductMeli | undefined{
    return this.item2;
  }

  setItem(item: ProductMeli): void{
    this.item = item;
  }

  getItem(): ProductMeli{
    return this.item;
  }

  setImage(url : string): void{
   this.imageSource = url; 
  }

  setImages(images : Picture[]): void{
    this.images = images; 
   }

  getImage(): string{
    return this.imageSource;
  }
  
  getImages(): Picture[]{
    return this.images;
  }

  setTitle(title: string):void{
    this.title = title;
  }

  getTitle():string{
    return this.title;
  }
}
