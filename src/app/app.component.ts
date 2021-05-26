import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from './selectors/selectors.cart';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';

  cartCounter$!: Observable<any>;

  constructor(private store:  Store<AppState>) {
    this.cartCounter$ = this.store.select(selectCartCount);
  }

}
