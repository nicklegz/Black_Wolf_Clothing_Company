import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Products, sizes } from '../Data/MockData';
import { Product } from '../Interfaces/product';
import { Size } from '../Interfaces/Size';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor() { }

  getProducts(): Observable<Product[]>{
    return of(Products);
  }

  getProduct(id: string): Observable<Product> {
    const product = Products.find(p => p.Id.toString() === id.toString());
    return of(product!);
  }

  getSizes(): Size[]{
    return sizes;
  }
}
