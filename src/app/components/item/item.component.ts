import { Component } from '@angular/core';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { Picture, ProductMeli } from 'src/app/model/producto-meli';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  public image!: string;
  public title!: string;
  public images!: Picture[];
  public item! : ProductMeli;
  public responsiveOptions!: GalleriaResponsiveOptions[];

  constructor(private itemService: ItemService){}


  ngOnInit(){
    this.item = this.itemService.getItem();
    this.title = this.itemService.getTitle();
    this.image = this.itemService.getImage();
    this.images = this.itemService.getImages();
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }
}
