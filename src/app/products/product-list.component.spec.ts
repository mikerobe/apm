import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ProductService } from './product.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let nativeElement: HTMLElement;
  const products = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
  ];

  beforeEach(async(() => {
    const mockProductService: { [key: string]: jasmine.Spy; } = jasmine.createSpyObj('productService',
      {
        getProducts: Observable.of(products),
      });

    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SharedModule,
      ],
      providers: [
        { provide: ProductService, useValue: mockProductService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right number of products', () => {
    expect(nativeElement.querySelectorAll('tbody > tr').length).toBe(2);
  });

  it('should display the expected product names', () => {
    const nameColumn: Array<HTMLElement> = [].slice.call(nativeElement.querySelectorAll('tbody > tr > td:nth-child(2)'));
    expect(nameColumn.map(x => x.innerText.trim())).toEqual(products.map(x => x.productName));
  });

});
