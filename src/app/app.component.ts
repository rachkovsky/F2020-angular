import { Component } from '@angular/core';
import { CatalogService } from './services/catalog/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menSlides = [];

  constructor(private catalogService: CatalogService ) {}

  ngOnInit() {
    this.catalogService.getMenSlides().subscribe((data) => {
      this.menSlides = data;
    })
  }

}
