import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slides: any[] = [];
  @Input() header: string ='';

  // sliderItems: Array<{ name: string, price: number}> = [

  // ]

  @ViewChild('nav', {read: DragScrollComponent}) ds!: DragScrollComponent;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.ds.moveTo(0);
  }

  moveLeft() {
    this.ds.moveLeft();
  }
  moveRight() {
    this.ds.moveRight();
  }

}
