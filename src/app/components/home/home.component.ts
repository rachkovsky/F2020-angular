import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menSlides = [];
  womenSlides = [];

  isManVisible = true;
  isWomenVisible = true;

  constructor(private catalogService: CatalogService ) {}

  ngOnInit() {
    this.catalogService.getMenSlides().subscribe((data) => {
      this.menSlides = data;
    });

    this.catalogService.getWomenSlides().subscribe((data) => {
      this.womenSlides = data;
    })
  }

  seeAllProduct() {
    this.isManVisible = true;
    this.isWomenVisible = true;
  }
}
