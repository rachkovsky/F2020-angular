import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  private itemsInCart: number = 0;
  private itemsInCart$ = new BehaviorSubject<number>(0);

  public setItemsInCart(item: Object) {
    this.itemsInCart++;
    this.items.push(item);
    this.itemsInCart$.next(this.itemsInCart);
  }

  public getSubscription() {
    return this.itemsInCart$;
  }

  public getCartItems(): any[] {
    return this.items;
  }

  constructor() { }
}
