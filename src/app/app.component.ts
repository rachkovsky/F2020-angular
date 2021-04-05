import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cartCounter: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getSubscription().subscribe((data) => {
      this.cartCounter = data;
    })
  }

}
