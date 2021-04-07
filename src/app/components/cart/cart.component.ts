import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items: any[] = [];

  constructor(private cart: CartService) {
  }

  ngOnInit(): void {
    this.items = this.groupItems(this.cart.getCartItems());

  }

  groupItems(arr: any[]): any[] {
    const result: any[] = [];
    const ids: any[] = [];
    for (let item of arr) {
      if (ids.includes(item.id)) {
        result.forEach((el, i) => {
          if (el.id === item.id) {
            result[i].amount++;
          }
        })
      } else {
        result.push({...item, amount: 1 });
        ids.push(item.id);
      }
    }
    return result;
  }

  addOne(id: number) {
    this.items = this.items.map((el) => {
      if (el.id === id) {
        el.amount++
      }
      return el;
    })
  }

}
