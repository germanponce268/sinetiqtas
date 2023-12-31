import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { Picture, ProductMeli} from 'src/app/model/producto-meli';
import { ItemService } from 'src/app/services/item.service';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  public imgMeli! : string;
  public title! : string; 
  public price! : string;
  public urlMeli!: string;
  public productoMeli! : ProductMeli[];
  public images : string[] = [];
  public responsiveOptions! : GalleriaResponsiveOptions[];
  public visible : boolean = false;
  public position : "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = `left`;
    constructor(private meliService: MeliService, private router : Router,private itemService: ItemService) { }
  ngOnInit(): void {   
    
    this.meliService.getProducts().subscribe(resp =>{
    this.productoMeli = resp;
    console.log(this.productoMeli);
    this.imgMeli = resp[0].body.pictures[0].url;
    this.title = resp[0].body.title;
    this.price = resp[0].body.price;
    this.urlMeli = resp[0].body.permalink;
    console.log('las images', this.images);
    console.log(resp[1].body)
    } )
  }
  showDescription(item : ProductMeli){
    this.itemService.setTitle((item.body.title));
    this.itemService.setImages(item.body.pictures);
    this.itemService.setImage(item.body.pictures[0].url);
    this.itemService.setItem(item);
    this.router.navigateByUrl('item');
  }
  navigateToMeLi() : void{
    console.log(this.urlMeli);
    this.router.navigateByUrl(this.urlMeli);    
  }
  navigate(){
    this.router.navigateByUrl('home')
  }
}
