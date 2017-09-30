import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle: string = 'Product Detail';
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct(+this._route.snapshot.paramMap.get('id'))
  }

  onBack() {
    this._router.navigate(['/products']);
  }

  getProduct(id: number): void {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = error
    )
  }



}
