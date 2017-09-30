import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  pageTitle: string = 'Product Detail';

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.productId = +this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  onBack() {
    this._router.navigate(['/products']);
  }



}
