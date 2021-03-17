import { Component, OnInit } from '@angular/core';
import {  DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private data: DataService) {}
  count?: any;

  menuItems = [
    {
      title: 'Home',
      path: '/'
    },
    
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Search',
      path: '/search'
    }
  ]

  ngOnInit() {
    this.data.getCounter().subscribe((data) => {
      this.count = data;
    });
  }

  onMenuClicked(data?: any) {
    //
  }
}
