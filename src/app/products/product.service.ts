import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IProduct } from './product'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log(`received ${JSON.stringify(data)}`))
            .catch(this.handleError);
    }


    handleError(error: HttpErrorResponse) {
        let errorMessage: string = '';

        if (error.error instanceof Error) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Server returned code ${error.status}. Message ${error.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}