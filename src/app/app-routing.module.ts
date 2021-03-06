import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Home'
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      pageTitle: 'Cart'
    }
    
  },
  {
    path: 'details/:id',
    component: ItemDetailComponent,
  },
  {
    path: '**', 
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
