import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GalleriaResponsiveOptions } from 'primeng/galleria';
import { ProductMeli} from 'src/app/model/producto-meli';
import { MeliService } from 'src/app/services/meli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public flayer! : string;
    public flayer2! :string;
    public flayer3! : string;

    ngOnInit(){
      this.flayer = '/assets/images/flayer/flayer.png';
      this.flayer2 = '/assets/images/flayer/flayer2.png';
      this.flayer3 = '/assets/images/flayer/flayer3.png';
    }
}
