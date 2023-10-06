import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public flayer! : string;
    public flayer2! :string;
    public lunchera! : string;
    public lunchera1! : string;
    public lunchera2! : string;
    public matero! : string; 
    public telas! : string;
    public telas1! : string;
    public about! : string;

  constructor(private router : Router){}

    ngOnInit(){
      this.flayer = '/assets/images/flayer/flayer.png';
      this.flayer2 = '/assets/images/flayer/flayer2.png';
      this.lunchera = '/assets/images/lunchera.jpeg';
      this.lunchera1 = '/assets/images/flayer/lunchera1.png';
      this.lunchera2 = '/assets/images/flayer/lunchera2.jpeg'
      this.matero = '/assets/images/matero&mantel.png';
      this.telas = '/assets/images/telas.jpg';
      this.telas1 = '/assets/images/telas1.jpg';
      this.about = '/assets/images/about.jpg';
     
    }

    navigate(event :  any){
      console.log('el evento ', event)
      this.router.navigateByUrl('item');
    }
}
