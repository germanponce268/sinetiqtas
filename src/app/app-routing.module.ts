import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { SearchedItemComponent } from './components/searched-item/searched-item.component';
import { OrderSubmitComponent } from './components/order-submit/order-submit.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'item' , component: ItemComponent},
  {path:'list-items', component: ListItemsComponent},
  {path:'searched-item', component: SearchedItemComponent},
  {path:'order-submit', component:OrderSubmitComponent},
  {path:'' , redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
