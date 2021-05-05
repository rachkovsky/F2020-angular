import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import {  FormGroup, FormControl, Validators } from '@angular/forms';

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


  items: any[] = [];

  constructor(private cart: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cart.getCartItems();
    this.orderForm.valueChanges.subscribe((v) => {
      console.log(this.orderForm.controls['name'])
    })
  }

  onSubmit() {
    let result = Object.assign(
      this.orderForm.value, 
      { items: this.cart.getCartItems() }
    );
    console.log(result);
  }

  addOne(id: number) {
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

  removeOne(id: number){
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount--;
      }
      return el;
    });
    this.cart.setItemsInCart(this.items);
  }

}
