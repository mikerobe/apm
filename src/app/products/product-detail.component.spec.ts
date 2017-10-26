import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { SharedModule } from './../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MockActivatedRoute } from '../shared/mocks/activated-route';
import { MockRouter } from '../shared/mocks/router';
import { MockProductService } from './mocks/product.service';
import { ProductService } from './product.service';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let activeRoute: MockActivatedRoute;
  let router: MockRouter;
  let productService: MockProductService;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
    router = new MockRouter();
    productService = new MockProductService();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent,
        StarComponent,
        ConvertToSpacesPipe,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activeRoute },
        { provide: Router, useValue: router },
        { provide: ProductService, useValue: productService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  */
});
