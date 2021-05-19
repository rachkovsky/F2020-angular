import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../actions/actions.cart';
import { AppState } from '../../reducers';
import { selectCartCount, selectCartItems } from '../../selectors/selectors.cart';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    address: new FormControl(''),
    paymentType: new FormControl('')
  });

  items$ = this.store.select(selectCartItems);
  cartAmount$ = this.store.select(selectCartCount);

  constructor(
    private cart: CartService,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {}

  onSubmit() {
    let result = Object.assign(
      this.orderForm.value, 
      { items: this.cart.getCartItems() }
    );
    console.log(result);
  }

  addOne(id: string | number) {
    this.store.dispatch(addToCart());

  //   this.items = this.items.map((el) => {
  //     if (el.id === id) {
  //       el.amount++;
  //     }
  //     return el;
  //   });
  //   this.cart.setItemsInCart(this.items);
  }

  removeOne(id: string | number){
  //  this.items = this.items.map((el) => {
  //     if (el.id === id) {
  //       el.amount--;
  //     }
  //     return el;
  //   });
  //   this.cart.setItemsInCart(this.items);
  }

}
