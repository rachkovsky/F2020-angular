import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any[] = [];

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.items = this.cart.getCartItems();
  }

}
