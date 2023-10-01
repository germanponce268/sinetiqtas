import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductMeli } from 'src/app/model/producto-meli';
import { ItemService } from 'src/app/services/item.service';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public logo! : string;
  public search! : FormGroup;
  
  constructor(private meliService: MeliService, private itemService: ItemService, private router : Router){}

  ngOnInit(){
    this.logo = '/assets/images/logo-light.png'; 
    this.search = new FormGroup({
      searchTerm : new FormControl<string>('')
    })
  }

  onSearch(term: any){
    this.meliService.getProduct().subscribe((resp:ProductMeli[]) =>{
    let found = resp.find((item) => {
      return item.body.title.toLowerCase().includes(term.searchTerm);
    })
    console.log(found);
    this.itemService.setItem2(found);
    this.router.navigateByUrl('searched-item');
    })
    
  }
}
