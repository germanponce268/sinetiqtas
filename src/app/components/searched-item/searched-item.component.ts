import { Component } from '@angular/core';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { Picture, ProductMeli } from 'src/app/model/producto-meli';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-searched-item',
  templateUrl: './searched-item.component.html',
  styleUrls: ['./searched-item.component.css']
})
export class SearchedItemComponent {
  public image!: string|undefined;
  public title!: string|undefined;
  public images!: Picture[]|undefined;
  public item! : ProductMeli|undefined;
  public responsiveOptions!: GalleriaResponsiveOptions[];

  constructor(private itemService: ItemService){}


  ngOnInit(){
    this.item= this.itemService.getItem2();   
    this.title = this.itemService.getItem2()?.body.title;
    this.image = this.itemService.getItem2()?.body.pictures[0].url;
    this.images = this.itemService.getItem2()?.body.pictures;
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
