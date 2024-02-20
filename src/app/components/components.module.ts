import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { CommonModule } from "@angular/common";
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "../app-routing.module";
import { ListItemsComponent } from './list-items/list-items.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchedItemComponent } from './searched-item/searched-item.component';


@NgModule({
    declarations:[
        HomeComponent,
        ItemComponent,
        HeaderComponent,
        ListItemsComponent,
        FooterComponent,
        SearchedItemComponent
    ],
    imports:[
        PrimeNgModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        HomeComponent,
        HeaderComponent,
        ItemComponent,
        ListItemsComponent,
        FooterComponent,
      ]
})

export class ComponentsModule{

}