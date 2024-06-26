import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductMeli } from 'src/app/model/producto-meli';
import { ItemService } from 'src/app/services/item.service';
import { MeliService } from 'src/app/services/meli.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public flayer! : string;
    public flayer2! :string;
    public flayer3! :string;
    public flayer4! : string;
    public lunchera! : string;
    public lunchera1! : string;
    public lunchera2! : string;
    public matero! : string; 
    public telas! : string;
    public telas1! : string;
    public about! : string;
    public item! :string;
    public item2! :string;
    public statusOk : boolean = false;
  constructor(private router : Router, private meliService : MeliService,private itemService : ItemService, private messageService : MessageService){}

    ngOnInit(){
      this.flayer = '/assets/images/matero-mantel-bordo.jpeg';
      this.flayer2 = '/assets/images/flayer/flayer2.png';
      this.flayer3 = '/assets/images/flayer/flayer3.jpeg';
      this.flayer4 = '/assets/images/flayer/flayer4.png';
      this.lunchera = '/assets/images/lunchera.jpeg';
      this.lunchera1 = '/assets/images/estuche-verano.jpeg';
      this.lunchera2 = '/assets/images/flayer/lunchera2.jpeg'
      this.matero = '/assets/images/matero&mantel.png';
      this.telas = '/assets/images/telas.jpg';
      this.telas1 = '/assets/images/telas1.jpg';
      this.about = '/assets/images/about.jpg';
      this.item = 'MLA1389288575'
      this.item2 = 'MLA1524467234';
    }

    navigate(event :  any){
      this.meliService.getProduct(event).subscribe({next:(item:ProductMeli[])=>{
        console.log(item[0].body.title);
        this.itemService.setTitle(item[0].body.title);
        this.itemService.setImages(item[0].body.pictures);
        this.itemService.setImage(item[0].body.pictures[0].url);
        this.itemService.setItem(item[0]);
        this.router.navigateByUrl('item');
      },error:(error)=>{
        console.log(error);
        this.statusOk = error.ok;
        this.messageService.add({detail:"Error " + error.status ,severity:"error", summary:"Servicio No Disponible"})
      }});

    }
}
