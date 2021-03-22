import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {  DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  @Input() menuItems: any = [];
  @Output() menuClicked = new EventEmitter();

  constructor(private data: DataService) {

  }
  ngOnChanges() {
    
  }

  ngOnInit(): void {
    console.log(this.menuItems);
  }

  ngOnDestroy() {

  }

  addCount() {
    this.data.setCounter();
  }

}
