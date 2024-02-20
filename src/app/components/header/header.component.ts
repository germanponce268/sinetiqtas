import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMeli } from 'src/app/model/producto-meli';
import { CartService } from 'src/app/services/cart.service';
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
  public products : ProductMeli[] = [];
  public selectedProduct! : ProductMeli;
  
  constructor(private meliService: MeliService, private itemService: ItemService, private router: Router, private route: ActivatedRoute, private cartService : CartService){}

  ngOnInit(){
    this.logo = '/assets/images/logo-light.png'; 
    this.search = new FormGroup({
      searchTerm : new FormControl<string>('')
    });
    this.products = this.cartService.getCartList();
  }

  onSearch(term: any){
    this.meliService.getProducts().subscribe((resp:ProductMeli[]) =>{
    let found = resp.find((item) => {
      return item.body.title.toLowerCase().includes(term.searchTerm);
    })
    console.log(found);
    this.itemService.setItem2(found);
    
    this.router.navigateByUrl('searched-item');
    })
    this.route.url.subscribe((url)=>{
      console.log(url);
      const currentUrl = url.join('/');
      console.log('url from header', currentUrl);  
    })
  }

  showCart(){
    console.log("el carro qlia")
  }

  total(): number{
    let result=0;
    this.cartService.getCartList().forEach(item=>{
      result = result + item.body.price
    })
    return result;
  }
}
