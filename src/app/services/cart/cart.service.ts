import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Array<Product> = JSON.parse(localStorage.getItem('items') as string) || [];
  private itemsInCart: number = this.calculateItemsInCart(this.items);
  private itemsInCart$ = new BehaviorSubject<number>(this.itemsInCart);

  public addItemInCart(item: Product) {
    if (this.items.length === 0) {
      item.amount = 1;
      this.items.push(item);
    } else {
      for (let i of this.items) {
        if (i.id === item.id) {
          i.amount ? i.amount++ : i.amount = 1;
        }
      }
    }

    let idsArray = this.items.map((item) => {
      return item.id;
    });
    if (!idsArray.includes(item.id)) {
      item.amount = 1;
      this.items.push(item);
    }

    this.itemsInCart = this.calculateItemsInCart(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsInCart$.next(this.itemsInCart);
  }

  public setItemsInCart(items: Array<Product>) {
    this.items = [...items];
    this.itemsInCart = this.calculateItemsInCart(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));
    this.itemsInCart$.next(this.itemsInCart);

  }

  public getSubscription() {
    return this.itemsInCart$;
  }

  public getCartItems(): any[] {
    return this.items;
  }

  private calculateItemsInCart(items: any[]): number {
      let result = items.reduce((total, value) => {
        return value.amount ? total + value.amount : total + 1;
      }, 0);
      console.log(result);
      return result;
  }

  constructor() { }
}
