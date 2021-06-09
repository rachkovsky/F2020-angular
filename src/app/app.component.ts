import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from './selectors/selectors.cart';
import { AppState } from './reducers';
import { Router, ActivationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-app';

  cartCounter$!: Observable<any>;

  constructor(private store:  Store<AppState>, private router: Router, private titleService: Title) {
    this.cartCounter$ = this.store.select(selectCartCount);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        let data = event.snapshot.data;
        console.log(data);
        this.titleService.setTitle(data['pageTitle'] || '_your_default_title_');
      }
    })
  }

}
