import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sliderItems: Array<{ name: string, price: number}> = [
    {
      name: 'T-shirt',
      price: 30,
    },
    {
      price: 10,
      name: 'Ololo'
    },
    {
      name: 'Test',
      price: 50,
    },
    {
      name: 'Hat',
      price: 20,
    },
    {
      name: 'Pants',
      price: 70,
    },
    {
      name: 'Glasses',
      price: 170,
    },
  ]

  constructor() {}

  ngOnInit() {

  }
}
