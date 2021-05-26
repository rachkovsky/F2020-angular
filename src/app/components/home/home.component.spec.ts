import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogService } from '../../services/catalog/catalog.service';
import { MockCatalogService } from '../../mocks/mockCatalogService.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{
        provide: CatalogService,
        useClass: MockCatalogService
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method seeAllProduct() works as expected', () => {
    component.isManVisible = false;
    component.isWomenVisible = false;
    component.seeAllProduct();
    expect(component.isManVisible).toBeTrue();
    expect(component.isWomenVisible).toBeTrue();
  });


});
