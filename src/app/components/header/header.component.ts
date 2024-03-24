import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ProductMeli } from 'src/app/model/producto-meli';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import { MeliService } from 'src/app/services/meli.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('op') overlayPanel!: OverlayPanel;
  public logo! : string;
  public search! : FormGroup;
  public products : ProductMeli[] = [];
  public products2! : Set<ProductMeli>;
  public selectedProduct! : ProductMeli;
  private itemArray : [] = [];
  public itemOrder: Map<string, number> =  new Map<string,number>();
  
  constructor(private tokenService : TokenService, private meliService: MeliService, private itemService: ItemService, private router: Router, private route: ActivatedRoute, private cartService : CartService, private http : HttpClient, private messageService : MessageService){}

  ngOnInit(){ 
    this.logo = '/assets/images/logo-light.png'; 
    this.search = new FormGroup({
      searchTerm : new FormControl<string>('')
    });
    this.products = this.cartService.getCartList();
    this.tokenService.getToken().subscribe({next:(resp)=>{
      console.log(resp);
    },error:(error)=>console.log(error)});
  }

  onSearch(term: any){
    this.meliService.getProducts().subscribe({next:(resp:ProductMeli[])=>{
      let found = resp.find((item)=>{
        return item.body.title.toLowerCase().includes(term.searchTerm);
      })
      console.log(found);
      this.itemService.setItem2(found);
      this.router.navigateByUrl('searched-item');
    }, error:(error)=>{
      console.log(error);
      this.messageService.add({severity:"error", summary:"Servicio no disponible", detail:"Error " + error.status})
    }})
    
    this.route.url.subscribe((url)=>{
      console.log(url);
      const currentUrl = url.join('/');
      console.log('url from header', currentUrl);  
    })
  }

  showCart(){
    console.log("el carro qlia")
  }

  removeFromCart(itemId : string){
    this.products = this.cartService.delete(itemId);
    console.log(itemId);
    console.log(this.cartService.getCartList());
  }

  sendCart(){
    const data: { title: string; price: number; }[] = [];
    console.log("Enviando..");
    this.cartService.getCartList().map(item =>{
      this.itemOrder.set(item.body.title, item.body.price)
      
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.cartService.getCartList().forEach(item => {
    let {title, price} = item.body;
      data.push({title, price});
    })
    console.log(data);
    this.http.post("http://localhost:8080/mail/send",data,httpOptions)
              .subscribe(resp =>{
                console.log(resp);
              }, (error)=>console.log(error));
  }

  orderSubmit(){
    this.router.navigateByUrl('order-submit');
    this.overlayPanel.hide();
  }

  total(): number{
    let result=0;
    this.cartService.getCartList().forEach(item=>{
      result = result + item.body.price
    })
    return result;
  }
}
